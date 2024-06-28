// import Cookies from "js-cookie";
// import axios from "axios";
// import { useCookies } from "react-cookie";

// export let auth = false;
// // export let email = "";
// axios.defaults.withCredentials = true;

// function getCookie(name) {
// 	const value = `; ${document.cookie}`;
// 	const parts = value.split(`; ${name}=`);
// 	if (parts.length === 2) return parts.pop().split(";").shift();
// }

// try {
// 	console.log(document.cookie);
// 	let token = Cookies.get("token");
// 	console.log("Retrieved token:", token); // Debugging log

// 	if (token) {
// 		if (token.startsWith("j:")) {
// 			// Retrieve the token from the cookie
// 			token = token.slice(2);
// 			try {
// 				token = JSON.parse(token);
// 				console.log("Parsed token:", token); // Debugging log
// 			} catch (err) {
// 				console.error("Error parsing token:", err);
// 				auth = false;
// 			}

// 			if (token) {
// 				axios
// 					.post("https://safezen.onrender.com/verifyToken", { token })
// 					.then((res) => {
// 						if (res.data.Status === "Success") {
// 							console.log("Token verified successfully");
// 							auth = true;
// 							// email = res.data.email;
// 						} else {
// 							auth = false;
// 							console.log(res.data.Error);
// 						}
// 					})
// 					.catch((err) => console.error("Error verifying token:", err));
// 			} else {
// 				auth = false;
// 			}
// 		} else {
// 			try {
// 				axios
// 					.get("https://safezen.onrender.com")
// 					.then((res) => {
// 						if (res.data.Status === "Success") {
// 							auth = true;
// 							// email = res.data.email;
// 						} else {
// 							auth = false;
// 							console.log(res.data.Error);
// 						}
// 					})
// 					.catch((err) => console.log("Error with GET request:", err));
// 			} catch (err) {
// 				console.error("Error with GET request:", err.message);
// 			}
// 		}
// 	} else {
// 		console.log("Token is not set in cookies");
// 	}
// } catch (err) {
// 	console.error("Error getting token:", err);
// }

import axios from "axios";
export let auth = false;

try{
	axios
	.get("https://safezen.onrender.com/verifyGoogleLogin")
	.then((res) => {
		if (res.data.Status === "Success") {
			auth = true;
			// email = res.data.email;
		} else {
			auth = false;
			console.log(res.data.Error);
		}
	})
	.catch((err) => console.error("Error verifying token:", err));

}catch(err){
	console.error("Error verifying token:", err);
}