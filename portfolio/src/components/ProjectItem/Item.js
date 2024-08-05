import React, { useState } from "react";
import "./item.css";
import { FaPlay, FaTimes, FaGithub } from "react-icons/fa";

function Item({ gitLink, vidLink, title, tech, img }) {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    if (vidLink) {
      setShow(true);
      return;
    }
    alert("No available content");
  };
  const handleClose = (e) => {
    e.stopPropagation();
    setShow(false);
  };
  return (
    <div
      className="itemcontainer"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="info">
        <h3>{title}</h3>
        <p>{`${tech}`}</p>
      </div>
      <div className="overlay"></div>
      <div className="play1" onClick={handleClick}>
        <FaPlay className="playicon" />
      </div>
      <a href={gitLink} target="_blank" className="play2">
        <FaGithub className="playicon" />
      </a>
      {show && (
        <div className="iframeContainer">
          <button className="close-button" onClick={handleClose}>
            <FaTimes />
          </button>
          <iframe
          className="mainFrame"
            src={vidLink}
   
            title="hello"
            allow="autoplay"
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default Item;
