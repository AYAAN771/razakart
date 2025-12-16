// // app/category/[type]/[value]/page.tsx
// "use client";

// import { useState, useEffect } from "react";
// import { ChevronRight } from "lucide-react";
// import ProductCard from "@/components/ui/ProductCard";

// // Mock data - replace with your actual data fetching
// const categoryTitles: Record<string, Record<string, string>> = {
//   price: {
//     u10: "Under ₹10,000",
//     u15: "Under ₹15,000",
//     u20: "Under ₹20,000",
//     u25: "Under ₹25,000",
//     u50: "Under ₹50,000",
//     u75: "Under ₹75,000",
//     u100: "Under ₹100,000",
//     o100: "Over ₹100,000",
//   },
//   brand: {
//     hp: "HP",
//     dell: "Dell",
//     lenovo: "Lenovo",
//     acer: "Acer",
//     asus: "Asus",
//     apple: "Apple",
//   },
//   processor: {
//     i3: "Intel i3 Generation",
//     i5: "Intel i5 Generation",
//     i7: "Intel i7 Generation",
//     m1: "Apple M1",
//     m2: "Apple M2",
//   },
// };

// interface Product {
//   id: string;
//   name: string;
//   slug: string;
//   price: number;
//   originalPrice?: number;
//   discount?: number;
//   images: Array<{ url: string; alt: string }>;
// }

// export default function CategoryPage({
//   params,
// }: {
//   params: { type: string; value: string };
// }) {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(true);

//   const categoryTitle = categoryTitles[params.type]?.[params.value] || "Products";
//   const categoryType = params.type === "price" ? "Shop By Price" : 
//                        params.type === "brand" ? "Shop By Brands" : 
//                        "Shop By Processor";

//   useEffect(() => {
//     // Replace with your actual API call
//     const fetchProducts = async () => {
//       setLoading(true);
//       // const response = await fetch(`/api/products?type=${params.type}&value=${params.value}`);
//       // const data = await response.json();

//       // Mock data for demonstration
//       const mockProducts: Product[] = Array.from({ length: 12 }, (_, i) => ({
//         id: `product-${i + 1}`,
//         name: `HP 15s Laptop, 12th Gen Intel Core i3-1215U, 15.6-inch (39.6 cm), FHD, 8GB DDR4, 512GB SSD`,
//         slug: `laptop-${i + 1}`,
//         price: 14990 + (i * 1000),
//         originalPrice: 19990 + (i * 1000),
//         discount: 25,
//         images: [
//           { url: "/placeholder-laptop-1.jpg", alt: "Laptop front view" },
//           { url: "/placeholder-laptop-2.jpg", alt: "Laptop side view" },
//         ],
//       }));

//       setProducts(mockProducts);
//       setLoading(false);
//     };

//     fetchProducts();
//   }, [params.type, params.value]);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-lg text-gray-600">Loading products...</div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Breadcrumb */}
//       <div className="border-b border-gray-200 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
//           <div className="flex items-center gap-2 text-sm text-gray-600">
//             <a href="/" className="hover:text-blue-600 transition-colors">
//               Home
//             </a>
//             <ChevronRight className="h-4 w-4" />
//             <span className="text-gray-400">{categoryType}</span>
//             <ChevronRight className="h-4 w-4" />
//             <span className="text-blue-600 font-medium">{categoryTitle}</span>
//           </div>
//         </div>
//       </div>

//       {/* Header Section */}
//       <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
//           <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
//             {categoryTitle}
//           </h1>
//           <p className="text-blue-100 text-sm sm:text-base">
//             {products.length} products available
//           </p>
//         </div>
//       </div>

//       {/* Products Grid */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
//         {products.length === 0 ? (
//           <div className="text-center py-12">
//             <p className="text-gray-600 text-lg">No products found in this category</p>
//           </div>
//         ) : (
//           <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
//             {products.map((product) => (
//               <ProductCard
//                 key={product.id}
//                 {...product}
//                 cardHeight="aspect-[3/4]"
//               />
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Bottom Spacing */}
//       <div className="h-12" />
//     </div>
//   );
// }




// app/category/[type]/[value]/page.tsx
"use client";

