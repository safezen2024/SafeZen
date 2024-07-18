import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import googleButton from "/assets/google_signin_buttons/web/1x/btn_google_signin_light_normal_web.png";
const clientId = process.env.clientId;
// axios.defaults.withCredentials = true;
export let logged_in = false;
export let email = "";
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
		const button = document.getElementById("loading-button");
		button.disabled = true;
		// Add the loading animation CSS class
		button.classList.add("button-loader");
		try {
			// console.log(formData);
			axios.defaults.withCredentials = true;
			axios
				.post("https://safezen.onrender.com/login", formData)
				.then((res) => {
					if (res.data.Status === "Success") {
						mt1 = res.data.mt1;
						mt2 = res.data.mt2;
						mt3 = res.data.mt3;
						logged_in = true;
						// const cok = document.cookie();
						// console.log(cok);
						// console.log(document.cookie);
						email = formData.email;
						console.log(res.data.Status);
						button.classList.remove("button-loader");
						navigate("/");
						// window.location.href = "/";
					} else alert(res.data.Error);
				})
				.catch((err) => console.log("	 hai"));
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
		<Navbar/>
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

				<button className="form--submit" id="loading-button">Login</button>
				<br />
				
				<p>-----------OR-----------</p>

				<button className="btn-auth" type="button" onClick={auth}>
					<img className="btn-auth-img" src={googleButton} alt="google sign in" />
				</button>

				{/* <GLogin/> */}
			</form>
		</div>
		<Foot/>
		</div>
	);
}
