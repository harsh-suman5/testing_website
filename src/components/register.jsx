import React, { useState } from 'react'
import axiosInstance from '../api/axiosInstance'
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: '', password: '' })
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  // Update state on every keystroke
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // Submit form → POST to backend
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage('')
    setIsError(false)

    try {
      const response = await axiosInstance.post('api/register/', formData)
      localStorage.setItem('username', response.data.username || formData.username);
      localStorage.setItem('isLoggedIn', true); 
      setMessage(response.data.message || 'Registered successfully! ✅')
      setIsError(false)
      navigate('/dash_home')  
    } catch (error) {
      const errMsg = error.response?.data?.message || 'Registration failed. Please try again.'
      setMessage(errMsg)
      setIsError(true)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="no-scroll flex justify-center items-center min-h-screen bg-linear-to-r from-blue-500 to-purple-600">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-xl w-80"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
          Register
        </h2>

        {/* Feedback Message */}
        {message && (
          <p className={`mb-4 text-sm text-center font-medium ${isError ? 'text-red-500' : 'text-green-500'}`}>
            {message}
          </p>
        )}

        <label htmlFor="username" className="block text-gray-600 mb-1">
          Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="border w-full p-2 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter username"
          required
        />

        <label htmlFor="password" className="block text-gray-600 mb-1">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="border w-full p-2 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
          placeholder="Enter password"
          required
        />

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition disabled:opacity-60"
        >
          {isLoading ? 'Registering...' : 'Register'}
        </button>

        <p className="mt-4 text-center text-gray-600">
          Already have an account?
          <span className="text-blue-500 cursor-pointer ml-1">
            <a href="/login">Login</a>
          </span>
        </p>

      </form>
    </div>
  )
}

export default Register