// "use client";

// import { useState, useEffect } from "react";
// import { useSearchParams } from "next/navigation";
// import NavbarF from "@/components/NavbarF";

// export default function OrderPage() {
//   const searchParams = useSearchParams();
//   const productUrl = searchParams.get("url") || "";
//   const productTitle = searchParams.get("title") || "";

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     address: "",
//     honey: "", // 🐝 honeypot
//   });

//   const [errors, setErrors] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     address: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);

//   // 🚫 Prevent multiple orders
//   useEffect(() => {
//     const alreadyOrdered = localStorage.getItem("order_placed");
//     if (alreadyOrdered) {
//       setSuccess(true);
//     }
//   }, []);

//   const validate = () => {
//     const newErrors = { name: "", email: "", phone: "", address: "" };
//     let isValid = true;

//     if (!formData.name.trim() || formData.name.length < 2) {
//       newErrors.name = "Name must be at least 2 characters";
//       isValid = false;
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(formData.email)) {
//       newErrors.email = "Invalid email address";
//       isValid = false;
//     }

//     const phoneRegex = /^[0-9]{10}$/;
//     if (!phoneRegex.test(formData.phone)) {
//       newErrors.phone = "Phone must be 10 digits";
//       isValid = false;
//     }

//     if (!formData.address.trim() || formData.address.length < 10) {
//       newErrors.address = "Address must be at least 10 characters";
//       isValid = false;
//     }

//     setErrors(newErrors);
//     return isValid;
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     // 🐝 Honeypot bot detector
//     if (formData.honey.trim() !== "") {
//       alert("Bot detected.");
//       return;
//     }

//     if (!validate()) return;

//     setLoading(true);

//     try {
//       const res = await fetch("/api/order", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           productTitle,
//           productUrl,
//           name: formData.name,
//           email: formData.email,
//           phone: formData.phone,
//           address: formData.address,
//           honey: formData.honey,
//         }),
//       });

//       if (!res.ok) {
//         throw new Error("Failed");
//       }

//       setSuccess(true);
//       localStorage.setItem("order_placed", "true");

//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         address: "",
//         honey: "",
//       });
//     } catch (error) {
//       alert("Failed to submit order. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className='bg-zinc-50 min-h-screen'>
//       <NavbarF />

//       <div className='max-w-2xl mx-auto px-4 py-8'>
//         <div className='bg-white rounded-lg p-6 shadow-md'>
//           <h1 className='text-3xl font-bold text-gray-900 mb-2'>Place Order</h1>
//           <p className='text-gray-600 mb-6'>
//             Fill in your details to complete the order
//           </p>

//           {productTitle && (
//             <div className='bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6'>
//               <p className='text-sm text-gray-600'>Product</p>
//               <p className='font-semibold text-gray-900'>{productTitle}</p>
//             </div>
//           )}

//           {success ? (
//             <div className='bg-green-50 border border-green-200 rounded-lg p-6 text-center'>
//               <h2 className='text-2xl font-bold text-green-600 mb-2'>
//                 Order Placed!
//               </h2>
//               <p className='text-gray-600'>We'll contact you soon.</p>
//             </div>
//           ) : (
//             <form onSubmit={handleSubmit} className='space-y-4'>
//               {/* 🐝 Honeypot field (INVISIBLE, NO DESIGN CHANGE) */}
//               <input
//                 type='text'
//                 value={formData.honey}
//                 onChange={(e) =>
//                   setFormData({ ...formData, honey: e.target.value })
//                 }
//                 style={{ display: "none" }}
//                 tabIndex={-1}
//                 autoComplete='off'
//               />

//               <div>
//                 <label className='block text-sm font-semibold text-gray-700 mb-2'>
//                   Name
//                 </label>
//                 <input
//                   type='text'
//                   value={formData.name}
//                   onChange={(e) =>
//                     setFormData({ ...formData, name: e.target.value })
//                   }
//                   className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
//                   placeholder='Enter your full name'
//                 />
//                 {errors.name && (
//                   <p className='text-red-500 text-sm mt-1'>{errors.name}</p>
//                 )}
//               </div>

//               <div>
//                 <label className='block text-sm font-semibold text-gray-700 mb-2'>
//                   Email
//                 </label>
//                 <input
//                   type='email'
//                   value={formData.email}
//                   onChange={(e) =>
//                     setFormData({ ...formData, email: e.target.value })
//                   }
//                   className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
//                   placeholder='your@email.com'
//                 />
//                 {errors.email && (
//                   <p className='text-red-500 text-sm mt-1'>{errors.email}</p>
//                 )}
//               </div>

//               <div>
//                 <label className='block text-sm font-semibold text-gray-700 mb-2'>
//                   Phone
//                 </label>
//                 <input
//                   type='tel'
//                   value={formData.phone}
//                   onChange={(e) =>
//                     setFormData({ ...formData, phone: e.target.value })
//                   }
//                   className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
//                   placeholder='10 digit phone number'
//                 />
//                 {errors.phone && (
//                   <p className='text-red-500 text-sm mt-1'>{errors.phone}</p>
//                 )}
//               </div>

//               <div>
//                 <label className='block text-sm font-semibold text-gray-700 mb-2'>
//                   Address
//                 </label>
//                 <textarea
//                   value={formData.address}
//                   onChange={(e) =>
//                     setFormData({ ...formData, address: e.target.value })
//                   }
//                   className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
//                   placeholder='Enter your complete address'
//                   rows={3}
//                 />
//                 {errors.address && (
//                   <p className='text-red-500 text-sm mt-1'>{errors.address}</p>
//                 )}
//               </div>

//               <button
//                 type='submit'
//                 disabled={loading}
//                 className='w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors disabled:bg-gray-400'
//               >
//                 {loading ? "Submitting..." : "Submit Order"}
//               </button>
//             </form>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// "use client";

// import { useState, useEffect } from "react";
// import { useSearchParams } from "next/navigation";
// import NavbarF from "@/components/NavbarF";
// import products from "@/data/products.json";
// export default function OrderPage() {
//   const searchParams = useSearchParams();
//   const productUrl = searchParams.get("url") || "";
//   const productTitle = searchParams.get("title") || "";

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     address: "",
//     honey: "", // 🐝 honeypot
//   });

//   const [errors, setErrors] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     address: "",
//   });

//   const [loading, setLoading] = useState(false);

//   const [lastOrder, setLastOrder] = useState<{
//     productTitle: string;
//     date: string;
//   } | null>(null);

//   // ✅ Load last order if exists
//   useEffect(() => {
//     const stored = localStorage.getItem("last_order");
//     if (stored) {
//       setLastOrder(JSON.parse(stored));
//     }
//   }, []);

//   const validate = () => {
//     const newErrors = { name: "", email: "", phone: "", address: "" };
//     let isValid = true;

//     if (!formData.name.trim() || formData.name.length < 2) {
//       newErrors.name = "Name must be at least 2 characters";
//       isValid = false;
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(formData.email)) {
//       newErrors.email = "Invalid email address";
//       isValid = false;
//     }

//     const phoneRegex = /^[0-9]{10}$/;
//     if (!phoneRegex.test(formData.phone)) {
//       newErrors.phone = "Phone must be 10 digits";
//       isValid = false;
//     }

//     if (!formData.address.trim() || formData.address.length < 10) {
//       newErrors.address = "Address must be at least 10 characters";
//       isValid = false;
//     }

//     setErrors(newErrors);
//     return isValid;
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     // 🐝 Honeypot bot detector
//     if (formData.honey.trim() !== "") {
//       alert("Bot detected.");
//       return;
//     }

//     if (!validate()) return;

//     setLoading(true);

//     try {
//       const res = await fetch("/api/order", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           productTitle,
//           productUrl,
//           name: formData.name,
//           email: formData.email,
//           phone: formData.phone,
//           address: formData.address,
//           honey: formData.honey,
//         }),
//       });

//       if (!res.ok) throw new Error("Failed");

//       const orderData = {
//         productTitle,
//         date: new Date().toLocaleString(),
//       };

//       localStorage.setItem("last_order", JSON.stringify(orderData));
//       setLastOrder(orderData);

//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         address: "",
//         honey: "",
//       });
//     } catch {
//       alert("Failed to submit order. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className='bg-zinc-50 min-h-screen'>
//       <NavbarF />

//       <div className='max-w-2xl mx-auto px-4 py-8'>
//         <div className='bg-white rounded-lg p-6 shadow-md'>
//           <h1 className='text-3xl font-bold text-gray-900 mb-2'>Place Order</h1>
//           <p className='text-gray-600 mb-6'>
//             Fill in your details to complete the order
//           </p>

//           {productTitle && (
//             <div className='bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6'>
//               <p className='text-sm text-gray-600'>Product</p>
//               <p className='font-semibold text-gray-900'>{productTitle}</p>
//             </div>
//           )}

//           {/* 🔵 ORDER FORM (ALWAYS VISIBLE) */}
//           <form onSubmit={handleSubmit} className='space-y-4'>
//             {/* 🐝 Honeypot */}
//             <input
//               type='text'
//               value={formData.honey}
//               onChange={(e) =>
//                 setFormData({ ...formData, honey: e.target.value })
//               }
//               style={{ display: "none" }}
//               tabIndex={-1}
//               autoComplete='off'
//             />

//             <div>
//               <label className='block text-sm font-semibold text-gray-700 mb-2'>
//                 Name
//               </label>
//               <input
//                 type='text'
//                 value={formData.name}
//                 onChange={(e) =>
//                   setFormData({ ...formData, name: e.target.value })
//                 }
//                 className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
//                 placeholder='Enter your full name'
//               />
//               {errors.name && (
//                 <p className='text-red-500 text-sm mt-1'>{errors.name}</p>
//               )}
//             </div>

//             <div>
//               <label className='block text-sm font-semibold text-gray-700 mb-2'>
//                 Email
//               </label>
//               <input
//                 type='email'
//                 value={formData.email}
//                 onChange={(e) =>
//                   setFormData({ ...formData, email: e.target.value })
//                 }
//                 className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
//                 placeholder='your@email.com'
//               />
//               {errors.email && (
//                 <p className='text-red-500 text-sm mt-1'>{errors.email}</p>
//               )}
//             </div>

//             <div>
//               <label className='block text-sm font-semibold text-gray-700 mb-2'>
//                 Phone
//               </label>
//               <input
//                 type='tel'
//                 value={formData.phone}
//                 onChange={(e) =>
//                   setFormData({ ...formData, phone: e.target.value })
//                 }
//                 className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
//                 placeholder='10 digit phone number'
//               />
//               {errors.phone && (
//                 <p className='text-red-500 text-sm mt-1'>{errors.phone}</p>
//               )}
//             </div>

//             <div>
//               <label className='block text-sm font-semibold text-gray-700 mb-2'>
//                 Address
//               </label>
//               <textarea
//                 value={formData.address}
//                 onChange={(e) =>
//                   setFormData({ ...formData, address: e.target.value })
//                 }
//                 className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
//                 rows={3}
//                 placeholder='Enter your complete address'
//               />
//               {errors.address && (
//                 <p className='text-red-500 text-sm mt-1'>{errors.address}</p>
//               )}
//             </div>

//             <button
//               type='submit'
//               disabled={loading}
//               className='w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors disabled:bg-gray-400'
//             >
//               {loading ? "Submitting..." : "Submit Order"}
//             </button>
//           </form>

//           {/* 🟢 LAST ORDER */}
//           {lastOrder && (
//             <div className='mt-6 bg-green-50 border border-green-200 rounded-lg p-4'>
//               <p className='text-sm text-gray-600'>Last Ordered</p>
//               <p className='font-semibold text-green-700'>
//                 {lastOrder.productTitle}
//               </p>
//               <p className='text-xs text-gray-500 mt-1'>{lastOrder.date}</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// "use client";

// import { useState, useEffect, useMemo } from "react";
// import { useSearchParams } from "next/navigation";
// import NavbarF from "@/components/NavbarF";
// import products from "@/data/products.json";

// export default function OrderPage() {
//   const searchParams = useSearchParams();
//   const productUrl = searchParams.get("url") || "";
//   const productTitle = searchParams.get("title") || "";
//   const productSlug = searchParams.get("slug") || "";

//   const product = useMemo(() => {
//     return products.find(
//       (p: any) =>
//         p.slug === productSlug ||
//         p.name.toLowerCase() === productTitle.toLowerCase()
//     );
//   }, [productSlug, productTitle]);

//   const mainImage =
//     product?.images?.find((img: any) => !img.duplicate) || product?.images?.[0];

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     address: "",
//     honey: "",
//   });

//   const [errors, setErrors] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     address: "",
//   });

//   const [loading, setLoading] = useState(false);

//   const [lastOrder, setLastOrder] = useState<{
//     productTitle: string;
//     date: string;
//   } | null>(null);

//   useEffect(() => {
//     const stored = localStorage.getItem("last_order");
//     if (stored) setLastOrder(JSON.parse(stored));
//   }, []);

//   const validate = () => {
//     const newErrors = { name: "", email: "", phone: "", address: "" };
//     let isValid = true;

//     if (!formData.name.trim() || formData.name.length < 2) {
//       newErrors.name = "Name must be at least 2 characters";
//       isValid = false;
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(formData.email)) {
//       newErrors.email = "Invalid email address";
//       isValid = false;
//     }

//     if (!/^[0-9]{10}$/.test(formData.phone)) {
//       newErrors.phone = "Phone must be 10 digits";
//       isValid = false;
//     }

//     if (!formData.address.trim() || formData.address.length < 10) {
//       newErrors.address = "Address must be at least 10 characters";
//       isValid = false;
//     }

//     setErrors(newErrors);
//     return isValid;
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (formData.honey.trim() !== "") return;

//     if (!validate()) return;

//     setLoading(true);

//     try {
//       const res = await fetch("/api/order", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           productTitle: product?.name || productTitle,
//           productUrl,
//           productSlug: product?.slug,
//           name: formData.name,
//           email: formData.email,
//           phone: formData.phone,
//           address: formData.address,
//           honey: formData.honey,
//         }),
//       });

//       if (!res.ok) throw new Error();

//       const orderData = {
//         productTitle: product?.name || productTitle,
//         date: new Date().toLocaleString(),
//       };

//       localStorage.setItem("last_order", JSON.stringify(orderData));
//       setLastOrder(orderData);

//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         address: "",
//         honey: "",
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className='flex py-10 bg-zinc-50 flex-col w-full gap-10'>
//       <div className=''>
//         <div className='xl:max-w-7xl max-w-[90vw] mx-auto flex gap-8 items-start'>
//           {/* LEFT — FORM */}
//           <div className='w-full lg:w-1/2 lg:h-[503.44px] bg-white rounded-lg p-6 shadow-md'>
//             <h1 className='text-3xl font-bold text-gray-900 mb-2'>
//               Place Order
//             </h1>
//             <p className='text-gray-600 mb-6'>
//               Fill in your details to complete the order
//             </p>
//             <form onSubmit={handleSubmit} className='space-y-4'>
//               {/* Hidden honeypot */}
//               <input
//                 type='text'
//                 value={formData.honey}
//                 onChange={(e) =>
//                   setFormData({ ...formData, honey: e.target.value })
//                 }
//                 style={{ display: "none" }}
//                 tabIndex={-1}
//                 autoComplete='off'
//               />

//               {/* Hidden product info */}
//               <input type='hidden' value={product?.name || productTitle} />
//               <input type='hidden' value={product?.slug || ""} />

//               <div>
//                 <input
//                   type='text'
//                   value={formData.name}
//                   onChange={(e) =>
//                     setFormData({ ...formData, name: e.target.value })
//                   }
//                   placeholder='Full Name'
//                   className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500'
//                 />
//                 {errors.name && (
//                   <p className='text-red-500 text-sm'>{errors.name}</p>
//                 )}
//               </div>

//               <div>
//                 <input
//                   type='email'
//                   value={formData.email}
//                   onChange={(e) =>
//                     setFormData({ ...formData, email: e.target.value })
//                   }
//                   placeholder='Email Address'
//                   className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500'
//                 />
//                 {errors.email && (
//                   <p className='text-red-500 text-sm'>{errors.email}</p>
//                 )}
//               </div>

//               <div>
//                 <input
//                   type='tel'
//                   value={formData.phone}
//                   onChange={(e) =>
//                     setFormData({ ...formData, phone: e.target.value })
//                   }
//                   placeholder='Phone Number'
//                   className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500'
//                 />
//                 {errors.phone && (
//                   <p className='text-red-500 text-sm'>{errors.phone}</p>
//                 )}
//               </div>

//               <div>
//                 <textarea
//                   rows={2}
//                   value={formData.address}
//                   onChange={(e) =>
//                     setFormData({ ...formData, address: e.target.value })
//                   }
//                   placeholder='Complete Address'
//                   className='w-full resize-none px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500'
//                 />
//                 {errors.address && (
//                   <p className='text-red-500 text-sm'>{errors.address}</p>
//                 )}
//               </div>

//               <button
//                 disabled={loading}
//                 className='w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg'
//               >
//                 {loading ? "Submitting..." : "Submit Order"}
//               </button>
//             </form>
//           </div>

//           {/* RIGHT — PRODUCT CARD */}
//           {product && (
//             <div className='w-full lg:w-1/2 bg-white rounded-xl shadow-lg p-6'>
//               <img
//                 src={mainImage?.url}
//                 alt={mainImage?.alt}
//                 className='w-full h-80 object-cover rounded-lg mb-6'
//               />

//               <h2 className='text-2xl font-bold text-gray-900'>
//                 {product.name}
//               </h2>

//               <p className='text-gray-500 mt-1'>{product.brand}</p>

//               <div className='mt-4 flex items-center gap-3'>
//                 <span className='text-3xl font-bold text-gray-900'>
//                   ₹{product.price.toLocaleString()}
//                 </span>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//       {lastOrder && (
//         <div className='xl:max-w-7xl max-w-[90vw] w-full mx-auto bg-green-50 border border-green-200 rounded-lg py-4 px-6'>
//           <p className='text-sm text-gray-600'>Last Ordered</p>
//           <p className='font-semibold text-green-700'>
//             {lastOrder.productTitle}
//           </p>
//           <p className='text-xs text-gray-500'>{lastOrder.date}</p>
//         </div>
//       )}
//     </div>
//   );
// }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// "use client";

// import { useState, useEffect, useMemo } from "react";
// import { useSearchParams } from "next/navigation";
// import NavbarF from "@/components/NavbarF";
// import products from "@/data/products.json";

// export default function OrderPage() {
//   const searchParams = useSearchParams();
//   const productUrl = searchParams.get("url") || "";
//   const productTitle = searchParams.get("title") || "";
//   const productSlug = searchParams.get("slug") || "";

//   const product = useMemo(() => {
//     return products.find(
//       (p: any) =>
//         p.slug === productSlug ||
//         p.name.toLowerCase() === productTitle.toLowerCase()
//     );
//   }, [productSlug, productTitle]);

//   const mainImage =
//     product?.images?.find((img: any) => !img.duplicate) || product?.images?.[0];

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     address: "",
//     honey: "",
//   });

//   const [errors, setErrors] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     address: "",
//   });

//   const [topPhoneError, setTopPhoneError] = useState("");

//   const [loading, setLoading] = useState(false);

//   const [lastOrder, setLastOrder] = useState<{
//     productTitle: string;
//     date: string;
//   } | null>(null);

//   useEffect(() => {
//     const stored = localStorage.getItem("last_order");
//     if (stored) setLastOrder(JSON.parse(stored));
//   }, []);

//   const validate = () => {
//     const newErrors = { name: "", email: "", phone: "", address: "" };
//     let isValid = true;

//     if (!formData.name.trim() || formData.name.length < 2) {
//       newErrors.name = "Name must be at least 2 characters";
//       isValid = false;
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(formData.email)) {
//       newErrors.email = "Invalid email address";
//       isValid = false;
//     }

//     const phone = formData.phone.trim();

//     if (phone.startsWith("+91")) {
//       if (!/^\+91\d{10}$/.test(phone)) {
//         newErrors.phone = "Invalid phone number";
//         isValid = false;
//       }
//     } else {
//       if (!/^\d{10}$/.test(phone)) {
//         newErrors.phone = "Invalid phone number";
//         isValid = false;
//       }
//     }

//     if (!formData.address.trim() || formData.address.length < 10) {
//       newErrors.address = "Address must be at least 10 characters";
//       isValid = false;
//     }

//     setErrors(newErrors);
//     return isValid;
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (formData.honey.trim() !== "") return;
//     if (!validate()) return;

//     setLoading(true);

//     try {
//       const res = await fetch("/api/order", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           productTitle: product?.name || productTitle,
//           productUrl,
//           productSlug: product?.slug,
//           name: formData.name,
//           email: formData.email,
//           phone: formData.phone,
//           address: formData.address,
//           honey: formData.honey,
//         }),
//       });

//       if (!res.ok) throw new Error();

//       const orderData = {
//         productTitle: product?.name || productTitle,
//         date: new Date().toLocaleString(),
//       };

//       localStorage.setItem("last_order", JSON.stringify(orderData));
//       setLastOrder(orderData);

//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         address: "",
//         honey: "",
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className='flex py-10 bg-zinc-50 flex-col w-full gap-10'>
//       <div>
//         <div className='xl:max-w-7xl max-w-[90vw] mx-auto flex gap-8 items-start'>
//           {/* LEFT — FORM */}
//           <div className='w-full lg:w-1/2 lg:h-[503.44px] bg-white rounded-lg p-6 shadow-md relative'>
//             <h1 className='text-3xl font-bold text-gray-900 mb-2'>
//               Place Order
//             </h1>
//             <p className='text-gray-600 mb-6'>
//               Fill in your details to complete the order
//             </p>

//             <form onSubmit={handleSubmit} className='space-y-4 relative'>
//               {topPhoneError && (
//                 <p className='absolute -top-6 left-0 text-red-600 text-sm'>
//                   {topPhoneError}
//                 </p>
//               )}

//               <input
//                 type='text'
//                 value={formData.honey}
//                 onChange={(e) =>
//                   setFormData({ ...formData, honey: e.target.value })
//                 }
//                 style={{ display: "none" }}
//                 tabIndex={-1}
//                 autoComplete='off'
//               />

//               <input type='hidden' value={product?.name || productTitle} />
//               <input type='hidden' value={product?.slug || ""} />

//               <div>
//                 <input
//                   required
//                   type='text'
//                   value={formData.name}
//                   onChange={(e) =>
//                     setFormData({ ...formData, name: e.target.value })
//                   }
//                   placeholder='Full Name'
//                   className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500'
//                 />
//                 {errors.name && (
//                   <p className='text-red-500 text-sm'>{errors.name}</p>
//                 )}
//               </div>

//               <div>
//                 <input
//                   required
//                   type='email'
//                   value={formData.email}
//                   onChange={(e) =>
//                     setFormData({ ...formData, email: e.target.value })
//                   }
//                   placeholder='Email Address'
//                   className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500'
//                 />
//                 {errors.email && (
//                   <p className='text-red-500 text-sm'>{errors.email}</p>
//                 )}
//               </div>

//               <div>
//                 <input
//                   required
//                   type='tel'
//                   value={formData.phone}
//                   onChange={(e) => {
//                     let value = e.target.value.replace(/[^0-9+]/g, "");

//                     if (value.includes("+") && !value.startsWith("+")) return;

//                     setFormData({ ...formData, phone: value });
//                     setTopPhoneError("");
//                   }}
//                   onBlur={() => {
//                     const phone = formData.phone.trim();

//                     if (phone.startsWith("+91")) {
//                       if (!/^\+91\d{10}$/.test(phone)) {
//                         setTopPhoneError(
//                           "Phone number with +91 must contain exactly 10 digits"
//                         );
//                         return;
//                       }
//                     } else {
//                       if (!/^\d{10}$/.test(phone)) {
//                         setTopPhoneError(
//                           "Please enter a valid 10 digit phone number"
//                         );
//                         return;
//                       }
//                     }

//                     setTopPhoneError("");
//                   }}
//                   placeholder='Phone Number'
//                   className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500'
//                 />
//                 {errors.phone && (
//                   <p className='text-red-500 text-sm'>{errors.phone}</p>
//                 )}
//               </div>

//               <div>
//                 <textarea
//                   required
//                   rows={2}
//                   value={formData.address}
//                   onChange={(e) =>
//                     setFormData({ ...formData, address: e.target.value })
//                   }
//                   placeholder='Complete Address'
//                   className='w-full resize-none px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500'
//                 />
//                 {errors.address && (
//                   <p className='text-red-500 text-sm'>{errors.address}</p>
//                 )}
//               </div>

//               <button
//                 disabled={loading}
//                 className='w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg'
//               >
//                 {loading ? "Submitting..." : "Submit Order"}
//               </button>
//             </form>
//           </div>

//           {/* RIGHT — PRODUCT CARD */}
//           {product && (
//             <div className='w-full lg:w-1/2 bg-white rounded-xl shadow-md p-6'>
//               <img
//                 src={mainImage?.url}
//                 alt={mainImage?.alt}
//                 className='w-full h-80 object-cover rounded-lg mb-6'
//               />

//               <h2 className='text-2xl font-bold text-gray-900'>
//                 {product.name}
//               </h2>

//               <p className='text-gray-500 mt-1'>{product.brand}</p>

//               <div className='mt-4 flex items-center gap-3'>
//                 <span className='text-3xl font-bold text-gray-900'>
//                   ₹{product.price.toLocaleString()}
//                 </span>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       {lastOrder && (
//         <div className='xl:max-w-7xl max-w-[90vw] w-full mx-auto bg-green-50 border border-green-200 rounded-lg py-4 px-6'>
//           <p className='text-sm text-gray-600'>Last Ordered</p>
//           <p className='font-semibold text-green-700'>
//             {lastOrder.productTitle}
//           </p>
//           <p className='text-xs text-gray-500'>{lastOrder.date}</p>
//         </div>
//       )}
//     </div>
//   );
// }
// "use client";

// import { useState, useEffect, useMemo } from "react";
// import { useSearchParams } from "next/navigation";
// import NavbarF from "@/components/NavbarF";
// import products from "@/data/products.json";

// export default function OrderPage() {
//   const searchParams = useSearchParams();
//   const productUrl = searchParams.get("url") || "";
//   const productTitle = searchParams.get("title") || "";
//   const productSlug = searchParams.get("slug") || "";

//   const product = useMemo(() => {
//     return products.find(
//       // eslint-disable-next-line @typescript-eslint/no-explicit-any
//       (p: any) =>
//         p.slug === productSlug ||
//         p.name.toLowerCase() === productTitle.toLowerCase()
//     );
//   }, [productSlug, productTitle]);

//   const mainImage =
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     product?.images?.find((img: any) => !img.duplicate) || product?.images?.[0];

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     address: "",
//     honey: "",
//   });

//   const [errors, setErrors] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     address: "",
//   });

//   const [topPhoneError, setTopPhoneError] = useState("");

//   const [loading, setLoading] = useState(false);

//   const [lastOrder, setLastOrder] = useState<{
//     productTitle: string;
//     date: string;
//   } | null>(null);

//   useEffect(() => {
//     const stored = localStorage.getItem("last_order");
//     if (stored) setLastOrder(JSON.parse(stored));
//   }, []);

//   const validate = () => {
//     const newErrors = { name: "", email: "", phone: "", address: "" };
//     let isValid = true;

//     if (!formData.name.trim() || formData.name.length < 2) {
//       newErrors.name = "Name must be at least 2 characters";
//       isValid = false;
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(formData.email)) {
//       newErrors.email = "Invalid email address";
//       isValid = false;
//     }

//     const phone = formData.phone.trim();

//     if (phone.startsWith("+91")) {
//       if (!/^\+91\d{10}$/.test(phone)) {
//         newErrors.phone = "Invalid phone number";
//         isValid = false;
//       }
//     } else {
//       if (!/^\d{10}$/.test(phone)) {
//         newErrors.phone = "Invalid phone number";
//         isValid = false;
//       }
//     }

//     if (!formData.address.trim() || formData.address.length < 10) {
//       newErrors.address = "Address must be at least 10 characters";
//       isValid = false;
//     }

//     setErrors(newErrors);
//     return isValid;
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (formData.honey.trim() !== "") return;
//     if (!validate()) return;

//     setLoading(true);

//     try {
//       const res = await fetch("/api/order", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           productTitle: product?.name || productTitle,
//           productUrl,
//           productSlug: product?.slug,
//           name: formData.name,
//           email: formData.email,
//           phone: formData.phone,
//           address: formData.address,
//           honey: formData.honey,
//         }),
//       });

//       if (!res.ok) throw new Error();

//       const orderData = {
//         productTitle: product?.name || productTitle,
//         date: new Date().toLocaleString(),
//       };

//       localStorage.setItem("last_order", JSON.stringify(orderData));
//       setLastOrder(orderData);

//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         address: "",
//         honey: "",
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className='flex py-10 bg-zinc-50 flex-col w-full gap-10'>
//       <div>
//         <div className='xl:max-w-7xl max-w-[90vw] mx-auto flex lg:flex-row flex-col-reverse gap-4 xl:gap-8 items-start'>
//           {/* LEFT — FORM */}
//           <div className='w-full lg:w-1/2 lg:h-[503.44px] bg-white rounded-lg p-6 shadow-md relative'>
//             <h1 className='text-3xl font-bold text-gray-900 mb-2'>
//               Place Order
//             </h1>
//             <p className='text-gray-600 mb-6'>
//               Fill in your details to complete the order
//             </p>

//             <form onSubmit={handleSubmit} className='space-y-4 relative'>
//               {topPhoneError && (
//                 <p className='absolute -top-6 left-0 text-red-600 text-sm'>
//                   {topPhoneError}
//                 </p>
//               )}

//               <input
//                 type='text'
//                 value={formData.honey}
//                 onChange={(e) =>
//                   setFormData({ ...formData, honey: e.target.value })
//                 }
//                 style={{ display: "none" }}
//                 tabIndex={-1}
//                 autoComplete='off'
//               />

//               <input type='hidden' value={product?.name || productTitle} />
//               <input type='hidden' value={product?.slug || ""} />

//               <div>
//                 <input
//                   required
//                   type='text'
//                   value={formData.name}
//                   onChange={(e) =>
//                     setFormData({ ...formData, name: e.target.value })
//                   }
//                   placeholder='Full Name'
//                   className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500'
//                 />
//                 {errors.name && (
//                   <p className='text-red-500 text-sm'>{errors.name}</p>
//                 )}
//               </div>

//               <div>
//                 <input
//                   required
//                   type='email'
//                   value={formData.email}
//                   onChange={(e) =>
//                     setFormData({ ...formData, email: e.target.value })
//                   }
//                   placeholder='Email Address'
//                   className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500'
//                 />
//                 {errors.email && (
//                   <p className='text-red-500 text-sm'>{errors.email}</p>
//                 )}
//               </div>

//               <div>
//                 <input
//                   required
//                   type='tel'
//                   value={formData.phone}
//                   onChange={(e) => {
//                     const raw = e.target.value;

//                     // remove everything except numbers and +
//                     const cleaned = raw.replace(/[^0-9+]/g, "");

//                     // block + anywhere except first char
//                     if (cleaned.includes("+") && !cleaned.startsWith("+")) {
//                       return;
//                     }

//                     // if value didn't actually change, DO NOTHING
//                     if (cleaned === formData.phone) {
//                       return;
//                     }

//                     setFormData({ ...formData, phone: cleaned });

//                     // clear error ONLY when input is progressing validly
//                     if (
//                       /^\d{0,10}$/.test(cleaned) || // normal digits path
//                       /^\+91\d{0,10}$/.test(cleaned) // +91 path
//                     ) {
//                       setTopPhoneError("");
//                     }
//                   }}
//                   onBlur={() => {
//                     const phone = formData.phone.trim();

//                     if (phone.startsWith("+91")) {
//                       if (!/^\+91\d{10}$/.test(phone)) {
//                         setTopPhoneError(
//                           "Phone number with +91 must contain exactly 10 digits"
//                         );
//                         return;
//                       }
//                     } else {
//                       if (!/^\d{10}$/.test(phone)) {
//                         setTopPhoneError(
//                           "Please enter a valid 10 digit phone number"
//                         );
//                         return;
//                       }
//                     }

//                     setTopPhoneError("");
//                   }}
//                   placeholder='Phone Number'
//                   className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500'
//                 />
//                 {errors.phone && (
//                   <p className='text-red-500 text-sm'>{errors.phone}</p>
//                 )}
//               </div>

//               <div>
//                 <textarea
//                   required
//                   rows={2}
//                   value={formData.address}
//                   onChange={(e) =>
//                     setFormData({ ...formData, address: e.target.value })
//                   }
//                   placeholder='Complete Address'
//                   className='w-full resize-none px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500'
//                 />
//                 {errors.address && (
//                   <p className='text-red-500 text-sm'>{errors.address}</p>
//                 )}
//               </div>

//               <button
//                 disabled={loading}
//                 className='w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg'
//               >
//                 {loading ? "Submitting..." : "Submit Order"}
//               </button>
//             </form>
//           </div>

//           {/* RIGHT — PRODUCT CARD */}
//           {product && (
//             <div className='w-full lg:w-1/2 bg-white rounded-xl shadow-md p-6'>
//               <img
//                 src={mainImage?.url}
//                 alt={mainImage?.alt}
//                 className='w-full h-80 object-cover rounded-lg mb-6'
//               />

//               <h2 className='text-2xl font-bold text-gray-900'>
//                 {product.name}
//               </h2>

//               <p className='text-gray-500 mt-1'>{product.brand}</p>

//               <div className='mt-4 flex items-center gap-3'>
//                 <span className='text-3xl font-bold text-gray-900'>
//                   ₹{product.price.toLocaleString()}
//                 </span>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       {lastOrder && (
//         <div className='xl:max-w-7xl max-w-[90vw] w-full mx-auto bg-green-50 border border-green-200 rounded-lg py-4 px-6'>
//           <p className='text-sm text-gray-600'>Last Ordered</p>
//           <p className='font-semibold text-green-700'>
//             {lastOrder.productTitle}
//           </p>
//           <p className='text-xs text-gray-500'>{lastOrder.date}</p>
//         </div>
//       )}
//     </div>
//   );
// }



"use client";

import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, Package, Mail, Phone, MapPin, User, ShieldCheck } from "lucide-react";
import Image from "next/image";
import products from "@/data/products.json";

