
import React from 'react'
import "./Services.css";
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
const Services = () => {
  return (
    <div className='services'>
        <span>Get To Know</span>
        <span>About Me</span>
        <div className="about_content">
            <div className="about_cards">
              <article className='about_card'>
                  <FaAward className="about_icon"/>
                  <h5>Education</h5>
                  <small>Computer Science Engineer</small>
              </article>

              <article className='about_card'>
                  <FiUsers className="about_icon"/>
                  <h5>Experience</h5>
                  <small>4+ yeras</small>
              </article>

              <article className='about_card'>
                  <VscFolderLibrary className="about_icon"/>
                  <h5>Projects</h5>
                  <small>20+ Project</small>
              </article>
            </div>
            <p>I am a 2CS student at the computer engineering school ESI-SBA, a mobile developper , 
              I have 4 years experience in creating mobile applications and web , conception and 
              specifications to a complete mobile project, worked on many projects 
              : pharmacie app , Islamic and charitable applications .</p>
            <button className='button'>Let's Talk</button>   
        </div>
    </div>
  )
}

export default Services

