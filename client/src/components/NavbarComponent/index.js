import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import './style.css';

function NavbarComponent(props) {
	const history = useHistory();

	function NoToken() {
		props.setRoutes(false);
		return (
			<div className="no-token-div">
				<li className="SignInLinks">
					<Link className="link-tag" to="/register">Register</Link>
				</li>
				<li className="SignInLinks">
					<Link className="link-tag" to="/login">Login</Link>
				</li>
			</div>
		);
	}
	function HasToken() {
		props.setRoutes(true);
		return (
			<div className="has-token-div">
				<li className="SignInLinks">
					<Link className="link-tag" to="/profile">Saved List</Link>
				</li>
				<li className="SignInLinks">
					<Link className="link-tag" to="/search">Search</Link>
				</li>

				<li className="SignInLinks">
					<button onClick={logOut}>Log out</button>
				</li>
			</div>
		);
	}

	function logOut(event) {
		event.preventDefault();
		localStorage.removeItem('usertoken');
		history.push('./');
	}
	return (
		<Navbar collapseOnSelect expand="lg" bg="" variant="dark">
			<Navbar.Brand className="Brand">
				<img src={process.env.PUBLIC_URL + '/Brand.png'} width="100" height="50" alt="Real Deals" />
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
				<Nav className="nav-link-components">
					<ul>{localStorage.usertoken ? <HasToken /> : <NoToken />}</ul>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default NavbarComponent;
