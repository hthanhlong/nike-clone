import axios from 'axios'
import { LOCAL_STORAGE_KEY } from '../data/constants'
import { HOST_ENDPOINT } from '../data/configENV'

export const http = axios.create({
  baseURL: `${HOST_ENDPOINT}/api/v1`,
})

http.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem(LOCAL_STORAGE_KEY.ACCESS_TOKEN)
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  function (error) {
    return Promise.reject(error)
  },
)

http.interceptors.response.use(
  (response) => response.data,
  async (error) => {
    return Promise.reject(error)
  },
)
