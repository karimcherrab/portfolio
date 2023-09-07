import React from 'react'
import {motion} from "framer-motion"
const Item = ({title , image , linkGithub , linkDemo}) => {
  const handleDemo = () => {
    console.log(linkDemo)
      window.open(linkDemo, '_blank');

  
  };

  const handleGithub = () => {
    console.log(linkGithub)

    window.open(linkGithub, '_blank');


};
  return (

    <motion.div  whileHover={{ scale: 1.06 }}
    transition={{ duration: 0.5 }}>
    <div className=' h-[52vh] px-4 py-4 
    bg-white border-5 border-solid border-transparent shadow-xl rounded-[25px]
    
    '>
      

<div>
                <img 
                className='rounded-[25px]'
                
                src={image} alt=''/>
            </div>
            <p className='mt-4'>{title}</p>
            <div className='mt-4 flex flex-row gap-2 '>
                <button className='
                 text-sm border-2
                 border-[#FCA61F] text-[#FCA61F]
                  px-2 py-1 rounded-lg cursor-pointer hover:bg-[#FCA61F] hover:text-white'
                  onClick={handleGithub}
                  disabled={linkGithub === ""}
                >Github</button>
                <button className=' 

                    
                    text-sm border-2
                    border-[#FCA61F] text-[#FCA61F]
                     px-2 py-1 rounded-lg cursor-pointer hover:bg-[#FCA61F] hover:text-white' 
                     onClick={handleDemo}
                     disabled={linkDemo === ""}

                >Live Demo</button>

            </div>

    
     

    </div>

    </motion.div>
  )
}

export default Item