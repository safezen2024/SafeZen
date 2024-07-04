import React from "react";
import doctors_data from "../data_files/doctors_data";

export default function Doctor(props) {
	const [id, setId] = React.useState(0);
	// console.log(doctors_data);
	const numOfDocs = doctors_data.length;
	const qualificationArray = [];
	function prevImage() {
		if (id === 0) setId(numOfDocs - 1);
		else setId(id - 1);
		console.log(doctors_data[id].profile_img);
	}

	function nextImage() {
		if (id === numOfDocs - 1) setId(0);
		else setId(id + 1);
	}
	return (
		<div className="doctorsGallery">
			<img src={doctors_data[id].profile_img} className="doctorsImg" />
			<button
				className="carousel-control-prev"
				type="button"
				data-bs-target="#carouselExampleIndicators"
				data-bs-slide="prev"
				onClick={prevImage}>
				<span className="carousel-control-prev-icon slider" aria-hidden="true"></span>
				<span className="visually-hidden">Previous</span>
			</button>
			<button
				className="carousel-control-next"
				type="button"
				data-bs-target="#carouselExampleIndicators"
				data-bs-slide="next"
				onClick={nextImage}>
				<span className="carousel-control-next-icon slider" aria-hidden="true"></span>
				<span className="visually-hidden">Next</span>
			</button>
			<div className="doctorDetails prevent-select services-text">
				<h2>{doctors_data[id].name}</h2>
				{/* <ul className="doctorDetailList">
					{doctors_data[id].specialization.split("|").map((item) => (
						<li>{item}</li>
					))}
				</ul> */}
				<ul className="doctorDetailList">
					{doctors_data[id].qualification.split("|").map((item) => (
						<li>{item}</li>
					))}
				</ul>
			</div>
		</div>
	);
}
