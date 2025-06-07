import Image from "next/image"
import { ExternalLink } from "lucide-react"

export default function ScreenshotsSection() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-black to-red-950/20">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-red-400">SCREENSHOTS</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="relative group cursor-pointer">
              <div className="aspect-[4/3] relative">
                <Image
                  src={`/placeholder.svg?height=200&width=300`}
                  alt={`Screenshot ${i}`}
                  fill
                  className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                  <ExternalLink className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 