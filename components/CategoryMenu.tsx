

// "use client";

// import React, { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
// import { Checkbox } from "@/components/ui/checkbox";
// import { ChevronDown } from "lucide-react";
// import { cn } from "@/lib/utils";

// const categories = [
//   {
//     id: "price",
//     label: "Shop By Price",
//     children: [
//       { id: "u10", label: "Under ₹10,000" },
//       { id: "u15", label: "Under ₹15,000" },
//       { id: "u20", label: "Under ₹20,000" },
//     ],
//   },
//   {
//     id: "brand",
//     label: "Shop By Brands",
//     children: [
//       { id: "hp", label: "HP" },
//       { id: "dell", label: "Dell" },
//       { id: "lenovo", label: "Lenovo" },
//     ],
//   },
//   {
//     id: "processor",
//     label: "Shop By Processor",
//     children: [
//       { id: "i3", label: "Intel i3" },
//       { id: "i5", label: "Intel i5" },
//       { id: "i7", label: "Intel i7" },
//     ],
//   },
// ];

// export default function CategoryMenu() {
//   const [desktopOpen, setDesktopOpen] = useState(false);
//   const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
//   const [mobileOpen, setMobileOpen] = useState<string | null>(null);

//   return (
//     <>
//       {/* DESKTOP — HOVER MENU */}
//       <div
//         className="hidden md:block relative"
//         onMouseEnter={() => setDesktopOpen(true)}
//         onMouseLeave={() => { setDesktopOpen(false); setOpenSubmenu(null); }}
//       >
//         <Popover open={desktopOpen}>
//           <PopoverTrigger asChild>
//             <Button variant="outline" className="gap-2">
//               Categories <ChevronDown className="h-4 w-4" />
//             </Button>
//           </PopoverTrigger>

//           <PopoverContent className="w-64 p-0">
//             <div className="space-y-1">
//               {categories.map((cat) => (
//                 <div
//                   key={cat.id}
//                   className="relative group"
//                   onMouseEnter={() => setOpenSubmenu(cat.id)}
//                   onMouseLeave={() => setOpenSubmenu(null)}
//                 >
//                   <div className="cursor-pointer px-2 py-2 hover:bg-gray-100 rounded">
//                     {cat.label}
//                   </div>

//                   {/* SECOND LEVEL */}
//                   {openSubmenu === cat.id && (
//                     <div className="absolute top-0 right-full w-64 bg-blue-200 mr-0   shadow-lg border p-4 space-y-3">
//                       {cat.children.map((sub) => (
//                         <label key={sub.id} className="flex gap-2 items-center">
//                           <Checkbox />
//                           {sub.label}
//                         </label>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </PopoverContent>
//         </Popover>
//       </div>

//       {/* MOBILE — CLICK ACCORDION */}
//       <div className="md:hidden px-4 mt-3">
//         <p className="font-semibold text-sm mb-2">Categories</p>

//         <div className="space-y-3">
//           {categories.map((cat) => (
//             <div key={cat.id}>
//               <button
//                 className="w-full flex justify-between py-3 font-medium"
//                 onClick={() =>
//                   setMobileOpen(mobileOpen === cat.id ? null : cat.id)
//                 }
//               >
//                 {cat.label}
//                 <ChevronDown
//                   className={cn("h-4 w-4 transition-transform", {
//                     "rotate-180": mobileOpen === cat.id,
//                   })}
//                 />
//               </button>

//               {mobileOpen === cat.id && (
//                 <div className="pl-4 pr-2  pb-3 space-y-2">
//                   {cat.children.map((sub) => (
//                     <label key={sub.id} className="flex items-center gap-2">
//                       <Checkbox />
//                       {sub.label}
//                     </label>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }


// "use client";

// import React, { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
// import { Checkbox } from "@/components/ui/checkbox";
// import { ChevronDown } from "lucide-react";
// import { cn } from "@/lib/utils";

// const categories = [
//   {
//     id: "price",
//     label: "Shop By Price",
//     children: [
//       { id: "u10", label: "Under ₹10,000" },
//       { id: "u15", label: "Under ₹15,000" },
//       { id: "u20", label: "Under ₹20,000" },
//     ],
//   },
//   {
//     id: "brand",
//     label: "Shop By Brands",
//     children: [
//       { id: "hp", label: "HP" },
//       { id: "dell", label: "Dell" },
//       { id: "lenovo", label: "Lenovo" },
//     ],
//   },
//   {
//     id: "processor",
//     label: "Shop By Processor",
//     children: [
//       { id: "i3", label: "Intel i3" },
//       { id: "i5", label: "Intel i5" },
//       { id: "i7", label: "Intel i7" },
//     ],
//   },
// ];

// export default function CategoryMenu() {
//   const [desktopOpen, setDesktopOpen] = useState(false);
//   const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
//   const [mobileOpen, setMobileOpen] = useState<string | null>(null);
//     const [priceInput, setPriceInput] = useState("");


//   return (
//     <>
//       {/* DESKTOP — HOVER MENU */}
//       <div
//         className="hidden md:block relative"
//         onMouseEnter={() => setDesktopOpen(true)}
//         onMouseLeave={() => { setDesktopOpen(false); setOpenSubmenu(null); }}
//       >
//         <Popover open={desktopOpen}>
//           <PopoverTrigger asChild>
//             <button  className="gap-2 flex items-center cursor-pointer">
//               Categories <ChevronDown className="h-4 w-4" />
//             </button>
//           </PopoverTrigger>

