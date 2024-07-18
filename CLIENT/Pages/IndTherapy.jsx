import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import Navbar from "../Components/Navbar";
import illness_data from "../data_files/illness_data";
import IllnessCard from "../Components/illness_card";
import Foot from "../Components/Foot";
import PricePlans from "../Components/PricePlans";

export default function IndTherapy() {
	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
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

	const illData = illness_data.map((iData) => {
		return (
			<IllnessCard
				key={iData.illness_id}
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
				<h1 className="page-title">INDIVIDUAL THERAPY</h1>
				<div className="indTherapyHero">
					<div className="book-appoinntment-card">
						<p className="book-appoinntment-card-text">
							We have the best professionals.
						</p>
						{/* <Link to="/IndTherapy/#pplans"> */}
						<button
							type="button"
							className="btn btn-book-appointment"
							onClick={() => {
								// e.preventDefault();
								console.log("under ind therapy section");
								console.log(document.cookie);
								let token = Cookies.get('token');
								console.log("Retrieved token:", token); // Debugging log
								window.scrollTo(0, 2700);
							}}>
							Book an appointment
						</button>
						{/* </Link> */}
					</div>
				</div>
				<div className="various_illness" style={style}>
					{illData}
				</div>
			</div>
			<PricePlans id="pplans" />
			<Foot />
		</div>
	);
}
