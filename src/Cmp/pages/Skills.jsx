import React, { useContext } from 'react';
import { motion } from "framer-motion";
import { AnimationContext } from '../..';

const skills = [ "React JS" , "FrontEnd Development" ,"Rest API" , "Express Js" , "MongoDB" ]

const Skills = () => {
  const [ one , two ] = useContext(AnimationContext)
  // console.log(one , two);
  return (
    <motion.div variants={one} initial="hidden" animate="visible" className="skills">
           {
            skills.map( (skill , index) =>  <motion.p  variants={two} key={index} className='skill' >{skill}</ motion.p>)
           }
    </motion.div>
  )
}

export default Skills