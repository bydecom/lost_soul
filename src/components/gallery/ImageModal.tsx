"use client"

import { useRouter, useSearchParams } from "next/navigation"
import Image from "next/image"
import { X, Download, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import galleryData from "@/data/galleryData"
import { useState } from "react"

interface ImageModalProps {
  imageId: string
}

export default function ImageModal({ imageId }: ImageModalProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const selectedCategoryFromUrl = searchParams?.get('category') || 'All'
  const image = galleryData.find(img => img.id.toString() === imageId)
  const [isLiked, setIsLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(11)

  if (!image) {
    return null
  }

  // Filter images based on the selected category from URL or show all if 'All'
  const imagesToNavigate = selectedCategoryFromUrl === 'All'
    ? galleryData
    : galleryData.filter(img => img.category.toLowerCase() === selectedCategoryFromUrl.toLowerCase());

  const currentImageIndex = imagesToNavigate.findIndex(img => img.id.toString() === imageId)

  const handleClose = () => {
    router.push('/gallery')
  }

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose()
    }
  }

  const handleLikeClick = () => {
    setIsLiked(!isLiked)
    setLikeCount(prev => isLiked ? prev - 1 : prev + 1)
  }

  const handleNext = () => {
    const nextIndex = (currentImageIndex + 1) % imagesToNavigate.length;
    router.push(`/gallery/${imagesToNavigate[nextIndex].id}`)
  }

  const handlePrevious = () => {
    const prevIndex = (currentImageIndex - 1 + imagesToNavigate.length) % imagesToNavigate.length;
    router.push(`/gallery/${imagesToNavigate[prevIndex].id}`)
  }

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/90 flex flex-col"
      onClick={handleBackdropClick}
    >
      {/* Header - Màu nền trắng */}
      <div className="flex items-center justify-between px-6 py-4 bg-white shadow-md border-b border-red-200 rounded-t-lg">
        <div className="flex items-center space-x-4">
          <button
            onClick={handleClose}
            className="p-2 hover:bg-red-50 rounded-full transition-colors border border-red-200"
            aria-label="Đóng"
          >
            <X className="w-6 h-6 text-red-600" />
          </button>
          <h2 className="text-2xl font-bold text-red-600">{image.title}</h2>
          <span className="px-3 py-1 text-xs font-semibold bg-red-50 text-red-600 rounded-full border border-red-200">
            {image.category}
          </span>
        </div>
        <div className="flex items-center space-x-3">
          <a
            href={image.image}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center border border-red-200 hover:bg-red-50 rounded-md px-4 py-2 text-sm font-medium text-red-600 transition-colors"
          >
            <Download className="w-4 h-4 mr-2" />
            DOWNLOAD
          </a>
          <Button 
            variant="outline" 
            className={`border-red-200 hover:bg-red-50 ${isLiked ? 'bg-red-50' : ''} text-red-600`}
            onClick={handleLikeClick}
          >
            <Heart className={`w-4 h-4 mr-2 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
            {likeCount} LIKE
          </Button>
        </div>
      </div>

      {/* Main Content - Màu nền #fff2d7 */}
      <div className="flex-1 overflow-hidden relative bg-[#fff2d7]">
        <div className="relative w-full h-full">
          <Image
            src={image.image || "/placeholder.svg"}
            alt={image.title}
            fill
            className="object-contain"
            priority
          />
        </div>
        
        {/* Navigation buttons */}
        {imagesToNavigate.length > 1 && (
          <button 
            onClick={handlePrevious} 
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-red-600/20 rounded-full hover:bg-red-600/40 transition-colors z-10"
          >
            <Image src="/assets/Setting2.png" alt="Previous" width={24} height={24} /> 
          </button>
        )}

        {imagesToNavigate.length > 1 && (
          <button 
            onClick={handleNext} 
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-red-600/20 rounded-full hover:bg-red-600/40 transition-colors z-10"
          >
            <Image src="/assets/Setting2.png" alt="Next" width={24} height={24} className="scale-x-[-1]" /> 
          </button>
        )}
      </div>

      {/* Footer - Màu nền trắng */}
      <div className="bg-white p-4 border-t border-red-200">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start space-x-4">
            <div className="relative w-12 h-12 flex-shrink-0">
              <Image
                src="/assets/logo.png"
                alt="Logo"
                fill
                className="object-contain"
                style={{ scale: 2.2 }}
              />
            </div>
            <div>
              <h3 className="text-sm font-medium text-red-600">{image.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{image.description}</p>
              <div className="flex items-center space-x-4 mt-4">
                <span className="text-xs text-gray-500">{image.category}</span>
                <span className="text-xs text-gray-500">•</span>
                <span className="text-xs text-gray-500">Tác giả: {image.author}</span>
                <span className="text-xs text-gray-500">•</span>
                <span className="text-xs text-gray-500">Ngày: {image.date}</span>
                {image.tags && image.tags.length > 0 && (
                  <>
                    <span className="text-xs text-gray-500">•</span>
                    <span className="text-xs text-gray-500">Tags: {image.tags.join(", ")}</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 