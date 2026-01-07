// "use client";

// import { useState, useRef, useEffect } from "react";
// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Thumbs, FreeMode } from "swiper/modules";
// import type { Swiper as SwiperType } from "swiper";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/thumbs";
// import "swiper/css/free-mode";

// // ===============================================
// // 1. ICONS (All icons needed for both layouts)
// // ===============================================
// const ChevronUp = (props: React.SVGProps<SVGSVGElement>) => (
//   <svg
//     {...props}
//     xmlns='http://www.w3.org/2000/svg'
//     width='24'
//     height='24'
//     viewBox='0 0 24 24'
//     fill='none'
//     stroke='currentColor'
//     strokeWidth='2'
//     strokeLinecap='round'
//     strokeLinejoin='round'
//   >
//     <path d='m18 15-6-6-6 6' />
//   </svg>
// );
// const ChevronDown = (props: React.SVGProps<SVGSVGElement>) => (
//   <svg
//     {...props}
//     xmlns='http://www.w3.org/2000/svg'
//     width='24'
//     height='24'
//     viewBox='0 0 24 24'
//     fill='none'
//     stroke='currentColor'
//     strokeWidth='2'
//     strokeLinecap='round'
//     strokeLinejoin='round'
//   >
//     <path d='m6 9 6 6 6-6' />
//   </svg>
// );
// const ChevronLeft = (props: React.SVGProps<SVGSVGElement>) => (
//   <svg
//     {...props}
//     xmlns='http://www.w3.org/2000/svg'
//     width='24'
//     height='24'
//     viewBox='0 0 24 24'
//     fill='none'
//     stroke='currentColor'
//     strokeWidth='2'
//     strokeLinecap='round'
//     strokeLinejoin='round'
//   >
//     <path d='m15 18-6-6 6-6' />
//   </svg>
// );
// const ChevronRight = (props: React.SVGProps<SVGSVGElement>) => (
//   <svg
//     {...props}
//     xmlns='http://www.w3.org/2000/svg'
//     width='24'
//     height='24'
//     viewBox='0 0 24 24'
//     fill='none'
//     stroke='currentColor'
//     strokeWidth='2'
//     strokeLinecap='round'
//     strokeLinejoin='round'
//   >
//     <path d='m9 18 6-6-6-6' />
//   </svg>
// );

// interface ProductImageGalleryProps {
//   images: Array<{ url: string; alt: string }>;
// }

// // ===============================================
// // 2. Responsive Hook
// // ===============================================
// const XL_BREAKPOINT = "(min-width: 1280px)";

// const useIsDesktop = () => {
//   const [isDesktop, setIsDesktop] = useState(false);

//   useEffect(() => {
//     if (typeof window === "undefined") return;

//     const media = window.matchMedia(XL_BREAKPOINT);
//     // eslint-disable-next-line react-hooks/set-state-in-effect
//     setIsDesktop(media.matches);

//     const listener = (event: MediaQueryListEvent) =>
//       setIsDesktop(event.matches);
//     media.addEventListener("change", listener);

//     return () => media.removeEventListener("change", listener);
//   }, []);

//   return isDesktop;
// };

// function ProductImageGalleryDesktop({ images }: ProductImageGalleryProps) {
//   const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
//   const thumbSwiperRef = useRef<SwiperType | null>(null);

//   const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
//   const [isBeginning, setIsBeginning] = useState(true);
//   const [isEnd, setIsEnd] = useState(false);
//   const [swiperI2, setSwiperI2] = useState<SwiperType | null>(null);
//   const [isBeginning2, setIsBeginning2] = useState(true);
//   const [isEnd2, setIsEnd2] = useState(false);
//   return (
//     <div className='flex flex-row gap-4 relative h-[450px] w-full'>
//       {/* 1. Vertical Thumbnail Slider & Custom Navigation */}
//       <div className='relative w-[100px]'>
//         {/* Custom Nav Up Button - Only show if more than 4 images */}
//         {images.length > 4 && (
//           <button
//             onClick={() => thumbSwiperRef.current?.slidePrev()}
//             className='absolute top-0 left-1/2 -translate-x-1/2 z-30 rounded-t-lg p-2 w-full bg-linear-to-b cursor-pointer from-[#3d3d3d90] hover:from-black/70 flex items-center justify-center to-transparent transition-colors disabled:opacity-50'
//             aria-label='Previous image'
//             disabled={isBeginning}
//           >
//             <ChevronUp className='w-6 text-white h-6' />
//           </button>
//         )}

