import React, {useState, useEffect} from 'react';
import jwt_decode from 'jwt-decode';

function Profile () {
    const [first, setFirst] = useState();
    const [last, setLast] = useState();
    const [email, setEmail] =useState();


    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);

    function getInfo() {
        setFirst(decoded.first_name);
        setLast(decoded.last_name);
        setEmail(decoded.email);
    }

    useEffect(() =>{
        getInfo()
    }, [])

    return (
        <div>
            <div>
                <h1>Profile</h1>
            </div>
            <table>
                <tbody>
                    <tr>
                        <td>First Name</td>
                        <td>{first}</td>
                    </tr>
                    <tr>
                        <td>Last Name</td>
                        <td>{last}</td>
                    </tr>
                    <tr>
                        <td>Email Address</td>
                        <td>{email}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Profile