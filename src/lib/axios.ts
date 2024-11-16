import axios from 'axios'
import { cookies } from 'next/headers'
import { ACCESS_TOKEN } from './constants'
import { envServerConfig } from './envServer'

// Axios Interceptor Instance
const axiosInstance = axios.create({
  baseURL: envServerConfig.DOMAIN_API,
  headers: {
    'Content-Type': 'application/json'
  }
})

axiosInstance.interceptors.request.use(
  (config) => {
    const cookieStore = cookies()
    const token = cookieStore.get(ACCESS_TOKEN)

    // If token is present, add it to request's Authorization Header
    if (token) {
      if (config.headers) config.headers.Authorization = `Bearer ${token.value}`
    }
    return config
  },
  (error) => {
    // Handle request errors here
    return Promise.reject(error)
  }
)

// Axios Interceptor: Response Method
axiosInstance.interceptors.response.use(
  (response) => {
    // Can be modified response
    return response
  },
  (error) => {
    // Handle response errors here
    return Promise.reject(error)
  }
)

export default axiosInstance
