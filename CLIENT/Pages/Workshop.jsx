import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Components/Navbar";

import Foot from "../Components/Foot";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
	Link,
	useParams,
} from "react-router-dom";

export default function Workshop() {
	// const params = useParams();

	return (
		<div className="page">
			<Navbar />
			<div className="page">
				<h1 className="display-6 text pt-0 fw-bold page-title">MEDITATION</h1>
				<p className="meditation-text">
					“Meditation offers a sanctuary in the chaos of life. Find solace in stillness,
					clarity in silence. It's your daily escape from stress, a journey inward to
					discover peace. Embrace mindfulness, cultivate serenity. With each breath, find
					renewal, balance, and a deeper connection to yourself and the world around you.”
				</p>
			</div>
			<Foot />
		</div>
	);
}
