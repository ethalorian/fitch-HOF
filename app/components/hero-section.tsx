'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import { Button } from "./ui/button"
import BackgroundEffects from './background-effects'
import AnimatedBackground from './animated-background'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <AnimatedBackground />
      <BackgroundEffects />
      
      <div className="container mx-auto px-4 py-20 z-[2] relative">
        <div className="flex flex-col items-center gap-12">
          <motion.div 
            className="w-full text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              Honoring <span className="text-primary">Legends</span>,<br />
              Inspiring <span className="text-primary">Greatness</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              All Hail the Red and Gray
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Nominate an Athlete
              </Button>
              <Button variant="outline" size="lg">
              Donate Today 
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="w-full flex justify-center"
            initial={{ y: 0 }}
            animate={{
              y: [-10, 10],
              rotate: [-3, 3],
              scale: [0.98, 1.02],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            <Image
              src="/Logo.png"
              alt="Hall of Fame Logo"
              width={256}
              height={256}
              className="w-[150px] h-[150px] sm:w-[192px] sm:h-[192px] md:w-[256px] md:h-[256px]"
              priority
            />
          </motion.div>
        </div>
      </div>

      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8 text-primary" />
      </motion.div>
    </section>
  )
}

