import React, {useRef} from 'react';
import './style.css';
import API from '../utils/API';


function Register() {
    const firstRef = useRef();
    const lastRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    function Submit (event) {
        event.preventDefault();
        const user = {
            first_name: firstRef.current.value,
            last_name: lastRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value
        };

        API.register(user).then(res => {
            if (res) {
                console.log("login successful")
            }
        })
    }
    return (
        <div>
            <div>
                <h1>Please Register</h1>
                <form className = "regForm">
                    <label className = "regLabel" htmlFor ="firstName">First Name</label>
                    <input className = "regInput" id = "firstName" type= "text" ref = {firstRef} placeholder = "John"/>

                    <label className = "regLabel" htmlFor ="lastName">Last Name</label>
                    <input className = "regInput" id = "lastName" type= "text" ref = {lastRef} placeholder = "Smith"/>

                    <label className = "regLabel" htmlFor ="email">Email Address</label>
                    <input className = "regInput" id = "email" type= "email" ref = {emailRef} placeholder = "sample@email.com"/>

                    <label className = "regLabel" htmlFor ="password">Password</label>
                    <input className = "regInput" id = "password" type= "password" ref = {passwordRef} placeholder = "ThisIsASample"/>

                    <button  type ="submit" onClick = {Submit}>Register</button>
                </form>
            </div>
        </div>
    )
}

export default Register