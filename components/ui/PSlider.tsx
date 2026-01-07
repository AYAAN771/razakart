// "use client";

// import { useState, ReactNode } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
// import type { Swiper as SwiperType } from "swiper";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// interface PSliderBreakpoint {
//   [key: number]: {
//     slidesPerView: number;
//     spaceBetween?: number;
//   };
// }

// interface PSliderProps {
//   children: ReactNode[];
//   slidesPerView?: number;
//   spaceBetween?: number;
//   cardHeight?: string;
//   breakpoints?: PSliderBreakpoint;
//   title?: string;
//   showSeeAll?: boolean;
//   onSeeAllClick?: () => void;
//   className?: string;
//   containerClassName?: string;
// }

// export default function PSlider({
//   children,
//   slidesPerView = 2,
//   spaceBetween = 16,
//   cardHeight = "aspect-square",
//   breakpoints = {
//     640: { slidesPerView: 2 },
//     768: { slidesPerView: 3 },
//     1024: { slidesPerView: 4 },
//   },
//   title,
//   showSeeAll = false,
//   onSeeAllClick,
//   className = "",
//   containerClassName = "w-full bg-gray-200 py-12 px-4 sm:px-6 lg:px-8",
// }: PSliderProps) {
//   const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
//   const [isBeginning, setIsBeginning] = useState(true);
//   const [isEnd, setIsEnd] = useState(false);

//   return (
//     <div className={containerClassName}>
//       <div className='xl:max-w-7xl max-w-[90vw] mx-auto'>
//         {(title || showSeeAll) && (
//           <div className='flex items-center justify-between mb-6'>
//             {title && (
//               <h2 className='text-xl sm:text-3xl font-bold text-gray-900'>
//                 {title}
//               </h2>
//             )}
//             {showSeeAll && (
//               <button
//                 onClick={onSeeAllClick}
//                 className='text-xs lg:text-sm text-gray-600 hover:text-gray-900 flex items-center gap-1 cursor-pointer'
//               >
//                 See All
//                 <ChevronRight className='w-4 h-4' />
//               </button>
//             )}
//           </div>
//         )}

//         <div className='relative'>
//           {!isBeginning && (
//             <button
//               onClick={() => swiperInstance?.slidePrev()}
//               className='absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 bg-white rounded-full p-3 shadow-xl hover:bg-gray-200 transition-colors cursor-pointer'
//             >
//               <ChevronLeft className='w-4 h-4 lg:w-6 lg:h-6' />
//             </button>
//           )}

//           <Swiper
//             modules={[Navigation, Pagination]}
//             spaceBetween={spaceBetween}
//             slidesPerView={slidesPerView}
//             onSwiper={setSwiperInstance}
//             onSlideChange={(swiper) => {
//               setIsBeginning(swiper.isBeginning);
//               setIsEnd(swiper.isEnd);
//             }}
//             breakpoints={breakpoints}
//             className={className}
//           >
//             {children.map((child, index) => (
//               <SwiperSlide key={index}>{child}</SwiperSlide>
//             ))}
//           </Swiper>

//           {!isEnd && (
//             <button
//               onClick={() => swiperInstance?.slideNext()}
//               className='absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 bg-white rounded-full p-3 shadow-xl hover:bg-gray-200 transition-colors cursor-pointer'
//             >
//               <ChevronRight className='w-4 h-4 lg:w-6 lg:h-6' />
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// "use client";

// import { useState, ReactNode } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
// import type { Swiper as SwiperType } from "swiper";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// interface PSliderBreakpoint {
//   [key: number]: {
//     slidesPerView: number;
//     spaceBetween?: number;
//   };
// }

// interface PSliderProps {
//   children: ReactNode[];
//   slidesPerView?: number;
//   spaceBetween?: number;
//   cardHeight?: string;
//   breakpoints?: PSliderBreakpoint;
//   title?: string;
//   showSeeAll?: boolean;
//   onSeeAllClick?: () => void;
//   className?: string;
//   containerClassName?: string;
// }

// export default function PSlider({
//   children,
//   slidesPerView = 2,
//   spaceBetween = 16,
//   breakpoints = {
//     640: { slidesPerView: 2 },
//     768: { slidesPerView: 3 },
//     1024: { slidesPerView: 4 },
//   },
//   title,
//   showSeeAll = false,
//   className = "",
//   containerClassName = "w-full bg-gray-200 py-12 px-4 sm:px-6 lg:px-8",
// }: PSliderProps) {
//   const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
//   const [isBeginning, setIsBeginning] = useState(true);
//   const [isEnd, setIsEnd] = useState(false);

