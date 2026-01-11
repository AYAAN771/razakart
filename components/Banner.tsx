// "use client";
// import React, { useRef } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Swiper, SwiperSlide } from "swiper/react";
// import type { Swiper as SwiperType } from "swiper";
// import { Autoplay, EffectFade } from "swiper/modules";
// import SideSlider from "./SideSlider"; // Import the new SideSlider component

// import "swiper/css";
// import "swiper/css/effect-fade";

// // === Types ===
// type Slide = {
//   id: number;
//   brand: string;
//   title: string;
//   subtitle?: string;
//   badge?: string;
//   price?: string;
//   priceLabel?: string;
//   image: string;
//   bgColor?: string;
// };

// // === Data ===
// const mainSlides: Slide[] = [
//   {
//     id: 1,
//     brand: "Antec",
//     title: "VX310 & VX320",
//     badge: "ARGB",
//     subtitle: "Mid Tower",
//     price: "₹3,479/-",
//     priceLabel: "starting at",
//     image:
//       "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=500&auto=format&fit=crop&q=60",
//   },
//   {
//     id: 2,
//     brand: "Gaming",
//     title: "RTX 4090",
//     badge: "NEW",
//     subtitle: "Graphics Card",
//     price: "₹1,49,999/-",
//     priceLabel: "starting at",
//     image:
//       "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&auto=format&fit=crop&q=60",
//   },
//   {
//     id: 3,
//     brand: "Intel",
//     title: "Core i9-14900K",
//     badge: "HOT",
//     subtitle: "Processor",
//     price: "₹54,999/-",
//     priceLabel: "starting at",
//     image:
//       "https://images.unsplash.com/photo-1672241860863-fab879bd4a07?w=500&auto=format&fit=crop&q=60",
//   },
// ];

// const sideSlides: Slide[] = [
//   {
//     id: 1,
//     brand: "Cooler Master",
//     title: "LIGHT-UP DEALS",
//     subtitle: "GET INSTANT DISCOUNT !",
//     badge: "Limited Time",
//     image:
//       "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&q=80",
//   },
//   {
//     id: 2,
//     brand: "Thermaltake",
//     title: "Minecube 360 Ultra ARGB",
//     subtitle: "Sync CPU Liquid Cooler",
//     badge: "NEW ARRIVAL",
//     image:
//       "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400&q=80",
//   },
//   {
//     id: 3,
//     brand: "ASUS",
//     title: "ROG STRIX",
//     subtitle: "Gaming Motherboards",
//     badge: "BEST SELLER",
//     image:
//       "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&q=80",
//   },
//   {
//     id: 4,
//     brand: "Corsair",
//     title: "Vengeance RGB",
//     subtitle: "DDR5 Memory",
//     badge: "FLASH SALE",
//     image:
//       "https://images.unsplash.com/photo-1541029071515-84cc54f84dc5?w=400&q=80",
//   },
// ];

// // === Main HeroSlider Component ===
// export default function HeroSlider() {
//   const swiperRef = useRef<SwiperType | null>(null);
//   // const [currentMainSlide, setCurrentMainSlide] = useState(0);

//   const nextMainSlide = () => {
//     if (swiperRef.current && swiperRef.current.slideNext) {
//       swiperRef.current.slideNext();
//     }
//   };

//   const prevMainSlide = () => {
//     if (swiperRef.current && swiperRef.current.slidePrev) {
//       swiperRef.current.slidePrev();
//     }
//   };

//   // const mainSlide = mainSlides[currentMainSlide];

//   return (
//     <div className='w-full bg-gray-50 py-8 sm:py-12'>
//       <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
//         <div className='flex flex-col lg:flex-row gap-6'>
//           {/* === MAIN SLIDER (SWIPER with fade effect) === */}
//           <div className='flex-1 relative group rounded-2xl overflow-hidden shadow-2xl'>
//             <div className='relative h-[250px] lg:h-[520px]'>
//               <Swiper
//                 onSwiper={(sw) => {
//                   swiperRef.current = sw;
//                 }}
//                 modules={[Autoplay, EffectFade]}
//                 autoplay={{ delay: 3000 }}
//                 effect='fade'
//                 fadeEffect={{ crossFade: true }}
//                 loop={true}
//                 speed={700}
//                 slidesPerView={1}
//                 // onSlideChange={(sw) => {
//                 //   setCurrentMainSlide(sw.realIndex ?? sw.activeIndex ?? 0);
//                 // }}
//                 className='h-full'
//               >
//                 {mainSlides.map((slide) => (
//                   <SwiperSlide key={slide.id}>
//                     {/* Background Image layer */}
//                     <div
//                       className='absolute inset-0'
//                       style={{
//                         backgroundImage: `url(${slide.image})`,
//                         backgroundSize: "cover",
//                         backgroundPosition: "center",
//                       }}
//                     />
//                     <div className='absolute inset-0 bg-black/60' />

