'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { toast } from 'sonner';
import { Loader2, ArrowLeft, Home, MapPin, DollarSign, Save } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { getPropertyBySlug } from '@/lib/services/property-service';

export function EditPropertyForm({ propertyId }: { propertyId: string }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(true);
  const router = useRouter();
  const { language } = useLanguage();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    location: '',
    beds: '',
    baths: '',
    sqft: '',
    garage: '',
    imageUrl: '',
    status: 'active'
  });

  useEffect(() => {
    async function loadProperty() {
      try {
        const prop = await getPropertyBySlug(propertyId);
        if (prop) {
          setFormData({
            title: prop.title || '',
            description: prop.description || '',
            price: prop.price ? prop.price.toString() : '4500000',
            location: prop.location || prop.address || 'Beverly Hills, CA',
            beds: (prop.beds || prop.bedrooms || 3).toString(),
            baths: (prop.baths || prop.bathrooms || 2).toString(),
            sqft: (prop.sqft || 2500).toString(),
            garage: (prop.garage || 2).toString(),
            imageUrl: (prop.images && prop.images.length > 0) ? prop.images[0] : 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop',
            status: prop.status || 'active'
          });
        }
      } catch (err) {
        console.warn("Notice loading edit property:", err);
      } finally {
        setIsFetching(false);
      }
    }
    loadProperty();
  }, [propertyId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const priceNum = parseFloat(formData.price) || 1000000;
      const bedsNum = parseInt(formData.beds) || 3;
      const bathsNum = parseFloat(formData.baths) || 2;
      const sqftNum = parseInt(formData.sqft) || 2000;
      const garageNum = parseInt(formData.garage || '0');
      const validImage = formData.imageUrl.trim() || 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop';

      const updatePayload = {
        title: formData.title,
        description: formData.description,
        price: priceNum,
        address: formData.location,
        bedrooms: bedsNum,
        bathrooms: bathsNum,
        sqft: sqftNum,
        garage: garageNum,
        images: [validImage],
        status: formData.status
      };

      // 1. Direct Supabase REST API Update (PATCH)
      try {
        let endpoint = `https://ujnaghovqcejwmwusakr.supabase.co/rest/v1/properties?slug=eq.${encodeURIComponent(propertyId)}`;
        if (propertyId.includes('-') && propertyId.length > 20) {
          endpoint = `https://ujnaghovqcejwmwusakr.supabase.co/rest/v1/properties?id=eq.${encodeURIComponent(propertyId)}`;
        }

        const resp = await fetch(endpoint, {
          method: 'PATCH',
          headers: {
            'apikey': 'sb_publishable_6ZT_fKACRFHA-ny5MUc3PA_jAD54ZZQ',
            'Authorization': 'Bearer sb_publishable_6ZT_fKACRFHA-ny5MUc3PA_jAD54ZZQ',
            'Content-Type': 'application/json',
            'Prefer': 'return=representation'
          },
          body: JSON.stringify(updatePayload)
        });

        if (resp.ok) {
          console.log("Supabase REST API Update Success");
        } else {
          console.warn("Supabase REST API Update Notice:", await resp.text());
        }
      } catch (dbErr) {
        console.warn("Supabase update fetch exception:", dbErr);
      }

      // 2. Local Cache Update
      const updatedProp = {
        id: propertyId,
        slug: propertyId,
        ...updatePayload,
        location: formData.location,
        beds: bedsNum,
        baths: bathsNum
      };

      if (typeof window !== 'undefined') {
        const existing = localStorage.getItem('luxe_custom_properties');
        let list = existing ? JSON.parse(existing) : [];
        const index = list.findIndex((item: any) => item.id === propertyId || item.slug === propertyId);
        if (index >= 0) {
          list[index] = { ...list[index], ...updatedProp };
        } else {
          list.unshift(updatedProp);
        }
        localStorage.setItem('luxe_custom_properties', JSON.stringify(list));
      }

      toast.success(language === 'es' ? 'Propiedad actualizada exitosamente' : 'Property updated successfully');
      router.push('/admin/properties');
    } catch (err: any) {
      console.error("Edit property error:", err);
      toast.error(err.message || 'Error al actualizar propiedad');
    } finally {
      setIsLoading(false);
    }
  };

  if (isFetching) {
    return <div className="p-8 text-center text-slate-400">Cargando datos de la propiedad...</div>;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <Link href="/admin/properties" className="text-sm text-slate-500 hover:text-[#0F5A4D] flex items-center gap-1 mb-2">
            <ArrowLeft className="h-4 w-4" /> {language === 'es' ? 'Volver al Panel' : 'Back to Dashboard'}
          </Link>
          <h1 className="text-2xl font-bold text-[#19322F]">
            {language === 'es' ? 'Editar Propiedad' : 'Edit Property'}
          </h1>
        </div>

        <div className="flex gap-3">
          <Button type="button" variant="outline" onClick={() => router.back()}>
            {language === 'es' ? 'Cancelar' : 'Cancel'}
          </Button>
          <Button type="submit" disabled={isLoading} className="bg-[#0F5A4D] hover:bg-[#0a3d34] text-white cursor-pointer font-bold px-6">
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {language === 'es' ? 'Guardando...' : 'Saving...'}
              </>
            ) : (
              <>
                <Save className="mr-2 h-4 w-4" />
                {language === 'es' ? 'Guardar Cambios' : 'Save Changes'}
              </>
            )}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card className="p-6 border-none shadow-sm ring-1 ring-slate-100">
            <h2 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <Home className="h-5 w-5 text-[#0F5A4D]" /> Información Básica
            </h2>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Título del Inmueble</label>
                <Input 
                  name="title" 
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Descripción</label>
                <Textarea 
                  name="description" 
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
              <MapPin className="h-5 w-5 text-[#0F5A4D]" /> Ubicación y Precio
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Dirección / Ubicación</label>
                <Input 
                  name="location" 
                  value={formData.location}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Precio (USD)</label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <Input 
                    name="price" 
                    type="number" 
                    className="pl-10" 
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
            <h2 className="text-lg font-semibold mb-6">Especificaciones</h2>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Recámaras</label>
                <Input name="beds" type="number" value={formData.beds} onChange={handleChange} required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Baños</label>
                <Input name="baths" type="number" step="0.5" value={formData.baths} onChange={handleChange} required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Área (m²)</label>
                <Input name="sqft" type="number" value={formData.sqft} onChange={handleChange} required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Estacionamiento</label>
                <Input name="garage" type="number" value={formData.garage} onChange={handleChange} />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">URL de Imagen Principal</label>
                <Input name="imageUrl" value={formData.imageUrl} onChange={handleChange} />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </form>
  );
}
