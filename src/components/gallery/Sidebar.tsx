import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import galleryData from "@/data/galleryData"

interface SidebarProps {
  selectedCategory: string
  setSelectedCategory: (category: string) => void
  searchQuery: string
  setSearchQuery: (query: string) => void
}

export default function Sidebar({ selectedCategory, setSelectedCategory, searchQuery, setSearchQuery }: SidebarProps) {
  const categoryCounts = galleryData.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] || 0) + 1;
    return acc;
  }, {});

  const categories = Object.keys(categoryCounts).map(categoryName => ({
    name: categoryName,
    count: categoryCounts[categoryName]
  })).sort((a, b) => b.count - a.count);

  const allCategory = { name: "All", count: galleryData.length };
  const finalCategories = [allCategory, ...categories.filter(cat => cat.name !== "All")];

  return (
    <aside className="w-64 space-y-6 bg-gray-800/50 p-6 rounded-lg border border-gray-700 backdrop-blur-sm h-fit sticky top-8">
      <div>
        <h3 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">SEARCH</h3>
        <Input
          type="text"
          placeholder="Search by name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-gray-700 border-gray-600 text-white placeholder-gray-400"
        />
      </div>

      <div>
        <h3 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">Elements</h3>
        <div className="space-y-1">
          {finalCategories.map((category) => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`w-full text-left px-3 py-2 rounded text-sm flex justify-between transition-colors ${
                selectedCategory === category.name 
                  ? "bg-gray-700 text-white" 
                  : "text-gray-400 hover:text-white hover:bg-gray-700/50"
              }`}
            >
              <span>{category.name}</span>
              <span className="text-gray-500">{category.count}</span>
            </button>
          ))}
        </div>
      </div>
    </aside>
  )
} 