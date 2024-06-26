import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import googleButton from "/assets/google_signin_buttons/web/1x/btn_google_signin_light_normal_web.png";
const clientId = process.env.clientId;

export default function Login() {
	const [formData, setFormData] = React.useState({
		email: "",
		password: "",
	});
	const navigate = useNavigate();

	async function auth() {
		try {
			const response = await fetch("https://safezen.onrender.com/request", { method: "post" });
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

	axios.defaults.withCredentials = true;

	function handleSubmit(event) {
		event.preventDefault();
		try {
			// console.log(formData);
			axios
				.post("https://safezen.onrender.com/login", formData)
				.then((res) => {
					if (res.data.Status === "Success") 
					{
						console.log(res);	
						// navigate("/");
						window.location.href = "/";
					}
					else alert(res.data.Error);
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
				{/* <hr height="2px" border-width="0" color="gray" background-color="gray" /> */}
				<p>-----------OR-----------</p>

				{/*<div >
					<div className="card social-block">
						<div className="card-body">
							<a className="btn-block" href="/auth/google" role="button">
								<i className="fab fa-google"></i>
								Sign In with Google
							</a>
						</div>
					</div>
				</div> */}
				<button className="btn-auth" type="button" onClick={auth}>
					<img className="btn-auth-img" src={googleButton} alt="google sign in" />
				</button>

				{/* <GLogin/> */}
			</form>
		</div>
	);
}
