// 'use client'
// // import React, { useState } from 'react';
// // import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

// // const HappyCustomersGallery = () => {
// //   const [selectedImage, setSelectedImage] = useState(null);
// //   const [currentIndex, setCurrentIndex] = useState(0);

// //   const customerImages = [
//     // {
//     //   id: 1,
//     //   src: '/customer/customer.jpeg',
//     //   alt: 'Happy customer with new laptop',
//     //   caption: 'Satisfied with Dell Latitude purchase'
//     // },
// //     {
// //       id: 2,
// //       src: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800',
// //       alt: 'Customer testimonial',
// //       caption: 'Great service and quality products'
// //     },
// //     {
// //       id: 3,
// //       src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800',
// //       alt: 'Happy customer',
// //       caption: 'Excellent laptop deals found here'
// //     },
// //     {
// //       id: 4,
// //       src: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=800',
// //       alt: 'Customer with laptop',
// //       caption: 'HP EliteBook working perfectly'
// //     },
// //     {
// //       id: 5,
// //       src: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800',
// //       alt: 'Satisfied customer',
// //       caption: 'Best refurbished laptop store'
// //     },
// //     {
// //       id: 6,
// //       src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800',
// //       alt: 'Customer review',
// //       caption: 'Amazing customer support'
// //     },
// //     {
// //       id: 7,
// //       src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800',
// //       alt: 'Happy client',
// //       caption: 'ThinkPad in excellent condition'
// //     },
// //     {
// //       id: 8,
// //       src: 'https://images.unsplash.com/photo-1557862921-37829c790f19?w=800',
// //       alt: 'Customer feedback',
// //       caption: 'Quick delivery and great quality'
// //     },
// //     {
// //       id: 9,
// //       src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800',
// //       alt: 'Testimonial',
// //       caption: 'Highly recommend this store'
// //     }
// //   ];

// //   const openLightbox = (index) => {
// //     setCurrentIndex(index);
// //     setSelectedImage(customerImages[index]);
// //   };

// //   const closeLightbox = () => {
// //     setSelectedImage(null);
// //   };

// //   const goToPrevious = () => {
// //     const newIndex = currentIndex > 0 ? currentIndex - 1 : customerImages.length - 1;
// //     setCurrentIndex(newIndex);
// //     setSelectedImage(customerImages[newIndex]);
// //   };

// //   const goToNext = () => {
// //     const newIndex = currentIndex < customerImages.length - 1 ? currentIndex + 1 : 0;
// //     setCurrentIndex(newIndex);
// //     setSelectedImage(customerImages[newIndex]);
// //   };

// //   return (
// //     <div className="w-full bg-gradient-to-b from-white to-slate-50 py-12 md:py-16 lg:py-20">
// //       <div className="max-w-7xl mx-auto px-4">
// //         {/* Header Section */}
// //         <div className="text-center mb-10 md:mb-14">
// //           <div className="inline-block mb-4">
// //             <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900">
// //               #HappyCustomers
// //             </h2>
// //             <div className="h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full mt-3"></div>
// //           </div>
// //           <p className="text-slate-600 text-lg md:text-xl mt-4 max-w-2xl mx-auto">
// //             See what our satisfied customers have to say about their experience
// //           </p>
// //         </div>

// //         {/* Gallery Grid */}
// //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
// //           {customerImages.map((image, index) => (
// //             <div
// //               key={image.id}
// //               className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
// //               onClick={() => openLightbox(index)}
// //             >
// //               {/* Image */}
// //               <img
// //                 src={image.src}
// //                 alt={image.alt}
// //                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
// //                 loading="lazy"
// //               />

// //               {/* Overlay */}
// //               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
// //                 <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
// //                   <p className="text-white font-medium text-sm md:text-base line-clamp-2">
// //                     {image.caption}
// //                   </p>
// //                   <div className="flex items-center gap-2 mt-2">
// //                     <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
// //                       #HappyCustomer
// //                     </div>
// //                   </div>
// //                 </div>

