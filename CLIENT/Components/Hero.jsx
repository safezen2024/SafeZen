import React, {useState, useEffect} from "react";

export default function Hero() {
	const [image, setImage] = useState("");

	useEffect(() => {
		const handleResize = () => {
			if(window.innerWidth <= 650) 
				setImage("/src/Hero3.jpg");
			else if (window.innerWidth <= 950 && window.innerWidth > 650) 
				setImage("/src/Hero1.jpg");
			else
				setImage("/src/Home_3.jpg");
		};

		window.addEventListener("resize", handleResize);
		handleResize(); // Call initially to set the correct style

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<div className="Hero">
			<img src={image} className="Hero-background" />
		</div>
	);
}
