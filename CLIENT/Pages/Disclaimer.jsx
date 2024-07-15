import React from "react";
import Navbar from "../Components/Navbar";
import Foot from "../Components/Foot";

export default function Disclaimer() {
	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div className="page">
			<Navbar />
			<div className="page">
				<h1 className="display-6 text pt-0 fw-bold page-title">DISCLAIMER</h1>
				<div className="services-text prevent-select">
					<p>
						“Safezen does not provide psychiatric care or treatment for severe mental
						illnesses, including but not limited to suicidal thoughts. The advice and
						information offered by counsellors on the website are for informational
						purposes only and should not be considered a substitute for examination by a
						doctor or other mental health professional. You are strongly advised against
						relying solely on or making decisions based solely on advice provided by any
						counsellor.
					</p>
					<p>
						You understand and agree that while a counsellor may be a qualified clinical
						or counselling psychologist or other mental health professional, Safezen
						disclaims any and all liability for any consultation and therapy services
						rendered by a counsellor to you through the website. You further acknowledge
						and agree that you take full responsibility for the decision to access an
						expert through the website and to continue interacting with such
						individuals. The role of Safezen is strictly limited to providing access to
						these counsellors.
					</p>
					<p>
						The website is not a suicide helpline platform. If you are considering or
						contemplating suicide or feel that you are a danger to yourself or others,
						please discontinue use of the services immediately and contact the
						appropriate police or emergency medical personnel. You can find contacts for
						such emergency services here. ”
					</p>
				</div>
			</div>
			<Foot />
		</div>
	);
}
