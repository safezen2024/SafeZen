import React from "react";
import { email } from "../Components/Login";

export default function Profile() {
	return (
		<div>
			<h1 className="meditation-text">Hello {email}</h1>
		</div>
	);
}
