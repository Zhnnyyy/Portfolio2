import React from "react";
import "./info.css";
function Information({ icon, tag, txt, link }) {
  return (
    <div className="info-container">
      <a href={link} target="_blank" className="link">
        <div className="glass">{icon}</div>
      </a>
      <div>
        <h4 className="tag">{tag}</h4>
        <p className="txt">{txt}</p>
      </div>
    </div>
  );
}

export default Information;
