import React from "react";
import Navbar from "../components/Navbar";
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../components/Footer";

const Layout = () => {
	const navigation = useNavigation();
	return (
		<>
			<Navbar />
			{navigation.state === "loading" ? <div>loading</div> : <Outlet />}
		</>
	);
};

export default Layout;
