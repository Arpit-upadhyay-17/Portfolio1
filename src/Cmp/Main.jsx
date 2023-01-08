import React from 'react'
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Main = () => {
  return (
    <div className="main">
        <Sidebar />
            <div className="center-line">
                
            </div>
        <div className="content">
            <div className="line-two">   </div>
            <Outlet />
            <div className="line-two"></div>
        </div>
    </div>
  )
}

export default Main;