import { ReactNode } from 'react'
import { Footer, Nav } from '../components'

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default RootLayout