// //                 {/* Zoom Icon */}
// //                 <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
// //                   <ZoomIn className="w-5 h-5 text-slate-800" />
// //                 </div>
// //               </div>

// //               {/* Border Effect */}
// //               <div className="absolute inset-0 border-4 border-transparent group-hover:border-blue-500/50 rounded-2xl transition-all duration-300"></div>
// //             </div>
// //           ))}
// //         </div>

// //         {/* View All Button */}
// //         <div className="text-center mt-10 md:mt-14">
// //           <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
// //             View All Testimonials
// //           </button>
// //         </div>
// //       </div>

// //       {/* Lightbox Modal */}
// //       {selectedImage && (
// //         <div
// //           className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
// //           onClick={closeLightbox}
// //         >
// //           {/* Close Button */}
// //           <button
// //             className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-2 rounded-full transition-colors z-10"
// //             onClick={closeLightbox}
// //             aria-label="Close lightbox"
// //           >
// //             <X className="w-6 h-6" />
// //           </button>

// //           {/* Previous Button */}
// //           <button
// //             className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-colors z-10"
// //             onClick={(e) => {
// //               e.stopPropagation();
// //               goToPrevious();
// //             }}
// //             aria-label="Previous image"
// //           >
// //             <ChevronLeft className="w-6 h-6" />
// //           </button>

// //           {/* Next Button */}
// //           <button
// //             className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-colors z-10"
// //             onClick={(e) => {
// //               e.stopPropagation();
// //               goToNext();
// //             }}
// //             aria-label="Next image"
// //           >
// //             <ChevronRight className="w-6 h-6" />
// //           </button>

// //           {/* Image Container */}
// //           <div
// //             className="relative max-w-5xl max-h-[90vh] w-full"
// //             onClick={(e) => e.stopPropagation()}
// //           >
// //             <img
// //               src={selectedImage.src}
// //               alt={selectedImage.alt}
// //               className="w-full h-full object-contain rounded-lg"
// //             />

// //             {/* Caption */}
// //             <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
// //               <p className="text-white text-lg font-medium mb-2">
// //                 {selectedImage.caption}
// //               </p>
// //               <div className="flex items-center gap-2">
// //                 <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
// //                   #HappyCustomer
// //                 </span>
// //                 <span className="text-white/70 text-sm">
// //                   {currentIndex + 1} / {customerImages.length}
// //                 </span>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Thumbnail Navigation */}
// //           <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-black/50 backdrop-blur-sm p-2 rounded-full">
// //             {customerImages.map((img, index) => (
// //               <button
// //                 key={img.id}
// //                 className={`w-2 h-2 rounded-full transition-all ${
// //                   index === currentIndex ? 'bg-white w-6' : 'bg-white/50'
// //                 }`}
// //                 onClick={(e) => {
// //                   e.stopPropagation();
// //                   openLightbox(index);
// //                 }}
// //                 aria-label={`Go to image ${index + 1}`}
// //               />
// //             ))}
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default HappyCustomersGallery;



// // import React, { useState } from 'react';
// // import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

// // const HappyCustomersGallery = () => {
// //   const [selectedImage, setSelectedImage] = useState(null);
// //   const [currentIndex, setCurrentIndex] = useState(0);

// //   // Lock body scroll when lightbox is open
// //   React.useEffect(() => {
// //     if (selectedImage) {
// //       document.body.style.overflow = 'hidden';
// //     } else {
// //       document.body.style.overflow = 'unset';
// //     }
// //     return () => {
// //       document.body.style.overflow = 'unset';
// //     };
// //   }, [selectedImage]);

