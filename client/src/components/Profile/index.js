import React, {useState, useEffect} from 'react';
import jwt_decode from 'jwt-decode';
import API from "../utils/API";
import SavedCard from '../SavedCard'

function Profile () {
    const [first, setFirst] = useState();
    const [last, setLast] = useState();
    const [email, setEmail] =useState();
    const [list, setList] =useState([]);


    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);

    function getInfo() {
        setFirst(decoded.first_name);
        setLast(decoded.last_name);
        setEmail(decoded.email);

        API.UserList()
        .then(res => {
            setList(res.data)
        })

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
            <br/>
            <div>
                <h3>Saved List</h3>
            </div>
            {list.filter(product => product.user === decoded.email).map(product => (
                <SavedCard 
                    key = {product.id}
                    title = {product.title}
                    description = {product.description}
                    image = {product.image}
                    platform = {product.platform}
                    price = {product.price}
                    shipping = {product.shipping}
                    condition = {product.condition}/>
            ))}
        </div>
    )
}

export default Profile