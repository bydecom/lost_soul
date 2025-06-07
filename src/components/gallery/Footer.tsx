import Image from "next/image"
import { Button } from "@/components/ui/button"
import { gameData, similarGames } from "@/data/gallery"

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-8">
          <div className="text-sm text-gray-400">
            <p>
              DEVELOPED BY <span className="text-white">{gameData.developer}</span>
            </p>
            <p>
              PUBLISHED BY <span className="text-white">{gameData.publisher}</span>
            </p>
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold">Similar games</h3>
            <Button variant="ghost" className="text-gray-400 hover:text-white">
              ALL GAMES →
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {similarGames.map((game, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded">
                  <Image
                    src={game.image || "/placeholder.svg"}
                    alt={game.title}
                    width={150}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <p className="text-sm text-gray-300 mt-2 group-hover:text-white">{game.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>Explore a collection of video games interfaces and find inspiration for your designs.</p>
        </div>
      </div>
    </footer>
  )
} 