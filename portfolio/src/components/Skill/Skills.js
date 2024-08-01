import React from "react";
import "./skill.css";
import TCard from "../technicalCard/TCard";

const csharp = require("../../assets/technicalIcon/c-sharp.png");
const css = require("../../assets/technicalIcon/css.png");
const html = require("../../assets/technicalIcon/html.png");
const java = require("../../assets/technicalIcon/java.png");
const js = require("../../assets/technicalIcon/javascript.png");
const nodejs = require("../../assets/technicalIcon/nodejs.png");
const php = require("../../assets/technicalIcon/php.png");
const react = require("../../assets/technicalIcon/react.png");
const vb = require("../../assets/technicalIcon/vb.png");
function Skills() {
  return (
    <div className="skillContainer">
      <h1 className="skillTitle">Technical Skills</h1>
      <div className="skill-line"></div>
      <div className="technical-container">
        <TCard img={csharp} rate={3} />
        <TCard img={css} rate={4} />
        <TCard img={html} rate={4} />
        <TCard img={java} rate={3} />
        <TCard img={js} rate={3} />
        <TCard img={nodejs} rate={3} />
        <TCard img={php} rate={3} />
        <TCard img={react} rate={2} />
        <TCard img={vb} rate={4} />
      </div>
    </div>
  );
}

export default Skills;
