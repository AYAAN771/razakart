"use client";

import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star, ExternalLink } from "lucide-react";
import ReviewCard from "./ReviewCard";

const FEATURABLE_WIDGET_ID = "08b993ea-ec50-4428-aaec-7b6ff0bfaf13";
const GOOGLE_REVIEW_URL = "https://share.google/HC0uQWCnEYGAiN5XU";

export type Review = {
  id: string; // ✅ REQUIRED (from Featurable API)

  author: {
    name: string;
    avatarUrl?: string;
  };

  rating: {
    value: number;
  };

  text: string;
  publishedAt: string;
};

export default function LiveGoogleReviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  /* ---------------- FETCH (FIXED) ---------------- */
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch(
          `https://featurable.com/api/v2/widgets/${FEATURABLE_WIDGET_ID}`,
          { cache: "no-store" }
        );

        const json = await res.json();

        // ✅ EXACT path from your response
        const fetchedReviews = json?.widget?.reviews;

        if (Array.isArray(fetchedReviews)) {
          setReviews(fetchedReviews);
        } else {
          console.error("Featurable reviews not found:", json);
          setReviews([]);
        }
      } catch (err) {
        console.error("Failed to fetch Google reviews:", err);
        setReviews([]);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  /* ---------------- RESPONSIVE ---------------- */
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 768) setItemsPerView(1);
      else if (window.innerWidth < 1024) setItemsPerView(2);
      else setItemsPerView(3);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = Math.max(0, reviews.length - itemsPerView);

  const initials = (name: string) =>
    name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();

  const avatarColor = (name: string) => {
    const colors = [
      "bg-blue-500",
      "bg-purple-500",
      "bg-pink-500",
      "bg-indigo-500",
      "bg-teal-500",
      "bg-orange-500",
    ];
    return colors[name.charCodeAt(0) % colors.length];
  };

  if (loading) {
    return (
      <div className='py-16 text-center'>
        <div className='mx-auto h-10 w-10 animate-spin rounded-full border-b-2 border-blue-600' />
        <p className='mt-4 text-gray-600'>Loading reviews…</p>
      </div>
    );
  }

  /* ---------------- UI (UNCHANGED) ---------------- */
  return (
    <section className='w-full bg-white py-12'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-slate-800'>
            Customer reviews are our strength
          </h2>

          <div className='flex justify-center items-center gap-2 mt-4'>
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className='w-5 h-5 fill-yellow-400 text-yellow-400'
              />
            ))}
            <span className='font-semibold text-slate-700'>
              ({reviews.length} reviews)
            </span>
          </div>

          <a
            href={GOOGLE_REVIEW_URL}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-2 mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700'
          >
            <ExternalLink className='w-4 h-4' />
            View all reviews
          </a>
        </div>

        <div className='relative overflow-hidden'>
          {currentIndex > 0 && (
            <button
              onClick={() => setCurrentIndex((i) => Math.max(0, i - 1))}
              className='absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow'
            >
              <ChevronLeft />
            </button>
          )}

          <div
            className='flex transition-transform duration-500'
            style={{
              transform: `translateX(-${(100 / itemsPerView) * currentIndex}%)`,
            }}
          >
            {reviews.map((review) => (
              <div
                key={review.id}
                className='px-3 flex-shrink-0'
                style={{ width: `${100 / itemsPerView}%` }}
              >
                <ReviewCard review={review} />
              </div>
            ))}
          </div>

          {currentIndex < maxIndex && (
            <button
              onClick={() => setCurrentIndex((i) => Math.min(maxIndex, i + 1))}
              className='absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow'
            >
              <ChevronRight />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