//           <PopoverContent className="w-64 p-3 border-none bg-white mt-2">
//             <div className="space-y-1">
//               {categories.map((cat) => (
//                 <div
//                   key={cat.id}
//                   className="relative group"
//                   onMouseEnter={() => setOpenSubmenu(cat.id)}
//                   onMouseLeave={() => setOpenSubmenu(null)}
//                 >
//                   <div className="cursor-pointer px-2 py-2 hover:bg-blue-50 ">
//                     {cat.label}
//                   </div>

//                   {/* SECOND LEVEL */}
//                   {/* {openSubmenu === cat.id && (
//                     <div className="absolute top-0 right-full w-64 bg-white shadow-lg border p-4 space-y-3">
//                       {cat.children.map((sub) => (
//                         <label
//                           key={sub.id}
//                           className="flex gap-2 items-center group-hover:bg-blue-100 group-hover:text-blue-600 p-2 rounded"
//                         >
//                           <Checkbox />
//                           {sub.label}
//                         </label>
//                       ))}
//                     </div>
//                   )} */}
//                   {openSubmenu === cat.id && (
//                     <div className="absolute -top-3 right-full w-85 bg-white mr-3 shadow-lg border p-4 space-y-3">
//                       {/* 3x3 Grid */}
//                       <div className="grid grid-cols-3 gap-2">
//                         {cat.children.map((sub) => (
//                           <label key={sub.id} className="flex gap-2 items-center">
//                             <Checkbox />
//                             {sub.label}
//                           </label>
//                         ))}
//                       </div>

//                       {/* Price Input Field */}
//                       {cat.id === "price" && (
//                         <div className="mt-4">
//                           <label className="block text-sm font-medium text-gray-700">
//                             Enter Custom Price:
//                           </label>
//                           <input
//                             type="text"
//                             value={priceInput}
//                             onChange={(e) => setPriceInput(e.target.value)}
//                             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                             placeholder="Enter price"
//                           />
//                         </div>
//                       )}
//                     </div>
//                   )}
//                 </div>
//               ))}
           
//             </div>
//           </PopoverContent>
//         </Popover>
//       </div>

//       {/* MOBILE — CLICK ACCORDION */}
//       <div className="md:hidden px-4 mt-3">
//         <p className="font-semibold text-sm mb-2">Categories</p>

//         <div className="space-y-3">
//           {categories.map((cat) => (
//             <div key={cat.id}>
//               <button
//                 className="w-full flex justify-between py-3 font-medium"
//                 onClick={() =>
//                   setMobileOpen(mobileOpen === cat.id ? null : cat.id)
//                 }
//               >
//                 {cat.label}
//                 <ChevronDown
//                   className={cn("h-4 w-4 transition-transform", {
//                     "rotate-180": mobileOpen === cat.id,
//                   })}
//                 />
//               </button>

//               {mobileOpen === cat.id && (
//                 <div className="pl-4 pr-2 pb-3 space-y-2">
//                   {cat.children.map((sub) => (
//                     <label key={sub.id} className="flex items-center gap-2">
//                       <Checkbox />
//                       {sub.label}
//                     </label>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }


//////////////////////

// "use client";

// import React, { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
// import { Checkbox } from "@/components/ui/checkbox";
// import { ChevronDown } from "lucide-react";
// import { cn } from "@/lib/utils";

// const categories = [
//   {
//     id: "price",
//     label: "Shop By Price",
//     children: [
//       { id: "u10", label: "Under ₹10,000" },
//       { id: "u15", label: "Under ₹15,000" },
//       { id: "u20", label: "Under ₹20,000" },
//       { id: "u25", label: "Under ₹25,000" },
//       { id: "u50", label: "Under ₹50,000" },
//       { id: "u75", label: "Under ₹75,000" },
//       { id: "u100", label: "Under ₹100,000" },
//       { id: "o100", label: "Over ₹100,000" },
//     ],
//   },
//   {
//     id: "brand",
//     label: "Shop By Brands",
//     children: [
//       { id: "hp", label: "HP" },
//       { id: "dell", label: "Dell" },
//       { id: "lenovo", label: "Lenovo" },
//       { id: "acer", label: "Acer" },
//       { id: "asus", label: "Asus" },
//       { id: "apple", label: "Apple" },
//     ],
//   },
//   {
//     id: "processor",
//     label: "Shop By Processor",
//     children: [
//       { id: "i3", label: "Intel i3" },
//       { id: "i5", label: "Intel i5" },
//       { id: "i7", label: "Intel i7" },
//       { id: "m1", label: "Apple M1" },
//       { id: "m2", label: "Apple M2" },
//     ],
//   },
// ];

// export default function CategoryMenu() {
//   const [desktopOpen, setDesktopOpen] = useState(false);
//   const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
//   const [mobileOpen, setMobileOpen] = useState<string | null>(null);
//   const [priceInput, setPriceInput] = useState("");

//   return (
//     <>
//       {/* DESKTOP — HOVER MENU */}
//       <div
//         className="hidden md:block relative"
//         onMouseEnter={() => setDesktopOpen(true)}
//         onMouseLeave={() => { setDesktopOpen(false); setOpenSubmenu(null); }}
//       >
//         <Popover open={desktopOpen}>
//           <PopoverTrigger asChild>
//             <button  className="gap-2 flex items-center px-4 py-2 hover:text-blue-600 cursor-pointer">
//               Categories <ChevronDown className="h-4 w-4" />
//             </button>
//           </PopoverTrigger>

//           <PopoverContent className="w-64 p-0 border-none bg-white mt-2">
//             <div className="space-y-2">
//               {categories.map((cat) => (
//                 <div
//                   key={cat.id}
//                   className="relative group"
//                   onMouseEnter={() => setOpenSubmenu(cat.id)}
//                   onMouseLeave={() => setOpenSubmenu(null)}
//                 >
//                   <div className="cursor-pointer px-2 py-2 hover:bg-gray-100 hover:text-blue-600 ">
//                     {cat.label}
//                   </div>

