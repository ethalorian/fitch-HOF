'use client'

import { motion } from 'framer-motion'

export function TextureOverlay() {
  return (
    <motion.div
      className="absolute inset-0 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.4 }}
      transition={{ duration: 1 }}
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='turbulence' baseFrequency='0.7' numOctaves='5' seed='5' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3CfeComponentTransfer%3E%3CfeFuncR type='discrete' tableValues='0 0.5 1'/%3E%3CfeFuncG type='discrete' tableValues='0 0.5 1'/%3E%3CfeFuncB type='discrete' tableValues='0 0.5 1'/%3E%3C/feComponentTransfer%3E%3CfeGaussianBlur stdDeviation='0.5'/%3E%3CfeComponentTransfer%3E%3CfeFuncR type='discrete' tableValues='0 1'/%3E%3CfeFuncG type='discrete' tableValues='0 1'/%3E%3CfeFuncB type='discrete' tableValues='0 1'/%3E%3C/feComponentTransfer%3E%3C/filter%3E%3C/defs%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' fill='black'/%3E%3C/svg%3E")`,
        backgroundSize: '200px 200px',
        opacity: 0.4,
        zIndex: 0,
      }}
    />
  )
} 