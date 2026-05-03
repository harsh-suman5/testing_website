import React from 'react'
import Dash_navbar from './dash_navbar'

const Dash_home = () => {
    const username = localStorage.getItem('username')
    return (
        <>
            <Dash_navbar />
            <div className="container">
              <div className="sidebar">
                 <ul>
                <li><a href="/dash_home">Dashboard</a></li>
                <li><a href="/dash_home">Courses</a></li>
                <li><a href="/dash_home">Payment info</a></li>
                <li><a href="/dash_home">Profile</a></li>
                <li><a href="/dash_home">Logout</a></li>
              </ul>
              </div>
              <div className="main">
                <h1>hello {username}</h1> 
              </div>
            </div>

    </>
  )
}

export default Dash_home