//                   {/* SECOND LEVEL */}
//                   {openSubmenu === cat.id && (
//                     <div className="absolute top-0 right-full w-85 bg-white shadow-lg border p-4 space-y-3">
//                       {/* 3x3 Grid */}
//                       <div className="grid grid-cols-3 gap-2">
//                         {cat.children.map((sub) => (
//                           <label key={sub.id} className="flex gap-2 items-center">
//                             <Checkbox />
//                             {sub.label}
//                           </label>
//                         ))}
//                       </div>

//                       {/* Price Input Field */}
//                       {cat.id === "price" && (
//                         <div className="mt-4">
//                           <label className="block text-sm font-medium text-gray-700">
//                             Enter Custom Price:
//                           </label>
//                           <input
//                             type="text"
//                             value={priceInput}
//                             onChange={(e) => setPriceInput(e.target.value)}
//                             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                             placeholder="Enter price"
//                           />
//                         </div>
//                       )}
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </PopoverContent>
//         </Popover>
//       </div>

//       {/* MOBILE — CLICK ACCORDION */}
//       <div className="md:hidden px-4 mt-3">
//         <p className="font-semibold text-sm mb-2">Categories</p>

//         <div className="space-y-3">
//           {categories.map((cat) => (
//             <div key={cat.id}>
//               <button
//                 className="w-full flex justify-between py-3 font-medium"
//                 onClick={() =>
//                   setMobileOpen(mobileOpen === cat.id ? null : cat.id)
//                 }
//               >
//                 {cat.label}
//                 <ChevronDown
//                   className={cn("h-4 w-4 transition-transform", {
//                     "rotate-180": mobileOpen === cat.id,
//                   })}
//                 />
//               </button>

//               {mobileOpen === cat.id && (
//                 <div className="pl-4 pr-2 pb-3 space-y-2">
//                   {/* 3x3 Grid for Mobile */}
//                   <div className="grid grid-cols-3 gap-2">
//                     {cat.children.map((sub) => (
//                       <label key={sub.id} className="flex items-center gap-2">
//                         <Checkbox />
//                         {sub.label}
//                       </label>
//                     ))}
//                   </div>

//                   {/* Price Input for Mobile */}
//                   {cat.id === "price" && (
//                     <div className="mt-4">
//                       <label className="block text-sm font-medium text-gray-700">
//                         Enter Custom Price:
//                       </label>
//                       <input
//                         type="text"
//                         value={priceInput}
//                         onChange={(e) => setPriceInput(e.target.value)}
//                         className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                         placeholder="Enter price"
//                       />
//                     </div>
//                   )}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

// "use client";

// import React, { useState } from "react";
// import {
//   Popover,
//   PopoverTrigger,
//   PopoverContent,
// } from "@/components/ui/popover";
// import { Checkbox } from "@/components/ui/checkbox";
// import { ChevronDown, ChevronLeft } from "lucide-react";
// import { cn } from "@/lib/utils";

// // Your categories (unchanged)
// const categories = [
//   {
//     id: "price",
//     label: "Shop By Price",
//     children: [
//       { id: "u10", label: "Under ₹10,000" },
//       { id: "u15", label: "Under ₹15,000" },
//       { id: "u20", label: "Under ₹20,000" },
//       { id: "u25", label: "Under ₹25,000" },
//       { id: "u50", label: "Under ₹50,000" },
//       { id: "u75", label: "Under ₹75,000" },
//       { id: "u100", label: "Under ₹100,000" },
//       { id: "o100", label: "Over ₹100,000" },
//     ],
//   },
//   {
//     id: "brand",
//     label: "Shop By Brands",
//     children: [
//       { id: "hp", label: "HP" },
//       { id: "dell", label: "Dell" },
//       { id: "lenovo", label: "Lenovo" },
//       { id: "acer", label: "Acer" },
//       { id: "asus", label: "Asus" },
//       { id: "apple", label: "Apple" },
//     ],
//   },
//   {
//     id: "processor",
//     label: "Shop By Processor",
//     children: [
//       { id: "i3", label: "Intel i3" },
//       { id: "i5", label: "Intel i5" },
//       { id: "i7", label: "Intel i7" },
//       { id: "m1", label: "Apple M1" },
//       { id: "m2", label: "Apple M2" },
//     ],
//   },
// ];

// export default function CategoryMenu() {
//   const [desktopOpen, setDesktopOpen] = useState(false);
//   const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
//   const [priceInput, setPriceInput] = useState("");

//   return (
//     <>
//       {/* DESKTOP MENU */}
//       <div
//         className="hidden md:block relative"
//         onMouseEnter={() => setDesktopOpen(true)}
//         onMouseLeave={() => {
//           setDesktopOpen(false);
//           setOpenSubmenu(null);
//         }}
//       >
//         <Popover open={desktopOpen}>
//           <PopoverTrigger asChild>
//             <button className="flex items-center gap-2 px-5 py-2 text-lg font-medium hover:text-blue-600 transition">
//               Categories <ChevronDown className="h-5 w-5" />
//             </button>
//           </PopoverTrigger>

