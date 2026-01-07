"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface SearchDesktopSortBarProps {
  sortBy: "featured" | "price-asc" | "price-desc" | "newest";
  setSortBy: (sort: "featured" | "price-asc" | "price-desc" | "newest") => void;
}

export default function SearchDesktopSortBar({ sortBy, setSortBy }: SearchDesktopSortBarProps) {
  return (
    <div className='hidden lg:flex justify-end mb-4 items-center'>
      <span className='text-sm text-gray-500 mr-2'>Sort By:</span>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant='ghost'
            size='sm'
            className='font-semibold text-gray-800'
          >
            {sortBy === "featured" && "Featured"}
            {sortBy === "newest" && "Newest First"}
            {sortBy === "price-asc" && "Price: Low to High"}
            {sortBy === "price-desc" && "Price: High to Low"}
            <ChevronDown className='ml-1 w-4 h-4' />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>
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