// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// interface ProductTabsProps {
//   product: {
//     description: string;
//     specifications: Record<string, string>;
//     brand: string;
//   };
// }

// export default function ProductTabs({ product }: ProductTabsProps) {
//   const [activeTab, setActiveTab] = useState<
//     "description" | "specification" | "qa" | "reviews" | "tags"
//   >("description");
//   const [direction, setDirection] = useState(0);

//   const handleTabChange = (tab: typeof activeTab) => {
//     const tabs = ["description", "specification", "qa", "reviews", "tags"];
//     const currentIndex = tabs.indexOf(activeTab);
//     const newIndex = tabs.indexOf(tab);
//     setDirection(newIndex > currentIndex ? 1 : -1);
//     setActiveTab(tab);
//   };

//   return (
//     <div className='bg-white rounded-lg shadow-sm mb-8 overflow-hidden'>
//       <div
//         role='tablist'
//         className='flex border-b border-gray-200 overflow-x-auto h-16 scrollbar-thin'
//       >
//         {[
//           { id: "description", label: "Description" },
//           { id: "specification", label: "Specification" },
//           { id: "tags", label: "Tags" },
//         ].map((tab) => (
//           <button
//             key={tab.id}
//             role='tab'
//             aria-selected={activeTab === tab.id}
//             onClick={() => handleTabChange(tab.id as typeof activeTab)}
//             className={`xl:px-6 xl:w-auto w-full py-3 font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
//               activeTab === tab.id
//                 ? "text-[#155DFC] bg-gray-200 border-b-2 border-[#155DFC]"
//                 : "text-gray-600 hover:text-gray-900"
//             }`}
//           >
//             {tab.label}
//           </button>
//         ))}
//       </div>

//       <div className='relative overflow-hidden'>
//         <AnimatePresence mode='wait' initial={false} custom={direction}>
//           <motion.div
//             key={activeTab}
//             custom={direction}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.3, ease: [0.7, 0, 0.4, 1] }}
//             className='p-6'
//           >
//             {activeTab === "description" && (
//               <div>
//                 <h2 className='text-2xl font-bold text-gray-900 mb-4'>
//                   Product Description
//                 </h2>
//                 <p className='text-gray-600 leading-relaxed'>
//                   {product.description}
//                 </p>
//               </div>
//             )}

//             {activeTab === "specification" && (
//               <div>
//                 <h2 className='text-2xl font-bold text-gray-900 mb-4'>
//                   Specifications
//                 </h2>
//                 <table className='w-full'>
//                   <tbody>
//                     {Object.entries(product.specifications).map(
//                       ([key, value], idx) => (
//                         <tr
//                           key={key}
//                           className={idx % 2 === 0 ? "bg-gray-200" : ""}
//                         >
//                           <td className='py-3 px-0 whitespace-nowrap xl:px-4 font-semibold text-gray-700 w-1/3'>
//                             {key}
//                           </td>
//                           <td className='py-3 px-4 whitespace-nowrap text-gray-600'>
//                             {value}
//                           </td>
//                         </tr>
//                       )
//                     )}
//                   </tbody>
//                 </table>
//               </div>
//             )}

//             {activeTab === "qa" && (
//               <div>
//                 <h2 className='text-2xl font-bold text-gray-900 mb-4'>
//                   Questions & Answers
//                 </h2>
//                 <p className='text-gray-500'>
//                   No questions yet. Be the first to ask!
//                 </p>
//               </div>
//             )}

//             {activeTab === "reviews" && (
//               <div>
//                 <h2 className='text-2xl font-bold text-gray-900 mb-4'>
//                   Customer Reviews
//                 </h2>
//                 <p className='text-gray-500'>
//                   No reviews yet. Be the first to review!
//                 </p>
//               </div>
//             )}

