// "use client";
// import { useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import type { Swiper as SwiperType } from "swiper";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";

// type Slide = {
//   id: number;
//   brand: string;
//   title: string;
//   subtitle?: string;
//   badge?: string;
//   image: string;
// };

// const SideSlider = ({ slides }: { slides: Slide[] }) => {
//   // Typing swiperRef with Swiper type
//   const swiperRef = useRef<SwiperType | null>(null);

//   return (
//     <div className='relative w-full group lg:w-80 lg:h-[520px] min-h-full'>
//       <Swiper
//         // MOBILE = horizontal
//         // DESKTOP = vertical
//         direction={"vertical"}
//         breakpoints={{
//           0: {
//             direction: "horizontal",
//             slidesPerView: 2,
//             spaceBetween: 10,
//           },
//           1024: {
//             direction: "vertical",
//             slidesPerView: 2,
//             spaceBetween: 10,
//           },
//         }}
//         loop
//         autoplay={{ delay: 2500000 }}
//         speed={700}
//         modules={[Autoplay]}
//         onSwiper={(sw) => (swiperRef.current = sw)} // Properly set the swiperRef
//         className='h-full'
//       >
//         {slides.map((slide) => (
//           <SwiperSlide key={slide.id}>
//             <div className='relative min-h-full! flex rounded-lg overflow-hidden cursor-pointer'>
//               <div className='relative min-h-full! w-full grow bg-amber-400'>
//                 <div
//                   className='absolute inset-0'
//                   style={{
//                     backgroundImage: `url(${slide.image})`,
//                     backgroundSize: "cover",
//                     backgroundPosition: "center",
//                   }}
//                 />

//                 <div className='absolute inset-0 bg-black/50' />

//                 <div className='relative h-full min-h-[155px] flex flex-col justify-between p-6 text-white'>
//                   <div>
//                     {/* <p className='text-xs font-bold'>{slide.brand}</p> */}

//                     <h3 className='text-sm line-clamp-2! lg:text-xl font-bold leading-tight'>
//                       {slide.title}
//                     </h3>

//                     {slide.subtitle && (
//                       <p className='text-[10px] whitespace-nowrap lg:text-sm opacity-90'>
//                         {slide.subtitle}
//                       </p>
//                     )}

//                     {slide.badge && (
//                       <span className='inline-block mt-1.5 lg:mt-3 bg-gray-100 text-black text-[8px] lg:text-xs lg:px-3 px-2 py-0.5 lg:py-1.5 rounded-full font-bold'>
//                         {slide.badge}
//                       </span>
//                     )}
//                   </div>

//                   <button className='bg-blue-600 cursor-pointer w-fit hover:bg-blue-700 text-white px-1.5 py-1 lg:px-6 mt-2.5 lg:mt-12 lg:py-3 text-[10px] lg:text-sm xl:text-lg font-bold rounded-sm tracking-wider lg:rounded-md shadow-2xl'>
//                     SHOP NOW
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* DESKTOP → show on hover */}
//       <button
//         onClick={() => swiperRef.current?.slidePrev()}
//         className='
//           hidden lg:flex
//           opacity-0 group-hover:opacity-100
//           transition
//           absolute left-1/2 -translate-x-1/2
//           top-0
//           bg-black/60 hover:bg-black/80
//           text-white p-2 rounded-full z-20
//         '
//       >
//         <ChevronLeft className='w-5 h-5 rotate-90' />
//       </button>

//       <button
//         onClick={() => swiperRef.current?.slideNext()}
//         className='
//           hidden lg:flex
//           opacity-0 group-hover:opacity-100
//           transition
//           absolute left-1/2 -translate-x-1/2
//           bottom-2
//           bg-black/60 hover:bg-black/80
//           text-white p-2 rounded-full z-20
//         '
//       >
//         <ChevronRight className='w-5 h-5 rotate-90' />
//       </button>

//       {/* MOBILE → always visible nav */}
//       {/* <div className="flex lg:hidden absolute inset-0 items-center justify-between px-2 z-30">
//         <button
//           onClick={() => swiperRef.current?.slidePrev()}
//           className="bg-black/60 hover:bg-black/80 text-white p-2 rounded-full"
//         >
//           <ChevronLeft className="w-5 h-5" />
//         </button>

//         <button
//           onClick={() => swiperRef.current?.slideNext()}
//           className="bg-black/60 hover:bg-black/80 text-white p-2 rounded-full"
//         >
//           <ChevronRight className="w-5 h-5" />
//         </button>
//       </div> */}
//     </div>
//   );
// };

// export default SideSlider;
"use client";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css";

type Slide = {
  id: number;
  brand: string;
  title: string;
  subtitle?: string;
  badge?: string;
  image: string;
};

const SideSlider = ({ slides }: { slides: Slide[] }) => {
  // Typing swiperRef with Swiper type
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className='relative w-full group lg:w-80 lg:h-[520px] min-h-full'>
      <Swiper
        // MOBILE = horizontal
        // DESKTOP = vertical
        direction={"vertical"}
        breakpoints={{
          0: {
            direction: "horizontal",
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            direction: "vertical",
            slidesPerView: 2,
            spaceBetween: 10,
          },
        }}
        loop
        autoplay={{ delay: 2500000 }}
        speed={700}
        modules={[Autoplay]}
        onSwiper={(sw) => (swiperRef.current = sw)} // Properly set the swiperRef
        className='h-full'
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className='relative min-h-full! flex rounded-lg overflow-hidden cursor-pointer'>
              <div className='relative min-h-full! w-full grow bg-amber-400'>
                <div
                  className='absolute inset-0'
                  style={{
                    backgroundImage: `url(${slide.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />

                <div className='absolute inset-0 bg-black/50' />

                <div className='relative h-full min-h-[155px] flex flex-col justify-between p-6 text-white'>
                  <div>
                    {/* <p className='text-xs font-bold'>{slide.brand}</p> */}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* DESKTOP → show on hover */}
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className='
          hidden lg:flex
          opacity-0 group-hover:opacity-100
          transition
          absolute left-1/2 -translate-x-1/2 
          top-0
          bg-black/60 hover:bg-black/80 
          text-white p-2 rounded-full z-20
        '
      >
        <ChevronLeft className='w-5 h-5 rotate-90' />
      </button>

      <button
        onClick={() => swiperRef.current?.slideNext()}
        className='
          hidden lg:flex
          opacity-0 group-hover:opacity-100
          transition
          absolute left-1/2 -translate-x-1/2 
          bottom-2
          bg-black/60 hover:bg-black/80 
          text-white p-2 rounded-full z-20
        '
      >
        <ChevronRight className='w-5 h-5 rotate-90' />
      </button>
    </div>
  );
};

export default SideSlider;
