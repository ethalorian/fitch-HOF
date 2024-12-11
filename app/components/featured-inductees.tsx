'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import BackgroundEffects from './background-effects'

const featuredInductees = [
  {
    name: "Dr. Maria Rodriguez",
    category: "Science & Technology",
    description: "Pioneering researcher in quantum computing, revolutionizing the field with groundbreaking algorithms.",
    imageUrl: "/placeholder.svg?height=400&width=400"
  },
  {
    name: "James Chen",
    category: "Business & Entrepreneurship",
    description: "Visionary entrepreneur who transformed the renewable energy sector with innovative solar technologies.",
    imageUrl: "/placeholder.svg?height=400&width=400"
  },
  {
    name: "Aisha Patel",
    category: "Arts & Culture",
    description: "Acclaimed filmmaker whose work has shed light on important social issues and inspired global change.",
    imageUrl: "/placeholder.svg?height=400&width=400"
  }
]

export default function FeaturedInductees() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextInductee = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredInductees.length)
  }

  const prevInductee = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + featuredInductees.length) % featuredInductees.length)
  }

  return (
    <section className="relative py-20 bg-secondary overflow-hidden">
      <BackgroundEffects />
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background/50 to-background" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Featured Inductees</h2>
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-card text-card-foreground max-w-3xl mx-auto">
                <CardHeader className="flex flex-row items-center gap-4">
                  <Avatar className="w-20 h-20">
                    <AvatarImage src={featuredInductees[currentIndex].imageUrl} alt={featuredInductees[currentIndex].name} />
                    <AvatarFallback>{featuredInductees[currentIndex].name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-2xl">{featuredInductees[currentIndex].name}</CardTitle>
                    <CardDescription>{featuredInductees[currentIndex].category}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{featuredInductees[currentIndex].description}</p>
                </CardContent>
                <CardFooter className="justify-end">
                  <Button variant="outline">Learn More</Button>
                </CardFooter>
              </Card>
            </motion.div>
          </AnimatePresence>
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-1/2 left-4 -translate-y-1/2"
            onClick={prevInductee}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-1/2 right-4 -translate-y-1/2"
            onClick={nextInductee}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  )
}

