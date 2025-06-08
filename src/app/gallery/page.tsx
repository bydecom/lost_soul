"use client"

import { useState } from "react"
import Sidebar from "@/components/gallery/Sidebar"
import ScreenshotGrid from "@/components/gallery/ScreenshotGrid"
import HeroSection from "@/components/gallery/HeroSection"
import Footer from "@/components/gallery/Footer"

export default function GameGallery() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [visibleScreenshots, setVisibleScreenshots] = useState(12)

  const loadMoreScreenshots = () => {
    setVisibleScreenshots((prev) => Math.min(prev + 12, prev + 12))
  }

  return (
    <div className="min-h-screen bg-[#fff2d7] text-gray-800">
      <HeroSection />

      <div className="max-w-7xl mx-auto px-6 py-8 flex gap-8">
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <main className="flex-1">
          <ScreenshotGrid
            selectedCategory={selectedCategory}
            visibleScreenshots={visibleScreenshots}
            loadMoreScreenshots={loadMoreScreenshots}
            searchQuery={searchQuery}
          />
        </main>
      </div>

      <Footer />
    </div>
  )
} 