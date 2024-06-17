import * as React from "react";
import illness_data from "../data_files/illness_data";
import relillness_data from "../data_files/relillness_data";

export default function Specialization(props) {
	console.log(props.indorrel);
	let data = [];
	let firstElement = [];
	if (props.indorrel === "Ind") {
		data = illness_data;
		firstElement = {
			illness_desc: "",
			illness_id: 0,
			illness_name: "Select your category",
		};
	} else if (props.indorrel === "Rel") {
		data = relillness_data;
		firstElement = {
			relillness_desc: "",
			relillness_id: 0,
			relillness_name: "Select your category",
		};
	}
	const [value, setValue] = React.useState();
	const prevOptions = data.map((iData) => {
		return iData;
	});
	const options = [firstElement].concat(prevOptions);
	function Dropdown({ value, options, onChange }) {
		return (() => {
			if (props.indorrel === "Ind") {
				return (
					<select value={value} onChange={onChange} className="date-box">
						{options.map((option) => (
							<option key={option.illness_id} value={option.illness_name}>
								{option.illness_name}
							</option>
						))}
					</select>
				);
			} else if (props.indorrel === "Rel") {
				return (
					<select value={value} onChange={onChange} className="date-box">
						{options.map((option) => (
							<option key={option.relillness_id} value={option.relillness_name}>
								{option.relillness_name}
							</option>
						))}
					</select>
				);
			}
		})();
	}

	function handleChange(event) {
		console.log(event.target.value);
		setValue(event.target.value);
	}

	return (
		<div>
			<Dropdown options={options} value={value} onChange={handleChange} />
		</div>
	);
}
