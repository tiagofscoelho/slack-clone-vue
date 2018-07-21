import axios from 'axios'

// Create axios instance
const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  }
})

export default axiosInstance
