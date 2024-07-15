import React from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
// env.config();

export default function Foot() {
	const [phone_no, setPhoneNo] = React.useState();
	function handleNumChange(event) {
		setPhoneNo(event.target.value);
	}
	function handleSubmit(event) {
		event.preventDefault();
		const mailData = {
			phone_no: phone_no,
		};
		try {
			console.log(mailData);
			emailjs
				.send(
					import.meta.env.VITE_CALL_EMAILJS_SERVICE_ID,
					import.meta.env.VITE_CALL_EMAILJS_TEMPLATE_ID,
					mailData,
					import.meta.env.VITE_EMAILJS_PUBLIC_ID
				)
				.then(
					(result) => {
						console.log(result);
						console.log("SUCCESS!");
						alert(`Call Booked for ${phone_no}`);
					},
					(err) => {
						console.log("FAILED...", err);
					}
				);
		} catch (err) {
			console.error(err.message);
		}
	}
	return (
		<div>
			<div>
				<footer className="border-top footer">
					<div className="footer_col1">
						<a
							href="/"
							className="d-inline-flex link-body-emphasis text-decoration-none brand_head">
							<img src="/src//Circle_Logo.PNG" alt="brand-logo" height="60" />
							<div className="brand-name">
								<h1 className="navbar-text m-0 p-0">SafeZen</h1>
								<p className="navbar-text subtitle">From your home to your heart</p>
							</div>
						</a>
						<div className="footer-contact">
							<p>VNIT College, Near South Ambazari Road, Nagpur 440010, India</p>
							<p>
								<a href="mailto:help@safezen.in">help@safezen.in</a>
							</p>
							<p>
								<a href="tel:+919322816441">+91 9322816441</a>
							</p>
						</div>
					</div>

					<div className="footer-text">
						<h4>
							<strong>Quick Links</strong>
						</h4>
						<ul className="nav flex-column footer-text">
							<Link to="/">
								<li className="nav-item mb-2">Home</li>
							</Link>
							<Link to="/IndTherapy">
								<li className="nav-item mb-2">Individual Therapy</li>
							</Link>
							<Link to="/RelTherapy">
								<li className="nav-item mb-2">Relationship Therapy</li>
							</Link>
							<Link to="/workshop">
								<li className="nav-item mb-2">Workshop</li>
							</Link>
							<Link to="/Contact">
								<li className="nav-item mb-2">Contact</li>
							</Link>
							<Link to="/aboutus">
								<li className="nav-item mb-2">About Us</li>
							</Link>
						</ul>
					</div>
					<div className="footer-text">
						<h4>
							<strong>Legalities</strong>
						</h4>
						<ul className="nav flex-column footer-text">
							<Link to="/termsofservice">
								<li className="nav-item mb-2">Terms Of Service</li>
							</Link>
							<Link to="/privacypolicy">
								<li className="nav-item mb-2">Privacy Policy</li>
							</Link>
							<Link to="/disclaimer">
								<li className="nav-item mb-2">Disclaimer</li>
							</Link>
							<Link to="/pricing">
								<li className="nav-item mb-2">Pricing</li>
							</Link>
						</ul>
					</div>
					{/* <div className="footer-callback">
						<p className="footer-text">We are here to help you :)</p>
						<form className="req-callback" onSubmit={handleSubmit}>
							<input
								type="text"
								placeholder="Enter your phone number"
								onChange={handleNumChange}
								value={phone_no}
							/>
							<button className="btn">
								Request Callback
							</button>
						</form>
					</div> */}
				</footer>
			</div>
		</div>
	);
}

// import React from "react";
// // import logo from '/src//Circle_Logo.PNG';
// // import facebookIcon from '/src//Circle_Logo.PNG';
// // import twitterIcon from '/src//Circle_Logo.PNG';
// // import instagramIcon from '/src//Circle_Logo.PNG';
// // import youtubeIcon from '/src//Circle_Logo.PNG';
// // import pinterestIcon from '/src//Circle_Logo.PNG';
// import { Link } from "react-router-dom";

// export default function Footer() {
// 	return (
// 		<footer>
// 			<div className="footer-container">
// 				<div className="footer-left">
// 					<a
// 						href="/"
// 						className="d-inline-flex link-body-emphasis text-decoration-none brand_head">
// 						<img src="/src//Circle_Logo.PNG" alt="brand-logo" height="60" />
// 						<div className="brand-name">
// 							<h1 className="navbar-text m-0 p-0">SafeZen</h1>
// 							<p className="navbar-text subtitle">From your home to your heart</p>
// 						</div>
// 					</a>
// 					<div className="footer-contact">
// 						<p>Hostel block 4, VNIT Boys Hostel, Nagpur 440010, India</p>
// 						<p>
// 							<a href="mailto:help@safezen.in">help@safezen.in</a>
// 						</p>
// 						<p>
// 							<a href="tel:+919322816441">+91 9322816441</a>
// 						</p>
// 					</div>
// 					{/* <div className="footer-social">
//                         <a href="#"><img src={facebookIcon} alt="Facebook" /></a>
//                         <a href="#"><img src={twitterIcon} alt="Twitter" /></a>
//                         <a href="#"><img src={instagramIcon} alt="Instagram" /></a>
//                         <a href="#"><img src={youtubeIcon} alt="YouTube" /></a>
//                         <a href="#"><img src={pinterestIcon} alt="Pinterest" /></a>
//                     </div> */}
// 				</div>
// 				<div className="footer-middle">
// 					<h3>Quick Links</h3>
// 					<ul>
// 						<li>
// 							<a href="#">For Corporates</a>
// 						</li>
// 						<li>
// 							<a href="#">For Therapists</a>
// 						</li>
// 						<li>
// 							<a href="#">Contact</a>
// 						</li>
// 						<li>
// 							<a href="#">About us</a>
// 						</li>
// 					</ul>
// 				</div>
// 				<div className="footer-right">
// 					<h3>Legal Stuff</h3>
// 					<ul>
// 						<li>
// 							<a href="#">Disclaimer</a>
// 						</li>
// 						<li>
// 							<a href="#">Privacy Policy</a>
// 						</li>
// 						<li>
// 							<a href="#">Terms Of Service</a>
// 						</li>
// 					</ul>
// 				</div>
// 				<div className="footer-callback">
// 					<p>We are here to make sure that you are always happy</p>
// 					<form>
// 						<input type="text" placeholder="Enter your phone number" />
// 						<button type="submit">Request Callback</button>
// 					</form>
// 				</div>
// 			</div>
// 		</footer>
// 	);
// }
