// import express from "express";
// import env from "dotenv";
// import { OAuth2Client } from "google-auth-library";
// import cors from "cors";

// var app = express.Router();
// env.config();

// app.use(function (req, res, next) {
// 	res.setHeader("Access-Control-Allow-Origin", "https://safezen.in");
// 	res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
// 	res.setHeader("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers");
// 	next();
// });

// app.use(
// 	cors({
// 		origin: true,
// 		methods: ["POST", "GET", "PUT", "DELETE"],
// 		allowedHeaders:["Content-Type", "Access-Control-Allow-Headers"],
// 		credentials: true,
// 	})
// );

// app.post("/", async function (req, res, next) {
// 	res.header("Access-Control-Allow-Origin", "*");
// 	res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
// 	res.setHeader("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers");
// 	res.header("Referrer-Policy", "no-referrer-when-downgrade");
// 	// Something to fo with http or https ↑
// 	const redirectUrl = "https://safezen.onrender.com/oauth";

// 	const oAuth2Client = new OAuth2Client(
// 		process.env.CLIENT_ID,
// 		process.env.CLIENT_SECRET,
// 		redirectUrl
// 	);
// 	console.log("Step 4");
// 	const authorizeUrl = oAuth2Client.generateAuthUrl({
// 		access_type: "offline",
// 		client_id: process.env.GOOGLE_CLIENT_ID,
// 		// If you need to force the refresh token creation, then only put offline here ↑
// 		scope: "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email openid",
// 		prompt: "consent",
// 	});
// 	console.log("Step 5");
// 	return res.json({ url: authorizeUrl });
// });

// export default app;



import express from "express";
import env from "dotenv";
import db from "./db.js";
import { OAuth2Client } from "google-auth-library";
import cors from "cors";

var app = express.Router();
env.config();
console.log("Step 0");

export let user_data_google = [];
export let tokenExport = [];

app.use(function (req, res, next) {
	res.setHeader("Access-Control-Allow-Origin", "https://safezen.in");
	res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
	res.setHeader("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers");
	next();
});

app.use(
	cors({
		origin: "https://safezen.in",
		methods: ["POST", "GET", "PUT", "DELETE"],
		allowedHeaders: ["Content-Type", "Access-Control-Allow-Headers"],
		credentials: true,
	})
);

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
				db.query(
					"INSERT INTO user_data (emailId, Password, age, noOfSessions) VALUES (?, ?, ?, ?)",
					[user_data_google.email, "google", 0, 0],
					(err, result) => {
						if (err) return "Error";
						console.log("Success");
					}
				);
			}
		});
	} catch (err) {
		console.log("Error", err);
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
		oAuth2Client.setCredentials(r.tokens);
		res.cookie("token", r.tokens.id_token, {
			httpOnly: true,
			secure: process.env.NODE_ENV === "production",
			sameSite: "None",
			maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
		});
		tokenExport = r.tokens;
		await getUserData(oAuth2Client.credentials.access_token);
	} catch (err) {
		console.log("Error logging in with OAuth2 user", err);
	}
	if (user_data_google.email_verified) {
		res.redirect(303, "https://safezen.in");
	} else {
		res.redirect(303, "https://safezen.in/login");
	}
});

app.get("/verifyGoogleLogin", (req, res) => {
	if (user_data_google.email_verified) {
		let email_user = user_data_google.email;
		return res.json({ Status: "Success", email: email_user });
	} else {
		return res.json({ Status: "Error", Error: "Invalid Token" });
	}
});

export default app;

