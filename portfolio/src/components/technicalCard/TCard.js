import React from "react";
import "./tcard.css";
import { MdStarRate, MdOutlineStarRate } from "react-icons/md";

function TCard({ img, rate }) {
  return (
    <div className="tcard-container">
      <img src={img} />
      {genRate(rate)}
    </div>
  );
}

const genRate = (val) => {
  let fill = val;
  let out = Math.abs(val - 5);
  let fillstar = [];
  let outstart = [];

  for (let i = 1; i <= out; i++) {
    outstart.push(<MdOutlineStarRate key={`outline-${i}`} className="stars" />);
  }
  for (let i = 1; i <= fill; i++) {
    fillstar.push(<MdStarRate key={`fill-${i}`} className="stars" />);
  }
  const arr = fillstar.concat(outstart);
  return <div className="starContainer">{arr}</div>;
};

export default TCard;