//             {activeTab === "tags" && (
//               <div>
//                 <h2 className='text-2xl font-bold text-gray-900 mb-4'>
//                   Product Tags
//                 </h2>
//                 <div className='flex flex-wrap gap-2'>
//                   <span className='bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm'>
//                     Laptop
//                   </span>
//                   <span className='bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm'>
//                     {product.brand}
//                   </span>
//                   <span className='bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm'>
//                     Refurbished
//                   </span>
//                 </div>
//               </div>
//             )}
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// }




// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// interface ProductTabsProps {
//   product: {
//     description: string;
//     specifications: Record<string, string>;
//     brand: string;
//   };
// }

// export default function ProductTabs({ product }: ProductTabsProps) {
//   const [activeTab, setActiveTab] = useState<
//     "description" | "specification"
//   >("description");
//   const [direction, setDirection] = useState(0);

//   const handleTabChange = (tab: typeof activeTab) => {
//     const tabs = ["description", "specification"];
//     const currentIndex = tabs.indexOf(activeTab);
//     const newIndex = tabs.indexOf(tab);
//     setDirection(newIndex > currentIndex ? 1 : -1);
//     setActiveTab(tab);
//   };

//   return (
//     <div className='bg-white rounded-lg shadow-sm mb-8 overflow-hidden'>
//       <div
//         role='tablist'
//         className='flex border-b border-gray-200 overflow-x-auto h-16 scrollbar-thin'
//       >
//         {[
//           { id: "description", label: "Description" },
//           { id: "specification", label: "Specification" },
//         ].map((tab) => (
//           <button
//             key={tab.id}
//             role='tab'
//             aria-selected={activeTab === tab.id}
//             onClick={() => handleTabChange(tab.id as typeof activeTab)}
//             className={`xl:px-6 xl:w-auto w-full py-3 font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
//               activeTab === tab.id
//                 ? "text-[#155DFC] bg-gray-200 border-b-2 border-[#155DFC]"
//                 : "text-gray-600 hover:text-gray-900"
//             }`}
//           >
//             {tab.label}
//           </button>
//         ))}
//       </div>

//       <div className='relative overflow-hidden'>
//         <AnimatePresence mode='wait' initial={false} custom={direction}>
//           <motion.div
//             key={activeTab}
//             custom={direction}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.3, ease: [0.7, 0, 0.4, 1] }}
//             className='p-6'
//           >
//             {activeTab === "description" && (
//               <div>
//                 <h2 className='text-2xl font-bold text-gray-900 mb-4'>
//                   Product Description
//                 </h2>
//                 <p className='text-gray-600 leading-relaxed'>
//                   {product.description}
//                 </p>
//               </div>
//             )}

//             {activeTab === "specification" && (
//               <div>
//                 <h2 className='text-2xl font-bold text-gray-900 mb-4'>
//                   Specifications
//                 </h2>
//                 <table className='w-full'>
//                   <tbody>
//                     {Object.entries(product.specifications).map(
//                       ([key, value], idx) => (
//                         <tr
//                           key={key}
//                           className={idx % 2 === 0 ? "bg-gray-200" : ""}
//                         >
//                           <td className='py-3 px-0 whitespace-nowrap xl:px-4 font-semibold text-gray-700 w-1/3'>
//                             {key}
//                           </td>
//                           <td className='py-3 px-4 whitespace-nowrap text-gray-600'>
//                             {value}
//                           </td>
//                         </tr>
//                       )
//                     )}
//                   </tbody>
//                 </table>
//               </div>
//             )}
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// }


// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Check,
//   Copy,
//   Info,
//   FileText,
//   Settings2,
//   ChevronRight,
//   Search,
// } from "lucide-react";
// import { Badge } from "@/components/ui/badge";
// import { Input } from "@/components/ui/input";
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "@/components/ui/tooltip";

// interface ProductTabsProps {
//   product: {
//     description: string;
//     specifications: Record<string, string>;
//     brand: string;
//   };
// }

