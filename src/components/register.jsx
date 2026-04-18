import React from 'react'

const Login = () => {
  return (
    
  <div className="no-scroll flex justify-center items-center min-h-screen bg-linear-to-r from-blue-500 to-purple-600">
    
    <form className="bg-white p-8 rounded-2xl shadow-xl w-80">
      
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
        Login
      </h2>

      <label htmlFor="username" className="block text-gray-600 mb-1">
        Username
      </label>
      <input 
        type="text" 
        id="username" 
        name="username" 
        className="border w-full p-2 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Enter username" 
        required
      />
      <br />

      <label htmlFor="password" className="block text-gray-600 mb-1">
        Password
      </label>
      <input 
        type="password" 
        id="password" 
        name="password" 
        className="border w-full p-2 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
        placeholder="Enter password" 
        required
      />
      <br /><br />

      <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
        Register
      </button>

      <p className="mt-4 text-center text-gray-600">
        Already have an account.
        <span className="text-blue-500 cursor-pointer ml-1"><a href="/login">Login</a></span>
      </p>

    </form>

  </div>

  )
}

export default Login