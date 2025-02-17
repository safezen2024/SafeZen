import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Foot from "../Components/Foot";
import Doctor from "../Components/Doctor";
import "../Styles/Home.css"; // Import the CSS for animations
import Hero2 from "../Components/Hero2";

function Home() {
	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, []);


	return (
		<div className="page">
			<Navbar />
			<div>
				<Hero />
				<Hero2/>
				
				{/* <Doctor /> */}
			</div>
			<Foot />
		</div>
	);
}

export default Home;
