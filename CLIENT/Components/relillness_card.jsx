import React from "react";
import relillness_data from "../data_files/relillness_data";

export default function RelIllnessCard(props) {
	// console.log(relillness_data);
	const id = props.relillness_id - 1;
	const[display, setDisplay] = React.useState({
		display:"none"
	});
	const[style, setStyle] = React.useState({
		color: "white" ,
		borderRadius:"50px"
	});
	
	function handleHover() 
	{
		setTimeout(() => props.onCardHover(id),200);
		setTimeout(() => setDisplay({
			display:"block"
		}),200);	
	}
	function handleHoverLeave(){
		setTimeout(() => props.onCardHoverOut(),200);
		setTimeout(() => setDisplay({
				display:"none"
			}),100);	
	}
	
	// console.log(id);
	const name = relillness_data[id].relillness_name;
	const desc = relillness_data[id].relillness_desc.split("|");
	return ( 
		<div className="illness prevent-select" style={style} onMouseEnter={handleHover} onMouseLeave={handleHoverLeave}>
			<div>
				<p className="heading-text">{name}</p>
			</div>
			<div style={display}>
				
				{desc.map((item) => (
						<p className="normal-text">{item}</p>
				))}
			</div>
		</div>
	);
}
