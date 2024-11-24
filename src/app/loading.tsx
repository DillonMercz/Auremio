'use client'

import { motion } from 'framer-motion'

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-white z-[100] flex items-center justify-center">
      <div className="relative">
        {/* Logo Animation */}
        <motion.div
          className="w-24 h-24"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        >
          <div className="absolute inset-0 border-2 border-gold-light rounded-full" />
          <div className="absolute inset-0 border-2 border-gold-dark rounded-full animate-ping" />
        </motion.div>

        {/* Logo Mark */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <span className="text-2xl font-serif tracking-wider text-gold-dark">A</span>
        </motion.div>
      </div>

      {/* Loading Text */}
      <motion.div
        className="absolute bottom-20 left-0 right-0 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <p className="text-sm uppercase tracking-widest text-gray-400">Loading</p>
      </motion.div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 luxury-bg-pattern" />
        <div className="absolute inset-0 bg-gradient-radial from-transparent to-white" />
      </div>
    </div>
  )
}

export function LoadingSpinner({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  }

  return (
    <div className="relative">
      <motion.div
        className={`${sizeClasses[size]} border-2 border-gold-light rounded-full`}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          ease: "linear",
          repeat: Infinity
        }}
      >
        <div className="absolute top-0 left-1/2 w-0.5 h-1/2 bg-gold-light origin-bottom" />
      </motion.div>
      <div className={`absolute inset-0 border-2 border-gold-dark/20 rounded-full`} />
    </div>
  )
}

export function LoadingDots() {
  return (
    <div className="flex space-x-1">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="w-1 h-1 bg-gold-light rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}
    </div>
  )
}

export function LoadingBar() {
  return (
    <div className="relative w-full h-0.5 bg-gray-100 overflow-hidden">
      <motion.div
        className="absolute top-0 left-0 h-full bg-gradient-gold"
        initial={{ width: '0%' }}
        animate={{
          width: ['0%', '100%'],
          x: ['-100%', '100%'],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}
