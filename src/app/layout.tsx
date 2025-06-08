import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Awakening Lost Soul",
  description: "An epic journey through a mysterious world filled with ancient secrets and powerful magic",
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