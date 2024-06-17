import * as React from "react";

export default function SelectIllness() {
	const [value, setValue] = React.useState();
	const options = [
		{key:"0", label: "Select your Therapy", value: "" },
		{key:"1", label: "Individual Therapy", value: "Individual Therapy" },
		{key:"2", label: "Relationship Therapy", value: "Relationship Therapy" }
	];
	function Dropdown({value, options, onChange}) {
		return (
			<select value={value} onChange={onChange} className="date-box">
				{options.map((option) => (
					<option key={option.key} value={option.value}>{option.label}</option>
				))}
			</select>
		);
	}

	function handleChange(event){
		console.log(event.target.value);
		setValue(event.target.value);
	}

	return (
			<Dropdown 
				options={options} 
				value={value} 
				onChange={handleChange} 
			/>
	);
}

