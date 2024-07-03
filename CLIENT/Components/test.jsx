// In your Login component (or wherever you handle the Google login)
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import googleButton from "/assets/google_signin_buttons/web/1x/btn_google_signin_dark_pressed_web.png";
axios.defaults.withCredentials = true;
export default function Login() {
	const [formData, setFormData] = useState({ email: "", password: "" });
	const navigate = useNavigate();

	async function auth() {
		try {
			const response = await fetch("http://localhost:4666/request", { method: "post" });
			const data = await response.json();
			window.location.href = data.url;
		} catch (error) {
			console.error("Error during OAuth request:", error);
		}
	}

	function handleChange(event) {
		const { name, value } = event.target;
		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: value,
		}));
	}

	// axios.defaults.withCredentials = true;

	function handleSubmit(event) {
		event.preventDefault();
		axios
			.post("http://localhost:4666/login", formData)
			.then((res) => {
				if (res.data.Status === "Success") {
					localStorage.setItem("token", res.data.token); // Store the token
					navigate("/");
				} else {
					alert(res.data.Error);
				}
			})
			.catch((err) => console.error("Login error:", err));
	}

	return (
		<div className="form-container">
			<form className="form" onSubmit={handleSubmit}>
				<input
					type="email"
					placeholder="Email address"
					className="form--input"
					name="email"
					onChange={handleChange}
					value={formData.email}
				/>
				<input
					type="password"
					placeholder="Password"
					className="form--input"
					name="password"
					onChange={handleChange}
					value={formData.password}
				/>
				<button className="form--submit">Login</button>
				<br />
				<p>-----------OR-----------</p>
				<button className="btn-auth" type="button" onClick={auth}>
					<img className="btn-auth-img" src={googleButton} alt="Google Sign In" />
				</button>
			</form>
		</div>
	);
}
