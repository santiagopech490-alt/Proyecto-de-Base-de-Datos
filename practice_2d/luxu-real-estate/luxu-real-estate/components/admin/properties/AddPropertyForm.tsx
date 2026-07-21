'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { createClient } from '@/lib/supabase/client';
import { toast } from 'sonner';
import { Loader2, ArrowLeft, Home, MapPin, DollarSign, Bed, Bath, Square, Car } from 'lucide-react';
import Link from 'next/link';

export function AddPropertyForm({ userId }: { userId: string }) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    location: '',
    beds: '',
    baths: '',
    sqft: '',
    garage: '',
    imageUrl: 'https://placehold.co/800x600/19322F/white?text=Property+Image',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Generate slug
      const slug = formData.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '') + '-' + Math.random().toString(36).substring(2, 7);

      const { error } = await supabase
        .from('properties')
        .insert([{
          title: formData.title,
          description: formData.description,
          price: parseFloat(formData.price),
          address: formData.location,
          location: formData.location,
          bedrooms: parseInt(formData.beds),
          beds: parseInt(formData.beds),
          bathrooms: parseInt(formData.baths),
          baths: parseInt(formData.baths),
          sqft: parseInt(formData.sqft),
          garage: parseInt(formData.garage || '0'),
          images: [formData.imageUrl],
          user_id: userId,
          slug,
          status: 'active',
          amenities: ['New Construction', 'Luxury'],
        }]);

      if (error) throw error;

      toast.success('Property added successfully!');
      router.push('/admin/properties');
      router.refresh();
    } catch (error: any) {
      console.error('Error adding property:', error);
      toast.error(error.message || 'Failed to add property');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/admin/properties">
            <Button variant="ghost" size="icon" className="rounded-full">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-[#19322F]">Create New Listing</h1>
        </div>
        <div className="flex gap-3">
          <Button type="button" variant="outline" onClick={() => router.back()}>Cancel</Button>
          <Button type="submit" className="bg-[#0F5A4D] hover:bg-[#0a3d34] text-white px-8" disabled={isLoading}>
            {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Publish Property'}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <Card className="p-6 border-none shadow-sm ring-1 ring-slate-100">
            <h2 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <Home className="h-5 w-5 text-[#0F5A4D]" /> Basic Information
            </h2>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Property Title</label>
                <Input 
                  name="title" 
                  placeholder="e.g. Modern Villa with Sea View" 
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Description</label>
                <Textarea 
                  name="description" 
                  placeholder="Tell potential buyers about this luxury home..." 
                  className="min-h-[150px]"
                  value={formData.description}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </Card>

          <Card className="p-6 border-none shadow-sm ring-1 ring-slate-100">
            <h2 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-[#0F5A4D]" /> Location & Pricing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Address / Location</label>
                <Input 
                  name="location" 
                  placeholder="e.g. Beverly Hills, CA" 
                  value={formData.location}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Price ($)</label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <Input 
                    name="price" 
                    type="number" 
                    className="pl-10" 
                    placeholder="5,000,000"
                    value={formData.price}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="p-6 border-none shadow-sm ring-1 ring-slate-100">
            <h2 className="text-lg font-semibold mb-6">Specifications</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-medium uppercase text-slate-500">Bedrooms</label>
                  <div className="relative">
                    <Bed className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <Input name="beds" type="number" className="pl-10" value={formData.beds} onChange={handleChange} required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-medium uppercase text-slate-500">Bathrooms</label>
                  <div className="relative">
                    <Bath className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <Input name="baths" type="number" step="0.5" className="pl-10" value={formData.baths} onChange={handleChange} required />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-medium uppercase text-slate-500">Sq Ft</label>
                  <div className="relative">
                    <Square className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <Input name="sqft" type="number" className="pl-10" value={formData.sqft} onChange={handleChange} required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-medium uppercase text-slate-500">Garage</label>
                  <div className="relative">
                    <Car className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <Input name="garage" type="number" className="pl-10" value={formData.garage} onChange={handleChange} />
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 border-none shadow-sm ring-1 ring-slate-100 bg-slate-50/50">
            <h2 className="text-sm font-semibold mb-4 text-[#0F5A4D]">Main Image URL</h2>
            <Input 
              name="imageUrl" 
              placeholder="https://..." 
              className="bg-white"
              value={formData.imageUrl}
              onChange={handleChange}
            />
            <p className="text-[10px] text-slate-400 mt-2">Paste a direct link to a property image (JPG/PNG).</p>
          </Card>
        </div>
      </div>
    </form>
  );
}
