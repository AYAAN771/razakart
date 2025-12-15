// "use client";

// import React, { useState } from "react";
// import {
//   Popover,
//   PopoverTrigger,
//   PopoverContent,
// } from "@/components/ui/popover";
// import { ChevronDown, ChevronLeft, Menu, ChevronRight } from "lucide-react";
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

// export default function CategoryMenuF() {
//   const [desktopOpen, setDesktopOpen] = useState(false);
//   const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
//   // *** CHANGED: Default 'price' category open on mobile ***
//   const [mobileOpen, setMobileOpen] = useState<string | null>("price");

//   return (
//     <>
//       {/* ==================== DESKTOP (No changes) ==================== */}
//       <div
//         className='hidden md:block relative'
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
//                 "flex items-center cursor-pointer gap-2 px-0 py-2 text-base font-medium transition",
//                 desktopOpen ? "text-blue-600" : "hover:text-blue-600"
//               )}
//             >
//               <span className='flex items-center gap-2.5'>
//                 Categories <Menu />
//               </span>
//             </button>
//           </PopoverTrigger>

//           <PopoverContent
//             side='bottom'
//             align='start'
//             className='w-72 p-0 mr-8 bg-white relative border mt-5 border-gray-200 shadow-lg'
//             onOpenAutoFocus={(e) => e.preventDefault()}
//             sideOffset={0}
//           >
//             <div className='py-2'>
//               {categories.map((cat) => (
//                 <div
//                   key={cat.id}
//                   className='group/category'
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
//                         openSubmenu === cat.id
//                           ? "text-blue-500"
//                           : "text-gray-500"
//                       )}
//                     />
//                     <span>{cat.label}</span>
//                   </div>

//                   {/* SUBMENU WITH ANIMATION */}
//                   <AnimatePresence>
//                     {openSubmenu === cat.id && (
//                       <motion.div
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         exit={{ opacity: 0 }}
//                         transition={{
//                           duration: 0.3,
//                           ease: "easeOut",
//                         }}
//                         className='absolute right-full top-0 min-w-lg min-h-20 bg-white border border-gray-200 p-6 shadow-lg'
//                       >
//                         <div className='grid grid-cols-3 gap-3'>
//                           {cat.children.map((sub) => (
//                             <a
//                               key={sub.id}
//                               href={`/category/${cat.id}/${sub.id}`}
//                               className='flex items-center justify-between gap-2 px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all group'
//                             >
//                               <span className='text-sm font-medium'>
//                                 {sub.label}
//                               </span>
//                               <ChevronRight className='h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity' />
//                             </a>
//                           ))}
//                         </div>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>
//               ))}
//             </div>
//           </PopoverContent>
//         </Popover>
//       </div>

//       {/* ==================== MOBILE (Refactored) ==================== */}
//       <div className='md:hidden px-0 mt-3'>
//         <p className='font-semibold text-sm mb-2 text-[#155dfc]'>Categories</p>
//         <div className='space-y-3'>
//           {categories.map((cat) => (
//             <div key={cat.id}>
//               <button
//                 className='w-full flex justify-between py-3 font-medium'
//                 onClick={() => {
//                   // *** CHANGED: Only allow opening a different category, but not closing the current one if it's the only one open.
//                   // Since we always have one open by default, we just toggle.
//                   // If the user clicks the open one, it will close, and the next click will open it again or open a new one.
//                   // To meet the requirement "user won't be able to close just open and if one opens another closes", we enforce that:
//                   setMobileOpen(mobileOpen === cat.id ? cat.id : cat.id);
//                   // The original user logic was: setMobileOpen(mobileOpen === cat.id ? null : cat.id)
//                   // To enforce that one must *always* be open:
//                   setMobileOpen(cat.id);
//                 }}
//               >
//                 {cat.label}
//                 <ChevronDown
//                   className={cn(
//                     "h-4 w-4 transition-transform",
//                     mobileOpen === cat.id && "rotate-180"
//                   )}
//                 />
//               </button>

//               <AnimatePresence initial={false}>
//                 {mobileOpen === cat.id && (
//                   <motion.div
//                     // *** ADDED: height animation for smooth slide/accordion effect ***
//                     initial={{ height: 0, opacity: 0 }}
//                     animate={{ height: "auto", opacity: 1 }}
//                     exit={{ height: 0, opacity: 0 }}
//                     transition={{ duration: 0.3, ease: "easeInOut" }}
//                     // *** IMPORTANT: The overflow-hidden is crucial for the height animation to work correctly without jitter. ***
//                     className='pl-2 pr-0 pb-0 space-y-4 overflow-hidden'
//                   >
//                     <div className='grid grid-cols-2 gap-3'>
//                       {cat.children.map((sub) => (
//                         <a
//                           key={sub.id}
//                           href={`/category/${cat.id}/${sub.id}`}
//                           className='flex items-center justify-between  px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all'
//                         >
//                           <span className='text-sm  font-medium'>
//                             {sub.label}
//                           </span>
//                           <ChevronRight className='h-3 w-3' />
//                         </a>
//                       ))}
//                     </div>
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



