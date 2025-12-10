"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import NavbarF from "@/components/NavbarF";

export default function OrderPage() {
  const searchParams = useSearchParams();
  const productUrl = searchParams.get("url") || "";
  const productTitle = searchParams.get("title") || "";

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

      <div className='max-w-2xl mx-auto px-4 py-8'>
        <div className='bg-white rounded-lg p-6 shadow-md'>
          <h1 className='text-3xl font-bold text-gray-900 mb-2'>Place Order</h1>
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
                  <p className='text-red-500 text-sm mt-1'>{errors.email}</p>
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
                  <p className='text-red-500 text-sm mt-1'>{errors.phone}</p>
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
                  <p className='text-red-500 text-sm mt-1'>{errors.address}</p>
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
  );
}
