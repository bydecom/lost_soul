import Image from "next/image"
import { Button } from "@/components/ui/button"
import { gameData } from "@/data/gallery"

export default function Footer() {
  return (
    <footer className="border-t border-red-200 mt-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>Explore a collection of video games interfaces and find inspiration for your designs.</p>
        </div>
      </div>
    </footer>
  )
} 