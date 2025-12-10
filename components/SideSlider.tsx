// "use client";

// import React, { useState, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { Button } from "@/components/ui/button";

// // Swiper Modules
// import { Autoplay } from "swiper/modules";

// // Swiper CSS
// import "swiper/css";

// // === Types ===
// type Slide = {
//   id: number;
//   brand: string;
//   title: string;
//   subtitle?: string;
//   badge?: string;
//   image: string;
// };

// // === SideSlider Component ===
// const SideSlider = ({ slides }: { slides: Slide[] }) => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   // Side slider autoplay
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 4000);
//     return () => clearInterval(timer);
//   }, [slides.length]);

//   const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
//   const prevSlide = () =>
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

//   return (
//     <div className="relative w-full flex flex-col  bg-amber-200 lg:w-80">
//       <Swiper
//         loop={true}
//         autoplay={{ delay: 3000 }}
//         slidesPerView={2} // Only 1 slide per view
//         spaceBetween={10}  // Space between slides
//         onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
//         className="w-full"
//       >
//         {slides.map((slide) => (
//           <SwiperSlide key={slide.id}>
//             <div className="flex-1  relative rounded-lg overflow-hidden cursor-pointer group">
//               <div className="relative h-[160px]  lg:h-[245px] bg-gradient-to-br from-black/40 to-transparent">
//                 {/* Background Image */}
//                 <div
//                   className="absolute inset-0"
//                   style={{
//                     backgroundImage: `url(${slide.image})`,
//                     backgroundSize: "cover",
//                     backgroundPosition: "center",
//                   }}
//                 />
//                 {/* Overlay */}
//                 <div className="absolute inset-0 bg-black/50" />
//                 {/* Content */}
//                 <div className="relative h-full lg:h-full flex flex-col justify-between p-6 text-white">
//                   <div>
//                     <p className="text-xs font-bold tracking-wider mb-1">
//                       {slide.brand}
//                     </p>
//                     <h3 className="text-lg lg:text-xl font-bold mb-1 leading-tight">
//                       {slide.title}
//                     </h3>
//                     {slide.subtitle && (
//                       <p className="text-xs lg:text-sm opacity-90">
//                         {slide.subtitle}
//                       </p>
//                     )}
//                     {slide.badge && (
//                       <span className="inline-block mt-3 bg-gray-100 text-black text-xs px-3 py-1.5 rounded-full font-bold">
//                         {slide.badge}
//                       </span>
//                     )}
//                   </div>
//                   {/* SHOP NOW Button */}
//                   <Button className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-bold rounded-lg w-full mt-4">
//                     SHOP NOW
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Navigation Arrows */}
//       <button
//         onClick={prevSlide}
//         className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full z-20 shadow-lg"
//       >
//         <ChevronLeft className="w-5 h-5 rotate-90" />
//       </button>

//       <button
//         onClick={nextSlide}
//         className="absolute left-1/2 -translate-x-1/2 bottom-2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full z-20 shadow-lg"
//       >
//         <ChevronRight className="w-5 h-5 rotate-90" />
//       </button>
//     </div>
//   );
// };

// export default SideSlider;



// "use client";
// import React, { useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { Button } from "@/components/ui/button";
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
//   const sideSwiper = useRef<any>(null);

//   return (
//     <div className="relative w-full lg:w-80 h-[340px] lg:h-[520px]">
//       {/* FIX 1: GIVE FIXED HEIGHT SO 2 SLIDES CAN STACK */}
//       <Swiper
//         direction="vertical"
//         slidesPerView={2}
//         spaceBetween={10}
//         loop={true}
//         autoplay={{ delay: 2500 }}
//         speed={700}
//         modules={[Autoplay]}
//         onSwiper={(sw) => (sideSwiper.current = sw)}   // FIXED
//         className="h-full"
//       >
//         {slides.map((slide) => (
//           <SwiperSlide key={slide.id}>
//             <div className="relative rounded-lg overflow-hidden cursor-pointer">
//               <div className="relative h-[160px] lg:h-[245px]">
//                 <div
//                   className="absolute inset-0"
//                   style={{
//                     backgroundImage: `url(${slide.image})`,
//                     backgroundSize: "cover",
//                     backgroundPosition: "center",
//                   }}
//                 />
//                 <div className="absolute inset-0 bg-black/50" />

