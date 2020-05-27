import React, { useState } from 'react';
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
	const [notifications, setNotifications] = useState(0)

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
						{routes ? <Profile setNotifications = {setNotifications} /> : <Register />}
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
