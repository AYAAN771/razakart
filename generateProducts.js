const fs = require("fs");

// --------------------------------------------------
// IMAGE POOL (REAL FILES YOU USE)
// --------------------------------------------------
const images = [
  "/laptop/asus.avif",
  "/laptop/dellinspiron.avif",
  "/laptop/hp-200.avif",
];

// helper to get 2 DIFFERENT images
function getImagePair(productName) {
  const shuffled = [...images].sort(() => 0.5 - Math.random());

  return [
    {
      url: shuffled[0],
      alt: `${productName} front view`,
      duplicate: false,
    },
    {
      url: shuffled[1],
      alt: `${productName} side view`,
      duplicate: false,
    },
  ];
}

// --------------------------------------------------
// DATA POOLS
// --------------------------------------------------
const brands = ["ASUS", "DELL", "HP", "LENOVO"];

const processors = [
  "Intel Celeron N4020",
  "Intel Pentium Dual Core",
  "Intel Core i3 3rd Gen",
  "Intel Core i3 6th Gen",
  "Intel Core i5 4th Gen",
  "Intel Core i5 5th Gen",
  "Intel Core i7 4th Gen",
];

const rams = ["2GB DDR3", "4GB DDR3", "4GB DDR4", "8GB DDR3"];
const storages = [
  "128GB SSD",
  "256GB SSD",
  "320GB HDD",
  "500GB HDD",
  "1TB HDD",
];
const displays = [
  "13.3 inch HD",
  "14 inch HD",
  "15.6 inch HD",
  "14 inch Full HD",
];
const graphics = [
  "Intel HD Graphics",
  "Intel UHD Graphics",
  "Intel HD Graphics 4400",
  "Intel HD Graphics 520",
  "Intel HD Graphics 5500",
  "AMD Radeon HD 7670M",
];
const operatingSystems = ["Windows 10", "Windows 10 Pro", "Windows 11", "DOS"];

// --------------------------------------------------
// HELPERS
// --------------------------------------------------
const rand = (arr) => arr[Math.floor(Math.random() * arr.length)];
const randNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// --------------------------------------------------
// PRODUCT GENERATOR
// --------------------------------------------------
function generateProduct(id) {
  const brand = rand(brands);
  const model = `${brand} Model ${randNum(100, 9999)}`;
  const price = randNum(9000, 18000);
  const originalPrice = price + randNum(2000, 7000);

  return {
    id,
    slug: `${brand.toLowerCase()}-${model
      .toLowerCase()
      .replace(/\s+/g, "-")}-${id}`,
    name: model,
    brand,
    sku: `${brand.slice(0, 3)}-${randNum(1000, 9999)}-${id}`,
    rating: Number((Math.random() * 1.2 + 3.6).toFixed(1)),
    reviewCount: randNum(20, 250),
    originalPrice,
    price,
    discount: Math.round(((originalPrice - price) / originalPrice) * 100),
    images: getImagePair(model),
    description:
      "Refurbished laptop suitable for students, office work, and daily computing.",
    specifications: {
      Processor: rand(processors),
      RAM: rand(rams),
      Storage: rand(storages),
      Display: rand(displays),
      Graphics: rand(graphics),
      "Operating System": rand(operatingSystems),
    },
    inStock: Math.random() > 0.08,
    topSelling: Math.random() > 0.7,
  };
}

// --------------------------------------------------
// GENERATE 4000 PRODUCTS
// --------------------------------------------------
const products = Array.from({ length: 4000 }, (_, i) => generateProduct(i + 1));

// --------------------------------------------------
// WRITE FILE
// --------------------------------------------------
fs.writeFileSync("products.json", JSON.stringify(products, null, 2), "utf-8");

console.log("✅ 4000 products generated successfully");
