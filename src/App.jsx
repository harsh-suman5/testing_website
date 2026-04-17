import React from 'react'
import Navbar from './components/navbar'
import Home from './components/home'
import Projects from './components/projects'
import Login from './components/login'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
    {/* //navbar component is added here so that it will be visible on all the pages */}
    <Navbar />

     <Routes>
      <Route path='/' element={<Home />} /> 
      <Route path='/projects' element={<Projects />} /> 
      <Route path='/login' element={<Login />} />

     </Routes>

    

    
       

   
   
    </>
    )
}

export default App