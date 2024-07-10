import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import bcrypt from "bcrypt";
import session from "cookie-session";
import env from "dotenv";
import db from "./db.js";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import authRouter, { tokenExport, user_data_google } from "./oAuth.js";
import requestRouter from "./request.js";
import { Cashfree } from "cashfree-pg";
import crypto from "crypto";
env.config();

const app = express();
const port = process.env.PORT;
const saltRounds = 10;
const secret = process.env.SESSION_SECRET;

app.use(
	cors({
		origin: true,
		methods: ["POST", "GET", "PUT", "DELETE"],
		allowedHeaders: ["Content-Type", "Access-Control-Allow-Headers"],
		credentials: true,
		exposedHeaders: ["Cookie"],
	})
);

app.use(express.json()); //req.body
app.use(
	express.urlencoded({
		extended: true,
	})
);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
	session({
		key: "userID",
		secret: process.env.SESSION_SECRET,
		resave: false,
		saveUninitialized: false, //  D  -  O  -  U  -  B  -  T
		cookie: {
			// token: "token",
			maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
			expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
			httpOnly: false, // Ensures the cookie is sent only over HTTP(S), not client JavaScript
			// secure: process.env.NODE_ENV === "production", // Ensures the cookie is sent only over HTTPS
			secure: true,
			sameSite: "None",
		},
	})
);

app.use(function (req, res, next) {
	res.setHeader("Access-Control-Allow-Origin", "https://safezen.in");
	res.setHeader("Access-Control-Allow-Methods", "*");
	res.setHeader("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers");
	next();
});

app.use("/oauth", authRouter);
app.use("/request", requestRouter);

Cashfree.XClientId = process.env.CLIENT_ID;
Cashfree.XClientSecret = process.env.CLIENT_SECRET;
Cashfree.XEnvironment = Cashfree.Environment.PRODUCTION;

function generateOrderId() {
	const uniqueId = crypto.randomBytes(16).toString("hex");
	const hash = crypto.createHash("sha256");
	hash.update(uniqueId);
	const orderId = hash.digest("hex");
	return orderId.substr(0, 12);
}

const verifyUser = (req, res, next) => {
	const token = req.cookies.token;
	if (!token) return res.json({ Error: "You need to sign in" });
	else {
		jwt.verify(token, process.env.SESSION_SECRET, (err, decoded) => {
			if (err) return res.json({ Error: "Token is not same" });
			else {
				req.email = decoded.email;
				next();
			}
		});
	}
};

app.post("/verifyToken", (req, res) => {
	let token = req.body.token;
	// token = token.token;
	let tokenImported = tokenExport;
	token = JSON.stringify(token);
	tokenImported = JSON.stringify(tokenImported);
	if (token === tokenImported) {
		let email_user = user_data_google.email;
		res.json({ Status: "Success", email: email_user });
	} else {
		// console.log("Alag hai tokens");
		res.json({ Status: "Error", Error: "Invalid Token" });
	}
});

app.get("/", verifyUser, (req, res) => {
	res.send({ Status: "Success", email: req.email });
});

app.get("/logout", (req, res) => {
	res.clearCookie("token");
	return res.json({ Status: "Success" });
});

app.get("/IndTherapy", (req, res) => {
	try {
		const sql = "SELECT * FROM indtherapy";
		db.query(sql, (err, data) => {
			if (err) return res.json(err);
			return res.json(data);
		});
	} catch (err) {
		console.error(err.message);
	}
});

app.get("/test", (req, res) => {
	res.send("Server Working");
});

app.get("/RelTherapy", (req, res) => {
	try {
		const sql = "SELECT * FROM reltherapy";
		db.query(sql, (err, data) => {
			if (err) return res.json(err);
			return res.json(data);
		});
	} catch (err) {
		console.error(err.message);
	}
});

app.get("/doctorsData", (req, res) => {
	try {
		const sql = "SELECT * FROM doctor_data";
		db.query(sql, (err, data) => {
			if (err) return res.json(err);
			// console.log(data);
			return res.json(data);
		});
	} catch (err) {
		console.error(err.message);
	}
});

