import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

export default function TrailerSection() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-black to-red-950/20">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Video Player */}
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <video
                src="/assets/video.mp4"
                controls
                className="w-full h-full object-cover rounded-lg"
                poster=""
              >
                Trình duyệt của bạn không hỗ trợ video.
              </video>
            </div>

            {/* Description */}
            <div className="text-left">
              <h2 className="text-3xl font-bold mb-6 text-red-400">OFFICIAL TRAILER</h2>
              <Button 
                variant="destructive" 
                size="lg" 
                className="bg-red-600 hover:bg-red-700 text-lg px-8 py-6"
              >
                WATCH OFFICIAL TRAILER
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 