// export default function ProductTabs({ product }: ProductTabsProps) {
//   const [activeTab, setActiveTab] = useState<"description" | "specification">(
//     "description"
//   );
//   const [direction, setDirection] = useState(0);
//   const [copiedKey, setCopiedKey] = useState<string | null>(null);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [expandedCard, setExpandedCard] = useState<string | null>(null);

//   const handleTabChange = (tab: typeof activeTab) => {
//     const tabs = ["description", "specification"];
//     const currentIndex = tabs.indexOf(activeTab);
//     const newIndex = tabs.indexOf(tab);
//     setDirection(newIndex > currentIndex ? 1 : -1);
//     setActiveTab(tab);
//     setSearchQuery("");
//   };

//   const handleCopy = async (key: string, value: string) => {
//     try {
//       await navigator.clipboard.writeText(`${key}: ${value}`);
//       setCopiedKey(key);
//       setTimeout(() => setCopiedKey(null), 2000);
//     } catch (err) {
//       console.error("Failed to copy:", err);
//     }
//   };

//   const handleCopyAll = async () => {
//     const allSpecs = Object.entries(product.specifications)
//       .map(([key, value]) => `${key}: ${value}`)
//       .join("\n");
//     try {
//       await navigator.clipboard.writeText(allSpecs);
//       setCopiedKey("all");
//       setTimeout(() => setCopiedKey(null), 2000);
//     } catch (err) {
//       console.error("Failed to copy:", err);
//     }
//   };

//   const specEntries = Object.entries(product.specifications);

//   const filteredSpecs = specEntries.filter(
//     ([key, value]) =>
//       key.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       value.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const tabs = [
//     { id: "description" as const, label: "Description", icon: FileText },
//     { id: "specification" as const, label: "Specifications", icon: Settings2 },
//   ];

//   return (
//     <div className="bg-white rounded-xl shadow-sm mb-8 overflow-hidden border border-gray-100">
//       {/* Tab Headers */}
//       <div
//         role="tablist"
//         className="flex border-b border-gray-200 bg-gray-50/50"
//       >
//         {tabs.map((tab) => {
//           const Icon = tab.icon;
//           return (
//             <button
//               key={tab.id}
//               role="tab"
//               aria-selected={activeTab === tab.id}
//               onClick={() => handleTabChange(tab.id)}
//               className={`relative flex-1 sm:flex-none sm:px-8 py-4 font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 ${activeTab === tab.id
//                   ? "text-[#155DFC] bg-white"
//                   : "text-gray-600 hover:text-gray-900 hover:bg-gray-100/50"
//                 }`}
//             >
//               <Icon className="w-4 h-4" />
//               <span className="hidden sm:inline">{tab.label}</span>
//               <span className="sm:hidden text-sm">{tab.label}</span>
//               {activeTab === tab.id && (
//                 <motion.div
//                   layoutId="activeTab"
//                   className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#155DFC]"
//                   transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
//                 />
//               )}
//             </button>
//           );
//         })}
//       </div>

//       {/* Tab Content */}
//       <div className="relative overflow-hidden">
//         <AnimatePresence mode="wait" initial={false} custom={direction}>
//           <motion.div
//             key={activeTab}
//             custom={direction}
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -10 }}
//             transition={{ duration: 0.2, ease: "easeOut" }}
//             className="p-4 sm:p-6"
//           >
//             {/* Description Tab */}
//             {activeTab === "description" && (
//               <div>
//                 <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
//                   Product Description
//                 </h2>
//                 <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
//                   {product.description}
//                 </p>
//               </div>
//             )}

//             {/* Specifications Tab */}
//             {activeTab === "specification" && (
//               <div>
//                 {/* Header with Search and Actions */}
//                 <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
//                   <div className="flex items-center gap-3">
//                     <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
//                       Specifications
//                     </h2>
//                     <Badge
//                       variant="secondary"
//                       className="bg-[#155DFC]/10 text-[#155DFC] hover:bg-[#155DFC]/20"
//                     >
//                       {specEntries.length} specs
//                     </Badge>
//                   </div>

