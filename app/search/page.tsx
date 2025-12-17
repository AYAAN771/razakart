"use client";

import { useEffect, useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import productsData from "@/data/products.json";
import ProductCard from "@/components/ui/ProductCard";
import CategoryFilter, { FilterState } from "@/components/CategoryFilter";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Filter, ArrowUpDown, ChevronUp, ShoppingCart } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { searchProducts } from "@/lib/searchUtils";

function SearchPageContent() {
    const searchParams = useSearchParams();
    const searchQuery = searchParams.get('q') || '';
    
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
    const [sortBy, setSortBy] = useState<"featured" | "price-asc" | "price-desc" | "newest">("featured");
    const [showScrollTop, setShowScrollTop] = useState(false);

    // Toggle Scroll-to-Top button visibility
    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 200);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

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
            if (product.price < filters.minPrice || product.price > filters.maxPrice) return false;

            // Brand Check
            if (filters.brands.length > 0 && !filters.brands.includes(product.brand)) return false;

            // In Stock Check
            if (filters.inStock && !product.inStock) return false;

            // Spec Checks
            if (
                filters.processors.length > 0 &&
                (!product.specifications?.Processor || !filters.processors.includes(product.specifications.Processor))
            )
                return false;

            if (
                filters.ram.length > 0 &&
                (!product.specifications?.RAM || !filters.ram.includes(product.specifications.RAM))
            )
                return false;

            if (
                filters.storage.length > 0 &&
                (!product.specifications?.Storage || !filters.storage.includes(product.specifications.Storage))
            )
                return false;

            if (
                filters.screenSize.length > 0 &&
                (!product.specifications?.Display || !filters.screenSize.includes(product.specifications.Display))
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
        <div className="bg-gray-50 min-h-screen pb-10">
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
                {/* Search Results Header */}
                <div className="mb-6">
                    {searchQuery ? (
                        <>
                            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                                Search results for &quot;{searchQuery}&quot;
                            </h1>
                            <p className="text-gray-500 mt-1">
                                {filteredProducts.length} {filteredProducts.length === 1 ? 'result' : 'results'} found
                                {availableProducts.length !== filteredProducts.length && (
                                    <span className="text-gray-400"> (filtered from {availableProducts.length} search results)</span>
                                )}
                            </p>
                        </>
                    ) : (
                        <>
                            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">All Laptops</h1>
                            <p className="text-gray-500 mt-1">{filteredProducts.length} Laptops found</p>
                        </>
                    )}
                </div>

                <div className="flex flex-col lg:flex-row gap-6">
                    {/* Desktop Sidebar */}
                    <aside className="hidden lg:block w-72 flex-shrink-0">
                        <div className="sticky top-24">
                            <CategoryFilter
                                products={availableProducts}
                                filters={filters}
                                setFilters={setFilters}
                                minPriceLimit={minPriceLimit}
                                maxPriceLimit={maxPriceLimit}
                            />
                        </div>
                    </aside>

                    {/* Mobile Filter & Sort Bar */}
                    <div className="lg:hidden flex gap-2 mb-4 sticky top-20 z-30 bg-gray-50/95 backdrop-blur py-2">
                        <Sheet open={isMobileFilterOpen} onOpenChange={setIsMobileFilterOpen}>
                            <SheetTrigger asChild>
                                <Button variant="outline" className="flex-1 gap-2 border-gray-300">
                                    <Filter className="w-4 h-4" /> Filters
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="left" className="w-[300px] sm:w-[350px] overflow-y-auto">
                                <SheetHeader>
                                    <SheetTitle> <ShoppingCart className='h-8 w-8 text-blue-600' /></SheetTitle>
                                </SheetHeader>
                                <div className="mt-4 pb-10">
                                    <CategoryFilter
                                        products={availableProducts}
                                        filters={filters}
                                        setFilters={setFilters}
                                        minPriceLimit={minPriceLimit}
                                        maxPriceLimit={maxPriceLimit}
                                    />
                                </div>
                            </SheetContent>
                        </Sheet>

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" className="flex-1 gap-2 border-gray-300">
                                    <ArrowUpDown className="w-4 h-4" /> Sort By
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-[var(--radix-dropdown-menu-trigger-width)]">
                                <DropdownMenuItem onClick={() => setSortBy("featured")}>Feature</DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setSortBy("newest")}>Newest First</DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setSortBy("price-asc")}>Price: Low to High</DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setSortBy("price-desc")}>Price: High to Low</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>

                    {/* Product Grid */}
                    <div className="flex-1">
                        {/* Desktop Sort Bar (Optional, can be added here if needed) */}
                        <div className="hidden lg:flex justify-end mb-4 items-center">
                            <span className="text-sm text-gray-500 mr-2">Sort By:</span>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="sm" className="font-semibold text-gray-800">
                                        {sortBy === "featured" && "Featured"}
                                        {sortBy === "newest" && "Newest First"}
                                        {sortBy === "price-asc" && "Price: Low to High"}
                                        {sortBy === "price-desc" && "Price: High to Low"}
                                        <ChevronDown className="ml-1 w-4 h-4" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuItem onClick={() => setSortBy("featured")}>Featured</DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => setSortBy("newest")}>Newest First</DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => setSortBy("price-asc")}>Price: Low to High</DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => setSortBy("price-desc")}>Price: High to Low</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>

                        {sortedProducts.length > 0 ? (
                            <div className="grid grid-cols-2 relative sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                                {sortedProducts.map((product) => (
                                    <ProductCard
                                        key={product.id}
                                        id={product.id}
                                        name={product.name}
                                        slug={product.slug}
                                        price={product.price}
                                        originalPrice={product.originalPrice}
                                        discount={product.discount}
                                        images={product.images}
                                        className="bg-white hover:shadow-xl transition-shadow duration-300"
                                    />
                                ))}

                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center py-20 text-center bg-white rounded-lg border border-dashed">
                                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                                    <Filter className="w-8 h-8 text-gray-400" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900">No products found</h3>
                                <p className="text-gray-500 mt-2 max-w-sm">We couldn&apos;t find any products matching your selected filters.</p>
                                <Button
                                    variant="link"
                                    onClick={() => setFilters({
                                        minPrice: minPriceLimit,
                                        maxPrice: maxPriceLimit,
                                        brands: [],
                                        processors: [],
                                        ram: [],
                                        storage: [],
                                        screenSize: [],
                                        inStock: false
                                    })}
                                    className="mt-4 text-blue-600"
                                >
                                    Clear all filters
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Scroll to Top Button */}
            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 z-50 p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300"
                >
                    <ChevronUp className="w-6 h-6" />
                </button>
            )}
        </div>
    );
}

export default function SearchPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-gray-50 flex items-center justify-center"><div className="text-lg text-gray-600">Loading...</div></div>}>
            <SearchPageContent />
        </Suspense>
    );
}

function ChevronDown({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m6 9 6 6 6-6" /></svg>
    )
}