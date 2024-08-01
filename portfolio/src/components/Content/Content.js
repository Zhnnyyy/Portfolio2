import React, { useState } from "react";
import "./Content.css";
import NavBar from "../navBar/NavBar";
import About from "../About/About";
import Skills from "../Skill/Skills";
import Contact from "../Contact/Contact";
function Content() {
  const [tab, setTab] = useState("contact");
  function checkTarget(data) {
    setTab(data);
  }
  return (
    <div className="contentContainer">
      <div className="header">
        <NavBar tabTarget={checkTarget} />
      </div>
      {tab == "about" ? <About /> : ""}
      {tab == "skill" ? <Skills /> : ""}
      {tab == "contact" ? <Contact /> : ""}
    </div>
  );
}

export default Content;
