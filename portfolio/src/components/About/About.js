import React from "react";
import "./about.css";
import Card from "../Card/Card";

const web = require("../../assets/img/web.png");
const mobile = require("../../assets/img/mobile.png");
const software = require("../../assets/img/software.png");
function About() {
  return (
    <div className="aboutContainer">
      <h1 className="aboutTitle">About</h1>
      <div className="about-line"></div>

      <div className="infocontainer">
        <div className="infotxt">
          <p>
            Hi everyone, I recently graduated with a Bachelor of Science in
            Information Technology and gained valuable experience as a Data
            Encoder during my internship. I’m currently focused on web
            development, working on exciting projects like a food recipe
            application and an e-commerce store. I’m also exploring mobile
            development and eager to take on both beginner and intermediate
            challenges. Looking forward to connecting and collaborating!
          </p>
        </div>
        <div className="imgcontainer">
          <div className="myimg"></div>
        </div>
      </div>
      <h2 className="subTitle">
        <i>WHAT I DO</i>
      </h2>
      <div className="card-container">
        <Card img={mobile} title={"Mobile Development"} />
        <Card img={web} title={"Web Development"} />
        <Card img={software} title={"Software Development"} />
      </div>
    </div>
  );
}

export default About;
