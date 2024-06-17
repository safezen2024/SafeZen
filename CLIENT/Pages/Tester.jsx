import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Card from "../Components/Card";
import data from "../data";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import Meme from "../Components/Form";

const cardData = data.map((cData) => {
	return (
		<Card
			key={cData.id}
			{...cData}
		/>
	);
});

function Tester() {
	return (
		<div>
			<Navbar />
			<div className="main">
				<Hero/>	
				<h1>Tester is working</h1>
				{/* <Meme /> */}
			</div>
		</div>
	);
}

export default Tester;
 