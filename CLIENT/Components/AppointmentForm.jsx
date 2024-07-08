import React, { StrictMode } from "react";
import { Link, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import SelectTime from "./SelectTime";
import Specialization from "./Specialization";
import SelectIllness from "./SelectIllness";
import "react-datepicker/dist/react-datepicker.css";
import { auth, gmail } from "../data_files/checkLoginStatus";
import { logged_in, email } from "./Login";
import axios from "axios";
import emailjs from "@emailjs/browser";
// import {Cashfree} from "@cashfreepayments/cashfree-js"
import { load } from "@cashfreepayments/cashfree-js";
// import env from "dotenv";
// env.config();

axios.defaults.withCredentials = true;
export default function AppointmentForm() {
	const d = new Date();
	const [date, setDate] = React.useState(d);
	const [timeSlot, setTimeSlot] = React.useState();
	const [illness, setIllness] = React.useState();
	const [description, setDescription] = React.useState("");
	const [therapy, setTherapy] = React.useState("");

	const textAreaRef = React.useRef(null);
	const navigate = useNavigate();
	let cashfree;

	let insitialzeSDK = async function () {
		cashfree = await load({
			mode: "production",
		});
	};

	insitialzeSDK();

	const [orderId, setOrderId] = React.useState("");

	React.useEffect(() => {
		textAreaRef.current.style.height = "auto";
		textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
	}, [description]);

	function handleDescriptionChange(event) {
		setDescription(event.target.value);
	}
	function handleDateChange(event) {
		const p = new Date();
		if (
			event.getDate() === p.getDate() &&
			event.getMonth() === p.getMonth() &&
			event.getFullYear() === p.getFullYear()
		)
			setDate(event);
		else if (event < p) alert("You have to select date in future");
		else setDate(event);
	}
	function handleSlotChange(event) {
		setTimeSlot(event.target.value);
		console.log(event.target.value);
	}
	function handleSpecializationChange(event) {
		setIllness(event.target.value);
		console.log(event.target.value);
	}
	function handleTherapyChange(event) {
		setTherapy(event.target.value);
		console.log(event.target.value);
	}

	async function getSessionId() {
		try {
			let res = await axios.get("https://safezen.onrender.com/payment");

			if (res.data && res.data.payment_session_id) {
				console.log(res.data);
				setOrderId(res.data.order_id);
				return res.data.payment_session_id;
			}
		} catch (error) {
			console.log(error);
		}
	}

	async function verifyPayment() {
		try {
			let res = await axios.post("https://safezen.onrender.com/verify", {
				orderId: orderId,
			});

			if (res && res.data) {
				alert("payment verified");
			}
		} catch (error) {
			console.log(error);
		}
	}
	function handleSubmit2(event) {
		event.preventDefault();
		if (logged_in || auth) {
			let x = "";
			if (logged_in) x = email;
			else x = gmail;
			try {
				let sessionId = getSessionId();
				console.log(sessionId);
				let checkoutOptions = {
					paymentSessionId: sessionId,
					redirectTarget: "_modal",
				};

				cashfree.checkout(checkoutOptions).then((res) => {
					console.log("payment initialized");
					verifyPayment(orderId);
				});
			} catch (error) {
				console.log(error);
			}
		} else {
			navigate("/login");
		}
	}

	function handleSubmit(event) {
		event.preventDefault();
		// console.log(date, timeSlot, description, illness, therapy);
		if (logged_in || auth) {
			let x = "";
			if (logged_in) x = email;
			else x = gmail;
			const formData = { x, date, timeSlot, therapy, illness, description };
			const mailData = {
				user_email: x,
				date: date,
				timeSlot: timeSlot,
				illness: illness,
				description: description,
			};
			try {
				emailjs
					.send(
						import.meta.env.VITE_EMAILJS_SERVICE_ID,
						import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
						mailData,
						import.meta.env.VITE_EMAILJS_PUBLIC_ID
					)
					.then(
						(result) => {
							console.log(result);
							console.log("SUCCESS!");
							// alert("Appointment Booked Email sent");
							try {
								console.log(formData);
								axios
									.post("https://safezen.onrender.com/book-appointment", formData)
									.then(async (res) => {
										if (res.data.Status === "Success") {
											// alert("Appointment booked");
											// navigate("/");
											try {
												let sessionId = await getSessionId();
												console.log(sessionId);
												let checkoutOptions = {
													paymentSessionId: sessionId,
													redirectTarget: "_modal",
												};

												cashfree.checkout(checkoutOptions).then((res) => {
													console.log("payment initialized");
													verifyPayment(orderId);
												});
											} catch (error) {
												console.log(error);
											}
										} else alert(res.data.Error);
									})
									.catch((err) => console.log(err));
							} catch (err) {
								console.log("snfjksuusf fsdfsef hfhsdkkfho");
								console.error(err.message);
							}
						},
						(err) => {
							console.log("FAILED...", err);
						}
					);
			} catch (err) {
				console.log("snfjksuusf fsdfsef hfhsdkkfho");
				console.error(err.message);
			}
		} else {
			navigate("/login");
		}
	}

	return (
		<div className="form-container">
			<form className="form" onSubmit={handleSubmit2}>
				<DatePicker
					type="date"
					selected={date}
					onChange={handleDateChange}
					className="date-box mb-2"
					value={date}
				/>
				<div onChange={handleSlotChange} className="date-box mb-2">
					<SelectTime required value={timeSlot} />
				</div>
				<div onChange={handleTherapyChange} className="date-box mb-2">
					<SelectIllness required value={therapy} />
				</div>

				{(() => {
					if (therapy === "Individual Therapy") {
						return (
							<div onChange={handleSpecializationChange} className="mb-2">
								<Specialization required value={illness} indorrel={"Ind"} />
							</div>
						);
					} else if (therapy === "Relationship Therapy") {
						return (
							<div onChange={handleSpecializationChange} className="mb-2">
								<Specialization required value={illness} indorrel={"Rel"} />
							</div>
						);
					}
				})()}

				<div className="text-neutral-200 bg-neutral-800 w-[40rem] rounded space-y-2 problem-space mb-2">
					<textarea
						className="p-0 bg-neutral-700 active:outline-none focus:outline-none rounded problem-space"
						placeholder="Describe Your Problem"
						value={description}
						onChange={handleDescriptionChange}
						rows="2"
						maxLength="500"
						ref={textAreaRef}></textarea>
				</div>
				<button className="form--submit">Pay Now</button>
			</form>
		</div>
	);
}
