"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { HeroSection } from "@/components/hero-section";
import { PropertyCard } from "@/components/property-card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { usePropertyFilters } from "@/lib/hooks/usePropertyFilters";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const featuredProperties = [
  {
    id: "1",
    slug: "modern-villa-beverly-hills",
    title: "The Glass Pavilion",
    location: "Beverly Hills, California",
    price: "$5,250,000",
    beds: 5,
    baths: 4.5,
    area: "4,200 m²",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCra-FKp81t0_OM8bWD55m2o9OOSnR_v7D0UilyExMImxyIcr9tIMZ2Py3HcC0ra_MtSsBkduMcwxUNKI9_iSXFFr_YRON1SF9hNM3fcYy-uG7N7uusL0Z367WINi1V7_GwfNQx-gsbUqLtzVi4ivFyqFQGb4qBs79bALeSFb6i3_ZnJnI1VVrN-VeZYHjfYyQI5C6zy90N3uxWZpwzIBhNoUDKKQjQ8EOEYPoyPTzhnh6b6AS3dkkFJ8t4xSDC6qjhMrQUoUPnAeM",
    isExclusive: true,
  },
  {
    id: "2",
    slug: "coastal-retreat-malibu",
    title: "Azure Heights Penthouse",
    location: "Downtown, Vancouver",
    price: "$3,800,000",
    beds: 3,
    baths: 3,
    area: "2,100 m²",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDurAGHzg_fpQxFal-obkFVy1Q3WLPdueAQpz0itcQiRV-WfvulnBEDJbNeV8J06q4mX7PTtXYVJjX4-mHVr_khZLZxQ_s8f6fruGqzeqALyMu8wEHRK1EsOs9f4_jPmS7FxcdzrDkR88Wz0GjaPLXkTZRoJQfur59rxYRLi-WYcW-VU_gKS39CPLOMlftvqGvW0IOk5tXgst5mJ4WQM-ICN4vkdel9ido9YFUQga0OI10i6NSe5W4owt33-2YRi_b_ltdZW2QZC5s",
    isNew: true,
  },
];

const marketProperties = [
  {
    id: "3",
    slug: "modern-family-home",
    title: "Residencia Familiar Moderna",
    location: "123 Pine St, Seattle",
    price: "$850,000",
    beds: 3,
    baths: 2,
    area: "120 m²",
    status: "FOR SALE",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDuQ9M7U6euA6_cXmYuXnej-N5IuawAW8ds-4G1mzfqmiBc13qXsPhf9_j_zTB8gfEunrBHo8xMsxYwCw_pl8fsxbxRkmyvLR1N9Tiye5ZJG7fwlLn9MwyBanXYhE0emGwp59es1FEyQTRQbmXLUKO74Yj34ZHqrqIkOtMKhP8CmRFvfoHT5LAe10105vUhKNkxIBvtt530nfLigSUTemOOcJMVNmsgactntRJUwOBU_TZzND7BYtDklr8uZcNYlQOK5U74-ufIf-E",
  },
  {
    id: "4",
    slug: "urban-loft",
    title: "Urban Loft Exclusivo",
    location: "456 Elm Ave, Portland",
    price: "$3,200/mes",
    beds: 1,
    baths: 1,
    area: "85 m²",
    status: "FOR RENT",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB4zNatD3vePhIZAi6OHHJKmamYSgeBNSKjEt32tvkkf4s6aBXCF8R4LNfDfPa9leA0t6N1OKOcP358WwZrnosbCBxSM7EaY2_P7qkx3MinRgmHQn7RvleNTwy8cLigMoR3iv0u83chBVbZYI6BcNMcqv80W-l1pIUgIWZcDIXEqtUatrsojSGfM0lTNDZpkBntBUkRY6NB4ZUymYNYvTHXKbO8NZ6N6uoyuuHqcaRWKzHCNXkOR3p-_EVFAHR8QwijIY_m1mefPZ4",
  },
  {
    id: "5",
    slug: "highland-retreat",
    title: "Refugio Highland",
    location: "789 Mountain Rd, Bend",
    price: "$620,000",
    beds: 2,
    baths: 2,
    area: "98 m²",
    status: "FOR SALE",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuARQWC19e7mleUpjb8CWLztEv_svJeRFOaC2i-9r9GctFuX5Barzhfai9wNM1WW8bcGlqdFM32d3KPf7SItom5ijdHOz5rGGQPeT7PlWs8-y9LkfcsHLQqsLxalhxP94XJo76_mAMp7T2dVj3hPKHNzTDLLiS6ujSdSsyo3onxQthp4ZkVE8op92gyTLUUucaGaxO8vJvyhH3HuWB07EPqT1WsW0lr9Of5lUPonjG9eiqE1XiJXTqzXUZQt5JorfPwCO1MioZA_Zro",
  },
  {
    id: "6",
    slug: "sea-view-penthouse",
    title: "Penthouse Vista al Mar",
    location: "321 Ocean Dr, Miami",
    price: "$4,500/mes",
    beds: 3,
    baths: 3,
    area: "180 m²",
    status: "FOR RENT",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGq4Phm0uDzCnjHAsnWpYTBVpOds_M6iOsJuRQQA5eUZHkztGgtc7eh_OE6wBeyW1-iZh7yyhROnvvmqkAZ9tyAWFGXk0FG52zU4kZ_EDLA0U0cRszy7byNXTeWe0_hS53SYmtCTEV8Y1AM-WxiIC38UMa15QwFDjXtCGQOxoh35K0Ol_70vfsxm0VqDbaWkr8tcEbLTLy0NXH_GcpGK4lAXizgxYOIlFWGyau-4OIfPZRpjCBDbz_qu3VlN201UUJGiuM9ajVd-U",
  },
  {
    id: "7",
    slug: "central-studio",
    title: "Estudio Central de Lujo",
    location: "555 Main St, Chicago",
    price: "$550,000",
    beds: 1,
    baths: 1,
    area: "50 m²",
    status: "FOR SALE",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA1w-Hb1289NqZKon3VK8bpmMiCDYYiAMT5egzTINo9m9wSZRHv-k-1IGTVoL1NT8YeZXJHa87JPNDIPrtrbP7jChHq0ypXF90uByhC6VA9O788_B4FY8JVg4chbWN9bcrn9-9FvVvfZX8Aj60Iqg_C8CsCA9DEnJqi2rJvzmK5UP5z-9XRTRjBneAPCa8iGgGWBD9yYKsziN6vn0ePBDGo3inieQtmbr46W31p6UfQ649XRxTm7ygOY2J-jxW1r0qWs8i97KGpkTE",
  },
  {
    id: "8",
    slug: "garden-villa",
    title: "Villa con Jardín Privado",
    location: "999 Oak Ln, Austin",
    price: "$2,800/mes",
    beds: 2,
    baths: 2,
    area: "110 m²",
    status: "FOR RENT",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfGXdY0g51ojSg0GMeTW9ndLY3mpKK3oMtWxo2nwd_dwi1pgn1Boi_ovaDGIFhUA7nwu3WdBch8ZuHxoHu3QfgM5ceAsp8pglRVyCROWNcy9zeDNP2wqLoevyKGcaEyFYHYpIx2KK46nLWthnHiHugmkKw48kJsL8IjMO1bL3T1Zwt8bvQDTTUHTgB3GqZ2RU2asRzF1jVg0rLw3LWXXTq0YF1CsbhlWpYOuCEpH5bB8zkBlbKXR4At_M46AL8rJqn5c6BrPD5PP8",
  },
];

