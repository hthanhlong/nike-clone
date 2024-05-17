import { AxiosRequestConfig } from 'axios'
import { http } from '../../../lib/axios'
import { ResponseSuccess, User } from '../../../types'
import END_POINT from '../../../data/endpoint'

class AuthService {
  signUp<T>(data: T, options?: AxiosRequestConfig): Promise<void> {
    return http.post(END_POINT.signUp, data, { ...options })
  }

  SignIn<T>(
    data: T,
    options?: AxiosRequestConfig,
  ): Promise<
    ResponseSuccess<{
      user: User
      accessToken: string
      refreshToken: string
    }>
  > {
    return http.post(END_POINT.signIn, data, { ...options })
  }
}

export default new AuthService()
