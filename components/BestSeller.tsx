// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { Eye, Truck } from "lucide-react";
// import products from "@/data/products.json";
// import PSlider from "./ui/PSlider";
// import ProductCard from "./ui/ProductCard";

// const BestSellerHeroSection: React.FC = () => {
//   const [activeTab, setActiveTab] = useState<"bestsellers" | "newarrivals">(
//     "bestsellers"
//   );

//   const bestSellers = products.slice(0, 5);
//   const newArrivals = products.slice(2, 5);
//   const displayProducts =
//     activeTab === "bestsellers" ? bestSellers : newArrivals;

//   return (
//     <div className='w-full bg-black py-16'>
//       <div className='xl:max-w-7xl max-w-[90vw] mx-auto px-0'>
//         <div className='grid grid-cols-1 lg:grid-cols-12 gap-10 items-center'>
//           <div className='lg:col-span-3 space-y-6'>
//             <h2 className='text-4xl font-bold text-white'>
//               New Drops. <br /> {"Don't Miss Them!"}
//             </h2>
//             <p className='text-blue-400 text-xl font-semibold'>
//               Grab Yours Now!
//             </p>

//             <div className='space-y-3'>
//               <button
//                 onClick={() => setActiveTab("bestsellers")}
//                 className={`block text-lg transition-colors duration-200 ${
//                   activeTab === "bestsellers"
//                     ? "text-white font-bold"
//                     : "text-gray-400 hover:text-white"
//                 }`}
//               >
//                 ● Best Sellers
//               </button>

//               <button
//                 onClick={() => setActiveTab("newarrivals")}
//                 className={`block text-lg transition-colors duration-200 ${
//                   activeTab === "newarrivals"
//                     ? "text-white font-bold"
//                     : "text-gray-400 hover:text-white"
//                 }`}
//               >
//                 ● New Arrivals
//               </button>
//             </div>
//           </div>

//           <div className='lg:col-span-9'>
//             <PSlider
//               spaceBetween={16}
//               containerClassName=''
//               breakpoints={{
//                 0: { slidesPerView: 1.3, spaceBetween: 12 },
//                 768: { slidesPerView: 2, spaceBetween: 16 },
//                 1024: { slidesPerView: 3, spaceBetween: 16 },
//               }}
//             >
//               {displayProducts.map((product) => (
//                 <ProductCard
//                   className='bg-white'
//                   key={product.id}
//                   id={product.id}
//                   name={product.name}
//                   slug={product.slug}
//                   price={product.price}
//                   originalPrice={product.originalPrice}
//                   discount={product.discount}
//                   images={product.images}
//                 />
//               ))}
//             </PSlider>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BestSellerHeroSection;

"use client";

import { useState } from "react";

import products from "@/data/products.json";
import PSlider from "./ui/PSlider";
import ProductCard from "./ui/ProductCard";

const BestSellerHeroSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"bestsellers" | "newarrivals">(
    "bestsellers"
  );

  const bestSellers = products.slice(0, 5);
  const newArrivals = products.slice(2, 5);
  const displayProducts =
    activeTab === "bestsellers" ? bestSellers : newArrivals;

  return (
    <div className='w-full bg-black py-16'>
      <div className='xl:max-w-7xl max-w-[90vw] mx-auto px-0'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-10 items-start'>
          <div className='lg:col-span-3 space-y-6'>
            <h2 className='text-4xl font-bold text-white'>
              New Drops. <br /> {"Don't Miss Them!"}
            </h2>
            <p className='text-blue-400 text-xl font-semibold'>
              Grab Yours Now!
            </p>

            <div className='space-y-3'>
              <button
                onClick={() => setActiveTab("bestsellers")}
                className={`block text-lg transition-colors duration-200 ${activeTab === "bestsellers"
                    ? "text-white font-bold"
                    : "text-gray-400 hover:text-white"
                  }`}
              >
                ● Best Sellers
              </button>

              <button
                onClick={() => setActiveTab("newarrivals")}
                className={`block text-lg transition-colors duration-200 ${activeTab === "newarrivals"
                    ? "text-white font-bold"
                    : "text-gray-400 hover:text-white"
                  }`}
              >
                ● New Arrivals
              </button>
            </div>
          </div>

          <div className='lg:col-span-9'>
            <PSlider
              spaceBetween={16}
              containerClassName=''
              breakpoints={{
                0: { slidesPerView: 1.3, spaceBetween: 12 },
                768: { slidesPerView: 2, spaceBetween: 16 },
                1024: { slidesPerView: 3, spaceBetween: 16 },
              }}
            >
              {displayProducts.map((product) => (
                <ProductCard
                  className='bg-white'
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  slug={product.slug}
                  price={product.price}
                  originalPrice={product.originalPrice}
                  discount={product.discount}
                  images={product.images}
                />
              ))}
            </PSlider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSellerHeroSection;
