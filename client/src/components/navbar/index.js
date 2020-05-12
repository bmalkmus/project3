import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import './style.css';


function Navbar () {

    const history = useHistory();

    function NoToken () {
        return (
            <li>
            <Link to ="/login">
                Login
            </Link>
            </li>
        )
    }
    function HasToken () {
        return (
            <li>
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
        <div>
            <h1> Real Deals</h1>
            <ul>
                <li>
                <Link to ="/register">
                    Register
                </Link>
                </li>
                {localStorage.usertoken ? <HasToken/> : <NoToken/>}
                
            </ul>
        </div>
    )
}

export default Navbar