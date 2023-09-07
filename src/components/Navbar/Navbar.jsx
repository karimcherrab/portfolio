import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Fiverr from '../../img/fiverrOrange.png'
const navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
        {/* right */}
        <div className="n-left">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                About
              </Link>
            </li>
            <li>
              <Link to="Experience" spy={true} smooth={true}>
                Experience
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true}>
                Protfolio
              </Link>
            </li>
            
          </ul>
        </div>
       
      </div>

      {/* left */}
      <div className="n-right">
      <div className="n-icons" >
          <a href="https://www.linkedin.com/in/cherrab-mohamed-abdelkarim-98a0a4268/" target="_blank"><Linkedin color="orange" size={"1.5rem"} /></a>
          <a href="https://github.com/karimcherrab?tab=repositories" target="_blank"><Gitub color="orange" size={"1.5rem"} /></a>
          <a href="https://fr.fiverr.com/cherrabkarim461?up_rollout=true" target="_blank"><img src={Fiverr}      alt="fiverr"
        style={{ width: '1.5rem', height: '1.5rem' }}/></a>

         
        </div>
      </div>
    
    </div>
  );
};

export default navbar;
