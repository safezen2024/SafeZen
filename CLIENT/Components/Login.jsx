import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import googleButton from "/assets/google_signin_buttons/web/1x/btn_google_signin_light_normal_web.png";
const clientId = process.env.clientId;
axios.defaults.withCredentials = true;
export let logged_in = false;
export let email = "";

export default function Login() {
	const [formData, setFormData] = React.useState({
		email: "",
		password: "",
	});
	const navigate = useNavigate();
	// axios.defaults.withCredentials = true;
	function auth() {
		try {
			// const response = await fetch("https://safezen.onrender.com/request", { method: "post" });
			// const data = await response.json();
			// console.log(data);
			// // logged_in = true;
			// window.location.href = data.url;
			const response = axios
				.post("https://safezen.onrender.com/request")
				.then(async (res) => {
					const data = await response.json();
					console.log(data);
					window.location.href = data.url;
				})
				.catch((err) => console.log("Error"));
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

	//

	function handleSubmit(event) {
		event.preventDefault();
		try {
			// console.log(formData);
			axios
				.post("https://safezen.onrender.com/login", formData)
				.then((res) => {
					if (res.data.Status === "Success") {
						logged_in = true;
						// const cok = document.cookie();
						// console.log(cok);
						document.cookie =
							"username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC";
						console.log(document.cookie);
						email = formData.email;
						console.log(res.data.Status);
						navigate("/");
						// window.location.href = "/";
					} else alert(res.data.Error);
				})
				.catch((err) => console.log("Idhar error hai"));
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

				<button className="form--submit">Login</button>
				<br />
				{/* 
				<p>-----------OR-----------</p>

				<button className="btn-auth" type="button" onClick={auth}>
					<img className="btn-auth-img" src={googleButton} alt="google sign in" />
				</button> */}

				{/* <GLogin/> */}
			</form>
		</div>
	);
}
