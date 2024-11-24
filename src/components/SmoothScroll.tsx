'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

interface SmoothScrollProps {
  children: React.ReactNode
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const [pageHeight, setPageHeight] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)
  const ghostRef = useRef<HTMLDivElement>(null)
  const [scrollRange, setScrollRange] = useState(0)
  const [viewportW, setViewportW] = useState(0)

  useEffect(() => {
    setViewportW(window.innerWidth)
  }, [])

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        if (entry.target === ghostRef.current) {
          setPageHeight(entry.contentRect.height)
        }
      }
    })

    ghostRef.current && resizeObserver.observe(ghostRef.current)
    return () => resizeObserver.disconnect()
  }, [])

  const { scrollY } = useScroll()
  const transform = useTransform(scrollY, [0, pageHeight], [0, -pageHeight])
  const physics = { damping: 15, mass: 0.27, stiffness: 55 }
  const spring = useSpring(transform, physics)

  return (
    <>
      <div
        ref={scrollRef}
        style={{ height: pageHeight }}
        className="relative w-full"
      />
      <motion.div
        ref={ghostRef}
        style={{ y: spring, position: 'fixed', top: 0, left: 0, width: '100%' }}
        className="relative will-change-transform"
      >
        {children}
      </motion.div>
    </>
  )
}

// Helper components for scroll animations
export function ScrollOpacity({ children }: { children: React.ReactNode }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0]),
    { damping: 15, mass: 0.27, stiffness: 55 }
  )

  return (
    <motion.div ref={ref} style={{ opacity }}>
      {children}
    </motion.div>
  )
}

export function ScrollParallax({ 
  children, 
  speed = 0.5,
  direction = 'up'
}: { 
  children: React.ReactNode
  speed?: number
  direction?: 'up' | 'down' | 'left' | 'right'
}) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const directionMultiplier = direction === 'down' || direction === 'right' ? 1 : -1
  const isHorizontal = direction === 'left' || direction === 'right'

  const transform = useSpring(
    useTransform(
      scrollYProgress,
      [0, 1],
      [0, speed * 100 * directionMultiplier]
    ),
    { damping: 15, mass: 0.27, stiffness: 55 }
  )

  return (
    <motion.div 
      ref={ref} 
      style={{ 
        [isHorizontal ? 'x' : 'y']: transform,
        position: 'relative',
        willChange: 'transform'
      }}
    >
      {children}
    </motion.div>
  )
}

export function ScrollReveal({ 
  children,
  direction = "up",
  delay = 0
}: { 
  children: React.ReactNode
  direction?: "up" | "down" | "left" | "right"
  delay?: number
}) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  })

  const directionMap = {
    up: [50, 0],
    down: [-50, 0],
    left: [50, 0],
    right: [-50, 0]
  }

  const isHorizontal = direction === 'left' || direction === 'right'
  const transform = useSpring(
    useTransform(scrollYProgress, [0, 1], directionMap[direction]),
    { damping: 15, mass: 0.27, stiffness: 55 }
  )

  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1]),
    { damping: 15, mass: 0.27, stiffness: 55 }
  )

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, [isHorizontal ? 'x' : 'y']: directionMap[direction][0] }}
      animate={{ opacity: 1, [isHorizontal ? 'x' : 'y']: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.43, 0.13, 0.23, 0.96] }}
      style={{ 
        opacity,
        [isHorizontal ? 'x' : 'y']: transform,
        position: 'relative',
        willChange: 'transform, opacity'
      }}
    >
      {children}
    </motion.div>
  )
}

export function ScrollScale({ 
  children,
  delay = 0
}: { 
  children: React.ReactNode
  delay?: number
}) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  })

  const scale = useSpring(
    useTransform(scrollYProgress, [0, 1], [0.8, 1]),
    { damping: 15, mass: 0.27, stiffness: 55 }
  )

  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1]),
    { damping: 15, mass: 0.27, stiffness: 55 }
  )

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay, ease: [0.43, 0.13, 0.23, 0.96] }}
      style={{ 
        scale,
        opacity,
        position: 'relative',
        willChange: 'transform, opacity'
      }}
    >
      {children}
    </motion.div>
  )
}
