'use client'

import { motion } from 'framer-motion'

export default function BackgroundEffects() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated horizontal lines */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`h-${i}`}
          className="absolute h-[2px] bg-gradient-to-r from-transparent via-rose-500/50 to-transparent"
          style={{
            top: `${12 * (i + 1)}%`,
            left: 0,
            right: 0,
          }}
          animate={{
            x: ['-100%', '100%'],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.4,
            ease: 'linear',
          }}
        />
      ))}

      {/* Animated vertical lines */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`v-${i}`}
          className="absolute w-[2px] bg-gradient-to-b from-transparent via-rose-500/50 to-transparent"
          style={{
            left: `${16 * (i + 1)}%`,
            top: 0,
            bottom: 0,
          }}
          animate={{
            y: ['-100%', '100%'],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            delay: i * 0.6,
            ease: 'linear',
          }}
        />
      ))}
      
      {/* Enhanced gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-70" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_black_90%)] opacity-50" />
    </div>
  )
}

