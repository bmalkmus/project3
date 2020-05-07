import React, {useRef} from 'react';
import API from '../utils/API';
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
                history.push('/profile')
                console.log("login successful")
            }
        })
    }
    return (
        <div>
            <div>
                <h1>Please sign in</h1>
                <form>
                    <label htmlFor ="email">Email Address</label>
                    <input type= "email" ref = {emailRef} placeholder = "sample@email.com"/>

                    <label htmlFor ="password">Password</label>
                    <input type= "password" ref = {passwordRef} placeholder = "ThisIsASample"/>
                    <button type ="submit" onClick = {Submit}>Log In</button>
                </form>
            </div>
        </div>
    )
}

export default Login