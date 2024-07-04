import React from "react";
import PricePlans from "../Components/PricePlans";
import Navbar from "../Components/Navbar";
import Foot from "../Components/Foot";

export default function Pricing() {
	return (
		<div className="page">
			<Navbar/>
			<PricePlans/>
			<Foot/>
		</div>
	);
}
