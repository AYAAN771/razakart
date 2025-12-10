"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image"; // Added for optimization
import NavbarF from "@/components/NavbarF";

// --- Swiper Imports ---
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

// --- Swiper Styles ---
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// --- Mock Images (Replace with your actual product images) ---
const PRODUCT_IMAGES = [
  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1524678606372-571d75dc1e8a?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=1000&auto=format&fit=crop",
];

export default function OrderPage() {
  const searchParams = useSearchParams();
  const productUrl = searchParams.get("url") || "";
  const productTitle = searchParams.get("title") || "";

  // --- Swiper State ---
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  // --- Existing Form State ---
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    honey: "", // 🐝 honeypot
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // 🚫 Prevent multiple orders
  useEffect(() => {
    const alreadyOrdered = localStorage.getItem("order_placed");
    if (alreadyOrdered) {
      setSuccess(true);
    }
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

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Phone must be 10 digits";
      isValid = false;
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

    // 🐝 Honeypot bot detector
    if (formData.honey.trim() !== "") {
      alert("Bot detected.");
      return;
    }

    if (!validate()) return;

    setLoading(true);

    try {
      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productTitle,
          productUrl,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          honey: formData.honey,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed");
      }

      setSuccess(true);
      localStorage.setItem("order_placed", "true");

      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        honey: "",
      });
    } catch (error) {
      alert("Failed to submit order. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='bg-zinc-50 min-h-screen'>
      <NavbarF />

      {/* Changed max-w-2xl to max-w-7xl to fit 2 columns */}
      <div className='max-w-7xl mx-auto px-4 py-8'>
        <div className='bg-white rounded-lg p-6 shadow-md'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            {/* --- SECTION 1: FIXED IMAGE SLIDER (Swiper) --- */}
            <div className='h-[500px] flex flex-row gap-4'>
              {/* Column A: Inactive Thumbs (Vertical) */}
              <div className='w-[20%] h-full hidden md:block'>
                <Swiper
                  onSwiper={setThumbsSwiper}
                  direction='vertical'
                  spaceBetween={10}
                  slidesPerView={4}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className='h-full w-full thumbs-swiper'
                >
                  {PRODUCT_IMAGES.map((src, index) => (
                    <SwiperSlide
                      key={index}
                      className='cursor-pointer border-2 border-transparent rounded-lg overflow-hidden !h-[110px]'
                    >
                      <img
                        src={src}
                        alt={`Thumb ${index}`}
                        className='w-full h-full object-cover hover:opacity-80 transition-opacity'
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Column B: Active Big Image */}
              <div className='w-full md:w-[80%] h-full bg-gray-100 rounded-lg overflow-hidden relative'>
                <Swiper
                  spaceBetween={10}
                  navigation={true}
                  thumbs={{
                    swiper:
                      thumbsSwiper && !thumbsSwiper.destroyed
                        ? thumbsSwiper
                        : null,
                  }}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className='h-full w-full main-swiper'
                >
                  {PRODUCT_IMAGES.map((src, index) => (
                    <SwiperSlide
                      key={index}
                      className='flex items-center justify-center bg-white'
                    >
                      <div className='relative w-full h-full'>
                        <Image
                          src={src}
                          alt={`Product ${index}`}
                          fill
                          className='object-contain p-4'
                          priority={index === 0}
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>

            {/* --- SECTION 2: EXISTING FORM LOGIC --- */}
            <div>
              <h1 className='text-3xl font-bold text-gray-900 mb-2'>
                Place Order
              </h1>
              <p className='text-gray-600 mb-6'>
                Fill in your details to complete the order
              </p>

              {productTitle && (
                <div className='bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6'>
                  <p className='text-sm text-gray-600'>Product</p>
                  <p className='font-semibold text-gray-900'>{productTitle}</p>
                </div>
              )}

              {success ? (
                <div className='bg-green-50 border border-green-200 rounded-lg p-6 text-center'>
                  <h2 className='text-2xl font-bold text-green-600 mb-2'>
                    Order Placed!
                  </h2>
                  <p className='text-gray-600'>We'll contact you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className='space-y-4'>
                  {/* 🐝 Honeypot field (INVISIBLE, NO DESIGN CHANGE) */}
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

                  <div>
                    <label className='block text-sm font-semibold text-gray-700 mb-2'>
                      Name
                    </label>
                    <input
                      type='text'
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                      placeholder='Enter your full name'
                    />
                    {errors.name && (
                      <p className='text-red-500 text-sm mt-1'>{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className='block text-sm font-semibold text-gray-700 mb-2'>
                      Email
                    </label>
                    <input
                      type='email'
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                      placeholder='your@email.com'
                    />
                    {errors.email && (
                      <p className='text-red-500 text-sm mt-1'>
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className='block text-sm font-semibold text-gray-700 mb-2'>
                      Phone
                    </label>
                    <input
                      type='tel'
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                      placeholder='10 digit phone number'
                    />
                    {errors.phone && (
                      <p className='text-red-500 text-sm mt-1'>
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className='block text-sm font-semibold text-gray-700 mb-2'>
                      Address
                    </label>
                    <textarea
                      value={formData.address}
                      onChange={(e) =>
                        setFormData({ ...formData, address: e.target.value })
                      }
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                      placeholder='Enter your complete address'
                      rows={3}
                    />
                    {errors.address && (
                      <p className='text-red-500 text-sm mt-1'>
                        {errors.address}
                      </p>
                    )}
                  </div>

                  <button
                    type='submit'
                    disabled={loading}
                    className='w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors disabled:bg-gray-400'
                  >
                    {loading ? "Submitting..." : "Submit Order"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* CSS to highlight the active thumbnail border */}
      <style jsx global>{`
        .thumbs-swiper .swiper-slide-thumb-active {
          border-color: #2563eb !important;
          opacity: 1;
        }
      `}</style>
    </div>
  );
}
