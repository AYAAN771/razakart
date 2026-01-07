"use client";

import { FilterState } from "@/components/CategoryFilter";
import CategoryFilter from "@/components/CategoryFilter";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Filter, ArrowUpDown, ShoppingCart } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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

interface SearchMobileFilterBarProps {
  showFilterBar: boolean;
  isMobileFilterOpen: boolean;
  setIsMobileFilterOpen: (open: boolean) => void;
  availableProducts: Product[];
  filters: FilterState;
  setFilters: (filters: FilterState) => void;
  minPriceLimit: number;
  maxPriceLimit: number;
  sortBy: "featured" | "price-asc" | "price-desc" | "newest";
  setSortBy: (sort: "featured" | "price-asc" | "price-desc" | "newest") => void;
}

export default function SearchMobileFilterBar({
  showFilterBar,
  isMobileFilterOpen,
  setIsMobileFilterOpen,
  availableProducts,
  filters,
  setFilters,
  minPriceLimit,
  maxPriceLimit,
  sortBy,
  setSortBy,
}: SearchMobileFilterBarProps) {
  return (
    <div
      className={`lg:hidden flex gap-2 mb-4 sticky top-[50px] z-30 bg-gray-50/95 backdrop-blur py-2 transition-transform duration-300 ${
        showFilterBar ? "translate-y-[20px]" : "translate-y-[20px]"
      }`}
    >
      <Sheet open={isMobileFilterOpen} onOpenChange={setIsMobileFilterOpen}>
        <SheetTrigger asChild>
          <Button variant='outline' className='flex-1 gap-2 border-gray-300'>
            <Filter className='w-4 h-4' /> Filters
          </Button>
        </SheetTrigger>
        <SheetContent
          side='left'
          className='w-[300px] sm:w-[350px] overflow-y-auto'
        >
          <SheetHeader>
            <SheetTitle>
              <ShoppingCart className='h-8 w-8 text-blue-600' />
            </SheetTitle>
          </SheetHeader>
          <div className='mt-4 pb-10'>
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
          <Button variant='outline' className='flex-1 gap-2 border-gray-300'>
            <ArrowUpDown className='w-4 h-4' /> Sort By
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align='end'
          className='w-[var(--radix-dropdown-menu-trigger-width)]'
        >
          <DropdownMenuItem onClick={() => setSortBy("featured")}>
            Featured
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setSortBy("newest")}>
            Newest First
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setSortBy("price-asc")}>
            Price: Low to High
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setSortBy("price-desc")}>
            Price: High to Low
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