function PropertyListWrapper() {
  const searchParams = useSearchParams();
  return <PropertyList key={searchParams.toString()} />;
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FBFDFB]">
      <Suspense fallback={<div className="p-8 text-center text-slate-400">Cargando filtros...</div>}>
        <HeroSection />
      </Suspense>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-20">
        <Suspense fallback={<div className="p-8 text-center text-slate-400">Cargando propiedades...</div>}>
          <PropertyListWrapper />
        </Suspense>
      </div>
    </div>
  );
}

function PropertyList() {
  const { filters } = usePropertyFilters();
  const { language } = useLanguage();
  const [itemsToShow, setItemsToShow] = useState(4);

  const filteredMarketProperties = marketProperties.filter((prop) => {
    if (filters.location && !prop.location.toLowerCase().includes(filters.location.toLowerCase()) && !prop.title.toLowerCase().includes(filters.location.toLowerCase())) return false;
    if (filters.type && prop.status?.toLowerCase() !== filters.type.toLowerCase()) return false;
    return true;
  });

  const displayedProperties = filteredMarketProperties.slice(0, itemsToShow);

  return (
    <>
      {/* Featured Collections */}
      <section>
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-[#19322F]">
              {language === 'es' ? 'Colecciones Exclusivas' : 'Featured Collections'}
            </h2>
            <p className="text-[#5C706D] mt-1 text-sm">
              {language === 'es' ? 'Propiedades seleccionadas para los gustos más exigentes.' : 'Curated properties for the discerning eye.'}
            </p>
          </div>
          <Link href="/properties">
            <Button variant="link" className="text-[#006655] hover:opacity-70 flex items-center gap-1 p-0 h-auto font-semibold cursor-pointer">
              {language === 'es' ? 'Ver todas' : 'View all'} <ChevronRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredProperties.map((prop) => (
            <PropertyCard key={prop.id} {...prop} variant="featured" />
          ))}
        </div>
      </section>

      {/* New in Market */}
      <section>
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-[#19322F]">
              {language === 'es' ? 'Nuevas en el Mercado' : 'New in Market'}
            </h2>
            <p className="text-[#5C706D] mt-1 text-sm">
              {language === 'es' ? 'Nuevas oportunidades agregadas esta semana.' : 'Fresh opportunities added this week.'}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayedProperties.map((prop) => (
            <PropertyCard key={prop.id} {...prop} />
          ))}
        </div>
        {itemsToShow < filteredMarketProperties.length && (
          <div className="mt-12 text-center">
            <Button 
              onClick={() => setItemsToShow(itemsToShow + 4)}
              variant="outline" 
              className="px-8 py-6 bg-white border-slate-200 hover:border-[#006655] hover:text-[#006655] text-[#19322F] font-semibold rounded-xl transition-all hover:shadow-md cursor-pointer"
            >
              {language === 'es' ? 'Cargar más propiedades' : 'Load more properties'}
            </Button>
          </div>
        )}
      </section>
    </>
  );
}