import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'

export const useAuthContext = () => {
  const { authData, setAuthData } = useContext(AuthContext)
  return { authData, setAuthData }
}