//           {/* Main vertical menu */}
//           <PopoverContent
//             side="bottom"
//             align="start"
//             className="w-72 p-0 bg-white shadow-xl border-0 mt-2"
//             onOpenAutoFocus={(e) => e.preventDefault()}
//           >
//             <div className="py-2">
//               {categories.map((cat) => (
//                 <div
//                   key={cat.id}
//                   className="group/category relative" // Tailwind group
//                   onMouseEnter={() => setOpenSubmenu(cat.id)}
//                   onMouseLeave={() => setOpenSubmenu(null)}
//                 >
//                   {/* Category Row */}
//                   <div
//                     className={cn(
//                       "flex items-center justify-between px-6 py-3 cursor-pointer transition-all",
//                       "group-hover/category:bg-gray-50",
//                       openSubmenu === cat.id
//                         ? "bg-blue-50 text-blue-600 font-semibold"
//                         : "hover:bg-gray-50 hover:text-blue-600"
//                     )}
//                   >
//                     <ChevronLeft className="h-4 w-4 text-gray-500" />
//                     <span>{cat.label}</span>
//                   </div>

//                   {/* SUBMENU — Opens to the LEFT */}
//                   {openSubmenu === cat.id && (
//                     <div
//                       className="absolute top-0 right-full  w-96 bg-white shadow-2xl border border-gray-200  p-6"
//                       style={{ top: 0 }}
//                     >
//                       <div className="grid grid-cols-3 gap-5">
//                         {cat.children.map((sub) => (
//                           <label
//                             key={sub.id}
//                             className="flex items-center gap-3 cursor-pointer hover:text-blue-600 transition"
//                           >
//                             <Checkbox />
//                             <span className="text-sm font-medium">{sub.label}</span>
//                           </label>
//                         ))}
//                       </div>

//                       {/* Custom Price Input */}
//                       {cat.id === "price" && (
//                         <div className="mt-8 pt-6 border-t border-gray-200">
//                           <label className="block text-sm font-semibold text-gray-800 mb-3">
//                             Enter Custom Price Range:
//                           </label>
//                           <input
//                             type="text"
//                             value={priceInput}
//                             onChange={(e) => setPriceInput(e.target.value)}
//                             placeholder="e.g. 30000-60000"
//                             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
//                           />
//                         </div>
//                       )}
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </PopoverContent>
//         </Popover>
//       </div>
//     </>
//   );
// }

//   "use client";

//   import React, { useState } from "react";
//   import {
//     Popover,
//     PopoverTrigger,
//     PopoverContent,
//   } from "@/components/ui/popover";
//   import { Checkbox } from "@/components/ui/checkbox";
//   import { ChevronDown, ChevronLeft } from "lucide-react";
//   import { cn } from "@/lib/utils";

//   const categories = [
//     {
//       id: "price",
//       label: "Shop By Price",
//       children: [
//         { id: "u10", label: "Under ₹10,000" },
//         { id: "u15", label: "Under ₹15,000" },
//         { id: "u20", label: "Under ₹20,000" },
//         { id: "u25", label: "Under ₹25,000" },
//         { id: "u50", label: "Under ₹50,000" },
//         { id: "u75", label: "Under ₹75,000" },
//         { id: "u100", label: "Under ₹100,000" },
//         { id: "o100", label: "Over ₹100,000" },
//       ],
//     },
//     {
//       id: "brand",
//       label: "Shop By Brands",
//       children: [
//         { id: "hp", label: "HP" },
//         { id: "dell", label: "Dell" },
//         { id: "lenovo", label: "Lenovo" },
//         { id: "acer", label: "Acer" },
//         { id: "asus", label: "Asus" },
//         { id: "apple", label: "Apple" },
//       ],
//     },
//     {
//       id: "processor",
//       label: "Shop By Processor",
//       children: [
//         { id: "i3", label: "Intel i3 gen" },
//         { id: "i5", label: "Intel i5 gen" },
//         { id: "i7", label: "Intel i7 gen" },
//         { id: "m1", label: "Apple M1" },
//         { id: "m2", label: "Apple M2" },
//       ],
//     },
//   ];

//   export default function CategoryMenu() {
//     const [desktopOpen, setDesktopOpen] = useState(false);
//     const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
//     const [mobileOpen, setMobileOpen] = useState<string | null>(null); // ← mobile state
//     const [priceInput, setPriceInput] = useState("");
//       const [selectedItems, setSelectedItems] = useState<string[]>([]);

//     return (
//       <>
//         {/* ==================== DESKTOP (unchanged, perfect) ==================== */}
//           <div
//           className="hidden md:block relative"
//           onMouseEnter={() => setDesktopOpen(true)}
//           onMouseLeave={() => {
//             setDesktopOpen(false);
//             setOpenSubmenu(null);
//           }}
//         >
//           <Popover open={desktopOpen} >
//             <PopoverTrigger asChild>
//               <button className={cn(
//                 "flex items-center justify-between  w-70 cursor-pointer gap-2 px-5 py-2 text-base font-medium transition",
//                 desktopOpen ? "text-blue-600" : "hover:text-blue-600"
//               )}>
//               <ChevronDown className="h-4 w-4" /> Categories 
//               </button>
//             </PopoverTrigger>
//     <PopoverContent
//               side="bottom"
//               align="start"
//               className="w-72 p-0 bg-white relative  border mt-5 border-gray-200 shadow-lg"
//               onOpenAutoFocus={(e) => e.preventDefault()}
//               sideOffset={0}
//             >
//               <div className="py-2">
//                 {categories.map((cat) => (
//                   <div
//                     key={cat.id}
//                     className="group/category "
//                     onMouseEnter={() => setOpenSubmenu(cat.id)}
//                     onMouseLeave={() => setOpenSubmenu(null)}
//                   >
//                     {/* Category Row */}
//                     <div
//                       className={cn(
//                         "flex items-center justify-between px-6 py-3 cursor-pointer transition-all",
//                         openSubmenu === cat.id ? "text-blue-600" : ""
//                       )}
//                     >
//                       <ChevronLeft className={cn("h-4 w-4", openSubmenu === cat.id ? "text-blue-500" : "text-gray-500")} />
//                       <span>{cat.label}</span>
//                     </div>

