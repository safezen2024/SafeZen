import React from "react";
import PricePlans from "../Components/PricePlans";
import Navbar from "../Components/Navbar";
import Foot from "../Components/Foot";

export default function Pricing() {
	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="page">
			<Navbar />
			<PricePlans />
			<Foot />
		</div>
	);
}
