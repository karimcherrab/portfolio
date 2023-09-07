import React, { useContext , useState } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Quran from "../../img/quran.png";
import Pharmacie from "../../img/pharmacie.png";
import Math from "../../img/math.png";
import Khayyer from "../../img/khayyer.png";
import Nfc from "../../img/nfc_dom.png";
import HomeLand from "../../img/HomeLand.png";
import ForniShop from "../../img/ForniShop.png";
import chatApp from "../../img/chatApp.png";
import dashboard from "../../img/dashboard.png";

import hoo_bank from "../../img/hoo_bank.png";
import video_player from "../../img/video_player.png";
import dashboard_modern from "../../img/dashboard_modern.png";
import subchannel from "../../img/subchannel.png";



import { themeContext } from "../../Context";
import Item from "./Item";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const [isMobile , setIsMobile] = useState(true)
  const darkMode = theme.state.darkMode;
  const mobile = [
    {
      title:"Quran",
      image:Quran,
      linkDemo:"https://play.google.com/store/apps/details?id=my.karim.quranapp&hl=ar&gl=US",
      linkGithub:"",

    },
    {
      title:"Pharmacie",
      image:Pharmacie,
      linkDemo:"https://drive.google.com/drive/u/0/folders/17jaTXoQt98yTRcODYES5NRpRWUnORSVA",
      linkGithub:"https://github.com/karimcherrab/PharmacieApp",

    },
    {
      title:"Math Game",
      image:Math,
      linkDemo:"https://play.google.com/store/apps/details?id=com.karimgame.mathgameapp&hl=ar&gl=US",
      linkGithub:"",

    },
    {
      title:"فاعل خير",
      image:Khayyer,
      linkDemo:"https://play.google.com/store/apps/details?id=my.karim.quranapp&hl=ar&gl=US",
      linkGithub:"",

    },
    {
      title:"Sub Uchannel",
      image:subchannel,
      linkDemo:"https://play.google.com/store/apps/details?id=my.karim.subchannel&hl=ar&gl=US",
      linkGithub:"",

    },
    {
      title:"Nfc",
      image:Nfc,
      linkDemo:"https://drive.google.com/file/d/1Ermj6coQO10_fEfQxXmbHbpjWCXXvU4r/view",
      linkGithub:"",

    },
  
  ]


  const web= [
    {
      title:"Video Player",
      image:video_player,
      linkGithub:"https://github.com/karimcherrab/videoplayer",
      linkDemo:"https://videoplayer-kk7hzulzw-cherrabkarim4-gmailcom.vercel.app/"

    },
    {
      title:"ForniShop",
      image:ForniShop,
      linkGithub:"https://github.com/karimcherrab/furniture",
      linkDemo:"https://karimcherrab.github.io/furniture/"
    },
    {
      title:"HooBank",
      image:hoo_bank,
      linkGithub:"https://github.com/karimcherrab/HOO-Bank",
      linkDemo:"https://hoo-bank-xi.vercel.app/"

    },
    {
      title:"Dashboard",
      image:dashboard,
      linkGithub:"https://github.com/karimcherrab/Dashboard",
      linkDemo:"http://karimcherrab.github.io/Dashboard"

    },
    {

      title:"HomeLand",
      image:HomeLand ,
      linkGithub:"https://github.com/karimcherrab/HomeLand",
      linkDemo:"https://karimcherrab.github.io/HomeLand/"

      
    },
  
     {
      title:"ChatApp",
      image:chatApp,
      linkGithub:"https://github.com/karimcherrab/chatApp",
      linkDemo:"https://karimcherrab.github.io/chatApp/"

    },
 

    {
      title:"Modern Dashboard",
      image:dashboard_modern,
      linkGithub:"https://github.com/karimcherrab/Dashboard-master",
      linkDemo:"https://dashboard-master-kl996nt0i-cherrabkarim4-gmailcom.vercel.app/"

    },
 
 
  ]
  return (
<section className='mb-20 mt-10' id="portfolio">
        
        <div className='container mx-auto flex flex-col'>
        
        
        <span  className="text-center text-[2rem] font-bold">Recent Projects</span>
         <span className="text-center text-[2.5rem]  text-[#FCA61F] font-bold">Portfolio</span>

        <div className="flex flex-row justify-center items-center gap-10 mt-6">
            
            
            <button
            onClick={()=>{setIsMobile(true)}}
            className={`${isMobile? 'bg-[#FCA61F] text-white':'border-2 border-[#FCA61F] text-[#FCA61F]'} 
            w-[25%] lg:w-[12%] text-sm     px-4 py-2 rounded-lg cursor-pointer 
            `}
              

              >Mobile
              </button>
            <button
                        onClick={()=>{setIsMobile(false)}}

           className={`${!isMobile? 'bg-[#FCA61F] text-white':'border-2 border-[#FCA61F] text-[#FCA61F]'} 
           w-[25%] lg:w-[12%] text-sm     px-4 py-2 rounded-lg cursor-pointer 
           `}>Web
              </button>

        </div>
        
        {
          isMobile?
          (  <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-14 mt-12 mx-6 '>
          {
              mobile.map((item , index)=>{
                  return(
                    <Item 
                    title={item.title} image={item.image}  linkGithub={item.linkGithub} linkDemo={item.linkDemo} />
    
                  )
              })
          }
      </div>)
          
          
          
          :
          
          (  <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14 mt-12 '>
          {
              web.map((item , index)=>{
                  return(
                    <Item 
                    title={item.title} image={item.image} linkGithub={item.linkGithub} linkDemo={item.linkDemo}  />
    
                  )
              })
          }
      </div>)
        }
          
        </div>
    </section>


  )








 
};

export default Portfolio;

/* );
*/
