'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AnimatedLogo() {
  return (
    <motion.div
      initial={{ scale: 0.25, opacity: 0, rotate: -180 }}
      animate={{ scale: 2, opacity: 1, rotate: 180 }}
      transition={{ duration: .75, ease: "easeOut" }}
      className="relative w-40 h-40 md:w-56 md:h-56"
    >
      <Image
        src="/Logo.png"
        alt="Hall of Fame Logo"
        fill
        className="object-contain"
        priority
      />
    </motion.div>
  )
}