//                   <div className="flex items-center gap-2">
//                     {/* Search Input */}
//                     <div className="relative flex-1 sm:flex-none">
//                       <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
//                       <Input
//                         type="text"
//                         placeholder="Search specs..."
//                         value={searchQuery}
//                         onChange={(e) => setSearchQuery(e.target.value)}
//                         className="pl-9 h-9 w-full sm:w-48 text-sm"
//                       />
//                     </div>

//                     {/* Copy All Button */}
//                     <TooltipProvider>
//                       <Tooltip>
//                         <TooltipTrigger asChild>
//                           <button
//                             onClick={handleCopyAll}
//                             className="p-2 rounded-lg border border-gray-200 hover:bg-gray-100 hover:border-gray-300 transition-all flex-shrink-0"
//                           >
//                             {copiedKey === "all" ? (
//                               <Check className="w-4 h-4 text-green-500" />
//                             ) : (
//                               <Copy className="w-4 h-4 text-gray-500" />
//                             )}
//                           </button>
//                         </TooltipTrigger>
//                         <TooltipContent>
//                           <p>
//                             {copiedKey === "all"
//                               ? "Copied all!"
//                               : "Copy all specs"}
//                           </p>
//                         </TooltipContent>
//                       </Tooltip>
//                     </TooltipProvider>
//                   </div>
//                 </div>

//                 {/* No Results */}
//                 {filteredSpecs.length === 0 && searchQuery && (
//                   <div className="text-center py-12">
//                     <Search className="w-12 h-12 text-gray-300 mx-auto mb-3" />
//                     <p className="text-gray-500">
//                       No specifications found for "{searchQuery}"
//                     </p>
//                     <button
//                       onClick={() => setSearchQuery("")}
//                       className="mt-2 text-[#155DFC] hover:underline text-sm"
//                     >
//                       Clear search
//                     </button>
//                   </div>
//                 )}

//                 {/* Desktop Table View */}
//                 {filteredSpecs.length > 0 && (
//                   <div className="hidden lg:block rounded-xl border border-gray-200 overflow-hidden">
//                     <table className="w-full">
//                       <thead className="bg-gray-50 border-b border-gray-200">
//                         <tr>
//                           <th className="py-3 px-6 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider w-2/5">
//                             Property
//                           </th>
//                           <th className="py-3 px-6 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
//                             Value
//                           </th>
//                           <th className="py-3 px-4 w-16"></th>
//                         </tr>
//                       </thead>
//                       <tbody className="divide-y divide-gray-200">
//                         {filteredSpecs.map(([key, value], idx) => (
//                           <motion.tr
//                             key={key}
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 1 }}
//                             transition={{ delay: idx * 0.03 }}
//                             className="group hover:bg-blue-50/50 transition-colors"
//                           >
//                             <td className="py-4 px-6 font-medium text-gray-900">
//                               <div className="flex items-center gap-2">
//                                 <ChevronRight className="w-4 h-4 text-[#155DFC] opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
//                                 <span>{key}</span>
//                               </div>
//                             </td>
//                             <td className="py-4 px-6 text-gray-600">
//                               <span className="break-words">{value}</span>
//                             </td>
//                             <td className="py-4 px-4">
//                               <TooltipProvider>
//                                 <Tooltip>
//                                   <TooltipTrigger asChild>
//                                     <button
//                                       onClick={() => handleCopy(key, value)}
//                                       className="p-2 rounded-md opacity-0 group-hover:opacity-100 hover:bg-gray-200 transition-all"
//                                     >
//                                       {copiedKey === key ? (
//                                         <Check className="w-4 h-4 text-green-500" />
//                                       ) : (
//                                         <Copy className="w-4 h-4 text-gray-400" />
//                                       )}
//                                     </button>
//                                   </TooltipTrigger>
//                                   <TooltipContent>
//                                     <p>
//                                       {copiedKey === key ? "Copied!" : "Copy"}
//                                     </p>
//                                   </TooltipContent>
//                                 </Tooltip>
//                               </TooltipProvider>
//                             </td>
//                           </motion.tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   </div>
//                 )}

