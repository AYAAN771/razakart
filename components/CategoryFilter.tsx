"use client";

import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FilterSectionProps {
  title: string;
  isOpen?: boolean;
  children: React.ReactNode;
}

const FilterSection = ({
  title,
  isOpen = true,
  children,
}: FilterSectionProps) => {
  const [open, setOpen] = useState(isOpen);

  return (
    <div className='border-b py-4'>
      <div
        className='flex items-center justify-between cursor-pointer mb-2'
        onClick={() => setOpen(!open)}
      >
        <h3 className='font-semibold text-sm uppercase text-gray-700 tracking-wider'>
          {title}
        </h3>
        {open ? (
          <ChevronUp className='w-4 h-4 text-gray-500' />
        ) : (
          <ChevronDown className='w-4 h-4 text-gray-500' />
        )}
      </div>
      {open && <div className='mt-2 space-y-2'>{children}</div>}
    </div>
  );
};

export interface FilterState {
  minPrice: number;
  maxPrice: number;
  brands: string[];
  processors: string[];
  ram: string[];
  storage: string[];
  screenSize: string[];
  inStock: boolean;
}

interface Product {
  brand: string;
  specifications?: {
    Processor?: string;
    RAM?: string;
    Storage?: string;
    Display?: string;
  };
}

interface CategoryFilterProps {
  products: Product[];
  filters: FilterState;
  setFilters: (filters: FilterState) => void;
  minPriceLimit: number;
  maxPriceLimit: number;
}

