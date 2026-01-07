"use client";

import { ChevronUp } from "lucide-react";

interface ScrollToTopButtonProps {
  show: boolean;
}

export default function ScrollToTopButton({ show }: ScrollToTopButtonProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!show) return null;

  return (
    <button
      onClick={scrollToTop}
      className='fixed bottom-20 cursor-pointer right-6 z-50 p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300'
    >
      <ChevronUp className='w-6 h-6' />
    </button>
  );
}