//                 {/* Tablet View (md screens) */}
//                 {filteredSpecs.length > 0 && (
//                   <div className="hidden sm:grid lg:hidden grid-cols-2 gap-3">
//                     {filteredSpecs.map(([key, value], idx) => (
//                       <motion.div
//                         key={key}
//                         initial={{ opacity: 0, scale: 0.95 }}
//                         animate={{ opacity: 1, scale: 1 }}
//                         transition={{ delay: idx * 0.03 }}
//                         className="bg-gray-50 rounded-xl p-4 border border-gray-200 hover:border-[#155DFC]/30 hover:shadow-md transition-all group"
//                       >
//                         <div className="flex items-start justify-between gap-2">
//                           <div className="flex-1 min-w-0">
//                             <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
//                               {key}
//                             </p>
//                             <p className="text-gray-900 font-medium break-words text-sm">
//                               {value}
//                             </p>
//                           </div>
//                           <button
//                             onClick={() => handleCopy(key, value)}
//                             className="flex-shrink-0 p-1.5 rounded-md opacity-0 group-hover:opacity-100 hover:bg-gray-200 transition-all"
//                           >
//                             {copiedKey === key ? (
//                               <Check className="w-3.5 h-3.5 text-green-500" />
//                             ) : (
//                               <Copy className="w-3.5 h-3.5 text-gray-400" />
//                             )}
//                           </button>
//                         </div>
//                       </motion.div>
//                     ))}
//                   </div>
//                 )}

//                 {/* Mobile Card View */}
//                 {filteredSpecs.length > 0 && (
//                   <div className="sm:hidden space-y-2">
//                     {filteredSpecs.map(([key, value], idx) => (
//                       <motion.div
//                         key={key}
//                         initial={{ opacity: 0, x: -10 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ delay: idx * 0.03 }}
//                         onClick={() =>
//                           setExpandedCard(expandedCard === key ? null : key)
//                         }
//                         className={`bg-gray-50 rounded-xl border transition-all cursor-pointer ${expandedCard === key
//                             ? "border-[#155DFC] shadow-md bg-blue-50/30"
//                             : "border-gray-200 hover:border-gray-300"
//                           }`}
//                       >
//                         <div className="p-4">
//                           <div className="flex items-center justify-between gap-3">
//                             <div className="flex-1 min-w-0">
//                               <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
//                                 {key}
//                               </p>
//                               <p
//                                 className={`text-gray-900 font-medium mt-1 ${expandedCard === key
//                                     ? "break-words"
//                                     : "truncate"
//                                   }`}
//                               >
//                                 {value}
//                               </p>
//                             </div>
//                             <div className="flex items-center gap-1">
//                               <button
//                                 onClick={(e) => {
//                                   e.stopPropagation();
//                                   handleCopy(key, value);
//                                 }}
//                                 className="p-2 rounded-md hover:bg-gray-200 transition-colors"
//                               >
//                                 {copiedKey === key ? (
//                                   <Check className="w-4 h-4 text-green-500" />
//                                 ) : (
//                                   <Copy className="w-4 h-4 text-gray-400" />
//                                 )}
//                               </button>
//                               <ChevronRight
//                                 className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${expandedCard === key ? "rotate-90" : ""
//                                   }`}
//                               />
//                             </div>
//                           </div>
//                         </div>

//                         {/* Expanded Content */}
//                         <AnimatePresence>
//                           {expandedCard === key && (
//                             <motion.div
//                               initial={{ height: 0, opacity: 0 }}
//                               animate={{ height: "auto", opacity: 1 }}
//                               exit={{ height: 0, opacity: 0 }}
//                               transition={{ duration: 0.2 }}
//                               className="border-t border-gray-200 overflow-hidden"
//                             >
//                               <div className="p-4 pt-3">
//                                 <p className="text-sm text-gray-600 break-words">
//                                   {value}
//                                 </p>
//                               </div>
//                             </motion.div>
//                           )}
//                         </AnimatePresence>
//                       </motion.div>
//                     ))}
//                   </div>
//                 )}

