import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Foot from "../Components/Foot";

export default function Jinam() {
	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div className="page">
			<Navbar />
			<div className="indPage mb-5 mt-5 pt-5 pb-5">
				<h1 className="page-title">Developed by Jinam Sancheti</h1>
			</div>
			<Foot />
		</div>
	);
}
