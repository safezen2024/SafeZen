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
				<div className="text-center hero mb-2">
					<h1 className="display-6 text pt-0 fw-bold page-title">CONTACT US</h1>
				</div>

				<div className="mb-5 services-text">
					<ul className="contact">
						<li className="contact-items">
							<img src="/src/telephone.svg" alt="Call: " class="contact-icon" />
							<p className="contact-item">9322816441</p>
						</li>
						<br />
						<li className="contact-items">
							<img src="/src/envelope.svg" alt="Mail: " class="contact-icon" />
							<p className="contact-item"><a href="mailto:help@safezen.in">help@safezen.in</a></p>
						</li>
					</ul>
				</div>
			</div>
			<Foot />
		</div>
	);
}
