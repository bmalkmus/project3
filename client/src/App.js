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
	const [ routes, setRoutes ] = useState();

	// useEffect(() => {
	// 	if (localStorage.usertoken) {
	// 		setRoutes(true);
	// 	} else {
	// 		setRoutes(false);
	// 	}
	// },[routes]);

	function HasToken() {

		return (
			<div>
				<Switch>
					<Route exact path="/" component={Landing} />
					<Route exact path="/register" component={Register} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/profile" component={Profile} />
					<Route exact path="/search" component={Search} />
				</Switch>
			</div>
		);
	}

	function NoToken() {
		return (
			<div>
				<Switch>
					<Route exact path="/" component={Landing} />
					<Route exact path="/register" component={Register} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/profile" component={Register} />
					<Route exact path="/search" component={Register} />
				</Switch>
			</div>
		);
	}

	return (
		<Router>
			<div className="main-container">
				<header>
					<NavbarComponent setRoutes={setRoutes} routes = {routes} />
				</header>
				{routes ? <HasToken /> : <NoToken />}
			</div>
		</Router>
	);
}

export default App;
