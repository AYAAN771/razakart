"use client";
import Image from "next/image";
import PSlider from "./ui/PSlider";

const BrandSlider = () => {
  const brands = [
    { name: "Apple", logo: "/brands/apple.webp" },
    {
      name: "Xiaomi",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Xiaomi_logo.svg",
    },
    {
      name: "Samsung",
      logo: "/brands/samsung.svg",
    },
    {
      name: "Realme",
      logo: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Realme_logo_SVG.svg",
    },
    {
      name: "Lenovo",
      logo: "/brands/lenovo.svg",
    },
    {
      name: "Nokia",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/02/Nokia_wordmark.svg",
    },
    {
      name: "Dell",
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/Dell_logo_2016.svg",
    },
    {
      name: "HP",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg",
    },
    {
      name: "OnePlus",
      logo: "/brands/oneplus.svg",
    },
    { name: "Oppo", logo: "/brands/oppo.svg" },
  ];

  return (
    <PSlider
      title='Top Selling Brands'
      spaceBetween={16}
      containerClassName='w-full py-8 sm:py-12'
      breakpoints={{
        640: { slidesPerView: 1.5 },
        768: { slidesPerView: 1.5 },
        1024: { slidesPerView: 4 },
        1280: { slidesPerView: 5 },
        1536: { slidesPerView: 6 },
      }}
    >
      {brands.map((brand, index) => (
        <a
          key={index}
          target='_blank'
          rel='noopener noreferrer'
          className='block group cursor-pointer'
        >
          <div className='bg-white rounded-lg border border-gray-200 p-6  transition-shadow duration-300 h-32 flex flex-col items-center justify-center'>
            <div className='w-full h-20 flex items-center justify-center mb-2'>
              <Image
                width={60}
                height={60}
                src={brand.logo}
                alt={`${brand.name} logo`}
                className='max-w-full max-h-full object-contain'
                loading='lazy'
              />
            </div>
            <p className='text-sm font-medium text-gray-800 text-center group-hover:text-blue-600 transition-colors'>
              {brand.name}
            </p>
          </div>
        </a>
      ))}
    </PSlider>
  );
};

export default BrandSlider;
