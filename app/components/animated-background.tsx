'use client'

import { useEffect, useRef } from 'react'

interface Sparkle {
  x: number
  y: number
  size: number
  opacity: number
  life: number
  maxLife: number
  velocity: number
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const sparkles: Sparkle[] = []
    const maxSparkles = 150

    function createSparkle(canvas: HTMLCanvasElement): Sparkle {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        opacity: 0,
        life: 0,
        maxLife: Math.random() * 50 + 20,
        velocity: (Math.random() - 0.5) * 0.5
      }
    }

    function drawSparkle(ctx: CanvasRenderingContext2D, sparkle: Sparkle) {
      const gradient = ctx.createRadialGradient(
        sparkle.x, sparkle.y, 0,
        sparkle.x, sparkle.y, sparkle.size
      )
      
      gradient.addColorStop(0, `rgba(255, 236, 166, ${sparkle.opacity})`)
      gradient.addColorStop(0.1, `rgba(255, 215, 0, ${sparkle.opacity * 0.8})`)
      gradient.addColorStop(1, `rgba(255, 183, 0, 0)`)

      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.arc(sparkle.x, sparkle.y, sparkle.size * 2, 0, Math.PI * 2)
      ctx.fill()
    }

    function updateAndDrawSparkles() {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      if (sparkles.length < maxSparkles && Math.random() < 0.3) {
        sparkles.push(createSparkle(canvas))
      }

      for (let i = sparkles.length - 1; i >= 0; i--) {
        const sparkle = sparkles[i]
        sparkle.life++

        if (sparkle.life < sparkle.maxLife * 0.2) {
          sparkle.opacity = (sparkle.life / (sparkle.maxLife * 0.2))
        } else if (sparkle.life > sparkle.maxLife * 0.8) {
          sparkle.opacity = ((sparkle.maxLife - sparkle.life) / (sparkle.maxLife * 0.2))
        }

        sparkle.x += sparkle.velocity
        sparkle.y += Math.sin(sparkle.life * 0.1) * 0.2

        if (sparkle.life >= sparkle.maxLife) {
          sparkles.splice(i, 1)
          continue
        }

        drawSparkle(ctx, sparkle)
      }

      requestAnimationFrame(updateAndDrawSparkles)
    }

    updateAndDrawSparkles()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 -z-10" />
}

