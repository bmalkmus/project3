import React from 'react';
import DataAreaContext from '../utils/DataAreaContext';
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

class SearchProductCards extends React.Component {
	static contextType = DataAreaContext;

	createPriceTags = (stores) => {
		let rows = [];
		for (let i = 0; i < stores.length; i++) {
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
			<table className="responsive-table highlight">
				<thead>
					<tr>
						<th>Website</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</table>
		);
	};

	createDropDown = (product) => {
		console.log(product);
		let dropdown = [];
		for (let i = 0; i < product.Stores.length; i++) {
			let item = (
				<li
					key={i}
					className="dropdown-item stores"
					data-title={product.item_attributes.title}
					data-upc={product.item_attributes.upc}
					data-desc={product.item_attributes.description}
					data-image={product.Stores[i].image}
					data-platform={product.Stores[i].store_name}
					data-link={product.Stores[i].link}
					data-price={product.Stores[i].price}
					onClick={this.handleSaveProduct}
				>
					{product.Stores[i].store_name}
				</li>
			);
			dropdown.push(item);
		}
		return <div>{dropdown}</div>;
	};
	handleSaveProduct = (event) => {
		const token = localStorage.usertoken;
		const decoded = jwt_decode(token);

		API.saveProduct({
			user: decoded.email,
			title: event.target.dataset.title,
			upc: event.target.dataset.upc,
			decription: event.target.dataset.desc,
			images: event.target.dataset.image,
			platform: event.target.dataset.platform,
			link: event.target.dataset.link,
			price: event.target.dataset.price,
			shipping: '99.99',
			condition: 'broken',
			datefind: '1979-01-01'
		}).catch((err) => console.log(err));
	};
	createCards = () => {
		let cols = [];

		// Outer loop to create parent
		for (let i = 0; i < this.context.products.length; i++) {
			let card = (
				<Container>
					<Card className="card mx-auto p-3 mt-5" key={i}>
						<Row className="no-gutters">
							<Col className="md-4">
								<img
									src={this.context.products[i].item_attributes.image}
									className="img-fluid"
									alt="Responsive"
								/>
							</Col>
							<Col>
								<Card.Body>
									<Card.Title>
										<h4 className="card-title">{this.context.products[i].item_attributes.title}</h4>
									</Card.Title>
									<Card.Text>
										<p className="category">
											{this.context.products[i].item_attributes.description}
										</p>
									</Card.Text>
								</Card.Body>
							</Col>
							<Card.Footer>
								<Row>
									<Dropdown>
										<Dropdown.Toggle
											href="#top"
											className="btn m-1 dropdown-toggle"
											variant="success"
											id="dropdown-basic"
										>
											Save
										</Dropdown.Toggle>

										<Dropdown.Menu
											className="dropdown-menu"
											id={this.context.products[i].item_attributes.title}
										>
											<Dropdown.Item id={this.context.products[i].item_attributes.title}>
												{this.createDropDown(this.context.products[i])}
											</Dropdown.Item>
										</Dropdown.Menu>
									</Dropdown>
								</Row>
								<Row />
								<Row>{this.createPriceTags(this.context.products[i].Stores)}</Row>
							</Card.Footer>
						</Row>
					</Card>
				</Container>
			);
			//Create the parent and add the children
			cols.push(card);
		}
		return cols;
	};

	render() {
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
									onChange={this.context.handleSearchInputChange}
									name="search"
									placeholder={this.context.formObject.search}
									className="mr-sm-2"
								/>
								<Button
									href="#top"
									className="mt-3 search-button"
									onClick={this.context.handleSearchSubmit}
									variant="dark"
								>
									Search
								</Button>
							</Form>
						</div>
					</Card>
				</Row>
				<Row>{this.createCards()}</Row>
			</div>
		);
	}
}

export default SearchProductCards;
