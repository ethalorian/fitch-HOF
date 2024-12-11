'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { cn } from "@/lib/utils"
import { TextureOverlay } from './texture-overlay'

const stats = [
  { label: "Total Inductees", value: 500 },
  { label: "Years of Excellence", value: 25 },
  { label: "Countries Represented", value: 45 },
  { label: "Fields of Achievement", value: 12 }
] as const

export default function HallOfFameStats() {
  return (
    <section className="bg-primary text-primary-foreground relative">
      <TextureOverlay />
      <div className="container mx-auto max-w-7xl px-4 space-y-8 py-20">
        <h2 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-4xl">
          Hall of Fame by the Numbers
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className={cn(
                "h-full bg-primary-foreground text-primary",
                "transition-colors hover:bg-muted/50"
              )}>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">
                    {stat.value}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground">
                    {stat.label}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
