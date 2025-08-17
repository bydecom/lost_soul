import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Awakening Lost Soul",
  description: "An epic journey through a mysterious world filled with ancient secrets and powerful magic",
  icons: {
    icon: [
      { url: "/assets/logo_crop.png", sizes: "16x16", type: "image/png" },
      { url: "/assets/logo_crop.png", sizes: "32x32", type: "image/png" },
      { url: "/assets/logo_crop.png", sizes: "96x96", type: "image/png" }
    ],
    shortcut: "/assets/logo_crop.png",
    apple: { url: "/assets/logo_crop.png", sizes: "180x180" },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className + " overflow-x-hidden"}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
} 