// //   const customerImages = [
// //     {
// //       id: 1,
// //       src: '/customer/customer.jpeg',
// //       alt: 'Happy customer with new laptop',
// //       caption: 'Satisfied with Dell Latitude purchase'
// //     },
// //     {
// //       id: 2,
// //       src: '/customer/customer.jpeg',
// //       alt: 'Customer testimonial',
// //       caption: 'Great service and quality products'
// //     },
// //     {
// //       id: 3,
// //       src: '/customer/customer.jpeg',
// //       alt: 'Happy customer',
// //       caption: 'Excellent laptop deals found here'
// //     },
// //     {
// //       id: 4,
// //       src: '/customer/customer.jpeg',
// //       alt: 'Customer with laptop',
// //       caption: 'HP EliteBook working perfectly'
// //     },
// //     {
// //       id: 5,
// //       src: '/customer/customer.jpeg',
// //       alt: 'Satisfied customer',
// //       caption: 'Best refurbished laptop store'
// //     },
// //     {
// //       id: 6,
// //       src: '/customer/customer.jpeg',
// //       alt: 'Customer review',
// //       caption: 'Amazing customer support'
// //     },
// //     {
// //       id: 7,
// //       src: '/customer/customer.jpeg',
// //       alt: 'Happy client',
// //       caption: 'ThinkPad in excellent condition'
// //     },
// //     {
// //       id: 8,
// //       src: '/customer/customer.jpeg',
// //       alt: 'Customer feedback',
// //       caption: 'Quick delivery and great quality'
// //     },
// //     {
// //       id: 9,
// //       src: '/customer/customer.jpeg',
// //       alt: 'Testimonial',
// //       caption: 'Highly recommend this store'
// //     }
// //   ];

// //   const openLightbox = (index) => {
// //     setCurrentIndex(index);
// //     setSelectedImage(customerImages[index]);
// //   };

// //   const closeLightbox = () => {
// //     setSelectedImage(null);
// //   };

// //   const goToPrevious = () => {
// //     const newIndex = currentIndex > 0 ? currentIndex - 1 : customerImages.length - 1;
// //     setCurrentIndex(newIndex);
// //     setSelectedImage(customerImages[newIndex]);
// //   };

// //   const goToNext = () => {
// //     const newIndex = currentIndex < customerImages.length - 1 ? currentIndex + 1 : 0;
// //     setCurrentIndex(newIndex);
// //     setSelectedImage(customerImages[newIndex]);
// //   };

// //   return (
// //     <div className="w-full bg-gradient-to-b from-white to-slate-50 py-12 md:py-16 lg:py-20">
// //       <div className="max-w-7xl mx-auto px-4">
// //         {/* Header Section */}
// //         <div className="text-center mb-10 md:mb-14">
// //           <div className="inline-block mb-4">
// //             <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900">
// //               #HappyCustomers
// //             </h2>
// //             <div className="h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full mt-3"></div>
// //           </div>
// //           <p className="text-slate-600 text-lg md:text-xl mt-4 max-w-2xl mx-auto">
// //             See what our satisfied customers have to say about their experience
// //           </p>
// //         </div>

// //         {/* Gallery Grid */}
// //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
// //           {customerImages.map((image, index) => (
// //             <div
// //               key={image.id}
// //               className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
// //               onClick={() => openLightbox(index)}
// //             >
// //               {/* Image */}
// //               <img
// //                 src={image.src}
// //                 alt={image.alt}
// //                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
// //                 loading="lazy"
// //               />

// //               {/* Overlay */}
// //               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
// //                 <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
// //                   <p className="text-white font-medium text-sm md:text-base line-clamp-2">
// //                     {image.caption}
// //                   </p>
// //                   <div className="flex items-center gap-2 mt-2">
// //                     <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
// //                       #HappyCustomer
// //                     </div>
// //                   </div>
// //                 </div>

// //                 {/* Zoom Icon */}
// //                 <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
// //                   <ZoomIn className="w-5 h-5 text-slate-800" />
// //                 </div>
// //               </div>

// //               {/* Border Effect */}
// //               <div className="absolute inset-0 border-4 border-transparent group-hover:border-blue-500/50 rounded-2xl transition-all duration-300"></div>
// //             </div>
// //           ))}
// //         </div>

