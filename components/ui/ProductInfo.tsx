"use client";

import Image from "next/image";
import { Truck, Package, Tag, Star } from "lucide-react";

interface ProductInfoProps {
  product: {
    name: string;
    price: number;
    originalPrice: number;
    discount: number;
    inStock: boolean;
    sku?: string;
    brand: string;
    rating?: number;
    reviewCount?: number;
  };
}

export default function ProductInfo({ product }: ProductInfoProps) {
  return (
    <div className='space-y-4'>
      <h1 className='text-3xl font-bold text-gray-900'>{product.name}</h1>

      <div className='grid grid-cols-2 gap-3'>
        <div className='bg-gray-50 rounded-lg p-3 shadow-sm border border-gray-100'>
          <div className='flex items-center gap-2 mb-1'>
            <Package className='w-5 h-5 text-gray-600' />
            <span className='text-xs text-gray-600 font-medium'>Availability</span>
          </div>
          <p className='text-sm font-bold text-red-600'>
            {product.inStock ? "In Stock" : "Out of Stock"}
          </p>
        </div>

        <div className='bg-gray-50 rounded-lg p-3 shadow-sm border border-gray-100'>
          <div className='flex items-center gap-2 mb-1'>
            <Tag className='w-5 h-5 text-gray-600' />
            <span className='text-xs text-gray-600 font-medium'>Product Code</span>
          </div>
          <p className='text-sm font-bold text-red-600'>{product.sku || "—"}</p>
        </div>

        <div className='bg-gray-50 rounded-lg p-3 shadow-sm border border-gray-100'>
          <div className='flex items-center gap-2 mb-1'>
            <Image src='/logo.png' alt='Brand' width={20} height={20} className='w-5 h-5' />
            <span className='text-xs text-gray-600 font-medium'>Brand</span>
          </div>
          <p className='text-sm font-bold text-red-600'>{product.brand}</p>
        </div>

        <div className='bg-gray-50 rounded-lg p-3 shadow-sm border border-gray-100'>
          <div className='flex items-center gap-2 mb-1'>
            <Star className='w-5 h-5 text-gray-600' />
            <span className='text-xs text-gray-600 font-medium'>Rating</span>
          </div>
          <p className='text-sm font-bold text-red-600'>
            {product.rating || "—"} ({product.reviewCount || 0})
          </p>
        </div>
      </div>

      <div className='flex items-center gap-3 pt-2'>
        <span className='text-sm text-gray-500 line-through'>
          ₹{product.originalPrice.toLocaleString()}
        </span>
        <span className='text-3xl font-bold text-blue-600'>
          ₹{product.price.toLocaleString()}
        </span>
        <span className='bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full'>
          -{product.discount}%
        </span>
      </div>

      <div className='flex items-center gap-2 text-blue-600'>
        <Truck className='w-5 h-5' />
        <span className='font-semibold'>Free Delivery</span>
      </div>

      <a
        href={`/order?url=${encodeURIComponent(
          typeof window !== "undefined" ? window.location.href : ""
        )}&title=${encodeURIComponent(product.name)}`}
        className="cursor-pointer"
      >
        <button className='w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer'>
          Order Now
        </button>
      </a>
    </div>
  );
}