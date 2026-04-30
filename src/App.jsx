import React from 'react'
import Navbar from './components/navbar'
import Home from './components/home'
import Projects from './components/projects'
import Login from './components/login'
import Footer from './components/footer'
import Webdevelopment from './components/courses/webdevelopment'


import Register from './components/register'
import Dash_home from './components/dashboard/dash_home'
import Dash_navbar from './components/dashboard/dash_navbar'

import { Routes, Route, Navigate, useLocation } from 'react-router-dom'

const App = () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'
  const location = useLocation()

  // Dashboard routes ka apna Dash_navbar hai, isliye main Navbar mat dikhao
  const isDashboard = location.pathname.startsWith('/dash')

  return (
    <>
      {!isDashboard && <Navbar />}

      <Routes>
        {/* Agar logged in hai to / pe jaane par /dash_home pe redirect karo */}
        <Route path='/' element={isLoggedIn ? <Navigate to='/dash_home' replace /> : <Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dash_home' element={<Dash_home />} />
        <Route path='/dash_navbar' element={<Dash_navbar />} />
        <Route path='/courses/webdevelopment' element={<Webdevelopment />} />
      </Routes>

      <Footer />








    </>
  )
}

export default App