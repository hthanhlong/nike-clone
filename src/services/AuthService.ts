import { AxiosRequestConfig } from 'axios'
import { http } from '../axios'
import END_POINT from './endpoint'

class AuthService {
  signUp<T>(data: T, options?: AxiosRequestConfig): Promise<void> {
    return http.post(END_POINT.signUp, data, { ...options })
  }

  SignIn<T>(data: T, options?: AxiosRequestConfig): Promise<void> {
    return http.post(END_POINT.signIn, data, { ...options })
  }
}

export default new AuthService()
