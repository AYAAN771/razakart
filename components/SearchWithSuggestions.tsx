"use client";

import { useState, useRef, useMemo } from "react";
import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import productsData from "@/data/products.json";
import { getSearchSuggestions } from "@/lib/searchUtils";



interface SearchSuggestion {
  type: 'product' | 'brand' | 'category' | 'price';
  text: string;
  value: string;
  count?: number;
}

interface SearchWithSuggestionsProps {
  placeholder?: string;
  className?: string;
  isMobile?: boolean;
  onSearch?: () => void;
}

export default function SearchWithSuggestions({ 
  placeholder = "Search for Laptop", 
  className = "",
  isMobile = false,
  onSearch
}: SearchWithSuggestionsProps) {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(() => searchParams.get('q') || "");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);

  // Popular searches constant
  const popularSearches: SearchSuggestion[] = useMemo(() => [
    { type: 'price', text: 'Laptops under ₹20,000', value: 'under 20000' },
    { type: 'brand', text: 'HP Laptops', value: 'hp' },
    { type: 'category', text: 'Intel i5 Laptops', value: 'intel i5' },
    { type: 'price', text: 'Laptops under ₹50,000', value: 'under 50000' },
    { type: 'brand', text: 'Dell Laptops', value: 'dell' },
    { type: 'category', text: '8GB RAM Laptops', value: '8gb ram' },
  ], []);

  // Generate suggestions based on query
  const suggestions = useMemo(() => {
    if (query.length < 2) return popularSearches;
    return getSearchSuggestions(productsData, query);
  }, [query, popularSearches]);

  const handleSearch = (searchQuery?: string) => {
    const searchTerm = searchQuery || query;
    if (!searchTerm.trim()) return;

    // Encode the search query for URL
    const encodedQuery = encodeURIComponent(searchTerm.trim());
    router.push(`/search?q=${encodedQuery}`);
    setShowSuggestions(false);
    // Keep the search term in the input
    setQuery(searchTerm.trim());
    // Close mobile sheet if callback provided
    onSearch?.();
  };

  const handleSuggestionClick = (suggestion: SearchSuggestion) => {
    setShowSuggestions(false);
    
    if (suggestion.type === 'product') {
      router.push(`/product/${suggestion.value}`);
      setQuery("");
      onSearch?.();
    } else if (suggestion.type === 'brand') {
      router.push(`/category/brand/${suggestion.value}`);
      setQuery("");
      onSearch?.();
    } else if (suggestion.type === 'price' && suggestion.value.startsWith('under-')) {
      router.push(`/category/price/${suggestion.value}`);
      setQuery("");
      onSearch?.();
    } else {
      // For search suggestions, keep the term in search bar and close mobile sheet
      setQuery(suggestion.value);
      handleSearch(suggestion.value);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowDown':
        if (showSuggestions && suggestions.length > 0) {
          e.preventDefault();
          setSelectedIndex(prev => 
            prev < suggestions.length - 1 ? prev + 1 : prev
          );
        }
        break;
      case 'ArrowUp':
        if (showSuggestions && suggestions.length > 0) {
          e.preventDefault();
          setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
        }
        break;
      case 'Enter':
        e.preventDefault();
        if (showSuggestions && selectedIndex >= 0 && suggestions[selectedIndex]) {
          handleSuggestionClick(suggestions[selectedIndex]);
        } else {
          handleSearch();
        }
        break;
      case 'Escape':
        setShowSuggestions(false);
        setSelectedIndex(-1);
        break;
    }
  };



  const clearSearch = () => {
    setQuery("");
    setShowSuggestions(false);
    inputRef.current?.focus();
  };

  return (
    <div className={`relative ${className}`}>
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setSelectedIndex(-1);
          }}
          onKeyDown={handleKeyDown}
          onFocus={() => setShowSuggestions(true)}
          className={`w-full ${
            isMobile 
              ? 'px-4 py-2 pr-12' 
              : 'px-6 py-3 pr-14'
          } border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base`}
        />
        
        {query && (
          <Button
            type="button"
            size="icon"
            variant="ghost"
            onClick={clearSearch}
            className={`absolute ${
              isMobile ? 'right-10 top-0 h-full px-2' : 'right-12 top-0 h-full px-3'
            }`}
          >
            <X className="h-4 w-4 text-gray-400" />
          </Button>
        )}
        
        <Button
          type="button"
          size="icon"
          onClick={() => handleSearch()}
          className={`absolute right-0 top-0 h-full ${
            isMobile ? 'px-4' : 'px-6'
          } bg-black hover:bg-gray-800 rounded-l-none`}
        >
          <Search className="h-5 w-5" />
        </Button>
      </div>

      {/* Suggestions Dropdown */}
      {showSuggestions && suggestions.length > 0 && (
        <div
          ref={suggestionsRef}
          className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg z-50 mt-1 max-h-80 overflow-y-auto"
        >
          {!query && (
            <div className="px-4 py-2 text-xs text-gray-500 border-b border-gray-100">
              Popular searches
            </div>
          )}
          {suggestions.map((suggestion, index) => (
            <div
              key={`${suggestion.type}-${suggestion.value}-${index}`}
              onClick={() => handleSuggestionClick(suggestion)}
              className={`px-4 py-3 cursor-pointer border-b border-gray-100 last:border-b-0 hover:bg-gray-50 ${
                selectedIndex === index ? 'bg-blue-50' : ''
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Search className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-700 truncate">
                    {suggestion.text}
                  </span>
                </div>
                {suggestion.count && (
                  <span className="text-xs text-gray-500">
                    {suggestion.count} items
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Backdrop to close suggestions */}
      {showSuggestions && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setShowSuggestions(false)}
        />
      )}
    </div>
  );
}