export default function CategoryFilter({
  products,
  filters,
  setFilters,
  minPriceLimit,
  maxPriceLimit,
}: CategoryFilterProps) {
  // Extract available options dynamically
  const brands = Array.from(new Set(products.map((p) => p.brand))).sort();
  const processors = Array.from(
    new Set(products.map((p) => p.specifications?.Processor))
  )
    .filter(Boolean)
    .sort();
  const rams = Array.from(new Set(products.map((p) => p.specifications?.RAM)))
    .filter(Boolean)
    .sort();
  const storages = Array.from(
    new Set(products.map((p) => p.specifications?.Storage))
  )
    .filter(Boolean)
    .sort();
  const displays = Array.from(
    new Set(products.map((p) => p.specifications?.Display))
  )
    .filter(Boolean)
    .sort();

  // Local state for slider to allow smooth dragging without triggering global filter updates (and scrolls) immediately
  const [priceRange, setPriceRange] = useState([
    filters.minPrice,
    filters.maxPrice,
  ]);

  const handleCheckboxChange = (category: keyof FilterState, value: string) => {
    setFilters({
      ...filters,
      [category]: (filters[category] as string[]).includes(value)
        ? (filters[category] as string[]).filter((item) => item !== value)
        : [...(filters[category] as string[]), value],
    });
  };

  const clearFilters = () => {
    setFilters({
      minPrice: minPriceLimit,
      maxPrice: maxPriceLimit,
      brands: [],
      processors: [],
      ram: [],
      storage: [],
      screenSize: [],
      inStock: false,
    });
  };

  const [minInput, setMinInput] = useState(String(filters.minPrice));
  const [maxInput, setMaxInput] = useState(String(filters.maxPrice));

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setMinInput(value);
    if (value !== '') {
      const numValue = Number(value);
      setPriceRange([numValue, priceRange[1]]);
      setFilters({ ...filters, minPrice: numValue });
    }
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setMaxInput(value);
    if (value !== '') {
      const numValue = Number(value);
      setPriceRange([priceRange[0], numValue]);
      setFilters({ ...filters, maxPrice: numValue });
    }
  };

  const handleSliderChange = (value: number[]) => {
    setPriceRange(value);
    setMinInput(String(value[0]));
    setMaxInput(String(value[1]));
    setFilters({ ...filters, minPrice: value[0], maxPrice: value[1] });
  };

  return (
    <div className='bg-white p-4 rounded-lg max-h-[calc(100vh-6rem)] overflow-y-auto scrollbar-thin scrollbar-blue border h-full'>
      <div className='flex items-center justify-between border-b pb-4 mb-2'>
        <h2 className='text-lg font-bold'>Filters</h2>
        <Button
          variant='ghost'
          size='sm'
          onClick={clearFilters}
          className='text-blue-600 text-xs hover:text-blue-800'
        >
          Clear All
        </Button>
      </div>

      {/* Price Filter */}
      <FilterSection title='Price'>
        <div className='px-1 py-2'>
          {/* Range Slider */}
          <Slider
            defaultValue={[minPriceLimit, maxPriceLimit]}
            value={priceRange}
            max={maxPriceLimit}
            min={0}
            step={1000}
            onValueChange={handleSliderChange}
            className='mb-6 [&_.bg-primary]:bg-blue-600 [&_span]:border-blue-600'
          />

          <div className='flex items-center gap-2'>
            <input
              type='text'
              value={minInput}
              onChange={handleMinPriceChange}
              placeholder='Min'
              className='w-full h-8 px-2 text-xs border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
            />

            <span className='text-gray-400 text-xs'>to</span>

            <input
              type='text'
              value={maxInput}
              onChange={handleMaxPriceChange}
              placeholder='Max'
              className='w-full h-8 px-2 text-xs border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
            />
          </div>
        </div>
      </FilterSection>

      {/* In Stock */}
      <div className='border-b py-4'>
        <div className='flex items-center space-x-2'>
          <Checkbox
            id='instock'
            checked={filters.inStock}
            onCheckedChange={(checked) =>
              setFilters({ ...filters, inStock: !!checked })
            }
            className='data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600'
          />
          <label
            htmlFor='instock'
            className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
          >
            Show In Stock Only
          </label>
        </div>
      </div>

      {/* Brand */}
      <FilterSection title='Brand'>
        <div className='space-y-2 max-h-48 overflow-y-auto pr-1 scrollbar-thin'>
          {brands.map((brand) => (
            <div key={brand} className='flex items-center space-x-2'>
              <Checkbox
                id={`brand-${brand}`}
                checked={filters.brands.includes(brand)}
                onCheckedChange={() => handleCheckboxChange("brands", brand)}
                className='data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600'
              />
              <label
                htmlFor={`brand-${brand}`}
                className='text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer text-gray-600 truncate'
              >
                {brand}
              </label>
            </div>
          ))}
        </div>
      </FilterSection>

      {/* Processor */}
      <FilterSection title='Processor'>
        <div className='space-y-2 max-h-48 overflow-y-auto pr-1 scrollbar-thin'>
          {processors.map((proc) => (
            <div key={proc} className='flex items-center space-x-2'>
              <Checkbox
                id={`proc-${proc}`}
                checked={filters.processors.includes(proc as string)}
                onCheckedChange={() =>
                  handleCheckboxChange("processors", proc as string)
                }
                className='data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600'
              />
              <label
                htmlFor={`proc-${proc}`}
                className='text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer text-gray-600 truncate'
              >
                {proc as string}
              </label>
            </div>
          ))}
        </div>
      </FilterSection>

      {/* RAM */}
      <FilterSection title='RAM'>
        <div className='space-y-2'>
          {rams.map((ram) => (
            <div key={ram} className='flex items-center space-x-2'>
              <Checkbox
                id={`ram-${ram}`}
                checked={filters.ram.includes(ram as string)}
                onCheckedChange={() =>
                  handleCheckboxChange("ram", ram as string)
                }
                className='data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600'
              />
              <label
                htmlFor={`ram-${ram}`}
                className='text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer text-gray-600'
              >
                {ram as string}
              </label>
            </div>
          ))}
        </div>
      </FilterSection>

      {/* Storage */}
      <FilterSection title='Storage' isOpen={false}>
        <div className='space-y-2'>
          {storages.map((storage) => (
            <div key={storage} className='flex items-center space-x-2'>
              <Checkbox
                id={`storage-${storage}`}
                checked={filters.storage.includes(storage as string)}
                onCheckedChange={() =>
                  handleCheckboxChange("storage", storage as string)
                }
                className='data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600'
              />
              <label
                htmlFor={`storage-${storage}`}
                className='text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer text-gray-600'
              >
                {storage as string}
              </label>
            </div>
          ))}
        </div>
      </FilterSection>

      {/* Display */}
      <FilterSection title='Screen Size' isOpen={false}>
        <div className='space-y-2 max-h-48 overflow-y-auto pr-1 scrollbar-thin'>
          {displays.map((display) => (
            <div key={display} className='flex items-center space-x-2'>
              <Checkbox
                id={`display-${display}`}
                checked={filters.screenSize.includes(display as string)}
                onCheckedChange={() =>
                  handleCheckboxChange("screenSize", display as string)
                }
                className='data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600'
              />
              <label
                htmlFor={`display-${display}`}
                className='text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer text-gray-600 truncate'
              >
                {display as string}
              </label>
            </div>
          ))}
        </div>
      </FilterSection>
    </div>
  );
}
