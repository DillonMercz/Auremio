'use client'

import { useEffect, useState, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface AshParticle {
  id: number
  x: number
  y: number
}

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isMoving, setIsMoving] = useState(false)
  const [ashParticles, setAshParticles] = useState<AshParticle[]>([])
  const particleCountRef = useRef(0)
  const lastParticleTimeRef = useRef(0)

  const createAshParticle = useCallback(() => {
    const now = Date.now()
    if (now - lastParticleTimeRef.current < 50) return // Limit particle creation rate
    
    lastParticleTimeRef.current = now
    particleCountRef.current += 1

    return {
      id: particleCountRef.current,
      x: mousePosition.x,
      y: mousePosition.y
    }
  }, [mousePosition])

  useEffect(() => {
    setMounted(true)
    let moveTimer: NodeJS.Timeout
    let cleanupTimer: NodeJS.Timeout

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsMoving(true)
      
      // Create new ash particle when moving
      const newParticle = createAshParticle()
      if (newParticle) {
        setAshParticles(prev => [...prev.slice(-5), newParticle])
      }
      
      clearTimeout(moveTimer)
      moveTimer = setTimeout(() => {
        setIsMoving(false)
      }, 100)
    }

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || 
          target.closest('a') || target.closest('button') ||
          target.classList.contains('cursor-hover')) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    // Clean up old particles
    cleanupTimer = setInterval(() => {
      setAshParticles(prev => prev.filter(particle => 
        Date.now() - particle.id < 1500
      ))
    }, 1000)

    window.addEventListener('mousemove', updateMousePosition)
    window.addEventListener('mouseover', handleMouseEnter)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      window.removeEventListener('mouseover', handleMouseEnter)
      clearTimeout(moveTimer)
      clearInterval(cleanupTimer)
    }
  }, [createAshParticle])

  if (!mounted) return null

  return (
    <>
      {/* Main Cursor (Cigar) */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none"
        style={{ zIndex: 999999 }}
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          rotate: isMoving ? 15 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 15,
          mass: 0.1,
          rotate: {
            type: 'spring',
            stiffness: 100,
            damping: 10,
          }
        }}
      >
        <div className="relative w-12 h-3">
          {/* Cigar Body */}
          <div 
            className="absolute inset-0 rounded-full transform scale-x-150"
            style={{ 
              backgroundColor: '#8B4513',
              height: '6px',
              top: '50%',
              transform: 'translateY(-50%) scaleX(1.5)'
            }}
          />
          <div 
            className="absolute inset-0 rounded-full transform scale-x-125 translate-x-1"
            style={{ 
              backgroundColor: '#D2691E',
              height: '6px',
              top: '50%',
              transform: 'translateY(-50%) scaleX(1.25) translateX(1px)'
            }}
          />
          {/* Lit End */}
          <div 
            className="absolute right-0 rounded-full transform translate-x-2"
            style={{ 
              backgroundColor: '#FF4500',
              width: '4px',
              height: '4px',
              top: '50%',
              transform: 'translateY(-50%) translateX(2px)'
            }}
          />
        </div>
      </motion.div>

      {/* Rising Smoke - Only when still */}
      <AnimatePresence>
        {!isMoving && mounted && (
          <>
            {[1, 2, 3].map((i) => (
              <motion.div
                key={`smoke-${i}`}
                className="fixed pointer-events-none"
                style={{ zIndex: 999998 }}
                initial={{ 
                  opacity: 0,
                  x: mousePosition.x + 12,
                  y: mousePosition.y - 8,
                  scale: 0.5
                }}
                animate={{ 
                  opacity: [0, 0.4, 0],
                  x: mousePosition.x + 12,
                  y: mousePosition.y - 8 - (i * 40),
                  scale: 2.5
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.4,
                  ease: 'easeOut'
                }}
              >
                <div 
                  className="rounded-full blur-xl"
                  style={{ 
                    width: '16px',
                    height: '16px',
                    backgroundColor: 'rgba(200, 200, 200, 0.9)',
                    filter: 'blur(8px)'
                  }}
                />
              </motion.div>
            ))}
          </>
        )}
      </AnimatePresence>

      {/* Falling Ash - Only when moving */}
      <AnimatePresence>
        {isMoving && ashParticles.map((particle) => (
          <motion.div
            key={`ash-${particle.id}`}
            className="fixed pointer-events-none blur-sm"
            style={{ zIndex: 999998 }}
            initial={{ 
              x: particle.x + 12,
              y: particle.y,
              opacity: 0.8,
              scale: 1
            }}
            animate={{ 
              x: particle.x + 12 + (Math.sin(particle.id) * 15),
              y: particle.y + 100,
              opacity: 0,
              scale: 0.5
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 1.5,
              ease: 'easeOut'
            }}
          >
            <div 
              style={{ 
                width: '6px',
                height: '6px',
                backgroundColor: 'rgba(80, 80, 80, 0.9)',
                borderRadius: '50%',
                boxShadow: '0 0 4px rgba(80, 80, 80, 0.5)'
              }}
            />
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Hover Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none"
        style={{ zIndex: 999997 }}
        animate={{
          x: mousePosition.x - 24,
          y: mousePosition.y - 24,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 10,
          mass: 0.2,
        }}
      >
        <div 
          className="w-12 h-12 rounded-full"
          style={{
            border: '2px solid rgba(80, 80, 80, 0.8)'
          }}
        />
      </motion.div>
    </>
  )
}
