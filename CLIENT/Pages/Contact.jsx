import React from "react";
import Navbar from "../Components/Navbar";
import Foot from "../Components/Foot";

export default function Contact() {
	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div className="page">
			<Navbar />
			<div className="page">
				<div className="text-center hero mb-0">
					<h1 className="display-6 text pt-0 fw-bold page-title">CONTACT US</h1>
					
						{/* <p className="meditation-text">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
							veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
							commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
							velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
							occaecat cupidatat non proident, sunt in culpa qui officia deserunt
							mollit anim id est laborum.
						</p> */}
					
				</div>

				<div className="mb-4">
					<ul className="contact">
						<li className="contact-items">
							<img src="/src/telephone.svg" alt="Call: " class="contact-icon" />
							<h2>9322816441</h2>
						</li>
						<br />
						<li className="contact-items">
							<img src="/src/envelope.svg" alt="Mail: " class="contact-icon" />
							<h2><a href="mailto:help@safezen.in">help@safezen.in</a></h2>
							
						</li>
					</ul>
				</div>
			</div>
			<Foot />
		</div>
	);
}
