"use client";

import { useEffect, useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import productsData from "@/data/products.json";
import CategoryFilter, { FilterState } from "@/components/CategoryFilter";
import SearchHeader from "@/components/search/SearchHeader";
import SearchMobileFilterBar from "@/components/search/SearchMobileFilterBar";
import SearchDesktopSortBar from "@/components/search/SearchDesktopSortBar";
import SearchProductGrid from "@/components/search/SearchProductGrid";
import ScrollToTopButton from "@/components/category/ScrollToTopButton";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import { searchProducts } from "@/lib/searchUtils";

function SearchPageContent() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("q") || "";

  // Calculate price limits dynamically
  const allPrices = productsData.map((p) => p.price);
  const minPriceLimit = Math.min(...allPrices);
  const maxPriceLimit = Math.max(...allPrices);

  const [filters, setFilters] = useState<FilterState>({
    minPrice: minPriceLimit,
    maxPrice: maxPriceLimit,
    brands: [],
    processors: [],
    ram: [],
    storage: [],
    screenSize: [],
    inStock: false,
  });

  // Scroll to top when filters apply
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [filters]);

  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState<
    "featured" | "price-asc" | "price-desc" | "newest"
  >("featured");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showFilterBar, setShowFilterBar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Toggle Scroll-to-Top button visibility and Filter Bar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setShowScrollTop(currentScrollY > 200);

      // Filter bar hide/show logic
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowFilterBar(false); // Hide when scrolling down
      } else {
        setShowFilterBar(true); // Show when scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Search and Filtering Logic
  const filteredProducts = useMemo(() => {
    let products = [...productsData];

    // First apply search if query exists
    if (searchQuery && searchQuery.trim()) {
      products = searchProducts(products, searchQuery);
    }

    // Then apply filters
    return products.filter((product) => {
      // Price Check
      if (product.price < filters.minPrice || product.price > filters.maxPrice)
        return false;

      // Brand Check
      if (filters.brands.length > 0 && !filters.brands.includes(product.brand))
        return false;

      // In Stock Check
      if (filters.inStock && !product.inStock) return false;

      // Spec Checks
      if (
        filters.processors.length > 0 &&
        (!product.specifications?.Processor ||
          !filters.processors.includes(product.specifications.Processor))
      )
        return false;

      if (
        filters.ram.length > 0 &&
        (!product.specifications?.RAM ||
          !filters.ram.includes(product.specifications.RAM))
      )
        return false;

      if (
        filters.storage.length > 0 &&
        (!product.specifications?.Storage ||
          !filters.storage.includes(product.specifications.Storage))
      )
        return false;

      if (
        filters.screenSize.length > 0 &&
        (!product.specifications?.Display ||
          !filters.screenSize.includes(product.specifications.Display))
      )
        return false;

      return true;
    });
  }, [filters, searchQuery]);

  // Get available filter options based on current search results
  const availableProducts = useMemo(() => {
    return searchQuery && searchQuery.trim()
      ? searchProducts(productsData, searchQuery)
      : productsData;
  }, [searchQuery]);

  // Sorting Logic
  const sortedProducts = useMemo(() => {
    const sorted = [...filteredProducts];
    if (sortBy === "price-asc") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      sorted.sort((a, b) => b.price - a.price);
    } else if (sortBy === "newest") {
      sorted.sort((a, b) => b.id - a.id); // Assuming higher ID is newer
    }
    // "featured" is default order
    return sorted;
  }, [filteredProducts, sortBy]);

  return (
    <div className='bg-gray-50 min-h-screen py-8 sm:py-12'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <SearchHeader
          searchQuery={searchQuery}
          filteredCount={filteredProducts.length}
          availableCount={availableProducts.length}
        />

        <div className='flex flex-col lg:flex-row gap-6'>
          {/* Desktop Sidebar */}
          <aside className='hidden lg:block w-72 flex-shrink-0'>
            {/* <div className='sticky top-24 max-h-[calc(100vh-6rem)] overflow-y-auto'>
              <CategoryFilter
                products={availableProducts}
                filters={filters}
                setFilters={setFilters}
                minPriceLimit={minPriceLimit}
                maxPriceLimit={maxPriceLimit}
              />
            </div> */}
            <div className='sticky top-24 max-h-[calc(100vh-6rem)]'>
              <CategoryFilter
                products={availableProducts}
                filters={filters}
                setFilters={setFilters}
                minPriceLimit={minPriceLimit}
                maxPriceLimit={maxPriceLimit}
              />
            </div>
          </aside>

          <SearchMobileFilterBar
            showFilterBar={showFilterBar}
            isMobileFilterOpen={isMobileFilterOpen}
            setIsMobileFilterOpen={setIsMobileFilterOpen}
            availableProducts={availableProducts}
            filters={filters}
            setFilters={setFilters}
            minPriceLimit={minPriceLimit}
            maxPriceLimit={maxPriceLimit}
            sortBy={sortBy}
            setSortBy={setSortBy}
          />

          {/* Product Grid */}
          <div className='flex-1'>
            <SearchDesktopSortBar sortBy={sortBy} setSortBy={setSortBy} />

            {sortedProducts.length > 0 ? (
              <SearchProductGrid
                products={sortedProducts}
                setFilters={setFilters}
                minPriceLimit={minPriceLimit}
                maxPriceLimit={maxPriceLimit}
              />
            ) : (
              <div className='flex flex-col items-center justify-center py-20 text-center bg-white rounded-lg border border-dashed'>
                <div className='w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4'>
                  <Filter className='w-8 h-8 text-gray-400' />
                </div>
                <h3 className='text-xl font-semibold text-gray-900'>
                  No products found
                </h3>
                <p className='text-gray-500 mt-2 max-w-sm'>
                  We couldn&apos;t find any products matching your selected
                  filters.
                </p>
                <Button
                  variant='link'
                  onClick={() =>
                    setFilters({
                      minPrice: minPriceLimit,
                      maxPrice: maxPriceLimit,
                      brands: [],
                      processors: [],
                      ram: [],
                      storage: [],
                      screenSize: [],
                      inStock: false,
                    })
                  }
                  className='mt-4 text-blue-600'
                >
                  Clear all filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      <ScrollToTopButton show={showScrollTop} />
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className='min-h-screen bg-gray-50 flex items-center justify-center'>
          <div className='text-lg text-gray-600'>Loading...</div>
        </div>
      }
    >
      <SearchPageContent />
    </Suspense>
  );
}
