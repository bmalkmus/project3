import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button'

function NavbarComponent(props) {
	const history = useHistory();

	function NoToken() {
		props.setRoutes(false);
		return (
			<div>
				<li className="SignInLinks">
					<Link className="link-tag" to="/register">
						Register
					</Link>
				</li>
				<li className="SignInLinks">
					<Link className="link-tag" to="/login">
						Login
					</Link>
				</li>
			</div>
		);
	}
	function HasToken() {
		props.setRoutes(true);
		return (
			<div>
				<li className="SignInLinks">
					<Link className="link-tag" to="/profile">
						Saved List
					</Link>
				</li>
				<li className="SignInLinks">
					<Link className="link-tag" to="/search">
						Search
					</Link>
				</li>

				<li className="SignInLinks">
					<Button onClick={logOut} variant="light">Log out</Button>
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
		<Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
			<Navbar.Brand className="Brand">
				<img src={process.env.PUBLIC_URL + '/Brand.png'} 
					width="400" 
					height="170" 
					alt="Real Deals" 
					className="d-inline-block align-top"
				/>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
				<Nav className="nav-link-components ml-auto">
					<ul>{localStorage.usertoken ? <HasToken /> : <NoToken />}</ul>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default NavbarComponent;
