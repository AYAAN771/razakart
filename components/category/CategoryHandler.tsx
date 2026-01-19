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
    "RAM Size"?: string;
    "SSD Storage"?: string;
    "HDD Storage"?: string;
    "Display Size"?: string;
    "Screen Resolution"?: string;
    "RAM Type"?: string;
    Condition?: string;
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
          case "under-15000":
            return product.price < 15000;
          case "under-20000":
            return product.price < 20000;
          case "under-25000":
            return product.price < 25000;
          case "under-30000":
            return product.price < 30000;
          case "under-35000":
            return product.price < 35000;
          case "above-35000":
            return product.price >= 35000;
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

      // RAM Size filter
      if (
        filters.ram.length > 0 &&
        (!product.specifications?.["RAM Size"] ||
          !filters.ram.includes(product.specifications["RAM Size"]))
      )
        return false;

      // Storage filter (check both SSD and HDD)
      if (filters.storage.length > 0) {
        const ssdStorage = product.specifications?.["SSD Storage"];
        const hddStorage = product.specifications?.["HDD Storage"];
        const hasMatchingStorage = filters.storage.some(filterStorage => 
          (ssdStorage && ssdStorage !== "None" && ssdStorage === filterStorage) ||
          (hddStorage && hddStorage !== "None" && hddStorage === filterStorage)
        );
        if (!hasMatchingStorage) return false;
      }

      // Screen Size filter
      if (
        filters.screenSize.length > 0 &&
        (!product.specifications?.["Display Size"] ||
          !filters.screenSize.includes(product.specifications["Display Size"]))
      )
        return false;

      // Screen Resolution filter
      if (
        filters.screenResolution.length > 0 &&
        (!product.specifications?.["Screen Resolution"] ||
          !filters.screenResolution.includes(product.specifications["Screen Resolution"]))
      )
        return false;

      // RAM Type filter
      if (
        filters.ramType.length > 0 &&
        (!product.specifications?.["RAM Type"] ||
          !filters.ramType.includes(product.specifications["RAM Type"]))
      )
        return false;

      // Condition filter
      if (
        filters.condition.length > 0 &&
        (!product.specifications?.Condition ||
          !filters.condition.includes(product.specifications.Condition))
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