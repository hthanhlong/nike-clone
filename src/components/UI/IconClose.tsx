import * as React from 'react'
import { motion } from 'framer-motion'

function IconClose(props: React.SVGProps<SVGSVGElement>) {
  return (
    // @ts-expect-error: TODO: fix this
    <motion.svg
      initial={{ opacity: 0, rotate: 0, color: '#000000' }}
      whileInView={{ opacity: 1, rotate: 360 }}
      transition={{ duration: 0.2 }}
      whileHover={{ color: '#FF6452' }}
      fill="none"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      {...props}
    >
      <path
        fill="currentColor"
        d="M6.225 4.811a1 1 0 00-1.414 1.414L10.586 12 4.81 17.775a1 1 0 101.414 1.414L12 13.414l5.775 5.775a1 1 0 001.414-1.414L13.414 12l5.775-5.775a1 1 0 00-1.414-1.414L12 10.586 6.225 4.81z"
      />
    </motion.svg>
  )
}

export default IconClose
