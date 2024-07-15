import React from "react";
import Navbar from "../Components/Navbar";
import Foot from "../Components/Foot";

export default function Workshop() {
	// const params = useParams();
	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div className="page">
			<Navbar />
			<div className="page">
				<h1 className="display-6 text pt-0 fw-bold page-title">WORKSHOPS</h1>
				<p className="meditation-text workshop-text">
					<strong className="workshop-item">MEDITATION</strong>
					<br />
					{/* <br /> */}
					“Meditation offers a sanctuary in the chaos of life. Find solace in stillness,
					clarity in silence. It's your daily escape from stress, a journey inward to
					discover peace. Embrace mindfulness, cultivate serenity. With each breath, find
					renewal, balance, and a deeper connection to yourself and the world around you.”
					<br />
					<br />
					We are delighted to announce the launch of our new and free activity, Meditation
					at 5-6 pm, on Every Thursday, Get register yourself.
					<br />
					<br />
					<button className="btn">Register</button>
				</p>
			</div>
			<Foot />
		</div>
	);
}
