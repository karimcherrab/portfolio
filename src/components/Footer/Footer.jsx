import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>ma.cherrab@esi-sba.dz</span>
      
        <span>+213795015033</span>

        <div className="f-icons">
          <a href="https://www.linkedin.com/in/cherrab-mohamed-abdelkarim-98a0a4268/" target="_blank"><Linkedin color="white" size={"2.5rem"} /></a>
          <a href="https://github.com/karimcherrab?tab=repositories" target="_blank"><Gitub color="white" size={"2.5rem"} /></a>
         
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
