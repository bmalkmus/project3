import React, {  useState } from "react";
// import Header from "../Header";
import Footer from "../Footer";
import Main from "../Main";
import SearchProductCards from "../SearchProductCards";
import API from "../utils/API";
import "./styles.css"
// import jwt_decode from 'jwt-decode';

function Search({getList}) {
  const [products, setProducts] = useState([])
  const [formObject, setFormObject] = useState({
    search: "Face Cream",
  })


  // Handles updating component state when the user types into the input field
  function handleSearchInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  // search for the query in Google books
  function handleSearchSubmit(event) {
    console.log("click");
    event.preventDefault();
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
      <Main name='Search'>
             
            
            <SearchProductCards
             handleSearchSubmit = {handleSearchSubmit}
             handleSearchInputChange = {handleSearchInputChange}
             formObject = {formObject}
             products = {products}
             getList = {getList}
             />
      </Main>
      <Footer />
    </div>
  );
};

export default Search;
