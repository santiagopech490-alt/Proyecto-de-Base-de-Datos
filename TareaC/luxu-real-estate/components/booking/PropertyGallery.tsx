"use client";

import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Maximize2, Camera, Heart, Share2 } from "lucide-react";
import Image from "next/image";

interface PropertyGalleryProps {
  images: string[];
}

export function PropertyGallery({ images }: PropertyGalleryProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  if (!images || images.length === 0) return null;

  return (
    <div className="space-y-4">
      <div className="relative group rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 border border-slate-100 bg-slate-50">
        {/* Main Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {images.map((src, index) => (
              <div className="flex-[0_0_100%] min-w-0" key={index}>
                <AspectRatio ratio={21 / 9}>
                  <Image 
                    src={src} 
                    alt={`Property image ${index + 1}`} 
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority={index === 0}
                  />
                </AspectRatio>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Badges & Actions */}
        <div className="absolute top-6 left-6 flex gap-2">
          <div className="bg-emerald-600 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg shadow-emerald-900/20">
            For Sale
          </div>
          <div className="bg-white/90 backdrop-blur-md text-slate-900 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg border border-white/20">
            New Listing
          </div>
        </div>

        <div className="absolute top-6 right-6 flex gap-2">
          <Button size="icon" variant="secondary" className="rounded-full bg-white/90 backdrop-blur-md hover:bg-white shadow-lg border border-white/20 transition-all duration-300">
            <Heart className="w-5 h-5 text-slate-700" />
          </Button>
          <Button size="icon" variant="secondary" className="rounded-full bg-white/90 backdrop-blur-md hover:bg-white shadow-lg border border-white/20 transition-all duration-300">
            <Share2 className="w-5 h-5 text-slate-700" />
          </Button>
        </div>

        {/* Navigation Arrows */}
        <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-6 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button 
            variant="outline" 
            size="icon"
            className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-md border-white/20 shadow-xl pointer-events-auto hover:scale-110 active:scale-95 transition-all" 
            onClick={scrollPrev}
          >
            <ChevronLeft className="w-6 h-6 text-slate-900" />
          </Button>
          <Button 
            variant="outline" 
            size="icon"
            className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-md border-white/20 shadow-xl pointer-events-auto hover:scale-110 active:scale-95 transition-all" 
            onClick={scrollNext}
          >
            <ChevronRight className="w-6 h-6 text-slate-900" />
          </Button>
        </div>

        {/* View All Button */}
        <div className="absolute bottom-6 right-6">
          <Button className="bg-slate-900/80 backdrop-blur-md text-white border border-white/10 rounded-xl px-4 py-6 hover:bg-slate-900 transition-all flex gap-2 shadow-2xl">
            <Camera className="w-5 h-5" />
            <span className="font-bold">View All Photos</span>
            <span className="text-slate-400 font-medium ml-1">1/{images.length}</span>
          </Button>
        </div>
      </div>

      {/* Thumbnails Strip */}
      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide no-scrollbar">
        {images.map((src, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`relative flex-[0_0_120px] h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
              selectedIndex === index ? "border-emerald-600 scale-105 shadow-lg shadow-emerald-900/10" : "border-transparent opacity-60 hover:opacity-100"
            }`}
          >
            <Image 
              src={src} 
              alt={`Thumbnail ${index + 1}`} 
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
