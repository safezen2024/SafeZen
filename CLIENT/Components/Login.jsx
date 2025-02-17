import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const clientId = import.meta.env.clientId;
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import Navbar from "./Navbar";
import Foot from "./Foot";
export let mt1, mt2, mt3;

export default function Login() {
	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	const [formData, setFormData] = React.useState({
		email: "",
		password: "",
	});
	const navigate = useNavigate();

	function handleChange(event) {
		const { name, value } = event.target;
		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: value,
		}));
	}

	//

	function handleSubmit(event) {
		event.preventDefault();
		const button = document.getElementById("loading-button");
		button.disabled = true;
		// Add the loading animation CSS class
		button.classList.add("button-loader");
		try {
			// console.log(formData);
			axios.defaults.withCredentials = true;
			axios
				.post("https://safezen.onrender.com/login", formData, {
					withCredentials: true,
				})
				.then((res) => {
					if (res.data.Status === "Success") {
						mt1 = res.data.mt1;
						mt2 = res.data.mt2;
						mt3 = res.data.mt3;
						localStorage.setItem("token", res.data.token);
						console.log(res.data.Status);
						button.classList.remove("button-loader");
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

	function onSuccess(res) {
		console.log("Login Success! Current User : ", res.profileObj);
	}
	function onFailure(res) {
		console.log("Login Failed, res : ", res);
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
					<button className="form--submit" id="loading-button">
						Login
					</button>
					<br />
					<p>-----------OR-----------</p>
					{/* <button className="btn-auth" type="button" onClick={auth}>
						<img className="btn-auth-img" src={googleButton} alt="google sign in" />
					</button> */}
					<GoogleLogin
						onSuccess={(credentialResponse) => {
							const credentials = jwtDecode(credentialResponse.credential);
							console.log(credentials.email);
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
