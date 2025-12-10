"use client";

import { useState } from "react";
import Image from "next/image";
import { Eye, Truck } from "lucide-react";
import products from "@/data/products.json";
import PSlider from "./ui/PSlider";

const BestSellerHeroSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"bestsellers" | "newarrivals">("bestsellers");

  const bestSellers = products.slice(0, 5);
  const newArrivals = products.slice(2, 5);
  const displayProducts = activeTab === "bestsellers" ? bestSellers : newArrivals;

  return (
    <div className='w-full bg-black py-16'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-10 items-center'>
          <div className='lg:col-span-3 space-y-6'>
            <h2 className='text-4xl font-bold text-white'>
              New Drops. <br /> {"Don't Miss Them!"}
            </h2>
            <p className='text-blue-400 text-xl font-semibold'>Grab Yours Now!</p>

            <div className='space-y-3'>
              <button
                onClick={() => setActiveTab("bestsellers")}
                className={`block text-lg transition-colors duration-200 ${
                  activeTab === "bestsellers" ? "text-white font-bold" : "text-gray-400 hover:text-white"
                }`}
              >
                ● Best Sellers
              </button>

              <button
                onClick={() => setActiveTab("newarrivals")}
                className={`block text-lg transition-colors duration-200 ${
                  activeTab === "newarrivals" ? "text-white font-bold" : "text-gray-400 hover:text-white"
                }`}
              >
                ● New Arrivals
              </button>
            </div>
          </div>

          <div className='lg:col-span-9'>
            <PSlider
              slidesPerView={1}
              spaceBetween={16}
              containerClassName=""
              breakpoints={{
                0: { slidesPerView: 1, spaceBetween: 12 },
                768: { slidesPerView: 2, spaceBetween: 16 },
                1024: { slidesPerView: 3, spaceBetween: 16 },
              }}
            >
              {displayProducts.map((product) => (
                <a key={product.id} href={`/product/${product.slug}`} className="cursor-pointer">
                  <div className='bg-gradient-to-b from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-gray-700 h-full flex flex-col'>
                    <div className='relative bg-gray-700'>
                      <div className='absolute top-3 left-3 bg-white/75 text-xs font-bold px-3 py-1 rounded-full z-20'>
                        <div className='flex items-center gap-1'>
                          <Truck className='w-4 h-4 lg:w-4 text-blue-500 lg:h-4' />
                          <span className='text-blue-500 font-semibold text-[10px] lg:text-sm'>Free Delivery</span>
                        </div>
                      </div>
                      <span className='absolute top-3 right-3 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full z-20'>
                        {product.discount}% Off
                      </span>

                      <div className='relative w-full h-56 overflow-hidden'>
                        <Image
                          src={product.images[0].url}
                          alt={product.images[0].alt}
                          fill
                          sizes='(max-width: 768px) 100vw, 33vw'
                          className='object-cover transition-transform duration-300 hover:scale-105'
                        />
                      </div>
                    </div>

                    <div className='bg-white p-4 rounded-b-2xl flex flex-col flex-grow'>
                      <h3 className='font-semibold text-sm text-gray-900'>{product.name}</h3>

                      <p className='text-gray-600 text-xs mb-2 line-clamp-1'>
                        {Object.values(product.specifications).slice(0, 2).join(' | ')}
                      </p>

                      <div className='flex items-center gap-2 mb-3 mt-auto'>
                        <span className='font-bold text-lg text-gray-900'>
                          ₹{product.price.toLocaleString("en-IN")}
                        </span>
                        <span className='text-xs line-through text-gray-400'>
                          ₹{product.originalPrice.toLocaleString("en-IN")}
                        </span>
                      </div>

                      <button className='w-full bg-blue-600 text-white py-2 rounded-lg flex items-center justify-center gap-2 text-sm font-medium hover:bg-blue-700 transition-colors cursor-pointer'>
                        <Eye className='w-4 h-4' />
                        View Product
                      </button>
                    </div>
                  </div>
                </a>
              ))}
            </PSlider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSellerHeroSection;
