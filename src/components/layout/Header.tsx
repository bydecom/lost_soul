"use client"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY
      if (currentScroll > lastScrollY.current && currentScroll > 50) {
        // scrolling down
        setIsVisible(false)
      } else {
        // scrolling up
        setIsVisible(true)
      }
      lastScrollY.current = currentScroll
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-transparent transition-transform duration-300 ${
        isVisible || isOpen ? "translate-y-0" : "-translate-y-[110%]"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="relative flex items-center h-full">
            <Image
              src="/assets/logo.png"
              alt="Awakening Lost Soul Logo"
              width={80}
              height={32}
              className="md:scale-125"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center bg-black border-2 border-red-600 rounded-bl-lg rounded-tr-lg" style={{ borderColor: "#dc2626" }}>
            <Link href="/gallery" className="px-6 py-3 text-white transition border-r-2 border-red-600 last:border-r-0 hover:bg-red-600 hover:text-white" style={{ borderRightColor: "#dc2626" }}>
              Art Game
            </Link>
            <Link href="/book" className="px-6 py-3 text-white transition border-r-2 border-red-600 last:border-r-0 hover:bg-red-600 hover:text-white" style={{ borderRightColor: "#dc2626" }}>
              Art book
            </Link>
            <Link href="/about" className="px-6 py-3 text-white transition hover:bg-red-600 hover:text-white">
              About
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded bg-black/80 border-2 border-red-600"
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-white transition-transform ${isOpen ? "translate-y-1.5 rotate-45" : "mb-1"}`}></span>
            <span className={`block w-5 h-0.5 bg-white transition-opacity ${isOpen ? "opacity-0" : "opacity-100"}`}></span>
            <span className={`block w-5 h-0.5 bg-white transition-transform ${isOpen ? "-translate-y-1.5 -rotate-45" : "mt-1"}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 border-t border-red-600">
          <div className="flex flex-col items-center py-4 space-y-2">
            <Link href="/gallery" onClick={() => setIsOpen(false)} className="w-full text-center py-3 text-white hover:bg-red-600">Art Game</Link>
            <Link href="/book" onClick={() => setIsOpen(false)} className="w-full text-center py-3 text-white hover:bg-red-600">Art book</Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="w-full text-center py-3 text-white hover:bg-red-600">About</Link>
          </div>
        </div>
      )}
    </header>
  )
} 