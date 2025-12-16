// "use client";
// import React from "react";
// import Image from "next/image";

// interface CustomerImage {
//   id: number;
//   src: string;
//   alt: string;
//   caption: string;
// }

// const HappyCustomersGallery: React.FC = () => {
//   const customerImages: CustomerImage[] = [
//     // Explicitly type the array
//     {
//       id: 1,
//       src: "/customer/customer.jpeg",
//       alt: "Happy customer with new laptop",
//       caption: "Satisfied with Dell Latitude purchase",
//     },
//     {
//       id: 2,
//       src: "/customer/customer.jpeg",
//       alt: "Customer testimonial",
//       caption: "Great service and quality products",
//     },
//     {
//       id: 3,
//       src: "/customer/customer.jpeg",
//       alt: "Happy customer",
//       caption: "Excellent laptop deals found here",
//     },
//     {
//       id: 4,
//       src: "/customer/customer.jpeg",
//       alt: "Customer with laptop",
//       caption: "HP EliteBook working perfectly",
//     },
//     {
//       id: 5,
//       src: "/customer/customer.jpeg",
//       alt: "Satisfied customer",
//       caption: "Best refurbished laptop store",
//     },
//     {
//       id: 6,
//       src: "/customer/customer.jpeg",
//       alt: "Customer review",
//       caption: "Amazing customer support",
//     },
//     {
//       id: 7,
//       src: "/customer/customer.jpeg",
//       alt: "Happy client",
//       caption: "ThinkPad in excellent condition",
//     },
//     {
//       id: 8,
//       src: "/customer/customer.jpeg",
//       alt: "Customer feedback",
//       caption: "Quick delivery and great quality",
//     },
//     {
//       id: 9,
//       src: "/customer/customer.jpeg",
//       alt: "Testimonial",
//       caption: "Highly recommend this store",
//     },
//     {
//       id: 10,
//       src: "/customer/customer.jpeg",
//       alt: "Testimonial",
//       caption: "Highly recommend this store",
//     },
//   ];

//   return (
//     <div className='w-full bg-gradient-to-b py-12 bg-white'>
//       <div className='xl:max-w-7xl max-w-[90vw] mx-auto px-0'>
//         {/* Header Section */}
//         <div className='text-center mb-10 md:mb-14'>
//           <div className='inline-block mb-4'>
//             <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900'>
//               #HappyCustomers
//             </h2>
//             <div className='h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full mt-3'></div>
//           </div>
//           <p className='text-slate-600 text-lg md:text-xl mt-4 max-w-2xl mx-auto'>
//             See what our satisfied customers have to say about their experience
//           </p>
//         </div>

//         {/* Gallery Grid */}
//         <div className='flex justify-center flex-wrap gap-4 md:gap-6'>
//           {customerImages.map((image) => (
//             <div
//               key={image.id}
//               className='relative lg:w-[calc(25%-24px)] w-[calc(50%-12px)] aspect-square rounded-2xl overflow-hidden border border-gray-300'
//             >
//               <Image
//                 src={image.src}
//                 alt={image.alt}
//                 fill
//                 className='object-cover'
//                 loading='lazy'
//               />
//             </div>
//           ))}
//         </div>

//         {/* View All Button
//         <div className='text-center mt-10 md:mt-14'>
//           <button className='bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg  transition-all duration-300 transform hover:scale-105 cursor-pointer'>
//             View All Testimonials
//           </button>
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default HappyCustomersGallery;

//////////////////////////////

// "use client";
// import React, { useState } from "react";
// import Image from "next/image";

// interface CustomerImage {
//   id: number;
//   src: string;
//   alt: string;
//   caption: string;
// }

// const HappyCustomersGallery: React.FC = () => {
//   const [visibleCount, setVisibleCount] = useState(4); // Start with 4 on mobile

//   const customerImages: CustomerImage[] = [
//     {
//       id: 1,
//       src: "/customer/customer.jpeg",
//       alt: "Happy customer with new laptop",
//       caption: "Satisfied with Dell Latitude purchase",
//     },
//     {
//       id: 2,
//       src: "/customer/customer.jpeg",
//       alt: "Customer testimonial",
//       caption: "Great service and quality products",
//     },
//     {
//       id: 3,
//       src: "/customer/customer.jpeg",
//       alt: "Happy customer",
//       caption: "Excellent laptop deals found here",
//     },
//     {
//       id: 4,
//       src: "/customer/customer.jpeg",
//       alt: "Customer with laptop",
//       caption: "HP EliteBook working perfectly",
//     },
//     {
//       id: 5,
//       src: "/customer/customer.jpeg",
//       alt: "Satisfied customer",
//       caption: "Best refurbished laptop store",
//     },
//     {
//       id: 6,
//       src: "/customer/customer.jpeg",
//       alt: "Customer review",
//       caption: "Amazing customer support",
//     },
//     {
//       id: 7,
//       src: "/customer/customer.jpeg",
//       alt: "Happy client",
//       caption: "ThinkPad in excellent condition",
//     },
//     {
//       id: 8,
//       src: "/customer/customer.jpeg",
//       alt: "Customer feedback",
//       caption: "Quick delivery and great quality",
//     },
//     {
//       id: 9,
//       src: "/customer/customer.jpeg",
//       alt: "Testimonial",
//       caption: "Highly recommend this store",
//     },
//     {
//       id: 10,
//       src: "/customer/customer.jpeg",
//       alt: "Testimonial",
//       caption: "Highly recommend this store",
//     },
//   ];

//   const loadMore = () => {
//     setVisibleCount((prev) => prev + 4);
//   };

//   const hasMore = visibleCount < customerImages.length;