//         <Swiper
//           onSwiper={(swiper) => {
//             setThumbsSwiper(swiper);
//             thumbSwiperRef.current = swiper;
//             setIsBeginning(swiper.isBeginning);
//             setIsEnd(swiper.isEnd);
//           }}
//           onTransitionEnd={(swiper) => {
//             setIsBeginning(swiper.isBeginning);
//             setIsEnd(swiper.isEnd);
//           }}
//           setWrapperSize={true}
//           direction={"vertical"}
//           spaceBetween={10}
//           slidesPerView={4}
//           freeMode={true}
//           watchSlidesProgress={true}
//           modules={[FreeMode, Thumbs]}
//           className='thumbprod w-full h-full'
//         >
//           {images.map((img, idx) => (
//             <SwiperSlide key={idx}>
//               <div className='cursor-pointer rounded-lg overflow-hidden border-2 border-gray-200 h-full w-full [&.swiper-slide-thumb-active]:border-blue-500!'>
//                 <Image
//                   src={img.url}
//                   alt={img.alt}
//                   width={96}
//                   height={96}
//                   className='object-cover w-full h-full'
//                   loading='lazy'
//                 />
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Custom Nav Down Button - Only show if more than 4 images */}
//         {images.length > 4 && (
//           <button
//             onClick={() => thumbSwiperRef.current?.slideNext()}
//             className='absolute bottom-0 left-1/2 -translate-x-1/2 z-30 rounded-b-lg p-2 w-full bg-linear-to-t cursor-pointer from-[#3d3d3d90] hover:from-black/70 flex items-center justify-center to-transparent transition-colors disabled:opacity-50'
//             aria-label='Next image'
//             disabled={isEnd}
//           >
//             <ChevronDown className='w-6 text-white h-6' />
//           </button>
//         )}
//       </div>

//       {!isBeginning2 && (
//         <button
//           onClick={() => swiperI2?.slidePrev()}
//           className='absolute left-[25%] top-1/2 -translate-y-1/2 -translate-x-4 z-20 bg-white/60 rounded-full p-3 shadow-xl hover:bg-gray-200 transition-colors cursor-pointer'
//         >
//           <ChevronLeft className='w-4 h-4 lg:w-6 lg:h-6' />
//         </button>
//       )}

//       {/* 2. Main Product Image Slider */}
//       <Swiper
//         onSwiper={setSwiperI2}
//         onInit={(swiper) => {
//           setIsBeginning2(swiper.isBeginning);
//           setIsEnd2(swiper.isEnd);
//         }}
//         onSlideChange={(swiper) => {
//           setIsBeginning2(swiper.isBeginning);
//           setIsEnd2(swiper.isEnd);
//         }}
//         spaceBetween={10}
//         thumbs={{
//           swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
//         }}
//         modules={[FreeMode, Thumbs]}
//         className='h-full flex-1 w-full bg-gray-200 rounded-lg'
//       >
//         {images.map((img, idx) => (
//           <SwiperSlide key={idx}>
//             <div className='flex items-center justify-center w-full h-full p-4'>
//               <Image
//                 src={img.url}
//                 alt={img.alt}
//                 width={600}
//                 height={450}
//                 className='object-contain rounded-lg max-w-full max-h-full'
//                 priority={idx === 0}
//                 loading={idx === 0 ? undefined : "lazy"}
//               />
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//       {!isEnd2 && (
//         <button
//           onClick={() => swiperI2?.slideNext()}
//           className='absolute right-[4%] top-1/2 -translate-y-1/2 translate-x-4 z-20 bg-white/60 rounded-full p-3 shadow-xl hover:bg-gray-200 transition-colors cursor-pointer'
//         >
//           <ChevronRight className='w-4 h-4 lg:w-6 lg:h-6' />
//         </button>
//       )}
//     </div>
//   );
// }

// // ===============================================
// // 4. MOBILE GALLERY
// // ===============================================
// function ProductImageGalleryMobile({ images }: ProductImageGalleryProps) {
//   const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
//   const thumbSwiperRef = useRef<SwiperType | null>(null);

//   const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
//   const [isBeginning, setIsBeginning] = useState(true);
//   const [isEnd, setIsEnd] = useState(false);

