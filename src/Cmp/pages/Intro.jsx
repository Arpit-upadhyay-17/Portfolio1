import React, { useEffect } from "react";
import { FaGithub ,FaLinkedin } from "react-icons/fa"
import { motion }  from "framer-motion";

const Intro = () => {

  useEffect(()=>{
    document.title = "Brief Intro";
  },[] )
  return (
    <motion.div 
      initial={{opacity : 0  }}
      animate= {{opacity : 1}}
      exit = {{opacity : 0}}
    className="intro">
      <motion.div
        initial={{scale : 0, transition : "1.5s" }}
        animate={{scale : 1 , transition : "1.5s" }}
        exit={{ scale : 0 , transition : "1.5s"  }}
      className="intro-div-one">
        <div className="introduction">
            <h1>Hey there , I am <b style={{ color : "rgba(26, 140, 255, 0.695)" }} >Arpit Upadhyay</b></h1>
            <br />
            <p>I am a student of B.Tech Computer Science 8<sup>th</sup> sem in SAIT college Jabalpur. I am preparing for Full-Stack-Developer role. I have good knowledge of React-JS and Node-Js, Express-Js. </p>
        </div>
        <br />
        <div className="intro-links">
            <FaGithub style={{ fontSize : "30px" }}  /> &nbsp;
            <FaLinkedin style={{ fontSize : "30px" }} />
        </div>
      </ motion.div>
      <div className="intro-div-two">
        <div className="img">
          <img src="/1.jpg" style={{width : "80%"}}  alt="" />
        </div>
      </div>
    </ motion.div>
  );
};

export default Intro;
