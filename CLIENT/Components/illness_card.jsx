import React from "react";
import illness_data from "../data_files/illness_data";

export default function IllnessCard(props) {
	// console.log(illness_data);
	const id = props.illness_id - 1;
	const [flag, setFlag] = React.useState(false);
	const [display, setDisplay] = React.useState({
		display: "none",
	});
	const [style, setStyle] = React.useState({
		color: "white",
		borderRadius: "50px",
	});

	React.useEffect(() => {
		console.log(flag);
	}, [flag]);
	
	function handleHover() {
		setTimeout(() => props.onCardHover(id), 200);
		setTimeout(
			() =>
				setDisplay({
					display: "block",
				}),
			200
		);
	}
	function handleHoverLeave() {
		setTimeout(() => props.onCardHoverOut(), 200);
		setTimeout(
			() =>
				setDisplay({
					display: "none",
				}),
			100
		);
	}
	function handleClick() {
		if (!flag) handleHover();
		else handleHoverLeave();
		setFlag(!flag);
	}
	const name = illness_data[id].illness_name;
	const desc = illness_data[id].illness_desc.split("|");
	return (
		<div
			className="illness prevent-select"
			style={style}
			onClick={handleClick}
			onMouseEnter={handleHover}
			onMouseLeave={handleHoverLeave}>
			<div>
				<p className="heading-text">{name}</p>
			</div>
			<div style={display} id="description">
				{desc.map((item) => (
					<p className="normal-text">{item}</p>
				))}
			</div>
		</div>
	);
}
