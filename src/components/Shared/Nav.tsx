import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { headerLogo } from '../../assets/images'
import { navLinks } from '../../constants'
import { hamburger } from '../../assets/icons'
import MobileNav from './MobileNav'

const Nav = () => {
  const { pathname } = useLocation()
  console.log('pathname', pathname)

  const [isOpen, setIsOpen] = useState(false)

  const contentNav = (pathname: string) => {
    if (pathname === '/sign-in') {
      return (
        <>
          <Link to="/sign-up">
            <span className="font-montserrat text-lg leading-normal text-slate-gray transition-all hover:text-coral-red">
              Sign up
            </span>
          </Link>
        </>
      )
    }

    return (
      <>
        <ul className="flex flex-1 items-center justify-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <Link key={item.label} to={item.href}>
              <span className="font-montserrat text-lg leading-normal text-slate-gray transition-all hover:text-coral-red">
                {item.label}
              </span>
            </Link>
          ))}
        </ul>
        <div className="flex gap-2 font-montserrat text-lg font-medium leading-normal max-lg:hidden">
          <Link to="/sign-in">Sign in</Link>
        </div>
        <div
          onClick={() => setIsOpen(true)}
          className="hidden cursor-pointer max-lg:block"
        >
          <img src={hamburger} alt="hamburger icon" width={25} height={25} />
        </div>
      </>
    )
  }

  return (
    <header className="padding-x w-full py-8">
      <nav className="max-container flex items-center justify-between">
        <Link to="/">
          <img
            src={headerLogo}
            alt="logo"
            width={130}
            height={30}
            className="m-0 h-[30px] w-[130px]"
          />
        </Link>
        {contentNav(pathname)}
      </nav>
      <AnimatePresence>
        {isOpen && <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />}
      </AnimatePresence>
    </header>
  )
}

export default Nav
