import { Facebook, Twitter, Youtube, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-8 px-4 bg-black border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-6 h-6 bg-red-600 rounded"></div>
            <p className="text-red-600 text-2xl font-bold">Manax Studio</p>
          </div>
          <div className="flex space-x-4">
            <Facebook className="w-5 h-5 text-gray-400 hover:text-red-400 cursor-pointer transition-colors" />
            <Twitter className="w-5 h-5 text-gray-400 hover:text-red-400 cursor-pointer transition-colors" />
            <Youtube className="w-5 h-5 text-gray-400 hover:text-red-400 cursor-pointer transition-colors" />
            <Instagram className="w-5 h-5 text-gray-400 hover:text-red-400 cursor-pointer transition-colors" />
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>© 2025 All rights reserved.</p>
          <p className="mt-2">
            Our privacy policy has changed since you last visited. Click here to acknowledge that you understand.
            <a href="#" className="text-red-400 hover:underline ml-1">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
} 