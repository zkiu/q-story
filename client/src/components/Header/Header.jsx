import React, { useState, useEffect } from "react";

import axios from "axios";

const options = {
	method: "GET",
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
		Authorization: "563492ad6f917000010000012b8de3d55d21428ea615e911741ea96e",
	},
};

export default function Header() {
	// const [img, setImg] = useState("");

	useEffect(() => {
		fetch(`https://api.pexels.com/v1/photo`, options).then((response) =>
			console.log(response.data)
		);
		// axios
		// 	.get("https://api.pexels.com/v1", {
		// 		headers: {
		// 			Accept: "application/json",
		// 			"Content-Type": "application/json",
		// 			Authorization:
		// 				"563492ad6f917000010000012b8de3d55d21428ea615e911741ea96e",
		// 		},
		// 	})
		// 	// .get("https://pokeapi.co/api/v2/")
		// 	.then(({ data }) => {
		// 		console.log(data);
		// 	});
	}, []);

	return (
		<header>
			<h1>Hello Kiu</h1>
		</header>
	);
}