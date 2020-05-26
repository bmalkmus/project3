import React, { useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import API from '../utils/API';
import SavedCard from '../SavedCard';
import Container from 'react-bootstrap/Container';

function SavedContainer () {
    const token = localStorage.usertoken;
	const decoded = jwt_decode(token);
    const [ Saved, setSaved ] = useState([]);

    function getList() {
		API.UserList()
		.then((res) => {
			console.log(res.data);
			setSaved(res.data);
		})
		.catch(err => console.log(err))
    };
    
    function deleteBTN(event) {
		const id = event.target.dataset.id;
		API.DeleteItem(id)
		.then(res => getList())
    	.catch (err => console.log(err))
		
    }

    useEffect(() => {
		console.log("Effected initiated")
		getList();
	}, [])	
    

    return (
        <Container>
            	{Saved
				.filter((product) => product.user === decoded.email)
				.map((product) => (
					<SavedCard
						key={product.id}
						id={product.id}
						title={product.title}
						description={product.description}
						image={product.images}
						platform={product.platform}
						price={product.price}
						shipping={product.shipping}
						condition={product.condition}
						deleteBTN={deleteBTN}
					/>
				))}
        </Container>
    )
}

export default SavedContainer