'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function AddPropertyPage() {
  return (
    <div className="min-h-screen bg-soft-fog">
      {/* Sticky Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <h1 className="text-xl font-semibold text-charcoal">Add New Property</h1>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="border-gray-200 text-charcoal hover:bg-gray-50">
              Save Draft
            </Button>
            <Button className="bg-emerald-green text-white hover:bg-emerald-green/90">
              Save Property
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[7fr_3fr]">
          {/* Main Column (Left) */}
          <div className="space-y-8">
            <Card className="p-6">
              <h2 className="text-lg font-medium mb-4">Basic Information</h2>
              <div className="h-40 flex items-center justify-center border-2 border-dashed rounded-lg text-muted-slate">
                Content will be implemented in Phase 2
              </div>
            </Card>
            
            <Card className="p-6">
              <h2 className="text-lg font-medium mb-4">Property Description</h2>
              <div className="h-40 flex items-center justify-center border-2 border-dashed rounded-lg text-muted-slate">
                Content will be implemented in Phase 2
              </div>
            </Card>
            
            <Card className="p-6">
              <h2 className="text-lg font-medium mb-4">Gallery & Media</h2>
              <div className="h-40 flex items-center justify-center border-2 border-dashed rounded-lg text-muted-slate">
                Content will be implemented in Phase 2
              </div>
            </Card>
          </div>

          {/* Sidebar Column (Right) */}
          <div className="space-y-8">
            <Card className="p-6">
              <h2 className="text-lg font-medium mb-4">Location</h2>
              <div className="h-40 flex items-center justify-center border-2 border-dashed rounded-lg text-muted-slate">
                Content will be implemented in Phase 3
              </div>
            </Card>
            
            <Card className="p-6">
              <h2 className="text-lg font-medium mb-4">Property Details</h2>
              <div className="h-40 flex items-center justify-center border-2 border-dashed rounded-lg text-muted-slate">
                Content will be implemented in Phase 3
              </div>
            </Card>
            
            <Card className="p-6">
              <h2 className="text-lg font-medium mb-4">Amenities Checklist</h2>
              <div className="h-40 flex items-center justify-center border-2 border-dashed rounded-lg text-muted-slate">
                Content will be implemented in Phase 3
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
