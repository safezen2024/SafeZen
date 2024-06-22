import express from "express";
import env from "dotenv";
import { OAuth2Client } from "google-auth-library";

var app = express.Router();
env.config();

app.post("/", async function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "https://safezen.in");
	res.header('Referrer-Policy', 'no-referrer-when-downgrade');
	// Something to fo with http or https ↑
	const redirectUrl = "https://safezen.onrender.com/oauth";

	const oAuth2Client = new OAuth2Client(
		process.env.CLIENT_ID,
		process.env.CLIENT_SECRET,
		redirectUrl
	);
	console.log("Step 4");
	const authorizeUrl = oAuth2Client.generateAuthUrl({
		access_type: 'offline',
		client_id: process.env.GOOGLE_CLIENT_ID,
		// If you need to force the refresh token creation, then only put offline here ↑
		scope: "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email openid",
		prompt: "consent",
	});
	console.log("Step 5");
	return res.json({ url: authorizeUrl });
});

export default app;
