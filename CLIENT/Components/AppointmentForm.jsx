import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import SelectTime from "./SelectTime";
import Specialization from "./Specialization";
import SelectIllness from "./SelectIllness";
import "react-datepicker/dist/react-datepicker.css";
import { auth, email } from "../data_files/checkLoginStatus";
import { mt1, mt2, mt3 } from "./Login";
import axios from "axios";
import emailjs from "@emailjs/browser";
import { load } from "@cashfreepayments/cashfree-js";
import gmeetLinks from "../data_files/GmeetLinks";

axios.defaults.withCredentials = true;
export default function AppointmentForm(props) {
	const d = new Date();
	const [date, setDate] = useState(d);
	const [timeSlot, setTimeSlot] = useState();
	const [illness, setIllness] = useState();
	const [description, setDescription] = useState("");
	const [therapy, setTherapy] = useState("");
	const [meetLink, setMeetLink] = useState("");
	const [orderId, setOrderId] = useState("");
	const orderIdRef = useRef(orderId);
	const [m1, setM1] = useState(mt1);
	const [m2, setM2] = useState(mt2);
	const [m3, setM3] = useState(mt3);
	const textAreaRef = useRef(null);
	const navigate = useNavigate();
	let cashfree;
	// let m1 = mt1,
	// 	m2 = mt2,
	// 	m3 = mt3;
	let insitialzeSDK = async function () {
		cashfree = await load({
			mode: "production",
		});
	};

	insitialzeSDK();

	useEffect(() => {
		textAreaRef.current.style.height = "auto";
		textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
	}, [description]);

	useEffect(() => {
		orderIdRef.current = orderId;
		console.log("Updated orderId:", orderId);
		setOrderId(orderId);
		console.log("abcxyz:", orderId);
	}, [orderId]);

	useEffect(() => {
		console.log(m1, m2, m3);
	}, [m1, m2, m3]);

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
	async function handleSlotChange(event) {
		await setTimeSlot(event.target.value);
		// console.log(event.target.value);
		const tm = event.target.value;
		// console.log("mt1, mt2, mt3 ", mt1, mt2, mt3);
		if (tm[1] === "2" || tm[1] === "5" || tm[1] === "8") {
			setM1(mt1 + 1);
			if (m1 === 20) setM1(0);
			setMeetLink(gmeetLinks[mt1]);
		} else if (tm[1] == "3" || tm[1] == "6" || tm[1] == "9") {
			setM2(mt2 + 1);
			if (m2 === 40) setM2(20);
			setMeetLink(gmeetLinks[mt2]);
		} else {
			setM3(mt3 + 1);
			if (m3 === 60) setM3(40);
			setMeetLink(gmeetLinks[mt3]);
		}
		// console.log(meetLink);
	}
	function handleSpecializationChange(event) {
		setIllness(event.target.value);
	}
	function handleTherapyChange(event) {
		setTherapy(event.target.value);
	}
	let url;
	async function getSessionId() {
		if (props.amt === 1) url = "https://safezen.onrender.com/payment1";
		else if (props.amt === 2) url = "https://safezen.onrender.com/payment2";
		else url = "https://safezen.onrender.com/payment3";
		try {
			// console.log(url);
			const res = await axios.get(url);
			// console.log(res);
			if (res.data && res.data.payment_session_id) {
				// console.log(res.data.order_id);
				setOrderId(res.data.order_id);
				// console.log("Using ref:", orderIdRef.current);
				// await console.log(res.data.payment_session_id)
				return await res.data.payment_session_id;
			}
		} catch (error) {
			console.log(error);
		}
	}

	async function verifyPayment() {
		try {
			// console.log(orderIdRef.current);
			let res = await axios.post("https://safezen.onrender.com/verify", {
				orderId: orderIdRef.current,
			});
			// console.log(res.data[0]);
			if (res && res.data) {
				if (res.data[0].payment_status === "SUCCESS") {
					alert("Payment Verified");
					return true;
				}
			} else alert("Payment Not Done");
			return false;
		} catch (error) {
			console.log(error);
			return false;
		}
	}

	async function handleSubmit(event) {
		event.preventDefault();
		const button = document.getElementById("loading-button");
		button.disabled = true;
		// Add the loading animation CSS class
		button.classList.add("button-loader");
		// console.log(date, timeSlot, description, illness, therapy);
		if (auth) {
			let x = email;
			const formData = { x, date, timeSlot, therapy, illness, description, m1, m2, m3 };
			// console.log(m1, m2, m3);
			const mailData = {
				user_email: x,
				date: date,
				timeSlot: timeSlot,
				illness: illness,
				description: description,
			};
			try {
				await emailjs
					.send(
						import.meta.env.VITE_EMAILJS_SERVICE_ID,
						import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
						mailData,
						import.meta.env.VITE_EMAILJS_PUBLIC_ID
					)
					.then(
						async (result) => {
							// console.log(result);
							console.log("SUCCESS!");
							// alert("Appointment Booked Email sent");
							try {
								await axios
									.post("https://safezen.onrender.com/book-appointment", formData)
									.then(async (res) => {
										if (res.data.Status === "Success") {
											alert("Redirecting to payment gateway!!");
											// navigate("/");
											try {
												let sessionId = await getSessionId();
												let checkoutOptions = {
													paymentSessionId: sessionId,
													redirectTarget: "_modal",
												};
												// setTimeout(() => {
												// 	// Re-enable the button
												// 	button.disabled = false;
												// 	// Remove the loading animation CSS class
												// 	button.classList.remove("button-loader");
												// }, 2000); // Simulated 2-second task
												// button.disabled = false;

												button.classList.remove("button-loader");
												await cashfree
													.checkout(checkoutOptions)
													.then(async (res) => {
														console.log("payment initialized");
														// console.log(
														// 	orderIdRef.current,
														// 	"yeh hai order id"
														// );
														const ans = await verifyPayment(
															orderIdRef.current
														);
														if (ans) {
															try {
																const mailData = {
																	user_email: x,
																	date: date,
																	time: timeSlot,
																	link: meetLink,
																};
																await emailjs
																	.send(
																		import.meta.env
																			.VITE_USER_EMAILJS_SERVICE_ID,
																		import.meta.env
																			.VITE_USER_EMAILJS_TEMPLATE_ID,
																		mailData,
																		import.meta.env
																			.VITE_EMAILJS_PUBLIC_ID
																	)
																	.then(
																		async (result) => {
																			// console.log(result);
																			console.log("SUCCESS!");
																			alert(
																				`You have recived the link at ${x}`
																			);
																		},
																		(err) => {
																			console.log(
																				"FAILED...",
																				err
																			);
																		}
																	);
															} catch (err) {
																button.disabled = false;
																console.error(err.message);
															}
														}
													})
													.catch((err) => console.log(err));
											} catch (error) {
												button.disabled = false;
												console.log(error);
											}
										} else alert(res.data.Error);
									})
									.catch((err) => {
										console.log(err);
										button.disabled = false;
									});
							} catch (err) {
								button.disabled = false;
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
			<form className="form" onSubmit={handleSubmit}>
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
				<button className="form--submit" id="loading-button">
					Pay Now
				</button>
			</form>
		</div>
	);
}
