import React, { useState } from "react";
import "./Content.css";
import NavBar from "../navBar/NavBar";
import About from "../About/About";
import Skills from "../Skill/Skills";
import Contact from "../Contact/Contact";
import Project from "../Project/Project";
function Content() {
  const [tab, setTab] = useState("about");
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
      {tab == "project" ? <Project /> : ""}
    </div>
  );
}

export default Content;
