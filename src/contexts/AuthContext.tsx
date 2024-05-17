import React, { createContext, useState } from 'react'
import { AuthData } from '../types'

export const AuthContext = createContext({
  authData: {
    user: {
        email: '',
        firstName: '',
        lastName: '',
    },
    accessToken: null,
    refreshToken: null,
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setAuthData: (data: AuthData) => {},
})

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const initialState = {
    user: JSON.parse(localStorage.getItem('user') as string),
    accessToken: localStorage.getItem('accessToken'),
    refreshToken: localStorage.getItem('refreshToken'),
  }

  const [authData, setAuthData] = useState<AuthData>({
    user: initialState.user,
    accessToken: initialState.accessToken || null,
    refreshToken: initialState.refreshToken || null,
  })

  const contextValue = {
    authData,
    setAuthData,
  }

  return (
    // @ts-expect-error - Component is a valid JSX element
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  )
}
