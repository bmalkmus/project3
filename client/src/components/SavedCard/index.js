import React from 'react';

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function SavedCard({id, image, title, description, platform, price, deleteBTN}) {
	return (
		<Container>
			<Card className="card mx-auto p-3 mt-5" key={id}>
				<Row className="no-gutters">
					<Col className="md-4">
						<img src={image} className="img-fluid" alt="Responsive" />
					</Col>
					<Col className="md-8">
						<Card.Body>
							<Card.Title>
								<h4 className="card-title">{title}</h4>
							</Card.Title>
							<Row>
								<p className="category">{description}</p>
							</Row>
							
								<Table size="sm">
									<thead>
										<tr>
											<th>Website</th>
											<th>Price</th>
											{/* <th>Shipping</th>
											<th>Condition</th> */}
											<th />
										</tr>
									</thead>
								
								
									<tbody>
										<tr>
											<td>{platform}</td>
											<td>${price}</td>
											{/* <td>${shipping}</td>
											<td>{condition}</td> */}
										</tr>
									</tbody>	
								</Table>
								<Button data-id={id} onClick={deleteBTN} variant="dark">Remove</Button>			
						</Card.Body>
					</Col>
				</Row>
			</Card>
		</Container>
	);
}
export default SavedCard;
