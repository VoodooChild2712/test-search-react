import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark">
			<div className="container">
                <NavLink to="/" className="btn btn-outline-light">Home</NavLink>
                <NavLink to="/blog" className="btn btn-outline-light">Blog</NavLink>
                <NavLink to="/about" className="btn btn-outline-light">About</NavLink>
			</div>
            
		</nav>
	);
};

export default Navbar;
