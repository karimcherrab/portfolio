import React from 'react'
import "./Experience.css";
import {BsPatchCheckFill} from 'react-icons/bs'
const Experience = () => {
  return (
    <section className='section-experience' id='Experience'>
        <span >What Skills I Have</span>
        <span>My Experience</span>
        <div className="container experience_container">
          <div className="experience_mobile">
          <h3 className='mt-4'>Mobile Develoment</h3>
          <div className="experience_content">
            <article className="experience_details">
            <BsPatchCheckFill className="experience_details-icons"/>
              <div>
                <h4>Java</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className="experience_details">
            <BsPatchCheckFill className="experience_details-icons"/>
            <div>
            <h4>XML</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className="experience_details">
            <BsPatchCheckFill className="experience_details-icons"/>
            <div>
            <h4>Android Studio</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className="experience_details">
            <BsPatchCheckFill className="experience_details-icons"/>
            <div>
            <h4>Dart</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>

            <article className="experience_details">
            <BsPatchCheckFill className="experience_details-icons"/>
            <div>
            <h4>Flutter</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>
            
            <article className="experience_details">
            <BsPatchCheckFill className="experience_details-icons"/>
            <div>
            <h4>Firebase</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
          </div>
          </div>
          <div className="experience_web">
          <h3 className='mt-4'>Frontend development</h3>
          <div className="experience_content">
            <article className="experience_details">
            <BsPatchCheckFill className="experience_details-icons"/>
            <div>
            <h4>HTML
            </h4>
            <small className='text-light'>Experienced</small>
            </div>
            

            </article>
            <article className="experience_details">
            <BsPatchCheckFill className="experience_details-icons"/>
            <div>
            <h4>Css
            </h4>
            <small className='text-light'>Intermediate</small>
            </div>
            

            </article>

            <article className="experience_details">
            <BsPatchCheckFill className="experience_details-icons"/>
            <div>
            <h4>JavaScript</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>

            
            <article className="experience_details">
            <BsPatchCheckFill className="experience_details-icons"/>
            <div>
            <h4>Tailwindcss</h4>
            <small className='text-light'>Experienced</small>  </div>
            </article>

            <article className="experience_details">
            <BsPatchCheckFill className="experience_details-icons"/>
            <div>
            <h4>React</h4>
            <small className='text-light'>Intermediate</small>  </div>
            </article>
           
         
            </div>
            </div>
        </div>
    </section>
  )
}

export default Experience




/*import React, { useContext } from "react";
import "./Experience.css";


export default Experience;


*/
