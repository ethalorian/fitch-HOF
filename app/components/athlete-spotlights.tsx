'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import AnimatedBackground from './animated-background'

const athletes = [
  {
    name: "Michael Jordan",
    sport: "Basketball",
    achievements: ["6x NBA Champion", "5x MVP", "14x All-Star"],
    bio: "Widely considered the greatest basketball player of all time, Jordan's impact on the sport and popular culture is unparalleled.",
    imageUrl: "/placeholder.svg?height=400&width=400"
  },
  {
    name: "Serena Williams",
    sport: "Tennis",
    achievements: ["23 Grand Slam singles titles", "4x Olympic gold medalist", "Former World No. 1"],
    bio: "One of the most dominant tennis players in history, Williams has redefined the sport with her powerful play and inspiring career.",
    imageUrl: "/placeholder.svg?height=400&width=400"
  },
  {
    name: "Usain Bolt",
    sport: "Track and Field",
    achievements: ["8x Olympic gold medalist", "World record holder in 100m and 200m", "11x World Champion"],
    bio: "The fastest man in history, Bolt's speed and charisma have made him a global icon in athletics.",
    imageUrl: "/placeholder.svg?height=400&width=400"
  }
]

export default function AthleteSpotlights() {
  const [selectedAthlete, setSelectedAthlete] = useState(athletes[0])

  return (
    <section className="relative py-20 bg-background overflow-hidden">
      <AnimatedBackground />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Athlete Spotlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {athletes.map((athlete) => (
            <Button
              key={athlete.name}
              variant={athlete === selectedAthlete ? "default" : "outline"}
              className="h-auto py-2"
              onClick={() => setSelectedAthlete(athlete)}
            >
              {athlete.name}
            </Button>
          ))}
        </div>
        <motion.div
          key={selectedAthlete.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="bg-card text-card-foreground">
            <CardHeader className="flex flex-row items-center gap-4">
              <Avatar className="w-24 h-24">
                <AvatarImage src={selectedAthlete.imageUrl} alt={selectedAthlete.name} />
                <AvatarFallback>{selectedAthlete.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-2xl">{selectedAthlete.name}</CardTitle>
                <CardDescription>{selectedAthlete.sport}</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">{selectedAthlete.bio}</p>
              <div className="flex flex-wrap gap-2">
                {selectedAthlete.achievements.map((achievement, index) => (
                  <Badge key={index} variant="secondary">{achievement}</Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline">Full Biography</Button>
            </CardFooter>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