//                     {/* Content */}
//                     <div className='relative h-full flex items-center px-8 lg:px-16 text-white'>
//                       <div className='max-w-2xl'>
//                         <p className='text-xl lg:text-2xl font-bold xl:tracking-wider mb-1 sm:mb-3'>
//                           {slide.brand}
//                         </p>
//                         <h2 className='text-xl sm:text-5xl lg:text-5xl font-extrabold mb-0 sm:mb-3 lg:mb-4 lg:leading-tight flex items-center gap-4'>
//                           {slide.title}

//                           {slide.badge && (
//                             <span className='bg-white text-black text-xs px-3 py-0.5 lg:text-lg lg:px-5 lg:py-2 rounded-full font-bold'>
//                               {slide.badge}
//                             </span>
//                           )}
//                         </h2>

//                         {slide.subtitle && (
//                           <p className='text-xs lg:text-2xl mb-4 lg:mb-6 opacity-90'>
//                             {slide.subtitle}
//                           </p>
//                         )}

//                         <div className='flex flex-col'>
//                           {slide.price && (
//                             <div className='inline-block w-fit mb-3 lg:mb-6'>
//                               <div className='bg-blue-600 text-white sm:px-10 px-4 py-2 sm:py-7 rounded-2xl transform -skew-x-12 shadow-2xl'>
//                                 <div className='transform skew-x-12 lg:skew-x-12 text-center'>
//                                   <p className='text-xs lg:text-sm font-medium'>
//                                     {slide.priceLabel}
//                                   </p>
//                                   <p className='text-sm lg:text-4xl xl:text-5xl font-bold'>
//                                     {slide.price}
//                                   </p>
//                                 </div>
//                               </div>
//                             </div>
//                           )}

//                           <Button className='bg-blue-600 cursor-pointer w-fit hover:bg-blue-700 text-white px-3 py-2 lg:px-10 lg:py-7 text-xs lg:text-xl font-bold rounded-sm tracking-wider lg:rounded-xl shadow-2xl'>
//                             SHOP NOW
//                           </Button>
//                         </div>
//                       </div>
//                     </div>
//                   </SwiperSlide>
//                 ))}
//               </Swiper>
//               {/* Navigation */}
//               <button
//                 onClick={prevMainSlide}
//                 className='absolute left-0.5 lg:left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 lg:p-4 rounded-full z-10 transition-all md:opacity-0 md:group-hover:opacity-100 shadow-xl'
//               >
//                 <ChevronLeft className='w-4 h-4 lg:w-8 lg:h-8' />
//               </button>
//               <button
//                 onClick={nextMainSlide}
//                 className='absolute right-0.5 lg:right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 lg:p-4 rounded-full z-10 transition-all md:opacity-0 md:group-hover:opacity-100 shadow-xl'
//               >
//                 <ChevronRight className='w-4 h-4 lg:w-8 lg:h-8' />
//               </button>
//             </div>
//           </div>

//           {/* === SIDE VERTICAL SLIDER === */}
//           <SideSlider slides={sideSlides} />
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";
import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay, EffectFade } from "swiper/modules";
import SideSlider from "./SideSlider"; // Import the new SideSlider component

import "swiper/css";
import "swiper/css/effect-fade";

// === Types ===
type Slide = {
  id: number;
  brand: string;
  title: string;
  subtitle?: string;
  badge?: string;
  price?: string;
  priceLabel?: string;
  image: string;
  bgColor?: string;
};

// === Data ===
const mainSlides: Slide[] = [
  {
    id: 1,
    brand: "Antec",
    title: "VX310 & VX320",
    badge: "ARGB",
    subtitle: "Mid Tower",
    price: "₹3,479/-",
    priceLabel: "starting at",
    image:
      "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 2,
    brand: "Gaming",
    title: "RTX 4090",
    badge: "NEW",
    subtitle: "Graphics Card",
    price: "₹1,49,999/-",
    priceLabel: "starting at",
    image:
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 3,
    brand: "Intel",
    title: "Core i9-14900K",
    badge: "HOT",
    subtitle: "Processor",
    price: "₹54,999/-",
    priceLabel: "starting at",
    image:
      "https://images.unsplash.com/photo-1672241860863-fab879bd4a07?w=500&auto=format&fit=crop&q=60",
  },
];

