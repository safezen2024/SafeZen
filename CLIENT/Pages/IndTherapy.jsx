import React, { useEffect, useState, useRef } from "react";
import Navbar from "../Components/Navbar";
import illness_data from "../data_files/illness_data";
import Foot from "../Components/Foot";
import TherapyCard from "../Components/TherapyCard";
import "../Styles/IndividualTherapy.scss";
import Therapy1 from "../public/src/Therapy1.jpg";

export default function IndTherapy() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page">
      <Navbar />
      <div className="workshop-img">
        <img src={Therapy1} alt="workshop" />
        <div className="filter"></div>
        <div className="txt">
          <h2>Individual Therapy</h2>
          <p>
            Experience personalized care to achieve balance through individual therapy.
            
          </p>
        </div>
      </div>

      <div className="cards-container">
        {illness_data.map((illness, index) => (
          <TherapyCard
          key={index}
          heading={illness.illness_name}
          content={
            <ul>
              {illness.illness_desc.split('. ').map((point, i) => (
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
