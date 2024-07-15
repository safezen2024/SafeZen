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
				{/* <span className="carousel-control-prev-icon slider" aria-hidden="true"></span> */}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					fill="#273f95"
					class="bi bi-arrow-left slider"
					viewBox="0 0 16 16">
					<path
						fill-rule="evenodd"
						d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
					/>
				</svg>
				{/* <span className="visually-hidden">Previous</span> */}
			</button>
			<button
				className="carousel-control-next"
				type="button"
				data-bs-target="#carouselExampleIndicators"
				data-bs-slide="next"
				onClick={nextImage}>
				{/* <span className="carousel-control-next-icon" aria-hidden="true"></span> */}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					fill="#273f95"
					class="bi bi-arrow-right slider"
					viewBox="0 0 16 16">
					<path
						fill-rule="evenodd"
						d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
					/>
				</svg>
				{/* <span className="visually-hidden">Next</span> */}
			</button>
			<div className="doctorDetails prevent-select">
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
