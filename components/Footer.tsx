"use client";

import React from "react";
import {
  ShoppingCart,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
} from "lucide-react";
import Link from "next/link";
import {
  brandLinks,
  policyLinks,
  priceLinks,
  processorLinks,
} from "@/config/footerLinks";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-gray-900 text-gray-300'>
      {/* Main Footer Content */}
      <div className='xl:max-w-7xl max-w-[90vw] mx-auto px-3 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 lg:grid-cols-5 gap-8'>
          {/* Company Info - Takes 1 column */}
          <div className='space-y-4 xl:block xl:gap-0 gap-2 flex'>
            <div className='flex items-start xl:items-center gap-2'>
              <img src='/logof.png' alt='' />
            </div>
            <div className='flex gap-4 flex-col'>
              <p className='text-sm leading-relaxed'>
                Your trusted source for quality refurbished laptops. We offer
                certified pre-owned laptops from top brands at unbeatable
                prices.
              </p>
              <div className='flex gap-4'>
                <a
                  href='https://www.facebook.com/RazaCashkart/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 transition-colors cursor-pointer'
                >
                  <Facebook className='h-4 w-4' />
                </a>
                <a
                  href='https://www.instagram.com/raza_cashkart/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-pink-600 transition-colors cursor-pointer'
                >
                  <Instagram className='h-4 w-4' />
                </a>
              </div>
            </div>
          </div>

          {/* Mobile: Shop sections in one row, Desktop: separate columns */}
          <div className='lg:contents'>
            <div className='grid grid-cols-3 gap-4 lg:contents'>
              {/* Shop by Price */}
              <div>
                <h3 className='text-white font-semibold text-[13px] lg:text-lg mb-3 lg:mb-4'>
                  Shop by Price
                </h3>
                <ul className='space-y-1.5 lg:space-y-2.5'>
                  {priceLinks.length > 0 ? (
                    priceLinks.slice(0, 4).map((item) => (
                      <li key={item.slug}>
                        <Link
                          href={`/category/price/${item.slug}`}
                          className='hover:text-blue-400 transition-colors text-xs lg:text-sm block'
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))
                  ) : (
                    <li className='text-xs text-gray-500'>
                      Prices unavailable
                    </li>
                  )}
                </ul>
              </div>

              {/* Shop by Brand */}
              <div>
                <h3 className='text-white font-semibold text-[13px] lg:text-lg mb-3 lg:mb-4'>
                  Shop by Brand
                </h3>
                <ul className='space-y-1.5 lg:space-y-2.5'>
                  {brandLinks.length > 0 ? (
                    brandLinks.slice(0, 4).map((item) => (
                      <li key={item.slug}>
                        <Link
                          href={`/category/brand/${item.slug}`}
                          className='hover:text-blue-400 transition-colors text-xs lg:text-sm block'
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))
                  ) : (
                    <li className='text-xs text-gray-500'>Brands loading…</li>
                  )}
                </ul>
              </div>

              {/* Shop by Processor */}
              <div>
                <h3 className='text-white font-semibold text-[13px] whitespace-nowrap lg:text-lg mb-3 lg:mb-4'>
                  Shop by Processor
                </h3>
                <ul className='space-y-1.5 lg:space-y-2.5'>
                  {processorLinks.length > 0 ? (
                    processorLinks.slice(0, 4).map((item) => (
                      <li key={item.slug}>
                        <Link
                          href={`/category/processor/${item.slug}`}
                          className='hover:text-blue-400 transition-colors text-xs lg:text-sm block'
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))
                  ) : (
                    <li className='text-xs text-gray-500'>
                      Processors loading…
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className='text-white font-semibold text-lg mb-4'>
              Quick Help
            </h3>
            <p className='text-sm text-gray-400 mb-4 leading-relaxed'>
              You can ask anything you want to know about our products
            </p>

            <ul className='space-y-3'>
              <li className='flex items-start gap-3'>
                <MapPin className='h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5' />
                <span className='text-sm leading-relaxed'>
                  Shop no.2A, first floor A wing, Aman Highland Park, Sanjay
                  Nagar, Malad East, Mumbai 400097
                </span>
              </li>
              <li className='flex items-start gap-3'>
                <Mail className='h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5' />
                <a
                  href='mailto:contact@razacashkart.com'
                  className='text-sm hover:text-blue-400 transition-colors'
                >
                  contact@razacashkart.com
                </a>
              </li>
              <li className='flex items-start gap-3'>
                <Phone className='h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5' />
                <div>
                  <a
                    href='tel:+919987857886'
                    className='text-sm hover:text-blue-400 transition-colors block'
                  >
                    +91 9987857886
                  </a>
                  {/* <span className='text-xs text-green-400 mt-1 inline-block'>
                    Available 24/7
                  </span> */}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='border-t border-gray-800 bg-gray-950'>
        <div className='xl:max-w-7xl max-w-[90vw] mx-auto px-4 sm:px-6 lg:px-8 py-6'>
          {/* Disclaimer */}
          {/* <div className='mb-4 pb-4 border-b border-gray-800'>
            <p className='text-gray-400 text-xs sm:text-sm leading-relaxed text-center sm:text-left'>
              All product names, logos, and brands are the property of their
              respective owners. All company, product, and service names used in
              this website are for identification purposes only. Use of these
              names, logos, and brands does not imply endorsement.
            </p>
          </div> */}

          {/* Bottom Row */}
          <div className='flex flex-col sm:flex-row items-center justify-between gap-4'>
            <p className='text-gray-400 text-xs sm:text-sm text-center sm:text-left'>
              © {currentYear} Raza Computers. All rights reserved.
            </p>

            <div className='flex flex-wrap items-center justify-center gap-4 lg:gap-6 text-xs sm:text-sm'>
              {policyLinks.length > 0 &&
                policyLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className='text-gray-400 hover:text-blue-400 transition-colors'
                  >
                    {item.label}
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
