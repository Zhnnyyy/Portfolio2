import React from "react";
import "./card.css";
function Card({ img, title }) {
  return (
    <div className="cardContainer">
      <img src={img} />
      <h3>{title}</h3>
    </div>
  );
}

export default Card;
