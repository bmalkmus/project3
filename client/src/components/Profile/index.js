import React, { useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import SavedContainer from '../SavedContainer';

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

function Profile({setNotifications}) {
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
					<Card className="mx-auto p-3 mt-5">
						<Card.Title>
							<h1>Profile</h1>
						</Card.Title>
						<Card.Body>
							<table>
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
								</tbody>
							</table>
						</Card.Body>
					</Card>
				</Row>
			</Container>
            <Container>
                <Card className="mx-auto p-3 mt-5">
                    <Card.Title>
                        <h3>Saved List</h3>
                    </Card.Title>
                </Card>
            </Container>
			<SavedContainer setNotifications = {setNotifications}/>
		</div>
	);
}

export default Profile;
