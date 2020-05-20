import React, {useRef} from 'react';
import API from '../utils/API';
import "./style.css"
import {useHistory} from "react-router-dom";


function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const history = useHistory()

    function Submit (event) {
        event.preventDefault();
        const user = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        };

        API.login(user).then(res => {
            if (res) {
                history.push('/')
                console.log("login successful")
            }
        })
    }
    return (
        <div>
            <div className = "card text-center card-log">
                <div className = "card-header card-title" id = "log-head">Please sign in</div>
                <form className = "card-body">
                    <div className = "form-group">
                        <label htmlFor ="email">Email Address</label>
                        <input type= "email" className = "form-control" ref = {emailRef} placeholder = "sample@email.com"/>
                    </div>

                    <div className = "form-group">
                        <label htmlFor ="password">Password</label>
                        <input type= "password" className = "form-control" ref = {passwordRef} placeholder = "ThisIsASample"/>
                    </div>

                    <button className = "btn btn-primary" id = "btn-log" type ="submit" onClick = {Submit}>Log In</button>
                </form>
            </div>
        </div>
    )
}

export default Login