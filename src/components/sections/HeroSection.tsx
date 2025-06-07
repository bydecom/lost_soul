"use client";

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import React, { useState } from "react"

export default function HeroSection() {
  // Danh sách các ảnh nền từ thư mục public/assets/1-8
  const mapImages = [
    "/assets/1-8/hero_background.png",
    "/assets/1-8/Canh 1.png",
    "/assets/1-8/Canh 2.png",
    "/assets/1-8/Canh 3.png",
    "/assets/1-8/Canh 4.png",
    "/assets/1-8/Canh 5.png",
    "/assets/1-8/Canh 6.png",
    "/assets/1-8/Canh 7.png",
    "/assets/1-8/Canh 8.png",
  ];

  // State để quản lý ảnh nền hiện tại
  const [currentBackground, setCurrentBackground] = useState(mapImages[0]); // Mặc định là Canh 1.png

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-between overflow-hidden">
      {/* Hero Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black"></div>
      <Image
        src={currentBackground}
        alt="Game Background"
        fill
        className="object-cover transition-opacity duration-500"
        priority
      />
      
      {/* Content */}
      <div className="relative z-10 flex-grow flex flex-col items-center justify-center container mx-auto px-4 text-center gap-8">
        {/* Logo */} 

        {/* Video Player */}
        <div className="w-full max-w-2xl mx-auto">
          <div className="aspect-video rounded-lg overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/P3dHt_gTgCI?autoplay=1&mute=1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              frameBorder="0"
              className="w-full h-full object-cover rounded-lg"
              title="YouTube video player"
            ></iframe>
          </div>
        </div>

        {/* Wishlist Button */}
        <Link href="https://demo-game-liard.vercel.app/">
          <Button 
            variant="destructive" 
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-lg px-12 py-6 font-medium tracking-wide"
          >
            Chơi thử ngay
          </Button>
        </Link>
      </div>

      {/* Map Thumbnails + Navigation */}
      <div className="relative z-10 w-full bg-black/50 p-4 flex justify-center items-center gap-4 overflow-x-auto pb-6">
        {/* Left Button */}
        <button
          className="w-10 h-10 flex items-center justify-center rounded-full bg-grey text-black hover:bg-yellow-400 hover:text-black transition-colors duration-200 mr-2"
          onClick={() => {
            const currentIndex = mapImages.indexOf(currentBackground);
            const prevIndex = (currentIndex - 1 + mapImages.length) % mapImages.length;
            setCurrentBackground(mapImages[prevIndex]);
          }}
          aria-label="Previous background"
        >
          <Image
            src="/assets/Setting2.png"
            alt="Previous"
            width={28}
            height={28}
            className="object-contain"
            draggable={false}
          />
        </button>
        {/* Thumbnails */}
        {mapImages.map((imagePath, index) => (
          <div
            key={index}
            className={`
              relative w-24 h-16 flex-shrink-0 cursor-pointer rounded-md overflow-hidden shadow-lg
              border-2 transition-all duration-300
              ${currentBackground === imagePath ? "border-yellow-400 scale-105" : "border-transparent hover:border-yellow-200"}
            `}
            onClick={() => setCurrentBackground(imagePath)}
          >
            <Image
              src={imagePath}
              alt={`Thumbnail for Map ${index + 1}`}
              fill
              className="object-cover"
              sizes="96px"
            />
            <div className="absolute inset-0 bg-black/30 hover:bg-transparent transition-colors duration-300"></div>
          </div>
        ))}
        {/* Right Button */}
        <button
          className="w-10 h-10 flex items-center justify-center rounded-full bg-grey text-black hover:bg-yellow-400 hover:text-black transition-colors duration-200 ml-2"
          onClick={() => {
            const currentIndex = mapImages.indexOf(currentBackground);
            const nextIndex = (currentIndex + 1) % mapImages.length;
            setCurrentBackground(mapImages[nextIndex]);
          }}
          aria-label="Next background"
        >
          <Image
            src="/assets/Setting2.png"
            alt="Next"
            width={28}
            height={28}
            className="object-contain scale-x-[-1]"
            draggable={false}
          />
        </button>
      </div>
    </section>
  )
} 