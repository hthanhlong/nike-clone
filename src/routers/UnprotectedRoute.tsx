import { Outlet } from 'react-router-dom'
import RootLayout from '../layouts/RootLayout'

const UnprotectedRoute = () => {
  return (
    <RootLayout>
      <Outlet />
    </RootLayout>
  )
}

export default UnprotectedRoute
