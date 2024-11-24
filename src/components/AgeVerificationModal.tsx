'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const modalVariants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: 0.4,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
}

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.2,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
}

export default function AgeVerificationModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasVerified, setHasVerified] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const verified = localStorage.getItem('ageVerified')
    if (!verified) {
      setIsOpen(true)
    } else {
      setHasVerified(true)
    }
  }, [])

  const handleVerify = () => {
    setIsAnimating(true)
    localStorage.setItem('ageVerified', 'true')
    setTimeout(() => {
      setHasVerified(true)
      setIsOpen(false)
      setIsAnimating(false)
    }, 500)
  }

  const handleDeny = () => {
    window.location.href = 'https://www.google.com'
  }

  if (hasVerified) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'linear-gradient(to bottom right, rgba(0,0,0,0.95), rgba(0,0,0,0.98))' }}
        >
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative max-w-lg w-full bg-black/40 backdrop-blur-lg text-white overflow-hidden rounded-sm border border-gold-light/20"
          >
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-b from-gold-light/5 via-transparent to-transparent" />
            </div>

            <div className="relative px-8 pt-16 pb-12">
              <motion.div
                variants={contentVariants}
                className="text-center"
              >
                <motion.div
                  className="mx-auto w-24 h-24 mb-8 relative"
                  animate={isAnimating ? { scale: [1, 1.2, 0] } : {}}
                  transition={{ duration: 0.5 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gold-light to-gold-dark rounded-full flex items-center justify-center">
                    <span className="text-4xl font-serif text-white">A</span>
                  </div>
                  <div className="absolute inset-0 border-2 border-gold-light/30 rounded-full animate-pulse" />
                </motion.div>

                <motion.div
                  variants={contentVariants}
                  className="space-y-4"
                >
                  <h2 className="text-3xl font-serif">Welcome to Auremio</h2>
                  <p className="text-lg text-gray-300">Please verify your age</p>
                  <p className="text-sm text-gray-400 max-w-md mx-auto">
                    By entering this site, you are agreeing to be of legal smoking age in your region
                    and accept our terms of service and privacy policy.
                  </p>

                  <div className="pt-8 space-y-4">
                    <motion.button
                      onClick={handleVerify}
                      className="w-full luxury-button group relative overflow-hidden"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="relative z-10">I am of legal age</span>
                      <motion.div
                        className="absolute inset-0 bg-white/20"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '100%' }}
                        transition={{ duration: 0.6 }}
                      />
                    </motion.button>

                    <motion.button
                      onClick={handleDeny}
                      className="w-full text-sm text-gray-400 hover:text-white transition-colors duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      I am not of legal age
                    </motion.button>
                  </div>
                </motion.div>

                <motion.p
                  variants={contentVariants}
                  className="mt-8 text-xs text-gray-500"
                >
                  By entering this site, you agree to our{' '}
                  <a href="/terms" className="text-gold-light hover:text-gold-dark transition-colors duration-300">
                    Terms of Service
                  </a>
                  {' '}and{' '}
                  <a href="/privacy" className="text-gold-light hover:text-gold-dark transition-colors duration-300">
                    Privacy Policy
                  </a>
                </motion.p>
              </motion.div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-light/20 to-transparent" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
