"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/app/components/ui/navigation-menu"
import { Navbar } from "../components/navbar"
import { Footer } from "../components/footer"
import { Trophy } from 'lucide-react'

const inductionClasses: { year: number; inductees: string[] }[] = [
  { year: 2024, inductees: ["Player A", "Player B", "Coach X"] },
  { year: 2022, inductees: ["Player C", "Player D", "Coach Y"] },
  { year: 2020, inductees: ["Player E", "Player F", "Coach Z"] },
  { year: 2018, inductees: ["Player G", "Player H", "Coach W"] },
  { year: 2016, inductees: ["Player I", "Player J", "Coach V"] },
  { year: 2014, inductees: ["Player K", "Player L", "Coach U"] },
  { year: 2012, inductees: ["Player M", "Player N", "Coach T"] },
  { year: 2010, inductees: ["Player O", "Player P", "Coach S"] },
  { year: 2008, inductees: ["Player Q", "Player R", "Coach R"] },
  { year: 2006, inductees: ["Player S", "Player T", "Coach Q"] },
  { year: 2004, inductees: ["Player U", "Player V", "Coach P"] },
  { year: 2002, inductees: ["Player W", "Player X", "Coach O"] },
  { year: 2000, inductees: ["Player Y", "Player Z", "Coach N"] }
]

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center bg-gradient-to-b from-background to-secondary/10 px-4 py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold tracking-tighter mb-2">Hall of Fame</h1>
          <p className="text-xl text-muted-foreground">Honoring Legends of the Game</p>
        </div>
        <NavigationMenu className="scale-105 md:scale-110">
          <NavigationMenuList className="space-x-2">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-base">Explore</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[500px] lg:w-[600px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/hall-of-fame"
                      >
                        <Trophy className="h-6 w-6 mb-2" />
                        <div className="mb-2 mt-4 text-lg font-medium">
                          Hall of Fame
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Explore the legendary inductees who have shaped the history of our sport.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/hall-of-fame/about" title="About">
                    Learn about the history and significance of our Hall of Fame.
                  </ListItem>
                  <ListItem href="/hall-of-fame/visit" title="Visit">
                    Plan your visit to the Hall of Fame museum and exhibits.
                  </ListItem>
                  <ListItem href="/hall-of-fame/nominate" title="Nominations">
                    Understand the nomination and selection process for new inductees.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-base">Induction Classes</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {inductionClasses.map((classYear) => (
                    <ListItem
                      key={classYear.year}
                      title={`Class of ${classYear.year}`}
                      href={`/hall-of-fame/${classYear.year}`}
                    >
                      {classYear.inductees.join(", ")}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/hall-of-fame/gallery" legacyBehavior passHref>
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-base")}>
                  Gallery
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold mb-4">Featured Inductees</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {inductionClasses[0].inductees.map((inductee, index) => (
              <div key={index} className="bg-card rounded-lg shadow-md p-4">
                <div className="w-24 h-24 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center">
                  <Trophy className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-lg font-medium">{inductee}</h3>
                <p className="text-sm text-muted-foreground">Class of {inductionClasses[0].year}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-4 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-base font-medium leading-none mb-2">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

