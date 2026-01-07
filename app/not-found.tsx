"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Home, Search, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className='min-h-screen bg-gray-50 flex items-center justify-center px-4'>
      <div className='max-w-md w-full text-center'>
        {/* Logo */}
        <div className='flex justify-center mb-8'>
          <img src='/logof.png' className='w-[150px]' alt='' />
        </div>

        {/* 404 Content */}
        <div className='mb-8'>
          <h1 className='text-6xl font-bold text-gray-900 mb-4'>404</h1>
          <h2 className='text-2xl font-semibold text-gray-700 mb-2'>
            Page Not Found
          </h2>
          <p className='text-gray-500 mb-8'>
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </p>
        </div>

        {/* Action Buttons */}
        <div className='space-y-3'>
          <Link href='/'>
            <Button className='w-full bg-blue-600 hover:bg-blue-700 text-white gap-2'>
              <Home className='w-4 h-4' />
              Go to Homepage
            </Button>
          </Link>

          <Link href='/search'>
            <Button variant='outline' className='w-full gap-2 border-gray-300'>
              <Search className='w-4 h-4' />
              Browse Products
            </Button>
          </Link>

          <Button
            variant='ghost'
            onClick={() => window.history.back()}
            className='w-full gap-2 text-gray-600'
          >
            <ArrowLeft className='w-4 h-4' />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
}
