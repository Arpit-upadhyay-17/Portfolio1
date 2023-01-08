import React from 'react'
import { NavLink } from 'react-router-dom';
import { BiAlignLeft } from "react-icons/bi"

const Sidebar = () => {

  const hadleMouseOver = (e) => {
    // console.log(window.innerWidth);
   return window.width <= 1000 ? console.log("width is < 1000 mouseover") : null
  }
  const handleMouseOut = (e) => {
   return window.innerWidth <= 1000 ? console.log("width is < 1000 mouseout") : null
  }

  return (
    <div className="sidebar">
        <ul>
          <li onMouseEnter={hadleMouseOver}  onMouseOut={handleMouseOut} >  <NavLink to="Intro"> <BiAlignLeft style={{width : "35px"}} /> <span>  Intro </span> </NavLink> </li>
          <li>  <NavLink to="Education"> <BiAlignLeft style={{width : "35px"}} />  <span> Education </span> </NavLink> </li>
          <li>  <NavLink to="Skills"> <BiAlignLeft style={{width : "35px"}} /> <span>  Skills </span> </NavLink> </li>
          <li>  <NavLink to="Training"> <BiAlignLeft style={{width : "35px"}} />  <span> Training </span> </NavLink> </li>
          <li>  <NavLink to="Projects"> <BiAlignLeft style={{width : "35px"}} /> <span>  Projects </span> </NavLink> </li>
        </ul>
    </div>
  )
}

export default Sidebar