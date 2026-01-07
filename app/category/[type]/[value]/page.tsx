"use client";

import { use, useState, useEffect, useMemo } from "react";
import CategoryFilter, { FilterState } from "@/components/CategoryFilter";
import CategoryHeader from "@/components/category/CategoryHeader";
import MobileFilterBar from "@/components/category/MobileFilterBar";
import DesktopSortBar from "@/components/category/DesktopSortBar";
import ProductGrid from "@/components/category/ProductGrid";
import ScrollToTopButton from "@/components/category/ScrollToTopButton";
import { CategoryHandler } from "@/components/category/CategoryHandler";
import ProductsData from "@/data/products.json";

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
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState<FilterState>({
    minPrice: 0,
    maxPrice: 100000,
    brands: [],
    processors: [],
    ram: [],
    storage: [],
    screenSize: [],
    inStock: false,
  });
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState<
    "featured" | "price-asc" | "price-desc" | "newest"
  >("featured");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showMobileFilters, setShowMobileFilters] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowScrollTop(currentScrollY > 200);

      // Hide/show mobile filters based on scroll direction
      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY) {
          setShowMobileFilters(false); // Hide on scroll down
        } else {
          setShowMobileFilters(true); // Show on scroll up
        }
      } else {
        setShowMobileFilters(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const categoryTitle =
    categoryTitles[resolvedParams.type]?.[resolvedParams.value] || "Products";

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    return CategoryHandler.getFilteredAndSortedProducts(
      products,
      allProducts,
      filters,
      sortBy,
      resolvedParams.type
    );
  }, [products, allProducts, filters, sortBy, resolvedParams.type]);

  // Calculate price limits dynamically from all products
  const allPrices = allProducts.map((p) => p.price);
  const minPriceLimit = allPrices.length > 0 ? Math.min(...allPrices) : 0;
  const maxPriceLimit = allPrices.length > 0 ? Math.max(...allPrices) : 100000;

  // Update filter limits when all products change
  useEffect(() => {
    if (allProducts.length > 0) {
      setFilters((prev) => ({
        ...prev,
        minPrice: minPriceLimit,
        maxPrice: maxPriceLimit,
      }));
    }
  }, [allProducts, minPriceLimit, maxPriceLimit]);

  useEffect(() => {
    const filterProducts = () => {
      setLoading(true);

      try {
        const allProductsData = ProductsData as Product[];
        setAllProducts(allProductsData);
        
        const filtered = CategoryHandler.filterProductsByCategory(
          allProductsData,
          resolvedParams.type,
          resolvedParams.value
        );

        setProducts(filtered);
      } catch (error) {
        console.error("Error loading products:", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    filterProducts();
  }, [resolvedParams.type, resolvedParams.value]);

  if (loading) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <div className='text-lg text-gray-600'>Loading products...</div>
      </div>
    );
  }

  return (
    <div className='bg-gray-50 min-h-screen pb-10'>
      <div className='max-w-7xl mx-auto px-4 md:px-8 py-6'>
        <CategoryHeader 
          title={categoryTitle} 
          productCount={filteredProducts.length} 
        />

        <div className='flex flex-col lg:flex-row gap-6'>
          {/* Desktop Sidebar */}
          <aside className='hidden lg:block w-72 flex-shrink-0'>
            <div className='sticky top-24 max-h-[calc(100vh-6rem)] overflow-y-auto'>
              <CategoryFilter
                products={allProducts}
                filters={filters}
                setFilters={setFilters}
                minPriceLimit={minPriceLimit}
                maxPriceLimit={maxPriceLimit}
              />
            </div>
          </aside>

          <MobileFilterBar
            showMobileFilters={showMobileFilters}
            isMobileFilterOpen={isMobileFilterOpen}
            setIsMobileFilterOpen={setIsMobileFilterOpen}
            allProducts={allProducts}
            filters={filters}
            setFilters={setFilters}
            minPriceLimit={minPriceLimit}
            maxPriceLimit={maxPriceLimit}
            sortBy={sortBy}
            setSortBy={setSortBy}
          />

          {/* Product Grid */}
          <div className='flex-1'>
            <DesktopSortBar sortBy={sortBy} setSortBy={setSortBy} />
            
            <ProductGrid 
              products={filteredProducts}
              setFilters={setFilters}
              minPriceLimit={minPriceLimit}
              maxPriceLimit={maxPriceLimit}
            />
          </div>
        </div>
      </div>

      <ScrollToTopButton show={showScrollTop} />
    </div>
  );
}
