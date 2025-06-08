"use client"

import Image from "next/image"
import { ExternalLink } from "lucide-react"
import Link from "next/link"
import galleryData from "@/data/galleryData"
import React, { useState } from "react"

// Define the interface for the items in galleryData
interface GalleryItem {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  author: string;
  date: string;
  tags: string[];
}

const IMAGES_PER_PAGE = 4; // Define how many images to show at once

// Type assert galleryData to the defined interface and filter by category "Scene"
const filteredGalleryData: GalleryItem[] = (galleryData as GalleryItem[]).filter(
  (item) => item.category === "Scene"
);

export default function ScreenshotsSection() {
  // State to manage the starting index of the displayed screenshots
  const [startIndex, setStartIndex] = useState(0);

  // Get a circular view of galleryData based on startIndex
  const getDisplayScreenshots = () => {
    const totalImages = filteredGalleryData.length;
    const displayed: GalleryItem[] = [];
    for (let i = 0; i < IMAGES_PER_PAGE; i++) {
      displayed.push(filteredGalleryData[(startIndex + i) % totalImages]);
    }
    return displayed;
  };

  const displayedScreenshots = getDisplayScreenshots();

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % filteredGalleryData.length);
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + filteredGalleryData.length) % filteredGalleryData.length);
  };

  return (
    <section className="py-24 px-4 bg-[#fff2d7] overflow-x-hidden">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-amber-800">SCREENSHOTS</h2>
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-4 md:gap-6">
          {/* Left Button */}
          <button
            className="w-10 h-10 flex items-center justify-center rounded-full bg-amber-100 text-amber-800 hover:bg-amber-200 hover:text-amber-900 transition-colors duration-200"
            onClick={handlePrev}
            aria-label="Previous screenshot"
          >
            <Image
              src="/assets/Setting2.png" // Reusing the same image as HeroSection
              alt="Previous"
              width={28}
              height={28}
              className="object-contain" // Rotate for left arrow
              draggable={false}
            />
          </button>

          {/* Screenshots Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 flex-grow">
            {displayedScreenshots.map((screenshot) => (
              <Link key={screenshot.id} href={`/gallery/${screenshot.id}?category=${screenshot.category}`}>
                <div className="relative group cursor-pointer overflow-hidden rounded-lg">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={screenshot.image || "/placeholder.svg"}
                      alt={screenshot.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {/* Overlay now appears over the scaled image */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <ExternalLink className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Right Button */}
          <button
            className="w-10 h-10 flex items-center justify-center rounded-full bg-amber-100 text-amber-800 hover:bg-amber-200 hover:text-amber-900 transition-colors duration-200"
            onClick={handleNext}
            aria-label="Next screenshot"
          >
            <Image
              src="/assets/Setting2.png" // Reusing the same image as HeroSection
              alt="Next"
              width={28}
              height={28}
              className="object-contain rotate-180"
              draggable={false}
            />
          </button>
        </div>
      </div>
    </section>
  )
}

// Add the horizontal rule here
export function ScreenshotsSectionSeparator() {
  return (
    <div className="container mx-auto px-4">
      <hr className="my-12 border-gray-300" />
    </div>
  );
} 