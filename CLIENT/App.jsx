import React from "react";
import Home from "./Pages/Home";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import Workshop from "./Pages/Workshop";
import IndTherapy from "./Pages/IndTherapy";
import RelTherapy from "./Pages/RelTherapy";
import Checkout1 from "./Pages/Checkout1";
import Checkout2 from "./Pages/Checkout2";
import AppointmentPage from "./Pages/AppointmentPage";
import Contact from "./Pages/Contact";
import Jinam from "./Components/Jinam";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Pricing from "./Pages/pricing.jsx";
import TermsOfService from "./Pages/TermsOfService";
import PrivacyPolicy from "./Pages/PrivacyPolicy.jsx";
import Disclaimer from "./Pages/Disclaimer";
import AboutUs from "./Pages/AbourUs.jsx";

function App() {
	function requireAuth(nextState, replace, next) {
		if (!authenticated) {
			replace({
				pathname: "/login",
				state: { nextPathname: nextState.location.pathname },
			});
		}
		next();
	}
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/workshop" element={<Workshop />}></Route>
					<Route path="/IndTherapy" element={<IndTherapy />}></Route>
					<Route path="/RelTherapy" element={<RelTherapy />}></Route>
					<Route path="/signup" element={<SignUp />}></Route>
					<Route path="/login" element={<Login />}></Route>
					<Route path="/checkout/step1" element={<Checkout1 />}></Route>
					<Route path="/checkout/step2" element={<Checkout2 />}></Route>
					<Route path="/pricing" element={<Pricing />}></Route>
					<Route path="/termsofservice" element={<TermsOfService/>}></Route>
					<Route path="/privacypolicy" element={<PrivacyPolicy/>}></Route>
					<Route path="/disclaimer" element={<Disclaimer/>}></Route>
					<Route path="/appointment-page" element={<AppointmentPage />}></Route>
					<Route path="/contact" element={<Contact />} onEnter={requireAuth}></Route>
					<Route path="/aboutus" element={<AboutUs/>}></Route>
					<Route path="/jinam" element={<Jinam />}></Route>
					<Route path="*" element={<Navigate to="/" />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
