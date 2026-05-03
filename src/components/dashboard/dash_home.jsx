import React, { useState } from 'react'
import Dash_navbar from './dash_navbar'

const Dash_home = () => {
  const username = localStorage.getItem('username')
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  return (
    <>
      <Dash_navbar />
      <div className="flex min-h-[calc(100vh-70px)] bg-black text-white relative">
        {/* Sidebar */}
        <div className={`
          absolute z-40 md:static inset-y-0 left-0 w-64 bg-blue-900 border-r border-blue-800 p-6 flex flex-col
          transform transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0
        `}>
          {/* Mobile Close Button */}
          <div className="flex justify-between items-center md:hidden mb-6">
            <span className="text-xl font-bold">Menu</span>
            <button onClick={() => setIsSidebarOpen(false)} className="text-gray-400 hover:text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>
          <ul className="flex flex-col gap-3 h-full">
            <li>
              <a href="/dash_home" className="block px-4 py-3 rounded-xl bg-pink-500/10 text-pink-400 border border-pink-500/50 font-semibold transition-all">
                Dashboard
              </a>
            </li>
            <li>
              <a href="/dash_home" className="block px-4 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-gray-900 border border-transparent hover:border-gray-700 transition-all font-medium">
                Courses
              </a>
            </li>
            <li>
              <a href="/dash_home" className="block px-4 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-gray-900 border border-transparent hover:border-gray-700 transition-all font-medium">
                Payment info
              </a>
            </li>
            <li>
              <a href="/profile" className="block px-4 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-gray-900 border border-transparent hover:border-gray-700 transition-all font-medium">
                Profile
              </a>
            </li>
            <li className="mt-auto">
              <a href="/dash_home" className="block px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 border border-transparent hover:border-red-500/30 transition-all font-medium">
                Logout
              </a>
            </li>
          </ul>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Main Content Card */}
          <div className="flex-1 p-6 md:p-10 bg-blue-600 relative">
            {/* Hamburger Button for Mobile */}
            <div className="md:hidden absolute top-6 right-6">
              <button onClick={() => setIsSidebarOpen(true)} className="text-white/80 hover:text-white focus:outline-none">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              </button>
            </div>

            <h1 className="text-4xl font-black mb-2 pr-12">
              Hello, <span className="bg-linear-to-r from-pink-500 to-red-500 bg-clip-text text-transparent">{username}</span> 👋
            </h1>
            <p className="text-gray-400 text-lg">Welcome back to your dashboard.</p>
          </div>
        </div>
      </div>

    </>
  )
}

export default Dash_home