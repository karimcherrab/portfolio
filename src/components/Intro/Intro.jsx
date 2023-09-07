import React, { useContext } from "react";
import "./Intro.css";

import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";

import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import  Hero  from "../../img/hero.png";


const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;



  
  return (
    <div className="Intro" id="Intro">
       <div id="particles-js"></div>
       
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>Cherrab Karim</span>
          <p>
          i am into <span>frontend development and android development</span>
          </p>
            
                 
               
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button ">Hire me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
         {/* <img src={Github} alt="" />
          <img src={LinkedIn} alt="" />
          <img src={Github} alt="" />*/}
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
       
              <img draggable="false" class="image" src={Hero} alt=""/>
       
       
      
        <motion.div
          initial={{ top: "-2%", left: "65%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div">
                 <FloatinDiv img={crown} text1="frontend" text2="Developer" />
        </motion.div>

       
        <motion.div
          initial={{ left: "9rem", top: "16rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div">
          
          <FloatinDiv img={thumbup} text1="Mobile" text2="Developer" />
        </motion.div>

        
      </div>
    </div>
  );
};

export default Intro;
