"use client";
import Image from "next/image";
import PSlider from "./ui/PSlider";

const BrandSlider = () => {
  const brands = [
    { name: "Apple", logo: "/brands/apple.webp", url: "https://www.apple.com" },
    { name: "Xiaomi", logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Xiaomi_logo.svg", url: "https://www.mi.com" },
    { name: "Samsung", logo: "/brands/samsung.svg", url: "https://www.samsung.com" },
    { name: "Realme", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Realme_logo_SVG.svg", url: "https://www.realme.com" },
    { name: "Lenovo", logo: "/brands/lenovo.svg", url: "https://www.lenovo.com" },
    { name: "Nokia", logo: "https://upload.wikimedia.org/wikipedia/commons/0/02/Nokia_wordmark.svg", url: "https://www.nokia.com" },
    { name: "Dell", logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/Dell_logo_2016.svg", url: "https://www.dell.com" },
    { name: "HP", logo: "https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg", url: "https://www.hp.com" },
    { name: "OnePlus", logo: "/brands/oneplus.svg", url: "https://www.oneplus.com" },
    { name: "Oppo", logo: "/brands/oppo.svg", url: "https://www.oppo.com" }
  ];

  return (
    <PSlider
      title="Top Selling Brands"
      slidesPerView={6}
      spaceBetween={16}
      containerClassName="w-full max-w-7xl mx-auto px-4 py-8"
      breakpoints={{
        640: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
        1280: { slidesPerView: 5 },
        1536: { slidesPerView: 6 },
      }}
    >
      {brands.map((brand, index) => (
        <a
          key={index}
          href={brand.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block group cursor-pointer"
        >
          <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300 h-32 flex flex-col items-center justify-center">
            <div className="w-full h-20 flex items-center justify-center mb-2">
              <Image
                width={60}
                height={60}
                src={brand.logo}
                alt={`${brand.name} logo`}
                className="max-w-full max-h-full object-contain"
                loading="lazy"
              />
            </div>
            <p className="text-sm font-medium text-gray-800 text-center group-hover:text-blue-600 transition-colors">
              {brand.name}
            </p>
          </div>
        </a>
      ))}
    </PSlider>
  );
};

export default BrandSlider;