import { Button } from "@/components/ui/button"

export default function WishlistSection() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-black to-red-950/40 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-red-400">WISHLIST NOW ON STEAM</h2>
        <Button 
          size="lg" 
          variant="destructive" 
          className="bg-red-600 hover:bg-red-700 px-12 py-6 text-xl font-medium tracking-wide"
        >
          WISHLIST NOW
        </Button>
      </div>
    </section>
  )
} 