// //         {/* View All Button */}
// //         <div className="text-center mt-10 md:mt-14">
// //           <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
// //             View All Testimonials
// //           </button>
// //         </div>
// //       </div>

// //       {/* Lightbox Modal */}
// //       {selectedImage && (
// //         <div
// //           className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center overflow-hidden"
// //           onClick={closeLightbox}
// //         >
// //           {/* Close Button */}
// //           <button
// //             className="absolute top-3 right-3 md:top-6 md:right-6 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-2 md:p-3 rounded-full transition-colors z-20"
// //             onClick={closeLightbox}
// //             aria-label="Close lightbox"
// //           >
// //             <X className="w-5 h-5 md:w-6 md:h-6" />
// //           </button>

// //           {/* Previous Button */}
// //           <button
// //             className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-2 md:p-3 rounded-full transition-colors z-20"
// //             onClick={(e) => {
// //               e.stopPropagation();
// //               goToPrevious();
// //             }}
// //             aria-label="Previous image"
// //           >
// //             <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
// //           </button>

// //           {/* Next Button */}
// //           <button
// //             className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-2 md:p-3 rounded-full transition-colors z-20"
// //             onClick={(e) => {
// //               e.stopPropagation();
// //               goToNext();
// //             }}
// //             aria-label="Next image"
// //           >
// //             <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
// //           </button>

// //           {/* Image Container */}
// //           <div
// //             className="relative w-full h-full flex items-center justify-center p-4 md:p-8 pb-20 md:pb-24"
// //             onClick={(e) => e.stopPropagation()}
// //           >
// //             <div className="relative w-full max-w-4xl max-h-full flex items-center justify-center">
// //               <img
// //                 src={selectedImage.src}
// //                 alt={selectedImage.alt}
// //                 className="max-w-full max-h-[calc(100vh-180px)] md:max-h-[calc(100vh-200px)] w-auto h-auto object-contain rounded-lg shadow-2xl"
// //               />

// //               {/* Caption */}
// //               <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-4 md:p-6 rounded-b-lg">
// //                 <p className="text-white text-sm md:text-lg font-medium mb-2">
// //                   {selectedImage.caption}
// //                 </p>
// //                 <div className="flex items-center gap-2 flex-wrap">
// //                   <span className="bg-blue-600 text-white px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-semibold">
// //                     #HappyCustomer
// //                   </span>
// //                   <span className="text-white/70 text-xs md:text-sm">
// //                     {currentIndex + 1} / {customerImages.length}
// //                   </span>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Thumbnail Navigation */}
// //           <div className="absolute bottom-3 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 md:gap-2 bg-black/50 backdrop-blur-sm p-2 rounded-full z-20">
// //             {customerImages.map((img, index) => (
// //               <button
// //                 key={img.id}
// //                 className={`h-1.5 md:h-2 rounded-full transition-all ${
// //                   index === currentIndex ? 'bg-white w-4 md:w-6' : 'bg-white/50 w-1.5 md:w-2'
// //                 }`}
// //                 onClick={(e) => {
// //                   e.stopPropagation();
// //                   openLightbox(index);
// //                 }}
// //                 aria-label={`Go to image ${index + 1}`}
// //               />
// //             ))}
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default HappyCustomersGallery;



// // import React, { useState, useEffect } from 'react';
// // import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// // type ImageType = {
// //   id: number;
// //   src: string;
// //   alt: string;
// //   caption: string;
// // };

// // const HappyCustomersGallery: React.FC = () => {
// //   const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);
// //   const [currentIndex, setCurrentIndex] = useState<number>(0);

