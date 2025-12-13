"use client";

import PSlider from "./PSlider";
import ProductCard from "./ProductCard";

interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  originalPrice: number;
  discount: number;
  images: Array<{ url: string; alt: string }>;
}

interface RelatedProductsProps {
  title: string;
  products: Product[];
}

export default function RelatedProducts({
  title,
  products,
}: RelatedProductsProps) {
  if (products.length === 0) return null;

  return (
    <PSlider
      title={title}
      slidesPerView={1.5}
      spaceBetween={16}
      containerClassName='bg-white py-8 px-6 rounded-lg mb-8 shadow-sm'
      breakpoints={{
        640: { slidesPerView: 1.5 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
      }}
    >
      {products.map((product) => (
        <ProductCard
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
  );
}
