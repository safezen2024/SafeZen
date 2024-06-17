import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Foot from "../Components/Foot";
import Text from "../Components/text";
import Doctor from "../Components/Doctor";

function Home() {
	return (
		<div className="page">
			<Navbar />
			<div>
				<Hero/>	
				<Text/>
				<Doctor/>
			</div>
			<Foot/>
		</div>
	);
	
}

export default Home;
