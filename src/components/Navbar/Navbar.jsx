import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../src/assets/Logo.svg';
import './Navbar.css';
const Header = () => {
	return (
		<nav className="header">
			<img src={logo} alt="" />
			<div>
				<Link to="/">Shop</Link>
				<Link to="/orders">Orders</Link>
				<Link to="/inventory">Inventory</Link>
			</div>
		</nav>
	);
};

export default Header;
