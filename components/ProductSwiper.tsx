"use client";

import products from "@/data/products.json";
import PSlider from "./ui/PSlider";
import ProductCard from "./ui/ProductCard";

export default function ProductSwiper() {
  return (
    <PSlider
      title="Trending Now"
      showSeeAll={true}
      slidesPerView={2}
      spaceBetween={16}
      breakpoints={{
        640: { slidesPerView: 2 },
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
