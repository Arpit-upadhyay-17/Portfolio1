import React, { useContext } from 'react';
import { AnimationContext } from '../..';
import { motion } from 'framer-motion';
const Training = () => {

  const [ one , two ] = useContext(AnimationContext);

  return (
    <motion.div variants={one} initial="hidden" animate="visible" className="skills project">
           
              <ol className='Ol' >
             <motion.p  variants={two}  className='Projects' > 
                <li> <b>From SkyStar Software</b> <br /> <span className='training' > On Full Stack Development </span> </li> <br />
                <li> <b>From Feel Free to Code </b> <br /> <span className='training'> On React-Js </span>  </li> <br />
                <li> <b>From Feel Free to Code </b> <br /> <span className='training' > On Backend Development using Node Js and Express Js. </ span> </li>

              </ motion.p>
              </ol>
           
    </motion.div>
  )
}

export default Training