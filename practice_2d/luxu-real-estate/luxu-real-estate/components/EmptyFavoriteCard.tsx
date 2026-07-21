'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function EmptyFavoriteCard() {
  return (
    <div className="group bg-hintgreen/30 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border-2 border-dashed border-mosque/30 hover:border-mosque flex flex-col h-full items-center justify-center min-h-[400px] cursor-pointer text-center p-6">
      <div className="w-16 h-16 rounded-full bg-hintgreen flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
        <span className="material-icons text-mosque text-3xl">add</span>
      </div>
      <h3 className="text-xl font-bold text-nordic mb-2">Discover More</h3>
      <p className="text-nordic/70 text-sm mb-6 max-w-[200px]">Find more properties that match your lifestyle.</p>
      <Link href="/">
        <Button className="px-6 py-2.5 rounded-lg bg-mosque text-white font-medium text-sm shadow-lg shadow-mosque/30 hover:shadow-mosque/50 transition-all border-none">
          Browse Listings
        </Button>
      </Link>
    </div>
  );
}
