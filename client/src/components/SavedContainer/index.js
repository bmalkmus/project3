import React from 'react';
import jwt_decode from 'jwt-decode';
import API from '../utils/API';
import SavedCard from '../SavedCard';
import Container from 'react-bootstrap/Container';

function SavedContainer ({Saved, getList}) {
    const token = localStorage.usertoken;
	const decoded = jwt_decode(token);

    
    function deleteBTN(event) {
		const id = event.target.dataset.id;
		API.DeleteItem(id)
		.then(res => getList())
    	.catch (err => console.log(err))
		
    }

    

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
						link = {product.link}
						deleteBTN={deleteBTN}
					/>
				))}
        </Container>
    )
}

export default SavedContainer