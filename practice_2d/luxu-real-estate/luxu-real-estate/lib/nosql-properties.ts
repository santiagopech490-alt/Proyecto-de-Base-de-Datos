import { Property } from '@/types/property';

const imagePool = [
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&auto=format&fit=crop'
];

const cities = ["Beverly Hills, CA", "Malibu, CA", "Miami, FL", "New York, NY", "Austin, TX", "Seattle, WA", "Aspen, CO", "Chicago, IL", "San Francisco, CA", "Scottsdale, AZ"];
const propertyTypes = ["Casa", "Departamento", "Villa", "Penthouse", "Residencia de Playa"];

export function getNoSQLCatalogProperties(): Property[] {
  const catalog: Property[] = [];
  let count = 1;

  for (const city of cities) {
    for (const ptype of propertyTypes) {
      for (let i = 1; i <= 2; i++) {
        const id = `nosql-${count}`;
        const cityShort = city.split(',')[0];
        const slug = `${ptype.toLowerCase()}-${cityShort.toLowerCase().replace(/\s+/g, '-')}-${count}`;
        const title = `${ptype} de Lujo ${cityShort} #${count}`;
        const isRent = (count % 3 === 0);
        const price = isRent ? (2500 + (count * 150)) : (450000 + (count * 185000));
        const status = isRent ? 'FOR RENT' : (count % 2 === 0 ? 'FOR SALE' : 'ACTIVE');
        const beds = (count % 5) + 1;
        const baths = Number(((count % 4) + 1.5).toFixed(1));
        const sqft = 800 + (count * 45);
        const image = imagePool[(count - 1) % imagePool.length];

        catalog.push({
          id,
          slug,
          title,
          price,
          location: city,
          address: `${100 + count * 12} Luxury Blvd, ${cityShort}`,
          beds,
          baths,
          sqft,
          garage: (count % 3) + 1,
          description: `Exclusiva residencia de lujo ubicada en ${city} con acabados de primera calidad y diseño contemporáneo.`,
          amenities: ['Alberca Privada', 'Casa Inteligente', 'Vista al Mar', 'Gimnasio Privado', 'Cava de Vinos'],
          images: [image],
          agentId: 'user123',
          status
        });
        count++;
      }
    }
  }

  return catalog;
}
