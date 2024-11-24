'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

interface ProductCardProps {
  title: string
  description: string
  price: string
  image: string
  isNew?: boolean
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.43, 0.13, 0.23, 0.96]
    }
  },
  hover: {
    y: -5,
    transition: {
      duration: 0.3,
      ease: 'easeInOut'
    }
  }
}

const imageVariants = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.6,
      ease: [0.43, 0.13, 0.23, 0.96]
    }
  }
}

const quickViewVariants = {
  hidden: { opacity: 0, y: 20 },
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
    y: 20,
    transition: {
      duration: 0.2,
      ease: 'easeIn'
    }
  }
}

export default function ProductCard({ title, description, price, image, isNew }: ProductCardProps) {
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <>
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        whileHover="hover"
        viewport={{ once: true }}
        className="group cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative h-[300px] mb-4 overflow-hidden rounded-sm bg-gray-50">
          {isNew && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="absolute top-4 right-4 z-20"
            >
              <div className="bg-gold-light px-3 py-1">
                <span className="text-white text-xs uppercase tracking-wider">New</span>
              </div>
            </motion.div>
          )}
          
          <motion.div
            className="relative h-full w-full"
            variants={imageVariants}
          >
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
            />
            <motion.div
              className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"
              initial={false}
              animate={{ opacity: isHovered ? 1 : 0 }}
            />
          </motion.div>

          <motion.div
            className="absolute bottom-4 left-4 right-4 z-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={(e) => {
                e.stopPropagation()
                setIsQuickViewOpen(true)
              }}
              className="w-full luxury-button text-sm"
            >
              Quick View
            </button>
          </motion.div>
        </div>

        <motion.div
          className="space-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-lg font-serif group-hover:text-gold-dark transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-600 text-sm">{description}</p>
          <div className="flex justify-between items-center pt-2">
            <p className="text-lg font-serif">${price}</p>
            <motion.button
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
              className="text-sm uppercase tracking-wider text-gold-dark hover:text-gold-light transition-colors duration-300"
            >
              Add to Cart
            </motion.button>
          </div>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {isQuickViewOpen && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80"
              onClick={() => setIsQuickViewOpen(false)}
            />
            <motion.div
              variants={quickViewVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative bg-white p-8 max-w-4xl w-full rounded-sm mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative aspect-square">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover rounded-sm"
                  />
                  {isNew && (
                    <div className="absolute top-4 right-4">
                      <div className="bg-gold-light px-3 py-1">
                        <span className="text-white text-xs uppercase tracking-wider">New</span>
                      </div>
                    </div>
                  )}
                </div>
                <div>
                  <h2 className="text-3xl font-serif mb-2">{title}</h2>
                  <p className="text-gray-600 mb-4">{description}</p>
                  <p className="text-2xl font-serif mb-6">${price}</p>
                  <button className="luxury-button w-full mb-6">
                    Add to Cart
                  </button>
                  <div className="space-y-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <svg className="w-5 h-5 text-gold-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Premium Quality</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <svg className="w-5 h-5 text-gold-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <span>Certificate of Authenticity</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <svg className="w-5 h-5 text-gold-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                      <span>Free Luxury Gift Wrapping</span>
                    </div>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsQuickViewOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