app.post("/login", (req, res) => {
	const email = req.body.email;
	const password = req.body.password;
	try {
		db.query("SELECT * FROM user_data WHERE emailID = ? ", [email], (err, result) => {
			if (err) return res.json({ Error: "Error" });
			else if (result.length > 0) {
				const user = result[0];
				const storedHashedPassword = user.Password;
				bcrypt.compare(password, storedHashedPassword, (err, valid) => {
					if (err) {
						return res.json({ Error: "Error Comparing Password" });
					} else {
						if (valid) {
							const token = jwt.sign({ email }, process.env.SESSION_SECRET, {
								expiresIn: "7d",
							});
							// res.cookie("token", token, { maxAge: 7 * 24 * 60 * 60 * 1000 });
							res.setHeader("Cookie", `token=${token}; path=/;`);
							res.cookie("token", token, {
								path: "/",
								maxAge: 7 * 24 * 60 * 60 * 1000,
								withCredentials: true,
								httpOnly: false, // Ensure the cookie is only accessible by the web server
								// secure: process.env.NODE_ENV === "production", // Use secure cookies in production
								secure: true,
								sameSite: "None",
								domain: "safezen.onrender.com",
							});

							return res.json({ Status: "Success" });
						} else {
							return res.json({ Error: "Passwors do no match" });
						}
					}
				});
			} else {
				return res.json({ Error: "User Not Found" });
			}
		});
	} catch (err) {
		return res.json({ Error: "Error" });
	}
});
app.post("/signup", (req, res) => {
	console.log("hi");
	const email = req.body.email;
	const password = req.body.password;
	const age = req.body.age;
	try {
		db.query("SELECT * FROM user_data WHERE emailId = ?", [email], (err, checkResult) => {
			if (err) return res.json({ Error: "Error" });
			else if (checkResult.length > 0) {
				return res.json({ Error: "User already Exist" });
			} else {
				bcrypt.hash(password, saltRounds, (err, hash) => {
					if (err) {
						return res.json({ Error: "Error Hashing Password" });
					} else {
						try {
							db.query(
								"INSERT INTO user_data (emailId, Password, age, noOfSessions) VALUES (?, ?, ?, ?)",
								[email, hash, age, 0],
								(err, result) => {
									if (err) return res.json({ Error: "Error L154" });
									else {
										const user = result[0];
										return res.json({ Status: "Success" });
									}
								}
							);
						} catch (err) {
							return res.json({ Error: "Error inserting data in database" });
						}
					}
				});
			}
		});
	} catch (err) {
		console.log({ Error: "Error" });
	}
});

app.post("/book-appointment", (req, res) => {
	console.log("hi book appoiintment");
	const email = req.body.x;
	const date = req.body.date;
	const timeSlot = req.body.timeSlot;
	const therapy = req.body.therapy;
	const illness = req.body.illness;
	const description = req.body.description;
	console.log(email);
	try {
		db.query("SELECT * FROM user_data WHERE emailId = ?", [email], (err, checkResult) => {
			if (err) return res.json({ Error: "Error" });
			else if (checkResult.length === 0) {
				return res.json({ Error: "User not found" });
			} else {
				if (therapy === "Individual Therapy") {
					db.query(
						"SELECT illness_id FROM indtherapy WHERE illness_name = ?",
						[illness],
						(err, answer) => {
							try {
								db.query(
									"INSERT INTO indappointments (description, user_id, illness_id, date, timeSlot) VALUES (?, ?, ?, ?, ?)",
									[
										description,
										checkResult[0].userId,
										answer[0].illness_id,
										date,
										timeSlot,
									],
									(err, result) => {
										console.log(
											description,
											checkResult[0].userId,
											answer[0].illness_id,
											date,
											timeSlot
										);
										if (err)
											return res.json({
												Error: "Error storing appointment data in SERVER",
											});
										else {
											return res.json({ Status: "Success" });
										}
									}
								);
							} catch (err) {
								return res.json({ Error: "Error inserting data in database" });
							}
						}
					);
				} else {
					db.query(
						"SELECT relillness_id FROM reltherapy WHERE relillness_name = ?",
						[illness],
						(err, answer) => {
							try {
								db.query(
									"INSERT INTO relappointments (description, user_id, relillness_id, date, timeSlot) VALUES (?, ?, ?, ?, ?)",
									[
										description,
										checkResult[0].userId,
										answer[0].relillness_id,
										date,
										timeSlot,
									],
									(err, result) => {
										if (err)
											return res.json({
												Error: "Error storing appointment data in SERVER",
											});
										else {
											return res.json({ Status: "Success" });
										}
									}
								);
							} catch (err) {
								return res.json({ Error: "Error inserting data in database" });
							}
						}
					);
				}
			}
		});
	} catch (err) {
		console.log({ Error: "Error" });
	}
});

app.get("/payment", async (req, res) => {
	try {
		let request = {
			order_amount: 1.0,
			order_currency: "INR",
			order_id: await generateOrderId(),
			customer_details: {
				customer_id: "testing bro",
				customer_phone: "9999999999",
				customer_name: "Web Codder",
				customer_email: "webcodder@example.com",
			},
			order_meta: {
				return_url:
					"https://www.cashfree.com/devstudio/preview/pg/web/checkout?order_id={order_id}",
			},
		};
		console.log(request.order_id);
		console.log(request);
		Cashfree.PGCreateOrder("2023-08-01", request)
			.then((response) => {
				console.log(response.data);
				res.json(response.data);
			})
			.catch((error) => {
				console.log("Error in autheticating cashfree 3");
				console.error(error.response.data.message);
			});
	} catch (error) {
		console.log("Error in autheticating cashfree 4");
		console.log(error);
	}
});

app.post("/verify", async (req, res) => {
	try {
		let { orderId } = req.body;
		Cashfree.PGOrderFetchPayments("2023-08-01", orderId)
			.then((response) => {
				res.json(response.data);
			})
			.catch((error) => {
				console.log("Error in autheticating cashfree");
				console.error(error.response.data.message);
			});
	} catch (error) {
		console.log("Error in autheticating cashfree 2");
		console.log(error);
	}
});

app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`);
});
