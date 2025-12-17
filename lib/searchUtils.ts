interface Product {
  id: number;
  slug: string;
  name: string;
  brand: string;
  sku: string;
  rating: number;
  reviewCount: number;
  originalPrice: number;
  price: number;
  discount: number;
  images: { url: string; alt: string; duplicate: boolean; }[];
  description: string;
  specifications: {
    Processor: string;
    RAM: string;
    Storage: string;
    Display: string;
    Graphics: string;
    "Operating System": string;
  };
  inStock: boolean;
  topSelling: boolean;
}

export function searchProducts(products: Product[], query: string): Product[] {
  if (!query.trim()) return products;

  const searchTerms = query.toLowerCase().split(' ').filter(term => term.length > 0);
  
  return products.filter(product => {
    // Create searchable text from product
    const searchableText = [
      product.name,
      product.brand,
      product.specifications.Processor,
      product.specifications.RAM,
      product.specifications.Storage,
      product.specifications.Display,
    ].join(' ').toLowerCase();

    let priceMatched = false;
    let brandMatched = false;
    let processorMatched = false;
    let generalMatched = false;

    // Check each search term
    for (let i = 0; i < searchTerms.length; i++) {
      const term = searchTerms[i];
      
      // Price range matching (handle "under 10000" pattern)
      if (term === 'under' || term === 'below') {
        const nextTerm = searchTerms[i + 1];
        if (nextTerm && /^\d+$/.test(nextTerm)) {
          const priceLimit = parseInt(nextTerm);
          if (product.price <= priceLimit) {
            priceMatched = true;
            i++; // Skip the next term as it's part of this price condition
            continue;
          }
        }
      }
      
      if (term === 'above' || term === 'over') {
        const nextTerm = searchTerms[i + 1];
        if (nextTerm && /^\d+$/.test(nextTerm)) {
          const priceLimit = parseInt(nextTerm);
          if (product.price >= priceLimit) {
            priceMatched = true;
            i++; // Skip the next term
            continue;
          }
        }
      }

      // Direct price number (e.g., "10000")
      if (/^\d+$/.test(term)) {
        const price = parseInt(term);
        // Check if price is close to product price (within 20% range)
        if (Math.abs(product.price - price) <= price * 0.2) {
          priceMatched = true;
          continue;
        }
      }

      // Brand matching
      const brandShortcuts: Record<string, string> = {
        'hp': 'hp',
        'dell': 'dell',
        'lenovo': 'lenovo',
        'acer': 'acer',
        'asus': 'asus',
        'apple': 'apple',
        'mac': 'apple',
        'macbook': 'apple'
      };

      if (brandShortcuts[term] && product.brand.toLowerCase().includes(brandShortcuts[term])) {
        brandMatched = true;
        continue;
      }

      // Processor matching
      const processorShortcuts: Record<string, string[]> = {
        'i3': ['i3'],
        'i5': ['i5'],
        'i7': ['i7'],
        'i9': ['i9'],
        'intel': ['intel'],
        'amd': ['amd'],
        'ryzen': ['ryzen'],
        'm1': ['m1'],
        'm2': ['m2'],
        'm3': ['m3']
      };

      if (processorShortcuts[term]) {
        const processor = product.specifications.Processor.toLowerCase();
        if (processorShortcuts[term].some(shortcut => processor.includes(shortcut))) {
          processorMatched = true;
          continue;
        }
      }

      // RAM matching
      if (term.includes('gb') && term.match(/\d+/)) {
        const ramAmount = term.match(/\d+/)?.[0];
        const productRAM = product.specifications.RAM.toLowerCase();
        if (ramAmount && (productRAM.includes(ramAmount + 'gb') || productRAM.includes(ramAmount + ' gb'))) {
          generalMatched = true;
          continue;
        }
      }

      // Storage matching
      if ((term.includes('ssd') || term.includes('hdd')) && term.match(/\d+/)) {
        const storageAmount = term.match(/\d+/)?.[0];
        const storage = product.specifications.Storage.toLowerCase();
        if (storageAmount && storage.includes(storageAmount) && (
          (term.includes('ssd') && storage.includes('ssd')) ||
          (term.includes('hdd') && storage.includes('hdd'))
        )) {
          generalMatched = true;
          continue;
        }
      }

      // General text matching
      if (searchableText.includes(term)) {
        generalMatched = true;
        continue;
      }
    }

    // Product matches if it satisfies the search intent
    // For complex queries like "asus under 10000 i5", all relevant parts should match
    const hasRelevantMatches = (
      (searchTerms.some(t => ['under', 'above', 'below', 'over'].includes(t) || /^\d+$/.test(t)) ? priceMatched : true) &&
      (searchTerms.some(t => Object.keys({
        'hp': 'hp', 'dell': 'dell', 'lenovo': 'lenovo', 'acer': 'acer', 
        'asus': 'asus', 'apple': 'apple', 'mac': 'apple', 'macbook': 'apple'
      }).includes(t)) ? brandMatched : true) &&
      (searchTerms.some(t => ['i3', 'i5', 'i7', 'i9', 'intel', 'amd', 'ryzen', 'm1', 'm2', 'm3'].includes(t)) ? processorMatched : true)
    );

    return hasRelevantMatches || generalMatched;
  });
}

export function getSearchSuggestions(products: Product[], query: string): Array<{
  type: 'product' | 'brand' | 'category' | 'price';
  text: string;
  value: string;
  count?: number;
}> {
  if (query.length < 2) return [];

  const suggestions: Array<{
    type: 'product' | 'brand' | 'category' | 'price';
    text: string;
    value: string;
    count?: number;
  }> = [];
  const queryLower = query.toLowerCase();

  // Price suggestions
  const priceRanges = [
    { text: "Under ₹10,000", value: "under-10000" },
    { text: "Under ₹15,000", value: "under-15000" },
    { text: "Under ₹20,000", value: "under-20000" },
    { text: "Under ₹25,000", value: "under-25000" },
    { text: "Under ₹50,000", value: "under-50000" },
  ];

  priceRanges.forEach(range => {
    if (range.text.toLowerCase().includes(queryLower)) {
      suggestions.push({
        type: 'price' as const,
        text: range.text,
        value: range.value
      });
    }
  });

  // Brand suggestions
  const brands = Array.from(new Set(products.map(p => p.brand)));
  brands.forEach(brand => {
    if (brand.toLowerCase().includes(queryLower)) {
      const count = products.filter(p => p.brand.toLowerCase() === brand.toLowerCase()).length;
      suggestions.push({
        type: 'brand' as const,
        text: `${brand} Laptops`,
        value: brand.toLowerCase(),
        count
      });
    }
  });

  // Product suggestions
  const matchingProducts = searchProducts(products, query).slice(0, 5);
  matchingProducts.forEach(product => {
    suggestions.push({
      type: 'product' as const,
      text: product.name,
      value: product.slug
    });
  });

  return suggestions.slice(0, 8);
}