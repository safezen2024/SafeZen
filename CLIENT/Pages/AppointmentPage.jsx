import React from "react";
import Navbar from "../Components/Navbar";
import Foot from "../Components/Foot";
import AppointmentForm from "../Components/AppointmentForm";

export default function AppointmentPage() 
{
	return (
		<div className="page">
			<Navbar />
			<div>
				<AppointmentForm/>
			</div>
			<Foot/>
		</div>
	);	
}
