import express from "express";
import env from "dotenv";
import db from "./db.js";
import { OAuth2Client } from "google-auth-library";

var app = express.Router();
env.config();
console.log("Step 0");
export let user_data_google = [];
export let tokenExport = [];

async function getUserData(access_token) {
	console.log("STEP 6");
	const response = await fetch(
		`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${access_token}`
	);
	user_data_google = await response.json();
	console.log("user_data_google", user_data_google);

	try {
		db.query("SELECT * FROM user_data WHERE emailId = ?", [user_data_google.email], (err, checkResult) => {
			if (err) return "Error";
			else if (checkResult.length > 0) {
				return checkResult.length;
			} else {
				if (err) {
					return "Error";
				} else {
					try {
						db.query(
							"INSERT INTO user_data (emailId, Password, age, noOfSessions) VALUES (?, ?, ?, ?)",
							[user_data_google.email, "google", 0, 0],
							(err, result) => {
								if (err) return "Error";
								else {
									const user = result[0];
									console.log("Success");
								}
							}
						);
					} catch (err) {
						return "Error";
					}
				}
			}
		});
	} catch (err) {
		console.log("Error");
	}
}

app.get("/", async function (req, res, next) {
	const code = req.query.code;
	console.log(code);
	console.log("Step 1");
	try {
		const redirectURL = "https://safezen.onrender.com/oauth";
		const oAuth2Client = new OAuth2Client(
			process.env.GOOGLE_CLIENT_ID,
			process.env.GOOGLE_CLIENT_SECRET,
			redirectURL
		);
		const r = await oAuth2Client.getToken(code);
		await oAuth2Client.setCredentials(r.tokens);
		res.cookie("token", r.tokens);
		// console.info("Tokens acquired.", r.tokens);
		tokenExport = r.tokens;
		const user = oAuth2Client.credentials;
		// console.log("credentials", user);
		await getUserData(oAuth2Client.credentials.access_token);
	} catch (err) {
		console.log("Error logging in with OAuth2 user", err);
	}
<<<<<<< HEAD
	if (user_data_google.email_verified) {
		await res.redirect(303, "https://safezen.in");
	} else res.redirect(303, "https://safezen.in/login");
=======
	if (user_data_google.email_verified) await res.redirect(303, "https://safezen.in");
	else res.redirect(303, "https://safezen.in/login");
>>>>>>> fba413eba6d9f4eb05b4e729b6e815b0120e93d2
});

export default app;
