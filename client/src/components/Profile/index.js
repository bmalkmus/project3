import React, { useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import SavedContainer from '../SavedContainer';
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';

function Profile({Saved, getList, total}) {
	const [ First, setFirst ] = useState("");
	const [ Last, setLast ] = useState("");
	const [ Email, setEmail ] = useState("");

	const token = localStorage.usertoken;
	const decoded = jwt_decode(token);

	function getInfo() {
		setFirst(decoded.first_name);
		setLast(decoded.last_name);
		setEmail(decoded.email);

	};

	useEffect(
		() => {
			getInfo();	
		},[]);

	return (
		<div>
			<Container>
				<Row>
					<Accordion defaultActiveKey ="0" className="mx-auto p-3 mt-5 card">
							<Accordion.Toggle as={Card.Title} className="profile-title" eventKey="0">
								<h1>Profile</h1>
							</Accordion.Toggle>
							<Accordion.Collapse eventKey = "0">
								<Card.Body>
									<Table>
										<tbody>
											<tr>
												<td>First Name</td>
												<td>{First}</td>
											</tr>
											<tr>
												<td>Last Name</td>
												<td>{Last}</td>
											</tr>
											<tr>
												<td>Email Address</td>
												<td>{Email}</td>
											</tr>
											<tr>
												<td>Subtotal </td>
												<td>${total}</td>
											</tr>
											<tr>
												<td>Total </td>
												<td>${total * 1.10}</td>
											</tr>
										</tbody>
									</Table>
								</Card.Body>
							</Accordion.Collapse>
					</Accordion>
				</Row>
			</Container>
            <Container>
                <Card className="mx-auto p-3 mt-5">
                    <Card.Title>
                        <h3>Saved List</h3>
                    </Card.Title>
                </Card>
            </Container>
			<SavedContainer Saved = {Saved} getList = {getList}/>
		</div>
	);
}

export default Profile;
