import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='not-found' >
        <p color='red' >Page Not Found</p>
        <Link to="/intro" >&nbsp;&nbsp; Go to home page </Link>
    </div>
  )
}

export default NotFound