import React from "react";
import DataAreaContext from "../utils/DataAreaContext";
import jwt_decode from 'jwt-decode';
import API from '../utils/API'

class SearchProductCards extends React.Component {
  static contextType = DataAreaContext;

  


  createPriceTags = (stores) => {
    let rows = []
    for (let i = 0; i < stores.length; i++) {
      let row = (
        <tr key={i}>
          <td>
            <a  target = '_blank' rel='noopener noreferrer' href={stores[i].link}
              className="btn m-1"><i>{stores[i].store_name}</i></a>
          </td>
          <td>
            <p>{stores[i].price} {stores[i].currency}</p>
          </td>
        </tr>
      )
      rows.push(row)
    }
    return (
      <table className='responsive-table highlight'>
        <thead>
          <tr>
            <th>Website</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
      
    )
  }

  createDropDown = (product) => {
    console.log(product);
    let dropdown = [];
    for (let i = 0; i < product.Stores.length; i++) {
      let item = (
            <li  key = {i} className = "dropdown-item stores" 
                data-title = {product.item_attributes.title}
                data-upc = {product.item_attributes.upc}
                data-desc = {product.item_attributes.description}
                data-image = {product.Stores[i].image}
                data-platform = {product.Stores[i].store_name}
                data-link = {product.Stores[i].link}
                data-price = {product.Stores[i].price}
                onClick={this.handleSaveProduct}
              >
                    {product.Stores[i].store_name}
            </li>
            )
      dropdown.push(item)
    }
    return (
      <div>
      {dropdown}
      </div>
    )
  }
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
      shipping: "99.99",
      condition: "broken",
      datefind: "1979-01-01"
    })
    .catch(err => console.log(err));

    


    

  }
  createCards = () => {
    let cols = []

    // Outer loop to create parent
    for (let i = 0; i < this.context.products.length; i++) {
      let card = (
        <div className="card" key={i}>
          <div className="card-header">
            <div className="row">
              <div className="col s6">
                <h4 className="card-title">{this.context.products[i].item_attributes.title}</h4>
              </div>
              <div className="col s6">
                <a href="#"
                className="btn m-1 dropdown-toggle" data-toggle = "dropdown"><i>Save</i></a>
                <ul className = "dropdown-menu" id = {this.context.products[i].item_attributes.title}>
                <button id ={this.context.products[i].item_attributes.title}>{this.createDropDown(this.context.products[i])}</button>
                </ul>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col s8">
                <p className="category">{this.context.products[i].item_attributes.description}</p>
              </div>
              <div className="col s4">
                <img src={this.context.products[i].item_attributes.image} 
                className="img-fluid" alt="Responsive"/>
              </div>
            </div>
            {this.createPriceTags(this.context.products[i].Stores)}
          </div>
        </div>
      )
      //Create the parent and add the children
      cols.push(card)
    }
    return cols
  }
  
  render() {
    return (
      <div>
        <div className="row">
          <div className="input-field col s12">
            <label className="m-2" htmlFor="search">Product Search</label>
            <input
              onChange={this.context.handleSearchInputChange}
              name="search"
              placeholder={this.context.formObject.search}
            />
            <a href="#"
              className="btn m-2" onClick={this.context.handleSearchSubmit}><i>Search</i>
            </a>
          </div>
        </div>
        <div className="row">
          {this.createCards()}
        </div>
      </div>
    );
  }
}

export default SearchProductCards;
