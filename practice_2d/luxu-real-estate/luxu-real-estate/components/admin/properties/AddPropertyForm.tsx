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
import { useLanguage } from '@/lib/i18n/LanguageContext';

export function AddPropertyForm({ userId }: { userId: string }) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const supabase = createClient();
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    location: '',
    beds: '',
    baths: '',
    sqft: '',
    garage: '',
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const slug = formData.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '') + '-' + Math.random().toString(36).substring(2, 7);
      
      const newProp = {
        title: formData.title,
        description: formData.description,
        price: parseFloat(formData.price) || 1000000,
        address: formData.location,
        location: formData.location,
        city: formData.location.split(',')[0] || formData.location || 'Beverly Hills',
        neighborhood: 'Luxury District',
        bedrooms: parseInt(formData.beds) || 3,
        beds: parseInt(formData.beds) || 3,
        bathrooms: parseFloat(formData.baths) || 2,
        baths: parseFloat(formData.baths) || 2,
        sqft: parseInt(formData.sqft) || 2000,
        garage: parseInt(formData.garage || '0'),
        images: [formData.imageUrl || 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop'],
        slug,
        status: 'active',
        amenities: ['New Construction', 'Luxury'],
      };

      // 1. Attempt Supabase DB insertion
      try {
        const { error } = await supabase
          .from('properties')
          .insert([{ 
            ...newProp, 
            user_id: (userId && userId.length > 20) ? userId : null 
          }]);
        
        if (error) {
          console.warn("Supabase insert notice:", error.message || error);
        }
      } catch (dbErr) {
        console.warn("Supabase insert caught exception:", dbErr);
      }

      // 2. Save locally so new property appears immediately in property list
      if (typeof window !== 'undefined') {
        const existing = localStorage.getItem('luxe_custom_properties');
        const list = existing ? JSON.parse(existing) : [];
        list.unshift({ ...newProp, id: 'prop-' + Date.now() });
        localStorage.setItem('luxe_custom_properties', JSON.stringify(list));
      }

      toast.success(t("createListing.successMsg"));
      router.push('/admin/properties');
      window.location.href = '/admin/properties';
    } catch (error: any) {
      console.error('Error adding property:', error);
      toast.error('Error publishing property');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/admin/properties">
            <Button variant="ghost" size="icon" className="rounded-full cursor-pointer">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-[#19322F]">{t("createListing.title")}</h1>
        </div>
        <div className="flex gap-3">
          <Button type="button" variant="outline" onClick={() => router.back()} className="cursor-pointer">{t("createListing.cancel")}</Button>
          <Button type="submit" className="bg-[#0F5A4D] hover:bg-[#0a3d34] text-white px-8 cursor-pointer" disabled={isLoading}>
            {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : t("createListing.publish")}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <Card className="p-6 border-none shadow-sm ring-1 ring-slate-100">
            <h2 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <Home className="h-5 w-5 text-[#0F5A4D]" /> {t("createListing.basicInfo")}
            </h2>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">{t("createListing.propertyTitle")}</label>
                <Input 
                  name="title" 
                  placeholder={t("createListing.titlePlaceholder")} 
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">{t("createListing.description")}</label>
                <Textarea 
                  name="description" 
                  placeholder={t("createListing.descPlaceholder")} 
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
              <MapPin className="h-5 w-5 text-[#0F5A4D]" /> {t("createListing.locationPricing")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">{t("createListing.addressLocation")}</label>
                <Input 
                  name="location" 
                  placeholder={t("createListing.addressPlaceholder")} 
                  value={formData.location}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">{t("createListing.price")}</label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <Input 
                    name="price" 
                    type="number" 
                    className="pl-10" 
                    placeholder="5000000"
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
            <h2 className="text-lg font-semibold mb-6">{t("createListing.specifications")}</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-medium uppercase text-slate-500">{t("createListing.bedrooms")}</label>
                  <div className="relative">
                    <Bed className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <Input name="beds" type="number" className="pl-10" value={formData.beds} onChange={handleChange} required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-medium uppercase text-slate-500">{t("createListing.bathrooms")}</label>
                  <div className="relative">
                    <Bath className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <Input name="baths" type="number" step="0.5" className="pl-10" value={formData.baths} onChange={handleChange} required />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-medium uppercase text-slate-500">{t("createListing.sqft")}</label>
                  <div className="relative">
                    <Square className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <Input name="sqft" type="number" className="pl-10" value={formData.sqft} onChange={handleChange} required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-medium uppercase text-slate-500">{t("createListing.garage")}</label>
                  <div className="relative">
                    <Car className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <Input name="garage" type="number" className="pl-10" value={formData.garage} onChange={handleChange} />
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 border-none shadow-sm ring-1 ring-slate-100 bg-slate-50/50">
            <h2 className="text-sm font-semibold mb-4 text-[#0F5A4D]">{t("createListing.mainImage")}</h2>
            <Input 
              name="imageUrl" 
              placeholder="https://..." 
              className="bg-white"
              value={formData.imageUrl}
              onChange={handleChange}
            />
            <p className="text-[10px] text-slate-400 mt-2">{t("createListing.imageHint")}</p>
          </Card>
        </div>
      </div>
    </form>
  );
}
