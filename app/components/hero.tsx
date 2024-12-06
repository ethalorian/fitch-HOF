import Link from 'next/link'
import { HeroCarousel } from './hero-carousel'

export default function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] py-12 md:py-24 flex items-center justify-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(45deg,#fafafa_1px,transparent_1px),linear-gradient(-45deg,#fafafa_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />

      {/* Main Content */}
      <div className="container px-4">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
        <HeroCarousel/>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
            Honoring the legends who have shaped our athletic legacy
          </p>

         
        </div>
      </div>
    </section>
  )
}

