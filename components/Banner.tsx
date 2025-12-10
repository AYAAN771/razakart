// "use client"
// import React, { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { motion } from 'framer-motion';

// // --- Data Definitions (Same as before) ---
// const mainSlides = [
//   {
//     id: 1,
//     brand: 'Antec',
//     title: 'VX310 & VX320',
//     badge: 'ARGB',
//     subtitle: 'Mid Tower',
//     price: '₹3,479/-',
//     priceLabel: 'starting at',
//     image: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=800&q=80',
//     bgColor: 'from-gray-700 to-gray-900'
//   },
//   {
//     id: 2,
//     brand: 'Gaming',
//     title: 'RTX 4090',
//     badge: 'NEW',
//     subtitle: 'Graphics Card',
//     price: '₹1,49,999/-',
//     priceLabel: 'starting at',
//     image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=800&q=80',
//     bgColor: 'from-green-700 to-green-900'
//   },
//   {
//     id: 3,
//     brand: 'Intel',
//     title: 'Core i9-14900K',
//     badge: 'HOT',
//     subtitle: 'Processor',
//     price: '₹54,999/-',
//     priceLabel: 'starting at',
//     image: 'https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=800&q=80',
//     bgColor: 'from-blue-700 to-blue-900'
//   }
// ];

// const sideSlides = [
//   {
//     id: 1,
//     brand: 'Cooler Master',
//     title: 'LIGHT-UP DEALS',
//     subtitle: 'GET INSTANT DISCOUNT !',
//     badge: 'Limited Time',
//     image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&q=80',
//     bgColor: 'from-blue-600 to-blue-800'
//   },
//   {
//     id: 2,
//     brand: 'Thermaltake',
//     title: 'Minecube 360 Ultra ARGB',
//     subtitle: 'Sync CPU Liquid Cooler',
//     badge: 'NEW ARRIVAL',
//     image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400&q=80',
//     bgColor: 'from-teal-600 to-teal-800'
//   },
//   {
//     id: 3,
//     brand: 'ASUS',
//     title: 'ROG STRIX',
//     subtitle: 'Gaming Motherboards',
//     badge: 'BEST SELLER',
//     image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&q=80',
//     bgColor: 'from-red-600 to-red-800'
//   },
//   {
//     id: 4,
//     brand: 'Corsair',
//     title: 'Vengeance RGB',
//     subtitle: 'DDR5 Memory',
//     badge: 'FLASH SALE',
//     image: 'https://images.unsplash.com/photo-1541029071515-84cc54f84dc5?w=400&q=80',
//     bgColor: 'from-purple-600 to-purple-800'
//   }
// ];

// // --- New Component for Side Banner ---
// const SideBanner = ({ slide }) => {
//     if (!slide) return null;

//     return (
//         <div className="flex-1 relative rounded-lg overflow-hidden">
//             <div className={`relative h-[200px] lg:h-[245px] bg-gradient-to-br `}>
//                 {/* Background Image */}
//                 <div 
//                   className="absolute inset-0 opacity-80"
//                   style={{
//                     backgroundImage: `url(${slide.image})`,
//                     backgroundSize: 'cover',
//                     backgroundPosition: 'center'
//                   }}
//                 />
                
//                 {/* Content */}
//                 <div className="relative h-full flex flex-col justify-between p-6 text-white">
//                   <div>
//                     <p className="text-xs font-semibold mb-2">{slide.brand}</p>
//                     <h3 className="text-xl lg:text-2xl font-bold mb-1">{slide.title}</h3>
//                     <p className="text-sm mb-3">{slide.subtitle}</p>
//                     <span className="inline-block bg-yellow-400 text-black text-xs px-3 py-1 rounded-full font-bold">
//                       {slide.badge}
//                     </span>
//                   </div>
//                   <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg w-full">
//                     SHOP NOW
//                   </Button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// // --- Main HeroSlider Component ---
// export default function HeroSlider() {
//   const [currentMainSlide, setCurrentMainSlide] = useState(0);
//   const [currentSideSlide, setCurrentSideSlide] = useState(0);

