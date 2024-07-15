import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Foot from "../Components/Foot";
import Text from "../Components/text";
import Doctor from "../Components/Doctor";

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
				{/* <hr className="line" /> */}
				<ColoredLine color="darkblue" />
				<Hero />
				{/* <hr className="line" /> */}
				<ColoredLine color="darkblue" />
				<Text />
				{/* <ColoredLine color="blue" /> */}
				<Doctor />
			</div>
			<Foot />
		</div>
	);
}

export default Home;
