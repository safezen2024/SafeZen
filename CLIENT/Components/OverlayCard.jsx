import React from "react";
import "../Styles/OverlayCard.scss";

function OverlayCard({ img, category, title }) {
  return (
    <div className="overlay-card">
      <div className="overlay-card-image">
        <img src={img} alt="overlay-card-image" />
        <div className="blur-filter"></div>
      </div>
      <div className="overlay-card-content">
        <h4 className="overlay-card-category">{category}</h4>
        <p className="overlay-card-title">{title}</p>
      </div>
    </div>
  );
}

export default OverlayCard;
