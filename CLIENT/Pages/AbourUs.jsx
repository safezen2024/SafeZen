import React from "react";
import Navbar from "../Components/Navbar";
import Foot from "../Components/Foot";
import '../Styles/AboutUs.scss';
import aboutUs2 from '../public/src/about-us2.png'
import TeamCard from "../Components/TeamCard";
import aboutUs1 from '../public/src/about-us1.png'

export default function AboutUs() {
	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div className="page">
			<Navbar />
			<div className="about-top-img">
				<img src={aboutUs1}></img>
				<div className="txt">
					<h2>Empowering Emotional Well-being for Everyone.</h2>
					<p>At safezen, we believe mental well-being is the cornerstone of a fulfilling life. Our mission is to provide accessible, compassionate and professional emotional health support to help individuals thrive.</p>
				</div>
			</div>

			<div className="about-us-info">
				<div className="about-left">
					<h5>Our Story</h5>
					<h2>This is the story of how our company came about</h2>
				</div>

				<div className="about-right">

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
						that can improve with talk therapy. The current system doesn't highlight the benefits of talk therapy enough.
						There isn't a platform that connects trained counselors with everyone who
						needs therapy and also a safe environment is not available everywhere for
						affordable talk therapy.
					</p>
					

					<h3>Our Designed Solution Tackles These Issues Head-on</h3>
					<p>
						Cutting-edge platform: Easily schedule and connect for high-quality video
						sessions with our therapists from home. Top-notch therapists: Access a selection of leading psychology experts
						chosen through a thorough 3-step process. Convenience: Therapy is available whenever and wherever you need it, on any
						device.
					</p>
				</div>
			</div>

			<div className="about-body-img">
			<img src={aboutUs2}></img>
			</div>
			

			<div className="our-team">
				<div className="our-team-heading">
				<h5>Our Team</h5>
				<h2>Meet Our Counsellors</h2>
				<p>Our Designed Solution Tackles These Issues Head-on. Access a selection of leading psychology experts chosen.</p>
				</div>

				<div className="our-team-cards">
					
					<TeamCard img={"/src/Priya Zoting.jpg"} name={"Mrs. Priya Zoting"} jobTitle={"Counselor & Psychotherapist"} paragraph={"Mrs. Priya Zoting specializes in personal development and stress management, helping individuals overcome emotional challenges and enhance their well-being."} socials={["linkedin", "twitter", "third"]}/>
					<TeamCard img={"/src/Dr. Lalit.jpg"} name={"Dr. Latil Nandurkar"} jobTitle={"BAMS, Psychotherapist"} paragraph={"Dr. Latil Nandurkar helps individuals and couples improve communication and strengthen emotional bonds for healthier relationships."} socials={["linkedin", "twitter", "third"]}/>
					<TeamCard img={"/src/Aditi.jpg"} name={"Ms. Aditi Waghmare"} jobTitle={"Clinical psychologist"} paragraph={"Ms. Aditi Waghmare is a clinical psychologist specializing in child counseling, helping children and families navigate emotional challenges and build resilience."} socials={["linkedin", "twitter", "third"]}/>
					<TeamCard img={"/src/Prerna.jpg"} name={"Ms. Prerna Gaidhane"} jobTitle={"Clinical Psychologist"} paragraph={"Ms. Prerna Gaidhane is a dedicated clinical psychologist, specializing in helping individuals overcome emotional challenges and achieve mental well-being."} socials={["linkedin", "twitter", "third"]}/>

					
				</div>

			</div>

			<Foot />
		</div>
	);
}