//                 <div className="relative h-full flex flex-col justify-between p-6 text-white">
//                   <div>
//                     <p className="text-xs font-bold tracking-wider mb-1">
//                       {slide.brand}
//                     </p>
//                     <h3 className="text-lg lg:text-xl font-bold mb-1 leading-tight">
//                       {slide.title}
//                     </h3>
//                     {slide.subtitle && (
//                       <p className="text-xs lg:text-sm opacity-90">{slide.subtitle}</p>
//                     )}
//                     {slide.badge && (
//                       <span className="inline-block mt-3 bg-gray-100 text-black text-xs px-3 py-1.5 rounded-full font-bold">
//                         {slide.badge}
//                       </span>
//                     )}
//                   </div>

//                   <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg w-full mt-4">
//                     SHOP NOW
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* FIX 2: NAV BUTTONS WORKING */}
//       <button
//         onClick={() => sideSwiper.current?.slidePrev()}
//         className="absolute left-1/2 -translate-x-1/2 top-[0%] bg-black/60 hover:bg-black/80 text-white p-2 rounded-full z-20 shadow-lg"
//       >
//         <ChevronLeft className="w-5 h-5 rotate-90" />
//       </button>

//       <button
//         onClick={() => sideSwiper.current?.slideNext()}
//         className="absolute left-1/2 -translate-x-1/2 bottom-2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full z-20 shadow-lg"
//       >
//         <ChevronRight className="w-5 h-5 rotate-90" />
//       </button>
//     </div>
//   );
// };

// export default SideSlider;



// "use client";
// import { useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
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
//   const swiperRef = useRef<any>(null);

//   return (
//     <div
//       className="
//         relative w-full 
//         group 
//         lg:w-80 
//         lg:h-[520px] 
//         h-[200px]
//       "
//     >
//       <Swiper
//         // MOBILE = horizontal
//         // DESKTOP = vertical
//         direction={"vertical"}
//         breakpoints={{
//           0: {
//             direction: "horizontal",
//             slidesPerView: 2,
//              spaceBetween: 10,
//           },
//           1024: {
//             direction: "vertical",
//             slidesPerView: 2,
//             spaceBetween: 10,
//           },
//         }}
//         loop
//         autoplay={{ delay: 2500 }}
//         speed={700}
//         modules={[Autoplay]}
//         onSwiper={(sw) => (swiperRef.current = sw)}
//         className="h-full"
//       >
//         {slides.map((slide) => (
//           <SwiperSlide key={slide.id}>
//             <div className="relative rounded-lg overflow-hidden cursor-pointer">
//               <div className="relative min-h-[170px]  bg-amber-400 lg:min-h-[250px]">
//                 <div
//                   className="absolute inset-0"
//                   style={{
//                     backgroundImage: `url(${slide.image})`,
//                     backgroundSize: "cover",
//                     backgroundPosition: "center",
//                   }}
//                 />

//                 <div className="absolute inset-0 bg-black/50" />

//                 <div className="relative h-full flex flex-col justify-between p-6 text-white">
//                   <div>
//                     <p className="text-xs font-bold">{slide.brand}</p>

//                     <h3 className="text-sm lg:text-xl font-bold leading-tight">
//                       {slide.title}
//                     </h3>

//                     {slide.subtitle && (
//                       <p className="text-[10px] whitespace-nowrap lg:text-sm opacity-90">
//                         {slide.subtitle}
//                       </p>
//                     )}

//                     {slide.badge && (
//                       <span className="inline-block mt-1.5 lg:mt-3 bg-gray-100 text-black text-[8px] lg:text-xs lg:px-3 px-2 py-0.5 lg:py-1.5 rounded-full font-bold">
//                         {slide.badge}
//                       </span>
//                     )}
//                   </div>

