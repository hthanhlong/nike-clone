import { Navigate, Outlet } from 'react-router-dom'

export const ProtectedRoute = () => {
  const isLogged = false
  const accessToken = false
  if (!isLogged && !accessToken) {
    return <Navigate to="/" />
  }
  return <Outlet />
}
