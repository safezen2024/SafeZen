import React, {useState, useEffect} from "react";

export default function Hero() {
	const [image, setImage] = useState("/src/hero.jpg");

	useEffect(() => {
		const handleResize = () => {
			if(window.innerWidth <= 500) 
				setImage("/src/Hero3.jpg");
			else if (window.innerWidth <= 800 && window.innerWidth > 500) 
				setImage("/src/Hero2.jpg");
			else
				setImage("/src/hero.jpg");
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
