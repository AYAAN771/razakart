// "use client";

// import { Eye, Truck } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";

// interface ProductCardProps {
//   id: string;
//   name: string;
//   slug: string;
//   price: number;
//   originalPrice?: number;
//   discount?: number;
//   images: Array<{ url: string; alt: string }>;
//   className?: string;
//   cardHeight?: string;
// }

// export default function ProductCard({
//   id,
//   name,
//   slug,
//   price,
//   originalPrice,
//   discount,
//   images,
//   className = "",
//   cardHeight = "aspect-square"
// }: ProductCardProps) {
//   return (
//     <div className={`border rounded-lg ${className}`}>
//       <Link href={`/product/${slug}`} className="cursor-pointer">
//         <div className="rounded-lg overflow-hidden">
//           <div className={`relative ${cardHeight} bg-gray-100 overflow-hidden`}>
//             {discount && (
//               <div className="absolute w-full top-0 left-0 z-10 p-2 sm:p-3 flex items-center justify-between">
//                 <div className="bg-blue-600 text-white text-[10px] lg:text-sm lg:font-bold px-1.5 py-0.5 lg:px-3 lg:py-1 rounded-full shadow-md">
//                   -{discount}%
//                 </div>
//                 <div className="bg-white/75 text-blue-600 rounded-full p-1 flex items-center gap-0.5 lg:p-1.5 shadow-md">
//                   <Truck className="w-4 h-4 lg:w-4 lg:h-4" />
//                   <span className="text-blue-500 font-semibold text-[10px] lg:text-sm">
//                     Free Delivery
//                   </span>
//                 </div>
//               </div>
//             )}

//             {images?.[0] && (
//               <Image
//                 src={images[0].url}
//                 width={400}
//                 height={400}
//                 alt={images[0].alt}
//                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//               />
//             )}
//           </div>

//           <div className="p-2.5 lg:p-4">
//             <h3 className="text-sm lg:text-lg font-medium text-gray-900 mb-1 lg:mb-2 line-clamp-2 xl:min-h-[2rem]">
//               {name}
//             </h3>

//             <div className="mb-2 lg:mb-3">
//               <div className="flex items-center gap-2">
//                 {originalPrice && (
//                   <div className="text-xs lg:text-sm text-gray-500 line-through lg:mb-0">
//                     ₹{originalPrice.toLocaleString()}
//                   </div>
//                 )}
//                 <div className="text-sm sm:text-lg lg:text-xl font-bold text-blue-600">
//                   ₹{price.toLocaleString()}
//                 </div>
//               </div>
//             </div>

//             <button className="w-full bg-blue-600 hover:bg-blue-700 rounded-sm text-white font-semibold py-2.5 text-xs sm:text-sm lg:rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer">
//               <Eye className="w-4 h-4" />
//               View Product
//             </button>
//           </div>
//         </div>
//       </Link>
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
// "use client";

// import { Eye, Truck } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";

// interface ProductCardProps {
//   id: string;
//   name: string;
//   slug: string;
//   price: number;
//   originalPrice?: number;
//   discount?: number;
//   images: Array<{ url: string; alt: string }>;
//   className?: string;
//   cardHeight?: string;
// }

// export default function ProductCard({
//   id,
//   name,
//   slug,
//   price,
//   originalPrice,
//   discount,
//   images,
//   className = "",
//   cardHeight = "aspect-square",
// }: ProductCardProps) {
//   return (
//     <div className={`border rounded-lg ${className}`}>
//       <Link href={`/product/${slug}`} className='cursor-pointer'>
//         <div className='rounded-lg overflow-hidden'>
//           <div className={`relative ${cardHeight} bg-gray-100 overflow-hidden`}>
//             {discount && (
//               <div className='absolute w-full top-0 left-0 z-10 p-2 sm:p-3 flex items-center justify-between'>
//                 <div className='bg-blue-600 text-white text-[10px] lg:text-sm lg:font-bold px-1.5 py-0.5 lg:px-3 lg:py-1 rounded-full shadow-md'>
//                   -{discount}%
//                 </div>
//                 <div className='bg-white/75 text-blue-600 rounded-full p-1 flex items-center gap-0.5 lg:p-1.5 shadow-md'>
//                   <Truck className='w-4 h-4 lg:w-4 lg:h-4' />
//                   <span className='text-blue-500 font-semibold text-[10px] lg:text-sm'>
//                     Free Delivery
//                   </span>
//                 </div>
//               </div>
//             )}

