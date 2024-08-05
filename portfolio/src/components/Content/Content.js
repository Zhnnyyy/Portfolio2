import React, { useEffect, useState } from "react";
import "./Content.css";
import NavBar from "../navBar/NavBar";
import About from "../About/About";
import Skills from "../Skill/Skills";
import Contact from "../Contact/Contact";
import Project from "../Project/Project";
import { IoPersonCircle } from "react-icons/io5";
function Content({ openSidebar }) {
  const [isMobile, setMobile] = useState(window.innerWidth <= 768);
  const [tab, setTab] = useState("about");

  function checkTarget(data) {
    setTab(data);
  }

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div className="contentContainer">
      {isMobile && (
        <IoPersonCircle className="openSidebar" onClick={openSidebar} />
      )}
      <div className="header">
        <NavBar tabTarget={checkTarget} />
      </div>
      {isMobile ? (
        <>
          {" "}
          <About />
          <Skills /> <Project />
          <Contact />
        </>
      ) : (
        <>
          {tab === "about" ? <About /> : ""}
          {tab === "skill" ? <Skills /> : ""}
          {tab === "contact" ? <Contact /> : ""}
          {tab === "project" ? <Project /> : ""}
        </>
      )}
    </div>
  );
}

export default Content;
