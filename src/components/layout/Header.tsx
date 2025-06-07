import Link from "next/link"
import Image from "next/image"

export default function Header() {
  return (
    <header className="fixed top-5 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="relative h-full flex items-center">
            <Image
              src="/assets/logo.png"
              alt="Awakening Lost Soul Logo"
              width={100}
              height={40}
              className="scale-150"
              priority
            />
          </Link>
          
          <nav className="flex items-center bg-black border-2 border-red-600 rounded-bl-lg rounded-tr-lg" style={{ borderColor: '#dc2626 !important' }}>
            <Link href="/gallery" className="px-6 py-4 text-white transition border-r-2 border-red-600 last:border-r-0 hover:bg-red-600 hover:text-white" style={{ borderRightColor: '#dc2626 !important' }}>
              Art Game
            </Link>
            <Link href="/book" className="px-6 py-4 text-white transition border-r-2 border-red-600 last:border-r-0 hover:bg-red-600 hover:text-white" style={{ borderRightColor: '#dc2626 !important' }}>
              Art book
            </Link>
            <Link href="/about" className="px-6 py-4 text-white transition hover:bg-red-600 hover:text-white">
              About
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
} 