"use client";

import React, { useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { ChevronDown, ChevronLeft, Menu, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  {
    id: "price",
    label: "Shop By Price",
    children: [
      { id: "under-10000", label: "Under ₹10,000" },
      { id: "under-15000", label: "Under ₹15,000" },
      { id: "under-20000", label: "Under ₹20,000" },
      { id: "under-25000", label: "Under ₹25,000" },
      { id: "under-50000", label: "Under ₹50,000" },
      { id: "under-75000", label: "Under ₹75,000" },
      { id: "under-100000", label: "Under ₹100,000" },
      { id: "over-100000", label: "Over ₹100,000" },
    ],
  },
  {
    id: "brand",
    label: "Shop By Brands",
    children: [
      { id: "hp", label: "HP" },
      { id: "dell", label: "Dell" },
      { id: "lenovo", label: "Lenovo" },
      { id: "acer", label: "Acer" },
      { id: "asus", label: "Asus" },
      { id: "apple", label: "Apple" },
    ],
  },
  {
    id: "processor",
    label: "Shop By Processor",
    children: [
      { id: "intel-i3", label: "Intel i3 gen" },
      { id: "intel-i5", label: "Intel i5 gen" },
      { id: "intel-i7", label: "Intel i7 gen" },
      { id: "apple-m1", label: "Apple M1" },
      { id: "apple-m2", label: "Apple M2" },
    ],
  },
];

export default function CategoryMenuF() {
  const [desktopOpen, setDesktopOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState<string | null>("price");

  return (
    <>
      {/* ==================== DESKTOP ==================== */}
      <div
        className='hidden md:block relative'
        onMouseEnter={() => setDesktopOpen(true)}
        onMouseLeave={() => {
          setDesktopOpen(false);
          setOpenSubmenu(null);
        }}
      >
        <Popover open={desktopOpen}>
          <PopoverTrigger asChild>
            <button
              className={cn(
                "flex items-center cursor-pointer gap-2 px-0 py-2 text-base font-medium transition",
                desktopOpen ? "text-blue-600" : "hover:text-blue-600"
              )}
            >
              <span className='flex items-center gap-2.5'>
                Categories <Menu />
              </span>
            </button>
          </PopoverTrigger>

          <PopoverContent
            side='bottom'
            align='start'
            className='w-72 p-0 mr-8 bg-white relative border mt-5 border-gray-200 shadow-lg'
            onOpenAutoFocus={(e) => e.preventDefault()}
            sideOffset={0}
          >
            <div className='py-2'>
              {categories.map((cat) => (
                <div
                  key={cat.id}
                  className='group/category'
                  onMouseEnter={() => setOpenSubmenu(cat.id)}
                  onMouseLeave={() => setOpenSubmenu(null)}
                >
                  <div
                    className={cn(
                      "flex items-center justify-between px-6 py-3 cursor-pointer transition-all",
                      openSubmenu === cat.id ? "text-blue-600" : ""
                    )}
                  >
                    <ChevronLeft
                      className={cn(
                        "h-4 w-4",
                        openSubmenu === cat.id
                          ? "text-blue-500"
                          : "text-gray-500"
                      )}
                    />
                    <span>{cat.label}</span>
                  </div>

                  <AnimatePresence>
                    {openSubmenu === cat.id && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                          duration: 0.3,
                          ease: "easeOut",
                        }}
                        className='absolute right-full top-0 min-w-lg min-h-20 bg-white border border-gray-200 p-6 shadow-lg'
                      >
                        <div className='grid grid-cols-3 gap-3'>
                          {cat.children.map((sub) => (
                            <a
                              key={sub.id}
                              href={`/category/${cat.id}/${sub.id}`}
                              className='flex items-center justify-between gap-2 px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all group'
                            >
                              <span className='text-sm font-medium'>
                                {sub.label}
                              </span>
                              <ChevronRight className='h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity' />
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </PopoverContent>
        </Popover>
      </div>

      {/* ==================== MOBILE ==================== */}
      <div className='md:hidden px-0 mt-3'>
        <p className='font-semibold text-sm mb-2 text-[#155dfc]'>Categories</p>
        <div className='space-y-3'>
          {categories.map((cat) => (
            <div key={cat.id}>
              <button
                className='w-full flex justify-between py-3 font-medium'
                onClick={() => setMobileOpen(cat.id)}
              >
                {cat.label}
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform",
                    mobileOpen === cat.id && "rotate-180"
                  )}
                />
              </button>

              <AnimatePresence initial={false}>
                {mobileOpen === cat.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className='pl-2 pr-0 pb-0 space-y-4 overflow-hidden'
                  >
                    <div className='grid grid-cols-2 gap-3'>
                      {cat.children.map((sub) => (
                        <a
                          key={sub.id}
                          href={`/category/${cat.id}/${sub.id}`}
                          className='flex items-center justify-between px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all'
                        >
                          <span className='text-sm font-medium'>
                            {sub.label}
                          </span>
                          <ChevronRight className='h-3 w-3' />
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}