export default function OrderPage() {
  const searchParams = useSearchParams();
  const productUrl = searchParams.get("url") || "";
  const productTitle = searchParams.get("title") || "";
  const productSlug = searchParams.get("slug") || "";

  const product = useMemo(() => {
    return products.find(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (p: any) =>
        p.slug === productSlug ||
        p.name.toLowerCase() === productTitle.toLowerCase()
    );
  }, [productSlug, productTitle]);

  const mainImage =
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    product?.images?.find((img: any) => !img.duplicate) || product?.images?.[0];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    honey: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [topPhoneError, setTopPhoneError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const [lastOrder, setLastOrder] = useState<{
    productTitle: string;
    date: string;
  } | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("last_order");
    if (stored) setLastOrder(JSON.parse(stored));
  }, []);

  const validate = () => {
    const newErrors = { name: "", email: "", phone: "", address: "" };
    let isValid = true;

    if (!formData.name.trim() || formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email address";
      isValid = false;
    }

    const phone = formData.phone.trim();

    if (phone.startsWith("+91")) {
      if (!/^\+91\d{10}$/.test(phone)) {
        newErrors.phone = "Invalid phone number";
        isValid = false;
      }
    } else {
      if (!/^\d{10}$/.test(phone)) {
        newErrors.phone = "Invalid phone number";
        isValid = false;
      }
    }

    if (!formData.address.trim() || formData.address.length < 10) {
      newErrors.address = "Address must be at least 10 characters";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.honey.trim() !== "") return;
    if (!validate()) return;

    setLoading(true);

    try {
      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productTitle: product?.name || productTitle,
          productUrl,
          productSlug: product?.slug,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          honey: formData.honey,
        }),
      });

      if (!res.ok) throw new Error();

      const orderData = {
        productTitle: product?.name || productTitle,
        date: new Date().toLocaleString(),
      };

      localStorage.setItem("last_order", JSON.stringify(orderData));
      setLastOrder(orderData);
      setShowSuccess(true);

      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        honey: "",
      });

      setTimeout(() => setShowSuccess(false), 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50 py-8 sm:py-12 px-4'>
      <div className='xl:max-w-7xl max-w-full mx-auto'>

        {/* Success Alert */}
        {showSuccess && (
          <div className='mb-6 bg-green-500 text-white px-6 py-4 rounded-xl shadow-lg flex items-center gap-3 animate-slide-in'>
            <CheckCircle2 className='h-6 w-6 flex-shrink-0' />
            <div>
              <p className='font-semibold'>Order Placed Successfully!</p>
              <p className='text-sm text-green-100'>We&apos;ll contact you shortly to confirm your order</p>
            </div>
          </div>
        )}

        {/* Page Header */}
        <div className='text-center mb-8 sm:mb-12'>
          <div className='inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4'>
            <Package className='h-5 w-5' />
            <span className='text-sm font-semibold'>Complete Your Order</span>
          </div>
          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3'>
            One Step Away!
          </h1>
          <p className='text-gray-600 text-base sm:text-lg max-w-2xl mx-auto'>
            Fill in your details below and we&apos;ll get your laptop delivered to your doorstep
          </p>
        </div>

        {/* Main Content */}
        <div className='flex lg:flex-row flex-col gap-6 lg:gap-8 items-start'>

          {/* LEFT — FORM */}
          <div className='w-full lg:w-3/5 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden'>
            <div className='bg-gradient-to-r from-blue-600 to-blue-700 px-6 sm:px-8 py-6'>
              <h2 className='text-2xl sm:text-3xl font-bold text-white flex items-center gap-3'>
                <User className='h-7 w-7' />
                Your Details
              </h2>
              <p className='text-blue-100 mt-2'>Please provide accurate information</p>
            </div>

            <form onSubmit={handleSubmit} className='p-6 sm:p-8 space-y-6'>

              {/* Honeypot */}
              <input
                type='text'
                value={formData.honey}
                onChange={(e) =>
                  setFormData({ ...formData, honey: e.target.value })
                }
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete='off'
              />

              <input type='hidden' value={product?.name || productTitle} />
              <input type='hidden' value={product?.slug || ""} />

              {/* Name Field */}
              <div className='space-y-2'>
                <label className='flex items-center gap-2 text-sm font-semibold text-gray-700'>
                  <User className='h-4 w-4 text-blue-600' />
                  Full Name
                </label>
                <input
                  required
                  type='text'
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder='Enter your full name'
                  className={`w-full px-4 py-3 border-2 rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.name ? 'border-red-300 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                    }`}
                />
                {errors.name && (
                  <p className='text-red-600 text-sm flex items-center gap-1 mt-1'>
                    <span className='inline-block w-1 h-1 bg-red-600 rounded-full'></span>
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div className='space-y-2'>
                <label className='flex items-center gap-2 text-sm font-semibold text-gray-700'>
                  <Mail className='h-4 w-4 text-blue-600' />
                  Email Address
                </label>
                <input
                  required
                  type='email'
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder='your.email@example.com'
                  className={`w-full px-4 py-3 border-2 rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.email ? 'border-red-300 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                    }`}
                />
                {errors.email && (
                  <p className='text-red-600 text-sm flex items-center gap-1 mt-1'>
                    <span className='inline-block w-1 h-1 bg-red-600 rounded-full'></span>
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Phone Field */}
              <div className='space-y-2'>
                <label className='flex items-center gap-2 text-sm font-semibold text-gray-700'>
                  <Phone className='h-4 w-4 text-blue-600' />
                  Phone Number
                </label>
                {topPhoneError && (
                  <p className='text-red-600 text-sm bg-red-50 px-3 py-2 rounded-lg border border-red-200'>
                    {topPhoneError}
                  </p>
                )}
                <input
                  required
                  type='tel'
                  value={formData.phone}
                  onChange={(e) => {
                    const raw = e.target.value;
                    const cleaned = raw.replace(/[^0-9+]/g, "");

                    if (cleaned.includes("+") && !cleaned.startsWith("+")) {
                      return;
                    }

                    if (cleaned === formData.phone) {
                      return;
                    }

                    setFormData({ ...formData, phone: cleaned });

                    if (
                      /^\d{0,10}$/.test(cleaned) ||
                      /^\+91\d{0,10}$/.test(cleaned)
                    ) {
                      setTopPhoneError("");
                    }
                  }}
                  onBlur={() => {
                    const phone = formData.phone.trim();

                    if (phone.startsWith("+91")) {
                      if (!/^\+91\d{10}$/.test(phone)) {
                        setTopPhoneError(
                          "Phone number with +91 must contain exactly 10 digits"
                        );
                        return;
                      }
                    } else {
                      if (!/^\d{10}$/.test(phone)) {
                        setTopPhoneError(
                          "Please enter a valid 10 digit phone number"
                        );
                        return;
                      }
                    }

                    setTopPhoneError("");
                  }}
                  placeholder='+91 or 10-digit number'
                  className={`w-full px-4 py-3 border-2 rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.phone || topPhoneError ? 'border-red-300 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                    }`}
                />
                {errors.phone && (
                  <p className='text-red-600 text-sm flex items-center gap-1 mt-1'>
                    <span className='inline-block w-1 h-1 bg-red-600 rounded-full'></span>
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Address Field */}
              <div className='space-y-2'>
                <label className='flex items-center gap-2 text-sm font-semibold text-gray-700'>
                  <MapPin className='h-4 w-4 text-blue-600' />
                  Delivery Address
                </label>
                <textarea
                  required
                  rows={3}
                  value={formData.address}
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                  placeholder='Enter your complete delivery address with pincode'
                  className={`w-full resize-none px-4 py-3 border-2 rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.address ? 'border-red-300 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                    }`}
                />
                {errors.address && (
                  <p className='text-red-600 text-sm flex items-center gap-1 mt-1'>
                    <span className='inline-block w-1 h-1 bg-red-600 rounded-full'></span>
                    {errors.address}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                disabled={loading}
                className='w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2'
              >
                {loading ? (
                  <>
                    <div className='w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin'></div>
                    Processing...
                  </>
                ) : (
                  <>
                    <CheckCircle2 className='h-5 w-5' />
                    Confirm Order
                  </>
                )}
              </button>

              {/* Security Badge */}
              <div className='flex items-center justify-center gap-2 text-sm text-gray-500 pt-2'>
                <ShieldCheck className='h-4 w-4 text-green-600' />
                <span>Your information is secure and encrypted</span>
              </div>
            </form>
          </div>

          {/* RIGHT — PRODUCT CARD */}
          {product && (
            <div className='w-full lg:w-2/5 lg:sticky lg:top-8 space-y-6'>
              <div className='bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden'>
                <div className='relative aspect-video sm:aspect-[4/3] overflow-hidden bg-gray-100'>
                  <Image
                    src={mainImage?.url || '/logo.png'}
                    alt={mainImage?.alt || 'Product Image'}
                    fill
                    className='object-cover'
                  />
                  {product.discount && (
                    <div className='absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg'>
                      -{product.discount}% OFF
                    </div>
                  )}
                </div>

                <div className='p-6'>
                  <div className='flex items-start justify-between gap-3 mb-4'>
                    <div>
                      <p className='text-sm text-blue-600 font-semibold mb-1'>{product.brand}</p>
                      <h2 className='text-xl sm:text-2xl font-bold text-gray-900 leading-tight'>
                        {product.name}
                      </h2>
                    </div>
                  </div>

                  <div className='flex items-center gap-3 mb-4'>
                    <span className='text-3xl sm:text-4xl font-bold text-gray-900'>
                      ₹{product.price.toLocaleString()}
                    </span>
                    {product.originalPrice && product.originalPrice !== product.price && (
                      <span className='text-lg text-gray-400 line-through'>
                        ₹{product.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>

                  <div className='space-y-2 border-t border-gray-100 pt-4'>
                    <div className='flex items-center gap-2 text-sm text-gray-600'>
                      <CheckCircle2 className='h-4 w-4 text-green-500' />
                      <span>Certified Refurbished</span>
                    </div>
                    <div className='flex items-center gap-2 text-sm text-gray-600'>
                      <CheckCircle2 className='h-4 w-4 text-green-500' />
                      <span>Free Shipping</span>
                    </div>
                    <div className='flex items-center gap-2 text-sm text-gray-600'>
                      <CheckCircle2 className='h-4 w-4 text-green-500' />
                      <span>Warranty Included</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Last Order Info */}
              {lastOrder && (
                <div className='bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-4 shadow-md'>
                  <p className='text-sm font-semibold text-green-700 mb-1 flex items-center gap-2'>
                    <CheckCircle2 className='h-4 w-4' />
                    Last Order Placed
                  </p>
                  <p className='font-semibold text-gray-900 text-sm mb-1'>
                    {lastOrder.productTitle}
                  </p>
                  <p className='text-xs text-gray-600'>{lastOrder.date}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <style jsx global>{`
        @keyframes slide-in {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}