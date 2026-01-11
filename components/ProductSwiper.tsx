"use client";

import products from "@/data/products.json";
import PSlider from "./ui/PSlider";
import ProductCard from "./ui/ProductCard";

export default function ProductSwiper() {
  return (
    <PSlider
      title='Trending Now'
      showSeeAll={true}
      slidesPerView={1.5}
      spaceBetween={16}
      breakpoints={{
        640: { slidesPerView: 1.5 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
      }}
    >
      {products.map((product) => (
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
  );
}