//                     {/* SUBMENU — Opens to the LEFT */}
//              {openSubmenu === cat.id && (
//   <div
//     className="absolute right-full top-0 min-w-lg min-h-85 bg-white border border-gray-200 p-6 shadow-lg"
//   >
//     <div className="grid grid-cols-3 gap-5">
//       {cat.children.map((sub) => (
//         <label
//           key={sub.id}
//           className={cn(
//             "flex items-center gap-3 cursor-pointer transition",
//             selectedItems.includes(sub.id)
//               ? "text-blue-600"
//               : "hover:text-blue-600"
//           )}
//         >
//           <Checkbox 
//             checked={selectedItems.includes(sub.id)}
//             onCheckedChange={(checked) => {
//               if (checked) {
//                 setSelectedItems([...selectedItems, sub.id]);
//               } else {
//                 setSelectedItems(
//                   selectedItems.filter((id) => id !== sub.id)
//                 );
//               }
//             }}
//           />
//           <span className="text-sm font-medium">{sub.label}</span>
//         </label>
//       ))}
//     </div>

//     {/* price custom input stays same */}
//     {cat.id === "price" && (
//       <div className="mt-8 pt-6 border-t border-gray-200">
//         <label className="block text-sm font-semibold text-gray-800 mb-3">
//           Enter Custom Price Range:
//         </label>

//         <div className="flex items-center gap-4">
//           <input
//             type="number"
//             placeholder="Min ₹"
//             className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
//           />
//           <input
//             type="number"
//             placeholder="Max ₹"
//             className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <button className="w-full mt-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-semibold">
//           Apply Range
//         </button>
//       </div>
//     )}
//   </div>
// )}

//                   </div>
//                 ))}
//               </div>
//             </PopoverContent>
//           </Popover>
//         </div>

//         {/* ==================== YOUR ORIGINAL MOBILE VERSION (exactly as before) ==================== */}
//         <div className="md:hidden px-4 mt-3">
//           <p className="font-semibold text-sm mb-2">Categories</p>
//           <div className="space-y-3">
//             {categories.map((cat) => (
//               <div key={cat.id}>
//                 <button
//                   className="w-full flex justify-between py-3 font-medium"
//                   onClick={() =>
//                     setMobileOpen(mobileOpen === cat.id ? null : cat.id)
//                   }
//                 >
//                   {cat.label}
//                   <ChevronDown
//                     className={cn(
//                       "h-4 w-4 transition-transform",
//                       mobileOpen === cat.id && "rotate-180"
//                     )}
//                   />
//                 </button>

//                 {mobileOpen === cat.id && (
//                   <div className="pl-2 pr-0 pb-3 space-y-4 ">
//                     <div className="grid grid-cols-2 gap-3">
//                       {cat.children.map((sub) => (
//                         <label key={sub.id} className=" flex items-center  gap-2">
//                           <Checkbox />
//                           <span className="text-sm">

//                           {sub.label}
//                           </span>
//                         </label>
//                       ))}
//                     </div>

//                     {/* Price Input for Mobile */}
//                     {/* {cat.id === "price" && (
//                       <div className="mt-4">
//                         <label className="block text-sm font-medium text-gray-700">
//                           Enter Custom Price:
//                         </label>
//                         <input
//                           type="text"
//                           value={priceInput}
//                           onChange={(e) => setPriceInput(e.target.value)}
//                           className="mt-1 block w-full px-2 text-sm py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                           placeholder="Enter price"
//                         />
//                       </div>
//                     )} */}
//                     {cat.id === "price" && (
//     <div className="mt-4 space-y-3">
//       <label className="block text-sm font-medium text-gray-700">
//         Enter Custom Price Range:
//       </label>

//       <div className="grid grid-cols-2 gap-3">
//         <input
//           type="number"
//           placeholder="Min ₹"
//           className="px-2 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//         />
//         <input
//           type="number"
//           placeholder="Max ₹"
//           className="px-2 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//         />
//       </div>

//       <button
//         className="w-full py-2.5 bg-indigo-600 text-white rounded-md text-sm font-semibold hover:bg-indigo-700 transition"
//       >
//         Apply Range
//       </button>
//     </div>
//   )}

//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </>
//     );
//   }

// "use client";

// import React, { useState } from "react";
// import {
//   Popover,
//   PopoverTrigger,
//   PopoverContent,
// } from "@/components/ui/popover";
// import { Checkbox } from "@/components/ui/checkbox";
// import { ChevronDown, ChevronLeft, Menu } from "lucide-react";
// import { cn } from "@/lib/utils";
// import { motion, AnimatePresence } from "framer-motion";

// const categories = [
//   {
//     id: "price",
//     label: "Shop By Price",
//     children: [
//       { id: "u10", label: "Under ₹10,000" },
//       { id: "u15", label: "Under ₹15,000" },
//       { id: "u20", label: "Under ₹20,000" },
//       { id: "u25", label: "Under ₹25,000" },
//       { id: "u50", label: "Under ₹50,000" },
//       { id: "u75", label: "Under ₹75,000" },
//       { id: "u100", label: "Under ₹100,000" },
//       { id: "o100", label: "Over ₹100,000" },
//     ],
//   },
//   {
//     id: "brand",
//     label: "Shop By Brands",
//     children: [
//       { id: "hp", label: "HP" },
//       { id: "dell", label: "Dell" },
//       { id: "lenovo", label: "Lenovo" },
//       { id: "acer", label: "Acer" },
//       { id: "asus", label: "Asus" },
//       { id: "apple", label: "Apple" },
//     ],
//   },
//   {
//     id: "processor",
//     label: "Shop By Processor",
//     children: [
//       { id: "i3", label: "Intel i3 gen" },
//       { id: "i5", label: "Intel i5 gen" },
//       { id: "i7", label: "Intel i7 gen" },
//       { id: "m1", label: "Apple M1" },
//       { id: "m2", label: "Apple M2" },
//     ],
//   },
// ];

