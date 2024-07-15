import React from "react";
import Navbar from "../Components/Navbar";
import Foot from "../Components/Foot";

export default function AboutUs() {
	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div className="page">
			<Navbar />
			<div className="page">
				<h1 className="display-6 text pt-0 fw-bold page-title">ABOUT US</h1>
				<div className="services-text prevent-select">
					<p>
						“Safe and zen together convey a state of being calm, relaxed, and secure.
						"Safe" implies protection from harm or danger, while "zen" refers to a state
						of peace, mindfulness, and tranquility. It was created with the goal of
						bringing more happiness to the world.”
					</p>

					<h3>Issues We Aim To Address</h3>
					<p>
						There is a lack of awareness about mental health. It isn't just about
						diagnosed psychiatric conditions. Feeling lonely, empty, frustrated,
						overwhelmed, or unhappy without a clear cause are also mental health issues
						that can improve with talk therapy.
					</p>
					<p>
						The current system doesn't highlight the benefits of talk therapy enough.
						There isn't a platform that connects trained counselors with everyone who
						needs therapy and also a safe environment is not available everywhere for
						affordable talk therapy.
					</p>

					<h3>Our Designed Solution Tackles These Issues Head-on</h3>
					<p>
						Cutting-edge platform: Easily schedule and connect for high-quality video
						sessions with our therapists from home.
					</p>
					<p>
						Top-notch therapists: Access a selection of leading psychology experts
						chosen through a thorough 3-step process.
					</p>
					<p>
						Convenience: Therapy is available whenever and wherever you need it, on any
						device.
					</p>
				</div>
			</div>
			<Foot />
		</div>
	);
}
