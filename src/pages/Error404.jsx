import React from "react";
import { useRouteError } from "react-router-dom";

const Error404 = () => {
    const error = useRouteError();
	return <div>Error404</div>;
};

export default Error404;
