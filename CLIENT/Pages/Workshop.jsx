import React from "react";
import Navbar from "../Components/Navbar";
import Foot from "../Components/Foot";
import { auth } from "../data_files/checkLoginStatus";
import workshopImg from '../public/src/relation-banner-2.png'
import { PiCubeFill } from "react-icons/pi";
import '../Styles/Workshop.scss'
// import { logged_in } from "../Components/Login";

export default function Workshop() {
	// const params = useParams();
	const [flag, setFlag] = React.useState(false);
	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	React.useEffect(() => {
		console.log(flag);
	}, [flag]);

	return (
		<div>
			<Navbar />
			<div className="page">
				<div className="workshop-img">
					<img src={workshopImg} alt="workshop" />
					<div className="filter"></div>
					<div className="txt">
					    <h2>Workshops</h2>
						<p>Empower growth and strengthen connections with engaging, real-life workshops. </p>
					</div>
				</div>

				<div className="our-values">
					<h5>Our Values</h5>
					<h2>Foster communication between students, parents, and our counseling staff</h2>
					<p>We are pleased to announce the launch of our new program, Synergy, designed to foster communication between students, parents, and our counseling staff. This initiative provides a supportive environment for sharing thoughts and concerns.</p>
				</div>

				<div className="blue-line"></div>

				<div className="workshop-details">

					<div className="for-students">
						<PiCubeFill fontSize={'2.5rem'} color="#000"/>
						<h3>For Students</h3>
						<p className="time">( 3:00 - 4:00 PM )</p>
						<p>Join us for a dedicated hour designed to empower students in sharing their thoughts and feelings in a safe and supportive environment. Gain clarity, confidence, and strategies to navigate academic and personal challenges effectively.</p>
						<p><b>📢 Reserve your spot now to take the first step toward positive change!</b></p>
					</div>

					<div className="for-parents">
						<PiCubeFill fontSize={'2.5rem'} color="#000"/>
						<h3>For Parents</h3>
						<p className="time">( 4:00 - 5:00 PM )</p>
						<p>This session provides parents with tools and insights to better understand and support their child’s emotional well-being. Engage in open dialogue and learn effective ways to foster a positive and nurturing relationship.</p>
						<p><b>📢 Sign up today and start building a stronger connection with your child!</b></p>
					</div>

				</div>

					{/* <button
						className="btn"
						onClick={() => {
							setFlag(true);
						}}>
						Register
					</button>
					{flag && (auth) && <h5>https://meet.google.com/xrr-oncb-aby</h5>}
					{flag && !(auth) && <h5>Please Login first !!</h5>} */}
			</div>
			<Foot />
		</div>
	);
}