//   return (
//     <div className='flex flex-col gap-4 h-[400px] w-full'>
//       {/* 1. Main Product Image Slider (Top on Mobile) */}

//       <Swiper
//         spaceBetween={10}
//         thumbs={{
//           swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
//         }}
//         onSwiper={setSwiperInstance}
//         onInit={(swiper) => {
//           setIsBeginning(swiper.isBeginning);
//           setIsEnd(swiper.isEnd);
//         }}
//         onSlideChange={(swiper) => {
//           setIsBeginning(swiper.isBeginning);
//           setIsEnd(swiper.isEnd);
//         }}
//         modules={[FreeMode, Thumbs]}
//         className='h-full flex-1 w-full bg-gray-200 rounded-lg'
//       >
//         {images.map((img, idx) => (
//           <SwiperSlide key={idx}>
//             <div className='relative w-full h-full p-2'>
//               <Image
//                 src={img.url}
//                 alt={img.alt}
//                 fill={true}
//                 className='object-cover rounded-lg'
//                 priority={idx === 0}
//                 loading={idx === 0 ? undefined : "lazy"}
//               />
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* 2. Horizontal Thumbnail Slider & Custom Navigation (Bottom on Mobile) */}
//       <div className='relative xl:h-[50px] w-full'>
//         {/* Custom Nav Left Button - Only show if more than 4 images */}
//         {images.length > 4 && (
//           <button
//             onClick={() => thumbSwiperRef.current?.slidePrev()}
//             className='absolute top-1/2 -translate-y-1/2 left-0 z-30 rounded-l-lg p-2 h-full bg-gradient-to-r cursor-pointer from-[#3d3d3d90] hover:from-black/70 flex items-center justify-center to-transparent transition-colors disabled:opacity-50'
//             aria-label='Previous image'
//             disabled={isBeginning}
//           >
//             <ChevronLeft className='w-6 text-white h-6' />
//           </button>
//         )}

//         <Swiper
//           onSwiper={(swiper) => {
//             setThumbsSwiper(swiper);
//             thumbSwiperRef.current = swiper;
//             setIsBeginning(swiper.isBeginning);
//             setIsEnd(swiper.isEnd);
//           }}
//           onTransitionEnd={(swiper) => {
//             setIsBeginning(swiper.isBeginning);
//             setIsEnd(swiper.isEnd);
//           }}
//           setWrapperSize={true}
//           direction={"horizontal"}
//           spaceBetween={10}
//           slidesPerView={4}
//           freeMode={true}
//           watchSlidesProgress={true}
//           modules={[FreeMode, Thumbs]}
//           className='thumbprod w-full h-full px-10'
//         >
//           {images.map((img, idx) => (
//             <SwiperSlide key={idx}>
//               <div className='cursor-pointer rounded-lg overflow-hidden border-2 border-gray-200 h-full w-full aspect-square [&.swiper-slide-thumb-active]:border-blue-500!'>
//                 <Image
//                   src={img.url}
//                   alt={img.alt}
//                   width={96}
//                   height={96}
//                   className='object-cover w-full h-full'
//                   loading='lazy'
//                 />
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Custom Nav Right Button - Only show if more than 4 images */}
//         {images.length > 4 && (
//           <button
//             onClick={() => thumbSwiperRef.current?.slideNext()}
//             className='absolute top-1/2 -translate-y-1/2 right-0 z-30 rounded-r-lg p-2 h-full bg-gradient-to-l cursor-pointer from-[#3d3d3d90] hover:from-black/70 flex items-center justify-center to-transparent transition-colors disabled:opacity-50'
//             aria-label='Next image'
//             disabled={isEnd}
//           >
//             <ChevronRight className='w-6 text-white h-6' />
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }

// // ===============================================
// // 5. WRAPPER (Default Export)
// // ===============================================
// export default function ProductImageGallery(props: ProductImageGalleryProps) {
//   const isDesktop = useIsDesktop();
//   const [hasMounted, setHasMounted] = useState(false);

//   useEffect(() => {
//     // eslint-disable-next-line react-hooks/set-state-in-effect
//     setHasMounted(true);
//   }, []);

//   if (!hasMounted) {
//     return <ProductImageGalleryDesktop {...props} />;
//   }

//   return isDesktop ? (
//     <ProductImageGalleryDesktop {...props} />
//   ) : (
//     <ProductImageGalleryMobile {...props} />
//   );
// }
"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, FreeMode } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/free-mode";

