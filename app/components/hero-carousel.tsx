"use client"

import * as React from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "./ui/button"

const images = [
  {
    src: "/placeholder.svg?height=600&width=1200",
    alt: "Hero Image 1",
    title: "Welcome to Our Platform",
    description: "Discover amazing features and possibilities.",
  },
  {
    src: "/placeholder.svg?height=600&width=1200",
    alt: "Hero Image 2",
    title: "Innovative Solutions",
    description: "We provide cutting-edge technology for your needs.",
  },
  {
    src: "/placeholder.svg?height=600&width=1200",
    alt: "Hero Image 3",
    title: "Join Our Community",
    description: "Connect with like-minded individuals and grow together.",
  },
]

export function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [direction, setDirection] = React.useState(0)

  const slideVariants = {
    hidden: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20,
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20,
      },
    }),
  }

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: 0.2,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  }

  const buttonVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.1 },
    tap: { scale: 0.95 },
  }

  const dotsVariants = {
    initial: { y: 0 },
    animate: {
      y: -5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    hover: {
      scale: 1.2,
      transition: { duration: 0.2 },
    },
  }

  const handleNext = React.useCallback(() => {
    setDirection(1)
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    )
  }, [])

  const handlePrevious = React.useCallback(() => {
    setDirection(-1)
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    )
  }, [])

  const handleDotClick = React.useCallback((index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }, [currentIndex])

  return (
    <div className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-lg shadow-lg">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="relative aspect-[16/9]"
        >
          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            fill
            className="object-cover"
            priority
          />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/70 flex flex-col items-center justify-center text-white p-4"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
              {images[currentIndex].title}
            </h2>
            <p className="text-xl md:text-2xl text-center max-w-2xl">
              {images[currentIndex].description}
            </p>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      <motion.div
        className="absolute left-4 top-1/2 -translate-y-1/2"
        initial="rest"
        whileHover="hover"
        whileTap="tap"
      >
        <motion.div variants={buttonVariants}>
          <Button
            size="icon"
            variant="outline"
            onClick={handlePrevious}
            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors duration-200 border-white/20"
          >
            <ChevronLeft className="h-6 w-6 text-white" />
            <span className="sr-only">Previous slide</span>
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute right-4 top-1/2 -translate-y-1/2"
        initial="rest"
        whileHover="hover"
        whileTap="tap"
      >
        <motion.div variants={buttonVariants}>
          <Button
            size="icon"
            variant="outline"
            onClick={handleNext}
            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors duration-200 border-white/20"
          >
            <ChevronRight className="h-6 w-6 text-white" />
            <span className="sr-only">Next slide</span>
          </Button>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <motion.div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === currentIndex ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => handleDotClick(index)}
            initial="initial"
            animate={index === currentIndex ? "animate" : ""}
            whileHover="hover"
            variants={dotsVariants}
          />
        ))}
      </div>
    </div>
  )
}

