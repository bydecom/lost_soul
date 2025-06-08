import { Button } from "@/components/ui/button"
import HeroSection from "@/components/sections/HeroSection"
import FeatureSection from "@/components/sections/FeatureSection"
import TrailerSection from "@/components/sections/TrailerSection"
import ScreenshotsSection from "@/components/sections/ScreenshotsSection"
import CharactersSection from "@/components/sections/CharactersSection"
import WishlistSection from "@/components/sections/WishlistSection"
import ContactSection from "@/components/sections/ContactSection"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <HeroSection />
      <FeatureSection 
        title="Đánh thức linh hồn lạc lối"
        description="Bạn đã sẵn sàng đánh thức những bí ẩn bị lãng quên?"
        imageSrc="/assets/poster.png"
        imageAlt="Gameplay screenshot"
      />
      <CharactersSection />
      <WishlistSection />
      <ScreenshotsSection />
      <ContactSection />
    </main>
  )
} 