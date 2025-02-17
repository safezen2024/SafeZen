import React, { useState, useEffect } from "react";
import "../Styles/Hero.scss";
import NewHome1 from "../public/src/NewHome1.jpg";
import { FaArrowRight } from "react-icons/fa";
import roundArrow from "../public/src/roundArrow.png";



export default function Hero() {
	// const [image, setImage] = useState("");

	// useEffect(() => {
	// 	const handleResize = () => {
	// 		if (window.innerWidth <= 650) setImage("/src/Hero3.jpg");
	// 		else if (window.innerWidth <= 950 && window.innerWidth > 650)
	// 			setImage("/src/Hero1.jpg");
	// 		else setImage("/src/Home_3 (1).jpg");
	// 	};

	// 	window.addEventListener("resize", handleResize);
	// 	handleResize(); // Call initially to set the correct style

	// 	return () => window.removeEventListener("resize", handleResize);
	// }, []);

	return (
		<div className="hero">
			<img src={NewHome1} alt="hero" />
			<div className="blur-gradient"></div>
			<div className="hero-text">
				<span className="hero-capsule">TRUST US FOR PSYCHIATRIST</span>
				<h2>Are you ready to break free from <span>stress</span>?</h2>
				<p>Discover Holistic Mental Healthcare therapy, Find peace and well-being with personalized therapy and counseling in SafeZen.</p>
				<button onClick={()=>window.location.href="/pricing"}>Register Now <FaArrowRight/></button>
				<img src={roundArrow} alt="roundArrow" />
			</div>
		</div>
	);
}
