import express from "express";
import env from "dotenv";
import nodemailer from "nodemailer";

const app = express();
const port = 4666;
env.config();

const transporter = nodemailer.createTransport({
	host: process.env.SMTP_HOST,
	port: process.env.SMTP_PORT,
	secure: false, // Use `true` for port 465, `false` for all other ports
	auth: {
		user: process.env.SMPT_MAIL,
		pass: "jn7jnAPss4f63QBp6D",
	},
});


var mailOptions ={
    from: process.env.SMPT_MAIL,
    to: "safezen2312@gmail.com", // list of receivers
    subject: `Appointment Booked By ${email}`, // Subject line
    text: "Hello world?", // plain text body
}

transporter.sendMail(mailOptions, function(err,info){
	if(err) console.log(err);
	else console.log("Email Sent Successfully");
})