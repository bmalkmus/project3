import React from 'react';
import "./style.css";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


function NavbarComponent({routes, HasToken, NoToken}) {

	return (
		<Navbar collapseOnSelect expand="lg">
			<Navbar.Brand className="Brand">
				<img src={process.env.PUBLIC_URL + '/Brand.png'} 
					width="400" 
					height="170" 
					alt="Real Deals" 
					className="d-inline-block align-top"
				/>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" id = "navToggle"/>
			<Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
				<Nav className="nav-link-components ml-auto">
					<ul>{routes ? <HasToken /> : <NoToken />}</ul>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default NavbarComponent;
