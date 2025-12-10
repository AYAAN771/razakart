// 'use client'
// import React, { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

// const GoogleReviewsSection = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [itemsPerView, setItemsPerView] = useState(3);

//   const reviews = [
//     {
//       name: 'Sandeep Singh',
//       date: '2024-01-22',
//       rating: 5,
//       text: 'I bought Lenovo ThinkPad 480 and it is working fine and in excellent condition. Also they help me to resolve issue if any I face during there warranty period.',
//       avatar: 'S',
//       verified: true
//     },
//     {
//       name: 'Harshit Singh [IT]',
//       date: '2024-01-03',
//       rating: 5,
//       text: 'Good quality of laptop and excellence service, smoothly working not any issues and also team members play important role in a service. Problem resolving with...',
//       avatar: 'H',
//       verified: true,
//       expandable: true
//     },
//     {
//       name: 'ajay studies',
//       date: '2024-01-03',
//       rating: 5,
//       text: 'Excellent services and happy to see that my issue of getting the Bluetooth got resolved in a matter of 5 minutes. Proud of you guys !!.',
//       avatar: 'A',
//       verified: true
//     },
//     {
//       name: 'Harshit Singh',
//       date: '2023-12-26',
//       rating: 5,
//       text: 'I purchased laptop, it\'s a good product and excellence service. Laptop performance well-built design, amazing battery life, and quality display.',
//       avatar: 'H',
//       verified: true
//     },
//     {
//       name: 'Priya Sharma',
//       date: '2024-02-15',
//       rating: 5,
//       text: 'Outstanding customer service! The team was very helpful in selecting the right laptop for my needs. Highly recommend this store.',
//       avatar: 'P',
//       verified: true
//     },
//     {
//       name: 'Rahul Kumar',
//       date: '2024-02-10',
//       rating: 5,
//       text: 'Great experience shopping here. Product quality is top-notch and the after-sales support is exceptional. Will definitely come back!',
//       avatar: 'R',
//       verified: true
//     }
//   ];

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < 768) {
//         setItemsPerView(1);
//       } else if (window.innerWidth < 1024) {
//         setItemsPerView(2);
//       } else {
//         setItemsPerView(3);
//       }
//     };

//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const maxIndex = Math.max(0, reviews.length - itemsPerView);

//   const handlePrevious = () => {
//     setCurrentIndex((prev) => Math.max(0, prev - 1));
//   };

//   const handleNext = () => {
//     setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
//   };

//   const canGoPrevious = currentIndex > 0;
//   const canGoNext = currentIndex < maxIndex;

//   const getAvatarColor = (name) => {
//     const colors = [
//       'bg-blue-500',
//       'bg-purple-500',
//       'bg-pink-500',
//       'bg-indigo-500',
//       'bg-teal-500',
//       'bg-orange-500'
//     ];
//     const index = name.charCodeAt(0) % colors.length;
//     return colors[index];
//   };

//   return (
//     <div className="w-full bg-gradient-to-br from-slate-50 to-slate-100 py-12 md:py-16 lg:py-20">
//       <div className="max-w-7xl mx-auto px-4">
//         {/* Header Section */}
//         <div className="text-center mb-10 md:mb-14">
//           <div className="flex justify-center mb-4">
//             <div className="bg-white rounded-2xl shadow-lg px-6 py-3 inline-flex items-center gap-2">
//               <svg viewBox="0 0 512 512" className="w-8 h-8">
//                 <path fill="#4285f4" d="M386 400c45-42 65-112 53-179H260v74h102c-4 24-18 44-38 57z"/>
//                 <path fill="#34a853" d="M90 341a192 192 0 0 0 296 59l-62-48c-53 35-141 22-171-60z"/>
//                 <path fill="#fbbc02" d="M153 292c-8-25-8-48 0-73l-63-49c-36 74-36 148 0 222z"/>
//                 <path fill="#ea4335" d="M153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55z"/>
//               </svg>
//               <span className="font-semibold text-slate-700">Google Reviews</span>
//             </div>
//           </div>
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-3">
//             Customer reviews are our strength
//           </h2>
//           <p className="text-lg md:text-xl text-slate-600">
//             Discover our legacy of success today
//           </p>
//           <div className="flex items-center justify-center gap-2 mt-4">
//             <div className="flex">
//               {[...Array(5)].map((_, i) => (
//                 <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
//               ))}
//             </div>
//             <span className="text-slate-700 font-semibold text-lg">4.9/5</span>
//             <span className="text-slate-500">({reviews.length} reviews)</span>
//           </div>
//         </div>

//         {/* Reviews Slider */}
//         <div className="relative">
//           {/* Previous Button */}
//           {canGoPrevious && (
//             <button
//               onClick={handlePrevious}
//               className="absolute left-2 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-10 bg-white/90 rounded-full p-2 sm:p-3 shadow-xl hover:shadow-2xl hover:bg-slate-50 transition-all duration-300"
//               aria-label="Previous reviews"
//             >
//               <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-slate-700" />
//             </button>
//           )}

//           {/* Reviews Container */}
//           <div className="overflow-hidden">
//             <div
//               className="flex transition-transform duration-500 ease-in-out"
//               style={{
//                 transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`
//               }}
//             >
//               {reviews.map((review, index) => (
//                 <div
//                   key={index}
//                   className="flex-shrink-0 px-3"
//                   style={{ width: `${100 / itemsPerView}%` }}
//                 >
//                   <div className="bg-white rounded-2xl  transition-all duration-300 p-6 h-full border border-slate-200 hover:border-blue-300">
//                     {/* Header */}
//                     <div className="flex items-start justify-between mb-4">
//                       <div className="flex items-center gap-3">
//                         <div className={`${getAvatarColor(review.name)} w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md`}>
//                           {review.avatar}
//                         </div>
//                         <div>
//                           <h3 className="font-semibold text-slate-800 text-base">
//                             {review.name}
//                           </h3>
//                           <p className="text-sm text-slate-500">{review.date}</p>
//                         </div>
//                       </div>
//                       <svg viewBox="0 0 512 512" className="w-6 h-6 flex-shrink-0">
//                         <path fill="#4285f4" d="M386 400c45-42 65-112 53-179H260v74h102c-4 24-18 44-38 57z"/>
//                         <path fill="#34a853" d="M90 341a192 192 0 0 0 296 59l-62-48c-53 35-141 22-171-60z"/>
//                         <path fill="#fbbc02" d="M153 292c-8-25-8-48 0-73l-63-49c-36 74-36 148 0 222z"/>
//                         <path fill="#ea4335" d="M153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55z"/>
//                       </svg>
//                     </div>

//                     {/* Rating */}
//                     <div className="flex items-center gap-2 mb-4">
//                       <div className="flex">
//                         {[...Array(review.rating)].map((_, i) => (
//                           <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
//                         ))}
//                       </div>
//                       {review.verified && (
//                         <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full font-medium">
//                           Verified
//                         </span>
//                       )}
//                     </div>

//                     {/* Review Text */}
//                     <p className="text-slate-600 leading-relaxed text-sm md:text-base">
//                       {review.text}
//                     </p>

//                     {review.expandable && (
//                       <button className="text-blue-600 hover:text-blue-700 text-sm font-medium mt-2 hover:underline">
//                         Read more
//                       </button>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Next Button */}
//           {canGoNext && (
//             <button
//               onClick={handleNext}
//               className="absolute right-2 top-1/2 -translate-y-1/2 translate-x-4 cursor-pointer md:translate-x-6 z-10 bg-white/90 rounded-full p-2 sm:p-3 shadow-xl hover:shadow-2xl hover:bg-slate-50 transition-all duration-300"
//               aria-label="Next reviews"
//             >
//               <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-slate-700" />
//             </button>
//           )}
//         </div>

//         {/* Dots Indicator */}
//         {maxIndex > 0 && (
//           <div className="flex justify-center gap-2 mt-8">
//             {Array.from({ length: maxIndex + 1 }).map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentIndex(index)}
//                 className={`h-2 rounded-full transition-all duration-300 ${
//                   index === currentIndex 
//                     ? 'bg-blue-600 w-8' 
//                     : 'bg-slate-300 w-2 hover:bg-slate-400'
//                 }`}
//                 aria-label={`Go to slide ${index + 1}`}
//               />
//             ))}
//           </div>
//         )}

//         {/* CTA Button */}
//         <div className="text-center mt-10">
//           <a
//             href="https://www.google.com/maps"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
//           >
//             <svg viewBox="0 0 512 512" className="w-5 h-5 fill-current">
//               <path fill="currentColor" d="M386 400c45-42 65-112 53-179H260v74h102c-4 24-18 44-38 57z"/>
//               <path fill="currentColor" d="M90 341a192 192 0 0 0 296 59l-62-48c-53 35-141 22-171-60z"/>
//               <path fill="currentColor" d="M153 292c-8-25-8-48 0-73l-63-49c-36 74-36 148 0 222z"/>
//               <path fill="currentColor" d="M153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55z"/>
//             </svg>
//             Write a Review
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GoogleReviewsSection;


'use client'
import React, { useState, useEffect, MouseEvent } from 'react';
import Image from 'next/image'; // Import the Next.js Image component
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

// 1. Define the type for a single image object
interface CustomerImage {
  id: number;
  src: string;
  alt: string;
  caption: string;
}

// 2. Use React.FC for the component
const HappyCustomersGallery: React.FC = () => {
  // 3. Explicitly type useState calls
  const [selectedImage, setSelectedImage] = useState<CustomerImage | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  const customerImages: CustomerImage[] = [ // Explicitly type the array
    {
      id: 1,
      src: '/customer/customer.jpeg',
      alt: 'Happy customer with new laptop',
      caption: 'Satisfied with Dell Latitude purchase'
    },
    {
      id: 2,
      src: '/customer/customer.jpeg',
      alt: 'Customer testimonial',
      caption: 'Great service and quality products'
    },
    {
      id: 3,
      src: '/customer/customer.jpeg',
      alt: 'Happy customer',
      caption: 'Excellent laptop deals found here'
    },
    {
      id: 4,
      src: '/customer/customer.jpeg',
      alt: 'Customer with laptop',
      caption: 'HP EliteBook working perfectly'
    },
    {
      id: 5,
      src: '/customer/customer.jpeg',
      alt: 'Satisfied customer',
      caption: 'Best refurbished laptop store'
    },
    {
      id: 6,
      src: '/customer/customer.jpeg',
      alt: 'Customer review',
      caption: 'Amazing customer support'
    },
    {
      id: 7,
      src: '/customer/customer.jpeg',
      alt: 'Happy client',
      caption: 'ThinkPad in excellent condition'
    },
    {
      id: 8,
      src: '/customer/customer.jpeg',
      alt: 'Customer feedback',
      caption: 'Quick delivery and great quality'
    },
    {
      id: 9,
      src: '/customer/customer.jpeg',
      alt: 'Testimonial',
      caption: 'Highly recommend this store'
    }
  ];

  // 4. Explicitly type function parameters
  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setSelectedImage(customerImages[index]);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : customerImages.length - 1;
    setCurrentIndex(newIndex);
    setSelectedImage(customerImages[newIndex]);
  };

  const goToNext = () => {
    const newIndex = currentIndex < customerImages.length - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(newIndex);
    setSelectedImage(customerImages[newIndex]);
  };

  return (
    <div className="w-full bg-gradient-to-b from-white to-slate-50 py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-block mb-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900">
              #HappyCustomers
            </h2>
            <div className="h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full mt-3"></div>
          </div>
          <p className="text-slate-600 text-lg md:text-xl mt-4 max-w-2xl mx-auto">
            See what our satisfied customers have to say about their experience
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {customerImages.map((image, index) => (
            <div
              key={image.id}
              // Container must be relative for the Next Image fill prop to work
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
              onClick={() => openLightbox(index)}
            >
              {/* Image (FIXED: Using Next Image) */}
              <Image
                src={image.src}
                alt={image.alt}
                fill // Fills the parent div (which has aspect-square class)
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-medium text-sm md:text-base line-clamp-2">
                    {image.caption}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      #HappyCustomer
                    </div>
                  </div>
                </div>

                {/* Zoom Icon */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn className="w-5 h-5 text-slate-800" />
                </div>
              </div>

              {/* Border Effect */}
              <div className="absolute inset-0 border-4 border-transparent group-hover:border-blue-500/50 rounded-2xl transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10 md:mt-14">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            View All Testimonials
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center overflow-hidden"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            className="absolute top-3 right-3 md:top-6 md:right-6 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-2 md:p-3 rounded-full transition-colors z-20"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <X className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Previous Button */}
          <button
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-2 md:p-3 rounded-full transition-colors z-20"
            onClick={(e: MouseEvent) => { // Type the event object
              e.stopPropagation();
              goToPrevious();
            }}
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Next Button */}
          <button
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-2 md:p-3 rounded-full transition-colors z-20"
            onClick={(e: MouseEvent) => { // Type the event object
              e.stopPropagation();
              goToNext();
            }}
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Image Container */}
          <div
            className="relative w-full h-full flex items-center justify-center p-4 md:p-8 pb-20 md:pb-24"
            onClick={(e: MouseEvent) => e.stopPropagation()} // Type the event object
          >
            <div className="relative w-full max-w-4xl max-h-full flex items-center justify-center">
              {/* Image in Lightbox (FIXED: Using Next Image) */}
              {/* To respect the 'w-auto h-auto object-contain' style, we wrap the fill Image.
                  We must use a wrapper div to define the bounds, but since the size is variable,
                  I'll use a slightly different approach: using 'contain' directly on a standard
                  Image component within the constrained container. */}
              <div className="relative max-w-full max-h-[calc(100vh-180px)] md:max-h-[calc(100vh-200px)] w-full h-full flex items-center justify-center">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  // Next Image requires 'width' and 'height' or 'fill'.
                  // Using fill on a full-size container and 'object-contain' is the canonical way
                  // to achieve lightbox behavior.
                  fill
                  sizes="100vw"
                  className="object-contain rounded-lg shadow-2xl p-4 md:p-6" // Added padding to prevent image touching caption/edges
                />
              </div>

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-4 md:p-6 rounded-b-lg">
                <p className="text-white text-sm md:text-lg font-medium mb-2">
                  {selectedImage.caption}
                </p>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="bg-blue-600 text-white px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-semibold">
                    #HappyCustomer
                  </span>
                  <span className="text-white/70 text-xs md:text-sm">
                    {currentIndex + 1} / {customerImages.length}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="absolute bottom-3 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 md:gap-2 bg-black/50 backdrop-blur-sm p-2 rounded-full z-20">
            {customerImages.map((img, index) => (
              <button
                key={img.id}
                className={`h-1.5 md:h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-white w-4 md:w-6' : 'bg-white/50 w-1.5 md:w-2'
                }`}
                onClick={(e: MouseEvent) => { // Type the event object
                  e.stopPropagation();
                  openLightbox(index);
                }}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default HappyCustomersGallery;