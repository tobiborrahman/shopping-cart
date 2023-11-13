import { getShoppingCart } from '../../utils/fakeDb';

const productsLoader = async () => {
	const cartProducts = await fetch('data.json');
	const products = await cartProducts.json();
	const storedCart = getShoppingCart();
	console.log(storedCart);
	const savedCart = [];
	for (const id in storedCart) {
		const addedProduct = products.find((pd) => pd.id === id);
		console.log(addedProduct);
		const quantity = storedCart[id];
		console.log(quantity);
		addedProduct.quantity = quantity;
		savedCart.push(addedProduct);
	}
	return savedCart;
};

export default productsLoader;
