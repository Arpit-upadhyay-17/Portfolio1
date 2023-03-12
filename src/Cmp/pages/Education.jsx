import React, { useContext, useEffect } from 'react';
import { FaUserGraduate } from "react-icons/fa";
import { motion } from 'framer-motion';
import { AnimationContext } from '../..';


const Education = () => {
  const [ one , two ] = useContext(AnimationContext)

  const education = [
    {
      institute : "ST. ALOYSIUS INSTITUTE OF TECHNOLOGY JABALPUR",
      course : "B.Tech",
      specifcation : "Computer Science",
      grade : "A"
    },
    {
      institute : "ST. THOMAS HIGHER SECONDARY SCHOOL JABALPUR",
      course : "12th",
      specifcation : "",
      grade : "71.3%"
    },
    {
      institute : "MAN KUWARI HANSA HIGHER SECONDARY SCHOOL BARELA",
      course : "10th",
      specifcation : "",
      grade : "87.6%"
    },
  ]

  const ChildDiv = ({div}) => {

    
    return (
      <motion.div variants={two}
      // initial={{opacity : 0  }}
      // animate= {{opacity : 1}}
      // exit = {{opacity : 0}}
      className="education-child shadow">
              <p > <FaUserGraduate size="25px" /> {div.course} </p>
              <span> {div.specifcation || "Percentage : " + div.grade } </span> <br />
              <span> <b>From</b> {div.institute}  </span>
        </ motion.div>
    )
  }
 

  useEffect(() => {
    document.title = "Education Details";
    // console.log("mount");
  } , [])

  return (
    
    <motion.div className="education" variants={one} initial="hidden" animate="visible"  >
        {
          education.map( (div , index) => <ChildDiv  div={div} key={index} /> )
        }
    </motion.div>
  )
}

export default Education