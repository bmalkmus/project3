import React, {  useState } from "react";
// import Header from "../Header";
import Footer from "../Footer";
import Main from "../Main";
import SearchProductCards from "../SearchProductCards";
import API from "../utils/API";
import DataAreaContext from "../utils/DataAreaContext";
// import jwt_decode from 'jwt-decode';

function Search() {
  const [products, setProducts] = useState([])
  const [formObject, setFormObject] = useState({
    search: "Face Cream",
  })

  // const token = localStorage.usertoken;
  // const decoded = jwt_decode(token);

  // save book to DB
  // function handleSaveProduct(product) {
  //   console.log(product);
  //   // TODO: save the product into DB
  // };

  // Handles updating component state when the user types into the input field
  function handleSearchInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  // search for the query in Google books
  function handleSearchSubmit(event) {
    console.log("click");
    event.preventDefault();
    console.log(formObject.search);
    API.productSearchKeyword(formObject.search)
      .then(res => {
        const products = res.data.Data;
        setProducts(products);
      }
    )
    .catch(err => console.log(err));
  };

  return (
    <div>
      {/* <Header page="search" custom="navbar-expand-lg bg-dark" /> */}
      <Main name='Search'>
        <DataAreaContext.Provider
            value={{ handleSearchSubmit, handleSearchInputChange, formObject, products }}
            >
            <SearchProductCards />
        </DataAreaContext.Provider>
      </Main>
      <Footer />
    </div>
  );
};

export default Search;
