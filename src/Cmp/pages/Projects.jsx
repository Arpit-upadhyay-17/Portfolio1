import React, { useContext } from 'react';
import { AnimationContext } from '../..';
import { motion } from 'framer-motion'; 


const Projects = () => {
  const [ one , two ] = useContext(AnimationContext)

  return (
    <motion.div variants={one} initial="hidden" animate="visible" className="skills project">
           
              <ol className='Ol' style={{ padding : "28px" }} >
             <motion.p  variants={two}  className='Projects' > 
                <li>Image Downloader</li>
                <li>E-commerce Website ( Frontend only )</li>
                <li>College Management system</li>
              </ motion.p>
              </ol>
           
    </motion.div>
  )
}

export default Projects