//   return (
//     <div className={containerClassName}>
//       <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
//         {(title || showSeeAll) && (
//           <div className='flex items-center justify-between mb-6'>
//             {title && (
//               <h2 className='text-xl sm:text-3xl font-bold text-gray-900'>
//                 {title}
//               </h2>
//             )}
//           </div>
//         )}

//         <div className='relative'>
//           {!isBeginning && (
//             <button
//               onClick={() => swiperInstance?.slidePrev()}
//               className='absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 bg-white rounded-full p-3 shadow-xl hover:bg-gray-200 transition-colors cursor-pointer'
//             >
//               <ChevronLeft className='w-4 h-4 lg:w-6 lg:h-6' />
//             </button>
//           )}

//           <Swiper
//             modules={[Navigation, Pagination]}
//             spaceBetween={spaceBetween}
//             slidesPerView={slidesPerView}
//             onSwiper={setSwiperInstance}
//             onInit={(swiper) => {
//               setIsBeginning(swiper.isBeginning);
//               setIsEnd(swiper.isEnd);
//             }}
//             onSlideChange={(swiper) => {
//               setIsBeginning(swiper.isBeginning);
//               setIsEnd(swiper.isEnd);
//             }}
//             // eslint-disable-next-line @typescript-eslint/no-explicit-any
//             breakpoints={breakpoints as any}
//             className={className}
//           >
//             {children.map((child, index) => (
//               <SwiperSlide key={index}>{child}</SwiperSlide>
//             ))}
//           </Swiper>

//           {!isEnd && (
//             <button
//               onClick={() => swiperInstance?.slideNext()}
//               className='absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 bg-white rounded-full p-3 shadow-xl hover:bg-gray-200 transition-colors cursor-pointer'
//             >
//               <ChevronRight className='w-4 h-4 lg:w-6 lg:h-6' />
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";

import { useState, ReactNode, useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface PSliderBreakpoint {
  [key: number]: {
    slidesPerView: number;
    spaceBetween?: number;
  };
}

interface PSliderProps {
  children: ReactNode[];
  slidesPerView?: number;
  spaceBetween?: number;
  breakpoints?: PSliderBreakpoint;
  title?: string;
  className?: string;
  containerClassName?: string;
}

const INITIAL_LOAD = 8;
const LOAD_MORE_STEP = 8;

export default function PSlider({
  children,
  slidesPerView = 2,
  spaceBetween = 16,
  breakpoints = {
    640: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    1024: { slidesPerView: 4 },
  },
  title,
  className = "",
  containerClassName = "w-full bg-gray-200 py-12 px-4 sm:px-6 lg:px-8",
}: PSliderProps) {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [visibleCount, setVisibleCount] = useState(INITIAL_LOAD);

  const totalSlides = children.length;

  const visibleChildren = useMemo(
    () => children.slice(0, visibleCount),
    [children, visibleCount]
  );

  const hasMore = visibleCount < totalSlides;

  return (
    <div className={containerClassName}>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {title && (
          <div className='mb-6'>
            <h2 className='text-xl sm:text-3xl font-bold text-gray-900'>
              {title}
            </h2>
          </div>
        )}

        <div className='relative'>
          {!isBeginning && (
            <button
              onClick={() => swiperInstance?.slidePrev()}
              className='absolute cursor-pointer left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 bg-white rounded-full p-3 shadow-xl hover:bg-gray-200 transition-colors'
            >
              <ChevronLeft className='w-4 h-4 lg:w-6 lg:h-6' />
            </button>
          )}

          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={spaceBetween}
            slidesPerView={slidesPerView}
            onSwiper={setSwiperInstance}
            onSlideChange={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);

              // LOAD MORE WHEN USER NEARS END
              if (swiper.activeIndex >= visibleChildren.length - 4 && hasMore) {
                setVisibleCount((prev) =>
                  Math.min(prev + LOAD_MORE_STEP, totalSlides)
                );
              }
            }}
            breakpoints={breakpoints as any}
            className={className}
          >
            {/* REAL CARDS */}
            {visibleChildren.map((child, index) => (
              <SwiperSlide key={index}>{child}</SwiperSlide>
            ))}

            {/* SKELETONS */}
            {hasMore &&
              Array.from({ length: LOAD_MORE_STEP }).map((_, i) => (
                <SwiperSlide key={`skeleton-${i}`}>
                  <div className='w-full h-full rounded-xl bg-gray-300 animate-pulse' />
                </SwiperSlide>
              ))}
          </Swiper>

          {!isEnd && (
            <button
              onClick={() => swiperInstance?.slideNext()}
              className='absolute cursor-pointer right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 bg-white rounded-full p-3 shadow-xl hover:bg-gray-200 transition-colors'
            >
              <ChevronRight className='w-4 h-4 lg:w-6 lg:h-6' />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
