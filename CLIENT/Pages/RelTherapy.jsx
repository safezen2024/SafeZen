import React, { useRef, useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import relillness_data from "../data_files/relillness_data";
import Foot from "../Components/Foot";
import Therapy2 from "../public/src/relation-banner-2.png";
import TherapyCard from "../Components/TherapyCard";

export default function RelTherapy() {
	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	
	return (
		<div className="page">
		  <Navbar />
		  <div className="workshop-img">
			<img src={Therapy2} alt="workshop" />
			<div className="filter"></div>
			<div className="txt">
			  <h2>Relationship Therapy</h2>
			  <p>
				Strengthen your bond and navigate challenges with compassionate guidance.
				
			  </p>
			</div>
		  </div>
	
		  <div className="cards-container">
			{relillness_data.map((illness, index) => (
			  <TherapyCard
			  key={index}
			  heading={illness.relillness_name}
			  content={
				<ul>
				  {illness.relillness_desc.split('. ').map((point, i) => (
					<li key={i}>{point}</li>
				  ))}
				</ul>
			  }
			/>
			
			))}
		  </div>
	
		  <Foot />
		</div>
	  );
}
