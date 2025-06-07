"use client"

import React, { useRef, useCallback, useState } from 'react'
import HTMLFlipBookComponent from 'react-pageflip'

// Props cho từng trang
interface PageProps {
  number: number;
  children?: React.ReactNode;
}

const Page = React.forwardRef<HTMLDivElement, PageProps>((props, ref) => {
  return (
    <div className="relative aspect-square bg-white" ref={ref} data-density="hard">
      {props.children}
    </div>
  )
})
Page.displayName = 'Page';

interface FlipBookRef {
  pageFlip: () => {
    flipPrev: () => void;
    flipNext: () => void;
  };
}

export default function BookFlip() {
  const bookRef = useRef<FlipBookRef>(null);
  // Danh sách ảnh: bìa trước, nội dung, bìa sau
  const images: string[] = [
    '/catalogue/Artbookk.png',
    ...Array.from({ length: 58 }, (_, i) => `/catalogue/Artbookk${i + 2}.png`),
    '/catalogue/Artbookk60.png',
  ];
  const [isLoading, setIsLoading] = useState(false); // Không cần loading vì chỉ dùng ảnh

  const handleFlip = useCallback((e: { data: number }) => {
    // console.log('Flipped to page:', e.data);
  }, []);

  const handlePrevPage = () => {
    bookRef.current?.pageFlip().flipPrev();
  };

  const handleNextPage = () => {
    bookRef.current?.pageFlip().flipNext();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 p-4 w-full">
      {/* Download Button */}
      <div className="w-full flex justify-center">
        <a
          href="/assets/Artbook.pdf"
          download="Artbook.pdf"
          className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md text-sm font-medium transition-colors shadow-lg z-1000"
        >
          Download
        </a>
      </div>
      <div className="book-container relative flex justify-center items-center mt-8">
        {/* Nút Previous */}
        <button
          onClick={handlePrevPage}
          className="absolute left-[-65px] z-1 bg-white/10 hover:bg-white/20 text-white px-4 py-8 rounded-l-lg transition-colors"
          aria-label="Previous page"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <HTMLFlipBookComponent
          width={650}
          height={500}
          size="fixed"
          minWidth={500}
          maxWidth={500}
          minHeight={650}
          maxHeight={650}
          showCover={true}
          startPage={0}
          mobileScrollSupport={true}
          ref={bookRef}
          onFlip={handleFlip}
          className="demo-book"
          style={{}}
          usePortrait={false}
          autoSize={false}
          maxShadowOpacity={0.5}
          flippingTime={1000}
          clickEventForward={true}
          useMouseEvents={true}
          swipeDistance={30}
          showPageCorners={true}
          disableFlipByClick={false}
          drawShadow={true}
          startZIndex={0}
        >
          {/* Render từng trang ảnh */}
          {images.map((img, idx) => (
            <Page key={`img-page-${idx}`} number={idx}>
              <div className="w-full h-full relative">
                <img
                  src={img}
                  alt={`Artbook Page ${idx + 1}`}
                  className="object-cover w-full h-full"
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
            </Page>
          ))}
        </HTMLFlipBookComponent>

        {/* Nút Next */}
        <button
          onClick={handleNextPage}
          className="absolute right-[-65px] z-1 bg-white/10 hover:bg-white/20 text-white px-4 py-8 rounded-r-lg transition-colors"
          aria-label="Next page"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}