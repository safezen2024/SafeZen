import React from "react";
import { email } from "../data_files/checkLoginStatus";
import axios from "axios";
import Navbar from "../Components/Navbar";
import Foot from "../Components/Foot";

export default function Profile() {
	const handleDelete = async () => {
		axios.defaults.withCredentials = true;
		await axios
			.get("https://safezen.onrender.com/logout")
			.then((res) => {
				localStorage.clear();
				//
				location.reload();
				window.location.href = "/";
			})
			.catch((err) => console.log(err));
	};
	return (
		<div>
			<Navbar />
			<h1 className="meditation-text">Hello {email}</h1>
			<div className="logout">
				<button type="button" className="btn m-0" onClick={handleDelete}>
					Logout
				</button>
			</div>
			<Foot />
		</div>
	);
}
