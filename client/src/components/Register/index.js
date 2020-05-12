import React, {useRef} from 'react';
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
                <form>
                    <label htmlFor ="firstName">First Name</label>
                    <input type= "text" ref = {firstRef} placeholder = "John"/>

                    <label htmlFor ="email">Last Name</label>
                    <input type= "email" ref = {lastRef} placeholder = "Smith"/>

                    <label htmlFor ="email">Email Address</label>
                    <input type= "email" ref = {emailRef} placeholder = "sample@email.com"/>

                    <label htmlFor ="password">Password</label>
                    <input type= "password" ref = {passwordRef} placeholder = "ThisIsASample"/>

                    <button type ="submit" onClick = {Submit}>Register</button>
                </form>
            </div>
        </div>
    )
}

export default Register