import { use, useState, useEffect } from "react";
import ProductCard from "@/components/ui/ProductCard";
import ProductsData from '@/data/products.json';
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const categoryTitles: Record<string, Record<string, string>> = {
  price: {
    "under-10000": "Under ₹10,000",
    "under-15000": "Under ₹15,000",
    "under-20000": "Under ₹20,000",
    "under-25000": "Under ₹25,000",
    "under-50000": "Under ₹50,000",
    "under-75000": "Under ₹75,000",
    "under-100000": "Under ₹100,000",
    "over-100000": "Over ₹100,000",
  },
  brand: {
    hp: "HP",
    dell: "Dell",
    lenovo: "Lenovo",
    acer: "Acer",
    asus: "Asus",
    apple: "Apple",
  },
  processor: {
    "intel-i3": "Intel i3 Generation",
    "intel-i5": "Intel i5 Generation",
    "intel-i7": "Intel i7 Generation",
    "apple-m1": "Apple M1",
    "apple-m2": "Apple M2",
  },
};

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

export default function CategoryPage({
  params,
}: {
  params: Promise<{ type: string; value: string }>;
}) {
  // Unwrap the promise using React.use()
  const resolvedParams = use(params);

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const categoryTitle = categoryTitles[resolvedParams.type]?.[resolvedParams.value] || "Products";
  const categoryType = resolvedParams.type === "price" ? "Shop By Price" :
    resolvedParams.type === "brand" ? "Shop By Brands" :
      "Shop By Processor";

  useEffect(() => {
    const filterProducts = () => {
      setLoading(true);

      try {
        const allProducts = ProductsData as Product[];
        let filtered: Product[] = [];

        if (resolvedParams.type === 'price') {
          filtered = allProducts.filter(product => {
            switch (resolvedParams.value) {
              case 'under-10000': return product.price < 10000;
              case 'under-15000': return product.price < 15000;
              case 'under-20000': return product.price < 20000;
              case 'under-25000': return product.price < 25000;
              case 'under-50000': return product.price < 50000;
              case 'under-75000': return product.price < 75000;
              case 'under-100000': return product.price < 100000;
              case 'over-100000': return product.price >= 100000;
              default: return false;
            }
          });
        } else if (resolvedParams.type === 'brand') {
          filtered = allProducts.filter(product =>
            product.brand.toLowerCase() === resolvedParams.value.toLowerCase()
          );
        } else if (resolvedParams.type === 'processor') {
          filtered = allProducts.filter(product => {
            const processor = product.specifications?.Processor?.toLowerCase() || '';
            switch (resolvedParams.value) {
              case 'intel-i3': return processor.includes('i3');
              case 'intel-i5': return processor.includes('i5');
              case 'intel-i7': return processor.includes('i7');
              case 'apple-m1': return processor.includes('m1');
              case 'apple-m2': return processor.includes('m2');
              default: return false;
            }
          });
        }

        setProducts(filtered);
      } catch (error) {
        console.error('Error loading products:', error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    filterProducts();
  }, [resolvedParams.type, resolvedParams.value]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg text-gray-600">Loading products...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="border-b border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-gray-400">{categoryType}</span>
            <ChevronRight className="h-4 w-4" />
            <span className="text-blue-600 font-medium">{categoryTitle}</span>
          </div>
        </div>
      </div>

      {/* Header Section */}
      <div className="bg-[#F9FAFB] text-blue-600">
        <div className="xl:max-w-7xl max-w-[90vw] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
              {categoryTitle}
            </h1>
            {/* <div className='h-1 bg-white/30 rounded-full mt-3 w-32 '></div> */}
            <p className="text-gray-600 text-base sm:text-lg mt-4">
              {products.length} {products.length === 1 ? 'product' : 'products'} available
            </p>
          </div>
        </div>
      </div>

      {/* Products Flexbox Grid */}
      <div className="w-full bg-white pt-6 pb-12">
        <div className="xl:max-w-7xl max-w-[90vw] mx-auto px-0">
          {products.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">😔</div>
              <p className="text-gray-600 text-xl font-medium mb-2">
                No products found in this category
              </p>
              <p className="text-gray-500 text-sm">
                Try browsing other categories or price ranges
              </p>
            </div>
          ) : (
            <div className="flex justify-center flex-wrap gap-4 md:gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="lg:w-[calc(25%-24px)] md:w-[calc(33.333%-20px)] w-[calc(50%-12px)]"
                >
                  <ProductCard
                    id={product.id}
                    name={product.name}
                    slug={product.slug}
                    price={product.price}
                    originalPrice={product.originalPrice}
                    discount={product.discount}
                    images={product.images}
                    cardHeight="aspect-[3/4]"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Bottom Spacing */}
      <div className="h-12" />
    </div>
  );
}