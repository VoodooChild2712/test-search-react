import React from "react";
import { useLoaderData } from "react-router-dom";

const Character = () => {
	const { character } = useLoaderData();
	console.log(character);
	return (
		<div className="row justify-content-center mt-5">
			<div className="card pt-3 bg-dark" style={{ width: "18rem" }}>
				<img src={character.image} className="card-img-top" alt="..." />
				<div className="card-body">
					<h4 className="card-title text-light">{character.name}</h4>
					<hr className="text-light"/>
                    <h5 className="text-light fs-5 fw-bolder">Species: <span className="fw-lighter">{character.species}</span></h5>
                    <h5 className="text-light fs-5 fw-bolder">From: <span className="fw-lighter">{character.origin.name}</span></h5>
                    <h5 className="text-light fs-5 fw-bolder">Alive?: <span className="ms-1 fw-lighter">{character.status === "Alive" ? "yes" : "no"}</span></h5>
				</div>
			</div>
		</div>
	);
};

export const loaderCharacterCards = async ({ params }) => {
	const data = await fetch(
		`https://rickandmortyapi.com/api/character/${params.id}`
	);
	const character = await data.json();

	return { character };
};

export default Character;
