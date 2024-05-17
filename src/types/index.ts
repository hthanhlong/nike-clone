// Global types -- common types that are used across the application

export interface ResponseSuccess<T> {
  message: string
  errorCodeSystem: string
  isError: boolean
  data: T
}

export interface User {
  email: string
  firstName: string
  lastName: string
}

export interface AuthData {
  user?: User | null
  accessToken: string | null
  refreshToken: string | null
}
