// import Cookies from "js-cookie";
// // import axios from "axios";
// // import { useCookies } from "react-cookie";

// // export let auth = false;
// // // export let email = "";
// // axios.defaults.withCredentials = true;

// // function getCookie(name) {
// // 	const value = `; ${document.cookie}`;
// // 	const parts = value.split(`; ${name}=`);
// // 	if (parts.length === 2) return parts.pop().split(";").shift();
// // }

// // try {
// // 	console.log(document.cookie);
// // 	let token = Cookies.get("token");
// // 	console.log("Retrieved token:", token); // Debugging log

// // 	if (token) {
// // 		if (token.startsWith("j:")) {
// // 			// Retrieve the token from the cookie
// // 			token = token.slice(2);
// // 			try {
// // 				token = JSON.parse(token);
// // 				console.log("Parsed token:", token); // Debugging log
// // 			} catch (err) {
// // 				console.error("Error parsing token:", err);
// // 				auth = false;
// // 			}

// // 			if (token) {
// // 				axios
// // 					.post("https://safezen.onrender.com/verifyToken", { token })
// // 					.then((res) => {
// // 						if (res.data.Status === "Success") {
// // 							console.log("Token verified successfully");
// // 							auth = true;
// // 							// email = res.data.email;
// // 						} else {
// // 							auth = false;
// // 							console.log(res.data.Error);
// // 						}
// // 					})
// // 					.catch((err) => console.error("Error verifying token:", err));
// // 			} else {
// // 				auth = false;
// // 			}
// // 		} else {
// // 			try {
// // 				axios
// // 					.get("https://safezen.onrender.com")
// // 					.then((res) => {
// // 						if (res.data.Status === "Success") {
// // 							auth = true;
// // 							// email = res.data.email;
// // 						} else {
// // 							auth = false;
// // 							console.log(res.data.Error);
// // 						}
// // 					})
// // 					.catch((err) => console.log("Error with GET request:", err));
// // 			} catch (err) {
// // 				console.error("Error with GET request:", err.message);
// // 			}
// // 		}
// // 	} else {
// // 		console.log("Token is not set in cookies");
// // 	}
// // } catch (err) {
// // 	console.error("Error getting token:", err);
// // }

// export let auth = false;
// // import axios from "axios";
// // export let auth = false;
// export let gmail = "";
// // try{
// // 	axios
// // 	.get("https://safezen.onrender.com/verifyGoogleLogin")
// // 	.then((res) => {
// // 		if (res.data.Status === "Success") {
// // 			auth = true;
// // 			gmail = res.data.email;
// // 		} else {
// // 			auth = false;
// // 			console.log(res.data.Error);
// // 		}
// // 	})
// // 	.catch((err) => console.error("Error verifying token:", err));

// // }catch(err){
// // 	console.error("Error verifying token:", err);
// // }

// console.log(document.cookie);
// let token = Cookies.get("token");
// const token2 = localStorage.getItem('token');
// console.log("Retrieved token:", token); // Debugging log
// console.log("Retrieved token2:", token2); // Debugging log

// import Cookies from "js-cookie";
import axios from "axios";

export let auth = false;
export let email = "";
axios.defaults.withCredentials = true;
const token = localStorage.getItem("token");
// console.log(token);
if (token) {
	// if (token[0] === "j" && token[1] == ":") {
	// 	// Retrieve the token from the cookie
	// 	if (token) {
	// 		token = token.slice(2);
	// 		token = JSON.parse(token);
	// 		console.log("token yeh hai: ", token);
	// 		if (token) {
	// 			await axios
	// 				.post("https://safezen.onrender.com/verifyToken", { token })
	// 				.then((res) => {
	// 					if (res.data.Status === "Success") {
	// 						console.log("abcxyz");
	// 						auth = true;
	// 						email = res.data.email;
	// 					} else {
	// 						auth = false;
	// 						console.log(res.data.Error);
	// 					}
	// 				})
	// 				.catch((err) => console.error("Error verifying token:", err));
	// 		} else {
	// 			auth = false;
	// 		}
	// 	}
	// } else {
	try {
		await axios
			.get("https://safezen.onrender.com")
			.then((res) => {
				if (res.data.Status === "Success") {
					console.log("token verify hogaya hai jinam");
					auth = true;
					email = res.data.email;
					console.log(email);
				} else {
					auth = false;
					setMsg(res.data.Error);
				}
			})
			.catch((err) => console.log(err));
	} catch (err) {
		console.error(err.message);
	}
	// }
}
