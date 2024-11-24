'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface ParallaxSectionProps {
  children: React.ReactNode
  offset?: number
  className?: string
  direction?: 'up' | 'down' | 'left' | 'right'
  speed?: number
}

export default function ParallaxSection({
  children,
  offset = 50,
  className = '',
  direction = 'up',
  speed = 0.5,
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const getTransformValue = () => {
    switch (direction) {
      case 'up':
        return [offset, -offset]
      case 'down':
        return [-offset, offset]
      case 'left':
        return [offset, -offset]
      case 'right':
        return [-offset, offset]
      default:
        return [offset, -offset]
    }
  }

  const yRange = useTransform(scrollYProgress, [0, 1], getTransformValue())
  const opacityRange = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const isHorizontal = direction === 'left' || direction === 'right'

  return (
    <div 
      ref={ref} 
      className={`relative overflow-hidden ${className}`}
      style={{ position: 'relative' }}
    >
      <motion.div
        style={{
          [isHorizontal ? 'x' : 'y']: yRange,
          opacity: opacityRange,
          position: 'relative'
        }}
        transition={{ type: 'spring', stiffness: 50, damping: 20 }}
      >
        {children}
      </motion.div>
    </div>
  )
}

export function ParallaxImage({ 
  src, 
  alt, 
  className = '' 
}: { 
  src: string
  alt: string
  className?: string 
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <div 
      ref={ref} 
      className={`relative overflow-hidden ${className}`}
      style={{ position: 'relative' }}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ y, scale, opacity, position: 'relative' }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${src})` }}
        />
      </motion.div>
    </div>
  )
}

export function FadeInSection({ 
  children, 
  className = '', 
  delay = 0 
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center']
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])
  const y = useTransform(scrollYProgress, [0, 0.5], [50, 0])

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ 
        opacity, 
        y,
        position: 'relative'
      }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.43, 0.13, 0.23, 0.96]
      }}
    >
      {children}
    </motion.div>
  )
}

export function ScaleOnScroll({ 
  children, 
  className = '' 
}: {
  children: React.ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ 
        scale, 
        opacity,
        position: 'relative'
      }}
    >
      {children}
    </motion.div>
  )
}
