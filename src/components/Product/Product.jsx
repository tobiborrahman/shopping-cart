import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import './Product.css';

const Product = (props) => {
	const { img, name, price, ratings, seller } = props.product;
	const handleAddToCart = props.handleAddToCart;

	return (
		<div className="product-main">
			<div className="single-product">
				<img src={img} alt="No Img to Show" />
				<div>
					<div className="title-details">
						<h4 className="title">{name}</h4>
						<h5 className="title2">Price: ${price}</h5>
					</div>
					<p className="manufacturer">Manufacturer: {seller}</p>
					<p className="rating">Rating: {ratings}</p>
				</div>
			</div>
			<button
				onClick={() => handleAddToCart(props.product)}
				className="product-btn"
			>
				Add To Cart <FaShoppingCart />
			</button>
		</div>
	);
};

export default Product;