// export default function CategoryMenu() {
//   const [desktopOpen, setDesktopOpen] = useState(false);
//   const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
//   const [mobileOpen, setMobileOpen] = useState<string | null>(null);
//   const [selectedItems, setSelectedItems] = useState<string[]>([]);

//   return (
//     <>
//       {/* ==================== DESKTOP ==================== */}
//       <div
//         className="hidden md:block relative"
//         onMouseEnter={() => setDesktopOpen(true)}
//         onMouseLeave={() => {
//           setDesktopOpen(false);
//           setOpenSubmenu(null);
//         }}
//       >
//         <Popover open={desktopOpen}>
//           <PopoverTrigger asChild>
//             <button
//               className={cn(
//                 "flex items-center justify-between w-70 cursor-pointer gap-2 px-5 py-2 text-base font-medium transition",
//                 desktopOpen ? "text-blue-600" : "hover:text-blue-600"
//               )}
//             >
//               <ChevronDown className="h-4 w-4" /> <span className="flex items-center gap-2.5">
//                 Categories <Menu />
//                 </span>
//             </button>
//           </PopoverTrigger>

//           <PopoverContent
//             side="bottom"
//             align="start"
//             className="w-72 p-0 bg-white relative border mt-5 border-gray-200 shadow-lg"
//             onOpenAutoFocus={(e) => e.preventDefault()}
//             sideOffset={0}
//           >
//             <div className="py-2">
//               {categories.map((cat) => (
//                 <div
//                   key={cat.id}
//                   className="group/category"
//                   onMouseEnter={() => setOpenSubmenu(cat.id)}
//                   onMouseLeave={() => setOpenSubmenu(null)}
//                 >
//                   <div
//                     className={cn(
//                       "flex items-center justify-between px-6 py-3 cursor-pointer transition-all",
//                       openSubmenu === cat.id ? "text-blue-600" : ""
//                     )}
//                   >
//                     <ChevronLeft
//                       className={cn(
//                         "h-4 w-4",
//                         openSubmenu === cat.id ? "text-blue-500" : "text-gray-500"
//                       )}
//                     />
//                     <span>{cat.label}</span>
//                   </div>

//                   {/* SUBMENU WITH ANIMATION */}
//                   <AnimatePresence>
//                     {openSubmenu === cat.id && (
//                       <motion.div
//                            initial={{ opacity: 0, y: 10 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: 10 }}
//       transition={{
//         duration: 0.3,  // Reduced duration to make it snappier
//         ease: "easeOut",  // Smooth, natural easing function
//       }}
//                         className="absolute right-full top-0 min-w-lg min-h-85 bg-white border border-gray-200 p-6 shadow-lg"
//                       >
//                         <div className="grid grid-cols-3 gap-5">
//                           {cat.children.map((sub) => (
//                             <label
//                               key={sub.id}
//                               className={cn(
//                                 "flex items-center gap-3 cursor-pointer transition",
//                                 selectedItems.includes(sub.id)
//                                   ? "text-blue-600"
//                                   : "hover:text-blue-600"
//                               )}
//                             >
//                               <Checkbox
//                                 checked={selectedItems.includes(sub.id)}
//                                 onCheckedChange={(checked) => {
//                                   if (checked)
//                                     setSelectedItems([...selectedItems, sub.id]);
//                                   else
//                                     setSelectedItems(
//                                       selectedItems.filter((id) => id !== sub.id)
//                                     );
//                                 }}
//                               />
//                               <span className="text-sm font-medium">
//                                 {sub.label}
//                               </span>
//                             </label>
//                           ))}
//                         </div>

//                         {cat.id === "price" && (
//                           <div className="mt-8 pt-6 border-t border-gray-200">
//                             <label className="block text-sm font-semibold text-gray-800 mb-3">
//                               Enter Custom Price Range:
//                             </label>

//                             <div className="flex items-center gap-4">
//                               <input
//                                 type="number"
//                                 placeholder="Min ₹"
//                                 className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
//                               />
//                               <input
//                                 type="number"
//                                 placeholder="Max ₹"
//                                 className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
//                               />
//                             </div>

//                             <button className="w-full mt-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-semibold">
//                               Apply Range
//                             </button>
//                           </div>
//                         )}
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>
//               ))}
//             </div>
//           </PopoverContent>
//         </Popover>
//       </div>

//       {/* ==================== MOBILE ==================== */}
//       <div className="md:hidden px-4 mt-3">
//         <p className="font-semibold text-sm mb-2">Categories</p>
//         <div className="space-y-3">
//           {categories.map((cat) => (
//             <div key={cat.id}>
//               <button
//                 className="w-full flex justify-between py-3 font-medium"
//                 onClick={() =>
//                   setMobileOpen(mobileOpen === cat.id ? null : cat.id)
//                 }
//               >
//                 {cat.label}
//                 <ChevronDown
//                   className={cn(
//                     "h-4 w-4 transition-transform",
//                     mobileOpen === cat.id && "rotate-180"
//                   )}
//                 />
//               </button>

