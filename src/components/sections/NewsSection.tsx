import Image from "next/image"
import { Card } from "@/components/ui/card"

export default function NewsSection() {
  const newsItems = [
    "LIL' GUARDSMAN - WHEN COPS MET COMEDY GAME",
    "MEDIEVAL REVIEW OF THE ANCIENTS - GUARDSMAN MEETS THE RULES",
    "LIL' GUARDSMAN - A VISITOR'S GUIDE TO THE CASTLE GATES",
  ]

  return (
    <section className="py-16 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-red-400">NEWS</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {newsItems.map((title, i) => (
            <Card
              key={i}
              className="bg-gray-900 border-gray-700 hover:border-red-500 transition-colors cursor-pointer"
            >
              <Image
                src="/placeholder.svg?height=150&width=300"
                alt={`News ${i + 1}`}
                width={300}
                height={150}
                className="w-full rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="font-bold text-sm mb-2 text-red-400">{title}</h3>
                <p className="text-xs text-gray-400">December 15, 2023</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 