import React from 'react';
import './style.css';
import Search from "../Search"
import Register from "../Register"



function Landing () {

    
    return (
        <div>
            <div>
                <div>
                    <h1>WELCOME</h1>
                    
                </div>
            </div>
            {localStorage.usertoken ? <Search/> : <Register/>}
        </div>
    )
}

export default Landing