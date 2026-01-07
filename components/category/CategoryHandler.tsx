import { FilterState } from "@/components/CategoryFilter";

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

export class CategoryHandler {
  static filterProductsByCategory(
    allProducts: Product[],
    type: string,
    value: string
  ): Product[] {
    if (type === "price") {
      return allProducts.filter((product) => {
        switch (value) {
          case "under-10000":
            return product.price < 10000;
          case "under-15000":
            return product.price < 15000;
          case "under-20000":
            return product.price < 20000;
          case "under-25000":
            return product.price < 25000;
          case "under-50000":
            return product.price < 50000;
          case "under-75000":
            return product.price < 75000;
          case "under-100000":
            return product.price < 100000;
          case "over-100000":
            return product.price >= 100000;
          default:
            return false;
        }
      });
    }

    if (type === "brand") {
      return allProducts.filter(
        (product) =>
          product.brand.toLowerCase() === value.toLowerCase()
      );
    }

    if (type === "processor") {
      return allProducts.filter((product) => {
        const processor =
          product.specifications?.Processor?.toLowerCase() || "";
        switch (value) {
          case "intel-i3":
            return processor.includes("i3");
          case "intel-i5":
            return processor.includes("i5");
          case "intel-i7":
            return processor.includes("i7");
          case "apple-m1":
            return processor.includes("m1");
          case "apple-m2":
            return processor.includes("m2");
          default:
            return false;
        }
      });
    }

    return [];
  }

  static applyFilters(
    baseProducts: Product[],
    filters: FilterState
  ): Product[] {
    return baseProducts.filter((product) => {
      // Price Check
      if (product.price < filters.minPrice || product.price > filters.maxPrice)
        return false;

      // Brand Check
      if (filters.brands.length > 0 && !filters.brands.includes(product.brand))
        return false;

      // In Stock Check
      if (filters.inStock && !product.inStock) return false;

      // Processor filter
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
  }

  static sortProducts(
    products: Product[],
    sortBy: "featured" | "price-asc" | "price-desc" | "newest"
  ): Product[] {
    const sorted = [...products];

    if (sortBy === "price-asc") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      sorted.sort((a, b) => b.price - a.price);
    } else if (sortBy === "newest") {
      sorted.sort((a, b) => b.id - a.id);
    }

    return sorted;
  }

  static getFilteredAndSortedProducts(
    products: Product[],
    allProducts: Product[],
    filters: FilterState,
    sortBy: "featured" | "price-asc" | "price-desc" | "newest",
    categoryType: string
  ): Product[] {
    // Start with all products if brand filter is applied and we're on a brand category page
    let baseProducts = products;
    if (categoryType === "brand" && filters.brands.length > 0) {
      baseProducts = allProducts;
    }

    const filtered = this.applyFilters(baseProducts, filters);
    return this.sortProducts(filtered, sortBy);
  }
}