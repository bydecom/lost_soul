import { gameData } from "@/data/gallery"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative h-[400px] pt-16 bg-gradient-to-r from-gray-900 to-gray-800">
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative max-w-7xl mx-auto px-6 py-12 flex items-center h-full">
        <div className="flex items-center space-x-8">
          <div className="relative w-24 h-24">
            <Image
              src="/assets/logo.png"
              alt="Game Logo"
              fill
              className="object-contain"
              style={{ scale: 2.2 }}
            />
          </div>
          <div>
            <h1 className="text-5xl font-bold">{gameData.title}</h1>
            <p className="text-xl text-gray-300 mt-2">{gameData.releaseDate}</p>
            <p className="text-lg text-gray-400 mt-4">{gameData.platform}</p>
          </div>
        </div>
      </div>
    </section>
  )
} 