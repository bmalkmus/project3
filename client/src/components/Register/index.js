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
            <div className = "card text-center card-reg">
                <div className = "card-header card-title" id = "reg-head">Please Register</div>
                <div className = "card-body">
                <form className = "regForm">
                    <div className = "form-group">
                        <label className = "regLabel" id = "test" htmlFor ="firstName">First Name</label>
                        <input className = "regInput form-control" id = "firstName" type= "text" ref = {firstRef} placeholder = "John"/>
                    </div>

                    <div className = "form-group">
                        <label className = "regLabel" htmlFor ="lastName">Last Name</label>
                        <input className = "regInput form-control" id = "lastName" type= "text" ref = {lastRef} placeholder = "Smith"/>
                    </div>

                    <div className = "form-group">
                        <label className = "regLabel" htmlFor ="email">Email Address</label>
                        <input className = "regInput form-control" id = "email" type= "email" ref = {emailRef} placeholder = "sample@email.com"/>
                    </div>

                    <div className = "form-group">
                        <label className = "regLabel" htmlFor ="password">Password</label>
                        <input className = "regInput form-control" id = "password" type= "password" ref = {passwordRef} placeholder = "ThisIsASample"/>
                    </div>

                    <button  className = "btn btn-primary" id = "btn-reg" type ="submit" onClick = {Submit}>Register</button>
                </form>
                </div>
            </div>
        </div>
    )
}

export default Register