//               <AnimatePresence>
//                 {mobileOpen === cat.id && (
//                   <motion.div
//                     initial={{ opacity: 0, y: -12 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -12 }}
//                     transition={{ duration: 0.25 }}
//                     className="pl-2 pr-0 pb-3 space-y-4"
//                   >
//                     <div className="grid grid-cols-2 gap-3">
//                       {cat.children.map((sub) => (
//                         <label key={sub.id} className="flex items-center gap-2">
//                           <Checkbox />
//                           <span className="text-sm">{sub.label}</span>
//                         </label>
//                       ))}
//                     </div>

//                     {cat.id === "price" && (
//                       <div className="mt-4 space-y-3">
//                         <label className="block text-sm font-medium text-gray-700">
//                           Enter Custom Price Range:
//                         </label>

//                         <div className="grid grid-cols-2 gap-3">
//                           <input
//                             type="number"
//                             placeholder="Min ₹"
//                             className="px-2 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                           />
//                           <input
//                             type="number"
//                             placeholder="Max ₹"
//                             className="px-2 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                           />
//                         </div>

//                         <button className="w-full py-2.5 bg-indigo-600 text-white rounded-md text-sm font-semibold hover:bg-indigo-700 transition">
//                           Apply Range
//                         </button>
//                       </div>
//                     )}
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }


//////////////////////////////////

// "use client";

// import React, { useState } from "react";
// import {
//   Popover,
//   PopoverTrigger,
//   PopoverContent,
// } from "@/components/ui/popover";
// import { Checkbox } from "@/components/ui/checkbox";
// import { ChevronDown } from "lucide-react";
// import { cn } from "@/lib/utils";

// const categories = [
//   {
//     id: "price",
//     label: "Shop By Price",
//     children: [
//       { id: "u10", label: "Under ₹10,000" },
//       { id: "u15", label: "Under ₹15,000" },
//       { id: "u20", label: "Under ₹20,000" },
//       { id: "u25", label: "Under ₹25,000" },
//       { id: "u50", label: "Under ₹50,000" },
//       { id: "u75", label: "Under ₹75,000" },
//       { id: "u100", label: "Under ₹100,000" },
//       { id: "o100", label: "Over ₹100,000" },
//     ],
//   },
//   {
//     id: "brand",
//     label: "Shop By Brands",
//     children: [
//       { id: "hp", label: "HP" },
//       { id: "dell", label: "Dell" },
//       { id: "lenovo", label: "Lenovo" },
//       { id: "acer", label: "Acer" },
//       { id: "asus", label: "Asus" },
//       { id: "apple", label: "Apple" },
//     ],
//   },
//   {
//     id: "processor",
//     label: "Shop By Processor",
//     children: [
//       { id: "i3", label: "Intel i3" },
//       { id: "i5", label: "Intel i5" },
//       { id: "i7", label: "Intel i7" },
//       { id: "m1", label: "Apple M1" },
//       { id: "m2", label: "Apple M2" },
//     ],
//   },
// ];

// export default function CategoryMenu() {
//   const [desktopOpen, setDesktopOpen] = useState(false);
//   const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
//   const [mobileOpen, setMobileOpen] = useState<string | null>(null);
//   const [priceInput, setPriceInput] = useState("");
//   const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

//   const toggleFilter = (id: string) => {
//     setSelectedFilters((prev) =>
//       prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
//     );
//   };

//   const isSelected = (id: string) => selectedFilters.includes(id);

//   return (
//     <>
//       {/* DESKTOP — HOVER MENU */}
//      {/* DESKTOP — HOVER MENU (Fixed & Reliable) */}
// <div
//   className="hidden md:block relative"
//   onMouseEnter={() => setDesktopOpen(true)}
//   onMouseLeave={() => {
//     setDesktopOpen(false);
//     setOpenSubmenu(null);
//   }}
// >
//   {/* Trigger Button */}
//   <button className="flex items-center gap-2 px-6 py-3 text-lg font-semibold hover:text-blue-600 transition-colors">
//     All Categories
//     <ChevronDown className={cn("h-5 w-5 transition-transform", desktopOpen && "rotate-180")} />
//   </button>

//   {/* Mega Menu Dropdown – Now fully visible on hover */}
//   {desktopOpen && (
//     <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden z-50">
//       <div className="p-4">
//         {categories.map((cat) => (
//           <div
//             key={cat.id}
//             className="relative"
//             onMouseEnter={() => setOpenSubmenu(cat.id)}
//             // Remove onMouseLeave here — we want it to stay open when moving to submenu
//           >
//             {/* Main Category */}
//             <div
//               className={cn(
//                 "px-5 py-3 font-medium rounded-lg transition-all cursor-pointer",
//                 openSubmenu === cat.id
//                   ? "text-blue-600 bg-blue-50"
//                   : "hover:text-blue-600 hover:bg-gray-50"
//               )}
//             >
//               {cat.label}
//             </div>

//             {/* Flyout Submenu – NOW PERFECTLY VISIBLE */}
//             {openSubmenu === cat.id && (
//               <div
//                 className="absolute top-0 left-full ml-3 w-96 bg-white rounded-xl shadow-2xl border border-gray-200 p-6 z-50 pointer-events-auto"
//                 onMouseEnter={() => setOpenSubmenu(cat.id)} // Keep open when inside
//                 onMouseLeave={() => setOpenSubmenu(null)}   // Close only when leaving submenu
//               >
//                 <div className="grid grid-cols-3 gap-4">
//                   {cat.children.map((sub) => (
//                     <label
//                       key={sub.id}
//                       className={cn(
//                         "flex items-center gap-3 cursor-pointer p-3 rounded-lg transition-all select-none",
//                         isSelected(sub.id)
//                           ? "text-blue-600 font-semibold bg-blue-50"
//                           : "hover:bg-gray-50"
//                       )}
//                     >
//                       <Checkbox
//                         checked={isSelected(sub.id)}
//                         onCheckedChange={() => toggleFilter(sub.id)}
//                       />
//                       <span className="text-sm">{sub.label}</span>
//                     </label>
//                   ))}
//                 </div>

