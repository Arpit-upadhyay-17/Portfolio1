import React , { useState } from 'react'
import { Link } from 'react-router-dom';
import { BsSun , BsFillSunFill } from "react-icons/bs"

const Navbar = () => {

  const [ toggle , setToggle ] = useState(1)

  const handleClick =(e) => {


    if( toggle ) {
      document.querySelector("html").classList.add("darkMode")
      return setToggle(0);
    }else{
      document.querySelector("html").classList.remove("darkMode")
      return setToggle(1);
    }
    //  if( e.target.innerText === "Dark" ) {
    //   document.querySelector("html").classList.add("darkMode")
    //   console.log(1);
    //   return  e.target.innerText =  "light"
    //  }else{
    //   document.querySelector("html").classList.remove("darkMode")
    //   console.log(2);
    //   return e.target.innerText = "Dark";
    //  }
      
  
  }
  console.log("Navbar is mount");

//   const handleClick2 =(e) => {
//     document.body.classList.add("darkMode")
//     e.target.classList.add("hide")
// }


  return (
    <nav>
        <div className="nav-heading">
            <p> <Link to="/" >Arpit Upadhyay</Link> </p>
        </div>
        <div className="nav-links">
                <li  onClick={handleClick} id="toggle" > { toggle ? <><BsFillSunFill className='toggleIcon' size="25px" /> Light</> :<><BsSun className='toggleIcon' size="25px" /> Dark</>  } </li>
                {/* <li> <Link to=""   onClick={handleClick2} >Light Mode</Link> </li> */}
                <li> <Link to="blogs" >Blogs </Link> </li>
                <li> <Link to="contact-us" >Contact us</Link> </li>
        </div>
    </nav>
  )
}

export default Navbar;