// //   const customerImages: ImageType[] = [
// //     { id: 1, src: '/customer/customer.jpeg', alt: 'Happy customer with new laptop', caption: 'Satisfied with Dell Latitude purchase' },
// //     { id: 2, src: '/customer/customer.jpeg', alt: 'Customer testimonial', caption: 'Great service and quality products' },
// //     { id: 3, src: '/customer/customer.jpeg', alt: 'Happy customer', caption: 'Excellent laptop deals found here' },
// //     { id: 4, src: '/customer/customer.jpeg', alt: 'Customer with laptop', caption: 'HP EliteBook working perfectly' },
// //     { id: 5, src: '/customer/customer.jpeg', alt: 'Satisfied customer', caption: 'Best refurbished laptop store' },
// //     { id: 6, src: '/customer/customer.jpeg', alt: 'Customer review', caption: 'Amazing customer support' },
// //     { id: 7, src: '/customer/customer.jpeg', alt: 'Happy client', caption: 'ThinkPad in excellent condition' },
// //     { id: 8, src: '/customer/customer.jpeg', alt: 'Customer feedback', caption: 'Quick delivery and great quality' },
// //     { id: 9, src: '/customer/customer.jpeg', alt: 'Testimonial', caption: 'Highly recommend this store' },
// //   ];

// //   useEffect(() => {
// //     document.body.style.overflow = selectedImage ? 'hidden' : 'unset';
// //     return () => {
// //       document.body.style.overflow = 'unset';
// //     };
// //   }, [selectedImage]);

// //   const openLightbox = (index: number) => {
// //     setCurrentIndex(index);
// //     setSelectedImage(customerImages[index]);
// //   };

// //   const closeLightbox = () => {
// //     setSelectedImage(null);
// //   };

// //   const goToPrevious = () => {
// //     const newIndex = currentIndex > 0 ? currentIndex - 1 : customerImages.length - 1;
// //     setCurrentIndex(newIndex);
// //     setSelectedImage(customerImages[newIndex]);
// //   };

// //   const goToNext = () => {
// //     const newIndex = currentIndex < customerImages.length - 1 ? currentIndex + 1 : 0;
// //     setCurrentIndex(newIndex);
// //     setSelectedImage(customerImages[newIndex]);
// //   };

// //   return (
// //     <div className="w-full bg-gradient-to-b from-white to-slate-50 py-12 md:py-16 lg:py-20">
// //       <div className="max-w-7xl mx-auto px-4">

// //         {/* GRID */}
// //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
// //           {customerImages.map((image, index) => (
// //             <div
// //               key={image.id}
// //               onClick={() => openLightbox(index)}
// //               className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
// //             >
// //               <img
// //                 src={image.src}
// //                 alt={image.alt}
// //                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
// //               />

// //               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
// //                 <div className="absolute bottom-0 p-4">
// //                   <p className="text-white text-sm">{image.caption}</p>
// //                   <span className="text-xs text-white/70">#HappyCustomer</span>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>

// //       {/* LIGHTBOX */}
// //       {selectedImage && (
// //         <div
// //           className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
// //           onClick={closeLightbox}
// //         >
// //           <button
// //             className="absolute top-6 right-6 text-white"
// //             onClick={closeLightbox}
// //           >
// //             <X />
// //           </button>

// //           <button
// //             className="absolute left-6 top-1/2 text-white"
// //             onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
// //               e.stopPropagation();
// //               goToPrevious();
// //             }}
// //           >
// //             <ChevronLeft />
// //           </button>

// //           <button
// //             className="absolute right-6 top-1/2 text-white"
// //             onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
// //               e.stopPropagation();
// //               goToNext();
// //             }}
// //           >
// //             <ChevronRight />
// //           </button>

// //           <img
// //             src={selectedImage.src}
// //             alt={selectedImage.alt}
// //             className="max-h-[90vh] max-w-[90vw] object-contain"
// //             onClick={(e) => e.stopPropagation()}
// //           />
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default HappyCustomersGallery;





// import React, { useState, useEffect, MouseEvent } from 'react';
// import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

// // 1. Define the type for a single image object
// interface CustomerImage {
//   id: number;
//   src: string;
//   alt: string;
//   caption: string;
// }

// // 2. Use React.FC for the component
// const HappyCustomersGallery: React.FC = () => {
//   // 3. Explicitly type useState calls
//   const [selectedImage, setSelectedImage] = useState<CustomerImage | null>(null);
//   const [currentIndex, setCurrentIndex] = useState<number>(0);

