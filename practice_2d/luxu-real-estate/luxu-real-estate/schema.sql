-- Schema SQL para Luxu Real Estate (Ejecutar en Supabase -> SQL Editor)

-- 1. Crear tabla de perfiles (profiles)
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT,
  email TEXT,
  avatar_url TEXT,
  role TEXT DEFAULT 'Client',
  status TEXT DEFAULT 'Active',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Crear tabla de propiedades (properties)
CREATE TABLE IF NOT EXISTS public.properties (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  price NUMERIC NOT NULL,
  price_period TEXT DEFAULT 'total',
  images TEXT[] NOT NULL,
  address TEXT NOT NULL,
  city TEXT NOT NULL,
  neighborhood TEXT,
  latitude NUMERIC,
  longitude NUMERIC,
  amenities TEXT[],
  bedrooms INT,
  bathrooms NUMERIC,
  garage INT,
  sqft NUMERIC,
  property_type TEXT,
  listing_status TEXT DEFAULT 'For Sale',
  user_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  status TEXT DEFAULT 'active',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Crear tabla de favoritos (user_favorites)
CREATE TABLE IF NOT EXISTS public.user_favorites (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  property_id UUID REFERENCES public.properties(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Crear tabla de citas / visitas (bookings)
CREATE TABLE IF NOT EXISTS public.bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  property_id UUID REFERENCES public.properties(id) ON DELETE CASCADE,
  booking_date_time TIMESTAMPTZ NOT NULL,
  notes TEXT,
  status TEXT DEFAULT 'Pending',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. Habilitar lecturas y escrituras públicas para desarrollo
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.properties ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_favorites ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access on profiles" ON public.profiles FOR SELECT USING (true);
CREATE POLICY "Allow public insert access on profiles" ON public.profiles FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public update access on profiles" ON public.profiles FOR UPDATE USING (true);

CREATE POLICY "Allow public read access on properties" ON public.properties FOR SELECT USING (true);
CREATE POLICY "Allow public insert access on properties" ON public.properties FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public update access on properties" ON public.properties FOR UPDATE USING (true);

CREATE POLICY "Allow public read access on user_favorites" ON public.user_favorites FOR SELECT USING (true);
CREATE POLICY "Allow public insert access on user_favorites" ON public.user_favorites FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public read access on bookings" ON public.bookings FOR SELECT USING (true);
CREATE POLICY "Allow public insert access on bookings" ON public.bookings FOR INSERT WITH CHECK (true);
