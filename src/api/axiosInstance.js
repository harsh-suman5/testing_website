import axios from 'axios'

// Single shared axios instance — all components import this
const axiosInstance = axios.create({
  baseURL: process.env.VITE_BACKEND_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default axiosInstance
