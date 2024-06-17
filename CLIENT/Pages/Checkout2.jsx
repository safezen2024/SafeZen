import React from "react";

export default function Checkout2() {
	const [formData, setFormData] = React.useState({
		name: "",
		expiryDate: "",
		cardNumber: 0,
		ccv: "",
	});

	function handleChange(event) {
		const { name, value, type, checked } = event.target;
		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: value,
		}));
	}

	function handleSubmit(event) {
		event.preventDefault();
		if (formData.password === formData.passwordConfirm) {
			console.log("Successfully Logged In");
		} else {
			console.log("Passwords do not match");
			return;
		}
	}

	return (
		<div className="form-container">
			<form className="form" onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Card Holder's Name"
					className="form--input"
					name="name"
					onChange={handleChange}
					value={formData.name}
				/>
				<input
					type="number"
					placeholder="Card Number"
					className="form--input"
					name="cardNumber"
					onChange={handleChange}
					value={formData.cardNumber}
				/>
				<input
					type="date"
					placeholder="Expiry Date"
					className="form--input"
					name="expiryDate"
					onChange={handleChange}
					value={formData.expiryDate}
				/>
				<input
					type="number"
					placeholder="CCV"
					className="form--input"
					name="ccv"
					onChange={handleChange}
					value={formData.ccv}
				/>
				<button className="form--submit">Proceed</button>
			</form>
		</div>
	);
}
