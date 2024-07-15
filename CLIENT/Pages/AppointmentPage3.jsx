import React from "react";
import Navbar from "../Components/Navbar";
import Foot from "../Components/Foot";
import AppointmentForm from "../Components/AppointmentForm";

export default function AppointmentPage3() 
{
	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div className="page">
			<Navbar />
			<div>
				<AppointmentForm amt="3"/>
			</div>
			<Foot/>
		</div>
	);	
}
