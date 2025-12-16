// "use client";

// import React from "react";
// import { ShoppingCart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
// import Link from "next/link";

// export default function Footer() {
//     const currentYear = new Date().getFullYear();

//     return (
//         <footer className="bg-gray-900 text-gray-300">
//             {/* Main Footer Content */}
//             <div className="xl:max-w-7xl max-w-[90vw] mx-auto px-4 sm:px-6 lg:px-8 py-12">
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

//                     {/* Company Info */}
//                     <div className="space-y-4">
//                         <div className="flex items-center gap-2">
//                             <div className="relative">
//                                 <ShoppingCart className="h-8 w-8 text-blue-500" />
//                                 <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full"></div>
//                             </div>
//                             <div>
//                                 <h1 className="text-xl font-bold text-white">Raza Cash</h1>
//                                 <p className="text-xs text-blue-400">Kart</p>
//                             </div>
//                         </div>
//                         <p className="text-sm leading-relaxed">
//                             Your trusted source for quality refurbished laptops. We offer certified pre-owned laptops from top brands at unbeatable prices.
//                         </p>
//                         <div className="flex gap-4">
//                             <a href="https://www.facebook.com/RazaCashkart/" target="_blank" rel="noopener noreferrer"
//                                 className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 transition-colors cursor-pointer">
//                                 <Facebook className="h-4 w-4" />
//                             </a>
//                             {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
//                                 className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-400 transition-colors cursor-pointer">
//                                 <Twitter className="h-4 w-4" />
//                             </a> */}
//                             <a href="https://www.instagram.com/raza_cashkart/" target="_blank" rel="noopener noreferrer"
//                                 className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-pink-600 transition-colors cursor-pointer">
//                                 <Instagram className="h-4 w-4" />
//                             </a>
//                             {/* <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
//                                 className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-red-600 transition-colors cursor-pointer">
//                                 <Youtube className="h-4 w-4" />
//                             </a> */}
//                         </div>
//                     </div>

//                     {/* Shop Links */}
//                     <div>
//                         <h3 className="text-white font-semibold text-lg mb-4">Shop by Brand</h3>
//                         <ul className="space-y-2.5">
//                             <li>
//                                 <Link href="/category/brand/hp" className="hover:text-blue-400 transition-colors text-sm">
//                                     HP Laptops
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link href="/category/brand/dell" className="hover:text-blue-400 transition-colors text-sm">
//                                     Dell Laptops
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link href="/category/brand/lenovo" className="hover:text-blue-400 transition-colors text-sm">
//                                     Lenovo Laptops
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link href="/category/brand/asus" className="hover:text-blue-400 transition-colors text-sm">
//                                     Asus Laptops
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link href="/category/brand/acer" className="hover:text-blue-400 transition-colors text-sm">
//                                     Acer Laptops
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link href="/category/price/under-15000" className="hover:text-blue-400 transition-colors text-sm">
//                                     Budget Laptops
//                                 </Link>
//                             </li>
//                         </ul>
//                     </div>

//                     {/* Quick Links */}
//                     <div>
//                         <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
//                         <ul className="space-y-2.5">
//                             <li>
//                                 <Link href="/about" className="hover:text-blue-400 transition-colors text-sm">
//                                     About Us
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link href="/contact" className="hover:text-blue-400 transition-colors text-sm">
//                                     Contact Us
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link href="/warranty" className="hover:text-blue-400 transition-colors text-sm">
//                                     Warranty Policy
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link href="/shipping" className="hover:text-blue-400 transition-colors text-sm">
//                                     Shipping & Delivery
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link href="/returns" className="hover:text-blue-400 transition-colors text-sm">
//                                     Return Policy
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link href="/faq" className="hover:text-blue-400 transition-colors text-sm">
//                                     FAQs
//                                 </Link>
//                             </li>
//                         </ul>
//                     </div>

//                     {/* Contact Info */}
//                     <div>
//                         <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
//                         <ul className="space-y-3">
//                             <li className="flex items-start gap-3">
//                                 <MapPin className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
//                                 <span className="text-sm">
//                                     Saint Thomas Mount,<br />
//                                     Tamil Nadu, India
//                                 </span>
//                             </li>
//                             <li className="flex items-center gap-3">
//                                 <Phone className="h-5 w-5 text-blue-500 flex-shrink-0" />
//                                 <a href="tel:+919321888689" className="text-sm hover:text-blue-400 transition-colors">
//                                     +91 9321888689
//                                 </a>
//                             </li>
//                             <li className="flex items-center gap-3">
//                                 <Mail className="h-5 w-5 text-blue-500 flex-shrink-0" />
//                                 <a href="mailto:info@razacashkart.com" className="text-sm hover:text-blue-400 transition-colors">
//                                     info@razacashkart.com
//                                 </a>
//                             </li>
//                         </ul>