// ===============================================
// 1. ICONS (All icons needed for both layouts)
// ===============================================
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
const ChevronLeft = (props: React.SVGProps<SVGSVGElement>) => (
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
    <path d='m15 18-6-6 6-6' />
  </svg>
);
const ChevronRight = (props: React.SVGProps<SVGSVGElement>) => (
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
    <path d='m9 18 6-6-6-6' />
  </svg>
);

interface ProductImageGalleryProps {
  images: Array<{ url: string; alt: string }>;
}

// ===============================================
// 2. Responsive Hook
// ===============================================
const XL_BREAKPOINT = "(min-width: 1280px)";

const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const media = window.matchMedia(XL_BREAKPOINT);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsDesktop(media.matches);

    const listener = (event: MediaQueryListEvent) =>
      setIsDesktop(event.matches);
    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, []);

  return isDesktop;
};

function ProductImageGalleryDesktop({ images }: ProductImageGalleryProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const thumbSwiperRef = useRef<SwiperType | null>(null);

  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [swiperI2, setSwiperI2] = useState<SwiperType | null>(null);
  const [isBeginning2, setIsBeginning2] = useState(true);
  const [isEnd2, setIsEnd2] = useState(false);
  return (
    <div className='flex flex-row gap-4 relative h-[450px] w-full'>
      {/* 1. Vertical Thumbnail Slider & Custom Navigation */}
      <div className='relative w-[100px]'>
        {/* Custom Nav Up Button - Only show if more than 4 images */}
        {images.length > 4 && (
          <button
            onClick={() => thumbSwiperRef.current?.slidePrev()}
            className='absolute top-0 left-1/2 -translate-x-1/2 z-30 rounded-t-lg p-2 w-full bg-linear-to-b cursor-pointer from-[#3d3d3d90] hover:from-black/70 flex items-center justify-center to-transparent transition-colors disabled:opacity-50'
            aria-label='Previous image'
            disabled={isBeginning}
          >
            <ChevronUp className='w-6 text-white h-6' />
          </button>
        )}

        <Swiper
          onSwiper={(swiper) => {
            setThumbsSwiper(swiper);
            thumbSwiperRef.current = swiper;
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onTransitionEnd={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          setWrapperSize={true}
          direction={"vertical"}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Thumbs]}
          className='thumbprod w-full h-full'
        >
          {images.map((img, idx) => (
            <SwiperSlide key={idx}>
              <div className='cursor-pointer rounded-lg overflow-hidden border-2 border-gray-200 h-full w-full [&.swiper-slide-thumb-active]:border-blue-500!'>
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

        {/* Custom Nav Down Button - Only show if more than 4 images */}
        {images.length > 4 && (
          <button
            onClick={() => thumbSwiperRef.current?.slideNext()}
            className='absolute bottom-0 left-1/2 -translate-x-1/2 z-30 rounded-b-lg p-2 w-full bg-linear-to-t cursor-pointer from-[#3d3d3d90] hover:from-black/70 flex items-center justify-center to-transparent transition-colors disabled:opacity-50'
            aria-label='Next image'
            disabled={isEnd}
          >
            <ChevronDown className='w-6 text-white h-6' />
          </button>
        )}
      </div>

      {!isBeginning2 && (
        <button
          onClick={() => swiperI2?.slidePrev()}
          className='absolute left-[25%] top-1/2 -translate-y-1/2 -translate-x-4 z-20 bg-white/60 rounded-full p-3 shadow-xl hover:bg-gray-200 transition-colors cursor-pointer'
        >
          <ChevronLeft className='w-4 h-4 lg:w-6 lg:h-6' />
        </button>
      )}

      {/* 2. Main Product Image Slider */}
      <Swiper
        onSwiper={setSwiperI2}
        onInit={(swiper) => {
          setIsBeginning2(swiper.isBeginning);
          setIsEnd2(swiper.isEnd);
        }}
        onSlideChange={(swiper) => {
          setIsBeginning2(swiper.isBeginning);
          setIsEnd2(swiper.isEnd);
        }}
        spaceBetween={10}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Thumbs]}
        className='h-full flex-1 w-full bg-gray-200 rounded-lg'
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <div className='flex items-center justify-center w-full h-full p-4'>
              <Image
                src={img.url}
                alt={img.alt}
                width={600}
                height={450}
                className='object-contain rounded-lg max-w-full max-h-full'
                priority={idx === 0}
                loading={idx === 0 ? undefined : "lazy"}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {!isEnd2 && (
        <button
          onClick={() => swiperI2?.slideNext()}
          className='absolute right-[4%] top-1/2 -translate-y-1/2 translate-x-4 z-20 bg-white/60 rounded-full p-3 shadow-xl hover:bg-gray-200 transition-colors cursor-pointer'
        >
          <ChevronRight className='w-4 h-4 lg:w-6 lg:h-6' />
        </button>
      )}
    </div>
  );
}

// ===============================================
// 4. MOBILE GALLERY
// ===============================================
function ProductImageGalleryMobile({ images }: ProductImageGalleryProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const thumbSwiperRef = useRef<SwiperType | null>(null);

  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div className='flex flex-col gap-4 h-[400px] w-full'>
      {/* 1. Main Product Image Slider (Top on Mobile) */}
      <div className='relative h-full w-full'>
        {!isBeginning && (
          <button
            onClick={() => swiperInstance?.slidePrev()}
            className='absolute -left-2 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full p-3 shadow-xl hover:bg-gray-200 transition-colors cursor-pointer'
          >
            <ChevronLeft className='w-5 h-5' />
          </button>
        )}

        <Swiper
          spaceBetween={10}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          onSwiper={setSwiperInstance}
          onInit={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          modules={[FreeMode, Thumbs]}
          className='h-full flex-1 w-full bg-gray-200 rounded-lg'
        >
          {images.map((img, idx) => (
            <SwiperSlide key={idx}>
              <div className='relative w-full h-full p-2'>
                <Image
                  src={img.url}
                  alt={img.alt}
                  fill
                  className='object-cover rounded-lg'
                  priority={idx === 0}
                  loading={idx === 0 ? undefined : "lazy"}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {!isEnd && (
          <button
            onClick={() => swiperInstance?.slideNext()}
            className='absolute -right-2 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full p-3 shadow-xl hover:bg-gray-200 transition-colors cursor-pointer'
          >
            <ChevronRight className='w-5 h-5' />
          </button>
        )}
      </div>

      {/* 2. Horizontal Thumbnail Slider & Custom Navigation (Bottom on Mobile) */}
      <div className='relative xl:h-[50px] w-full'>
        {images.length > 4 && (
          <button
            onClick={() => thumbSwiperRef.current?.slidePrev()}
            className='absolute top-1/2 -translate-y-1/2 left-0 z-30 rounded-l-lg p-2 h-full bg-gradient-to-r cursor-pointer from-[#3d3d3d90] hover:from-black/70 flex items-center justify-center to-transparent transition-colors disabled:opacity-50'
            disabled={isBeginning}
          >
            <ChevronLeft className='w-6 text-white h-6' />
          </button>
        )}

        <Swiper
          onSwiper={(swiper) => {
            setThumbsSwiper(swiper);
            thumbSwiperRef.current = swiper;
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onTransitionEnd={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          spaceBetween={10}
          slidesPerView={4}
          freeMode
          watchSlidesProgress
          modules={[FreeMode, Thumbs]}
          className='thumbprod w-full h-full px-10'
        >
          {images.map((img, idx) => (
            <SwiperSlide key={idx}>
              <div className='cursor-pointer rounded-lg overflow-hidden border-2 border-gray-200 h-full w-full aspect-square [&.swiper-slide-thumb-active]:border-blue-500!'>
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

        {images.length > 4 && (
          <button
            onClick={() => thumbSwiperRef.current?.slideNext()}
            className='absolute top-1/2 -translate-y-1/2 right-0 z-30 rounded-r-lg p-2 h-full bg-gradient-to-l cursor-pointer from-[#3d3d3d90] hover:from-black/70 flex items-center justify-center to-transparent transition-colors disabled:opacity-50'
            disabled={isEnd}
          >
            <ChevronRight className='w-6 text-white h-6' />
          </button>
        )}
      </div>
    </div>
  );
}

// ===============================================
// 5. WRAPPER (Default Export)
// ===============================================
export default function ProductImageGallery(props: ProductImageGalleryProps) {
  const isDesktop = useIsDesktop();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return <ProductImageGalleryDesktop {...props} />;
  }

  return isDesktop ? (
    <ProductImageGalleryDesktop {...props} />
  ) : (
    <ProductImageGalleryMobile {...props} />
  );
}
