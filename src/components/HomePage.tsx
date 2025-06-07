'use client'

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import HeroSection from "@/components/sections/HeroSection"
import FeatureSection from "@/components/sections/FeatureSection"
import TrailerSection from "@/components/sections/TrailerSection"
import ScreenshotsSection from "@/components/sections/ScreenshotsSection"
import CharactersSection from "@/components/sections/CharactersSection"

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref}
      initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" }}
      animate={
        inView 
          ? { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }
          : { clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" }
      }
      transition={{
        duration: 1,
        ease: "easeInOut"
      }}
      className="relative"
    >
      {children}
      <motion.div
        className="absolute inset-0 bg-black/80"
        initial={{ x: "0%" }}
        animate={inView ? { x: "100%" } : { x: "0%" }}
        transition={{
          duration: 1,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  );
};

export default function HomePageContent() {
  return (
    <main className="min-h-screen bg-black text-white">
      <HeroSection />
      <PageTransition>
        <FeatureSection 
          title="Explore the Lost Soul"
          description="Embark on an epic journey through a mysterious world filled with ancient secrets and powerful magic."
          imageSrc="/assets/poster.png"
          imageAlt="Gameplay screenshot"
        />
      </PageTransition>
      <PageTransition>
        <CharactersSection />
      </PageTransition>
      <TrailerSection />
      <ScreenshotsSection />
    </main>
  );
} 