//                 {/* Custom Price Input */}
//                 {cat.id === "price" && (
//                   <div className="mt-6 pt-5 border-t">
//                     <label className="text-sm font-medium text-gray-700">
//                       Custom Price (₹)
//                     </label>
//                     <input
//                       type="text"
//                       value={priceInput}
//                       onChange={(e) => setPriceInput(e.target.value)}
//                       placeholder="e.g. 45000"
//                       className="mt-2 w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//                     />
//                   </div>
//                 )}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   )}
// </div>
//       {/* MOBILE — CLICK ACCORDION (unchanged, just cleaned up) */}
//       <div className="md:hidden px-4 py-4 border-b">
//         <p className="font-bold text-lg mb-4">Filter Products</p>
//         <div className="space-y-1">
//           {categories.map((cat) => (
//             <div key={cat.id}>
//               <button
//                 className={cn(
//                   "w-full flex justify-between items-center py-4 font-medium text-left",
//                   mobileOpen === cat.id && "text-blue-600"
//                 )}
//                 onClick={() => setMobileOpen(mobileOpen === cat.id ? null : cat.id)}
//               >
//                 {cat.label}
//                 <ChevronDown
//                   className={cn("h-5 w-5 transition-transform", mobileOpen === cat.id && "rotate-180")}
//                 />
//               </button>

//               {mobileOpen === cat.id && (
//                 <div className="pb-4">
//                   <div className="grid grid-cols-2 gap-3 mt-3">
//                     {cat.children.map((sub) => (
//                       <label
//                         key={sub.id}
//                         className={cn(
//                           "flex items-center gap-3 p-3 rounded-lg",
//                           isSelected(sub.id)
//                             ? "text-blue-600 font-medium bg-blue-50"
//                             : "hover:bg-gray-50"
//                         )}
//                       >
//                         <Checkbox
//                           checked={isSelected(sub.id)}
//                           onCheckedChange={() => toggleFilter(sub.id)}
//                         />
//                         <span>{sub.label}</span>
//                       </label>
//                     ))}
//                   </div>

//                   {cat.id === "price" && (
//                     <input
//                       type="text"
//                       value={priceInput}
//                       onChange={(e) => setPriceInput(e.target.value)}
//                       placeholder="Enter custom price"
//                       className="mt-5 w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
//                     />
//                   )}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

"use client";

import React, { useState } from "react";
import { ChevronDown, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = [
  {
    id: "price",
    label: "Shop By Price",
    href: "/shop/price"
  },
  {
    id: "brand",
    label: "Shop By Brands",
    href: "/shop/brands"
  },
  {
    id: "processor",
    label: "Shop By Processor",
    href: "/shop/processor"
  },
];

export default function CategoryMenu() {
  const [desktopOpen, setDesktopOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
    
      {/* DESKTOP — HOVER MENU */}
      <div
        className="hidden md:block relative z-50"
        onMouseEnter={() => setDesktopOpen(true)}
        onMouseLeave={() => setDesktopOpen(false)}
      >
        {/* Trigger Button */}
        <button
          className={cn(
            // INCREASED vertical padding from py-3 to py-4 for more buffer
            "flex items-center cursor-pointer  gap-2 px-6 py-[25px] text-lg font-semibold transition-colors",
            desktopOpen ? "text-blue-600" : "hover:text-blue-600"
          )}
          aria-expanded={desktopOpen}
        >
          All Categories
          <ChevronDown className={cn("h-5 w-5 transition-transform", desktopOpen && "rotate-180")} />
        </button>

        {/* Dropdown Menu */}
        {desktopOpen && (
          <div
            className="absolute top-full right-5 w-64 bg-white border border-gray-200 overflow-hidden"
          >
            <div className="p-2">
              {categories.map((cat) => (
                <a
                  key={cat.id}
                  href={cat.href}
                  // REMOVED `flex flex-col` as it was unnecessary and might cause alignment issues.
                  // INCREASED vertical padding from py-3 to py-4 for more buffer.
className="block px-5 py-4 font-medium leading-relaxed hover:text-blue-600 hover:bg-blue-50 transition-all"
                >
                  {cat.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* MOBILE — CLICK MENU */}
      <div className="md:hidden px-4 py-4 border-b">
        <button
          // INCREASED vertical padding from py-3 to py-4
          className="w-full flex justify-between items-center py-4 font-bold text-lg"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          All Categories
          <ChevronDown
            className={cn("h-5 w-5 transition-transform", mobileOpen && "rotate-180")}
          />
        </button>

        {mobileOpen && (
          <div className="mt-3 space-y-2">
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={cat.href}
                // INCREASED vertical padding from py-3 to py-4
                className="block px-4 py-4 font-medium rounded-lg hover:text-blue-600 hover:bg-blue-50 transition-all"
              >
                {cat.label}
              </a>
            ))}
          </div>
        )}

        
      </div>
<div className=' flex md:hidden items-center cursor-pointer hover:text-blue-600 gap-2'>
              <Phone  className="h-5 w-5"/>(+91) 9321888689 
            </div>
    </>
  );
}