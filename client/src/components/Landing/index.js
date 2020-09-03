import React from 'react';
import './style.css';
import Search from '../Search';
import Register from '../Register';


function Landing({routes, LandingTrue, LandingFalse}) {
	return (
		<div>
			{routes ? <LandingTrue/> : <LandingFalse />}
		</div>
	);
}

export default Landing;
