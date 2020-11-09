import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import { Wilder } from "./components/wilder/Wilder"
import { Addwilder } from "./components/addwilder/Addwilder"

function App() {

	const [wilders, setWilders] = useState([]);

	useEffect(() => {
		const fetchWilders = async () => {
			try {
				const result = await axios.get(
					"http://localhost:3200/api/wilders"
				);
				console.log(result.data);
				setWilders(result.data);
			} catch (error) {
				console.log(error);
			}
		};
		
		fetchWilders();
	}, []);

	return (
		<div>
			<header>
				<div className="container">
					<h1>Wilders Book</h1>
				</div>
			</header>
			<Addwilder></Addwilder>
			<main className="container">
				<h2>Wilders</h2>
				<section className="card-row">
				{wilders.map((wilder) => (<Wilder key={wilder._id} {...wilder} />))}
				</section>
			</main>
			<footer>
				<div className="container">
					<p>&copy; 2020 Wild Code School</p>
				</div>
			</footer>
		</div>
	);
}

export default App;