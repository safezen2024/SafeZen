import React from "react";
import Navbar from "../Components/Navbar";
import Foot from "../Components/Foot";
import { auth } from "../data_files/checkLoginStatus";
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
		<div className="page">
			<Navbar />
			<div className="page">
				<h1 className="display-6 text pt-0 fw-bold page-title">WORKSHOPS</h1>
				<p className="meditation-text workshop-text">
					<strong className="workshop-item">SYNERGY</strong>
					<br />
					<br />
					{/* “Meditation offers a sanctuary in the chaos of life. Find solace in stillness,
					clarity in silence. It's your daily escape from stress, a journey inward to
					discover peace. Embrace mindfulness, cultivate serenity. With each breath, find
					renewal, balance, and a deeper connection to yourself and the world around you.”
					<br />
					<br />
					We are delighted to announce the launch of our new and free activity, Meditation
					at 5-6 pm, on Every Thursday, Get register yourself.
					<br />
					<br /> */}
					We are pleased to announce the launch of our new program, <b>Synergy</b>,
					designed to foster communication between students, parents, and our counseling
					staff. This initiative provides a supportive environment for sharing thoughts
					and concerns.
					<br />
					<br />
					<b>Program Schedule:</b>
					<br />
					<br />
					For Students: 3:00 - 4:00 PM During this hour, students can express their
					psychological and emotional concerns while learning from their interactions with
					peers and counselors.
					<br />
					For Parents: 4:00 - 5:00 PM Parents are encouraged to participate in discussions
					about parenting challenges and to seek clarification on any questions they may
					have.
					<br />
					We invite all students and parents to take advantage of this valuable
					opportunity for connection and growth.
					<br />
					<br />
					<button
						className="btn"
						onClick={() => {
							setFlag(true);
						}}>
						Register
					</button>
					{flag && (auth) && <h5>https://meet.google.com/xrr-oncb-aby</h5>}
					{flag && !(auth) && <h5>Please Login first !!</h5>}
				</p>
			</div>
			<Foot />
		</div>
	);
}
