import { ReactNode } from 'react'
import { Footer, Nav } from '../components'

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <main className="max-container relative w-full flex-1">{children}</main>
      <Footer />
    </div>
  )
}

export default RootLayout
