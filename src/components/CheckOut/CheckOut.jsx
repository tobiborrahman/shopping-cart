import React from 'react';
import { Link } from 'react-router-dom';
import './CheckOut.css';

const CheckOut = () => {
	return (
		<div className="checkout">
			<div className="items">
				<h1>Payment Will Be Implemented Here!</h1>
				<Link to="/">
					<button className="home-btn">Go Back To Home</button>
				</Link>
			</div>
		</div>
	);
};

export default CheckOut;
