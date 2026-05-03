import React from 'react'
import Dash_navbar from './dash_navbar'

const Dash_home = () => {
  const username = localStorage.getItem('username')
  return (
    <>
      <Dash_navbar />
      <div className="flex min-h-[calc(100vh-70px)] bg-black text-white">
        {/* Sidebar */}
        <div className="w-64 bg-gray-950 border-r border-gray-800 p-6 flex flex-col">
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
              <a href="/dash_home" className="block px-4 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-gray-900 border border-transparent hover:border-gray-700 transition-all font-medium">
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

        {/* Main Content */}
        <div className="flex-1 p-10 bg-gray-900 m-6 rounded-2xl border border-gray-700 shadow-lg">
          <h1 className="text-4xl font-black mb-2">
            Hello, <span className="bg-linear-to-r from-pink-500 to-red-500 bg-clip-text text-transparent">{username}</span> 👋
          </h1>
          <p className="text-gray-400 text-lg">Welcome back to your dashboard.</p>
        </div>
      </div>

    </>
  )
}

export default Dash_home