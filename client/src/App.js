import React, { useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import API from "./components/utils/API";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavbarComponent from './components/navbar';
import Landing from './components/Landing';
import Login from './components/Login';
import Profile from './components/Profile';
import Register from './components/Register';
import Search from './components/Search';

import './App.css';

function App() {
	const [ routes, setRoutes ] = useState(false);
	const [notifications, setNotifications] = useState(0);
    const [ Saved, setSaved ] = useState([]);
	let token;
	let decoded = {email: "no email"}

    function getList() {
		API.UserList()
		.then((res) => {
			if(localStorage.usertoken){
				 token = localStorage.usertoken;
				 decoded = jwt_decode(token);
			}
			const Data = res.data;
			const Save = []
			for (let i = 0; i < Data.length; i ++){
				if (Data[i].user === decoded.email){
					Save.push(Data[i])	
				}
			}
			setNotifications(Save.length);
			setSaved(res.data);
		})
		.catch(err => console.log(err))
    };

    useEffect(() => {
		getList();
	}, [routes, notifications])	

	return (
		<Router>
			<div className="main-container">
				<header>
					<NavbarComponent notifications = {notifications} setRoutes={setRoutes} routes = {routes} />
				</header>
				<Switch>
					<Route exact path={["/"]}>
						<Landing/>
					</Route>
					<Route exact path={["/register"]}>
                          <Register/>
					</Route>
					<Route exact path={["/login"]}>
                          <Login/>
					</Route>
					<Route exact path={["/profile"]}>
						{routes ? <Profile  Saved = {Saved} getList = {getList} /> : <Register />}
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
