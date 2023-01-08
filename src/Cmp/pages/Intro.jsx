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
            <h1>MERN Stak Developer</h1>
            <br />
            <p>Hey there , I am <b style={{ color : "rgba(26, 140, 255, 0.695)" }} >Arpit Upadhyay</b> psum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
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