//             {images?.length > 0 && (
//               <Swiper
//                 modules={[Autoplay]}
//                 loop
//                 speed={750}
//                 autoplay={{
//                   delay: 2000,
//                   disableOnInteraction: false,
//                   // pauseOnMouseEnter: true,
//                 }}
//                 className='w-full h-full'
//               >
//                 {images.map((img, idx) => (
//                   <SwiperSlide key={idx}>
//                     <Image
//                       src={img.url}
//                       width={400}
//                       height={400}
//                       alt={img.alt}
//                       className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
//                     />
//                   </SwiperSlide>
//                 ))}
//               </Swiper>
//             )}
//           </div>

//           <div className='p-2.5 lg:p-4'>
//             <h3 className='text-sm lg:text-lg font-medium text-gray-900 mb-1 lg:mb-2 line-clamp-2 xl:min-h-[2rem]'>
//               {name}
//             </h3>

//             <div className='mb-2 lg:mb-3'>
//               <div className='flex items-center gap-2'>
//                 {originalPrice && (
//                   <div className='text-xs lg:text-sm text-gray-500 line-through lg:mb-0'>
//                     ₹{originalPrice.toLocaleString()}
//                   </div>
//                 )}
//                 <div className='text-sm sm:text-lg lg:text-xl font-bold text-blue-600'>
//                   ₹{price.toLocaleString()}
//                 </div>
//               </div>
//             </div>

//             <button className='w-full bg-blue-600 hover:bg-blue-700 rounded-sm text-white font-semibold py-2.5 text-xs sm:text-sm lg:rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer'>
//               <Eye className='w-4 h-4' />
//               View Product
//             </button>
//           </div>
//         </div>
//       </Link>
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

// import { Eye, Truck } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";

// interface ProductCardProps {
//   id: string;
//   name: string;
//   slug: string;
//   price: number;
//   originalPrice?: number;
//   discount?: number;
//   images: Array<{ url: string; alt: string }>;
//   className?: string;
//   cardHeight?: string;
// }

// export default function ProductCard({
//   id,
//   name,
//   slug,
//   price,
//   originalPrice,
//   discount,
//   images,
//   className = "",
//   cardHeight = "aspect-square",
// }: ProductCardProps) {
//   const firstImage = images?.[0];
//   const secondImage = images?.[1];

//   return (
//     <div className={`border rounded-lg ${className}`}>
//       <Link href={`/product/${slug}`} className='cursor-pointer'>
//         <div className='rounded-lg overflow-hidden'>
//           <div
//             className={`relative ${cardHeight} bg-gray-100 overflow-hidden group`}
//           >
//             {discount && (
//               <div className='absolute w-full top-0 left-0 z-10 p-2 sm:p-3 flex items-center justify-between'>
//                 <div className='bg-blue-600 text-white text-[10px] lg:text-sm lg:font-bold px-1.5 py-0.5 lg:px-3 lg:py-1 rounded-full shadow-md'>
//                   -{discount}%
//                 </div>
//                 <div className='bg-white/75 text-blue-600 rounded-full p-1 flex items-center gap-0.5 lg:p-1.5 shadow-md'>
//                   <Truck className='w-4 h-4 lg:w-4 lg:h-4' />
//                   <span className='text-blue-500 font-semibold text-[10px] lg:text-sm'>
//                     Free Delivery
//                   </span>
//                 </div>
//               </div>
//             )}

//             {firstImage && (
//               <>
//                 {/* First Image */}
//                 <Image
//                   src={firstImage.url}
//                   width={400}
//                   height={400}
//                   alt={firstImage.alt}
//                   className='absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-100 group-hover:opacity-0'
//                 />

//                 {/* Second Image (only if exists) */}
//                 {secondImage && (
//                   <Image
//                     src={secondImage.url}
//                     width={400}
//                     height={400}
//                     alt={secondImage.alt}
//                     className='absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100'
//                   />
//                 )}
//               </>
//             )}
//           </div>