const sideSlides: Slide[] = [
  {
    id: 1,
    brand: "Cooler Master",
    title: "LIGHT-UP DEALS",
    subtitle: "GET INSTANT DISCOUNT !",
    badge: "Limited Time",
    image:
      "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&q=80",
  },
  {
    id: 2,
    brand: "Thermaltake",
    title: "Minecube 360 Ultra ARGB",
    subtitle: "Sync CPU Liquid Cooler",
    badge: "NEW ARRIVAL",
    image:
      "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400&q=80",
  },
  {
    id: 3,
    brand: "ASUS",
    title: "ROG STRIX",
    subtitle: "Gaming Motherboards",
    badge: "BEST SELLER",
    image:
      "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&q=80",
  },
  {
    id: 4,
    brand: "Corsair",
    title: "Vengeance RGB",
    subtitle: "DDR5 Memory",
    badge: "FLASH SALE",
    image:
      "https://images.unsplash.com/photo-1541029071515-84cc54f84dc5?w=400&q=80",
  },
];

// === Main HeroSlider Component ===
export default function HeroSlider() {
  const swiperRef = useRef<SwiperType | null>(null);
  // const [currentMainSlide, setCurrentMainSlide] = useState(0);

  const nextMainSlide = () => {
    if (swiperRef.current && swiperRef.current.slideNext) {
      swiperRef.current.slideNext();
    }
  };

  const prevMainSlide = () => {
    if (swiperRef.current && swiperRef.current.slidePrev) {
      swiperRef.current.slidePrev();
    }
  };

  // const mainSlide = mainSlides[currentMainSlide];

  return (
    <div className='w-full bg-gray-50 py-8 sm:py-12'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col lg:flex-row gap-6'>
          {/* === MAIN SLIDER (SWIPER with fade effect) === */}
          <div className='flex-1 relative group rounded-2xl overflow-hidden shadow-2xl'>
            <div className='relative h-[250px] lg:h-[520px]'>
              <Swiper
                onSwiper={(sw) => {
                  swiperRef.current = sw;
                }}
                modules={[Autoplay, EffectFade]}
                autoplay={{ delay: 3000 }}
                effect='fade'
                fadeEffect={{ crossFade: true }}
                loop={true}
                speed={700}
                slidesPerView={1}
                // onSlideChange={(sw) => {
                //   setCurrentMainSlide(sw.realIndex ?? sw.activeIndex ?? 0);
                // }}
                className='h-full'
              >
                {mainSlides.map((slide) => (
                  <SwiperSlide key={slide.id}>
                    {/* Background Image layer */}
                    <div
                      className='absolute inset-0'
                      style={{
                        backgroundImage: `url(${slide.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />
                    <div className='absolute inset-0 bg-black/60' />

                    {/* Content */}
                    <div className='relative h-full flex items-center px-8 lg:px-16 text-white'>
                      <div className='max-w-2xl'>
                        {/* {slide.subtitle && (
                          <p className='text-xs lg:text-2xl mb-4 lg:mb-6 opacity-90'>
                            {slide.subtitle}
                          </p>
                        )} */}
                        <div className='flex flex-col'>
                          {/* {slide.price && (
                            <div className='inline-block w-fit mb-3 lg:mb-6'>
                              <div className='bg-blue-600 text-white sm:px-10 px-4 py-2 sm:py-7 rounded-2xl transform -skew-x-12 shadow-2xl'></div>
                            </div>
                          )} */}

                          {/* <Button className='bg-blue-600 cursor-pointer w-fit hover:bg-blue-700 text-white px-3 py-2 lg:px-10 lg:py-7 text-xs lg:text-xl font-bold rounded-sm tracking-wider lg:rounded-xl shadow-2xl'>
                            SHOP NOW
                          </Button> */}
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              {/* Navigation */}
              <button
                onClick={prevMainSlide}
                className='absolute left-0.5 lg:left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 lg:p-4 rounded-full z-10 transition-all md:opacity-0 md:group-hover:opacity-100 shadow-xl'
              >
                <ChevronLeft className='w-4 h-4 lg:w-8 lg:h-8' />
              </button>
              <button
                onClick={nextMainSlide}
                className='absolute right-0.5 lg:right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 lg:p-4 rounded-full z-10 transition-all md:opacity-0 md:group-hover:opacity-100 shadow-xl'
              >
                <ChevronRight className='w-4 h-4 lg:w-8 lg:h-8' />
              </button>
            </div>
          </div>

          {/* === SIDE VERTICAL SLIDER === */}
          <SideSlider slides={sideSlides} />
        </div>
      </div>
    </div>
  );
}
