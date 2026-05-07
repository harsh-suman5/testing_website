import React, { useState, useEffect } from 'react';
import Dash_navbar from './dash_navbar';
import axiosInstance from '../../api/axiosInstance';

const Profile = () => {
  const username = localStorage.getItem('username') || 'Guest User';
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const [userDetails, setUserDetails] = useState({
    email: '',
    role: '',
    joinDate: '',
    coursesCompleted: 0,
    certificates: 0,
    phone: '',
    location: '',
    bio: ''
  });
  const [isLoading, setIsLoading] = useState(true);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    window.location.href = '/';
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Backend API call to fetch real user details
        const response = await axiosInstance.get(`/api/user/`, {
          params: { username }
        });
        
        if (response.data) {
          setUserDetails(prev => ({ ...prev, ...response.data }));
        }
      } catch (error) {
        console.error("Error fetching user details:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (username && username !== 'Guest User') {
      fetchUserData();
    } else {
      setIsLoading(false);
    }
  }, [username]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100 font-sans selection:bg-pink-500/30">
      <Dash_navbar />
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
              <a href="/dash_home" className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 transition-all font-medium group">
                <svg className="w-5 h-5 group-hover:text-pink-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
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
              <a href="/profile" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-linear-to-r from-pink-500/10 to-purple-500/10 text-pink-400 border border-pink-500/20 font-medium transition-all shadow-[0_0_15px_rgba(236,72,153,0.1)]">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
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
          
          <div className="flex-1 p-6 md:p-10 relative z-10 w-full max-w-5xl mx-auto">
            {/* Hamburger Button for Mobile */}
            <div className="md:hidden flex justify-end mb-6">
              <button onClick={() => setIsSidebarOpen(true)} className="text-gray-400 hover:text-white bg-[#111111] border border-white/10 p-2.5 rounded-xl shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-pink-500/50">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              </button>
            </div>

            {/* Profile Header */}
            <div className="mb-10">
              <h1 className="text-3xl md:text-4xl font-black mb-2 tracking-tight text-white">
                My Profile
              </h1>
              <p className="text-gray-400 text-lg">Manage your personal information and account settings.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Left Column: Avatar & Quick Info */}
              <div className="lg:col-span-1">
                <div className="bg-[#111111]/60 backdrop-blur-md border border-white/10 rounded-3xl p-8 flex flex-col items-center text-center shadow-xl">
                  {isLoading ? (
                    <div className="text-pink-400 py-10 font-medium animate-pulse">Loading profile...</div>
                  ) : (
                    <>
                      <div className="relative mb-6">
                        <div className="w-32 h-32 rounded-full bg-linear-to-tr from-pink-500 to-purple-600 p-1">
                          <div className="w-full h-full rounded-full bg-[#111111] flex items-center justify-center overflow-hidden border-4 border-[#111111]">
                            <span className="text-5xl font-bold bg-linear-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                              {username.charAt(0).toUpperCase()}
                            </span>
                          </div>
                        </div>
                        <button className="absolute bottom-0 right-0 p-2 bg-pink-500 hover:bg-pink-600 text-white rounded-full transition-colors shadow-lg shadow-pink-500/30 border border-white/20">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        </button>
                      </div>
                      
                      <h2 className="text-2xl font-bold text-white mb-1">{username}</h2>
                      <p className="text-pink-400 font-medium mb-4">{userDetails.role || 'User'}</p>
                      
                      <div className="w-full border-t border-white/10 pt-4 mt-2">
                        <div className="flex justify-between items-center py-2">
                          <span className="text-gray-400 text-sm">Joined</span>
                          <span className="text-gray-200 text-sm font-medium">{userDetails.joinDate || '-'}</span>
                        </div>
                        <div className="flex justify-between items-center py-2">
                          <span className="text-gray-400 text-sm">Courses</span>
                          <span className="text-gray-200 text-sm font-medium">{userDetails.coursesCompleted || 0}</span>
                        </div>
                        <div className="flex justify-between items-center py-2">
                          <span className="text-gray-400 text-sm">Certificates</span>
                          <span className="text-gray-200 text-sm font-medium">{userDetails.certificates || 0}</span>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Right Column: Detailed Info Form */}
              <div className="lg:col-span-2">
                <div className="bg-[#111111]/60 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-xl">
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <svg className="w-5 h-5 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" /></svg>
                    Personal Information
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-400">Full Name</label>
                        <input type="text" defaultValue={username} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500 transition-all" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-400">Email Address</label>
                        <input type="email" defaultValue={userDetails.email} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500 transition-all" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-400">Phone Number</label>
                        <input type="tel" placeholder="+1 (555) 000-0000" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500 transition-all" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-400">Location</label>
                        <input type="text" placeholder="New York, USA" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500 transition-all" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-400">Bio</label>
                      <textarea rows="4" placeholder="Tell us a little bit about yourself..." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500 transition-all resize-none"></textarea>
                    </div>

                    <div className="pt-4 flex justify-end gap-4 border-t border-white/10">
                      <button className="px-6 py-2.5 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-all font-medium">
                        Cancel
                      </button>
                      <button className="px-6 py-2.5 rounded-xl bg-linear-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white transition-all font-medium shadow-lg shadow-pink-500/25 border border-pink-500/20">
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
      
      {/* Custom Scrollbar Styles */}
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
  );
};

export default Profile;