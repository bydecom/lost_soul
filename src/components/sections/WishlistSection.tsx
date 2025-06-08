"use client"
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Mail, CheckCircle } from 'lucide-react';

export default function WishlistSection() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
    }, 1500);
  };

  return (
    <section className="relative">
      <hr className="border-t-2 border-red-200" />
      <div className="py-24 px-4 bg-[#fff2d7]">
        <div className="max-w-4xl mx-auto text-center">
          {!isSubscribed ? (
            <div className="space-y-8">
              {/* Header */}
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold text-red-600">
                  Thông Báo Ra Mắt!
                </h1>
                <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                  Đăng ký để nhận thông báo ngay khi game chính thức ra mắt.
                </p>
              </div>

              {/* Email Form */}
              <div className="max-w-md mx-auto">
                <form onSubmit={handleSubscribe} className="flex gap-4 h-14">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Nhập email của bạn"
                    className="flex-1 px-6 rounded-full bg-white border-2 border-red-500 focus:outline-none focus:border-red-600 text-gray-800 placeholder:text-gray-400"
                  />
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-32 h-full bg-red-600 text-white rounded-full hover:bg-red-700 font-medium"
                  >
                    {isLoading ? 'Đang gửi...' : 'Đăng ký'}
                  </Button>
                </form>
              </div>

              {/* Trust indicators */}
              <div className="flex justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-red-600" />
                  <span>Không spam email</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-red-600" />
                  <span>Hủy đăng ký bất cứ lúc nào</span>
                </div>
              </div>
            </div>
          ) : (
            /* Success State */
            <div className="space-y-6">
              <CheckCircle className="w-16 h-16 text-red-600 mx-auto" />
              <h2 className="text-3xl font-bold text-red-600">
                Đăng Ký Thành Công!
              </h2>
              <p className="text-gray-700">
                Cảm ơn bạn đã đăng ký! Chúng tôi sẽ thông báo cho bạn ngay khi game chính thức ra mắt.
              </p>
              <Button
                onClick={() => setIsSubscribed(false)}
                className="px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-700"
              >
                Đăng Ký Email Khác
              </Button>
            </div>
          )}
        </div>
      </div>
      <hr className="border-t-2 border-red-200" />
    </section>
  );
}