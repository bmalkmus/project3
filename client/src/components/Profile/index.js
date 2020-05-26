import React, { useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import API from '../utils/API';
import SavedCard from '../SavedCard';

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

function Profile() {
	const [ first, setFirst ] = useState();
	const [ last, setLast ] = useState();
	const [ email, setEmail ] = useState();
	const [ list, setList ] = useState([]);

	const token = localStorage.usertoken;
	const decoded = jwt_decode(token);

	function getInfo() {
		setFirst(decoded.first_name);
		setLast(decoded.last_name);
		setEmail(decoded.email);

		API.UserList().then((res) => {
			setList(res.data);
		});
	}

	function deleteBTN(event) {
		const id = event.target.dataset.id;
		API.DeleteItem(id);
		API.UserList().then((res) => {
			setList(res.data);
		});
	}

	// useEffect(
	// 	() => {
	// 		getInfo();
	// 	},
	// 	[ list ]
	// );

	useEffect(() =>{
        console.log("mounted")
        getInfo();

        return () => {
            console.log("component unmounted")
        //     API.UserList()
        // .then(res => {
        //     setList(res.data)
        // })
        }

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
										<td>{first}</td>
									</tr>
									<tr>
										<td>Last Name</td>
										<td>{last}</td>
									</tr>
									<tr>
										<td>Email Address</td>
										<td>{email}</td>
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
			{list
				.filter((product) => product.user === decoded.email)
				.map((product) => (
					<SavedCard
						key={product.id}
						id={product.id}
						title={product.title}
						description={product.description}
						image={product.images}
						platform={product.platform}
						price={product.price}
						shipping={product.shipping}
						condition={product.condition}
						deleteBTN={deleteBTN}
					/>
				))}
		</div>
	);
}

export default Profile;
