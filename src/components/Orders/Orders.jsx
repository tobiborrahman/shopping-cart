import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import './Orders.css';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import { FaCheckCircle } from 'react-icons/fa';
import { deleteShoppingCart } from '../../utils/fakeDb';

const Orders = () => {
	const savedCart = useLoaderData();
	const [cart, setCart] = useState(savedCart);

	const handleRemoveFromCart = (id) => {
		const remaining = cart.filter((product) => product.id !== id);
		setCart(remaining);
		removeFromDb(id);
	};

	const deleteAllFromCart = () => {
		setCart([]);
		deleteShoppingCart();
	};
	console.log(savedCart);
	return (
		<div className="order-container">
			<div className="summary-products">
				{cart.map((product) => (
					<ReviewItem
						key={product.id}
						product={product}
						handleRemoveFromCart={handleRemoveFromCart}
					></ReviewItem>
				))}
			</div>
			<div className="orders">
				<Cart deleteAllFromCart={deleteAllFromCart} cart={cart}>
					<div>
						<Link to="/checkout">
							<button className="cart-btn-2">
								Proceed Checkout <FaCheckCircle />
							</button>
						</Link>
					</div>
				</Cart>
			</div>
		</div>
	);
};

export default Orders;
