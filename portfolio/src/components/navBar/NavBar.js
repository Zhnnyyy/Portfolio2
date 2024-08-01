import React from "react";
import "./navbar.css";
function NavBar({ tabTarget }) {
  const tabPress = (e) => {
    e.preventDefault();
    tabTarget(e.target.getAttribute("data-target"));
  };
  return (
    <nav>
      <ul>
        <li>
          <a href="#" data-target="about" onClick={tabPress}>
            About
          </a>
        </li>
        <li>
          <a href="#" data-target="skill" onClick={tabPress}>
            Skill
          </a>
        </li>
        <li>
          <a href="#" data-target="project" onClick={tabPress}>
            Project
          </a>
        </li>
        <li>
          <a href="#" data-target="contact" onClick={tabPress}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