//                         <div className="mt-6">
//                             <h4 className="text-white font-medium text-sm mb-3">Business Hours</h4>
//                             <p className="text-sm">Mon - Sat: 10:00 AM - 7:00 PM</p>
//                             <p className="text-sm">Sunday: Closed</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Payment Methods */}
//             <div className="border-t border-gray-800">
//                 <div className="xl:max-w-7xl max-w-[90vw] mx-auto px-4 sm:px-6 lg:px-8 py-6">
//                     <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
//                         <div className="text-center sm:text-left">
//                             <p className="text-sm font-medium text-white mb-2">We Accept</p>
//                             <div className="flex items-center gap-3">
//                                 <div className="bg-white px-3 py-1.5 rounded text-xs font-semibold text-gray-900">
//                                     VISA
//                                 </div>
//                                 <div className="bg-white px-3 py-1.5 rounded text-xs font-semibold text-gray-900">
//                                     MASTERCARD
//                                 </div>
//                                 <div className="bg-white px-3 py-1.5 rounded text-xs font-semibold text-gray-900">
//                                     UPI
//                                 </div>
//                                 <div className="bg-white px-3 py-1.5 rounded text-xs font-semibold text-gray-900">
//                                     PAYTM
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="text-center sm:text-right">
//                             <p className="text-sm font-medium text-white mb-2">Secured By</p>
//                             <div className="flex items-center gap-2">
//                                 <div className="bg-green-600 px-3 py-1.5 rounded text-xs font-semibold text-white">
//                                     256-bit SSL
//                                 </div>
//                                 <div className="bg-blue-600 px-3 py-1.5 rounded text-xs font-semibold text-white">
//                                     PCI DSS
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Bottom Bar */}
//             <div className="border-t border-gray-800 bg-gray-950">
//                 <div className="xl:max-w-7xl max-w-[90vw] mx-auto px-4 sm:px-6 lg:px-8 py-6">
//                     <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
//                         <p className="text-gray-400 text-center sm:text-left">
//                             © {currentYear} Raza Cash Kart. All rights reserved.
//                         </p>
//                         <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
//                             <Link href="/privacy" className="text-gray-400 hover:text-blue-400 transition-colors">
//                                 Privacy Policy
//                             </Link>
//                             <Link href="/terms" className="text-gray-400 hover:text-blue-400 transition-colors">
//                                 Terms of Service
//                             </Link>
//                             <Link href="/sitemap" className="text-gray-400 hover:text-blue-400 transition-colors">
//                                 Sitemap
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     );
// }


"use client";

