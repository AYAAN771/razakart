"use client";

import products from "@/data/products.json";
import PSlider from "./ui/PSlider";
import ProductCard from "./ui/ProductCard";

export default function ProductSwiper2() {
  const filteredProducts = products.filter(product => product.price < 15000);

  return (
    <PSlider
      title='Laptops Under ₹15,000'
      showSeeAll={true}
      slidesPerView={1.5}
      spaceBetween={16}
      containerClassName="w-full bg-white py-12 px-4 sm:px-6 lg:px-8"
      breakpoints={{
        640: { slidesPerView: 1.5 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
      }}
    >
      {filteredProducts.map((product) => (
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