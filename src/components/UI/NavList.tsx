import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { navLinks } from '../../data/constants'

const NavList = () => {
  const navList = {
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.07,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  }

  const navItem = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    hidden: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
  }

  return (
    <motion.ul
      className="grid h-full place-content-center gap-10 text-xl font-bold"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={navList}
    >
      {navLinks.map((item) => (
        <motion.li
          whileHover={{ color: '#FF6452' }}
          variants={navItem}
          key={item.label}
        >
          <Link to={item.href}>{item.label}</Link>
        </motion.li>
      ))}
    </motion.ul>
  )
}

export default NavList
