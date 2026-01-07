"use client";

import { useState, useMemo } from "react";
import ProductCard from "@/components/ui/ProductCard";
import { Button } from "@/components/ui/button";
import { FilterState } from "@/components/CategoryFilter";

interface Product {
  id: number;
  name: string;
  slug: string;
  brand: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  images: Array<{ url: string; alt: string; duplicate?: boolean }>;
  specifications?: {
    Processor?: string;
    [key: string]: string | undefined;
  };
  inStock?: boolean;
  topSelling?: boolean;
}

interface SearchProductGridProps {
  products: Product[];
  setFilters: (filters: FilterState) => void;
  minPriceLimit: number;
  maxPriceLimit: number;
}

const PRODUCTS_PER_PAGE = 6;

export default function SearchProductGrid({
  products,
  setFilters,
  minPriceLimit,
  maxPriceLimit,
}: SearchProductGridProps) {
  const [visibleCount, setVisibleCount] = useState(PRODUCTS_PER_PAGE);

  const visibleProducts = useMemo(
    () => products.slice(0, visibleCount),
    [products, visibleCount]
  );

  const hasMore = visibleCount < products.length;

  const loadMore = () => {
    setVisibleCount((prev) =>
      Math.min(prev + PRODUCTS_PER_PAGE, products.length)
    );
  };

  return (
    <>
      <div className='grid grid-cols-2 relative sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6'>
        {visibleProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            slug={product.slug}
            price={product.price}
            originalPrice={product.originalPrice}
            discount={product.discount}
            images={product.images}
            className='bg-white'
          />
        ))}
      </div>

      {hasMore && (
        <div className='flex justify-center mt-8'>
          <Button
            onClick={loadMore}
            variant='outline'
            size='lg'
            className='bg-[#1447E6] text-white hover:bg-blue-700 transition-all duration-300 px-8 cursor-pointer hover:text-white'
          >
            Load More
          </Button>
        </div>
      )}
    </>
  );
}
