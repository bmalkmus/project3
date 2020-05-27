import React, {useRef} from 'react';
import API from '../utils/API';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./style.css"
import {useHistory} from "react-router-dom";


function Login({setRoutes}) {
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
                console.log("login successful");
                setRoutes(true);
            }
        })
    }
    return (
        <div>
            <Card className = "text-center" id = "card-log">
                <Card.Header id = "log-head">Please Sign In</Card.Header>
                <Card.Body>
                    <Form>
                        <Form.Group className = "text-left" id = "logEmail">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control id = "log-email" type = "email" ref = {emailRef}/> 
                        </Form.Group>
                        <Form.Group className = "text-left" id = "logPass">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type = "password" id = "log-pass" ref = {passwordRef}/> 
                        </Form.Group>
                        <Button id = "btn-log" type = "submit" onClick = {Submit}>Login</Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Login