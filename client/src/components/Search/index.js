import React, {  useState } from "react";
// import Header from "../Header";
import Footer from "../Footer";
import Main from "../Main";
import SearchProductCards from "../SearchProductCards";
import API from "../utils/API";
import DataAreaContext from "../utils/DataAreaContext";
import "./styles.css"
// import jwt_decode from 'jwt-decode';

function Search({notifications, setNotifications}) {
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
      <Main name='Search'>
        <DataAreaContext.Provider
            value={{ handleSearchSubmit, handleSearchInputChange, formObject, products, notifications, setNotifications }}
            >
            <SearchProductCards />
        </DataAreaContext.Provider>
      </Main>
      <Footer />
    </div>
  );
};

export default Search;