//   // Auto-play main slider
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentMainSlide((prev) => (prev + 1) % mainSlides.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   // Auto-play side slider
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSideSlide((prev) => (prev + 1) % sideSlides.length);
//     }, 4000);
//     return () => clearInterval(timer);
//   }, []);

//   // Navigation handlers for Main Slider
//   const nextMainSlide = () => {
//     setCurrentMainSlide((prev) => (prev + 1) % mainSlides.length);
//   };

//   const prevMainSlide = () => {
//     setCurrentMainSlide((prev) => (prev - 1 + mainSlides.length) % mainSlides.length);
//   };

//   // Navigation handlers for Side Slider
//   const nextSideSlide = () => {
//     // Only move if there are enough slides to cycle
//     if (sideSlides.length > 2) {
//         setCurrentSideSlide((prev) => (prev + 1) % sideSlides.length);
//     }
//   };

//   const prevSideSlide = () => {
//     if (sideSlides.length > 2) {
//         setCurrentSideSlide((prev) => (prev - 1 + sideSlides.length) % sideSlides.length);
//     }
//   };

//   const mainSlide = mainSlides[currentMainSlide];
//   const topSideSlide = sideSlides[currentSideSlide];
//   const bottomSideSlide = sideSlides[(currentSideSlide + 1) % sideSlides.length];

//   // Framer Motion variants for side navigation buttons
//   const sideNavVariants = {
//     hidden: { opacity: 0, scale: 0.9 },
//     visible: { opacity: 1, scale: 1 }
//   };


//   return (
//     <div className="w-full bg-gray-100 py-4 px-4">
//       <div className="max-w-7xl mx-auto">
//         <div className="flex flex-col lg:flex-row gap-4">

//           {/* 1. Main Slider */}
//           <div className="flex-1 relative group">
//             <div className={`relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden `}>
//               {/* Background Image */}
//               <div 
//                 className="absolute inset-0 opacity-70"
//                 style={{
//                   backgroundImage: `url(${mainSlide.image})`,
//                   backgroundSize: 'cover',
//                   backgroundPosition: 'center'
//                 }}
//               />
              
//               {/* Content */}
//               <div className="relative h-full flex items-center px-8 lg:px-16">
//                 <div className="text-white max-w-xl">
//                   {/* Brand Logo */}
//                   <div className="mb-4">
//                     <span className="text-2xl font-bold tracking-wider">{mainSlide.brand}</span>
//                   </div>

//                   {/* Title */}
//                   <h2 className="text-4xl lg:text-6xl font-bold mb-2 flex items-center gap-4">
//                     {mainSlide.title}
//                     <span className="bg-white text-black text-sm lg:text-base px-4 py-1 rounded-full font-semibold">
//                       {mainSlide.badge}
//                     </span>
//                   </h2>

//                   {/* Subtitle */}
//                   <p className="text-xl lg:text-2xl mb-6">{mainSlide.subtitle}</p>

//                   {/* Price Badge */}
//                   <div className="relative inline-block mb-6">
//                     <div className="bg-blue-600 text-white px-8 py-6 rounded-lg transform -skew-x-6 shadow-2xl">
//                       <div className="transform skew-x-6">
//                         <p className="text-sm mb-1">{mainSlide.priceLabel}</p>
//                         <p className="text-4xl font-bold">{mainSlide.price}</p>
//                       </div>
//                     </div>
//                     {/* Decorative elements */}
//                     {/* <div className="absolute -left-4 top-1/2 w-0 h-0 border-t-[30px] border-t-transparent border-r-[30px] border-r-yellow-400 border-b-[30px] border-b-transparent transform -translate-y-1/2"></div>
//                     <div className="absolute -right-4 top-1/2 w-0 h-0 border-t-[30px] border-t-transparent border-l-[30px] border-l-red-500 border-b-[30px] border-b-transparent transform -translate-y-1/2"></div> */}
//                   </div>

//                   {/* CTA Button */}
//                   <div>
//                     <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg font-bold rounded-lg shadow-xl">
//                       SHOP NOW
//                     </Button>
//                   </div>
//                 </div>
//               </div>

//               {/* Navigation Arrows */}
//               {/* <button
//                 onClick={prevMainSlide}
//                 className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10"
//               >
//                 <ChevronLeft className="w-6 h-6" />
//               </button>
//               <button
//                 onClick={nextMainSlide}
//                 className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10"
//               >
//                 <ChevronRight className="w-6 h-6" />
//               </button> */}

//               {/* Navigation Arrows – Visible on Mobile, Hover-only on Desktop */}
// <button
//   onClick={prevMainSlide}
//   className="absolute left-0 sm:left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-4 rounded-full z-10 transition-all
//     md:opacity-0 md:group-hover:opacity-100   // Hidden by default on md+, show on hover
//     sm:opacity-100                           // Always visible on mobile (below md)
//     shadow-xl"
// >
//   <ChevronLeft className="w-7 h-7" />
// </button>

// <button
//   onClick={nextMainSlide}
//   className="absolute right-0 sm:right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-4 rounded-full z-10 transition-all
//     md:opacity-0 md:group-hover:opacity-100   // Hidden by default on desktop, show on hover
//     sm:opacity-100                            // Always visible on mobile
//     shadow-xl"
// >
//   <ChevronRight className="w-7 h-7" />
// </button>

//               {/* Dots */}
//               {/* <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
//                 {mainSlides.map((_, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setCurrentMainSlide(index)}
//                     className={`w-3 h-3 rounded-full transition-all ${
//                       index === currentMainSlide ? 'bg-white w-8' : 'bg-white/50'
//                     }`}
//                   />
//                 ))}
//               </div> */}
//             </div>
//           </div>

//           {/* 2. Side Vertical Slider */}
//           <motion.div 
//             className="w-full lg:w-80 flex flex-row lg:flex-col gap-4 relative group"
//             initial="hidden"
//             whileHover="visible"
//           >
//             {/* Top and Bottom Side Banners */}
//             <SideBanner slide={topSideSlide} />
//             <SideBanner slide={bottomSideSlide} />

//             {/* Navigation Arrows for Side Slider - Visible on Hover */}
//             {/* Previous (Up) Button */}
//             <motion.button
//               variants={sideNavVariants}
//               onClick={prevSideSlide}
//               className="absolute left-1/2 -translate-x-1/2 top-0 mt-2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-20"
//               aria-label="Previous Side Slide"
//             >
//               <ChevronLeft className="w-5 h-5 lg:w-4 lg:h-4 rotate-90" />
//             </motion.button>

//             {/* Next (Down) Button */}
//             <motion.button
//               variants={sideNavVariants}
//               onClick={nextSideSlide}
//               className="absolute left-1/2 -translate-x-1/2 bottom-0 mb-2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-20"
//               aria-label="Next Side Slide"
//             >
//               <ChevronRight className="w-5 h-5 lg:w-4 lg:h-4 rotate-90" />
//             </motion.button>
            
//             {/* Dots/Indicator for Side Slider - Optional, simplified for two visible slides */}
//             {/* <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex lg:flex-col gap-2 p-4 z-10">
//                 {sideSlides.map((_, index) => (
//                     // Only show dot if the slide is currently visible (top or bottom)
//                     (index === currentSideSlide || index === (currentSideSlide + 1) % sideSlides.length) ? (
//                         <div
//                             key={index}
//                             className={`w-2 h-2 rounded-full transition-all ${
//                                 index === currentSideSlide ? 'bg-white w-4 lg:h-4' : 'bg-white/50'
//                             } ${index === (currentSideSlide + 1) % sideSlides.length && 'lg:hidden'}`} // Hide the second dot on large screens for simplicity
//                         />
//                     ) : null
//                 ))}
//             </div> */}
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// }

//////////////////////////////

// "use client";

// import React, { useState, useEffect } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { motion } from "framer-motion";

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
//     image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wc3xlbnwwfHwwfHx8MA%3D%3D",
//     // bgColor: "from-gray-700 to-gray-900",
//   },
//   {
//     id: 2,
//     brand: "Gaming",
//     title: "RTX 4090",
//     badge: "NEW",
//     subtitle: "Graphics Card",
//     price: "₹1,49,999/-",
//     priceLabel: "starting at",
//     image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=800&q=80",
//     // bgColor: "from-green-700 to-green-900",
//   },
//   {
//     id: 3,
//     brand: "Intel",
//     title: "Core i9-14900K",
//     badge: "HOT",
//     subtitle: "Processor",
//     price: "₹54,999/-",
//     priceLabel: "starting at",
//     image: "https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=800&q=80",
//     // bgColor: "from-blue-700 to-blue-900",
//   },
// ];

// const sideSlides: Slide[] = [
//   {
//     id: 1,
//     brand: "Cooler Master",
//     title: "LIGHT-UP DEALS",
//     subtitle: "GET INSTANT DISCOUNT !",
//     badge: "Limited Time",
//     image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&q=80",
//   },
//   {
//     id: 2,
//     brand: "Thermaltake",
//     title: "Minecube 360 Ultra ARGB",
//     subtitle: "Sync CPU Liquid Cooler",
//     badge: "NEW ARRIVAL",
//     image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400&q=80",
//   },
//   {
//     id: 3,
//     brand: "ASUS",
//     title: "ROG STRIX",
//     subtitle: "Gaming Motherboards",
//     badge: "BEST SELLER",
//     image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&q=80",
//   },
//   {
//     id: 4,
//     brand: "Corsair",
//     title: "Vengeance RGB",
//     subtitle: "DDR5 Memory",
//     badge: "FLASH SALE",
//     image: "https://images.unsplash.com/photo-1541029071515-84cc54f84dc5?w=400&q=80",
//   },
// ];

// // === Side Banner Component ===
// const SideBanner = ({ slide }: { slide: Slide }) => {
//   return (
//     <div className="flex-1 relative rounded-lg overflow-hidden cursor-pointer group">
//       <div className="relative h-[160px] lg:h-[245px] bg-gradient-to-br from-black/40 to-transparent">
//         {/* Background Image */}
//         <div
//           className="absolute inset-0 opacity-70 group-hover:opacity-90 transition-opacity"
//           style={{
//             backgroundImage: `url(${slide.image})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         />

//         {/* Content */}
//         <div className="relative h-full lg:h-full flex flex-col justify-between p-6 text-white">
//           <div>
//             <p className="text-xs font-bold tracking-wider mb-1">{slide.brand}</p>
//             <h3 className="text-lg lg:text-xl font-bold mb-1 leading-tight">
//               {slide.title}
//             </h3>
//             {slide.subtitle && (
//               <p className="text-xs lg:text-sm opacity-90">{slide.subtitle}</p>
//             )}
//             {slide.badge && (
//               <span className="inline-block mt-3 bg-yellow-400 text-black text-xs px-3 py-1.5 rounded-full font-bold">
//                 {slide.badge}
//               </span>
//             )}
//           </div>

//           <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg w-full mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
//             SHOP NOW
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// // === Main HeroSlider Component ===
// export default function HeroSlider() {
//   const [currentMainSlide, setCurrentMainSlide] = useState(0);
//   const [currentSideSlide, setCurrentSideSlide] = useState(0);

//   // Auto-play main slider
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentMainSlide((prev) => (prev + 1) % mainSlides.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   // Auto-play side slider
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSideSlide((prev) => (prev + 1) % sideSlides.length);
//     }, 4000);
//     return () => clearInterval(timer);
//   }, []);

//   // Navigation handlers
//   const nextMainSlide = () => {
//     setCurrentMainSlide((prev) => (prev + 1) % mainSlides.length);
//   };

//   const prevMainSlide = () => {
//     setCurrentMainSlide((prev) => (prev - 1 + mainSlides.length) % mainSlides.length);
//   };

//   const nextSideSlide = () => {
//     setCurrentSideSlide((prev) => (prev + 1) % sideSlides.length);
//   };

//   const prevSideSlide = () => {
//     setCurrentSideSlide((prev) => (prev - 1 + sideSlides.length) % sideSlides.length);
//   };

//   const mainSlide = mainSlides[currentMainSlide];
//   const topSideSlide = sideSlides[currentSideSlide];
//   const bottomSideSlide = sideSlides[(currentSideSlide + 1) % sideSlides.length];

//   // Framer Motion variants for side nav buttons
//   const sideNavVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: { opacity: 1, scale: 1 },
//   };

//   return (
//     <div className="w-full bg-gray-100 py-6 px-4">
//       <div className="max-w-7xl mx-auto">
//         <div className="flex flex-col lg:flex-row gap-6">

//           {/* === MAIN SLIDER === */}
//           <div className="flex-1 relative group rounded-2xl overflow-hidden shadow-2xl">
//             <div className="relative h-[250px] lg:h-[520px]">
//               {/* Background Image */}
//               <div
//                 className="absolute inset-0 opacity-75"
//                 style={{
//                   backgroundImage: `url(${mainSlide.image})`,
//                   backgroundSize: "cover",
//                   backgroundPosition: "center",
//                 }}
//               />

//               {/* Gradient Overlay */}
//               <div className={`absolute inset-0 bg-gradient-to-r ${mainSlide.bgColor || "from-black/60"}`} />

//               {/* Content */}
//               <div className="relative h-full flex items-center px-8 lg:px-16 text-white">
//                 <div className="max-w-2xl ">
//                   <p className="text-xl  lg:text-2xl font-bold xl:tracking-wider mb-1 sm:mb-3">{mainSlide.brand}</p>
//                   <h2 className="text-xl  sm:text-5xl lg:text-5xl   font-extrabold mb-0 sm:mb-3 lg:mb-4 lg:leading-tight">
//                     {mainSlide.title}
//                     {mainSlide.badge && (
//                       <div className=" inline-block ">
//                       <span className="ml-4 bg-white text-black text-xs  px-3 py-0.5  lg:text-lg lg:px-5 lg:py-2 rounded-full font-bold">
//                         {mainSlide.badge}
//                       </span>
//                       </div>
                        
//                     )}
//                   </h2>
//                   {mainSlide.subtitle && (
//                     <p className="text-xs lg:text-2xl mb-4 lg:mb-6 opacity-90">{mainSlide.subtitle}</p>
//                   )}

//                   {/* Price Badge */}
//                <div className="flex flex-col">
//    {mainSlide.price && (
//                     <div className="inline-block w-fit mb-3 lg:mb-6">
//                       <div className="bg-blue-600 text-white sm:px-10 px-4 py-2 sm:py-7 rounded-2xl transform -skew-x-12 shadow-2xl">
//                         <div className="transform skew-x-12 lg:skew-x-12 text-center">
//                           <p className="text-xs lg:text-sm font-medium">{mainSlide.priceLabel}</p>
//                           <p className="text-sm lg:text-4xl xl:text-5xl font-bold">{mainSlide.price}</p>
//                         </div>
//                       </div>
//                     </div>
//                   )}

//                   <Button className="bg-blue-600 w-fit hover:bg-blue-700 text-white px-3 py-2 lg:px-10 lg:py-7 text-xs lg:text-xl font-bold rounded-sm tracking-wider  lg:rounded-xl shadow-2xl">
//                     SHOP NOW
//                   </Button>
//                </div>
//                 </div>
//               </div>

//               {/* Navigation Arrows */}
//               <button
//                 onClick={prevMainSlide}
//                 className="absolute left-0.5 lg:left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 lg:p-4 rounded-full z-10 transition-all md:opacity-0 md:group-hover:opacity-100 shadow-xl"
//               >
//                 <ChevronLeft className="w-4 h-4 lg:w-8 lg:h-8" />
//               </button>
//               <button
//                 onClick={nextMainSlide}
//                 className="absolute right-0.5 lg:right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 lg:p-4 rounded-full z-10 transition-all md:opacity-0 md:group-hover:opacity-100 shadow-xl"
//               >
//                 <ChevronRight className="w-4 h-4 lg:w-8 lg:h-8" />
//               </button>
//             </div>
//           </div>

//           {/* === SIDE VERTICAL SLIDER === */}
//           <motion.div
//             className="w-full lg:w-80 flex flex-row lg:flex-col gap-4 relative group"
//             initial="hidden"
//             whileHover="visible"
//           >
//             <SideBanner slide={topSideSlide} />
//             <SideBanner slide={bottomSideSlide} />

//             {/* Up Button */}
//             <motion.button
//               variants={sideNavVariants}
//               onClick={prevSideSlide}
//               className="absolute left-1/2 -translate-x-1/2 top-2 bg-black/60 hover:bg-black/80 text-white p-2.5 rounded-full z-20 shadow-lg"
//               aria-label="Previous side slide"
//             >
//               <ChevronLeft className="w-5 h-5 rotate-90" />
//             </motion.button>

//             {/* Down Button */}
//             <motion.button
//               variants={sideNavVariants}
//               onClick={nextSideSlide}
//               className="absolute left-1/2 -translate-x-1/2 bottom-2 bg-black/60 hover:bg-black/80 text-white p-2.5 rounded-full z-20 shadow-lg"
//               aria-label="Next side slide"
//             >
//               <ChevronRight className="w-5 h-5 rotate-90" />
//             </motion.button>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// }



// "use client";

// import React, { useState, useEffect } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { motion } from "framer-motion";

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
//     image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wc3xlbnwwfHwwfHx8MA%3D%3D",
//   },
//   {
//     id: 2,
//     brand: "Gaming",
//     title: "RTX 4090",
//     badge: "NEW",
//     subtitle: "Graphics Card",
//     price: "₹1,49,999/-",
//     priceLabel: "starting at",
//     image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxhcHRvcHN8ZW58MHx8MHx8fDA%3D",
//   },
//   {
//     id: 3,
//     brand: "Intel",
//     title: "Core i9-14900K",
//     badge: "HOT",
//     subtitle: "Processor",
//     price: "₹54,999/-",
//     priceLabel: "starting at",
//     image: "https://images.unsplash.com/photo-1672241860863-fab879bd4a07?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGxhcHRvcHN8ZW58MHx8MHx8fDA%3D",
//   },
// ];

// const sideSlides: Slide[] = [
//   {
//     id: 1,
//     brand: "Cooler Master",
//     title: "LIGHT-UP DEALS",
//     subtitle: "GET INSTANT DISCOUNT !",
//     badge: "Limited Time",
//     image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&q=80",
//   },
//   {
//     id: 2,
//     brand: "Thermaltake",
//     title: "Minecube 360 Ultra ARGB",
//     subtitle: "Sync CPU Liquid Cooler",
//     badge: "NEW ARRIVAL",
//     image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400&q=80",
//   },
//   {
//     id: 3,
//     brand: "ASUS",
//     title: "ROG STRIX",
//     subtitle: "Gaming Motherboards",
//     badge: "BEST SELLER",
//     image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&q=80",
//   },
//   {
//     id: 4,
//     brand: "Corsair",
//     title: "Vengeance RGB",
//     subtitle: "DDR5 Memory",
//     badge: "FLASH SALE",
//     image: "https://images.unsplash.com/photo-1541029071515-84cc54f84dc5?w=400&q=80",
//   },
// ];

// // === Side Banner Component ===
// const SideBanner = ({ slide }: { slide: Slide }) => {
//   return (
//     <div className="flex-1 relative rounded-lg overflow-hidden cursor-pointer group">
//       <div className="relative h-[160px] lg:h-[245px] bg-gradient-to-br from-black/40 to-transparent">

//         {/* Background Image */}
//         <div
//           className="absolute inset-0 opacity-70 group-hover:opacity-90 transition-opacity"
//           style={{
//             backgroundImage: `url(${slide.image})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         />

//         {/* BLACK OVERLAY */}
//         <div className="absolute inset-0 bg-black/50" />

//         {/* Content */}
//         <div className="relative h-full lg:h-full flex flex-col justify-between p-6 text-white">
//           <div>
//             <p className="text-xs font-bold tracking-wider mb-1">{slide.brand}</p>
//             <h3 className="text-lg lg:text-xl font-bold mb-1 leading-tight">
//               {slide.title}
//             </h3>
//             {slide.subtitle && (
//               <p className="text-xs lg:text-sm opacity-90">{slide.subtitle}</p>
//             )}
//             {slide.badge && (
//               <span className="inline-block mt-3 bg-gray-100 text-black text-xs px-3 py-1.5 rounded-full font-bold">
//                 {slide.badge}
//               </span>
//             )}
//           </div>

//           {/* SHOP NOW ALWAYS VISIBLE */}
//           <Button className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-bold rounded-lg w-full mt-4">
//             SHOP NOW
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// // === Main HeroSlider Component ===
// export default function HeroSlider() {
//   const [currentMainSlide, setCurrentMainSlide] = useState(0);
//   const [currentSideSlide, setCurrentSideSlide] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentMainSlide((prev) => (prev + 1) % mainSlides.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSideSlide((prev) => (prev + 1) % sideSlides.length);
//     }, 4000);
//     return () => clearInterval(timer);
//   }, []);

//   const nextMainSlide = () =>
//     setCurrentMainSlide((prev) => (prev + 1) % mainSlides.length);

//   const prevMainSlide = () =>
//     setCurrentMainSlide((prev) => (prev - 1 + mainSlides.length) % mainSlides.length);

//   const nextSideSlide = () =>
//     setCurrentSideSlide((prev) => (prev + 1) % sideSlides.length);

//   const prevSideSlide = () =>
//     setCurrentSideSlide((prev) => (prev - 1 + sideSlides.length) % sideSlides.length);

//   const mainSlide = mainSlides[currentMainSlide];
//   const topSideSlide = sideSlides[currentSideSlide];
//   const bottomSideSlide = sideSlides[(currentSideSlide + 1) % sideSlides.length];

//   const sideNavVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: { opacity: 1, scale: 1 },
//   };

//   return (
//     <div className="w-full bg-gray-100 py-6 px-4">
//       <div className="max-w-7xl mx-auto">
//         <div className="flex flex-col lg:flex-row gap-6">

//           {/* === MAIN SLIDER === */}
//           <div className="flex-1 relative group rounded-2xl overflow-hidden shadow-2xl">
//             <div className="relative h-[250px] lg:h-[520px]">

//               {/* Background Image */}
//               <div
//                 className="absolute inset-0 opacity-75"
//                 style={{
//                   backgroundImage: `url(${mainSlide.image})`,
//                   backgroundSize: "cover",
//                   backgroundPosition: "center",
//                 }}
//               />

//               {/* BLACK OVERLAY */}
//               <div className="absolute inset-0 bg-black/60" />

//               {/* Gradient Overlay */}
//               {/* <div className={`absolute inset-0 bg-gradient-to-r ${mainSlide.bgColor || "from-black/60"}`} /> */}

//               {/* Content */}
//               <div className="relative h-full flex items-center px-8 lg:px-16 text-white">
//                 <div className="max-w-2xl ">
//                   <p className="text-xl  lg:text-2xl font-bold xl:tracking-wider mb-1 sm:mb-3">{mainSlide.brand}</p>
//                   <h2 className="text-xl  sm:text-5xl lg:text-5xl   font-extrabold mb-0 sm:mb-3 lg:mb-4 lg:leading-tight">
//                     {mainSlide.title}
//                     {mainSlide.badge && (
//                       <div className=" inline-block ">
//                         <span className="ml-4 bg-white text-black text-xs  px-3 py-0.5  lg:text-lg lg:px-5 lg:py-2 rounded-full font-bold">
//                           {mainSlide.badge}
//                         </span>
//                       </div>
//                     )}
//                   </h2>
//                   {mainSlide.subtitle && (
//                     <p className="text-xs lg:text-2xl mb-4 lg:mb-6 opacity-90">{mainSlide.subtitle}</p>
//                   )}

//                   {/* Price Badge */}
//                   <div className="flex flex-col">
//                     {mainSlide.price && (
//                       <div className="inline-block w-fit mb-3 lg:mb-6">
//                         <div className="bg-blue-600 text-white sm:px-10 px-4 py-2 sm:py-7 rounded-2xl transform -skew-x-12 shadow-2xl">
//                           <div className="transform skew-x-12 lg:skew-x-12 text-center">
//                             <p className="text-xs lg:text-sm font-medium">{mainSlide.priceLabel}</p>
//                             <p className="text-sm lg:text-4xl xl:text-5xl font-bold">{mainSlide.price}</p>
//                           </div>
//                         </div>
//                       </div>
//                     )}

//                     <Button className="bg-blue-600 cursor-pointer w-fit hover:bg-blue-700 text-white px-3 py-2 lg:px-10 lg:py-7 text-xs lg:text-xl font-bold rounded-sm tracking-wider  lg:rounded-xl shadow-2xl">
//                       SHOP NOW
//                     </Button>
//                   </div>
//                 </div>
//               </div>

//               {/* Navigation */}
//               <button
//                 onClick={prevMainSlide}
//                 className="absolute left-0.5 lg:left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 lg:p-4 rounded-full z-10 transition-all md:opacity-0 md:group-hover:opacity-100 shadow-xl"
//               >
//                 <ChevronLeft className="w-4 h-4 lg:w-8 lg:h-8" />
//               </button>

//               <button
//                 onClick={nextMainSlide}
//                 className="absolute right-0.5 lg:right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 lg:p-4 rounded-full z-10 transition-all md:opacity-0 md:group-hover:opacity-100 shadow-xl"
//               >
//                 <ChevronRight className="w-4 h-4 lg:w-8 lg:h-8" />
//               </button>
//             </div>
//           </div>

//           {/* === SIDE VERTICAL SLIDER === */}
//           <motion.div
//             className="w-full lg:w-80 flex flex-row lg:flex-col gap-4 relative group"
//             initial="hidden"
//             whileHover="visible"
//           >
//             <SideBanner slide={topSideSlide} />
//             <SideBanner slide={bottomSideSlide} />

//             <motion.button
//               variants={sideNavVariants}
//               onClick={prevSideSlide}
//               className="absolute left-1/2 -translate-x-1/2 top-2 bg-black/60 hover:bg-black/80 text-white p-2.5 rounded-full z-20 shadow-lg"
//             >
//               <ChevronLeft className="w-5 h-5 rotate-90" />
//             </motion.button>

//             <motion.button
//               variants={sideNavVariants}
//               onClick={nextSideSlide}
//               className="absolute left-1/2 -translate-x-1/2 bottom-2 bg-black/60 hover:bg-black/80 text-white p-2.5 rounded-full z-20 shadow-lg"
//             >
//               <ChevronRight className="w-5 h-5 rotate-90" />
//             </motion.button>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// }


// "use client";

// import React, { useRef, useState, useEffect } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { Button } from "@/components/ui/button";

// // Swiper
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, EffectFade } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/effect-fade";
// import "swiper/css";
// import "swiper/css/effect-fade";
// import VerticalSlider from "./VerticalSlider";

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
//     image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&q=80",
//   },
//   {
//     id: 2,
//     brand: "Thermaltake",
//     title: "Minecube 360 Ultra ARGB",
//     subtitle: "Sync CPU Liquid Cooler",
//     badge: "NEW ARRIVAL",
//     image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400&q=80",
//   },
//   {
//     id: 3,
//     brand: "ASUS",
//     title: "ROG STRIX",
//     subtitle: "Gaming Motherboards",
//     badge: "BEST SELLER",
//     image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&q=80",
//   },
//   {
//     id: 4,
//     brand: "Corsair",
//     title: "Vengeance RGB",
//     subtitle: "DDR5 Memory",
//     badge: "FLASH SALE",
//     image: "https://images.unsplash.com/photo-1541029071515-84cc54f84dc5?w=400&q=80",
//   },
// ];

// // register modules
// // SwiperCore.use([Autoplay, EffectFade]);

// // === Side Banner Component ===
// const SideBanner = ({ slide }: { slide: Slide }) => {
//   return (
//     <div className="flex-1 relative rounded-lg overflow-hidden cursor-pointer group">
//       <div className="relative h-[160px] lg:h-[245px] bg-gradient-to-br from-black/40 to-transparent">
//         {/* Background Image (stable layer) */}
//         <div
//           className="absolute inset-0"
//           style={{
//             backgroundImage: `url(${slide.image})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         />

//         {/* BLACK OVERLAY */}
//         <div className="absolute inset-0 bg-black/50" />

//         {/* Content */}
//         <div className="relative h-full lg:h-full flex flex-col justify-between p-6 text-white">
//           <div>
//             <p className="text-xs font-bold tracking-wider mb-1">{slide.brand}</p>
//             <h3 className="text-lg lg:text-xl font-bold mb-1 leading-tight">
//               {slide.title}
//             </h3>
//             {slide.subtitle && (
//               <p className="text-xs lg:text-sm opacity-90">{slide.subtitle}</p>
//             )}
//             {slide.badge && (
//               <span className="inline-block mt-3 bg-gray-100 text-black text-xs px-3 py-1.5 rounded-full font-bold">
//                 {slide.badge}
//               </span>
//             )}
//           </div>

//           {/* SHOP NOW ALWAYS VISIBLE */}
//           <Button className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-bold rounded-lg w-full mt-4">
//             SHOP NOW
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// // === Main HeroSlider Component ===
// export default function HeroSlider() {
//   const swiperRef = useRef<any>(null);
//   const [currentMainSlide, setCurrentMainSlide] = useState(0);
//   const [currentSideSlide, setCurrentSideSlide] = useState(0);

//   // side slider autoplay (unchanged)
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSideSlide((prev) => (prev + 1) % sideSlides.length);
//     }, 4000);
//     return () => clearInterval(timer);
//   }, []);

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

//   const nextSideSlide = () =>
//     setCurrentSideSlide((prev) => (prev + 1) % sideSlides.length);

//   const prevSideSlide = () =>
//     setCurrentSideSlide((prev) => (prev - 1 + sideSlides.length) % sideSlides.length);

//   const mainSlide = mainSlides[currentMainSlide];
//   const topSideSlide = sideSlides[currentSideSlide];
//   const bottomSideSlide = sideSlides[(currentSideSlide + 1) % sideSlides.length];

//   const sideNavVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: { opacity: 1, scale: 1 },
//   };

//   return (
//     <div className="w-full bg-gray-100 py-6 px-4">
//       <div className="max-w-7xl mx-auto">
//         <div className="flex flex-col lg:flex-row gap-6">
//           {/* === MAIN SLIDER (SWIPER with fade effect) === */}
//           <div className="flex-1 relative group rounded-2xl overflow-hidden shadow-2xl">
//             <div className="relative h-[250px] lg:h-[520px]">
//               <Swiper
//                 onSwiper={(sw) => {
//                   // store swiper api (we use it for prev/next)
//                   swiperRef.current = sw;
//                 }}
//                  modules={[Autoplay, EffectFade]}
//   autoplay={{ delay: 3000 }}
//   effect="fade"
//   fadeEffect={{ crossFade: true }}
                
//                 loop={true}
//                 speed={700}
//                 slidesPerView={1}
//                 onSlideChange={(sw) => {
//                   setCurrentMainSlide(sw.realIndex ?? sw.activeIndex ?? 0);
//                 }}
//                 className="h-full"
//               >
//                 {mainSlides.map((slide) => (
//                   <SwiperSlide key={slide.id}>
//                     {/* Background Image layer */}
//                     <div
//                       className="absolute inset-0"
//                       style={{
//                         backgroundImage: `url(${slide.image})`,
//                         backgroundSize: "cover",
//                         backgroundPosition: "center",
//                       }}
//                     />

//                     {/* BLACK OVERLAY */}
                    // <div className="absolute inset-0 bg-black/60" />

//                     {/* Content (kept exactly as before) */}
//                     <div className="relative h-full flex items-center px-8 lg:px-16 text-white">
//                       <div className="max-w-2xl ">
//                         <p className="text-xl  lg:text-2xl font-bold xl:tracking-wider mb-1 sm:mb-3">
//                           {slide.brand}
//                         </p>
//                         <h2 className="text-xl  sm:text-5xl lg:text-5xl   font-extrabold mb-0 sm:mb-3 lg:mb-4 lg:leading-tight">
//                           {slide.title}
//                           {slide.badge && (
//                             <div className=" inline-block ">
//                               <span className="ml-4 bg-white text-black text-xs  px-3 py-0.5  lg:text-lg lg:px-5 lg:py-2 rounded-full font-bold">
//                                 {slide.badge}
//                               </span>
//                             </div>
//                           )}
//                         </h2>
//                         {slide.subtitle && (
//                           <p className="text-xs lg:text-2xl mb-4 lg:mb-6 opacity-90">
//                             {slide.subtitle}
//                           </p>
//                         )}

//                         <div className="flex flex-col">
//                           {slide.price && (
//                             <div className="inline-block w-fit mb-3 lg:mb-6">
//                               <div className="bg-blue-600 text-white sm:px-10 px-4 py-2 sm:py-7 rounded-2xl transform -skew-x-12 shadow-2xl">
//                                 <div className="transform skew-x-12 lg:skew-x-12 text-center">
//                                   <p className="text-xs lg:text-sm font-medium">
//                                     {slide.priceLabel}
//                                   </p>
//                                   <p className="text-sm lg:text-4xl xl:text-5xl font-bold">
//                                     {slide.price}
//                                   </p>
//                                 </div>
//                               </div>
//                             </div>
//                           )}

//                           <Button className="bg-blue-600 cursor-pointer w-fit hover:bg-blue-700 text-white px-3 py-2 lg:px-10 lg:py-7 text-xs lg:text-xl font-bold rounded-sm tracking-wider  lg:rounded-xl shadow-2xl">
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
//                 className="absolute left-0.5 lg:left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 lg:p-4 rounded-full z-10 transition-all md:opacity-0 md:group-hover:opacity-100 shadow-xl"
//               >
//                 <ChevronLeft className="w-4 h-4 lg:w-8 lg:h-8" />
//               </button>

//               <button
//                 onClick={nextMainSlide}
//                 className="absolute right-0.5 lg:right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 lg:p-4 rounded-full z-10 transition-all md:opacity-0 md:group-hover:opacity-100 shadow-xl"
//               >
//                 <ChevronRight className="w-4 h-4 lg:w-8 lg:h-8" />
//               </button>
//             </div>
//           </div>

//           {/* === SIDE VERTICAL SLIDER === */}
//           <div className="w-full lg:w-80 flex flex-row lg:flex-col gap-4 relative group">
//             <SideBanner slide={topSideSlide} />
//             <SideBanner slide={bottomSideSlide} />

//             <button
//               onClick={prevSideSlide}
//               className="absolute left-1/2 -translate-x-1/2 top-2 bg-black/60 hover:bg-black/80 text-white p-2.5 rounded-full z-20 shadow-lg"
//               aria-label="Previous side slide"
//             >
//               <ChevronLeft className="w-5 h-5 rotate-90" />
//             </button>

//             <button
//               onClick={nextSideSlide}
//               className="absolute left-1/2 -translate-x-1/2 bottom-2 bg-black/60 hover:bg-black/80 text-white p-2.5 rounded-full z-20 shadow-lg"
//               aria-label="Next side slide"
//             >
//               <ChevronRight className="w-5 h-5 rotate-90" />
//             </button>
//           </div>
//           {/* <VerticalSlider slides={sideSlides}/> */}
//         </div>
//       </div>
//     </div>
//   );
// }

'use client'
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
    image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&q=80",
  },
  {
    id: 2,
    brand: "Thermaltake",
    title: "Minecube 360 Ultra ARGB",
    subtitle: "Sync CPU Liquid Cooler",
    badge: "NEW ARRIVAL",
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400&q=80",
  },
  {
    id: 3,
    brand: "ASUS",
    title: "ROG STRIX",
    subtitle: "Gaming Motherboards",
    badge: "BEST SELLER",
    image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&q=80",
  },
  {
    id: 4,
    brand: "Corsair",
    title: "Vengeance RGB",
    subtitle: "DDR5 Memory",
    badge: "FLASH SALE",
    image: "https://images.unsplash.com/photo-1541029071515-84cc54f84dc5?w=400&q=80",
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
    <div className="w-full bg-gray-100 py-6 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* === MAIN SLIDER (SWIPER with fade effect) === */}
          <div className="flex-1 relative group rounded-2xl overflow-hidden shadow-2xl">
            <div className="relative h-[250px] lg:h-[520px]">
              <Swiper
                onSwiper={(sw) => {
                  swiperRef.current = sw;
                }}
                modules={[Autoplay, EffectFade]}
                autoplay={{ delay: 3000 }}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                loop={true}
                speed={700}
                slidesPerView={1}
                // onSlideChange={(sw) => {
                //   setCurrentMainSlide(sw.realIndex ?? sw.activeIndex ?? 0);
                // }}
                className="h-full"
              >
                {mainSlides.map((slide) => (
                  <SwiperSlide key={slide.id}>
                    {/* Background Image layer */}
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `url(${slide.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />
                                        <div className="absolute inset-0 bg-black/60" />

                    {/* Content */}
                    <div className="relative h-full flex items-center px-8 lg:px-16 text-white">
                      <div className="max-w-2xl">
                        <p className="text-xl lg:text-2xl font-bold xl:tracking-wider mb-1 sm:mb-3">
                          {slide.brand}
                        </p>
                       <h2 className="text-xl sm:text-5xl lg:text-5xl font-extrabold mb-0 sm:mb-3 lg:mb-4 lg:leading-tight flex items-center gap-4">
  {slide.title}

  {slide.badge && (
    <span className="bg-white text-black text-xs px-3 py-0.5 lg:text-lg lg:px-5 lg:py-2 rounded-full font-bold">
      {slide.badge}
    </span>
  )}
</h2>

                        {slide.subtitle && (
                          <p className="text-xs lg:text-2xl mb-4 lg:mb-6 opacity-90">
                            {slide.subtitle}
                          </p>
                        )}

                        <div className="flex flex-col">
                          {slide.price && (
                            <div className="inline-block w-fit mb-3 lg:mb-6">
                              <div className="bg-blue-600 text-white sm:px-10 px-4 py-2 sm:py-7 rounded-2xl transform -skew-x-12 shadow-2xl">
                                <div className="transform skew-x-12 lg:skew-x-12 text-center">
                                  <p className="text-xs lg:text-sm font-medium">
                                    {slide.priceLabel}
                                  </p>
                                  <p className="text-sm lg:text-4xl xl:text-5xl font-bold">
                                    {slide.price}
                                  </p>
                                </div>
                              </div>
                            </div>
                          )}

                          <Button className="bg-blue-600 cursor-pointer w-fit hover:bg-blue-700 text-white px-3 py-2 lg:px-10 lg:py-7 text-xs lg:text-xl font-bold rounded-sm tracking-wider lg:rounded-xl shadow-2xl">
                            SHOP NOW
                          </Button>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              {/* Navigation */}
              <button
                onClick={prevMainSlide}
                className="absolute left-0.5 lg:left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 lg:p-4 rounded-full z-10 transition-all md:opacity-0 md:group-hover:opacity-100 shadow-xl"
              >
                <ChevronLeft className="w-4 h-4 lg:w-8 lg:h-8" />
              </button>
              <button
                onClick={nextMainSlide}
                className="absolute right-0.5 lg:right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 lg:p-4 rounded-full z-10 transition-all md:opacity-0 md:group-hover:opacity-100 shadow-xl"
              >
                <ChevronRight className="w-4 h-4 lg:w-8 lg:h-8" />
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
