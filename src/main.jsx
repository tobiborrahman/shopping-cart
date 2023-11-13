import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import Orders from './components/Orders/Orders';
import productsLoader from './components/loaders/productsLoader';
import CheckOut from './components/CheckOut/CheckOut';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		children: [
			{
				path: '/',
				element: <Shop></Shop>,
			},
			{
				path: 'orders',
				element: <Orders></Orders>,
				loader: productsLoader,
			},
			{
				path: '/checkout',
				element: <CheckOut />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
