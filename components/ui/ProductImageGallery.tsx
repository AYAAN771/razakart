// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Thumbs, FreeMode } from "swiper/modules";
// import type { Swiper as SwiperType } from "swiper";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/thumbs";
// import "swiper/css/free-mode";

// interface ProductImageGalleryProps {
//   images: Array<{ url: string; alt: string }>;
// }

// export default function ProductImageGallery({
//   images,
// }: ProductImageGalleryProps) {
//   const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

//   return (
//     <div className='flex flex-row gap-4 h-[500px] w-full'>
//       <Swiper
//         onSwiper={setThumbsSwiper}
//         direction={"vertical"}
//         spaceBetween={0}
//         slidesPerView={4}
//         freeMode={true}
//         watchSlidesProgress={true}
//         modules={[FreeMode, Navigation, Thumbs]}
//         className='thumb-swiper w-[100px] h-full'
//       >
//         {images.map((img, idx) => (
//           <SwiperSlide key={idx} className='h-full'>
//             <div className='cursor-pointer rounded-lg overflow-hidden border-2 border-gray-200 h-full w-full opacity-70 hover:opacity-100 transition-opacity [&.swiper-slide-thumb-active]:border-blue-500 [&.swiper-slide-thumb-active]:opacity-100'>
//               <Image
//                 src={img.url}
//                 alt={img.alt}
//                 width={96}
//                 height={96}
//                 className='object-cover w-full h-full'
//                 loading='lazy'
//               />
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       <Swiper
//         spaceBetween={10}
//         navigation={true}
//         thumbs={{
//           swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
//         }}
//         modules={[FreeMode, Navigation, Thumbs]}
//         className='h-full flex-1 w-full bg-gray-50 rounded-lg shadow-md'
//       >
//         {images.map((img, idx) => (
//           <SwiperSlide key={idx}>
//             <div className='flex items-center justify-center h-full w-full p-2'>
//               <Image
//                 src={img.url}
//                 alt={img.alt}
//                 width={600}
//                 height={600}
//                 className='object-contain max-h-full max-w-full'
//                 priority={idx === 0}
//                 loading={idx === 0 ? undefined : "lazy"}
//               />
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }
"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, FreeMode } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/free-mode";

// Assuming you have these icon components available
// Replace these with actual imports (e.g., from 'lucide-react' or similar)
const ChevronUp = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='m18 15-6-6-6 6' />
  </svg>
);
const ChevronDown = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='m6 9 6 6 6-6' />
  </svg>
);

interface ProductImageGalleryProps {
  images: Array<{ url: string; alt: string }>;
}

export default function ProductImageGallery({
  images,
}: ProductImageGalleryProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  // Ref to hold the instance of the thumbnail swiper for custom navigation
  const thumbSwiperRef = useRef<SwiperType | null>(null);

  // Use state to force re-render/re-evaluation of disabled status
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div className='flex flex-row gap-4 h-[500px] w-full'>
      {/* ========================================
        1. Vertical Thumbnail Slider & Custom Navigation
        ========================================
      */}
      <div className='relative w-[100px]'>
        {/* Custom Nav Up Button */}
        {/* <button
          onClick={() => thumbSwiperRef.current?.slidePrev()}
          className='absolute top-0 left-1/2 -translate-x-1/2 z-30 bg-white rounded-full p-2 shadow-xl hover:bg-gray-50 transition-colors disabled:opacity-50'
          aria-label='Previous image'
          disabled={isBeginning}
        >
          <ChevronUp className='w-4 h-4' />
        </button> */}
        <button
          onClick={() => thumbSwiperRef.current?.slidePrev()}
          className='absolute top-0 left-1/2 -translate-x-1/2 z-30 rounded-t-lg p-2 w-full bg-linear-to-b cursor-pointer from-[#3d3d3d90] hover:from-black/70 flex items-center justify-center to-transparent transition-colors'
          aria-label='Previous image'
          disabled={isBeginning}
        >
          <ChevronUp className='w-6 text-white h-6' />
        </button>

        <Swiper
          onSwiper={(swiper) => {
            setThumbsSwiper(swiper);
            thumbSwiperRef.current = swiper;
            // Initial state check
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          // **Crucial Change:** Update state on slide change to correctly update disabled buttons
          onTransitionEnd={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          // **The Fix:** Helps Swiper correctly calculate wrapper size in vertical mode
          setWrapperSize={true}
          direction={"vertical"}
          spaceBetween={10} // Keep spacing for slides, let the wrapper/slide handle space
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Thumbs]}
          // Removed pt-8/pb-8 from the Swiper wrapper itself.
          // We will rely on spaceBetween and the absolute buttons.
          className='thumb-swiper w-full h-full'
        >
          {images.map((img, idx) => (
            <SwiperSlide key={idx}>
              {/* Added consistent h-full to the slide for height calculation */}
              <div className='cursor-pointer rounded-lg overflow-hidden border-2 border-gray-200 h-full w-full [&.swiper-slide-thumb-active]:border-blue-500  '>
                <Image
                  src={img.url}
                  alt={img.alt}
                  width={96}
                  height={96}
                  className='object-cover w-full h-full'
                  loading='lazy'
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Nav Down Button */}
        {/* <button
          onClick={() => thumbSwiperRef.current?.slideNext()}
          className='absolute bottom-0 left-1/2 -translate-x-1/2 z-30 bg-white rounded-full p-2 shadow-xl hover:bg-gray-50 transition-colors disabled:opacity-50'
          aria-label='Next image'
          disabled={isEnd}
        >
          <ChevronDown className='w-4 h-4' />
        </button> */}
        <button
          onClick={() => thumbSwiperRef.current?.slideNext()}
          className='absolute bottom-0 left-1/2 -translate-x-1/2 z-30 rounded-b-lg p-2 w-full bg-linear-to-t cursor-pointer from-[#3d3d3d90] hover:from-black/70 flex items-center justify-center to-transparent transition-colors'
          aria-label='Next image'
          disabled={isEnd}
        >
          <ChevronDown className='w-6 text-white h-6' />
        </button>
      </div>

      {/* ========================================
        2. Main Product Image Slider
        ========================================
      */}
      <Swiper
        spaceBetween={10}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Thumbs]}
        className='h-full flex-1 w-full bg-gray-50 rounded-lg'
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <div className='flex items-center justify-center min-h-full w-full p-2'>
              <Image
                src={img.url}
                alt={img.alt}
                fill={true}
                className='object-cover rounded-lg min-h-full! w-full!'
                priority={idx === 0}
                loading={idx === 0 ? undefined : "lazy"}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
