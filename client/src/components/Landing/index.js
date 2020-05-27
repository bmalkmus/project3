import React from 'react';
import './style.css';
import Search from '../Search';
import Register from '../Register';

import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

function Landing() {
	return (
		<div>
			<div>
				<div>
					<Container>
						<Row>
							<Card className="mx-auto p-3 mt-5 welcome-container" >
								<Card.Title>
									<h1>WELCOME</h1>
								</Card.Title>
							</Card>
						</Row>
					</Container>
				</div>
			</div>
			{localStorage.usertoken ? <Search /> : <Register />}
		</div>
	);
}

export default Landing;
