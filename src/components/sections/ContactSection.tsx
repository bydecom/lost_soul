import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ContactSection() {
  return (
    <section className="py-16 px-4 bg-[#fff2d7]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Mail className="w-5 h-5 text-amber-800" />
                <span className="text-amber-800">Liên Hệ</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-2">
                Hãy Cùng Nhau
              </h2>
              <h2 className="text-3xl md:text-4xl font-bold text-amber-800">
                Tạo Nên Điều Tuyệt Vời
              </h2>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  type="text"
                  placeholder="Họ *"
                  className="p-3 bg-amber-50 border-0 rounded-md focus:ring-2 focus:ring-amber-500 text-gray-800"
                />
                <Input
                  type="text"
                  placeholder="Tên *"
                  className="p-3 bg-amber-50 border-0 rounded-md focus:ring-2 focus:ring-amber-500 text-gray-800"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  type="email"
                  placeholder="Email *"
                  className="p-3 bg-amber-50 border-0 rounded-md focus:ring-2 focus:ring-amber-500 text-gray-800"
                />
                <Input
                  type="tel"
                  placeholder="Số điện thoại *"
                  className="p-3 bg-amber-50 border-0 rounded-md focus:ring-2 focus:ring-amber-500 text-gray-800"
                />
              </div>
              <Input
                type="text"
                placeholder="Tiêu đề *"
                className="p-3 bg-amber-50 border-0 rounded-md focus:ring-2 focus:ring-amber-500 text-gray-800"
              />
              <textarea
                placeholder="Nội dung tin nhắn *"
                rows={6}
                className="w-full p-3 bg-amber-50 border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 resize-y text-gray-800"
              ></textarea>
              <div className="flex items-center gap-2">
                <Button
                  type="submit"
                  className="px-8 py-3 bg-red-600 text-white rounded-full hover:bg-amber-700 transition-colors duration-200 font-medium"
                >
                  Gửi Tin Nhắn
                </Button>
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center transition-transform duration-200 hover:scale-110 cursor-pointer">
                  <Mail className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Information */}
          <div className="bg-red-600 p-8 rounded-lg text-white">
            <div className="space-y-8">
              {/* Address */}
              <div>
                <h3 className="text-xl font-bold mb-3">Địa Chỉ</h3>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-1" />
                  <div>
                    <p>Số 1 Đường Võ Văn Ngân,</p>
                    <p>Phường Linh Chiểu, TP. Thủ Đức</p>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div>
                <h3 className="text-xl font-bold mb-3">Liên Hệ</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5" />
                    <span>+84 123-456-789</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5" />
                    <span>phanthiman199@gmail.com</span>
                  </div>
                </div>
              </div>

              {/* Open Time */}
              <div>
                <h3 className="text-xl font-bold mb-3">Giờ Làm Việc</h3>
                <p>Thứ Hai - Thứ Sáu : 10:00 - 20:00</p>
              </div>

              {/* Stay Connected */}
              <div>
                <h3 className="text-xl font-bold mb-4">Kết Nối</h3>
                <div className="flex gap-3">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center transition-transform duration-200 cursor-pointer hover:scale-110">
                    <Facebook className="w-5 h-5 text-gray-800" />
                  </div>
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center transition-transform duration-200 cursor-pointer hover:scale-110">
                    <Twitter className="w-5 h-5 text-gray-800" />
                  </div>
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center transition-transform duration-200 cursor-pointer hover:scale-110">
                    <Instagram className="w-5 h-5 text-gray-800" />
                  </div>
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center transition-transform duration-200 cursor-pointer hover:scale-110">
                    <Linkedin className="w-5 h-5 text-gray-800" />
                  </div>
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center transition-transform duration-200 cursor-pointer hover:scale-110">
                    <Youtube className="w-5 h-5 text-gray-800" />
                  </div>
                </div>
              </div>
            </div>

            {/* Logo */}
            <div className="mt-20 flex justify-end">
              <Link href="/" className="relative h-full flex items-center transition-transform duration-300 hover:scale-110">
                <Image
                  src="/assets/logo.png"
                  alt="Awakening Lost Soul Logo"
                  width={100}
                  height={40}
                  className="scale-150"
                  priority
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}