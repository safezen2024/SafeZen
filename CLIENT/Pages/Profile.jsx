import React from "react";
import { email } from "../Components/Login";

export default function Profile() {
	const handleDelete = async () => {
		await axios
			.get("https://safezen.onrender.com/logout")
			.then((res) => {
				location.reload();
			})
			.catch((err) => console.log(err));
	};
	return (
		<div>
			<h1 className="meditation-text">Hello {email}</h1>
			<button type="button" className="btn m-0" onClick={handleDelete}>
				Logout
			</button>
		</div>
	);
}
