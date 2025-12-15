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




"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ProductTabsProps {
  product: {
    description: string;
    specifications: Record<string, string>;
    brand: string;
  };
}

export default function ProductTabs({ product }: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState<
    "description" | "specification"
  >("description");
  const [direction, setDirection] = useState(0);

  const handleTabChange = (tab: typeof activeTab) => {
    const tabs = ["description", "specification"];
    const currentIndex = tabs.indexOf(activeTab);
    const newIndex = tabs.indexOf(tab);
    setDirection(newIndex > currentIndex ? 1 : -1);
    setActiveTab(tab);
  };

  return (
    <div className='bg-white rounded-lg shadow-sm mb-8 overflow-hidden'>
      <div
        role='tablist'
        className='flex border-b border-gray-200 overflow-x-auto h-16 scrollbar-thin'
      >
        {[
          { id: "description", label: "Description" },
          { id: "specification", label: "Specification" },
        ].map((tab) => (
          <button
            key={tab.id}
            role='tab'
            aria-selected={activeTab === tab.id}
            onClick={() => handleTabChange(tab.id as typeof activeTab)}
            className={`xl:px-6 xl:w-auto w-full py-3 font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
              activeTab === tab.id
                ? "text-[#155DFC] bg-gray-200 border-b-2 border-[#155DFC]"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className='relative overflow-hidden'>
        <AnimatePresence mode='wait' initial={false} custom={direction}>
          <motion.div
            key={activeTab}
            custom={direction}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.7, 0, 0.4, 1] }}
            className='p-6'
          >
            {activeTab === "description" && (
              <div>
                <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                  Product Description
                </h2>
                <p className='text-gray-600 leading-relaxed'>
                  {product.description}
                </p>
              </div>
            )}

            {activeTab === "specification" && (
              <div>
                <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                  Specifications
                </h2>
                <table className='w-full'>
                  <tbody>
                    {Object.entries(product.specifications).map(
                      ([key, value], idx) => (
                        <tr
                          key={key}
                          className={idx % 2 === 0 ? "bg-gray-200" : ""}
                        >
                          <td className='py-3 px-0 whitespace-nowrap xl:px-4 font-semibold text-gray-700 w-1/3'>
                            {key}
                          </td>
                          <td className='py-3 px-4 whitespace-nowrap text-gray-600'>
                            {value}
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}