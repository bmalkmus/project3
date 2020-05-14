import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import './style.css';


function Navbar () {

    const history = useHistory();

    function NoToken () {
        return (
            <li className = "SignInLinks">
            <Link to ="/login">
                Login
            </Link>
            </li>
        )
    }
    function HasToken () {
        return (
            <li className = "SignInLinks">
            <button  onClick = {logOut}>
                Log out
            </button>
            </li>
        )
    }

    function logOut (event) {
        event.preventDefault();
        localStorage.removeItem('usertoken');
        history.push('./');
    }
    return (
        <div className = "nav">
            <div className = "Brand">
            <img src = {process.env.PUBLIC_URL + '/Brand.png'}/>
            {/* <h1> Real Deals</h1> */}
            </div>
            <div>
            <ul>
                <li className = "SignInLinks">
                <Link to ="/register">
                    Register
                </Link>
                </li>
                {localStorage.usertoken ? <HasToken/> : <NoToken/>}
                
            </ul>
            </div>
        </div>
    )
}

export default Navbar