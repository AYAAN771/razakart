// "use client";

// import Image from "next/image";
// import { Truck, Package, Tag, Star } from "lucide-react";

// interface ProductInfoProps {
//   product: {
//     name: string;
//     price: number;
//     originalPrice: number;
//     discount: number;
//     inStock: boolean;
//     sku?: string;
//     brand: string;
//     rating?: number;
//     reviewCount?: number;
//   };
// }

// export default function ProductInfo({ product }: ProductInfoProps) {
//   return (
//     <div className='space-y-4'>
//       <div className='flex justify-between items-center w-full'>
//         <h1 className='xl:text-[24px] text-[20px] font-bold text-gray-900'>
//           {product.name}
//         </h1>
//         <div className='flex items-center gap-2 text-blue-600'>
//           <Truck className='w-5 h-5' />
//           <span className='font-semibold'>Free Delivery</span>
//         </div>
//       </div>
//       <div className='flex items-center gap-3 pb-2'>
//         <span className='text-sm text-gray-500 line-through'>
//           ₹{product.originalPrice.toLocaleString()}
//         </span>
//         <span className='xl:text-[24px] text-[20px] font-bold text-blue-600'>
//           ₹{product.price.toLocaleString()}
//         </span>
//         <span className='bg-[#155DFC] text-white text-xs font-bold px-2 py-1 rounded-full'>
//           -{product.discount}%
//         </span>
//       </div>
//       <div className='grid grid-cols-2 gap-3'>
//         <div className='bg-gray-50 rounded-lg p-3 shadow-sm border border-gray-100'>
//           <div className='flex items-center gap-2 mb-1'>
//             <Package className='w-5 h-5 text-gray-600' />
//             <span className='text-xs text-gray-600 font-medium'>
//               Availability
//             </span>
//           </div>
//           <p className='text-sm font-bold text-[#155DFC]'>
//             {product.inStock ? "In Stock" : "Out of Stock"}
//           </p>
//         </div>

//         <div className='bg-gray-50 rounded-lg p-3 shadow-sm border border-gray-100'>
//           <div className='flex items-center gap-2 mb-1'>
//             <Tag className='w-5 h-5 text-gray-600' />
//             <span className='text-xs text-gray-600 font-medium'>
//               Product Code
//             </span>
//           </div>
//           <p className='text-sm font-bold text-[#155DFC]'>{product.sku || "—"}</p>
//         </div>

//         <div className='bg-gray-50 rounded-lg p-3 shadow-sm border border-gray-100'>
//           <div className='flex items-center gap-2 mb-1'>
//             <Image
//               src='/logo.png'
//               alt='Brand'
//               width={20}
//               height={20}
//               className='w-5 h-5'
//             />
//             <span className='text-xs text-gray-600 font-medium'>Brand</span>
//           </div>
//           <p className='text-sm font-bold text-[#155DFC]'>{product.brand}</p>
//         </div>

//         <div className='bg-gray-50 rounded-lg p-3 shadow-sm border border-gray-100'>
//           <div className='flex items-center gap-2 mb-1'>
//             <Star className='w-5 h-5 text-gray-600' />
//             <span className='text-xs text-gray-600 font-medium'>Rating</span>
//           </div>
//           <p className='text-sm font-bold text-[#155DFC]'>
//             {product.rating || "—"} ({product.reviewCount || 0})
//           </p>
//         </div>
//       </div>
//       <a
//         href={`/order?url=${encodeURIComponent(
//           typeof window !== "undefined" ? window.location.href : ""
//         )}&title=${encodeURIComponent(product.name)}`}
//         className='cursor-pointer'
//       >
//         <button className='w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer'>
//           Order Now
//         </button>
//       </a>
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
// "use client";

// import Image from "next/image";
// import { Truck, Package, Tag, Cpu, HardDrive, Monitor } from "lucide-react";

// interface ProductInfoProps {
//   product: {
//     name: string;
//     price: number;
//     originalPrice: number;
//     discount: number;
//     inStock: boolean;
//     sku?: string;
//     brand: string;
//   };
// }

// export default function ProductInfo({ product }: ProductInfoProps) {
//   return (
//     <div className='flex flex-col min-h-full py-5 justify-between'>
//       {/* Title */}
//       <h1 className='xl:text-[24px] text-[20px] font-bold text-gray-900'>
//         {product.name}
//       </h1>

