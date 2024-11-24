'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useClient } from './ClientProviders'

interface MenuItem {
  title: string
  href: string
  description?: string
  image: string
}

const shopMenuItems: MenuItem[] = [
  {
    title: 'Premium Cigars',
    href: '/shop/cigars',
    description: 'Discover our curated selection of fine cigars',
    image: '/images/menu-cigars.jpg'
  },
  {
    title: 'Accessories',
    href: '/shop/accessories',
    description: 'Essential tools for the distinguished enthusiast',
    image: '/images/menu-accessories.jpg'
  },
  {
    title: 'Humidors',
    href: '/shop/humidors',
    description: 'Preserve your collection in elegant storage',
    image: '/images/menu-humidors.jpg'
  },
  {
    title: 'Gift Sets',
    href: '/shop/gifts',
    description: 'Curated collections for the perfect presentation',
    image: '/images/menu-gifts.jpg'
  }
]

const dropdownVariants = {
  hidden: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.2,
      ease: 'easeInOut'
    }
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: 'easeOut'
    }
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.2,
      ease: 'easeInOut'
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.3,
      ease: 'easeOut'
    }
  })
}

export default function Navigation() {
  const [isShopOpen, setIsShopOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { openSearch, openCart } = useClient()
  const dropdownRef = useRef<HTMLDivElement>(null)
  const [dropdownHeight, setDropdownHeight] = useState(0)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsShopOpen(false)
      }
    }

    if (dropdownRef.current) {
      setDropdownHeight(dropdownRef.current.getBoundingClientRect().height)
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="luxury-container py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-1">
            <Link href="/" className="inline-block">
              <motion.div 
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative w-10 h-10">
                  <Image
                    src="/images/logo-mark.png"
                    alt="Auremio"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-2xl font-serif tracking-wider">AUREMIO</span>
              </motion.div>
            </Link>
          </div>

          {/* Main Navigation */}
          <div className="hidden md:flex space-x-8">
            <div 
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setIsShopOpen(true)}
              onMouseLeave={() => setIsShopOpen(false)}
            >
              <motion.button 
                className="nav-link flex items-center space-x-1"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <span>Shop</span>
                <motion.svg 
                  className="w-4 h-4"
                  animate={{ rotate: isShopOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </motion.svg>
              </motion.button>

              <AnimatePresence>
                {isShopOpen && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute top-full left-1/2 transform -translate-x-1/2 w-screen max-w-7xl px-8"
                    style={{ marginTop: '1px' }}
                  >
                    <div className="bg-white shadow-2xl rounded-sm overflow-hidden">
                      <div className="grid grid-cols-2 gap-x-8 p-16">
                        <div className="col-span-1 grid grid-cols-2 gap-x-8 gap-y-10 text-sm">
                          {shopMenuItems.map((item, i) => (
                            <motion.div
                              key={item.title}
                              variants={itemVariants}
                              initial="hidden"
                              animate="visible"
                              custom={i}
                            >
                              <Link
                                href={item.href}
                                className="group block"
                              >
                                <div className="relative aspect-video overflow-hidden rounded-sm bg-gray-100 mb-4">
                                  <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                  />
                                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
                                </div>
                                <h3 className="text-lg font-serif mb-1 group-hover:text-gold-dark transition-colors duration-300">
                                  {item.title}
                                </h3>
                                <p className="text-gray-600">{item.description}</p>
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                        <motion.div
                          variants={itemVariants}
                          initial="hidden"
                          animate="visible"
                          custom={4}
                          className="col-span-1 bg-gray-50 p-8"
                        >
                          <h3 className="text-lg font-serif mb-4">Featured Collection</h3>
                          <div className="aspect-video relative overflow-hidden rounded-sm mb-4">
                            <Image
                              src="/images/collection-limited.jpg"
                              alt="Featured Collection"
                              fill
                              className="object-cover"
                            />
                            <div className="absolute inset-0 bg-black/10" />
                          </div>
                          <h4 className="text-lg mb-2">Limited Edition Series</h4>
                          <p className="text-gray-600 text-sm mb-4">
                            Explore our exclusive collection of rare and limited edition pieces.
                          </p>
                          <Link 
                            href="/collections/limited-edition" 
                            className="luxury-button inline-block"
                          >
                            Discover Now
                          </Link>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <Link href="/collections" className="nav-link">
              Collections
            </Link>
            <Link href="/about" className="nav-link">
              About
            </Link>
            <Link href="/contact" className="nav-link">
              Contact
            </Link>
          </div>

          {/* Right Navigation */}
          <div className="flex-1 flex justify-end space-x-6">
            <motion.button 
              className="nav-link flex items-center space-x-1"
              onClick={openSearch}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span>Search</span>
            </motion.button>
            <motion.button 
              className="nav-link flex items-center space-x-1"
              onClick={openCart}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span>Cart (0)</span>
            </motion.button>
          </div>
        </div>
      </div>
    </nav>
  )
}
