import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Foot from "../Components/Foot";
import Text from "../Components/Text";
import Doctor from "../Components/Doctor";
import "../Styles/Home.css"; // Import the CSS for animations

function Home() {
	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const ColoredLine = ({ color }) => (
		<hr
			style={{
				color: color,
				backgroundColor: color,
				height: 1,
				margin: 0,
			}}
		/>
	);

	return (
		<div className="page">
			<Navbar />
			<div>
				<ColoredLine color="darkblue" />
				<Hero />
				<ColoredLine color="darkblue" />
				<Text />
				<Doctor />
			</div>
			<Foot />
		</div>
	);
}

export default Home;
