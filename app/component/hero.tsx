import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { MedalIcon, CalendarIcon, UsersIcon } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="flex items-center justify-center min-h-[calc(100vh-4rem)] py-12 md:py-24">
      {/* Content */}
      <div className="container relative">
        <div className="flex flex-col items-center space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground">
            Fitchburg High School
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            Athletic Hall of Fame
          </h2>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl text-center">
            Honoring the legends who have shaped our athletic legacy
          </p>
          <Button 
            size="lg" 
            variant="default"
            asChild
          >
            <Link href="/nominations">Nominate an Athlete</Link>
          </Button>

          {/* Additional Information */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-16">
            <div className="flex flex-col items-center space-y-4">
              <MedalIcon className="h-12 w-12 text-foreground" />
              <h3 className="text-xl font-semibold text-foreground">Excellence</h3>
              <p className="text-muted-foreground text-center">Recognizing outstanding athletic achievements</p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <CalendarIcon className="h-12 w-12 text-foreground" />
              <h3 className="text-xl font-semibold text-foreground">Legacy</h3>
              <p className="text-muted-foreground text-center">Preserving our rich sports history since 1894</p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <UsersIcon className="h-12 w-12 text-foreground" />
              <h3 className="text-xl font-semibold text-foreground">Community</h3>
              <p className="text-muted-foreground text-center">Bringing together athletes, coaches, and supporters</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