//                   <button className="bg-blue-600 cursor-pointer w-fit hover:bg-blue-700 text-white px-1.5 py-1 lg:px-6 mt-2.5 lg:mt-12 lg:py-3 text-[10px] lg:text-sm xl:text-lg font-bold rounded-sm tracking-wider lg:rounded-md shadow-2xl">
//                                              SHOP NOW
//                                            </button>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* DESKTOP → show on hover */}
//       <button
//         onClick={() => swiperRef.current?.slidePrev()}
//         className="
//           hidden lg:flex
//           opacity-0 group-hover:opacity-100
//           transition
//           absolute left-1/2 -translate-x-1/2 
//           top-0
//           bg-black/60 hover:bg-black/80 
//           text-white p-2 rounded-full z-20
//         "
//       >
//         <ChevronLeft className="w-5 h-5 rotate-90" />
//       </button>

//       <button
//         onClick={() => swiperRef.current?.slideNext()}
//         className="
//           hidden lg:flex
//           opacity-0 group-hover:opacity-100
//           transition
//           absolute left-1/2 -translate-x-1/2 
//           bottom-2
//           bg-black/60 hover:bg-black/80 
//           text-white p-2 rounded-full z-20
//         "
//       >
//         <ChevronRight className="w-5 h-5 rotate-90" />
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
    <div
      className="
        relative w-full 
        group 
        lg:w-80 
        lg:h-[520px] 
        h-[200px]
      "
    >
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
        autoplay={{ delay: 2500 }}
        speed={700}
        modules={[Autoplay]}
        onSwiper={(sw) => (swiperRef.current = sw)} // Properly set the swiperRef
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative rounded-lg overflow-hidden cursor-pointer">
              <div className="relative min-h-[170px] bg-amber-400 lg:min-h-[250px]">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />

                <div className="absolute inset-0 bg-black/50" />

                <div className="relative h-full flex flex-col justify-between p-6 text-white">
                  <div>
                    <p className="text-xs font-bold">{slide.brand}</p>

                    <h3 className="text-sm lg:text-xl font-bold leading-tight">
                      {slide.title}
                    </h3>

                    {slide.subtitle && (
                      <p className="text-[10px] whitespace-nowrap lg:text-sm opacity-90">
                        {slide.subtitle}
                      </p>
                    )}

                    {slide.badge && (
                      <span className="inline-block mt-1.5 lg:mt-3 bg-gray-100 text-black text-[8px] lg:text-xs lg:px-3 px-2 py-0.5 lg:py-1.5 rounded-full font-bold">
                        {slide.badge}
                      </span>
                    )}
                  </div>

                  <button className="bg-blue-600 cursor-pointer w-fit hover:bg-blue-700 text-white px-1.5 py-1 lg:px-6 mt-2.5 lg:mt-12 lg:py-3 text-[10px] lg:text-sm xl:text-lg font-bold rounded-sm tracking-wider lg:rounded-md shadow-2xl">
                    SHOP NOW
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* DESKTOP → show on hover */}
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="
          hidden lg:flex
          opacity-0 group-hover:opacity-100
          transition
          absolute left-1/2 -translate-x-1/2 
          top-0
          bg-black/60 hover:bg-black/80 
          text-white p-2 rounded-full z-20
        "
      >
        <ChevronLeft className="w-5 h-5 rotate-90" />
      </button>

      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="
          hidden lg:flex
          opacity-0 group-hover:opacity-100
          transition
          absolute left-1/2 -translate-x-1/2 
          bottom-2
          bg-black/60 hover:bg-black/80 
          text-white p-2 rounded-full z-20
        "
      >
        <ChevronRight className="w-5 h-5 rotate-90" />
      </button>

      {/* MOBILE → always visible nav */}
      {/* <div className="flex lg:hidden absolute inset-0 items-center justify-between px-2 z-30">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="bg-black/60 hover:bg-black/80 text-white p-2 rounded-full"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="bg-black/60 hover:bg-black/80 text-white p-2 rounded-full"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div> */}
    </div>
  );
};

export default SideSlider;