//   return (
//     <div className='w-full bg-gradient-to-b py-12 bg-white'>
//       <div className='xl:max-w-7xl max-w-[90vw] mx-auto px-0'>
//         {/* Header Section */}
//         <div className='text-center mb-10 md:mb-14'>
//           <div className='inline-block mb-4'>
//             <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900'>
//               #HappyCustomers
//             </h2>
//             <div className='h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full mt-3'></div>
//           </div>
//           <p className='text-slate-600 text-lg md:text-xl mt-4 max-w-2xl mx-auto'>
//             See what our satisfied customers have to say about their experience
//           </p>
//         </div>

//         {/* Gallery Grid */}
//         <div className='flex justify-center flex-wrap gap-4 md:gap-6'>
//           {/* Desktop: Show all images */}
//           {customerImages.map((image, index) => (
//             <div
//               key={image.id}
//               className={`relative lg:w-[calc(25%-24px)] w-[calc(50%-12px)] aspect-square rounded-2xl overflow-hidden border border-gray-300 ${
//                 index >= visibleCount ? 'hidden md:flex' : ''
//               }`}
//             >
//               <Image
//                 src={image.src}
//                 alt={image.alt}
//                 fill
//                 className='object-cover'
//                 loading='lazy'
//               />
//             </div>
//           ))}
//         </div>

//         {/* Load More Button - Mobile Only */}
//         {hasMore && (
//           <div className='text-center mt-8 md:hidden'>
//             <button
//               onClick={loadMore}
//               className='bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer'
//             >
//               Load More
//             </button>
//           </div>
//         )}
//     </div>
//     </div>
//   );
// };

// export default HappyCustomersGallery;



///////////////////////////////


"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface CustomerImage {
  id: number;
  src: string;
  alt: string;
  caption: string;
}

const HappyCustomersGallery: React.FC = () => {
  const customerImages: CustomerImage[] = [
    {
      id: 1,
      src: "/customer/customer.jpeg",
      alt: "Happy customer with new laptop",
      caption: "Satisfied with Dell Latitude purchase",
    },
    {
      id: 2,
      src: "/customer/customer.jpeg",
      alt: "Customer testimonial",
      caption: "Great service and quality products",
    },
    {
      id: 3,
      src: "/customer/customer.jpeg",
      alt: "Happy customer",
      caption: "Excellent laptop deals found here",
    },
    {
      id: 4,
      src: "/customer/customer.jpeg",
      alt: "Customer with laptop",
      caption: "HP EliteBook working perfectly",
    },
    {
      id: 5,
      src: "/customer/customer.jpeg",
      alt: "Satisfied customer",
      caption: "Best refurbished laptop store",
    },
    {
      id: 6,
      src: "/customer/customer.jpeg",
      alt: "Customer review",
      caption: "Amazing customer support",
    },
    {
      id: 7,
      src: "/customer/customer.jpeg",
      alt: "Happy client",
      caption: "ThinkPad in excellent condition",
    },
    {
      id: 8,
      src: "/customer/customer.jpeg",
      alt: "Customer feedback",
      caption: "Quick delivery and great quality",
    },
    {
      id: 9,
      src: "/customer/customer.jpeg",
      alt: "Testimonial",
      caption: "Highly recommend this store",
    },
    {
      id: 10,
      src: "/customer/customer.jpeg",
      alt: "Testimonial",
      caption: "Highly recommend this store",
    },
  ];

  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
            #HappyCustomers
          </h2>
          <div className="h-1 w-32 sm:w-40 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full mx-auto mt-4" />
          <p className="text-gray-600 text-base sm:text-lg mt-4 max-w-xl mx-auto">
            See what our satisfied customers have to say about their experience
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative group">
          {/* Custom Navigation Buttons */}
          <button
            className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center text-gray-700 hover:text-blue-600 hover:border-blue-300 hover:shadow-xl transition-all duration-200 opacity-0 group-hover:opacity-100 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2} />
          </button>

          <button
            className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center text-gray-700 hover:text-blue-600 hover:border-blue-300 hover:shadow-xl transition-all duration-200 opacity-0 group-hover:opacity-100 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2} />
          </button>

          {/* Swiper */}
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={16}
            slidesPerView={1.2}
            centeredSlides={false}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              el: ".swiper-pagination-custom",
              bulletClass: "swiper-pagination-bullet-custom",
              bulletActiveClass: "swiper-pagination-bullet-active-custom",
            }}
            navigation={{
              prevEl: ".swiper-button-prev-custom",
              nextEl: ".swiper-button-next-custom",
            }}
            breakpoints={{
              480: {
                slidesPerView: 1.5,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2.5,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
            className="!px-1 !py-2"
          >
            {customerImages.map((image) => (
              <SwiperSlide key={image.id}>
                <div className="relative aspect-square rounded-2xl overflow-hidden border border-gray-200 bg-gray-100 group/card">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover/card:scale-105"
                    loading="lazy"
                    sizes="(max-width: 480px) 80vw, (max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />

                  {/* Caption Overlay */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-4 translate-y-full group-hover/card:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-sm font-medium">
                      {image.caption}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination */}
          {/* <div className="swiper-pagination-custom flex justify-center items-center gap-2 mt-6 sm:mt-8" /> */}
        </div>
      </div>

      {/* Custom Pagination Styles */}
      <style jsx global>{`
        .swiper-pagination-bullet-custom {
          width: 8px;
          height: 8px;
          background-color: #d1d5db;
          border-radius: 9999px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .swiper-pagination-bullet-custom:hover {
          background-color: #9ca3af;
        }

        .swiper-pagination-bullet-active-custom {
          width: 24px;
          background-color: #2563eb;
        }

        .swiper-button-prev-custom.swiper-button-disabled,
        .swiper-button-next-custom.swiper-button-disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }
      `}</style>
    </section>
  );
};

export default HappyCustomersGallery;