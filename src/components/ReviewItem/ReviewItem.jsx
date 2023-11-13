import React from 'react';
import './ReviewItem.css';
import { FaTrashAlt } from 'react-icons/fa';

const ReviewItem = ({ product, handleRemoveFromCart }) => {
	const { id, name, img, quantity, price } = product;
	return (
		<div className="review-item">
			<div className="img-name">
				<img src={img} alt="" />
				<div>
					<h4 className="item">Name: {name}</h4>
					<p className="item">
						Price: <span className="orange-p">${price}</span>
					</p>
					<p className="item">
						Order Quantity:
						<span className="orange-p">{quantity}</span>
					</p>
				</div>
			</div>
			<FaTrashAlt
				onClick={() => handleRemoveFromCart(id)}
				className="icon"
			/>
		</div>
	);
};

export default ReviewItem;
