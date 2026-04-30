import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Read login state from localStorage
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem('isLoggedIn') === 'true'
  )

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn')
    localStorage.removeItem('username')
    setIsLoggedIn(false)
    window.location.href = '/'
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
    <div className="navbar">
        <div className="navbar-container">
          <h1 className='navbar-title'>
            Harsh Academy Live
          </h1>
          
          {/* Hamburger Menu Icon */}
          <button className="hamburger" onClick={toggleMenu}>
            <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
            <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
            <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
          </button>

          {/* Desktop Navigation */}
          <ul className='navlist'>
            <li><a href="/">Home</a></li>
            <li><a href="/projects">Projects</a></li>
            

            {/* Show Logout if logged in, else show Login */}
            {isLoggedIn ? (
              <li>
                <button
                  onClick={handleLogout}
                  className='logout-btn'
                >
                  Logout
                </button>
              </li>
            ) : (
              <li><a href="/login">Login</a></li>
            )}
          </ul>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="/" onClick={closeMenu}>Home</a></li>
            <li><a href="/projects" onClick={closeMenu}>Projects</a></li>

            {/* Show Logout if logged in, else show Login */}
            {isLoggedIn ? (
              <li>
                <button
                  onClick={() => {
                    handleLogout()
                    closeMenu()
                  }}
                  className='logout-btn-mobile'
                >
                  Logout
                </button>
              </li>
            ) : (
              <li><a href="/login" onClick={closeMenu}>Login</a></li>
            )}
          </ul>
        </div>
    </div>
    </>
  )
}

export default Navbar