//       {/* Laptop Specifications */}
//       <ul className='grid grid-cols-2 gap-3 text-sm text-gray-700 bg-gray-50 border border-gray-100 rounded-lg p-4'>
//         <li className='flex items-center gap-2'>
//           <Cpu className='w-4 h-4 text-blue-600' />
//           <span className='font-medium'>Intel Core i5 (12th Gen)</span>
//         </li>
//         <li className='flex items-center gap-2'>
//           <HardDrive className='w-4 h-4 text-blue-600' />
//           <span className='font-medium'>16GB RAM • 512GB SSD</span>
//         </li>
//         <li className='flex items-center gap-2'>
//           <Monitor className='w-4 h-4 text-blue-600' />
//           <span className='font-medium'>15.6″ Full HD Display</span>
//         </li>
//         <li className='flex items-center gap-2'>
//           <Package className='w-4 h-4 text-blue-600' />
//           <span className='font-medium'>Windows 11 • MS Office</span>
//         </li>
//       </ul>

//       {/* Price */}
//       <div className='flex items-center gap-3'>
//         <span className='text-sm text-gray-500 line-through'>
//           ₹{product.originalPrice.toLocaleString()}
//         </span>
//         <span className='xl:text-[24px] text-[20px] font-bold text-blue-600'>
//           ₹{product.price.toLocaleString()}
//         </span>
//         <span className='bg-[#155DFC] text-white text-xs font-bold px-2 py-1 rounded-full'>
//           -{product.discount}%
//         </span>
//       </div>

//       {/* Order Button */}
//       <a
//         href={`/order?url=${encodeURIComponent(
//           typeof window !== "undefined" ? window.location.href : ""
//         )}&title=${encodeURIComponent(product.name)}`}
//       >
//         <button className='w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg'>
//           Order Now
//         </button>
//       </a>

//       {/* Icon Info Boxes */}
//       <div className='grid grid-cols-2 gap-3 pt-2'>
//         {/* Availability */}
//         <div className='bg-gray-50 rounded-lg p-3 shadow-sm border border-gray-100'>
//           <div className='flex items-center gap-2 mb-1'>
//             <Package className='w-5 h-5 text-gray-600' />
//             <span className='text-xs text-gray-600 font-medium'>
//               Availability
//             </span>
//           </div>
//           <p className='text-sm font-bold text-[#155DFC]'>
//             {product.inStock ? "In Stock" : "Out of Stock"}
//           </p>
//         </div>

//         {/* Product Code */}
//         <div className='bg-gray-50 rounded-lg p-3 shadow-sm border border-gray-100'>
//           <div className='flex items-center gap-2 mb-1'>
//             <Tag className='w-5 h-5 text-gray-600' />
//             <span className='text-xs text-gray-600 font-medium'>
//               Product Code
//             </span>
//           </div>
//           <p className='text-sm font-bold text-[#155DFC]'>
//             {product.sku || "—"}
//           </p>
//         </div>

//         {/* Brand */}
//         <div className='bg-gray-50 rounded-lg p-3 shadow-sm border border-gray-100'>
//           <div className='flex items-center gap-2 mb-1'>
//             <Image
//               src='/logo.png'
//               alt='Brand'
//               width={20}
//               height={20}
//               className='w-5 h-5'
//             />
//             <span className='text-xs text-gray-600 font-medium'>Brand</span>
//           </div>
//           <p className='text-sm font-bold text-[#155DFC]'>{product.brand}</p>
//         </div>

//         {/* Free Delivery (Replaced Rating) */}
//         <div className='bg-gray-50 rounded-lg p-3 shadow-sm border border-gray-100'>
//           <div className='flex items-center gap-2 mb-1'>
//             <Truck className='w-5 h-5 text-gray-600' />
//             <span className='text-xs text-gray-600 font-medium'>Delivery</span>
//           </div>
//           <p className='text-sm font-bold text-green-600'>Free Delivery</p>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";

import Image from "next/image";
import {
  Truck,
  Package,
  Tag,
  Cpu,
  HardDrive,
  Monitor,
  Tags,
  ScanBarcode,
} from "lucide-react";

interface ProductInfoProps {
  product: {
    name: string;
    price: number;
    originalPrice: number;
    discount: number;
    inStock: boolean;
    sku?: string;
    brand: string;
  };
}

