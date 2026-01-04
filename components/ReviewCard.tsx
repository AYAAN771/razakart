'use client'

import type { Review } from './LiveGoogleReviews'; // or move type to a shared file

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <div className="flex items-center gap-4">
        <img
          src={review.author.avatarUrl || '/avatar-fallback.png'}
          alt={review.author.name}
          className="h-12 w-12 rounded-full object-cover"
          loading="lazy"
          referrerPolicy="no-referrer"
        />

        <div>
          <p className="font-semibold">{review.author.name}</p>
          <p className="text-sm text-gray-500">
            {new Date(review.publishedAt).toLocaleDateString()}
          </p>
        </div>
      </div>

      <div className="mt-3 flex gap-1 text-yellow-500">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i}>{i < review.rating.value ? '★' : '☆'}</span>
        ))}
      </div>

      <p className="mt-3 text-gray-700">{review.text}</p>
    </div>
  );
}
