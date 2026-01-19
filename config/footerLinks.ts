import products from "@/data/products.json";

// Price links - updated with under/above format
export const priceLinks = [
    { label: "Under ₹15,000", slug: "under-15000" },
    { label: "Under ₹20,000", slug: "under-20000" },
    { label: "Under ₹25,000", slug: "under-25000" },
    { label: "Under ₹30,000", slug: "under-30000" },
    { label: "Under ₹35,000", slug: "under-35000" },
    { label: "Above ₹35,000", slug: "above-35000" },
];

// Brand links - already correct
export const brandLinks = Array.from(
    new Set(products.map(p => p.brand))
).map(brand => ({
    label: brand,
    slug: brand.toLowerCase(),
}));

// Processor links - simplified to match navbar
export const processorLinks = [
    { label: "Intel i3 gen", slug: "intel-i3" },
    { label: "Intel i5 gen", slug: "intel-i5" },
    { label: "Intel i7 gen", slug: "intel-i7" },
    { label: "Apple M1", slug: "apple-m1" },
    { label: "Apple M2", slug: "apple-m2" },
];

// Policy links - already correct
export const policyLinks = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Shipping Policy", href: "/shipping-policy" },
    { label: "Return & Refund Policy", href: "/refund-returns-policy" },
];