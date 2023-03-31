import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<>
			<footer className="navbar navbar-dark">
				<div className="container footer footer-dark bg-dark">
					<Link to="/about" className="btn btn-outline-light">About</Link>
				</div>
			</footer>
		</>
	);
};

export default Footer;
