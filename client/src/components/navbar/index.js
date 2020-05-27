import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import "./style.css";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Badge from "react-bootstrap/Badge";

function NavbarComponent({routes, setRoutes, notifications}) {
	
	const history = useHistory();
	
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
