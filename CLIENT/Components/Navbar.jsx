import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Illness from "./Illness";
import axios from "axios";
import { auth } from "../data_files/checkLoginStatus";
import { logged_in, email } from "./Login";
axios.defaults.withCredentials = true ;
export default function Navbar() {
	// axios.defaults.withCredentials = true;
	const handleDelete = async() => {
		await axios
			.get("https://safezen.onrender.com/logout")
			.then((res) => {
				location.reload();
			})
			.catch((err) => console.log(err));
	};
	console.log(auth);
	return (
		<nav className="navbar navbar-expand-lg">
			<a
				href="/"
				className="d-inline-flex link-body-emphasis text-decoration-none brand_head">
				<img src="/src//Circle_Logo.PNG" alt="brand-logo" height="60" />
				<div className="brand-name">
					<h1 className="navbar-text m-0 p-0">SafeZen</h1>
					<p className="navbar-text subtitle">From your home to your heart</p>
				</div>
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarNavDropdown"
				aria-controls="navbarNavDropdown"
				aria-expanded="false"
				aria-label="Toggle navigation">
				{/* <span className="navbar-toggler-icon"></span> */}
				{/* <img src="/src//profile_img.jpg" className="profile-img" height="45vh"/> */}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="30"
					height="30"
					fill="currentColor"
					class="bi bi-list"
					viewBox="0 0 16 16">
					<path
						fill-rule="evenodd"
						d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
					/>
				</svg>
			</button>
			<div className="collapse navbar-collapse" id="navbarNavDropdown">
				<div>
					<ul className="navbar-nav">
						<Link to="/">
							<li className="nav-item">
								<a className="nav-link navbar-text" href="/">
									Home
								</a>
							</li>
						</Link>
						<li className="nav-item dropdown">
							<Illness />
						</li>
						<Link to="/workshop">
							<li className="nav-item">
								<a className="nav-link navbar-text" href="/workshop">
									Workshops
								</a>
							</li>
						</Link>
						<Link to="/contact">
							<li className="nav-item">
								<a className="nav-link navbar-text" href="/contact">
									Contact
								</a>
							</li>
						</Link>
					</ul>
				</div>
				<div className="col-md-3 text-end account-buttons">
					{!(logged_in || auth) ? (
						<div>
							<Link to="/login" id="props.id">
								<button type="button" className="btn me-2">
									Login
								</button>
							</Link>
							<Link to="/signup" id="props.id">
								<button type="button" className="btn btn-sign-up">
									Sign-up
								</button>
							</Link>
						</div>
					) : (
						<div className="profile-logout">
							<img
								src="/src//profile_img.jpg"
								className="profile-img"
								height="45vh"
							/>
							<Link to="/logout" id="props.id">
								<button type="button" className="btn m-0" onClick={handleDelete}>
									Logout
								</button>
							</Link>
						</div>
					)}
				</div>
			</div>
		</nav>
	);
}
