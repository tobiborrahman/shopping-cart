import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../src/assets/logo22.png';
import './Navbar.css';
const Header = () => {
	return (
		<nav className="header">
			<img className="logo" src={logo} alt="" />
			<div>
				<Link to="/">Shop</Link>
				<Link to="/orders">Orders</Link>
				<Link>Log In</Link>
				<Link>Sign Up</Link>
			</div>
		</nav>
	);
};

export default Header;
