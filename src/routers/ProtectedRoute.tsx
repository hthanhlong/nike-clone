import { Navigate, Outlet } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'

export const ProtectedRoute = () => {
  const { authData } = useAuthContext()

  const isLogged = !!authData.user
  const accessToken = authData.accessToken

  if (!isLogged || !accessToken) {
    return <Navigate to="/" />
  }
  return <Outlet />
}
