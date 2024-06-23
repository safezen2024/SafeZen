// import Cookies from "js-cookie";
// import axios from "axios";

// export let auth = false;
// export let email = "";
// axios.defaults.withCredentials = true;

// try {
// 	let token = Cookies.get("token");
// 	console.log(token);
// 	if (token) {
// 		if (token[0] === "j" && token[1] == ":") {
// 			// Retrieve the token from the cookie
// 			if (token) {
// 				token = token.slice(2);
// 				token = JSON.parse(token);
// 				console.log("token yeh hai: ", token);
// 				if (token) {
// 					axios
// 						.post("https://safezen.onrender.com/verifyToken", { token })
// 						.then((res) => {
// 							if (res.data.Status === "Success") {
// 								console.log("abcxyz");
// 								auth = true;
// 								email = res.data.email;
// 							} else {
// 								auth = false;
// 								console.log(res.data.Error);
// 							}
// 						})
// 						.catch((err) => console.error("Error verifying token:", err));
// 				} else {
// 					auth = false;
// 				}
// 			}
// 		} else {
// 			try {
// 				axios
// 					.get("https://safezen.onrender.com")
// 					.then((res) => {
// 						if (res.data.Status === "Success") {
// 							auth = true;
// 							email = res.data.email;
// 						} else {
// 							auth = false;
// 							setMsg(res.data.Error);
// 						}
// 					})
// 					.catch((err) => console.log(err));
// 			} catch (err) {
// 				console.error(err.message);
// 			}
// 		}
// 	}
// } catch (err) {
// 	console.error("Error geetting token:", err);
// }

import Cookies from "js-cookie";
import axios from "axios";

export let auth = false;
export let email = "";
axios.defaults.withCredentials = true;

try {
	let token = Cookies.get("token");
	console.log("Retrieved token:", token); // Debugging log

	if (token) {
		if (token.startsWith("j:")) {
			// Retrieve the token from the cookie
			token = token.slice(2);
			try {
				token = JSON.parse(token);
				console.log("Parsed token:", token); // Debugging log
			} catch (err) {
				console.error("Error parsing token:", err);
				auth = false;
			}

			if (token) {
				axios
					.post("https://safezen.onrender.com/verifyToken", { token })
					.then((res) => {
						if (res.data.Status === "Success") {
							console.log("Token verified successfully");
							auth = true;
							email = res.data.email;
						} else {
							auth = false;
							console.log(res.data.Error);
						}
					})
					.catch((err) => console.error("Error verifying token:", err));
			} else {
				auth = false;
			}
		} else {
			try {
				axios
					.get("https://safezen.onrender.com")
					.then((res) => {
						if (res.data.Status === "Success") {
							auth = true;
							email = res.data.email;
						} else {
							auth = false;
							console.log(res.data.Error);
						}
					})
					.catch((err) => console.log("Error with GET request:", err));
			} catch (err) {
				console.error("Error with GET request:", err.message);
			}
		}
	} else {
		console.log("Token is not set in cookies");
	}
} catch (err) {
	console.error("Error getting token:", err);
}
