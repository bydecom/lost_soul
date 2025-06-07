import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Play } from "lucide-react"

export default function MultimediaSection() {
  return (
    <section className="py-24 px-4 bg-black">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-red-400">MULTIMEDIA</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Videos Card */}
          <Card className="bg-gray-900/50 border-gray-800 overflow-hidden">
            <div className="relative aspect-video">
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="Video 1"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors">
                <Play className="w-12 h-12 text-red-500" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-xl text-red-400">VIDEOS</h3>
            </div>
          </Card>

          {/* Coming Soon Cards */}
          <Card className="bg-gray-900/50 border-gray-800">
            <div className="p-6 h-full min-h-[200px] flex items-center justify-center">
              <span className="text-gray-500 text-lg font-medium">COMING SOON!</span>
            </div>
          </Card>

          <Card className="bg-gray-900/50 border-gray-800">
            <div className="p-6 h-full min-h-[200px] flex items-center justify-center">
              <span className="text-gray-500 text-lg font-medium">COMING SOON!</span>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
} 