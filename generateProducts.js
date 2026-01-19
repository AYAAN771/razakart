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
  { name: "Intel Celeron N4020", speed: "1.1 GHz" },
  { name: "Intel Pentium Dual Core", speed: "2.3 GHz" },
  { name: "Intel Core i3 3rd Gen", speed: "2.4 GHz" },
  { name: "Intel Core i3 6th Gen", speed: "2.3 GHz" },
  { name: "Intel Core i5 4th Gen", speed: "2.6 GHz" },
  { name: "Intel Core i5 5th Gen", speed: "2.7 GHz" },
  { name: "Intel Core i7 4th Gen", speed: "2.8 GHz" },
];

const ramSizes = ["2GB", "4GB", "8GB", "16GB"];
const ramTypes = ["DDR3", "DDR4"];
const ssdSizes = ["128GB", "256GB", "512GB", "1TB"];
const hddSizes = ["320GB", "500GB", "1TB", "2TB"];
const displaySizes = ["13.3", "14", "15.6", "17.3"];
const resolutions = ["HD (1366x768)", "Full HD (1920x1080)", "4K (3840x2160)"];
const graphics = [
  "Intel HD Graphics",
  "Intel UHD Graphics",
  "Intel HD Graphics 4400",
  "Intel HD Graphics 520",
  "Intel HD Graphics 5500",
  "AMD Radeon HD 7670M",
  "NVIDIA GeForce GTX 1650",
];
const operatingSystems = ["Windows 10", "Windows 10 Pro", "Windows 11", "DOS"];
const conditions = ["Refurbished", "Used", "New"];
const weights = ["1.2kg", "1.5kg", "1.8kg", "2.1kg", "2.4kg", "2.7kg"];

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
      Processor: rand(processors).name,
      "Processor Speed": rand(processors).speed,
      "RAM Size": rand(ramSizes),
      "RAM Type": rand(ramTypes),
      "SSD Storage": Math.random() > 0.3 ? rand(ssdSizes) : "None",
      "HDD Storage": Math.random() > 0.4 ? rand(hddSizes) : "None",
      "Display Size": `${rand(displaySizes)} inch`,
      "Screen Resolution": rand(resolutions),
      Graphics: rand(graphics),
      "Operating System": rand(operatingSystems),
      Condition: rand(conditions),
      "Item Weight": rand(weights),
    },
    inStock: Math.random() > 0.08,
    topSelling: Math.random() > 0.7,
  };
}

// --------------------------------------------------
// GENERATE 100 PRODUCTS
// --------------------------------------------------
const products = Array.from({ length: 100 }, (_, i) => generateProduct(i + 1));

// --------------------------------------------------
// WRITE FILE
// --------------------------------------------------
fs.writeFileSync("data/products.json", JSON.stringify(products, null, 2), "utf-8");

console.log("✅ 100 products generated successfully");
