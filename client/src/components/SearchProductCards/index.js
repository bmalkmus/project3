import React from 'react';
import jwt_decode from 'jwt-decode';
import API from '../utils/API';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import Table from 'react-bootstrap/Table';

function SearchProductCards ({handleSearchSubmit, handleSearchInputChange, formObject, products, getList}) {
	function createPriceTags (stores) {
		let rows = [];
		for (let i = 0; i < stores.length; i++) {
			if (stores[i].price === '') {
				stores[i].price = '50000000.00';
				stores[i].currency = 'ZWD';
			}
			let row = (
				<tr key={i}>
					<td>
						<a target="_blank" rel="noopener noreferrer" href={stores[i].link} className="btn m-1">
							<i>{stores[i].store_name}</i>
						</a>
					</td>
					<td>
						<p>
							{stores[i].price} {stores[i].currency}
						</p>
					</td>
				</tr>
			);
			rows.push(row);
		}
		return (
			<Table className="responsive-table highlight">
				<thead>
					<tr>
						<th>Website</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</Table>
		);
	};

	function handleSaveProduct (event) {
		const token = localStorage.usertoken;
		const decoded = jwt_decode(token);

		API.saveProduct({
			user: decoded.email,
			title: event.target.dataset.title,
			upc: event.target.dataset.upc,
			description: event.target.dataset.description,
			images: event.target.dataset.image,
			platform: event.target.dataset.platform,
			link: event.target.dataset.link,
			price: event.target.dataset.price,
			shipping: '99.99',
			condition: 'broken',
			datefind: '1979-01-01'
		})
			.then((res) => {
				console.log(res)
				getList()
			})
			.catch((err) => console.log(err));
	};
	function createCards () {
		let cols = [];

		// Outer loop to create parent
		for (let i = 0; i < products.length; i++) {
			let card = (
				<Container key={'container' + i}>
					<Card className="card mx-auto p-3 mt-5" key={'search' + i}>
						<Row className="no-gutters">
							<Col className="md-4">
								<img
									src={products[i].item_attributes.image}
									className="img-fluid"
									alt="Responsive"
								/>
							</Col>
							<Col>
								<Card.Body>
									<Card.Title>{products[i].item_attributes.title}</Card.Title>
									<Card.Text className="category">
										{products[i].item_attributes.description}
									</Card.Text>
								</Card.Body>
							</Col>
							<Col>
								<Row className="sm-6">{createPriceTags(products[i].Stores)}</Row>
								<Row className="sm-6">
									<Dropdown className="btn-dropdown align-center">
										<Dropdown.Toggle
											className="btn-dropdown btn btn-toggle m-1 dropdown-toggle"
											variant="warning"
											id="dropdown-basic"
										>
											Save
										</Dropdown.Toggle>

										<Dropdown.Menu
											className="dropdown-menu"
											id={products[i].item_attributes.title}
										>
											{products[i].Stores.map((store) => {
												return (
													<Dropdown.Item
														variant="dark"
														key={store.store_name + i}
														className="dropdown-item stores"
														data-title={products[i].item_attributes.title}
														data-upc={products[i].item_attributes.upc}
														data-description={
															products[i].item_attributes.description
														}
														data-image={store.image}
														data-platform={store.store_name}
														data-link={store.link}
														data-price={store.price}
														onClick={handleSaveProduct}
													>
														{store.store_name}
													</Dropdown.Item>
												);
											})}
										</Dropdown.Menu>
									</Dropdown>
								</Row>
							</Col>
						</Row>
					</Card>
				</Container>
			);
			//Create the parent and add the children
			cols.push(card);
		}
		return cols;
	};
	

		return (
			<div>
				<Row>
					<Card className="product-search-card">
						<div className="input-field col s12">
							<label className="m-0" htmlFor="search">
								<h5 className="card-title">Product Search</h5>
							</label>
							<Form className="search-form-control p-5">
								<FormControl
									onChange={handleSearchInputChange}
									name="search"
									placeholder= {formObject.search}
									className="mr-sm-2"
								/>
								<Button
									href="#top"
									className="mt-3 search-button"
									onClick={handleSearchSubmit}
									variant="dark"
									type="button"
								>
									Search
								</Button>
							</Form>
						</div>
					</Card>
				</Row>
				<Row>{createCards()}</Row>
			</div>
		);
	}

export default SearchProductCards;
