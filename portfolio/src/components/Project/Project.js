import React from "react";
import "./project.css";
import Item from "../ProjectItem/Item";
const bg = require("../../assets/construction.png");
const ams = require("../../assets/projects/ams.png");
const twp = require("../../assets/projects/twp.jpg");
function Project() {
  return (
    <div className="aboutContainer">
      <h1 className="aboutTitle">Projects</h1>
      <div className="about-line"></div>

      <div className="projectContainer">
        <Item
          img={ams}
          title={"Attendance Management System"}
          tech={"PHP, Java, MySql"}
          gitLink={"https://github.com/Zhnnyyy/AMS.git"}
          vidLink={
            "https://drive.google.com/file/d/11hqffw4qeG4gsRitcGpbszWaOqXjZnkP/preview"
          }
        />
        <Item
          img={twp}
          title={"Timekeeping with Payrol System"}
          tech={"HTML, CSS, NodeJS, ReactNative"}
          gitLink={"https://github.com/Zhnnyyy/capstone"}
        />
      </div>
    </div>
  );
}

export default Project;
