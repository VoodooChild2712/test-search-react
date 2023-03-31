import { React, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Link, useLoaderData, useSearchParams } from "react-router-dom";

const Blog = () => {
	const { characters } = useLoaderData();
	const [searchParams, setSearchParams] = useSearchParams();

	useEffect(() => {
		console.log(searchParams.get("keyword"));
	}, [searchParams]);

	const handleChange = (e) => {
		e.preventDefault()
		setSearchParams({ keyword: e.target.value });
		console.log(e.target.value);
	};

	return (
		<div className="p-5">
			<h2>Blog</h2>
			<form>
				<input
					className="form-control my-3"
					type="text"
					placeholder="ingrese un personaje"
					onChange={handleChange}
					value={searchParams.get("keyword") ? searchParams.get("keyword") : ""}
				/>
			</form>
			<ul>
				{characters.results
					.filter((item) => {
						let filter = searchParams.get("keyword");
						let name = item.name.toLowerCase();

						if (!filter) {
							return true;
						} else {
							return name.startsWith(filter.toLocaleLowerCase());
						}
					})
					.map((item) => (
						<li key={item.id}>
							<Link to={`/blog/${item.id}`}>{item.name}</Link>
						</li>
					))}
			</ul>
		</div>
	);
};

export const loaderCharacters = async () => {
	const data = await fetch("https://rickandmortyapi.com/api/character");
	const characters = await data.json();

	return { characters };
};

export default Blog;
