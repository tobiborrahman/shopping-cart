import React from 'react';
import { FaTrash } from 'react-icons/fa';

const Cart = ({ cart, deleteAllFromCart, children }) => {
	// console.log(cart);

	let total = 0;
	let totalShipping = 0;
	let quantity = 0;
	for (const product of cart) {
		if (product.quantity === 0) {
			product.quantity = 1;
		}

		total = total + product.price * product.quantity;
		totalShipping = totalShipping + product.shipping;
		quantity = quantity + product.quantity;
	}

	const tax = (total * 7) / 100;
	const grandTotal = total + totalShipping + tax;

	return (
		<div>
			<h3 className="order-title">Order Summary</h3>
			<div className="order-details">
				<p className="para">Selected Items: {quantity}</p>
				<p className="para">Total Price: ${total}</p>
				<p className="para">Shipping Charge: ${totalShipping}</p>
				<p className="para">Tax: ${tax}</p>
				<h3 className="para">Grand Total: ${grandTotal}</h3>
				<button onClick={deleteAllFromCart} className="cart-btn-1">
					Clear Cart <FaTrash />
				</button>

				{children}
			</div>
		</div>
	);
};

export default Cart;
