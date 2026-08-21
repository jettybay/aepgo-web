"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { CarouselSlide } from "@/lib/gallery";

interface ImageCarouselProps {
  slides: CarouselSlide[];
  /** Time each slide stays visible, in milliseconds. */
  intervalMs?: number;
  className?: string;
}

const SWIPE_THRESHOLD_PX = 40;

export function ImageCarousel({ slides, intervalMs = 3000, className }: ImageCarouselProps) {
  const count = slides.length;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const goTo = useCallback((i: number) => setIndex(((i % count) + count) % count), [count]);
  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + count) % count), [count]);

  // Auto-advance, looping back to the first slide. Restarts whenever `index` changes
  // so manual navigation always gets a full interval.
  useEffect(() => {
    if (paused || count < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setTimeout(next, intervalMs);
    return () => window.clearTimeout(timer);
  }, [index, paused, count, intervalMs, next]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setPaused(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const start = touchStartX.current;
    touchStartX.current = null;
    setPaused(false);
    if (start === null) return;

    const delta = e.changedTouches[0].clientX - start;
    if (Math.abs(delta) < SWIPE_THRESHOLD_PX) return;
    if (delta < 0) next();
    else prev();
  };

  if (count === 0) return null;

  return (
    <section
      aria-label="Stored commodities"
      aria-roledescription="carousel"
      className={cn(
        "group relative w-full overflow-hidden rounded-2xl bg-gray-900 shadow-sm ring-1 ring-black/5",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-800",
        className
      )}
      tabIndex={0}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") next();
        if (e.key === "ArrowLeft") prev();
      }}
    >
      {/* Track */}
      <div
        className="flex h-40 transition-transform duration-700 ease-out sm:h-52 lg:h-60"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            className="relative h-full w-full shrink-0"
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${count}`}
            aria-hidden={i !== index}
          >
            {/* Remote images bypass next/image on purpose — no remote loader config needed. */}
            <img
              src={slide.src}
              alt={slide.alt}
              loading={i === 0 ? "eager" : "lazy"}
              decoding="async"
              draggable={false}
              className="h-full w-full select-none object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-white sm:text-base">{slide.title}</p>
                <p className="mt-0.5 truncate text-[11px] text-white/75 sm:text-xs">{slide.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute inset-x-0 top-0 h-0.5 bg-white/20">
        <div
          key={index}
          className={cn(
            "h-full origin-left bg-white/90 animate-carousel-progress",
            paused && "[animation-play-state:paused]"
          )}
          style={{ ["--carousel-duration" as string]: `${intervalMs}ms` }}
        />
      </div>

      {/* Arrows — pointer devices only, mobile uses swipe + autoplay */}
      <button
        type="button"
        onClick={prev}
        aria-label="Previous image"
        className="absolute left-2 top-1/2 hidden size-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-gray-900 opacity-0 shadow-sm transition hover:bg-white focus-visible:opacity-100 group-hover:opacity-100 sm:flex"
      >
        <ChevronLeft size={16} />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next image"
        className="absolute right-2 top-1/2 hidden size-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-gray-900 opacity-0 shadow-sm transition hover:bg-white focus-visible:opacity-100 group-hover:opacity-100 sm:flex"
      >
        <ChevronRight size={16} />
      </button>

      {/* Dots */}
      <div className="absolute right-3 top-3 flex items-center gap-1.5 sm:right-4 sm:top-4">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Go to ${slide.title}`}
            aria-current={i === index}
            className={cn(
              "h-1.5 rounded-full transition-all",
              i === index ? "w-5 bg-white" : "w-1.5 bg-white/50 hover:bg-white/80"
            )}
          />
        ))}
      </div>

      <span aria-live="polite" className="sr-only">
        {slides[index].title}, slide {index + 1} of {count}
      </span>
    </section>
  );
}
