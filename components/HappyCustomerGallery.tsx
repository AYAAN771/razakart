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



"use client";
import React, { useState } from "react";
import Image from "next/image";

interface CustomerImage {
  id: number;
  src: string;
  alt: string;
  caption: string;
}

const HappyCustomersGallery: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(4); // Start with 4 on mobile

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

  const loadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  const hasMore = visibleCount < customerImages.length;

  return (
    <div className='w-full bg-gradient-to-b py-12 bg-white'>
      <div className='xl:max-w-7xl max-w-[90vw] mx-auto px-0'>
        {/* Header Section */}
        <div className='text-center mb-10 md:mb-14'>
          <div className='inline-block mb-4'>
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900'>
              #HappyCustomers
            </h2>
            <div className='h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full mt-3'></div>
          </div>
          <p className='text-slate-600 text-lg md:text-xl mt-4 max-w-2xl mx-auto'>
            See what our satisfied customers have to say about their experience
          </p>
        </div>

        {/* Gallery Grid */}
        <div className='flex justify-center flex-wrap gap-4 md:gap-6'>
          {/* Desktop: Show all images */}
          {customerImages.map((image, index) => (
            <div
              key={image.id}
              className={`relative lg:w-[calc(25%-24px)] w-[calc(50%-12px)] aspect-square rounded-2xl overflow-hidden border border-gray-300 ${
                index >= visibleCount ? 'hidden md:flex' : ''
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className='object-cover'
                loading='lazy'
              />
            </div>
          ))}
        </div>

        {/* Load More Button - Mobile Only */}
        {hasMore && (
          <div className='text-center mt-8 md:hidden'>
            <button
              onClick={loadMore}
              className='bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer'
            >
              Load More
            </button>
          </div>
        )}
    </div>
    </div>
  );
};

export default HappyCustomersGallery;