//   // Lock body scroll when lightbox is open
//   useEffect(() => {
//     if (selectedImage) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'unset';
//     }
//     return () => {
//       document.body.style.overflow = 'unset';
//     };
//   }, [selectedImage]);

//   const customerImages: CustomerImage[] = [ // Explicitly type the array
//     {
//       id: 1,
//       src: '/customer/customer.jpeg',
//       alt: 'Happy customer with new laptop',
//       caption: 'Satisfied with Dell Latitude purchase'
//     },
//     {
//       id: 2,
//       src: '/customer/customer.jpeg',
//       alt: 'Customer testimonial',
//       caption: 'Great service and quality products'
//     },
//     {
//       id: 3,
//       src: '/customer/customer.jpeg',
//       alt: 'Happy customer',
//       caption: 'Excellent laptop deals found here'
//     },
//     {
//       id: 4,
//       src: '/customer/customer.jpeg',
//       alt: 'Customer with laptop',
//       caption: 'HP EliteBook working perfectly'
//     },
//     {
//       id: 5,
//       src: '/customer/customer.jpeg',
//       alt: 'Satisfied customer',
//       caption: 'Best refurbished laptop store'
//     },
//     {
//       id: 6,
//       src: '/customer/customer.jpeg',
//       alt: 'Customer review',
//       caption: 'Amazing customer support'
//     },
//     {
//       id: 7,
//       src: '/customer/customer.jpeg',
//       alt: 'Happy client',
//       caption: 'ThinkPad in excellent condition'
//     },
//     {
//       id: 8,
//       src: '/customer/customer.jpeg',
//       alt: 'Customer feedback',
//       caption: 'Quick delivery and great quality'
//     },
//     {
//       id: 9,
//       src: '/customer/customer.jpeg',
//       alt: 'Testimonial',
//       caption: 'Highly recommend this store'
//     }
//   ];

//   // 4. Explicitly type function parameters
//   const openLightbox = (index: number) => {
//     setCurrentIndex(index);
//     setSelectedImage(customerImages[index]);
//   };

//   const closeLightbox = () => {
//     setSelectedImage(null);
//   };

//   const goToPrevious = () => {
//     const newIndex = currentIndex > 0 ? currentIndex - 1 : customerImages.length - 1;
//     setCurrentIndex(newIndex);
//     setSelectedImage(customerImages[newIndex]);
//   };

//   const goToNext = () => {
//     const newIndex = currentIndex < customerImages.length - 1 ? currentIndex + 1 : 0;
//     setCurrentIndex(newIndex);
//     setSelectedImage(customerImages[newIndex]);
//   };

//   return (
//     <div className="w-full bg-gradient-to-b from-white to-slate-50 py-12 md:py-16 lg:py-20">
//       <div className="max-w-7xl mx-auto px-4">
//         {/* Header Section */}
//         <div className="text-center mb-10 md:mb-14">
//           <div className="inline-block mb-4">
//             <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900">
//               #HappyCustomers
//             </h2>
//             <div className="h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full mt-3"></div>
//           </div>
//           <p className="text-slate-600 text-lg md:text-xl mt-4 max-w-2xl mx-auto">
//             See what our satisfied customers have to say about their experience
//           </p>
//         </div>

//         {/* Gallery Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
//           {customerImages.map((image, index) => (
//             <div
//               key={image.id}
//               className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
//               onClick={() => openLightbox(index)}
//             >
//               {/* Image */}
//               <img
//                 src={image.src}
//                 alt={image.alt}
//                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                 loading="lazy"
//               />

//               {/* Overlay */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
//                   <p className="text-white font-medium text-sm md:text-base line-clamp-2">
//                     {image.caption}
//                   </p>
//                   <div className="flex items-center gap-2 mt-2">
//                     <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
//                       #HappyCustomer
//                     </div>
//                   </div>
//                 </div>

