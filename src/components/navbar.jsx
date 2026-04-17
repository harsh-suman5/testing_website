import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <div className="navbar text-4xl font-bold bg-black ">
        <div>
            {/* <img src="" alt="" /> */}
          <h1 className='text-4xl font-bold bg-linear-to-r from-pink-500 to-red-500 bg-clip-text text-transparent'>Shubham's Portfolio</h1>
        </div>
        <div >
          <ul id='navlist'>
            <li><a href="/">Home</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
          
        </div>
       </div>
    
    </>
  )
}

export default Navbar