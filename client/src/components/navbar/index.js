import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import './style.css';


function Navbar (props) {

    const history = useHistory();

    function NoToken () {
        props.setRoutes(false)
        return (
            <div>
                <li className = "SignInLinks">
                    <Link to ="/register">
                        Register
                    </Link>
                </li>
                <li className = "SignInLinks">
                <Link to ="/login">
                    Login
                </Link>
                </li>
            </div>
        )
    }
    function HasToken () {
        props.setRoutes(true)
        return (
            <div>
                <li className = "SignInLinks">
                    <Link to ="/profile">
                        Saved List
                    </Link>
                </li>
                <li className = "SignInLinks">
                    <Link to ="/search">
                        Search
                    </Link>
                </li>

                <li className = "SignInLinks">
                <button  onClick = {logOut}>
                    Log out
                </button>
                </li>
            </div>
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
            <img src = {process.env.PUBLIC_URL + '/Brand.png'} width="100" height="100" alt ="Real Deals"/>
            {/* <h1> Real Deals</h1> */}
            </div>
            <div>
            <ul>
                {localStorage.usertoken ? <HasToken/> : <NoToken/>}
                
            </ul>
            </div>
        </div>
    )
}

export default Navbar