import React from "react";
import DataAreaContext from "../utils/DataAreaContext";

class SearchProductCards extends React.Component {
  static contextType = DataAreaContext;

  createPriceTags = (stores) => {
    let rows = []
    for (let i = 0; i < stores.length; i++) {
      let row = (
        <tr key={i}>
          <td>
            <a href={stores[i].link}
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
                className="btn m-1" onClick={() => this.context.handleSaveBook(this.context.products[i])}><i>Save</i></a>
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