//           <div className='p-2.5 lg:p-4'>
//             <h3 className='text-sm lg:text-lg font-medium text-gray-900 mb-1 lg:mb-2 line-clamp-2 xl:min-h-[2rem]'>
//               {name}
//             </h3>

//             <div className='mb-2 lg:mb-3'>
//               <div className='flex items-center gap-2'>
//                 {originalPrice && (
//                   <div className='text-xs lg:text-sm text-gray-500 line-through lg:mb-0'>
//                     ₹{originalPrice.toLocaleString()}
//                   </div>
//                 )}
//                 <div className='text-sm sm:text-lg lg:text-xl font-bold text-blue-600'>
//                   ₹{price.toLocaleString()}
//                 </div>
//               </div>
//             </div>

//             <button className='w-full bg-blue-600 hover:bg-blue-700 rounded-sm text-white font-semibold py-2.5 text-xs sm:text-sm lg:rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer'>
//               <Eye className='w-4 h-4' />
//               View Product
//             </button>
//           </div>
//         </div>
//       </Link>
//     </div>
//   );
// }
"use client";

import { ArrowUpRight, Truck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  id: number;
  name: string;
  slug: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  images: Array<{ url: string; alt: string }>;
  className?: string;
  cardHeight?: string;
}

export default function ProductCard({
  name,
  slug,
  price,
  originalPrice,
  discount,
  images,
  className = "",
  cardHeight = "aspect-square",
}: ProductCardProps) {
  const firstImage = images?.[0];
  const secondImage = images?.[1];

  return (
    <div className={`border rounded-lg group ${className}`}>
      <Link href={`/product/${slug}`} className='cursor-pointer'>
        <div className='rounded-lg overflow-hidden'>
          <div className={`relative ${cardHeight} bg-gray-100 overflow-hidden`}>
            {discount && (
              <div className='absolute w-full top-0 left-0 z-10 p-2 sm:p-3 flex items-center justify-between'>
                <div className='bg-blue-600 text-white text-[10px] lg:text-sm lg:font-bold px-1.5 py-0.5 lg:px-3 lg:py-1 rounded-full shadow-md'>
                  -{discount}%
                </div>
                <div className='bg-white/75 text-blue-600 rounded-full p-1 flex items-center gap-0.5 lg:p-1.5 shadow-md'>
                  <Truck className='w-4 h-4 lg:w-4 lg:h-4' />
                  <span className='text-blue-500 font-semibold text-[10px] lg:text-sm'>
                    Free Delivery
                  </span>
                </div>
              </div>
            )}

            {firstImage && (
              <>
                {/* First Image */}
                <Image
                  src={firstImage.url}
                  width={400}
                  height={400}
                  alt={firstImage.alt}
                  className='absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-100 group-hover:opacity-0'
                />

                {/* Second Image (only if exists) */}
                {secondImage && (
                  <Image
                    src={secondImage.url}
                    width={400}
                    height={400}
                    alt={secondImage.alt}
                    className='absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100'
                  />
                )}
              </>
            )}
          </div>

          <div className='p-2.5 lg:p-4'>
            <h3 className='text-sm lg:text-lg font-medium text-gray-900 mb-1 lg:mb-2 line-clamp-2 xl:min-h-[2rem]'>
              {name}
            </h3>

            <div className='mb-2 lg:mb-3'>
              <div className='flex items-center gap-2'>
                {originalPrice && (
                  <div className='text-xs lg:text-sm text-gray-500 line-through lg:mb-0'>
                    ₹{originalPrice.toLocaleString()}
                  </div>
                )}
                <div className='text-sm sm:text-lg lg:text-xl font-bold text-blue-600'>
                  ₹{price.toLocaleString()}
                </div>
              </div>
            </div>

            <button className='w-full bg-blue-600 hover:bg-blue-700 rounded-sm text-white font-semibold py-1 xl:py-2.5 text-xs sm:text-sm lg:rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer'>
              Order Now
              <ArrowUpRight className='xl:w-8' />
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}
