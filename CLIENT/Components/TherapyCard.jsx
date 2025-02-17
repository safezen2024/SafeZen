import React from "react";
import '../Styles/TherapyCard.scss';

const TherapyCard = ({ heading, content }) => {
  return (
    <div className="card">
      <h3 className="card-heading">{heading}</h3>
      <div className="card-content">
          <p>{content}</p>
      </div>
    </div>
  );
};

export default TherapyCard;
