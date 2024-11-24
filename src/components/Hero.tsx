'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

interface HeroProps {
  title: string
  subtitle: string
  backgroundImage: string
  ctaText?: string
  ctaLink?: string
  overlay?: boolean
  height?: 'full' | 'large' | 'medium' | 'small'
  align?: 'left' | 'center' | 'right'
}

const heightClasses = {
  full: 'h-screen',
  large: 'h-[90vh]',
  medium: 'h-[70vh]',
  small: 'h-[50vh]'
}

const alignClasses = {
  left: 'items-start text-left',
  center: 'items-center text-center',
  right: 'items-end text-right'
}

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.43, 0.13, 0.23, 0.96]
    }
  }
}

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      duration: 0.6,
      ease: [0.43, 0.13, 0.23, 0.96]
    }
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: 'easeInOut'
    }
  },
  tap: {
    scale: 0.95
  }
}

export default function Hero({
  title,
  subtitle,
  backgroundImage,
  ctaText,
  ctaLink = '/',
  overlay = true,
  height = 'large',
  align = 'center'
}: HeroProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    setMounted(true)
  }, [])

  // Remove any leading slash from the backgroundImage path
  const imagePath = backgroundImage.startsWith('/') ? backgroundImage.slice(1) : backgroundImage

  return (
    <section 
      ref={ref}
      className={`relative ${heightClasses[height]} bg-black overflow-hidden`}
      style={{ position: 'relative' }}
    >
      <motion.div 
        className={`absolute inset-0 bg-cover bg-center ${overlay ? 'opacity-70' : 'opacity-100'}`}
        style={{ 
          backgroundImage: `url(${imagePath})`,
          y,
          position: 'absolute'
        }}
      />
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/10"
        style={{ opacity, position: 'absolute' }}
      />
      <div className={`relative h-full luxury-container flex ${alignClasses[align]}`}>
        <motion.div 
          className="max-w-2xl text-white py-20"
          initial="hidden"
          animate={mounted ? "visible" : "hidden"}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-serif mb-6 luxury-text-shadow"
            variants={textVariants}
          >
            {title}
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl font-light mb-8 leading-relaxed"
            variants={textVariants}
          >
            {subtitle}
          </motion.p>
          {ctaText && (
            <motion.a
              href={ctaLink}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="inline-block"
            >
              <button className="luxury-button">
                {ctaText}
              </button>
            </motion.a>
          )}
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent" />
      
      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1 h-2 bg-white rounded-full"
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
    </section>
  )
}
