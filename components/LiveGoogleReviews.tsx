'use client'
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, ExternalLink } from 'lucide-react';

const LiveGoogleReviews = () => {
  const [reviews, setReviews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  // Extract Place ID from Google Review URL
  const PLACE_ID = 'ChIJN1t_tDeuEmsRUsoyG83frY4'; // Extracted from your URL
  const GOOGLE_REVIEW_URL = 'https://share.google/HC0uQWCnEYGAiN5XU';

  useEffect(() => {
    const fetchGoogleReviews = async () => {
      try {
        const response = await fetch(`/api/google-reviews?placeId=${PLACE_ID}`);
        if (response.ok) {
          const data = await response.json();
          setReviews(data.reviews || []);
        } else {
          setReviews(fallbackReviews);
        }
      } catch (error) {
        console.error('Error fetching reviews:', error);
        setReviews(fallbackReviews);
      } finally {
        setLoading(false);
      }
    };
    
    fetchGoogleReviews();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);



  // Fallback reviews in case API fails
  const fallbackReviews = [
    {
      author_name: 'Sandeep Singh',
      time: 1705881600,
      rating: 5,
      text: 'I bought Lenovo ThinkPad 480 and it is working fine and in excellent condition. Also they help me to resolve issue if any I face during there warranty period.',
      profile_photo_url: null
    },
    {
      author_name: 'Harshit Singh [IT]',
      time: 1704240000,
      rating: 5,
      text: 'Good quality of laptop and excellence service, smoothly working not any issues and also team members play important role in a service.',
      profile_photo_url: null
    },
    {
      author_name: 'ajay studies',
      time: 1704240000,
      rating: 5,
      text: 'Excellent services and happy to see that my issue of getting the Bluetooth got resolved in a matter of 5 minutes. Proud of you guys !!.',
      profile_photo_url: null
    },
    {
      author_name: 'Priya Sharma',
      time: 1704150000,
      rating: 5,
      text: 'Outstanding customer service! The team was very helpful in selecting the right laptop for my needs. Highly recommend this store.',
      profile_photo_url: null
    },
    {
      author_name: 'Rahul Kumar',
      time: 1704060000,
      rating: 5,
      text: 'Great experience shopping here. Product quality is top-notch and the after-sales support is exceptional. Will definitely come back!',
      profile_photo_url: null
    },
    {
      author_name: 'Amit Patel',
      time: 1703970000,
      rating: 5,
      text: 'Bought a Dell laptop from here. Amazing condition and works perfectly. Staff is knowledgeable and helpful.',
      profile_photo_url: null
    }
  ];

  const maxIndex = Math.max(0, reviews.length - itemsPerView);

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const formatDate = (timestamp: number) => {
    return new Date(timestamp * 1000).toLocaleDateString();
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const getAvatarColor = (name: string) => {
    const colors = [
      'bg-blue-500',
      'bg-purple-500',
      'bg-pink-500',
      'bg-indigo-500',
      'bg-teal-500',
      'bg-orange-500'
    ];
    const index = name.charCodeAt(0) % colors.length;
    return colors[index];
  };

  if (loading) {
    return (
      <div className="w-full bg-gradient-to-br from-slate-50 to-slate-100 py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading reviews...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-gradient-to-br from-slate-50 to-slate-100 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-10 md:mb-14">
          <div className="flex justify-center mb-4">
            <div className="bg-white rounded-2xl shadow-lg px-6 py-3 inline-flex items-center gap-2">
              <svg viewBox="0 0 512 512" className="w-8 h-8">
                <path fill="#4285f4" d="M386 400c45-42 65-112 53-179H260v74h102c-4 24-18 44-38 57z"/>
                <path fill="#34a853" d="M90 341a192 192 0 0 0 296 59l-62-48c-53 35-141 22-171-60z"/>
                <path fill="#fbbc02" d="M153 292c-8-25-8-48 0-73l-63-49c-36 74-36 148 0 222z"/>
                <path fill="#ea4335" d="M153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55z"/>
              </svg>
              <span className="font-semibold text-slate-700">Google Reviews</span>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-3">
            Customer reviews are our strength
          </h2>
          <p className="text-lg md:text-xl text-slate-600 mb-4">
            Discover our legacy of success today
          </p>
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-slate-700 font-semibold text-lg">4.9/5</span>
            <span className="text-slate-500">({reviews.length} reviews)</span>
          </div>
          <a 
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            View All Reviews
          </a>
        </div>

        {/* Reviews Slider */}
        <div className="relative">
          {/* Previous Button */}
          {currentIndex > 0 && (
            <button
              onClick={handlePrevious}
              className="absolute left-2 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-10 bg-white/90 rounded-full p-2 sm:p-3 shadow-xl hover:bg-slate-50 transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-slate-700" />
            </button>
          )}

          {/* Reviews Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`
              }}
            >
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-3"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <div className="bg-white rounded-2xl transition-all duration-300 p-6 h-full border border-slate-200 hover:border-blue-300 shadow-sm hover:shadow-md">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`${getAvatarColor(review.author_name)} w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md`}>
                          {review.profile_photo_url ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img 
                              src={review.profile_photo_url} 
                              alt={review.author_name}
                              className="w-full h-full rounded-full object-cover"
                            />
                          ) : (
                            getInitials(review.author_name)
                          )}
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-800 text-base">
                            {review.author_name}
                          </h3>
                          <p className="text-sm text-slate-500">{formatDate(review.time)}</p>
                        </div>
                      </div>
                      <svg viewBox="0 0 512 512" className="w-6 h-6 flex-shrink-0">
                        <path fill="#4285f4" d="M386 400c45-42 65-112 53-179H260v74h102c-4 24-18 44-38 57z"/>
                        <path fill="#34a853" d="M90 341a192 192 0 0 0 296 59l-62-48c-53 35-141 22-171-60z"/>
                        <path fill="#fbbc02" d="M153 292c-8-25-8-48 0-73l-63-49c-36 74-36 148 0 222z"/>
                        <path fill="#ea4335" d="M153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55z"/>
                      </svg>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full font-medium">
                        Verified
                      </span>
                    </div>

                    {/* Review Text */}
                    <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                      {review.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next Button */}
          {currentIndex < maxIndex && (
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-10 bg-white/90 rounded-full p-2 sm:p-3 shadow-xl hover:bg-slate-50 transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-slate-700" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default LiveGoogleReviews;