import React from "react";
import { ShoppingCart, Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-gray-300">
            {/* Main Footer Content */}
            <div className="xl:max-w-7xl max-w-[90vw] mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

                    {/* Company Info */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="relative">
                                <ShoppingCart className="h-8 w-8 text-blue-500" />
                                <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full"></div>
                            </div>
                            <div>
                                <h1 className="text-xl font-bold text-white">Raza Cash</h1>
                                <p className="text-xs text-blue-400">Kart</p>
                            </div>
                        </div>
                        <p className="text-sm leading-relaxed">
                            Your trusted source for quality refurbished laptops. We offer certified pre-owned laptops from top brands at unbeatable prices.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://www.facebook.com/RazaCashkart/" target="_blank" rel="noopener noreferrer"
                                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 transition-colors cursor-pointer">
                                <Facebook className="h-4 w-4" />
                            </a>
                            {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-400 transition-colors cursor-pointer">
                                <Twitter className="h-4 w-4" />
                            </a> */}
                            <a href="https://www.instagram.com/raza_cashkart/" target="_blank" rel="noopener noreferrer"
                                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-pink-600 transition-colors cursor-pointer">
                                <Instagram className="h-4 w-4" />
                            </a>
                            {/* <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
                                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-red-600 transition-colors cursor-pointer">
                                <Youtube className="h-4 w-4" />
                            </a> */}
                        </div>
                    </div>

                    {/* Shop Links */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-4">Shop by Brand</h3>
                        <ul className="space-y-2.5">
                            <li>
                                <Link href="/category/brand/hp" className="hover:text-blue-400 transition-colors text-sm">
                                    HP Laptops
                                </Link>
                            </li>
                            <li>
                                <Link href="/category/brand/dell" className="hover:text-blue-400 transition-colors text-sm">
                                    Dell Laptops
                                </Link>
                            </li>
                            <li>
                                <Link href="/category/brand/lenovo" className="hover:text-blue-400 transition-colors text-sm">
                                    Lenovo Laptops
                                </Link>
                            </li>
                            <li>
                                <Link href="/category/brand/asus" className="hover:text-blue-400 transition-colors text-sm">
                                    Asus Laptops
                                </Link>
                            </li>
                            <li>
                                <Link href="/category/brand/acer" className="hover:text-blue-400 transition-colors text-sm">
                                    Acer Laptops
                                </Link>
                            </li>
                            <li>
                                <Link href="/category/price/under-15000" className="hover:text-blue-400 transition-colors text-sm">
                                    Budget Laptops
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-2.5">
                            <li>
                                <Link href="/about" className="hover:text-blue-400 transition-colors text-sm">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-blue-400 transition-colors text-sm">
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/warranty" className="hover:text-blue-400 transition-colors text-sm">
                                    Warranty Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/shipping" className="hover:text-blue-400 transition-colors text-sm">
                                    Shipping & Delivery
                                </Link>
                            </li>
                            <li>
                                <Link href="/returns" className="hover:text-blue-400 transition-colors text-sm">
                                    Return Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/faq" className="hover:text-blue-400 transition-colors text-sm">
                                    FAQs
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    {/* <div>
                        <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                                <span className="text-sm">
                                    Shop no.2A, first floor A wing, <br />Aman Highland Park,
                                    Sanjay Nagar,<br /> Malad East, Mumbai 400097.
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="h-5 w-5 text-blue-500 flex-shrink-0" />
                                <a href="tel:+919321888689" className="text-sm hover:text-blue-400 transition-colors">
                                    +91 9321888689
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-blue-500 flex-shrink-0" />
                                <a href="mailto:info@razacashkart.com" className="text-sm hover:text-blue-400 transition-colors">
                                    info@razacashkart.com
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <Phone className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                                <div>
                                    <a href="tel:+919987857886" className="text-sm hover:text-blue-400 transition-colors block">
                                        +91 9987857886
                                    </a>
                                    <span className="text-xs text-green-400 mt-1 inline-block">Available 24/7</span>
                                </div>
                            </li>
                        </ul>

                  
                    </div> */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-4">Quick Help</h3>
                        <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                            You can ask anything you want to know about our products
                        </p>

                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                                <span className="text-sm">
                                    Shop no.2A, first floor A wing, <br />Aman Highland Park,
                                    Sanjay Nagar,<br /> Malad East, Mumbai 400097.
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                                <div>
                                    <a href="mailto:contact@razacashkart.com" className="text-sm hover:text-blue-400 transition-colors block">
                                        contact@razacashkart.com
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Phone className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                                <div>
                                    <a href="tel:+919987857886" className="text-sm hover:text-blue-400 transition-colors block">
                                        +91 9987857886
                                    </a>
                                    <span className="text-xs text-green-400 mt-1 inline-block">Available 24/7</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800 bg-gray-950">
                <div className="xl:max-w-7xl max-w-[90vw] mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="mb-4 pb-4 border-b border-gray-800">
                        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed text-center sm:text-left max-w-6xl">
                            All product names, logos, and brands are the property of their respective owners. All company, product, and service names used in this website are for identification purposes only. Use of these names, logos, and brands does not imply endorsement.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
                        <p className="text-gray-400 text-center sm:text-left">
                            © {currentYear} Raza Cash Kart. All rights reserved.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                            <Link href="/privacy" className="text-gray-400 hover:text-blue-400 transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="text-gray-400 hover:text-blue-400 transition-colors">
                                Shipping Policy
                            </Link>
                            <Link href="/sitemap" className="text-gray-400 hover:text-blue-400 transition-colors">
                                Return Policy
                            </Link>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    {/* <div className="mt-4 pt-4 border-t border-gray-800">
                        <p className="text-gray-500 text-xs leading-relaxed text-center sm:text-left max-w-5xl">
                            All product names, logos, and brands are the property of their respective owners. All company, product, and service names used in this website are for identification purposes only. Use of these names, logos, and brands does not imply endorsement.
                        </p>
                    </div> */}
                </div>
            </div>
        </footer>
    );
}