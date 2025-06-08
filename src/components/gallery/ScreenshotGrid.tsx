import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import galleryData from "@/data/galleryData"

interface ScreenshotGridProps {
  selectedCategory: string
  visibleScreenshots: number
  loadMoreScreenshots: () => void
  searchQuery: string
}

export default function ScreenshotGrid({ selectedCategory, visibleScreenshots, loadMoreScreenshots, searchQuery }: ScreenshotGridProps) {
  const filteredScreenshots =
    selectedCategory === "All"
      ? galleryData
      : galleryData.filter((item) => item.category.toLowerCase().includes(selectedCategory.toLowerCase()))

  const searchedAndFilteredScreenshots = filteredScreenshots.filter(item => {
    const query = searchQuery.toLowerCase();
    return (
      item.title.toLowerCase().includes(query)
    );
  });

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {searchedAndFilteredScreenshots.slice(0, visibleScreenshots).map((screenshot) => (
          <Link key={screenshot.id} href={`/gallery/${screenshot.id}?category=${selectedCategory}`}>
            <Card className="bg-white border-red-200 overflow-hidden hover:bg-red-50 transition-colors cursor-pointer group">
              <div className="relative">
                <Image
                  src={screenshot.image || "/placeholder.svg"}
                  alt={screenshot.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-800 mb-1">{screenshot.title}</h3>
                <p className="text-xs text-red-600 uppercase tracking-wide">{screenshot.category}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {visibleScreenshots < searchedAndFilteredScreenshots.length && (
        <div className="text-center mt-12">
          <Button
            onClick={loadMoreScreenshots}
            variant="outline"
            className="border-gray-600 bg-red-500 text-white hover:bg-red-700 hover:text-white"
          >
            LOAD MORE SCREENSHOTS
          </Button>
        </div>
      )}
    </div>
  )
} 