export default function ProductInfo({ product }: ProductInfoProps) {
  return (
    <div className='flex flex-col min-h-full xl:py-0 py-5 gap-5 xl:gap-0 justify-between'>
      {/* Title */}
      <h1 className='xl:text-[24px] text-[20px] font-bold text-gray-900'>
        {product.name}
      </h1>
      <div className='xl:hidden flex gap-5 flex-col w-full items-start'>
        {/* Price */}
        <div className='flex flex-col gap-0'>
          <span className='text-sm text-gray-500 line-through'>
            ₹{product.originalPrice.toLocaleString()}
          </span>
          <div className='flex gap-2'>
            <span className='xl:text-[24px] text-[20px] font-bold text-blue-600'>
              ₹{product.price.toLocaleString()}
            </span>
            <span className='bg-[#155DFC] flex items-center text-white text-xs font-bold px-2 max-h-fit py-1 rounded-full'>
              -{product.discount}%
            </span>
          </div>
        </div>

        {/* Icon Info Boxes */}
        <div className='grid grid-cols-2 w-full flex-1 gap-3 pt-0'>
          {/* Product Code */}
          <div className='bg-gray-50 rounded-lg p-3 shadow-sm border border-gray-100'>
            <div className='flex items-center gap-2 mb-1'>
              <Tag className='w-5 h-5 text-gray-600' />
              <span className='text-xs text-gray-600 font-medium'>
                Product Code
              </span>
            </div>
            <p className='text-sm font-bold text-[#155DFC]'>
              {product.sku || "—"}
            </p>
          </div>

          {/* Brand */}
          <div className='bg-gray-50 rounded-lg p-3 shadow-sm border border-gray-100'>
            <div className='flex items-center gap-2 mb-1'>
              <Image
                src='/logo.png'
                alt='Brand'
                width={20}
                height={20}
                className='w-5 h-5'
              />
              <span className='text-xs text-gray-600 font-medium'>Brand</span>
            </div>
            <p className='text-sm font-bold text-[#155DFC]'>{product.brand}</p>
          </div>
        </div>
      </div>

      {/* Laptop Specifications */}
      <ul className='grid grid-cols-1 xl:grid-cols-2 gap-2 xl:gap-3 text-sm text-gray-700 bg-gray-50 border border-gray-100 rounded-lg xl:p-4 p-2'>
        <li className='flex items-center gap-2'>
          <Cpu className='w-4 h-4' />
          <span className='font-medium'>Intel Core i5 (12th Gen)</span>
        </li>
        <li className='flex items-center gap-2'>
          <HardDrive className='w-4 h-4' />
          <span className='font-medium'>16GB RAM • 512GB SSD</span>
        </li>
        <li className='flex items-center gap-2'>
          <Monitor className='w-4 h-4' />
          <span className='font-medium'>15.6″ Full HD Display</span>
        </li>
        <li className='flex items-center gap-2'>
          <Package className='w-4 h-4' />
          <span className='font-medium'>Windows 11 • MS Office</span>
        </li>
      </ul>
      <div className='xl:flex hidden gap-16 w-full items-start'>
        {/* Price */}
        <div className='flex flex-col'>
          <span className='text-sm text-gray-500 line-through'>
            ₹{product.originalPrice.toLocaleString()}
          </span>
          <div className='flex gap-2'>
            <span className='xl:text-[24px] text-[20px] font-bold text-blue-600'>
              ₹{product.price.toLocaleString()}
            </span>
            <span className='bg-[#155DFC] flex items-center text-white text-xs font-bold px-2 max-h-fit py-1 rounded-full'>
              -{product.discount}%
            </span>
          </div>
        </div>

        {/* Icon Info Boxes */}
        <div className='grid grid-cols-2 flex-1 gap-3 pt-0'>
          {/* Product Code */}
          <div className='bg-gray-50 rounded-lg p-3 shadow-sm border border-gray-100'>
            <div className='flex items-center gap-2 mb-1'>
              <ScanBarcode className='w-5 h-5 text-gray-600' />
              <span className='text-xs text-gray-600 font-medium'>
                Product Code
              </span>
            </div>
            <p className='text-sm font-bold'>{product.sku || "—"}</p>
          </div>

          {/* Brand */}
          <div className='bg-gray-50 rounded-lg p-3 shadow-sm border border-gray-100'>
            <div className='flex items-center gap-2 mb-1'>
              <Tags className='w-5 h-5 text-gray-600' />
              <span className='text-xs text-gray-600 font-medium'>Brand</span>
            </div>
            <p className='text-sm font-bold'>{product.brand}</p>
          </div>
        </div>
      </div>
      <img src='/bank-crap.webp' alt='' />
      {/* Order Button */}
      <a
        href={`/order?url=${encodeURIComponent(
          typeof window !== "undefined" ? window.location.href : ""
        )}&title=${encodeURIComponent(product.name)}`}
      >
        <button className='w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg'>
          Order Now
        </button>
      </a>
    </div>
  );
}
