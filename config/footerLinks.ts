import products from "@/data/products.json";

// Price links - already correct
export const priceLinks = [
    { label: "Under ₹10,000", slug: "under-10000", max: 10000 },
    { label: "Under ₹15,000", slug: "under-15000", max: 15000 },
    { label: "Under ₹20,000", slug: "under-20000", max: 20000 },
    { label: "Under ₹25,000", slug: "under-25000", max: 25000 },
    { label: "Under ₹50,000", slug: "under-50000", max: 50000 },
    { label: "Under ₹75,000", slug: "under-75000", max: 75000 },
    { label: "Under ₹1,00,000", slug: "under-100000", max: 100000 },
];

// Brand links - already correct
export const brandLinks = Array.from(
    new Set(products.map(p => p.brand))
).map(brand => ({
    label: brand,
    slug: brand.toLowerCase(),
}));

// Processor links - FIXED: Extract from actual product data
export const processorLinks = Array.from(
    new Set(
        products
            .map(p => p.specifications.Processor)
            .filter(Boolean)
            .map(processor => {
                // Extract processor family (Intel Core i3, i5, i7, AMD Ryzen, etc.)
                const match = processor.match(/(Intel Core i[3579]|Intel Celeron|Intel Pentium|AMD Ryzen [3579])/i);
                return match ? match[1] : null;
            })
            .filter(Boolean)
    )
)
    .map(processor => ({
        label: processor!,
        slug: processor!.toLowerCase().replace(/\s+/g, '-'),
    }))
    .sort((a, b) => {
        // Sort order: Intel Celeron, Pentium, i3, i5, i7, i9, then AMD
        const order = [ 'intel-i3', 'intel-i5', 'intel-i7', 'intel-core-i9', 'amd-ryzen-3', 'amd-ryzen-5', 'amd-ryzen-7', 'amd-ryzen-9'];
        return order.indexOf(a.slug) - order.indexOf(b.slug);
    });

// Policy links - already correct
export const policyLinks = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Shipping Policy", href: "/shipping-policy" },
    { label: "Return & Refund Policy", href: "/return-policy" },
];