//                 {/* Zoom Icon */}
//                 <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   <ZoomIn className="w-5 h-5 text-slate-800" />
//                 </div>
//               </div>

//               {/* Border Effect */}
//               <div className="absolute inset-0 border-4 border-transparent group-hover:border-blue-500/50 rounded-2xl transition-all duration-300"></div>
//             </div>
//           ))}
//         </div>

//         {/* View All Button */}
//         <div className="text-center mt-10 md:mt-14">
//           <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
//             View All Testimonials
//           </button>
//         </div>
//       </div>

//       {/* Lightbox Modal */}
//       {selectedImage && (
//         <div
//           className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center overflow-hidden"
//           onClick={closeLightbox}
//         >
//           {/* Close Button */}
//           <button
//             className="absolute top-3 right-3 md:top-6 md:right-6 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-2 md:p-3 rounded-full transition-colors z-20"
//             onClick={closeLightbox}
//             aria-label="Close lightbox"
//           >
//             <X className="w-5 h-5 md:w-6 md:h-6" />
//           </button>

//           {/* Previous Button */}
//           <button
//             className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-2 md:p-3 rounded-full transition-colors z-20"
//             onClick={(e: MouseEvent) => { // Type the event object
//               e.stopPropagation();
//               goToPrevious();
//             }}
//             aria-label="Previous image"
//           >
//             <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
//           </button>

//           {/* Next Button */}
//           <button
//             className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-2 md:p-3 rounded-full transition-colors z-20"
//             onClick={(e: MouseEvent) => { // Type the event object
//               e.stopPropagation();
//               goToNext();
//             }}
//             aria-label="Next image"
//           >
//             <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
//           </button>

//           {/* Image Container */}
//           <div
//             className="relative w-full h-full flex items-center justify-center p-4 md:p-8 pb-20 md:pb-24"
//             onClick={(e: MouseEvent) => e.stopPropagation()} // Type the event object
//           >
//             <div className="relative w-full max-w-4xl max-h-full flex items-center justify-center">
//               <img
//                 src={selectedImage.src}
//                 alt={selectedImage.alt}
//                 className="max-w-full max-h-[calc(100vh-180px)] md:max-h-[calc(100vh-200px)] w-auto h-auto object-contain rounded-lg shadow-2xl"
//               />

//               {/* Caption */}
//               <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-4 md:p-6 rounded-b-lg">
//                 <p className="text-white text-sm md:text-lg font-medium mb-2">
//                   {selectedImage.caption}
//                 </p>
//                 <div className="flex items-center gap-2 flex-wrap">
//                   <span className="bg-blue-600 text-white px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-semibold">
//                     #HappyCustomer
//                   </span>
//                   <span className="text-white/70 text-xs md:text-sm">
//                     {currentIndex + 1} / {customerImages.length}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Thumbnail Navigation */}
//           <div className="absolute bottom-3 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 md:gap-2 bg-black/50 backdrop-blur-sm p-2 rounded-full z-20">
//             {customerImages.map((img, index) => (
//               <button
//                 key={img.id}
//                 className={`h-1.5 md:h-2 rounded-full transition-all ${
//                   index === currentIndex ? 'bg-white w-4 md:w-6' : 'bg-white/50 w-1.5 md:w-2'
//                 }`}
//                 onClick={(e: MouseEvent) => { // Type the event object
//                   e.stopPropagation();
//                   openLightbox(index);
//                 }}
//                 aria-label={`Go to image ${index + 1}`}
//               />
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default HappyCustomersGallery;

'use client'
import React from 'react';
import Image from 'next/image';

interface CustomerImage {
  id: number;
  src: string;
  alt: string;
  caption: string;
}

const HappyCustomersGallery: React.FC = () => {

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
          {customerImages.map((image) => (
            <div
              key={image.id}
              className="relative aspect-square rounded-2xl overflow-hidden shadow-lg"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10 md:mt-14">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
            View All Testimonials
          </button>
        </div>
      </div>


    </div>
  );
};

export default HappyCustomersGallery;