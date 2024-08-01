import React from "react";
import "./Sidebar.css";
import Information from "../information/Information";
import { MdEmail } from "react-icons/md";
import { FaMobile, FaFacebook } from "react-icons/fa6";
import { FaBirthdayCake, FaLinkedin, FaGithub } from "react-icons/fa";
const me = require("../../assets/img/logo-white1.png");
function Sidebar() {
  return (
    <div className="sidebarContainer">
      <div className="Sidebar-Header">
        <img src={me} className="mee" alt="my picture" />
        <h3 className="myname">Ed Emmanuel Perpetua</h3>
        <div className="roleName">
          <h2 className="roletxt">Web Developer</h2>
        </div>
      </div>
      <div className="horline"></div>

      <div className="bottomContainer">
        <Information
          tag={"Email"}
          txt={"ed.perpetua1225@gmail.com"}
          icon={
            <span className="icon">
              <MdEmail />
            </span>
          }
        />
        <Information
          tag={"Phone"}
          txt={"+63 9490457456"}
          icon={
            <span className="icon">
              <FaMobile />
            </span>
          }
        />
        {/* <Information
          tag={"Birthday"}
          txt={"December 25, 2001"}
          icon={
            <span className="icon">
              <FaBirthdayCake />
            </span>
          }
        /> */}
        <Information
          tag={"Facebook"}
          txt={"@zhnnyy.yi"}
          link={"https://web.facebook.com/zhnnyy.yi"}
          icon={
            <span className="icon">
              <FaFacebook />
            </span>
          }
        />
        <Information
          tag={"LinkedIn"}
          txt={"@zhnnyyy"}
          link={"https://www.linkedin.com/in/zhnnyyy/"}
          icon={
            <span className="icon">
              <FaLinkedin />
            </span>
          }
        />
        <Information
          tag={"Github"}
          txt={"@Zhnnyyy"}
          link={"https://github.com/Zhnnyyy"}
          icon={
            <span className="icon">
              <FaGithub />
            </span>
          }
        />
      </div>
    </div>
  );
}

export default Sidebar;
