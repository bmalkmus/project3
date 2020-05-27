import React, { useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import API from "./components/utils/API";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import NavbarComponent from './components/navbar';
import Landing from './components/Landing';
import Login from './components/Login';
import Profile from './components/Profile';
import Register from './components/Register';
import Search from './components/Search';
// import Button from 'react-bootstrap/Button';
import Badge from "react-bootstrap/Badge";

import './App.css';

function App() {
	const [ routes, setRoutes ] = useState(false);
	const [notifications, setNotifications] = useState(0);
	const [total, setTotal] = useState(0.00)
    const [ Saved, setSaved ] = useState([]);
	let token;
	let decoded = {email: "no email"}

	// const history = useHistory();

	
	function NoToken() {
		if (routes === true){
			setRoutes(false);
		}
		return (
			<div>
				<li className="SignInLinks">
					<Link className="link-tag" to="/register" id = "register1">
						Register
					</Link>
				</li>
				<li className="SignInLinks">
					<Link className="link-tag" to="/login" id = "login1">
						Login
					</Link>
				</li>
			</div>
		);
	}
	function HasToken() {
		if (routes === false) {
			setRoutes(true)
		}

		return (
			<div>
				<li className="SignInLinks">
					<Link className="link-tag" to="/profile" id = "saved1">
						Saved List
						<Badge className = "notification" variant = "light">{notifications}</Badge>
						<span className="sr-only">Saved Items</span>
					</Link>
				</li>
				<li className="SignInLinks">
					<Link className="link-tag" to="/search" id ="search1">
						Search
					</Link>
				</li>

				<li className="SignInLinks">
					<Link onClick = {logOut} className = "link-tag" to= "/" id = "logout">Log Out</Link>
				</li>
			</div>
		);
	}

	function logOut(event) {
		event.preventDefault();
		console.log("logout click");
		localStorage.removeItem('usertoken');
		setRoutes(false)
	}

    function getList() {
		API.UserList()
		.then((res) => {
			if(localStorage.usertoken){
				 token = localStorage.usertoken;
				 decoded = jwt_decode(token);
			}
			const Data = res.data;
			const Save = []
			let Total = 0
			for (let i = 0; i < Data.length; i ++){
				if (Data[i].user === decoded.email){
					let price = Number(Data[i].price)
					console.log(Data[i])
					Save.push(Data[i])
					Total = Total + price	
				}
			}
			setNotifications(Save.length);
			setSaved(res.data);
			setTotal(Total)
		})
		.catch(err => console.log(err))
	};
	
	
    useEffect(() => {
		if (localStorage.usertoken){
			setRoutes(true)
		}
	}, []);	

    useEffect(() => {
		getList();
	}, [routes, notifications])	

	return (
		<Router>
			<div className="main-container">
				<header>
					<NavbarComponent HasToken = {HasToken} NoToken = {NoToken} notifications = {notifications} routes = {routes}/>
				</header>
				<Switch>
					<Route exact path={["/"]}>
						<Landing/>
					</Route>
					<Route exact path={["/register"]}>
                          <Register/>
					</Route>
					<Route exact path={["/login"]}>
                          <Login setRoutes = {setRoutes} />
					</Route>
					<Route exact path={["/profile"]}>
						{routes ? <Profile  total = {total} Saved = {Saved} getList = {getList} /> : <Register />}
					</Route>
					<Route exact path={["/search"]}>
						{routes ? <Search notifications = {notifications} setNotifications = {setNotifications}/> : <Register />}
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
