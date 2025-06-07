import { Button } from "@/components/ui/button"
import HeroSection from "@/components/sections/HeroSection"
import FeatureSection from "@/components/sections/FeatureSection"
import TrailerSection from "@/components/sections/TrailerSection"
import ScreenshotsSection from "@/components/sections/ScreenshotsSection"
import CharactersSection from "@/components/sections/CharactersSection"
export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <HeroSection />
      <FeatureSection 
        title="Explore the Lost Soul"
        description="Embark on an epic journey through a mysterious world filled with ancient secrets and powerful magic."
        imageSrc="/assets/poster.png"
        imageAlt="Gameplay screenshot"
      />
      <CharactersSection />
      <TrailerSection />
      <ScreenshotsSection />
      
    </main>
  )
} 