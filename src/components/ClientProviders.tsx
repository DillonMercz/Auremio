'use client'

import { createContext, useContext, useState, ReactNode, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import AgeVerificationModal from './AgeVerificationModal'
import SearchModal from './SearchModal'
import CartSlideOver from './CartSlideOver'
import CustomCursor from './CustomCursor'

interface ClientContextType {
  openSearch: () => void
  openCart: () => void
  isLoading: boolean
  setIsLoading: (loading: boolean) => void
}

const ClientContext = createContext<ClientContextType>({
  openSearch: () => {},
  openCart: () => {},
  isLoading: false,
  setIsLoading: () => {},
})

export const useClient = () => useContext(ClientContext)

export default function ClientProviders({ children }: { children: ReactNode }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isInitialLoad, setIsInitialLoad] = useState(true)

  useEffect(() => {
    // Handle initial page load
    const timer = setTimeout(() => {
      setIsInitialLoad(false)
    }, 1000) // Reduced from 2000ms to 1000ms for faster initial load

    return () => clearTimeout(timer)
  }, [])

  const openSearch = () => setIsSearchOpen(true)
  const closeSearch = () => setIsSearchOpen(false)

  const openCart = () => setIsCartOpen(true)
  const closeCart = () => setIsCartOpen(false)

  return (
    <ClientContext.Provider value={{ openSearch, openCart, isLoading, setIsLoading }}>
      {/* Custom Cursor */}
      <CustomCursor />
      
      {/* Initial Load Animation */}
      <AnimatePresence mode="wait">
        {isInitialLoad && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[100] bg-white flex items-center justify-center"
          >
            <div className="relative">
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
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <span className="text-2xl font-serif tracking-wider">A</span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        {children}
      </motion.div>

      {/* Modals */}
      <AgeVerificationModal />
      <SearchModal isOpen={isSearchOpen} onClose={closeSearch} />
      <CartSlideOver isOpen={isCartOpen} onClose={closeCart} />

      {/* Page Transition Overlay */}
      <AnimatePresence>
        {isLoading && !isInitialLoad && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-white/80 backdrop-blur-sm flex items-center justify-center"
          >
            <div className="w-12 h-12 border-2 border-gold-light rounded-full animate-spin border-t-transparent" />
          </motion.div>
        )}
      </AnimatePresence>
    </ClientContext.Provider>
  )
}
