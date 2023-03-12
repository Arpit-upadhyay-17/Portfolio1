import React from 'react';
import { GrInstagram } from "react-icons/gr"
import { RiMailSendLine } from "react-icons/ri";
import {ImWhatsapp} from "react-icons/im"

const Footer = () => {
    console.log("footer is mount");
  return (
    <div className="footer">
       <center>
        <br /><br />
        <h4>Thanks for visiting</h4>
        <br /> <br />
        <p>
            Feel free to connect with us <b style={{ color : "rgba(26, 140, 255, 0.695)" }} >Arpitupadhyay1710@gmail.com </b> <br /> or <br /> <b style={{ color : "rgba(26, 140, 255, 0.695)" }}>  WhatsApp No 8878298772</b>
        </p>
        <br />
        <div className="social-media-links">
          <a href="/"><GrInstagram style={{ fontSize : "26px" }} /></a>
          <a href="/"> <RiMailSendLine style={{ fontSize : "28px" }} /> </a>
          <a href="/">  <ImWhatsapp style={{ fontSize : "26px" }} /> </a>
  
        </div>
        <br />
        <h4>Made With ❤ by Arpit  </h4>
        <br /><br />
        <br /><br />
       </center>
    </div>
  )
}

export default Footer;