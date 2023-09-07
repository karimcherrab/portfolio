import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/photoprofile.jpg";
import Fiverr from "../../img/fiverr_logo.png";


const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "I am working with Karim for almost a year now. He was my first app developer I have hired to make my idea into the real product And he did it! I don't know if there was a luck or good chemistry between us two, but he understood me and my requirements straight away After briefly explaining what I want. "
    },
    {
      img: Fiverr,
      review:
        "great work done Thanks a lot",
    },
    {
      img: Fiverr,
      review:
        "Once again thank you! Thank you, for your suggestions and for professionalism. Karim is very polite and driven person, he will go extra mile to please my requests. I am sticking with you Karim for the next project :)",
    },
   
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
