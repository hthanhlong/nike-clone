import { motion } from 'framer-motion'
import NavList from '../UI/NavList'
import IconClose from '../UI/IconClose'

export const MobileNav = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}) => {
  const navContainer = {
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        x: { velocity: 100 },
        duration: 0.3,
      },
    },
    hidden: {
      x: 250,
      opacity: 0,
      transition: {
        x: { velocity: 100 },
        duration: 0.3,
      },
    },
  }

  return (
    <motion.div
      initial="hidden"
      animate={isOpen ? 'visible' : 'hidden'}
      exit="hidden"
      variants={navContainer}
      className="fixed right-0 top-0 z-[100] h-screen bg-white shadow-lg max-lg:w-1/2 max-sm:w-[90%] lg:hidden"
    >
      <button
        className="absolute right-10 top-10 text-4xl"
        onClick={() => setIsOpen(false)}
      >
        <IconClose />
      </button>
      <NavList />
    </motion.div>
  )
}

export default MobileNav
