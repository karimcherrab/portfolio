import React from 'react'
import Experience from "./components/Experience/Experience";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonial from "./components/Testimonials/Testimonial";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
const HomePage = () => {
  return (
    <div>
           <Navbar />
      <Intro />
      <Services />
      <Experience />
      
      <Portfolio />
    
      <Contact />
      <Footer />
    </div>
  )
}

export default HomePage