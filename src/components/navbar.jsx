import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <div className="navbar">
        <div>
            {/* <img src="" alt="" /> */}
          <h1>Shubham's Portfolio</h1>
        </div>
        <div >
          <ul id='navlist'>
            <li><a href="/">home</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
          
        </div>
       </div>
    
    </>
  )
}

export default Navbar