import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import relillness_data from "../data_files/relillness_data";
import RelIllnessCard from "../Components/relillness_card";
import Foot from "../Components/Foot";
import PricePlans from "../Components/PricePlans";

export default function RelTherapy() {
	const [style, setStyle] = useState();

	const styles = {
		default: {
			display: "grid",
			gridTemplateColumns: "1fr 1fr 1fr",
			gridTemplateRows: "1fr 1fr 1fr 1fr",
			gap: "30px",
			margin: "40px",
		},
		smallScreen: {
			display: "grid",
			gridTemplateColumns: "1fr",
			gridTemplateRows: "auto",
			gap: "20px",
			margin: "20px",
		},
		mediumScreen: {
			display: "grid",
			gridTemplateColumns: "1fr 1fr",
			gridTemplateRows: "auto",
			gap: "25px",
			margin: "30px",
		},
	};

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth <= 800) {
				setStyle(styles.smallScreen);
			} else if (window.innerWidth <= 1300) {
				setStyle(styles.mediumScreen);
			} else {
				setStyle(styles.default);
			}
		};

		window.addEventListener("resize", handleResize);
		handleResize(); // Call initially to set the correct style

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	function handleCardHover(clickedId) {
		if (window.innerWidth <= 800) {
			setStyle({
				...style,
				gridTemplateColumns: "1fr",
			});
		} else if (window.innerWidth <= 1300) {
			if (clickedId % 2 == 1) {
				setStyle({
					...style,
					gridTemplateColumns: "1fr 2fr",
				});
			} else {
				setStyle({
					...style,
					gridTemplateColumns: "2fr 1fr",
				});
			}
		} else {
			if (clickedId % 3 == 2) {
				setStyle({
					...style,
					gridTemplateColumns: "1fr 1fr 2fr",
				});
			} else if (clickedId % 3 == 0) {
				setStyle({
					...style,
					gridTemplateColumns: "2fr 1fr 1fr",
				});
			} else {
				setStyle({
					...style,
					gridTemplateColumns: "1fr 2fr 1fr",
				});
			}
		}
	}

	function handleCardHoverOut() {
		if (window.innerWidth <= 800) {
			setStyle(styles.smallScreen);
		} else if (window.innerWidth <= 1300) {
			setStyle(styles.mediumScreen);
		} else {
			setStyle(styles.default);
		}
	}

	const illData = relillness_data.map((iData) => {
		return (
			<RelIllnessCard
				key={iData.relillness_id}
				{...iData}
				onCardHover={handleCardHover}
				onCardHoverOut={handleCardHoverOut}
			/>
		);
	});

	return (
		<div className="page">
			<Navbar />
			<div className="indPage">
				<h1 className="page-title">RELATIONSHIP THERAPY</h1>
				<div className="relTherapyHero">
					<div className="book-appoinntment-card">
						<p className="book-appoinntment-card-text">
							We have the best professionals - licensed and verified.
						</p>
						{/* <Link to="/appointment-page"> */}
						<button
							type="button"
							className="btn btn-book-appointment"
							onClick={() => {
								window.scrollTo(0, 1000);
							}}>
							Book an appointment
						</button>
						{/* </Link> */}
					</div>
				</div>
				<div style={style}>{illData}</div>
			</div>
			<PricePlans />
			<Foot />
		</div>
	);
}
