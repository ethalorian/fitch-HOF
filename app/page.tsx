import HeroSection from './components/hero-section'
import AthleteSpotlights from './components/athlete-spotlights'
import FeaturedInductees from './components/featured-inductees'
import DonateSection from './components/donate-section'
import HallOfFameStats from './components/hall-of-fame-stats'
import { Navbar } from './components/navbar'
import { Footer } from './components/footer'

export default function Home() {
  return (
    <main className="bg-background">
      <Navbar/>
      <HeroSection />
      <AthleteSpotlights />
      <HallOfFameStats />
      <FeaturedInductees />
      <DonateSection />
      <Footer/>
    </main>
  )
}
