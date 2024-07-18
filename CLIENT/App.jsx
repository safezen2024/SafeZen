import React from "react";
import Home from "./Pages/Home";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import Workshop from "./Pages/Workshop";
import IndTherapy from "./Pages/IndTherapy";
import RelTherapy from "./Pages/RelTherapy";
import AppointmentPage1 from "./Pages/AppointmentPage1.jsx";
import AppointmentPage2 from "./Pages/AppointmentPage2.jsx";
import AppointmentPage3 from "./Pages/AppointmentPage3.jsx";
import Contact from "./Pages/Contact";
import Jinam from "./Components/Jinam";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
	Link,
	BrowserRouter,
} from "react-router-dom";
import Pricing from "./Pages/Pricing.jsx";
import Profile from "./Pages/Profile.jsx";
import TermsOfService from "./Pages/TermsOfService";
import PrivacyPolicy from "./Pages/PrivacyPolicy.jsx";
import Disclaimer from "./Pages/Disclaimer";
import AboutUs from "./Pages/AbourUs.jsx";
import { logged_in } from "./Components/Login";
import { auth } from "./data_files/checkLoginStatus.js";

function App() {
	function requireAuth(nextState, replace, next) {
		if (!(logged_in || auth)) {
			replace({
				pathname: "/login",
				state: { nextPathname: nextState.location.pathname },
			});
		}
		next();
	}
	// <Link to="/" element={<Home/>}></Link>
	// /* <Link to="/jinam" element={<Jinam/>}></Link> */

	return (
		<BrowserRouter>
			<Routes>
				{/* <Route path="/*" element={<Home />} /> */}
				<Route path="/" element={<Home />}></Route>
				<Route path="/workshop" element={<Workshop />}></Route>
				<Route path="/IndTherapy" element={<IndTherapy />}></Route>
				<Route path="/RelTherapy" element={<RelTherapy />}></Route>
				<Route path="/signup" element={<SignUp />}></Route>
				<Route path="/login" element={<Login />}></Route>
				<Route path="/pricing" element={<Pricing />}></Route>
				<Route path="/termsofservice" element={<TermsOfService />}></Route>
				<Route path="/privacypolicy" element={<PrivacyPolicy />}></Route>
				<Route path="/disclaimer" element={<Disclaimer />}></Route>
				<Route path="/appointment-page1" element={<AppointmentPage1 />}></Route>
				<Route path="/appointment-page2" element={<AppointmentPage2 />}></Route>
				<Route path="/appointment-page3" element={<AppointmentPage3 />}></Route>
				<Route path="/contact" element={<Contact />}></Route>
				<Route path="/profile" element={<Profile />} onEnter={requireAuth}></Route>
				<Route path="/aboutus" element={<AboutUs />}></Route>
				<Route path="/jinam" element={<Jinam />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
