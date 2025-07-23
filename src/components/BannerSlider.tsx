import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const banners = [
  {
    image: "https://firebasestorage.googleapis.com/v0/b/galeryproject-8ff43.appspot.com/o/website%2Fbanner_ai_skills.png?alt=media&token=967b6982-326f-48d9-a110-6717ade43f83",
    link: "https://nas.io/ai-the-new-sexy-com/challenges/ai-skills"
  },
  {
    image: "https://firebasestorage.googleapis.com/v0/b/galeryproject-8ff43.appspot.com/o/website%2FBase_challlenge.png?alt=media&token=f5bca7a4-1aa4-4858-9597-1f0c3db16e1b",
    link: "https://nas.io/ai-the-new-sexy-com/challenges/build-in-public-on-base"
  }
];

export default function BannerSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000); // Auto-advance every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[400px] overflow-hidden">
      <div 
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {banners.map((banner, index) => (
          <a
            key={index}
            href={banner.link}
            target="_blank"
            rel="noopener noreferrer"
            className="min-w-full h-full"
          >
            <img
              src={banner.image}
              alt={`Banner ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </a>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentSlide === index ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
