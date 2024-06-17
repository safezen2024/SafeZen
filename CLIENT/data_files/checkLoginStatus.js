import Cookies from "js-cookie";
import axios from "axios";

export let auth = false;
export let email = "";
axios.defaults.withCredentials = true;

let token = Cookies.get("token");
if (token) {
	if (token[0] === "j" && token[1] == ":") {
		// Retrieve the token from the cookie
		if (token) {
			token = token.slice(2);
			token = JSON.parse(token);
			console.log("token yeh hai: ", token);
			if (token) {
				axios
					.post("http://localhost:4666/verifyToken", { token })
					.then((res) => {
						if (res.data.Status === "Success") {
							console.log("abcxyz");
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
		}
	} else {
		try {
			axios
				.get("http://localhost:4666")
				.then((res) => {
					if (res.data.Status === "Success") {
						auth = true;
						email = res.data.email;
					} else {
						auth = false;
						setMsg(res.data.Error);
					}
				})
				.catch((err) => console.log(err));
		} catch (err) {
			console.error(err.message);
		}
	}
}
