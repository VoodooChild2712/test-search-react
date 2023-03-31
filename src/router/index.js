import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Blog, { loaderCharacters } from "../pages/Blog";
import { loaderCharacterCards } from "../pages/Character";
import About from "../pages/About";
import Error404 from "../pages/Error404";
import Layout from "../layout/Layout";
import Character from "../pages/Character";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		errorElement: <Error404 />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "/blog",
				element: <Blog />,
				loader: loaderCharacters,
			},
			{
				path: "/about",
				element: <About />,
			},
            {
                path: "/blog/:id",
                element: <Character />,
                loader: loaderCharacterCards,
            }
		],
	},
]);
