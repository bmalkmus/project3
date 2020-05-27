import React, {useRef} from 'react';
import './style.css';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
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
            if (res.data.status) {
                console.log("Registration successful");
                alert("Registration Successful");
                firstRef.current.value = "";
                lastRef.current.value = "";
                emailRef.current.value = "";
                passwordRef.current.value = "";

                
            }
            else if(res.data.error === "User already exists!") {
                alert("Email Already Exists!")
            }

            else{
                alert("Please fill in all information correctly")
            }
        })
    }
    return (
        
            <Card className = "text-center mt-5" id = "card-reg">
                <Card.Header id = "reg-head">Please Register</Card.Header>
                <Card.Body>
                    <Form>
                        <Form.Group className = "text-left formReg" id = "RegFirst">
                            <Form.Label>First Name:</Form.Label>
                            <Form.Control  id = "firstForm" type = "text" ref = {firstRef}/> 
                        </Form.Group>
                        <Form.Group className = "text-left formReg" id = "RegLast">
                            <Form.Label>Last Name:</Form.Label>
                            <Form.Control id = "lastForm" type = "text" ref = {lastRef}/> 
                        </Form.Group>
                        <Form.Group className = "text-left formReg" id = "RegEmail">
                            <Form.Label>Email Address:</Form.Label>
                            <Form.Control id = "emailForm" type = "email" ref = {emailRef}/> 
                        </Form.Group>
                        <Form.Group className = "text-left formReg" id = "RegPass">
                            <Form.Label>Password:</Form.Label>
                            <Form.Control id = "passForm" type = "password" ref = {passwordRef}/> 
                        </Form.Group>
                        <Button type = "submit" id = "btn-reg" onClick = {Submit}>Register</Button>
                    </Form>
                </Card.Body>
            </Card>
      
    )
}

export default Register