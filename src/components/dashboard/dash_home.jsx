import React, { useState } from 'react'
import Dash_navbar from './dash_navbar'

const Dash_home = () => {
  const username = localStorage.getItem('username') || 'User'
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn')
    localStorage.removeItem('username')
    window.location.href = '/'
  }

  // Example stats data
  const stats = [
    { title: 'Enrolled Courses', value: '6', change: '+1', isPositive: true },
    { title: 'Assignments Due', value: '3', change: 'This week', isPositive: false },
    { title: 'Attendance', value: '92%', change: '+2%', isPositive: true },
    { title: 'Average Grade', value: 'A-', change: 'Top 10%', isPositive: true },
  ];

  // Example recent activity
  const activities = [
    { id: 1, action: 'Submitted Math Assignment', time: '2 hours ago' },
    { id: 2, action: 'Enrolled in React Course', time: '5 hours ago' },
    { id: 3, action: 'Downloaded Physics Lecture Notes', time: '1 day ago' },
    { id: 4, action: 'Science Quiz Graded', time: '2 days ago' },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100 font-sans selection:bg-pink-500/30">
     
      <div className="flex min-h-[calc(100vh-70px)] relative overflow-hidden">
        
        {/* Background glow effects */}
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-pink-600/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none"></div>

        {/* Sidebar overlay for mobile */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          ></div>
        )}

        {/* Sidebar */}
        <div className={`
          fixed md:static inset-y-0 left-0 w-64 bg-[#111111]/80 backdrop-blur-xl border-r border-white/10 p-6 flex flex-col z-40
          transform transition-all duration-300 ease-in-out shadow-2xl md:shadow-none
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0
        `}>
          {/* Mobile Close Button */}
          <div className="flex justify-between items-center md:hidden mb-8">
            <span className="text-xl font-bold bg-linear-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Menu</span>
            <button onClick={() => setIsSidebarOpen(false)} className="text-gray-400 hover:text-white bg-white/5 p-2 rounded-full transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>

          <div className="mb-8 hidden md:block">
            <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider">Harsh Academy Live</h2>
          </div>

          <ul className="flex flex-col gap-2 h-full">
            <li>
              <a href="/dash_home" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-linear-to-r from-pink-500/10 to-purple-500/10 text-pink-400 border border-pink-500/20 font-medium transition-all shadow-[0_0_15px_rgba(236,72,153,0.1)]">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
                Dashboard
              </a>
            </li>
            <li>
              <a href="/courses" className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 transition-all font-medium group">
                <svg className="w-5 h-5 group-hover:text-pink-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                Courses
              </a>
            </li>
            <li>
              <a href="/projects" className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 transition-all font-medium group">
                <svg className="w-5 h-5 group-hover:text-pink-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                Projects
              </a>
            </li>
            <li>
              <a href="/payment" className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 transition-all font-medium group">
                <svg className="w-5 h-5 group-hover:text-pink-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
                Payment info
              </a>
            </li>
            <li>
              <a href="/profile" className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 transition-all font-medium group">
                <svg className="w-5 h-5 group-hover:text-pink-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                Profile
              </a>
            </li>
            <li className="mt-auto pt-4 border-t border-white/10">
              <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:text-red-400 hover:bg-red-500/10 border border-transparent hover:border-red-500/20 transition-all font-medium group">
                <svg className="w-5 h-5 group-hover:text-red-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                Logout
              </button>
            </li>
          </ul>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col min-w-0 max-h-[calc(100vh-70px)] overflow-y-auto custom-scrollbar">
          
          <div className="flex-1 p-6 md:p-10 relative z-10 w-full max-w-7xl mx-auto">
            {/* Hamburger Button for Mobile */}
            <div className="md:hidden flex justify-end mb-6">
              <button onClick={() => setIsSidebarOpen(true)} className="text-gray-400 hover:text-white bg-[#111111] border border-white/10 p-2.5 rounded-xl shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-pink-500/50">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              </button>
            </div>

            {/* Header Section */}
            <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-sm font-medium mb-4">
                  Welcome Back
                </div>
                <h1 className="text-4xl md:text-5xl font-black mb-2 tracking-tight">
                  Hello, <span className="bg-linear-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">{username}</span> 👋
                </h1>
                <p className="text-gray-400 text-lg max-w-2xl">Here's your learning progress for today.</p>
              </div>
              <div className="flex gap-3">
                <button className="px-5 py-2.5 rounded-xl bg-[#111111] border border-white/10 text-white font-medium hover:bg-white/5 hover:border-white/20 transition-all flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  Resume Course
                </button>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {stats.map((stat, index) => (
                <div key={index} className="bg-[#111111]/60 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:border-pink-500/30 transition-all group hover:shadow-[0_0_30px_rgba(236,72,153,0.05)]">
                  <h3 className="text-gray-400 text-sm font-medium mb-2">{stat.title}</h3>
                  <div className="flex items-end justify-between">
                    <span className="text-3xl font-bold text-white group-hover:bg-linear-to-r group-hover:from-pink-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all">{stat.value}</span>
                    <span className={`text-sm font-medium flex items-center gap-1 ${stat.isPositive ? 'text-emerald-400' : 'text-red-400'}`}>
                      {stat.isPositive ? (
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                      ) : (
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" /></svg>
                      )}
                      {stat.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Chart / Area placeholder */}
              <div className="lg:col-span-2 bg-[#111111]/60 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-white">Overview</h2>
                  <select className="bg-transparent border border-white/10 text-gray-400 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block p-2 outline-none">
                    <option>This Week</option>
                    <option>This Month</option>
                    <option>This Year</option>
                  </select>
                </div>
                <div className="flex-1 min-h-[300px] border border-dashed border-white/10 rounded-xl flex items-center justify-center bg-white/2">
                  <p className="text-gray-500 flex items-center gap-2">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                    Chart Placeholder
                  </p>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-[#111111]/60 backdrop-blur-md border border-white/10 rounded-2xl p-6">
                <h2 className="text-xl font-bold text-white mb-6">Recent Activity</h2>
                <div className="relative border-l border-white/10 ml-3 space-y-6">
                  {activities.map((activity, index) => (
                    <div key={activity.id} className="pl-6 relative">
                      <div className="absolute w-3 h-3 bg-pink-500 rounded-full -left-[1.5px] top-1.5 transform -translate-x-1/2 ring-4 ring-[#0a0a0a]"></div>
                      <p className="text-gray-300 font-medium mb-1">{activity.action}</p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-8 py-3 rounded-xl border border-white/10 text-gray-400 hover:text-white hover:bg-white/5 transition-all font-medium text-sm">
                  View All Activity
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
      
      {/* Custom Scrollbar Styles for this component */}
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      `}} />
    </div>
  )
}

export default Dash_home