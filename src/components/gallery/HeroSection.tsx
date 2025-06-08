import { gameData } from "@/data/gallery"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative h-[400px] pt-16 bg-gradient-to-r from-red-600 to-red-700">
      <div className="absolute inset-0 bg-black/30"></div>
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
            <h1 className="text-5xl font-bold text-white">{gameData.title}</h1>
            <p className="text-xl text-white/80">{gameData.releaseDate}</p>
            <p className="text-lg text-white/80 ">{gameData.platform}</p>
            <div className=" text-white/80">
              <p>DEVELOPED BY <span className="text-white">Phan Thi Man</span></p>
              <p>PUBLISHED BY <span className="text-white">Phan Thi Man</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 