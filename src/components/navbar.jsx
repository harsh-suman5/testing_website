import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()

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

  return (
    <>
    <div className="navbar text-4xl font-bold bg-black ">
        <div>
          <h1 className='text-4xl font-bold bg-linear-to-r from-pink-500 to-red-500 bg-clip-text text-transparent'>
            Harsh Academy Live
          </h1>
        </div>
        <div>
          <ul id='navlist'>
            <li><a href="/">Home</a></li>
            <li><a href="/projects">Projects</a></li>

            {/* Show Logout if logged in, else show Login */}
            {isLoggedIn ? (
              <li>
                <button
                  onClick={handleLogout}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#f472b6', fontSize: '1rem', fontWeight: '600' }}
                >
                  Logout
                </button>
              </li>
            ) : (
              <li><a href="/login">Login</a></li>
            )}

          </ul>
        </div>
    </div>
    </>
  )
}

export default Navbar