//                 {/* Brand Footer */}
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.3 }}
//                   className="mt-6 pt-4 border-t border-gray-200"
//                 >
//                   <div className="flex flex-wrap items-center justify-between gap-3">
//                     <div className="flex items-center gap-2 text-sm text-gray-500">
//                       <Info className="w-4 h-4" />
//                       <span>
//                         Brand:{" "}
//                         <span className="font-semibold text-gray-900">
//                           {product.brand}
//                         </span>
//                       </span>
//                     </div>
//                     {searchQuery && filteredSpecs.length > 0 && (
//                       <p className="text-xs text-gray-400">
//                         Showing {filteredSpecs.length} of {specEntries.length}{" "}
//                         specifications
//                       </p>
//                     )}
//                   </div>
//                 </motion.div>
//               </div>
//             )}
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// }





"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Settings2 } from "lucide-react";

interface ProductTabsProps {
  product: {
    description: string;
    specifications: Record<string, string>;
    brand: string;
  };
}

export default function ProductTabs({ product }: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState<"description" | "specification">(
    "description"
  );

  const tabs = [
    { id: "description" as const, label: "Description", icon: FileText },
    { id: "specification" as const, label: "Specifications", icon: Settings2 },
  ];

  const specEntries = Object.entries(product.specifications);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      {/* Tab Navigation */}
      <div role="tablist" className="flex border-b border-gray-200">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveTab(tab.id)}
              className={`relative flex-1 sm:flex-none sm:min-w-[160px] py-4 px-6 font-medium text-sm tracking-wide transition-colors duration-200 cursor-pointer flex items-center justify-center gap-2.5 ${isActive
                  ? "text-[#155DFC]"
                  : "text-gray-500 hover:text-gray-900"
                }`}
            >
              <Icon className="w-4 h-4" strokeWidth={2} />
              <span>{tab.label}</span>

              {isActive && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#155DFC]"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="p-5 sm:p-8"
        >
          {/* Description Tab */}
          {activeTab === "description" && (
            <div className="max-w-3xl">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900 tracking-tight mb-4">
                Product Description
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {product.description}
              </p>
            </div>
          )}

          {/* Specifications Tab */}
          {activeTab === "specification" && (
            <div>
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900 tracking-tight mb-6">
                Technical Specifications
              </h2>

              {/* Desktop & Tablet Table */}
              <div className="hidden sm:block">
                <div className="rounded-lg border border-gray-200 overflow-hidden">
                  <table className="w-full">
                    <tbody className="divide-y divide-gray-200">
                      {specEntries.map(([key, value], idx) => (
                        <tr
                          key={key}
                          className={`${idx % 2 === 0 ? "bg-gray-50/50" : "bg-white"
                            }`}
                        >
                          <td className="py-4 px-5 text-sm font-medium text-gray-900 w-1/3 sm:w-2/5">
                            {key}
                          </td>
                          <td className="py-4 px-5 text-sm text-gray-600">
                            {value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Mobile Cards */}
              <div className="sm:hidden space-y-3">
                {specEntries.map(([key, value], idx) => (
                  <div
                    key={key}
                    className={`rounded-lg p-4 ${idx % 2 === 0
                        ? "bg-gray-50 border border-gray-100"
                        : "bg-white border border-gray-200"
                      }`}
                  >
                    <dt className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                      {key}
                    </dt>
                    <dd className="text-sm font-medium text-gray-900">
                      {value}
                    </dd>
                  </div>
                ))}
              </div>

              {/* Brand Info */}
              <div className="mt-6 pt-5 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                  Manufactured by{" "}
                  <span className="font-semibold text-gray-900">
                    {product.brand}
                  </span>
                </p>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}