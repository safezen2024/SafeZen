import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import googleButton from "/assets/google_signin_buttons/web/1x/btn_google_signin_light_normal_web.png";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import Foot from "./Foot";
import Navbar from "./Navbar";
// axios.defaults.withCredentials = true;
export default function SignUp() {
	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	const [formData, setFormData] = React.useState({
		email: "",
		password: "",
		age: "",
		joinedNewsletter: true,
	});
	const navigate = useNavigate();

	function goTo(url) {
		window.location.href = url;
	}
	// async function auth() {
	// 	const response = await fetch("https://safezen.onrender.com/request", { method: "post" });

	// 	const data = await response.json();
	// 	console.log(data);
	// 	const red_url = data.url;
	// 	console.log(red_url);
	// 	goTo(red_url);
	// }

	function handleChange(event) {
		const { name, value, type, checked } = event.target;
		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: type === "checkbox" ? checked : value,
		}));
	}
	// axios.defaults.withCredentials = true;
	async function handleSubmit(event) {
		event.preventDefault();
		const button = document.getElementById("loading-button");
		button.disabled = true;
		// Add the loading animation CSS class
		button.classList.add("button-loader");
		try {
			console.log(formData);
			axios.defaults.withCredentials = true;
			await axios
				.post("https://safezen.onrender.com/signup", formData)
				.then((res) => {
					if (res.data.Status === "Success") {
						button.classList.remove("button-loader");
						navigate("/login");
					} else alert(res.data.Error);
				})
				.catch((err) => console.log(err));
		} catch (err) {
			console.log("snfjksuusf fsdfsef hfhsdkkfho");
			console.error(err.message);
		}
		if (formData.joinedNewsletter) {
			console.log("Thanks for signing up for our newsletter!");
		}
	}

	return (
		<div>
			<Navbar />
			<div className="form-container">
				<form className="form" onSubmit={handleSubmit}>
					<input
						required
						type="email"
						placeholder="Email address"
						className="form--input mb-1"
						name="email"
						onChange={handleChange}
						value={formData.email}
					/>
					<input
						required
						type="password"
						placeholder="Password"
						className="form--input mb-1"
						name="password"
						onChange={handleChange}
						value={formData.password}
					/>
					<input
						required
						type="text"
						placeholder="Enter your Age"
						className="form--input mb-1"
						name="age"
						onChange={handleChange}
						value={formData.age}
					/>

					<div className="form--marketing">
						<input
							id="okayToEmail"
							type="checkbox"
							name="joinedNewsletter"
							onChange={handleChange}
							checked={formData.joinedNewsletter}
						/>
						<label htmlFor="okayToEmail">I want to join the newsletter</label>
					</div>
					<button className="form--submit" id="loading-button">
						Sign up
					</button>

					<br />
					{/* <hr height="2px" border-width="0" color="gray" background-color="gray" /> */}
					<p>-----------OR-----------</p>

					{/* <button className="btn-auth" type="button" onClick={() => auth()}>
					<img className="btn-auth-img" src={googleButton} alt="google sign in" />
					</button> */}
					<GoogleLogin
						onSuccess={(credentialResponse) => {
							const credentials = jwtDecode(credentialResponse.credential);
							console.log(credentials);
							if (credentials.email_verified) {
								try {
									axios.defaults.withCredentials = true;
									axios
										.post(
											"https://safezen.onrender.com/login-google",
											{ email: credentials.email, password: "google" },
											{
												withCredentials: true,
											}
										)
										.then((res) => {
											if (res.data.Status === "Success") {
												mt1 = res.data.mt1;
												mt2 = res.data.mt2;
												mt3 = res.data.mt3;
												localStorage.setItem("token", res.data.token);
												console.log(res.data.Status);
												// button.classList.remove("button-loader");
												// navigate("/");
												window.location.href = "/";
											} else alert(res.data.Error);
										})
										.catch((err) => console.log("hai", err));
								} catch (err) {
									console.log("snfjksuusf fsdfsef hfhsdkkfho  login");
									console.error(err.message);
								}
							}
						}}
						onError={() => {
							console.log("Login Failed");
						}}
					/>
				</form>
			</div>
			<Foot />
		</div>
	);
}
