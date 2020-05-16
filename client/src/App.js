import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/navbar';
import Landing from './components/Landing';
import Login from './components/Login';
import Profile from './components/Profile';
import Register from './components/Register'
import Search from './components/Search'

import "./App.css";

function App () {
  return (
    <Router>
    <div>
    <Navbar/>
    <Route exact path ="/" component = {Landing}/>
    </div>
    <Route exact path ="/register" component ={Register}/>
    <Route exact path ="/login" component ={Login}/>
    <Route exact path ="/profile" component ={Profile}/>
    <Route exact path="/search" component={Search} />
    </Router>
  )
}


export default App;
