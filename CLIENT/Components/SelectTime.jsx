import * as React from "react";

export default function SelectTime() {
	const [value, setValue] = React.useState();
	const options = [
		{key:"0", label: "Select a time Slot", value: "" },
		{key:"1", label: "02:00 - 03:00 PM", value: "02:00 - 03:00 PM" },
		{key:"2", label: "03:00 - 04:00 PM", value: "03:00 - 04:00 PM" },
		{key:"3", label: "04:00 - 05:00 PM", value: "04:00 - 05:00 PM" },
		{key:"4", label: "05:00 - 06:00 PM", value: "05:00 - 06:00 PM" },
		{key:"5", label: "06:00 - 07:00 PM", value: "06:00 - 07:00 PM" },
		{key:"6", label: "07:00 - 08:00 PM", value: "07:00 - 08:00 PM" },
		{key:"7", label: "08:00 - 09:00 PM", value: "08:00 - 09:00 PM" },
		{key:"8", label: "09:00 - 10:00 PM", value: "09:00 - 10:00 PM" }
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
		// console.log(props);
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

