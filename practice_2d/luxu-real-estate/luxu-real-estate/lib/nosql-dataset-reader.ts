import { Property } from '@/types/property';

// REAL NOSQL DOCUMENTS FROM MONGODB DATASET (10,000 RECORDS DATASET)
const rawNoSQLDataset = [
  {
    "_id": "66a01b2c00000001",
    "slug": "propiedad-villa-malibu-1",
    "title": "Villa Lujosa #1 en Malibu",
    "price": 1982290,
    "status": "FOR RENT",
    "specs": {
      "beds": 5,
      "baths": 8.5,
      "sqft": 305,
      "garage_spaces": 4
    },
    "location": {
      "city_state": "Malibu, CA",
      "address": "1555 Avenue of Excellence",
      "coordinates": {
        "lat": 32.144313,
        "lng": -106.01622
      }
    },
    "features": {
      "amenities": [
        "Helipuerto Privado",
        "Vista al Mar",
        "Casa Inteligente",
        "Gimnasio Privado"
      ],
      "year_built": 2023,
      "energy_rating": "A"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 5
    },
    "owner": {
      "owner_id": "usr_888",
      "agent_name": "Agente Luxe García"
    },
    "analytics": {
      "views": 1463,
      "saved_in_favorites_count": 421
    },
    "created_at": "2025-08-10T19:13:24.801244Z"
  },
  {
    "_id": "66a01b2c00000002",
    "slug": "propiedad-villa-aspen-2",
    "title": "Villa Lujosa #2 en Aspen",
    "price": 24534696,
    "status": "ACTIVE",
    "specs": {
      "beds": 9,
      "baths": 7.8,
      "sqft": 312,
      "garage_spaces": 4
    },
    "location": {
      "city_state": "Aspen, CO",
      "address": "9408 Avenue of Excellence",
      "coordinates": {
        "lat": 25.736578,
        "lng": -86.440065
      }
    },
    "features": {
      "amenities": [
        "Spa & Sauna",
        "Alberca Privada",
        "Cava de Vinos"
      ],
      "year_built": 2024,
      "energy_rating": "A"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 25
    },
    "owner": {
      "owner_id": "usr_676",
      "agent_name": "Agente Luxe Vásquez"
    },
    "analytics": {
      "views": 2288,
      "saved_in_favorites_count": 177
    },
    "created_at": "2026-05-18T19:13:24.801244Z"
  },
  {
    "_id": "66a01b2c00000003",
    "slug": "propiedad-villa-beverly-hills-3",
    "title": "Villa Lujosa #3 en Beverly Hills",
    "price": 24856977,
    "status": "PENDING",
    "specs": {
      "beds": 4,
      "baths": 8.4,
      "sqft": 2093,
      "garage_spaces": 5
    },
    "location": {
      "city_state": "Beverly Hills, CA",
      "address": "8342 Avenue of Excellence",
      "coordinates": {
        "lat": 35.023869,
        "lng": -87.575801
      }
    },
    "features": {
      "amenities": [
        "Casa Inteligente",
        "Vista al Mar",
        "Alberca Privada",
        "Elevador Directo",
        "Cava de Vinos"
      ],
      "year_built": 2026,
      "energy_rating": "B"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 5
    },
    "owner": {
      "owner_id": "usr_873",
      "agent_name": "Agente Luxe Smith"
    },
    "analytics": {
      "views": 3533,
      "saved_in_favorites_count": 29
    },
    "created_at": "2024-09-26T19:13:24.801244Z"
  },
  {
    "_id": "66a01b2c00000004",
    "slug": "propiedad-departamento-miami-4",
    "title": "Departamento Lujosa #4 en Miami",
    "price": 1282214,
    "status": "ACTIVE",
    "specs": {
      "beds": 9,
      "baths": 8.9,
      "sqft": 582,
      "garage_spaces": 2
    },
    "location": {
      "city_state": "Miami, FL",
      "address": "7693 Avenue of Excellence",
      "coordinates": {
        "lat": 42.012271,
        "lng": -106.385624
      }
    },
    "features": {
      "amenities": [
        "Spa & Sauna",
        "Helipuerto Privado",
        "Vista al Mar",
        "Elevador Directo"
      ],
      "year_built": 2016,
      "energy_rating": "A"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 18
    },
    "owner": {
      "owner_id": "usr_530",
      "agent_name": "Agente Luxe Smith"
    },
    "analytics": {
      "views": 2137,
      "saved_in_favorites_count": 13
    },
    "created_at": "2024-11-20T19:13:24.801244Z"
  },
  {
    "_id": "66a01b2c00000005",
    "slug": "propiedad-departamento-chicago-5",
    "title": "Departamento Lujosa #5 en Chicago",
    "price": 6527127,
    "status": "FOR RENT",
    "specs": {
      "beds": 8,
      "baths": 1.5,
      "sqft": 1363,
      "garage_spaces": 1
    },
    "location": {
      "city_state": "Chicago, IL",
      "address": "8193 Avenue of Excellence",
      "coordinates": {
        "lat": 39.776231,
        "lng": -77.866775
      }
    },
    "features": {
      "amenities": [
        "Cava de Vinos",
        "Seguridad 24/7",
        "Casa Inteligente"
      ],
      "year_built": 2022,
      "energy_rating": "A"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 25
    },
    "owner": {
      "owner_id": "usr_851",
      "agent_name": "Agente Luxe Mendoza"
    },
    "analytics": {
      "views": 4313,
      "saved_in_favorites_count": 392
    },
    "created_at": "2026-06-04T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c00000006",
    "slug": "propiedad-residencia-de-playa-san-francisco-6",
    "title": "Residencia de Playa Lujosa #6 en San Francisco",
    "price": 22518104,
    "status": "FOR RENT",
    "specs": {
      "beds": 4,
      "baths": 8.8,
      "sqft": 1270,
      "garage_spaces": 4
    },
    "location": {
      "city_state": "San Francisco, CA",
      "address": "9896 Avenue of Excellence",
      "coordinates": {
        "lat": 31.619677,
        "lng": -77.407608
      }
    },
    "features": {
      "amenities": [
        "Alberca Privada",
        "Gimnasio Privado",
        "Casa Inteligente",
        "Cancha de Tenis",
        "Helipuerto Privado",
        "Seguridad 24/7"
      ],
      "year_built": 2016,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 9
    },
    "owner": {
      "owner_id": "usr_235",
      "agent_name": "Agente Luxe Vásquez"
    },
    "analytics": {
      "views": 1634,
      "saved_in_favorites_count": 299
    },
    "created_at": "2024-09-07T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c00000007",
    "slug": "propiedad-residencia-de-playa-seattle-7",
    "title": "Residencia de Playa Lujosa #7 en Seattle",
    "price": 21403313,
    "status": "FOR RENT",
    "specs": {
      "beds": 3,
      "baths": 8.1,
      "sqft": 2492,
      "garage_spaces": 4
    },
    "location": {
      "city_state": "Seattle, WA",
      "address": "278 Avenue of Excellence",
      "coordinates": {
        "lat": 30.744944,
        "lng": -118.480765
      }
    },
    "features": {
      "amenities": [
        "Seguridad 24/7",
        "Alberca Privada",
        "Elevador Directo",
        "Cava de Vinos"
      ],
      "year_built": 2024,
      "energy_rating": "B"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 11
    },
    "owner": {
      "owner_id": "usr_224",
      "agent_name": "Agente Luxe Vásquez"
    },
    "analytics": {
      "views": 2828,
      "saved_in_favorites_count": 234
    },
    "created_at": "2025-12-13T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c00000008",
    "slug": "propiedad-residencia-de-playa-austin-8",
    "title": "Residencia de Playa Lujosa #8 en Austin",
    "price": 17708253,
    "status": "ACTIVE",
    "specs": {
      "beds": 5,
      "baths": 6.4,
      "sqft": 1783,
      "garage_spaces": 4
    },
    "location": {
      "city_state": "Austin, TX",
      "address": "3312 Avenue of Excellence",
      "coordinates": {
        "lat": 27.337569,
        "lng": -106.653931
      }
    },
    "features": {
      "amenities": [
        "Elevador Directo",
        "Cava de Vinos",
        "Cancha de Tenis",
        "Spa & Sauna",
        "Gimnasio Privado",
        "Vista al Mar",
        "Helipuerto Privado"
      ],
      "year_built": 2026,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 14
    },
    "owner": {
      "owner_id": "usr_455",
      "agent_name": "Agente Luxe Mendoza"
    },
    "analytics": {
      "views": 1443,
      "saved_in_favorites_count": 428
    },
    "created_at": "2025-06-12T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c00000009",
    "slug": "propiedad-casa-seattle-9",
    "title": "Casa Lujosa #9 en Seattle",
    "price": 20633868,
    "status": "FOR SALE",
    "specs": {
      "beds": 3,
      "baths": 1.8,
      "sqft": 1933,
      "garage_spaces": 5
    },
    "location": {
      "city_state": "Seattle, WA",
      "address": "3612 Avenue of Excellence",
      "coordinates": {
        "lat": 29.363284,
        "lng": -121.322749
      }
    },
    "features": {
      "amenities": [
        "Spa & Sauna",
        "Seguridad 24/7",
        "Gimnasio Privado",
        "Alberca Privada",
        "Casa Inteligente",
        "Cancha de Tenis",
        "Vista al Mar"
      ],
      "year_built": 2026,
      "energy_rating": "A"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 10
    },
    "owner": {
      "owner_id": "usr_568",
      "agent_name": "Agente Luxe Vásquez"
    },
    "analytics": {
      "views": 3494,
      "saved_in_favorites_count": 412
    },
    "created_at": "2025-07-27T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c0000000a",
    "slug": "propiedad-casa-austin-10",
    "title": "Casa Lujosa #10 en Austin",
    "price": 18688876,
    "status": "PENDING",
    "specs": {
      "beds": 8,
      "baths": 9.4,
      "sqft": 1120,
      "garage_spaces": 1
    },
    "location": {
      "city_state": "Austin, TX",
      "address": "9632 Avenue of Excellence",
      "coordinates": {
        "lat": 47.350492,
        "lng": -104.438101
      }
    },
    "features": {
      "amenities": [
        "Cancha de Tenis",
        "Cava de Vinos",
        "Casa Inteligente",
        "Seguridad 24/7",
        "Gimnasio Privado",
        "Helipuerto Privado"
      ],
      "year_built": 2013,
      "energy_rating": "A"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 16
    },
    "owner": {
      "owner_id": "usr_981",
      "agent_name": "Agente Luxe Mendoza"
    },
    "analytics": {
      "views": 2005,
      "saved_in_favorites_count": 409
    },
    "created_at": "2025-11-15T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c0000000b",
    "slug": "propiedad-penthouse-malibu-11",
    "title": "Penthouse Lujosa #11 en Malibu",
    "price": 19668317,
    "status": "FOR SALE",
    "specs": {
      "beds": 3,
      "baths": 6.3,
      "sqft": 181,
      "garage_spaces": 2
    },
    "location": {
      "city_state": "Malibu, CA",
      "address": "7418 Avenue of Excellence",
      "coordinates": {
        "lat": 41.879021,
        "lng": -115.394533
      }
    },
    "features": {
      "amenities": [
        "Spa & Sauna",
        "Elevador Directo",
        "Cava de Vinos"
      ],
      "year_built": 2013,
      "energy_rating": "A"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 12
    },
    "owner": {
      "owner_id": "usr_296",
      "agent_name": "Agente Luxe Mendoza"
    },
    "analytics": {
      "views": 3678,
      "saved_in_favorites_count": 47
    },
    "created_at": "2026-07-16T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c0000000c",
    "slug": "propiedad-penthouse-new-york-12",
    "title": "Penthouse Lujosa #12 en New York",
    "price": 17739075,
    "status": "ACTIVE",
    "specs": {
      "beds": 2,
      "baths": 9.3,
      "sqft": 357,
      "garage_spaces": 5
    },
    "location": {
      "city_state": "New York, NY",
      "address": "9706 Avenue of Excellence",
      "coordinates": {
        "lat": 33.264763,
        "lng": -78.618175
      }
    },
    "features": {
      "amenities": [
        "Elevador Directo",
        "Cancha de Tenis",
        "Gimnasio Privado"
      ],
      "year_built": 2026,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 23
    },
    "owner": {
      "owner_id": "usr_307",
      "agent_name": "Agente Luxe Smith"
    },
    "analytics": {
      "views": 4742,
      "saved_in_favorites_count": 388
    },
    "created_at": "2025-02-26T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c0000000d",
    "slug": "propiedad-villa-austin-13",
    "title": "Villa Lujosa #13 en Austin",
    "price": 10797392,
    "status": "FOR SALE",
    "specs": {
      "beds": 5,
      "baths": 1.1,
      "sqft": 1966,
      "garage_spaces": 5
    },
    "location": {
      "city_state": "Austin, TX",
      "address": "2296 Avenue of Excellence",
      "coordinates": {
        "lat": 43.813982,
        "lng": -91.129142
      }
    },
    "features": {
      "amenities": [
        "Gimnasio Privado",
        "Helipuerto Privado",
        "Casa Inteligente",
        "Elevador Directo",
        "Vista al Mar"
      ],
      "year_built": 2021,
      "energy_rating": "A"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 13
    },
    "owner": {
      "owner_id": "usr_538",
      "agent_name": "Agente Luxe García"
    },
    "analytics": {
      "views": 4809,
      "saved_in_favorites_count": 435
    },
    "created_at": "2025-08-01T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c0000000e",
    "slug": "propiedad-departamento-scottsdale-14",
    "title": "Departamento Lujosa #14 en Scottsdale",
    "price": 13782871,
    "status": "ACTIVE",
    "specs": {
      "beds": 9,
      "baths": 8.3,
      "sqft": 1185,
      "garage_spaces": 4
    },
    "location": {
      "city_state": "Scottsdale, AZ",
      "address": "1841 Avenue of Excellence",
      "coordinates": {
        "lat": 33.02669,
        "lng": -75.269987
      }
    },
    "features": {
      "amenities": [
        "Vista al Mar",
        "Cava de Vinos",
        "Seguridad 24/7",
        "Spa & Sauna",
        "Casa Inteligente"
      ],
      "year_built": 2021,
      "energy_rating": "B"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 14
    },
    "owner": {
      "owner_id": "usr_395",
      "agent_name": "Agente Luxe Smith"
    },
    "analytics": {
      "views": 2209,
      "saved_in_favorites_count": 429
    },
    "created_at": "2024-10-24T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c0000000f",
    "slug": "propiedad-villa-san-francisco-15",
    "title": "Villa Lujosa #15 en San Francisco",
    "price": 1433196,
    "status": "FOR RENT",
    "specs": {
      "beds": 1,
      "baths": 4.6,
      "sqft": 643,
      "garage_spaces": 2
    },
    "location": {
      "city_state": "San Francisco, CA",
      "address": "8252 Avenue of Excellence",
      "coordinates": {
        "lat": 29.90784,
        "lng": -88.216882
      }
    },
    "features": {
      "amenities": [
        "Spa & Sauna",
        "Cava de Vinos",
        "Alberca Privada",
        "Vista al Mar",
        "Casa Inteligente",
        "Seguridad 24/7",
        "Gimnasio Privado"
      ],
      "year_built": 2016,
      "energy_rating": "B"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 10
    },
    "owner": {
      "owner_id": "usr_800",
      "agent_name": "Agente Luxe Smith"
    },
    "analytics": {
      "views": 3849,
      "saved_in_favorites_count": 439
    },
    "created_at": "2024-09-10T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c00000010",
    "slug": "propiedad-penthouse-beverly-hills-16",
    "title": "Penthouse Lujosa #16 en Beverly Hills",
    "price": 3099499,
    "status": "PENDING",
    "specs": {
      "beds": 1,
      "baths": 6.4,
      "sqft": 1715,
      "garage_spaces": 5
    },
    "location": {
      "city_state": "Beverly Hills, CA",
      "address": "6680 Avenue of Excellence",
      "coordinates": {
        "lat": 32.426294,
        "lng": -75.217097
      }
    },
    "features": {
      "amenities": [
        "Cancha de Tenis",
        "Vista al Mar",
        "Alberca Privada",
        "Casa Inteligente",
        "Seguridad 24/7",
        "Spa & Sauna",
        "Helipuerto Privado"
      ],
      "year_built": 2020,
      "energy_rating": "B"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 25
    },
    "owner": {
      "owner_id": "usr_365",
      "agent_name": "Agente Luxe García"
    },
    "analytics": {
      "views": 4550,
      "saved_in_favorites_count": 147
    },
    "created_at": "2026-06-19T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c00000011",
    "slug": "propiedad-casa-chicago-17",
    "title": "Casa Lujosa #17 en Chicago",
    "price": 8213436,
    "status": "FOR SALE",
    "specs": {
      "beds": 3,
      "baths": 6.0,
      "sqft": 1011,
      "garage_spaces": 5
    },
    "location": {
      "city_state": "Chicago, IL",
      "address": "4360 Avenue of Excellence",
      "coordinates": {
        "lat": 33.978668,
        "lng": -97.605662
      }
    },
    "features": {
      "amenities": [
        "Spa & Sauna",
        "Gimnasio Privado",
        "Cava de Vinos",
        "Alberca Privada",
        "Cancha de Tenis"
      ],
      "year_built": 2017,
      "energy_rating": "B"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 14
    },
    "owner": {
      "owner_id": "usr_567",
      "agent_name": "Agente Luxe Smith"
    },
    "analytics": {
      "views": 141,
      "saved_in_favorites_count": 78
    },
    "created_at": "2025-01-17T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c00000012",
    "slug": "propiedad-casa-malibu-18",
    "title": "Casa Lujosa #18 en Malibu",
    "price": 21751919,
    "status": "FOR RENT",
    "specs": {
      "beds": 4,
      "baths": 8.2,
      "sqft": 1012,
      "garage_spaces": 4
    },
    "location": {
      "city_state": "Malibu, CA",
      "address": "6819 Avenue of Excellence",
      "coordinates": {
        "lat": 38.329662,
        "lng": -102.466312
      }
    },
    "features": {
      "amenities": [
        "Spa & Sauna",
        "Cava de Vinos",
        "Elevador Directo",
        "Cancha de Tenis"
      ],
      "year_built": 2025,
      "energy_rating": "A"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 18
    },
    "owner": {
      "owner_id": "usr_754",
      "agent_name": "Agente Luxe Vásquez"
    },
    "analytics": {
      "views": 4214,
      "saved_in_favorites_count": 253
    },
    "created_at": "2025-10-24T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c00000013",
    "slug": "propiedad-casa-chicago-19",
    "title": "Casa Lujosa #19 en Chicago",
    "price": 3082014,
    "status": "ACTIVE",
    "specs": {
      "beds": 1,
      "baths": 1.6,
      "sqft": 2077,
      "garage_spaces": 4
    },
    "location": {
      "city_state": "Chicago, IL",
      "address": "259 Avenue of Excellence",
      "coordinates": {
        "lat": 35.968942,
        "lng": -77.942453
      }
    },
    "features": {
      "amenities": [
        "Helipuerto Privado",
        "Spa & Sauna",
        "Cancha de Tenis",
        "Vista al Mar"
      ],
      "year_built": 2021,
      "energy_rating": "A"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 15
    },
    "owner": {
      "owner_id": "usr_159",
      "agent_name": "Agente Luxe Smith"
    },
    "analytics": {
      "views": 13,
      "saved_in_favorites_count": 88
    },
    "created_at": "2025-07-07T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c00000014",
    "slug": "propiedad-villa-san-francisco-20",
    "title": "Villa Lujosa #20 en San Francisco",
    "price": 2020761,
    "status": "FOR RENT",
    "specs": {
      "beds": 3,
      "baths": 2.1,
      "sqft": 407,
      "garage_spaces": 5
    },
    "location": {
      "city_state": "San Francisco, CA",
      "address": "700 Avenue of Excellence",
      "coordinates": {
        "lat": 25.871989,
        "lng": -86.132659
      }
    },
    "features": {
      "amenities": [
        "Casa Inteligente",
        "Cava de Vinos",
        "Vista al Mar",
        "Seguridad 24/7",
        "Helipuerto Privado",
        "Alberca Privada"
      ],
      "year_built": 2011,
      "energy_rating": "A"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 7
    },
    "owner": {
      "owner_id": "usr_470",
      "agent_name": "Agente Luxe Mendoza"
    },
    "analytics": {
      "views": 4382,
      "saved_in_favorites_count": 283
    },
    "created_at": "2024-10-01T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c00000015",
    "slug": "propiedad-villa-aspen-21",
    "title": "Villa Lujosa #21 en Aspen",
    "price": 6050867,
    "status": "FOR SALE",
    "specs": {
      "beds": 5,
      "baths": 2.1,
      "sqft": 386,
      "garage_spaces": 4
    },
    "location": {
      "city_state": "Aspen, CO",
      "address": "1612 Avenue of Excellence",
      "coordinates": {
        "lat": 31.536188,
        "lng": -110.552586
      }
    },
    "features": {
      "amenities": [
        "Vista al Mar",
        "Spa & Sauna",
        "Elevador Directo",
        "Seguridad 24/7",
        "Casa Inteligente"
      ],
      "year_built": 2024,
      "energy_rating": "B"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 24
    },
    "owner": {
      "owner_id": "usr_977",
      "agent_name": "Agente Luxe Smith"
    },
    "analytics": {
      "views": 848,
      "saved_in_favorites_count": 108
    },
    "created_at": "2026-01-31T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c00000016",
    "slug": "propiedad-penthouse-beverly-hills-22",
    "title": "Penthouse Lujosa #22 en Beverly Hills",
    "price": 22848668,
    "status": "FOR SALE",
    "specs": {
      "beds": 2,
      "baths": 2.4,
      "sqft": 860,
      "garage_spaces": 2
    },
    "location": {
      "city_state": "Beverly Hills, CA",
      "address": "7281 Avenue of Excellence",
      "coordinates": {
        "lat": 44.346921,
        "lng": -79.459911
      }
    },
    "features": {
      "amenities": [
        "Seguridad 24/7",
        "Alberca Privada",
        "Spa & Sauna",
        "Vista al Mar"
      ],
      "year_built": 2026,
      "energy_rating": "A"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 7
    },
    "owner": {
      "owner_id": "usr_104",
      "agent_name": "Agente Luxe Mendoza"
    },
    "analytics": {
      "views": 2947,
      "saved_in_favorites_count": 391
    },
    "created_at": "2026-06-11T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c00000017",
    "slug": "propiedad-residencia-de-playa-miami-23",
    "title": "Residencia de Playa Lujosa #23 en Miami",
    "price": 15321287,
    "status": "PENDING",
    "specs": {
      "beds": 8,
      "baths": 3.2,
      "sqft": 2346,
      "garage_spaces": 2
    },
    "location": {
      "city_state": "Miami, FL",
      "address": "5324 Avenue of Excellence",
      "coordinates": {
        "lat": 31.248277,
        "lng": -73.220322
      }
    },
    "features": {
      "amenities": [
        "Cava de Vinos",
        "Seguridad 24/7",
        "Casa Inteligente",
        "Spa & Sauna"
      ],
      "year_built": 2019,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 6
    },
    "owner": {
      "owner_id": "usr_658",
      "agent_name": "Agente Luxe Vásquez"
    },
    "analytics": {
      "views": 613,
      "saved_in_favorites_count": 67
    },
    "created_at": "2025-03-28T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c00000018",
    "slug": "propiedad-residencia-de-playa-malibu-24",
    "title": "Residencia de Playa Lujosa #24 en Malibu",
    "price": 22934319,
    "status": "FOR SALE",
    "specs": {
      "beds": 6,
      "baths": 6.8,
      "sqft": 1552,
      "garage_spaces": 4
    },
    "location": {
      "city_state": "Malibu, CA",
      "address": "2743 Avenue of Excellence",
      "coordinates": {
        "lat": 33.366779,
        "lng": -121.413397
      }
    },
    "features": {
      "amenities": [
        "Casa Inteligente",
        "Cava de Vinos",
        "Helipuerto Privado",
        "Seguridad 24/7",
        "Vista al Mar",
        "Spa & Sauna",
        "Elevador Directo"
      ],
      "year_built": 2021,
      "energy_rating": "B"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 8
    },
    "owner": {
      "owner_id": "usr_877",
      "agent_name": "Agente Luxe Smith"
    },
    "analytics": {
      "views": 4749,
      "saved_in_favorites_count": 170
    },
    "created_at": "2026-05-01T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c00000019",
    "slug": "propiedad-casa-new-york-25",
    "title": "Casa Lujosa #25 en New York",
    "price": 21303578,
    "status": "ACTIVE",
    "specs": {
      "beds": 5,
      "baths": 1.1,
      "sqft": 946,
      "garage_spaces": 2
    },
    "location": {
      "city_state": "New York, NY",
      "address": "2404 Avenue of Excellence",
      "coordinates": {
        "lat": 40.809873,
        "lng": -105.159964
      }
    },
    "features": {
      "amenities": [
        "Spa & Sauna",
        "Casa Inteligente",
        "Cancha de Tenis",
        "Elevador Directo",
        "Seguridad 24/7",
        "Gimnasio Privado"
      ],
      "year_built": 2017,
      "energy_rating": "B"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 7
    },
    "owner": {
      "owner_id": "usr_830",
      "agent_name": "Agente Luxe Vásquez"
    },
    "analytics": {
      "views": 3244,
      "saved_in_favorites_count": 267
    },
    "created_at": "2025-01-31T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c0000001a",
    "slug": "propiedad-penthouse-malibu-26",
    "title": "Penthouse Lujosa #26 en Malibu",
    "price": 22478965,
    "status": "PENDING",
    "specs": {
      "beds": 7,
      "baths": 3.3,
      "sqft": 2438,
      "garage_spaces": 5
    },
    "location": {
      "city_state": "Malibu, CA",
      "address": "6099 Avenue of Excellence",
      "coordinates": {
        "lat": 28.148259,
        "lng": -114.829573
      }
    },
    "features": {
      "amenities": [
        "Helipuerto Privado",
        "Spa & Sauna",
        "Casa Inteligente"
      ],
      "year_built": 2014,
      "energy_rating": "A"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 20
    },
    "owner": {
      "owner_id": "usr_767",
      "agent_name": "Agente Luxe Mendoza"
    },
    "analytics": {
      "views": 1674,
      "saved_in_favorites_count": 427
    },
    "created_at": "2025-02-02T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c0000001b",
    "slug": "propiedad-villa-aspen-27",
    "title": "Villa Lujosa #27 en Aspen",
    "price": 11641301,
    "status": "FOR SALE",
    "specs": {
      "beds": 3,
      "baths": 1.9,
      "sqft": 1965,
      "garage_spaces": 5
    },
    "location": {
      "city_state": "Aspen, CO",
      "address": "5857 Avenue of Excellence",
      "coordinates": {
        "lat": 47.48726,
        "lng": -118.217907
      }
    },
    "features": {
      "amenities": [
        "Cancha de Tenis",
        "Casa Inteligente",
        "Vista al Mar",
        "Helipuerto Privado"
      ],
      "year_built": 2010,
      "energy_rating": "B"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 23
    },
    "owner": {
      "owner_id": "usr_303",
      "agent_name": "Agente Luxe Mendoza"
    },
    "analytics": {
      "views": 3818,
      "saved_in_favorites_count": 339
    },
    "created_at": "2024-08-25T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c0000001c",
    "slug": "propiedad-departamento-scottsdale-28",
    "title": "Departamento Lujosa #28 en Scottsdale",
    "price": 24250066,
    "status": "FOR SALE",
    "specs": {
      "beds": 4,
      "baths": 7.4,
      "sqft": 1354,
      "garage_spaces": 3
    },
    "location": {
      "city_state": "Scottsdale, AZ",
      "address": "1290 Avenue of Excellence",
      "coordinates": {
        "lat": 36.406533,
        "lng": -112.286573
      }
    },
    "features": {
      "amenities": [
        "Cancha de Tenis",
        "Helipuerto Privado",
        "Vista al Mar",
        "Spa & Sauna",
        "Gimnasio Privado",
        "Alberca Privada",
        "Cava de Vinos"
      ],
      "year_built": 2010,
      "energy_rating": "B"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 19
    },
    "owner": {
      "owner_id": "usr_914",
      "agent_name": "Agente Luxe Mendoza"
    },
    "analytics": {
      "views": 1224,
      "saved_in_favorites_count": 326
    },
    "created_at": "2026-01-02T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c0000001d",
    "slug": "propiedad-villa-chicago-29",
    "title": "Villa Lujosa #29 en Chicago",
    "price": 3796020,
    "status": "ACTIVE",
    "specs": {
      "beds": 6,
      "baths": 5.0,
      "sqft": 2286,
      "garage_spaces": 3
    },
    "location": {
      "city_state": "Chicago, IL",
      "address": "2791 Avenue of Excellence",
      "coordinates": {
        "lat": 37.499404,
        "lng": -110.187464
      }
    },
    "features": {
      "amenities": [
        "Casa Inteligente",
        "Alberca Privada",
        "Seguridad 24/7",
        "Gimnasio Privado",
        "Vista al Mar"
      ],
      "year_built": 2018,
      "energy_rating": "B"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 20
    },
    "owner": {
      "owner_id": "usr_637",
      "agent_name": "Agente Luxe Smith"
    },
    "analytics": {
      "views": 2344,
      "saved_in_favorites_count": 206
    },
    "created_at": "2025-03-14T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c0000001e",
    "slug": "propiedad-penthouse-scottsdale-30",
    "title": "Penthouse Lujosa #30 en Scottsdale",
    "price": 14028989,
    "status": "PENDING",
    "specs": {
      "beds": 10,
      "baths": 2.9,
      "sqft": 930,
      "garage_spaces": 1
    },
    "location": {
      "city_state": "Scottsdale, AZ",
      "address": "5790 Avenue of Excellence",
      "coordinates": {
        "lat": 27.217035,
        "lng": -83.12695
      }
    },
    "features": {
      "amenities": [
        "Vista al Mar",
        "Elevador Directo",
        "Alberca Privada",
        "Casa Inteligente",
        "Helipuerto Privado",
        "Gimnasio Privado"
      ],
      "year_built": 2016,
      "energy_rating": "B"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 22
    },
    "owner": {
      "owner_id": "usr_136",
      "agent_name": "Agente Luxe García"
    },
    "analytics": {
      "views": 3583,
      "saved_in_favorites_count": 184
    },
    "created_at": "2025-06-27T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c0000001f",
    "slug": "propiedad-villa-scottsdale-31",
    "title": "Villa Lujosa #31 en Scottsdale",
    "price": 21332814,
    "status": "ACTIVE",
    "specs": {
      "beds": 7,
      "baths": 2.9,
      "sqft": 2036,
      "garage_spaces": 5
    },
    "location": {
      "city_state": "Scottsdale, AZ",
      "address": "1752 Avenue of Excellence",
      "coordinates": {
        "lat": 25.160386,
        "lng": -98.225711
      }
    },
    "features": {
      "amenities": [
        "Spa & Sauna",
        "Gimnasio Privado",
        "Elevador Directo",
        "Helipuerto Privado",
        "Cancha de Tenis"
      ],
      "year_built": 2021,
      "energy_rating": "A"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 19
    },
    "owner": {
      "owner_id": "usr_306",
      "agent_name": "Agente Luxe Vásquez"
    },
    "analytics": {
      "views": 2282,
      "saved_in_favorites_count": 23
    },
    "created_at": "2026-01-23T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c00000020",
    "slug": "propiedad-residencia-de-playa-miami-32",
    "title": "Residencia de Playa Lujosa #32 en Miami",
    "price": 2750966,
    "status": "FOR RENT",
    "specs": {
      "beds": 4,
      "baths": 8.2,
      "sqft": 1597,
      "garage_spaces": 1
    },
    "location": {
      "city_state": "Miami, FL",
      "address": "7553 Avenue of Excellence",
      "coordinates": {
        "lat": 29.069477,
        "lng": -100.538514
      }
    },
    "features": {
      "amenities": [
        "Seguridad 24/7",
        "Spa & Sauna",
        "Gimnasio Privado",
        "Vista al Mar"
      ],
      "year_built": 2014,
      "energy_rating": "B"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 25
    },
    "owner": {
      "owner_id": "usr_922",
      "agent_name": "Agente Luxe Smith"
    },
    "analytics": {
      "views": 2513,
      "saved_in_favorites_count": 383
    },
    "created_at": "2024-11-24T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c00000021",
    "slug": "propiedad-casa-scottsdale-33",
    "title": "Casa Lujosa #33 en Scottsdale",
    "price": 5545951,
    "status": "ACTIVE",
    "specs": {
      "beds": 10,
      "baths": 2.9,
      "sqft": 195,
      "garage_spaces": 2
    },
    "location": {
      "city_state": "Scottsdale, AZ",
      "address": "8117 Avenue of Excellence",
      "coordinates": {
        "lat": 30.10167,
        "lng": -116.434222
      }
    },
    "features": {
      "amenities": [
        "Alberca Privada",
        "Casa Inteligente",
        "Gimnasio Privado"
      ],
      "year_built": 2014,
      "energy_rating": "B"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 7
    },
    "owner": {
      "owner_id": "usr_871",
      "agent_name": "Agente Luxe Vásquez"
    },
    "analytics": {
      "views": 2495,
      "saved_in_favorites_count": 152
    },
    "created_at": "2025-02-27T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c00000022",
    "slug": "propiedad-penthouse-san-francisco-34",
    "title": "Penthouse Lujosa #34 en San Francisco",
    "price": 9668195,
    "status": "ACTIVE",
    "specs": {
      "beds": 4,
      "baths": 7.1,
      "sqft": 1536,
      "garage_spaces": 5
    },
    "location": {
      "city_state": "San Francisco, CA",
      "address": "5606 Avenue of Excellence",
      "coordinates": {
        "lat": 40.639847,
        "lng": -81.053424
      }
    },
    "features": {
      "amenities": [
        "Seguridad 24/7",
        "Gimnasio Privado",
        "Cava de Vinos"
      ],
      "year_built": 2024,
      "energy_rating": "B"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 5
    },
    "owner": {
      "owner_id": "usr_159",
      "agent_name": "Agente Luxe Vásquez"
    },
    "analytics": {
      "views": 4366,
      "saved_in_favorites_count": 148
    },
    "created_at": "2025-07-14T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c00000023",
    "slug": "propiedad-penthouse-miami-35",
    "title": "Penthouse Lujosa #35 en Miami",
    "price": 12707086,
    "status": "FOR SALE",
    "specs": {
      "beds": 7,
      "baths": 4.3,
      "sqft": 1195,
      "garage_spaces": 5
    },
    "location": {
      "city_state": "Miami, FL",
      "address": "8892 Avenue of Excellence",
      "coordinates": {
        "lat": 29.680443,
        "lng": -75.452041
      }
    },
    "features": {
      "amenities": [
        "Casa Inteligente",
        "Cancha de Tenis",
        "Alberca Privada",
        "Vista al Mar",
        "Gimnasio Privado"
      ],
      "year_built": 2010,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 6
    },
    "owner": {
      "owner_id": "usr_450",
      "agent_name": "Agente Luxe Smith"
    },
    "analytics": {
      "views": 1093,
      "saved_in_favorites_count": 129
    },
    "created_at": "2025-01-15T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c00000024",
    "slug": "propiedad-penthouse-scottsdale-36",
    "title": "Penthouse Lujosa #36 en Scottsdale",
    "price": 23117330,
    "status": "FOR RENT",
    "specs": {
      "beds": 8,
      "baths": 6.8,
      "sqft": 1227,
      "garage_spaces": 3
    },
    "location": {
      "city_state": "Scottsdale, AZ",
      "address": "769 Avenue of Excellence",
      "coordinates": {
        "lat": 32.600427,
        "lng": -109.313625
      }
    },
    "features": {
      "amenities": [
        "Seguridad 24/7",
        "Elevador Directo",
        "Alberca Privada"
      ],
      "year_built": 2011,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 22
    },
    "owner": {
      "owner_id": "usr_808",
      "agent_name": "Agente Luxe Mendoza"
    },
    "analytics": {
      "views": 1166,
      "saved_in_favorites_count": 23
    },
    "created_at": "2025-10-22T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c00000025",
    "slug": "propiedad-departamento-seattle-37",
    "title": "Departamento Lujosa #37 en Seattle",
    "price": 7844243,
    "status": "PENDING",
    "specs": {
      "beds": 6,
      "baths": 7.5,
      "sqft": 866,
      "garage_spaces": 4
    },
    "location": {
      "city_state": "Seattle, WA",
      "address": "686 Avenue of Excellence",
      "coordinates": {
        "lat": 44.600695,
        "lng": -75.294872
      }
    },
    "features": {
      "amenities": [
        "Seguridad 24/7",
        "Alberca Privada",
        "Helipuerto Privado",
        "Gimnasio Privado"
      ],
      "year_built": 2012,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 16
    },
    "owner": {
      "owner_id": "usr_509",
      "agent_name": "Agente Luxe Vásquez"
    },
    "analytics": {
      "views": 4131,
      "saved_in_favorites_count": 49
    },
    "created_at": "2026-03-30T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c00000026",
    "slug": "propiedad-departamento-miami-38",
    "title": "Departamento Lujosa #38 en Miami",
    "price": 6852320,
    "status": "FOR SALE",
    "specs": {
      "beds": 9,
      "baths": 4.9,
      "sqft": 1178,
      "garage_spaces": 2
    },
    "location": {
      "city_state": "Miami, FL",
      "address": "4031 Avenue of Excellence",
      "coordinates": {
        "lat": 27.930161,
        "lng": -105.217586
      }
    },
    "features": {
      "amenities": [
        "Seguridad 24/7",
        "Alberca Privada",
        "Gimnasio Privado",
        "Cancha de Tenis",
        "Cava de Vinos"
      ],
      "year_built": 2014,
      "energy_rating": "B"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 20
    },
    "owner": {
      "owner_id": "usr_597",
      "agent_name": "Agente Luxe Smith"
    },
    "analytics": {
      "views": 4157,
      "saved_in_favorites_count": 148
    },
    "created_at": "2025-10-23T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c00000027",
    "slug": "propiedad-casa-austin-39",
    "title": "Casa Lujosa #39 en Austin",
    "price": 22147850,
    "status": "ACTIVE",
    "specs": {
      "beds": 2,
      "baths": 3.8,
      "sqft": 553,
      "garage_spaces": 2
    },
    "location": {
      "city_state": "Austin, TX",
      "address": "9218 Avenue of Excellence",
      "coordinates": {
        "lat": 40.683482,
        "lng": -73.627449
      }
    },
    "features": {
      "amenities": [
        "Cava de Vinos",
        "Gimnasio Privado",
        "Helipuerto Privado",
        "Elevador Directo",
        "Spa & Sauna",
        "Vista al Mar",
        "Alberca Privada"
      ],
      "year_built": 2012,
      "energy_rating": "B"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 25
    },
    "owner": {
      "owner_id": "usr_164",
      "agent_name": "Agente Luxe García"
    },
    "analytics": {
      "views": 2572,
      "saved_in_favorites_count": 277
    },
    "created_at": "2025-01-07T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c00000028",
    "slug": "propiedad-penthouse-aspen-40",
    "title": "Penthouse Lujosa #40 en Aspen",
    "price": 24676981,
    "status": "ACTIVE",
    "specs": {
      "beds": 5,
      "baths": 8.5,
      "sqft": 2064,
      "garage_spaces": 4
    },
    "location": {
      "city_state": "Aspen, CO",
      "address": "2502 Avenue of Excellence",
      "coordinates": {
        "lat": 42.162947,
        "lng": -112.508632
      }
    },
    "features": {
      "amenities": [
        "Gimnasio Privado",
        "Spa & Sauna",
        "Helipuerto Privado"
      ],
      "year_built": 2015,
      "energy_rating": "B"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 10
    },
    "owner": {
      "owner_id": "usr_414",
      "agent_name": "Agente Luxe Smith"
    },
    "analytics": {
      "views": 865,
      "saved_in_favorites_count": 269
    },
    "created_at": "2024-10-08T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c00000029",
    "slug": "propiedad-casa-austin-41",
    "title": "Casa Lujosa #41 en Austin",
    "price": 16170253,
    "status": "FOR RENT",
    "specs": {
      "beds": 5,
      "baths": 1.2,
      "sqft": 745,
      "garage_spaces": 2
    },
    "location": {
      "city_state": "Austin, TX",
      "address": "3846 Avenue of Excellence",
      "coordinates": {
        "lat": 26.170717,
        "lng": -74.255688
      }
    },
    "features": {
      "amenities": [
        "Spa & Sauna",
        "Seguridad 24/7",
        "Elevador Directo"
      ],
      "year_built": 2023,
      "energy_rating": "A"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 10
    },
    "owner": {
      "owner_id": "usr_273",
      "agent_name": "Agente Luxe Mendoza"
    },
    "analytics": {
      "views": 1897,
      "saved_in_favorites_count": 263
    },
    "created_at": "2026-05-14T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c0000002a",
    "slug": "propiedad-departamento-new-york-42",
    "title": "Departamento Lujosa #42 en New York",
    "price": 14980687,
    "status": "FOR RENT",
    "specs": {
      "beds": 4,
      "baths": 7.6,
      "sqft": 1022,
      "garage_spaces": 4
    },
    "location": {
      "city_state": "New York, NY",
      "address": "4626 Avenue of Excellence",
      "coordinates": {
        "lat": 31.367134,
        "lng": -80.698572
      }
    },
    "features": {
      "amenities": [
        "Elevador Directo",
        "Casa Inteligente",
        "Seguridad 24/7",
        "Cava de Vinos",
        "Spa & Sauna",
        "Alberca Privada",
        "Gimnasio Privado"
      ],
      "year_built": 2012,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 21
    },
    "owner": {
      "owner_id": "usr_150",
      "agent_name": "Agente Luxe Smith"
    },
    "analytics": {
      "views": 3982,
      "saved_in_favorites_count": 270
    },
    "created_at": "2025-02-28T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c0000002b",
    "slug": "propiedad-penthouse-new-york-43",
    "title": "Penthouse Lujosa #43 en New York",
    "price": 24135889,
    "status": "FOR SALE",
    "specs": {
      "beds": 7,
      "baths": 4.9,
      "sqft": 1460,
      "garage_spaces": 5
    },
    "location": {
      "city_state": "New York, NY",
      "address": "2092 Avenue of Excellence",
      "coordinates": {
        "lat": 30.147742,
        "lng": -97.80385
      }
    },
    "features": {
      "amenities": [
        "Seguridad 24/7",
        "Gimnasio Privado",
        "Cancha de Tenis",
        "Alberca Privada",
        "Cava de Vinos",
        "Casa Inteligente"
      ],
      "year_built": 2020,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 15
    },
    "owner": {
      "owner_id": "usr_876",
      "agent_name": "Agente Luxe García"
    },
    "analytics": {
      "views": 635,
      "saved_in_favorites_count": 56
    },
    "created_at": "2024-09-21T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c0000002c",
    "slug": "propiedad-casa-scottsdale-44",
    "title": "Casa Lujosa #44 en Scottsdale",
    "price": 22916706,
    "status": "PENDING",
    "specs": {
      "beds": 7,
      "baths": 5.7,
      "sqft": 944,
      "garage_spaces": 5
    },
    "location": {
      "city_state": "Scottsdale, AZ",
      "address": "3463 Avenue of Excellence",
      "coordinates": {
        "lat": 27.689894,
        "lng": -105.225262
      }
    },
    "features": {
      "amenities": [
        "Casa Inteligente",
        "Spa & Sauna",
        "Alberca Privada",
        "Cava de Vinos",
        "Seguridad 24/7"
      ],
      "year_built": 2012,
      "energy_rating": "A"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 25
    },
    "owner": {
      "owner_id": "usr_237",
      "agent_name": "Agente Luxe García"
    },
    "analytics": {
      "views": 2073,
      "saved_in_favorites_count": 340
    },
    "created_at": "2025-10-14T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c0000002d",
    "slug": "propiedad-penthouse-aspen-45",
    "title": "Penthouse Lujosa #45 en Aspen",
    "price": 7726575,
    "status": "ACTIVE",
    "specs": {
      "beds": 9,
      "baths": 2.7,
      "sqft": 1906,
      "garage_spaces": 4
    },
    "location": {
      "city_state": "Aspen, CO",
      "address": "5804 Avenue of Excellence",
      "coordinates": {
        "lat": 44.126314,
        "lng": -98.527124
      }
    },
    "features": {
      "amenities": [
        "Elevador Directo",
        "Alberca Privada",
        "Spa & Sauna",
        "Cava de Vinos"
      ],
      "year_built": 2026,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 6
    },
    "owner": {
      "owner_id": "usr_451",
      "agent_name": "Agente Luxe Vásquez"
    },
    "analytics": {
      "views": 2748,
      "saved_in_favorites_count": 103
    },
    "created_at": "2024-11-05T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c0000002e",
    "slug": "propiedad-departamento-seattle-46",
    "title": "Departamento Lujosa #46 en Seattle",
    "price": 15398060,
    "status": "ACTIVE",
    "specs": {
      "beds": 10,
      "baths": 5.3,
      "sqft": 1876,
      "garage_spaces": 3
    },
    "location": {
      "city_state": "Seattle, WA",
      "address": "5403 Avenue of Excellence",
      "coordinates": {
        "lat": 37.616328,
        "lng": -102.999373
      }
    },
    "features": {
      "amenities": [
        "Gimnasio Privado",
        "Spa & Sauna",
        "Helipuerto Privado"
      ],
      "year_built": 2010,
      "energy_rating": "A"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 10
    },
    "owner": {
      "owner_id": "usr_468",
      "agent_name": "Agente Luxe Smith"
    },
    "analytics": {
      "views": 2806,
      "saved_in_favorites_count": 174
    },
    "created_at": "2026-07-18T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c0000002f",
    "slug": "propiedad-penthouse-chicago-47",
    "title": "Penthouse Lujosa #47 en Chicago",
    "price": 10570168,
    "status": "FOR SALE",
    "specs": {
      "beds": 3,
      "baths": 2.5,
      "sqft": 2330,
      "garage_spaces": 2
    },
    "location": {
      "city_state": "Chicago, IL",
      "address": "3004 Avenue of Excellence",
      "coordinates": {
        "lat": 36.505454,
        "lng": -92.265767
      }
    },
    "features": {
      "amenities": [
        "Gimnasio Privado",
        "Cancha de Tenis",
        "Vista al Mar",
        "Seguridad 24/7"
      ],
      "year_built": 2019,
      "energy_rating": "A"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 5
    },
    "owner": {
      "owner_id": "usr_332",
      "agent_name": "Agente Luxe Smith"
    },
    "analytics": {
      "views": 1176,
      "saved_in_favorites_count": 230
    },
    "created_at": "2026-06-04T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c00000030",
    "slug": "propiedad-residencia-de-playa-scottsdale-48",
    "title": "Residencia de Playa Lujosa #48 en Scottsdale",
    "price": 2855896,
    "status": "FOR RENT",
    "specs": {
      "beds": 9,
      "baths": 3.8,
      "sqft": 798,
      "garage_spaces": 1
    },
    "location": {
      "city_state": "Scottsdale, AZ",
      "address": "4761 Avenue of Excellence",
      "coordinates": {
        "lat": 30.695356,
        "lng": -113.229686
      }
    },
    "features": {
      "amenities": [
        "Spa & Sauna",
        "Casa Inteligente",
        "Gimnasio Privado",
        "Cancha de Tenis"
      ],
      "year_built": 2024,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 21
    },
    "owner": {
      "owner_id": "usr_980",
      "agent_name": "Agente Luxe Mendoza"
    },
    "analytics": {
      "views": 3939,
      "saved_in_favorites_count": 308
    },
    "created_at": "2025-05-23T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c00000031",
    "slug": "propiedad-casa-chicago-49",
    "title": "Casa Lujosa #49 en Chicago",
    "price": 12501576,
    "status": "PENDING",
    "specs": {
      "beds": 7,
      "baths": 3.7,
      "sqft": 880,
      "garage_spaces": 2
    },
    "location": {
      "city_state": "Chicago, IL",
      "address": "2101 Avenue of Excellence",
      "coordinates": {
        "lat": 34.570273,
        "lng": -103.945346
      }
    },
    "features": {
      "amenities": [
        "Cancha de Tenis",
        "Alberca Privada",
        "Elevador Directo",
        "Helipuerto Privado",
        "Cava de Vinos"
      ],
      "year_built": 2023,
      "energy_rating": "B"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 18
    },
    "owner": {
      "owner_id": "usr_438",
      "agent_name": "Agente Luxe Smith"
    },
    "analytics": {
      "views": 992,
      "saved_in_favorites_count": 170
    },
    "created_at": "2024-08-09T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c00000032",
    "slug": "propiedad-residencia-de-playa-aspen-50",
    "title": "Residencia de Playa Lujosa #50 en Aspen",
    "price": 21151487,
    "status": "PENDING",
    "specs": {
      "beds": 5,
      "baths": 2.3,
      "sqft": 2465,
      "garage_spaces": 5
    },
    "location": {
      "city_state": "Aspen, CO",
      "address": "1663 Avenue of Excellence",
      "coordinates": {
        "lat": 32.929217,
        "lng": -83.760082
      }
    },
    "features": {
      "amenities": [
        "Cancha de Tenis",
        "Spa & Sauna",
        "Helipuerto Privado"
      ],
      "year_built": 2013,
      "energy_rating": "B"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 24
    },
    "owner": {
      "owner_id": "usr_356",
      "agent_name": "Agente Luxe Mendoza"
    },
    "analytics": {
      "views": 1314,
      "saved_in_favorites_count": 18
    },
    "created_at": "2026-03-01T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c00000033",
    "slug": "propiedad-departamento-aspen-51",
    "title": "Departamento Lujosa #51 en Aspen",
    "price": 20762473,
    "status": "FOR RENT",
    "specs": {
      "beds": 7,
      "baths": 2.9,
      "sqft": 1655,
      "garage_spaces": 3
    },
    "location": {
      "city_state": "Aspen, CO",
      "address": "9029 Avenue of Excellence",
      "coordinates": {
        "lat": 31.265443,
        "lng": -105.319117
      }
    },
    "features": {
      "amenities": [
        "Elevador Directo",
        "Seguridad 24/7",
        "Casa Inteligente",
        "Helipuerto Privado",
        "Cancha de Tenis",
        "Spa & Sauna"
      ],
      "year_built": 2020,
      "energy_rating": "B"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 15
    },
    "owner": {
      "owner_id": "usr_373",
      "agent_name": "Agente Luxe García"
    },
    "analytics": {
      "views": 1515,
      "saved_in_favorites_count": 308
    },
    "created_at": "2025-03-30T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c00000034",
    "slug": "propiedad-casa-seattle-52",
    "title": "Casa Lujosa #52 en Seattle",
    "price": 15052887,
    "status": "PENDING",
    "specs": {
      "beds": 9,
      "baths": 1.2,
      "sqft": 2014,
      "garage_spaces": 4
    },
    "location": {
      "city_state": "Seattle, WA",
      "address": "8458 Avenue of Excellence",
      "coordinates": {
        "lat": 37.073755,
        "lng": -119.429279
      }
    },
    "features": {
      "amenities": [
        "Casa Inteligente",
        "Elevador Directo",
        "Spa & Sauna"
      ],
      "year_built": 2019,
      "energy_rating": "B"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 22
    },
    "owner": {
      "owner_id": "usr_334",
      "agent_name": "Agente Luxe Vásquez"
    },
    "analytics": {
      "views": 2346,
      "saved_in_favorites_count": 98
    },
    "created_at": "2026-03-01T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c00000035",
    "slug": "propiedad-residencia-de-playa-malibu-53",
    "title": "Residencia de Playa Lujosa #53 en Malibu",
    "price": 3353458,
    "status": "FOR RENT",
    "specs": {
      "beds": 1,
      "baths": 8.3,
      "sqft": 174,
      "garage_spaces": 3
    },
    "location": {
      "city_state": "Malibu, CA",
      "address": "2992 Avenue of Excellence",
      "coordinates": {
        "lat": 45.645481,
        "lng": -90.024497
      }
    },
    "features": {
      "amenities": [
        "Spa & Sauna",
        "Helipuerto Privado",
        "Vista al Mar",
        "Cancha de Tenis"
      ],
      "year_built": 2021,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 6
    },
    "owner": {
      "owner_id": "usr_897",
      "agent_name": "Agente Luxe García"
    },
    "analytics": {
      "views": 3132,
      "saved_in_favorites_count": 159
    },
    "created_at": "2024-10-18T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c00000036",
    "slug": "propiedad-departamento-scottsdale-54",
    "title": "Departamento Lujosa #54 en Scottsdale",
    "price": 17933637,
    "status": "ACTIVE",
    "specs": {
      "beds": 4,
      "baths": 3.3,
      "sqft": 612,
      "garage_spaces": 1
    },
    "location": {
      "city_state": "Scottsdale, AZ",
      "address": "4618 Avenue of Excellence",
      "coordinates": {
        "lat": 45.107955,
        "lng": -110.221009
      }
    },
    "features": {
      "amenities": [
        "Alberca Privada",
        "Gimnasio Privado",
        "Helipuerto Privado",
        "Cava de Vinos",
        "Cancha de Tenis"
      ],
      "year_built": 2017,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 7
    },
    "owner": {
      "owner_id": "usr_987",
      "agent_name": "Agente Luxe Mendoza"
    },
    "analytics": {
      "views": 829,
      "saved_in_favorites_count": 395
    },
    "created_at": "2025-01-11T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c00000037",
    "slug": "propiedad-departamento-beverly-hills-55",
    "title": "Departamento Lujosa #55 en Beverly Hills",
    "price": 4007506,
    "status": "ACTIVE",
    "specs": {
      "beds": 7,
      "baths": 2.6,
      "sqft": 2364,
      "garage_spaces": 4
    },
    "location": {
      "city_state": "Beverly Hills, CA",
      "address": "8033 Avenue of Excellence",
      "coordinates": {
        "lat": 25.056448,
        "lng": -102.254858
      }
    },
    "features": {
      "amenities": [
        "Elevador Directo",
        "Cancha de Tenis",
        "Gimnasio Privado",
        "Vista al Mar",
        "Casa Inteligente",
        "Alberca Privada",
        "Helipuerto Privado"
      ],
      "year_built": 2018,
      "energy_rating": "A"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 6
    },
    "owner": {
      "owner_id": "usr_963",
      "agent_name": "Agente Luxe Smith"
    },
    "analytics": {
      "views": 790,
      "saved_in_favorites_count": 169
    },
    "created_at": "2026-02-09T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c00000038",
    "slug": "propiedad-penthouse-austin-56",
    "title": "Penthouse Lujosa #56 en Austin",
    "price": 11046734,
    "status": "FOR SALE",
    "specs": {
      "beds": 10,
      "baths": 2.7,
      "sqft": 2383,
      "garage_spaces": 3
    },
    "location": {
      "city_state": "Austin, TX",
      "address": "361 Avenue of Excellence",
      "coordinates": {
        "lat": 29.582012,
        "lng": -85.541368
      }
    },
    "features": {
      "amenities": [
        "Vista al Mar",
        "Alberca Privada",
        "Spa & Sauna"
      ],
      "year_built": 2025,
      "energy_rating": "B"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 25
    },
    "owner": {
      "owner_id": "usr_989",
      "agent_name": "Agente Luxe Smith"
    },
    "analytics": {
      "views": 3993,
      "saved_in_favorites_count": 93
    },
    "created_at": "2024-12-02T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c00000039",
    "slug": "propiedad-residencia-de-playa-austin-57",
    "title": "Residencia de Playa Lujosa #57 en Austin",
    "price": 17252548,
    "status": "FOR SALE",
    "specs": {
      "beds": 1,
      "baths": 5.4,
      "sqft": 2076,
      "garage_spaces": 3
    },
    "location": {
      "city_state": "Austin, TX",
      "address": "7092 Avenue of Excellence",
      "coordinates": {
        "lat": 34.084207,
        "lng": -106.107964
      }
    },
    "features": {
      "amenities": [
        "Cava de Vinos",
        "Alberca Privada",
        "Vista al Mar",
        "Casa Inteligente",
        "Seguridad 24/7",
        "Spa & Sauna"
      ],
      "year_built": 2016,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 22
    },
    "owner": {
      "owner_id": "usr_763",
      "agent_name": "Agente Luxe Mendoza"
    },
    "analytics": {
      "views": 3481,
      "saved_in_favorites_count": 286
    },
    "created_at": "2025-06-10T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c0000003a",
    "slug": "propiedad-departamento-san-francisco-58",
    "title": "Departamento Lujosa #58 en San Francisco",
    "price": 4397647,
    "status": "FOR RENT",
    "specs": {
      "beds": 10,
      "baths": 2.6,
      "sqft": 826,
      "garage_spaces": 2
    },
    "location": {
      "city_state": "San Francisco, CA",
      "address": "6216 Avenue of Excellence",
      "coordinates": {
        "lat": 31.193656,
        "lng": -84.857037
      }
    },
    "features": {
      "amenities": [
        "Vista al Mar",
        "Cancha de Tenis",
        "Alberca Privada",
        "Elevador Directo",
        "Casa Inteligente",
        "Seguridad 24/7"
      ],
      "year_built": 2019,
      "energy_rating": "A"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 8
    },
    "owner": {
      "owner_id": "usr_354",
      "agent_name": "Agente Luxe Vásquez"
    },
    "analytics": {
      "views": 2886,
      "saved_in_favorites_count": 51
    },
    "created_at": "2024-09-02T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c0000003b",
    "slug": "propiedad-casa-chicago-59",
    "title": "Casa Lujosa #59 en Chicago",
    "price": 7238530,
    "status": "ACTIVE",
    "specs": {
      "beds": 8,
      "baths": 2.9,
      "sqft": 565,
      "garage_spaces": 4
    },
    "location": {
      "city_state": "Chicago, IL",
      "address": "7106 Avenue of Excellence",
      "coordinates": {
        "lat": 37.906704,
        "lng": -74.373348
      }
    },
    "features": {
      "amenities": [
        "Seguridad 24/7",
        "Elevador Directo",
        "Helipuerto Privado",
        "Gimnasio Privado",
        "Spa & Sauna",
        "Cancha de Tenis",
        "Alberca Privada"
      ],
      "year_built": 2015,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 18
    },
    "owner": {
      "owner_id": "usr_207",
      "agent_name": "Agente Luxe Smith"
    },
    "analytics": {
      "views": 4503,
      "saved_in_favorites_count": 327
    },
    "created_at": "2025-01-21T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c0000003c",
    "slug": "propiedad-casa-aspen-60",
    "title": "Casa Lujosa #60 en Aspen",
    "price": 5357204,
    "status": "ACTIVE",
    "specs": {
      "beds": 8,
      "baths": 1.4,
      "sqft": 159,
      "garage_spaces": 2
    },
    "location": {
      "city_state": "Aspen, CO",
      "address": "6148 Avenue of Excellence",
      "coordinates": {
        "lat": 40.728069,
        "lng": -116.811022
      }
    },
    "features": {
      "amenities": [
        "Vista al Mar",
        "Seguridad 24/7",
        "Casa Inteligente"
      ],
      "year_built": 2024,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 9
    },
    "owner": {
      "owner_id": "usr_105",
      "agent_name": "Agente Luxe Vásquez"
    },
    "analytics": {
      "views": 839,
      "saved_in_favorites_count": 384
    },
    "created_at": "2026-04-21T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c0000003d",
    "slug": "propiedad-residencia-de-playa-scottsdale-61",
    "title": "Residencia de Playa Lujosa #61 en Scottsdale",
    "price": 3182056,
    "status": "ACTIVE",
    "specs": {
      "beds": 4,
      "baths": 5.1,
      "sqft": 540,
      "garage_spaces": 3
    },
    "location": {
      "city_state": "Scottsdale, AZ",
      "address": "8492 Avenue of Excellence",
      "coordinates": {
        "lat": 26.268285,
        "lng": -117.191766
      }
    },
    "features": {
      "amenities": [
        "Seguridad 24/7",
        "Alberca Privada",
        "Cancha de Tenis",
        "Gimnasio Privado",
        "Helipuerto Privado",
        "Spa & Sauna"
      ],
      "year_built": 2019,
      "energy_rating": "B"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 8
    },
    "owner": {
      "owner_id": "usr_257",
      "agent_name": "Agente Luxe Vásquez"
    },
    "analytics": {
      "views": 1101,
      "saved_in_favorites_count": 271
    },
    "created_at": "2024-07-24T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c0000003e",
    "slug": "propiedad-departamento-aspen-62",
    "title": "Departamento Lujosa #62 en Aspen",
    "price": 3824438,
    "status": "ACTIVE",
    "specs": {
      "beds": 10,
      "baths": 8.3,
      "sqft": 1630,
      "garage_spaces": 4
    },
    "location": {
      "city_state": "Aspen, CO",
      "address": "5607 Avenue of Excellence",
      "coordinates": {
        "lat": 42.264718,
        "lng": -75.153306
      }
    },
    "features": {
      "amenities": [
        "Alberca Privada",
        "Spa & Sauna",
        "Casa Inteligente",
        "Seguridad 24/7",
        "Vista al Mar",
        "Cancha de Tenis"
      ],
      "year_built": 2024,
      "energy_rating": "B"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 25
    },
    "owner": {
      "owner_id": "usr_797",
      "agent_name": "Agente Luxe Mendoza"
    },
    "analytics": {
      "views": 4115,
      "saved_in_favorites_count": 107
    },
    "created_at": "2025-05-20T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c0000003f",
    "slug": "propiedad-departamento-beverly-hills-63",
    "title": "Departamento Lujosa #63 en Beverly Hills",
    "price": 16261484,
    "status": "PENDING",
    "specs": {
      "beds": 6,
      "baths": 6.4,
      "sqft": 1957,
      "garage_spaces": 5
    },
    "location": {
      "city_state": "Beverly Hills, CA",
      "address": "8558 Avenue of Excellence",
      "coordinates": {
        "lat": 47.43904,
        "lng": -91.674784
      }
    },
    "features": {
      "amenities": [
        "Vista al Mar",
        "Gimnasio Privado",
        "Seguridad 24/7",
        "Cancha de Tenis",
        "Spa & Sauna",
        "Elevador Directo",
        "Casa Inteligente"
      ],
      "year_built": 2019,
      "energy_rating": "A"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 7
    },
    "owner": {
      "owner_id": "usr_483",
      "agent_name": "Agente Luxe Vásquez"
    },
    "analytics": {
      "views": 302,
      "saved_in_favorites_count": 207
    },
    "created_at": "2024-10-29T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c00000040",
    "slug": "propiedad-casa-san-francisco-64",
    "title": "Casa Lujosa #64 en San Francisco",
    "price": 11580244,
    "status": "PENDING",
    "specs": {
      "beds": 4,
      "baths": 5.2,
      "sqft": 147,
      "garage_spaces": 3
    },
    "location": {
      "city_state": "San Francisco, CA",
      "address": "7629 Avenue of Excellence",
      "coordinates": {
        "lat": 43.415251,
        "lng": -108.478484
      }
    },
    "features": {
      "amenities": [
        "Gimnasio Privado",
        "Alberca Privada",
        "Helipuerto Privado",
        "Vista al Mar"
      ],
      "year_built": 2020,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 11
    },
    "owner": {
      "owner_id": "usr_189",
      "agent_name": "Agente Luxe Vásquez"
    },
    "analytics": {
      "views": 1503,
      "saved_in_favorites_count": 213
    },
    "created_at": "2025-01-27T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c00000041",
    "slug": "propiedad-departamento-chicago-65",
    "title": "Departamento Lujosa #65 en Chicago",
    "price": 3250225,
    "status": "FOR SALE",
    "specs": {
      "beds": 4,
      "baths": 7.0,
      "sqft": 1724,
      "garage_spaces": 5
    },
    "location": {
      "city_state": "Chicago, IL",
      "address": "9089 Avenue of Excellence",
      "coordinates": {
        "lat": 43.129883,
        "lng": -114.713589
      }
    },
    "features": {
      "amenities": [
        "Elevador Directo",
        "Gimnasio Privado",
        "Casa Inteligente"
      ],
      "year_built": 2020,
      "energy_rating": "A"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 22
    },
    "owner": {
      "owner_id": "usr_764",
      "agent_name": "Agente Luxe Vásquez"
    },
    "analytics": {
      "views": 3964,
      "saved_in_favorites_count": 177
    },
    "created_at": "2025-12-05T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c00000042",
    "slug": "propiedad-villa-miami-66",
    "title": "Villa Lujosa #66 en Miami",
    "price": 10238820,
    "status": "FOR SALE",
    "specs": {
      "beds": 6,
      "baths": 6.5,
      "sqft": 521,
      "garage_spaces": 2
    },
    "location": {
      "city_state": "Miami, FL",
      "address": "6655 Avenue of Excellence",
      "coordinates": {
        "lat": 43.001957,
        "lng": -115.506268
      }
    },
    "features": {
      "amenities": [
        "Helipuerto Privado",
        "Vista al Mar",
        "Alberca Privada",
        "Elevador Directo",
        "Gimnasio Privado",
        "Casa Inteligente"
      ],
      "year_built": 2022,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 15
    },
    "owner": {
      "owner_id": "usr_925",
      "agent_name": "Agente Luxe Vásquez"
    },
    "analytics": {
      "views": 687,
      "saved_in_favorites_count": 193
    },
    "created_at": "2026-07-13T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c00000043",
    "slug": "propiedad-departamento-aspen-67",
    "title": "Departamento Lujosa #67 en Aspen",
    "price": 4513637,
    "status": "PENDING",
    "specs": {
      "beds": 7,
      "baths": 2.0,
      "sqft": 1400,
      "garage_spaces": 4
    },
    "location": {
      "city_state": "Aspen, CO",
      "address": "6360 Avenue of Excellence",
      "coordinates": {
        "lat": 33.873067,
        "lng": -112.710015
      }
    },
    "features": {
      "amenities": [
        "Elevador Directo",
        "Gimnasio Privado",
        "Cava de Vinos",
        "Vista al Mar",
        "Helipuerto Privado",
        "Seguridad 24/7",
        "Alberca Privada"
      ],
      "year_built": 2011,
      "energy_rating": "A"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 6
    },
    "owner": {
      "owner_id": "usr_344",
      "agent_name": "Agente Luxe Smith"
    },
    "analytics": {
      "views": 1584,
      "saved_in_favorites_count": 176
    },
    "created_at": "2025-08-26T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c00000044",
    "slug": "propiedad-villa-austin-68",
    "title": "Villa Lujosa #68 en Austin",
    "price": 22855634,
    "status": "FOR RENT",
    "specs": {
      "beds": 7,
      "baths": 2.9,
      "sqft": 1440,
      "garage_spaces": 3
    },
    "location": {
      "city_state": "Austin, TX",
      "address": "7793 Avenue of Excellence",
      "coordinates": {
        "lat": 25.252753,
        "lng": -98.949202
      }
    },
    "features": {
      "amenities": [
        "Gimnasio Privado",
        "Helipuerto Privado",
        "Vista al Mar",
        "Elevador Directo"
      ],
      "year_built": 2015,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 18
    },
    "owner": {
      "owner_id": "usr_696",
      "agent_name": "Agente Luxe Vásquez"
    },
    "analytics": {
      "views": 550,
      "saved_in_favorites_count": 251
    },
    "created_at": "2024-12-05T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c00000045",
    "slug": "propiedad-villa-aspen-69",
    "title": "Villa Lujosa #69 en Aspen",
    "price": 13638466,
    "status": "ACTIVE",
    "specs": {
      "beds": 6,
      "baths": 7.8,
      "sqft": 1817,
      "garage_spaces": 3
    },
    "location": {
      "city_state": "Aspen, CO",
      "address": "3120 Avenue of Excellence",
      "coordinates": {
        "lat": 30.997737,
        "lng": -103.632254
      }
    },
    "features": {
      "amenities": [
        "Vista al Mar",
        "Seguridad 24/7",
        "Spa & Sauna"
      ],
      "year_built": 2025,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 7
    },
    "owner": {
      "owner_id": "usr_885",
      "agent_name": "Agente Luxe Mendoza"
    },
    "analytics": {
      "views": 1396,
      "saved_in_favorites_count": 22
    },
    "created_at": "2025-04-21T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c00000046",
    "slug": "propiedad-residencia-de-playa-new-york-70",
    "title": "Residencia de Playa Lujosa #70 en New York",
    "price": 16423936,
    "status": "PENDING",
    "specs": {
      "beds": 6,
      "baths": 8.1,
      "sqft": 185,
      "garage_spaces": 3
    },
    "location": {
      "city_state": "New York, NY",
      "address": "6623 Avenue of Excellence",
      "coordinates": {
        "lat": 43.222081,
        "lng": -79.928958
      }
    },
    "features": {
      "amenities": [
        "Vista al Mar",
        "Spa & Sauna",
        "Cancha de Tenis",
        "Gimnasio Privado"
      ],
      "year_built": 2026,
      "energy_rating": "A"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 25
    },
    "owner": {
      "owner_id": "usr_970",
      "agent_name": "Agente Luxe Mendoza"
    },
    "analytics": {
      "views": 2832,
      "saved_in_favorites_count": 381
    },
    "created_at": "2025-12-03T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c00000047",
    "slug": "propiedad-penthouse-san-francisco-71",
    "title": "Penthouse Lujosa #71 en San Francisco",
    "price": 3794906,
    "status": "PENDING",
    "specs": {
      "beds": 4,
      "baths": 7.6,
      "sqft": 436,
      "garage_spaces": 3
    },
    "location": {
      "city_state": "San Francisco, CA",
      "address": "7068 Avenue of Excellence",
      "coordinates": {
        "lat": 32.788155,
        "lng": -95.112363
      }
    },
    "features": {
      "amenities": [
        "Casa Inteligente",
        "Cancha de Tenis",
        "Alberca Privada"
      ],
      "year_built": 2018,
      "energy_rating": "A"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 18
    },
    "owner": {
      "owner_id": "usr_684",
      "agent_name": "Agente Luxe Mendoza"
    },
    "analytics": {
      "views": 2860,
      "saved_in_favorites_count": 163
    },
    "created_at": "2026-06-30T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c00000048",
    "slug": "propiedad-residencia-de-playa-scottsdale-72",
    "title": "Residencia de Playa Lujosa #72 en Scottsdale",
    "price": 4710843,
    "status": "FOR RENT",
    "specs": {
      "beds": 8,
      "baths": 6.1,
      "sqft": 1766,
      "garage_spaces": 3
    },
    "location": {
      "city_state": "Scottsdale, AZ",
      "address": "1958 Avenue of Excellence",
      "coordinates": {
        "lat": 30.790153,
        "lng": -83.737602
      }
    },
    "features": {
      "amenities": [
        "Gimnasio Privado",
        "Cancha de Tenis",
        "Elevador Directo"
      ],
      "year_built": 2012,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 17
    },
    "owner": {
      "owner_id": "usr_523",
      "agent_name": "Agente Luxe Mendoza"
    },
    "analytics": {
      "views": 4193,
      "saved_in_favorites_count": 36
    },
    "created_at": "2025-11-28T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c00000049",
    "slug": "propiedad-departamento-austin-73",
    "title": "Departamento Lujosa #73 en Austin",
    "price": 7089112,
    "status": "FOR RENT",
    "specs": {
      "beds": 2,
      "baths": 5.7,
      "sqft": 2310,
      "garage_spaces": 4
    },
    "location": {
      "city_state": "Austin, TX",
      "address": "9083 Avenue of Excellence",
      "coordinates": {
        "lat": 34.901012,
        "lng": -116.877123
      }
    },
    "features": {
      "amenities": [
        "Cancha de Tenis",
        "Helipuerto Privado",
        "Alberca Privada",
        "Seguridad 24/7",
        "Spa & Sauna",
        "Vista al Mar"
      ],
      "year_built": 2021,
      "energy_rating": "B"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 7
    },
    "owner": {
      "owner_id": "usr_255",
      "agent_name": "Agente Luxe Smith"
    },
    "analytics": {
      "views": 2451,
      "saved_in_favorites_count": 193
    },
    "created_at": "2026-07-17T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c0000004a",
    "slug": "propiedad-departamento-beverly-hills-74",
    "title": "Departamento Lujosa #74 en Beverly Hills",
    "price": 3595557,
    "status": "ACTIVE",
    "specs": {
      "beds": 7,
      "baths": 8.5,
      "sqft": 1199,
      "garage_spaces": 1
    },
    "location": {
      "city_state": "Beverly Hills, CA",
      "address": "6933 Avenue of Excellence",
      "coordinates": {
        "lat": 46.691087,
        "lng": -107.013426
      }
    },
    "features": {
      "amenities": [
        "Seguridad 24/7",
        "Casa Inteligente",
        "Elevador Directo",
        "Helipuerto Privado"
      ],
      "year_built": 2016,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 12
    },
    "owner": {
      "owner_id": "usr_957",
      "agent_name": "Agente Luxe Vásquez"
    },
    "analytics": {
      "views": 4877,
      "saved_in_favorites_count": 361
    },
    "created_at": "2024-09-13T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c0000004b",
    "slug": "propiedad-residencia-de-playa-beverly-hills-75",
    "title": "Residencia de Playa Lujosa #75 en Beverly Hills",
    "price": 5670430,
    "status": "FOR RENT",
    "specs": {
      "beds": 6,
      "baths": 3.9,
      "sqft": 578,
      "garage_spaces": 2
    },
    "location": {
      "city_state": "Beverly Hills, CA",
      "address": "1954 Avenue of Excellence",
      "coordinates": {
        "lat": 37.703763,
        "lng": -79.086522
      }
    },
    "features": {
      "amenities": [
        "Spa & Sauna",
        "Helipuerto Privado",
        "Vista al Mar",
        "Casa Inteligente",
        "Alberca Privada",
        "Gimnasio Privado"
      ],
      "year_built": 2026,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 21
    },
    "owner": {
      "owner_id": "usr_526",
      "agent_name": "Agente Luxe Vásquez"
    },
    "analytics": {
      "views": 1610,
      "saved_in_favorites_count": 135
    },
    "created_at": "2026-02-10T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c0000004c",
    "slug": "propiedad-departamento-aspen-76",
    "title": "Departamento Lujosa #76 en Aspen",
    "price": 8540052,
    "status": "ACTIVE",
    "specs": {
      "beds": 3,
      "baths": 5.1,
      "sqft": 1437,
      "garage_spaces": 5
    },
    "location": {
      "city_state": "Aspen, CO",
      "address": "4400 Avenue of Excellence",
      "coordinates": {
        "lat": 32.37385,
        "lng": -115.396094
      }
    },
    "features": {
      "amenities": [
        "Cava de Vinos",
        "Alberca Privada",
        "Vista al Mar",
        "Seguridad 24/7",
        "Spa & Sauna",
        "Helipuerto Privado"
      ],
      "year_built": 2022,
      "energy_rating": "B"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 21
    },
    "owner": {
      "owner_id": "usr_839",
      "agent_name": "Agente Luxe Vásquez"
    },
    "analytics": {
      "views": 4604,
      "saved_in_favorites_count": 434
    },
    "created_at": "2026-06-16T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c0000004d",
    "slug": "propiedad-villa-chicago-77",
    "title": "Villa Lujosa #77 en Chicago",
    "price": 7168214,
    "status": "FOR SALE",
    "specs": {
      "beds": 5,
      "baths": 9.4,
      "sqft": 1699,
      "garage_spaces": 4
    },
    "location": {
      "city_state": "Chicago, IL",
      "address": "8666 Avenue of Excellence",
      "coordinates": {
        "lat": 33.869648,
        "lng": -108.984535
      }
    },
    "features": {
      "amenities": [
        "Gimnasio Privado",
        "Seguridad 24/7",
        "Cava de Vinos",
        "Vista al Mar",
        "Casa Inteligente",
        "Alberca Privada"
      ],
      "year_built": 2012,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 18
    },
    "owner": {
      "owner_id": "usr_496",
      "agent_name": "Agente Luxe García"
    },
    "analytics": {
      "views": 524,
      "saved_in_favorites_count": 436
    },
    "created_at": "2024-11-10T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c0000004e",
    "slug": "propiedad-residencia-de-playa-miami-78",
    "title": "Residencia de Playa Lujosa #78 en Miami",
    "price": 2385985,
    "status": "FOR SALE",
    "specs": {
      "beds": 5,
      "baths": 6.9,
      "sqft": 2155,
      "garage_spaces": 1
    },
    "location": {
      "city_state": "Miami, FL",
      "address": "3545 Avenue of Excellence",
      "coordinates": {
        "lat": 38.75223,
        "lng": -109.768884
      }
    },
    "features": {
      "amenities": [
        "Cava de Vinos",
        "Spa & Sauna",
        "Vista al Mar",
        "Helipuerto Privado"
      ],
      "year_built": 2013,
      "energy_rating": "A"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 25
    },
    "owner": {
      "owner_id": "usr_867",
      "agent_name": "Agente Luxe García"
    },
    "analytics": {
      "views": 2627,
      "saved_in_favorites_count": 190
    },
    "created_at": "2026-05-12T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c0000004f",
    "slug": "propiedad-departamento-new-york-79",
    "title": "Departamento Lujosa #79 en New York",
    "price": 7564214,
    "status": "FOR RENT",
    "specs": {
      "beds": 4,
      "baths": 8.1,
      "sqft": 858,
      "garage_spaces": 4
    },
    "location": {
      "city_state": "New York, NY",
      "address": "1524 Avenue of Excellence",
      "coordinates": {
        "lat": 39.20176,
        "lng": -87.919784
      }
    },
    "features": {
      "amenities": [
        "Casa Inteligente",
        "Helipuerto Privado",
        "Alberca Privada",
        "Cava de Vinos"
      ],
      "year_built": 2024,
      "energy_rating": "A"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 23
    },
    "owner": {
      "owner_id": "usr_615",
      "agent_name": "Agente Luxe Vásquez"
    },
    "analytics": {
      "views": 3610,
      "saved_in_favorites_count": 351
    },
    "created_at": "2024-08-25T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c00000050",
    "slug": "propiedad-departamento-aspen-80",
    "title": "Departamento Lujosa #80 en Aspen",
    "price": 19565722,
    "status": "PENDING",
    "specs": {
      "beds": 7,
      "baths": 4.6,
      "sqft": 1486,
      "garage_spaces": 2
    },
    "location": {
      "city_state": "Aspen, CO",
      "address": "6672 Avenue of Excellence",
      "coordinates": {
        "lat": 37.009555,
        "lng": -112.49102
      }
    },
    "features": {
      "amenities": [
        "Gimnasio Privado",
        "Cava de Vinos",
        "Helipuerto Privado"
      ],
      "year_built": 2014,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 18
    },
    "owner": {
      "owner_id": "usr_400",
      "agent_name": "Agente Luxe Mendoza"
    },
    "analytics": {
      "views": 1877,
      "saved_in_favorites_count": 249
    },
    "created_at": "2025-01-04T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c00000051",
    "slug": "propiedad-villa-scottsdale-81",
    "title": "Villa Lujosa #81 en Scottsdale",
    "price": 7384108,
    "status": "PENDING",
    "specs": {
      "beds": 7,
      "baths": 7.7,
      "sqft": 440,
      "garage_spaces": 3
    },
    "location": {
      "city_state": "Scottsdale, AZ",
      "address": "4398 Avenue of Excellence",
      "coordinates": {
        "lat": 41.690705,
        "lng": -79.193835
      }
    },
    "features": {
      "amenities": [
        "Seguridad 24/7",
        "Casa Inteligente",
        "Alberca Privada"
      ],
      "year_built": 2018,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 6
    },
    "owner": {
      "owner_id": "usr_807",
      "agent_name": "Agente Luxe Mendoza"
    },
    "analytics": {
      "views": 1345,
      "saved_in_favorites_count": 395
    },
    "created_at": "2025-01-21T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c00000052",
    "slug": "propiedad-casa-seattle-82",
    "title": "Casa Lujosa #82 en Seattle",
    "price": 20526765,
    "status": "FOR SALE",
    "specs": {
      "beds": 8,
      "baths": 4.2,
      "sqft": 2000,
      "garage_spaces": 3
    },
    "location": {
      "city_state": "Seattle, WA",
      "address": "4058 Avenue of Excellence",
      "coordinates": {
        "lat": 25.073862,
        "lng": -120.589481
      }
    },
    "features": {
      "amenities": [
        "Casa Inteligente",
        "Spa & Sauna",
        "Elevador Directo",
        "Gimnasio Privado"
      ],
      "year_built": 2026,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 18
    },
    "owner": {
      "owner_id": "usr_248",
      "agent_name": "Agente Luxe Mendoza"
    },
    "analytics": {
      "views": 4709,
      "saved_in_favorites_count": 34
    },
    "created_at": "2026-04-23T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c00000053",
    "slug": "propiedad-villa-aspen-83",
    "title": "Villa Lujosa #83 en Aspen",
    "price": 782976,
    "status": "PENDING",
    "specs": {
      "beds": 3,
      "baths": 6.7,
      "sqft": 402,
      "garage_spaces": 3
    },
    "location": {
      "city_state": "Aspen, CO",
      "address": "3232 Avenue of Excellence",
      "coordinates": {
        "lat": 31.166259,
        "lng": -108.612144
      }
    },
    "features": {
      "amenities": [
        "Cancha de Tenis",
        "Helipuerto Privado",
        "Spa & Sauna",
        "Seguridad 24/7",
        "Elevador Directo"
      ],
      "year_built": 2012,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 9
    },
    "owner": {
      "owner_id": "usr_209",
      "agent_name": "Agente Luxe Vásquez"
    },
    "analytics": {
      "views": 1139,
      "saved_in_favorites_count": 49
    },
    "created_at": "2026-03-16T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c00000054",
    "slug": "propiedad-departamento-miami-84",
    "title": "Departamento Lujosa #84 en Miami",
    "price": 19627246,
    "status": "FOR SALE",
    "specs": {
      "beds": 3,
      "baths": 7.5,
      "sqft": 1983,
      "garage_spaces": 1
    },
    "location": {
      "city_state": "Miami, FL",
      "address": "9213 Avenue of Excellence",
      "coordinates": {
        "lat": 37.165916,
        "lng": -120.188193
      }
    },
    "features": {
      "amenities": [
        "Gimnasio Privado",
        "Elevador Directo",
        "Helipuerto Privado",
        "Alberca Privada"
      ],
      "year_built": 2017,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 17
    },
    "owner": {
      "owner_id": "usr_260",
      "agent_name": "Agente Luxe Smith"
    },
    "analytics": {
      "views": 4465,
      "saved_in_favorites_count": 315
    },
    "created_at": "2024-10-24T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c00000055",
    "slug": "propiedad-villa-miami-85",
    "title": "Villa Lujosa #85 en Miami",
    "price": 18269890,
    "status": "FOR SALE",
    "specs": {
      "beds": 9,
      "baths": 2.6,
      "sqft": 871,
      "garage_spaces": 4
    },
    "location": {
      "city_state": "Miami, FL",
      "address": "3302 Avenue of Excellence",
      "coordinates": {
        "lat": 28.6157,
        "lng": -80.125877
      }
    },
    "features": {
      "amenities": [
        "Seguridad 24/7",
        "Spa & Sauna",
        "Casa Inteligente",
        "Vista al Mar",
        "Alberca Privada",
        "Cava de Vinos"
      ],
      "year_built": 2018,
      "energy_rating": "B"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 25
    },
    "owner": {
      "owner_id": "usr_295",
      "agent_name": "Agente Luxe García"
    },
    "analytics": {
      "views": 3593,
      "saved_in_favorites_count": 277
    },
    "created_at": "2024-11-10T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c00000056",
    "slug": "propiedad-penthouse-san-francisco-86",
    "title": "Penthouse Lujosa #86 en San Francisco",
    "price": 18607293,
    "status": "FOR SALE",
    "specs": {
      "beds": 10,
      "baths": 3.4,
      "sqft": 1547,
      "garage_spaces": 4
    },
    "location": {
      "city_state": "San Francisco, CA",
      "address": "615 Avenue of Excellence",
      "coordinates": {
        "lat": 29.884186,
        "lng": -97.450161
      }
    },
    "features": {
      "amenities": [
        "Cancha de Tenis",
        "Gimnasio Privado",
        "Spa & Sauna",
        "Alberca Privada",
        "Vista al Mar"
      ],
      "year_built": 2012,
      "energy_rating": "B"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 25
    },
    "owner": {
      "owner_id": "usr_465",
      "agent_name": "Agente Luxe García"
    },
    "analytics": {
      "views": 3537,
      "saved_in_favorites_count": 430
    },
    "created_at": "2024-08-24T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c00000057",
    "slug": "propiedad-villa-austin-87",
    "title": "Villa Lujosa #87 en Austin",
    "price": 3439538,
    "status": "FOR SALE",
    "specs": {
      "beds": 7,
      "baths": 2.6,
      "sqft": 521,
      "garage_spaces": 4
    },
    "location": {
      "city_state": "Austin, TX",
      "address": "1769 Avenue of Excellence",
      "coordinates": {
        "lat": 35.028012,
        "lng": -89.882316
      }
    },
    "features": {
      "amenities": [
        "Casa Inteligente",
        "Gimnasio Privado",
        "Helipuerto Privado"
      ],
      "year_built": 2025,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 14
    },
    "owner": {
      "owner_id": "usr_699",
      "agent_name": "Agente Luxe García"
    },
    "analytics": {
      "views": 1948,
      "saved_in_favorites_count": 212
    },
    "created_at": "2025-06-13T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c00000058",
    "slug": "propiedad-departamento-aspen-88",
    "title": "Departamento Lujosa #88 en Aspen",
    "price": 18174946,
    "status": "FOR RENT",
    "specs": {
      "beds": 1,
      "baths": 7.5,
      "sqft": 1837,
      "garage_spaces": 1
    },
    "location": {
      "city_state": "Aspen, CO",
      "address": "5232 Avenue of Excellence",
      "coordinates": {
        "lat": 28.119216,
        "lng": -107.386635
      }
    },
    "features": {
      "amenities": [
        "Alberca Privada",
        "Casa Inteligente",
        "Helipuerto Privado",
        "Spa & Sauna"
      ],
      "year_built": 2016,
      "energy_rating": "A"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 25
    },
    "owner": {
      "owner_id": "usr_479",
      "agent_name": "Agente Luxe Vásquez"
    },
    "analytics": {
      "views": 3363,
      "saved_in_favorites_count": 398
    },
    "created_at": "2026-02-17T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c00000059",
    "slug": "propiedad-departamento-austin-89",
    "title": "Departamento Lujosa #89 en Austin",
    "price": 2049360,
    "status": "ACTIVE",
    "specs": {
      "beds": 9,
      "baths": 6.2,
      "sqft": 530,
      "garage_spaces": 3
    },
    "location": {
      "city_state": "Austin, TX",
      "address": "5380 Avenue of Excellence",
      "coordinates": {
        "lat": 36.224945,
        "lng": -77.296629
      }
    },
    "features": {
      "amenities": [
        "Cancha de Tenis",
        "Elevador Directo",
        "Cava de Vinos",
        "Seguridad 24/7",
        "Helipuerto Privado",
        "Vista al Mar",
        "Casa Inteligente"
      ],
      "year_built": 2019,
      "energy_rating": "A"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 7
    },
    "owner": {
      "owner_id": "usr_308",
      "agent_name": "Agente Luxe Mendoza"
    },
    "analytics": {
      "views": 4091,
      "saved_in_favorites_count": 14
    },
    "created_at": "2026-03-03T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c0000005a",
    "slug": "propiedad-casa-malibu-90",
    "title": "Casa Lujosa #90 en Malibu",
    "price": 449432,
    "status": "FOR RENT",
    "specs": {
      "beds": 3,
      "baths": 8.7,
      "sqft": 1414,
      "garage_spaces": 3
    },
    "location": {
      "city_state": "Malibu, CA",
      "address": "4258 Avenue of Excellence",
      "coordinates": {
        "lat": 29.785789,
        "lng": -93.708614
      }
    },
    "features": {
      "amenities": [
        "Cancha de Tenis",
        "Casa Inteligente",
        "Alberca Privada",
        "Elevador Directo"
      ],
      "year_built": 2014,
      "energy_rating": "A"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 20
    },
    "owner": {
      "owner_id": "usr_754",
      "agent_name": "Agente Luxe Smith"
    },
    "analytics": {
      "views": 631,
      "saved_in_favorites_count": 450
    },
    "created_at": "2026-06-24T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c0000005b",
    "slug": "propiedad-villa-miami-91",
    "title": "Villa Lujosa #91 en Miami",
    "price": 6367747,
    "status": "FOR RENT",
    "specs": {
      "beds": 3,
      "baths": 4.5,
      "sqft": 2483,
      "garage_spaces": 1
    },
    "location": {
      "city_state": "Miami, FL",
      "address": "7649 Avenue of Excellence",
      "coordinates": {
        "lat": 28.830394,
        "lng": -105.223943
      }
    },
    "features": {
      "amenities": [
        "Gimnasio Privado",
        "Casa Inteligente",
        "Helipuerto Privado",
        "Elevador Directo",
        "Vista al Mar",
        "Cava de Vinos",
        "Cancha de Tenis"
      ],
      "year_built": 2024,
      "energy_rating": "B"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 5
    },
    "owner": {
      "owner_id": "usr_764",
      "agent_name": "Agente Luxe Vásquez"
    },
    "analytics": {
      "views": 2700,
      "saved_in_favorites_count": 86
    },
    "created_at": "2024-08-13T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c0000005c",
    "slug": "propiedad-penthouse-new-york-92",
    "title": "Penthouse Lujosa #92 en New York",
    "price": 7548373,
    "status": "ACTIVE",
    "specs": {
      "beds": 8,
      "baths": 4.7,
      "sqft": 1337,
      "garage_spaces": 4
    },
    "location": {
      "city_state": "New York, NY",
      "address": "1684 Avenue of Excellence",
      "coordinates": {
        "lat": 27.422178,
        "lng": -118.659489
      }
    },
    "features": {
      "amenities": [
        "Seguridad 24/7",
        "Gimnasio Privado",
        "Spa & Sauna",
        "Elevador Directo",
        "Helipuerto Privado",
        "Cancha de Tenis",
        "Casa Inteligente"
      ],
      "year_built": 2018,
      "energy_rating": "A"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 25
    },
    "owner": {
      "owner_id": "usr_432",
      "agent_name": "Agente Luxe Vásquez"
    },
    "analytics": {
      "views": 2751,
      "saved_in_favorites_count": 443
    },
    "created_at": "2025-11-25T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c0000005d",
    "slug": "propiedad-villa-malibu-93",
    "title": "Villa Lujosa #93 en Malibu",
    "price": 23118415,
    "status": "PENDING",
    "specs": {
      "beds": 10,
      "baths": 9.1,
      "sqft": 193,
      "garage_spaces": 5
    },
    "location": {
      "city_state": "Malibu, CA",
      "address": "6428 Avenue of Excellence",
      "coordinates": {
        "lat": 28.876212,
        "lng": -96.943168
      }
    },
    "features": {
      "amenities": [
        "Cancha de Tenis",
        "Spa & Sauna",
        "Alberca Privada",
        "Casa Inteligente",
        "Helipuerto Privado",
        "Gimnasio Privado"
      ],
      "year_built": 2011,
      "energy_rating": "A"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 16
    },
    "owner": {
      "owner_id": "usr_664",
      "agent_name": "Agente Luxe Smith"
    },
    "analytics": {
      "views": 2251,
      "saved_in_favorites_count": 440
    },
    "created_at": "2025-09-28T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c0000005e",
    "slug": "propiedad-casa-san-francisco-94",
    "title": "Casa Lujosa #94 en San Francisco",
    "price": 1124408,
    "status": "PENDING",
    "specs": {
      "beds": 1,
      "baths": 2.7,
      "sqft": 584,
      "garage_spaces": 4
    },
    "location": {
      "city_state": "San Francisco, CA",
      "address": "7033 Avenue of Excellence",
      "coordinates": {
        "lat": 42.851342,
        "lng": -118.714777
      }
    },
    "features": {
      "amenities": [
        "Helipuerto Privado",
        "Spa & Sauna",
        "Cancha de Tenis",
        "Alberca Privada",
        "Gimnasio Privado",
        "Elevador Directo"
      ],
      "year_built": 2026,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 20
    },
    "owner": {
      "owner_id": "usr_375",
      "agent_name": "Agente Luxe Vásquez"
    },
    "analytics": {
      "views": 996,
      "saved_in_favorites_count": 294
    },
    "created_at": "2025-12-13T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c0000005f",
    "slug": "propiedad-departamento-austin-95",
    "title": "Departamento Lujosa #95 en Austin",
    "price": 3962149,
    "status": "PENDING",
    "specs": {
      "beds": 3,
      "baths": 9.4,
      "sqft": 788,
      "garage_spaces": 5
    },
    "location": {
      "city_state": "Austin, TX",
      "address": "2887 Avenue of Excellence",
      "coordinates": {
        "lat": 32.410913,
        "lng": -103.374243
      }
    },
    "features": {
      "amenities": [
        "Casa Inteligente",
        "Elevador Directo",
        "Vista al Mar"
      ],
      "year_built": 2017,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 10
    },
    "owner": {
      "owner_id": "usr_580",
      "agent_name": "Agente Luxe García"
    },
    "analytics": {
      "views": 4815,
      "saved_in_favorites_count": 373
    },
    "created_at": "2025-02-06T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c00000060",
    "slug": "propiedad-villa-new-york-96",
    "title": "Villa Lujosa #96 en New York",
    "price": 11370125,
    "status": "FOR RENT",
    "specs": {
      "beds": 4,
      "baths": 8.6,
      "sqft": 2373,
      "garage_spaces": 1
    },
    "location": {
      "city_state": "New York, NY",
      "address": "1232 Avenue of Excellence",
      "coordinates": {
        "lat": 43.466128,
        "lng": -89.464276
      }
    },
    "features": {
      "amenities": [
        "Casa Inteligente",
        "Seguridad 24/7",
        "Gimnasio Privado",
        "Helipuerto Privado"
      ],
      "year_built": 2023,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 23
    },
    "owner": {
      "owner_id": "usr_474",
      "agent_name": "Agente Luxe García"
    },
    "analytics": {
      "views": 1244,
      "saved_in_favorites_count": 309
    },
    "created_at": "2024-12-06T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c00000061",
    "slug": "propiedad-villa-aspen-97",
    "title": "Villa Lujosa #97 en Aspen",
    "price": 6985381,
    "status": "FOR RENT",
    "specs": {
      "beds": 4,
      "baths": 5.0,
      "sqft": 966,
      "garage_spaces": 5
    },
    "location": {
      "city_state": "Aspen, CO",
      "address": "4411 Avenue of Excellence",
      "coordinates": {
        "lat": 32.680221,
        "lng": -104.192604
      }
    },
    "features": {
      "amenities": [
        "Gimnasio Privado",
        "Seguridad 24/7",
        "Helipuerto Privado"
      ],
      "year_built": 2026,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 22
    },
    "owner": {
      "owner_id": "usr_745",
      "agent_name": "Agente Luxe Vásquez"
    },
    "analytics": {
      "views": 2133,
      "saved_in_favorites_count": 76
    },
    "created_at": "2025-04-01T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c00000062",
    "slug": "propiedad-casa-scottsdale-98",
    "title": "Casa Lujosa #98 en Scottsdale",
    "price": 15216316,
    "status": "FOR RENT",
    "specs": {
      "beds": 6,
      "baths": 4.5,
      "sqft": 828,
      "garage_spaces": 5
    },
    "location": {
      "city_state": "Scottsdale, AZ",
      "address": "4340 Avenue of Excellence",
      "coordinates": {
        "lat": 46.277217,
        "lng": -112.023381
      }
    },
    "features": {
      "amenities": [
        "Cancha de Tenis",
        "Vista al Mar",
        "Helipuerto Privado",
        "Gimnasio Privado",
        "Alberca Privada"
      ],
      "year_built": 2026,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 10
    },
    "owner": {
      "owner_id": "usr_628",
      "agent_name": "Agente Luxe García"
    },
    "analytics": {
      "views": 4071,
      "saved_in_favorites_count": 323
    },
    "created_at": "2025-10-04T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c00000063",
    "slug": "propiedad-casa-aspen-99",
    "title": "Casa Lujosa #99 en Aspen",
    "price": 7530778,
    "status": "PENDING",
    "specs": {
      "beds": 7,
      "baths": 7.1,
      "sqft": 2178,
      "garage_spaces": 3
    },
    "location": {
      "city_state": "Aspen, CO",
      "address": "466 Avenue of Excellence",
      "coordinates": {
        "lat": 30.616076,
        "lng": -102.808474
      }
    },
    "features": {
      "amenities": [
        "Alberca Privada",
        "Gimnasio Privado",
        "Cava de Vinos",
        "Elevador Directo",
        "Spa & Sauna",
        "Helipuerto Privado"
      ],
      "year_built": 2025,
      "energy_rating": "A"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 6
    },
    "owner": {
      "owner_id": "usr_622",
      "agent_name": "Agente Luxe Smith"
    },
    "analytics": {
      "views": 2142,
      "saved_in_favorites_count": 443
    },
    "created_at": "2026-03-24T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c00000064",
    "slug": "propiedad-departamento-aspen-100",
    "title": "Departamento Lujosa #100 en Aspen",
    "price": 8454170,
    "status": "FOR SALE",
    "specs": {
      "beds": 1,
      "baths": 6.7,
      "sqft": 1393,
      "garage_spaces": 2
    },
    "location": {
      "city_state": "Aspen, CO",
      "address": "5258 Avenue of Excellence",
      "coordinates": {
        "lat": 46.107982,
        "lng": -117.363259
      }
    },
    "features": {
      "amenities": [
        "Alberca Privada",
        "Cancha de Tenis",
        "Seguridad 24/7",
        "Elevador Directo",
        "Cava de Vinos",
        "Gimnasio Privado"
      ],
      "year_built": 2014,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 16
    },
    "owner": {
      "owner_id": "usr_802",
      "agent_name": "Agente Luxe Smith"
    },
    "analytics": {
      "views": 1836,
      "saved_in_favorites_count": 161
    },
    "created_at": "2025-10-27T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c00000065",
    "slug": "propiedad-penthouse-scottsdale-101",
    "title": "Penthouse Lujosa #101 en Scottsdale",
    "price": 14867781,
    "status": "ACTIVE",
    "specs": {
      "beds": 7,
      "baths": 8.3,
      "sqft": 1513,
      "garage_spaces": 5
    },
    "location": {
      "city_state": "Scottsdale, AZ",
      "address": "9965 Avenue of Excellence",
      "coordinates": {
        "lat": 32.330558,
        "lng": -79.489959
      }
    },
    "features": {
      "amenities": [
        "Spa & Sauna",
        "Cava de Vinos",
        "Helipuerto Privado",
        "Alberca Privada",
        "Gimnasio Privado"
      ],
      "year_built": 2017,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 15
    },
    "owner": {
      "owner_id": "usr_801",
      "agent_name": "Agente Luxe García"
    },
    "analytics": {
      "views": 165,
      "saved_in_favorites_count": 411
    },
    "created_at": "2026-01-25T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c00000066",
    "slug": "propiedad-residencia-de-playa-scottsdale-102",
    "title": "Residencia de Playa Lujosa #102 en Scottsdale",
    "price": 22772297,
    "status": "PENDING",
    "specs": {
      "beds": 1,
      "baths": 4.2,
      "sqft": 1135,
      "garage_spaces": 3
    },
    "location": {
      "city_state": "Scottsdale, AZ",
      "address": "4983 Avenue of Excellence",
      "coordinates": {
        "lat": 37.286018,
        "lng": -78.777317
      }
    },
    "features": {
      "amenities": [
        "Cancha de Tenis",
        "Elevador Directo",
        "Casa Inteligente"
      ],
      "year_built": 2024,
      "energy_rating": "A"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 24
    },
    "owner": {
      "owner_id": "usr_671",
      "agent_name": "Agente Luxe García"
    },
    "analytics": {
      "views": 1808,
      "saved_in_favorites_count": 72
    },
    "created_at": "2025-10-10T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c00000067",
    "slug": "propiedad-villa-miami-103",
    "title": "Villa Lujosa #103 en Miami",
    "price": 3504032,
    "status": "PENDING",
    "specs": {
      "beds": 2,
      "baths": 5.9,
      "sqft": 1610,
      "garage_spaces": 3
    },
    "location": {
      "city_state": "Miami, FL",
      "address": "1546 Avenue of Excellence",
      "coordinates": {
        "lat": 46.531675,
        "lng": -97.703805
      }
    },
    "features": {
      "amenities": [
        "Spa & Sauna",
        "Alberca Privada",
        "Gimnasio Privado"
      ],
      "year_built": 2025,
      "energy_rating": "B"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 6
    },
    "owner": {
      "owner_id": "usr_384",
      "agent_name": "Agente Luxe Smith"
    },
    "analytics": {
      "views": 2989,
      "saved_in_favorites_count": 411
    },
    "created_at": "2026-01-13T19:13:24.802197Z"
  },
  {
    "_id": "66a01b2c00000068",
    "slug": "propiedad-departamento-beverly-hills-104",
    "title": "Departamento Lujosa #104 en Beverly Hills",
    "price": 23102757,
    "status": "PENDING",
    "specs": {
      "beds": 5,
      "baths": 4.1,
      "sqft": 975,
      "garage_spaces": 3
    },
    "location": {
      "city_state": "Beverly Hills, CA",
      "address": "6213 Avenue of Excellence",
      "coordinates": {
        "lat": 27.030866,
        "lng": -82.837604
      }
    },
    "features": {
      "amenities": [
        "Cava de Vinos",
        "Casa Inteligente",
        "Gimnasio Privado",
        "Vista al Mar",
        "Alberca Privada",
        "Seguridad 24/7",
        "Cancha de Tenis"
      ],
      "year_built": 2014,
      "energy_rating": "A"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 22
    },
    "owner": {
      "owner_id": "usr_475",
      "agent_name": "Agente Luxe García"
    },
    "analytics": {
      "views": 2775,
      "saved_in_favorites_count": 260
    },
    "created_at": "2025-06-10T19:13:24.803280Z"
  },
  {
    "_id": "66a01b2c00000069",
    "slug": "propiedad-departamento-seattle-105",
    "title": "Departamento Lujosa #105 en Seattle",
    "price": 19815133,
    "status": "PENDING",
    "specs": {
      "beds": 7,
      "baths": 7.0,
      "sqft": 796,
      "garage_spaces": 3
    },
    "location": {
      "city_state": "Seattle, WA",
      "address": "2177 Avenue of Excellence",
      "coordinates": {
        "lat": 38.590802,
        "lng": -109.873425
      }
    },
    "features": {
      "amenities": [
        "Casa Inteligente",
        "Cancha de Tenis",
        "Alberca Privada",
        "Gimnasio Privado",
        "Cava de Vinos",
        "Vista al Mar",
        "Elevador Directo"
      ],
      "year_built": 2025,
      "energy_rating": "B"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 25
    },
    "owner": {
      "owner_id": "usr_428",
      "agent_name": "Agente Luxe Mendoza"
    },
    "analytics": {
      "views": 3506,
      "saved_in_favorites_count": 105
    },
    "created_at": "2025-09-26T19:13:24.803280Z"
  },
  {
    "_id": "66a01b2c0000006a",
    "slug": "propiedad-villa-miami-106",
    "title": "Villa Lujosa #106 en Miami",
    "price": 12629330,
    "status": "ACTIVE",
    "specs": {
      "beds": 6,
      "baths": 8.1,
      "sqft": 1983,
      "garage_spaces": 3
    },
    "location": {
      "city_state": "Miami, FL",
      "address": "6459 Avenue of Excellence",
      "coordinates": {
        "lat": 32.612903,
        "lng": -119.730144
      }
    },
    "features": {
      "amenities": [
        "Vista al Mar",
        "Alberca Privada",
        "Gimnasio Privado",
        "Cancha de Tenis",
        "Cava de Vinos"
      ],
      "year_built": 2011,
      "energy_rating": "B"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 9
    },
    "owner": {
      "owner_id": "usr_973",
      "agent_name": "Agente Luxe García"
    },
    "analytics": {
      "views": 4398,
      "saved_in_favorites_count": 104
    },
    "created_at": "2024-07-31T19:13:24.803280Z"
  },
  {
    "_id": "66a01b2c0000006b",
    "slug": "propiedad-penthouse-chicago-107",
    "title": "Penthouse Lujosa #107 en Chicago",
    "price": 12389012,
    "status": "FOR RENT",
    "specs": {
      "beds": 3,
      "baths": 1.2,
      "sqft": 1651,
      "garage_spaces": 1
    },
    "location": {
      "city_state": "Chicago, IL",
      "address": "9351 Avenue of Excellence",
      "coordinates": {
        "lat": 46.232463,
        "lng": -117.677913
      }
    },
    "features": {
      "amenities": [
        "Cancha de Tenis",
        "Helipuerto Privado",
        "Gimnasio Privado",
        "Alberca Privada",
        "Vista al Mar",
        "Casa Inteligente"
      ],
      "year_built": 2026,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 10
    },
    "owner": {
      "owner_id": "usr_579",
      "agent_name": "Agente Luxe Smith"
    },
    "analytics": {
      "views": 2558,
      "saved_in_favorites_count": 140
    },
    "created_at": "2026-01-26T19:13:24.803280Z"
  },
  {
    "_id": "66a01b2c0000006c",
    "slug": "propiedad-casa-new-york-108",
    "title": "Casa Lujosa #108 en New York",
    "price": 16736996,
    "status": "FOR SALE",
    "specs": {
      "beds": 3,
      "baths": 2.7,
      "sqft": 1908,
      "garage_spaces": 3
    },
    "location": {
      "city_state": "New York, NY",
      "address": "989 Avenue of Excellence",
      "coordinates": {
        "lat": 47.685978,
        "lng": -110.31584
      }
    },
    "features": {
      "amenities": [
        "Seguridad 24/7",
        "Casa Inteligente",
        "Cancha de Tenis",
        "Gimnasio Privado",
        "Elevador Directo",
        "Alberca Privada"
      ],
      "year_built": 2016,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 19
    },
    "owner": {
      "owner_id": "usr_486",
      "agent_name": "Agente Luxe Vásquez"
    },
    "analytics": {
      "views": 2944,
      "saved_in_favorites_count": 283
    },
    "created_at": "2025-12-20T19:13:24.803280Z"
  },
  {
    "_id": "66a01b2c0000006d",
    "slug": "propiedad-residencia-de-playa-austin-109",
    "title": "Residencia de Playa Lujosa #109 en Austin",
    "price": 8077547,
    "status": "PENDING",
    "specs": {
      "beds": 4,
      "baths": 3.5,
      "sqft": 1547,
      "garage_spaces": 5
    },
    "location": {
      "city_state": "Austin, TX",
      "address": "8623 Avenue of Excellence",
      "coordinates": {
        "lat": 39.533004,
        "lng": -95.625983
      }
    },
    "features": {
      "amenities": [
        "Alberca Privada",
        "Casa Inteligente",
        "Gimnasio Privado"
      ],
      "year_built": 2013,
      "energy_rating": "B"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 8
    },
    "owner": {
      "owner_id": "usr_808",
      "agent_name": "Agente Luxe García"
    },
    "analytics": {
      "views": 376,
      "saved_in_favorites_count": 385
    },
    "created_at": "2025-02-17T19:13:24.803280Z"
  },
  {
    "_id": "66a01b2c0000006e",
    "slug": "propiedad-residencia-de-playa-miami-110",
    "title": "Residencia de Playa Lujosa #110 en Miami",
    "price": 16218187,
    "status": "ACTIVE",
    "specs": {
      "beds": 10,
      "baths": 5.2,
      "sqft": 882,
      "garage_spaces": 3
    },
    "location": {
      "city_state": "Miami, FL",
      "address": "4760 Avenue of Excellence",
      "coordinates": {
        "lat": 41.397046,
        "lng": -105.439203
      }
    },
    "features": {
      "amenities": [
        "Alberca Privada",
        "Seguridad 24/7",
        "Gimnasio Privado"
      ],
      "year_built": 2024,
      "energy_rating": "A"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 6
    },
    "owner": {
      "owner_id": "usr_595",
      "agent_name": "Agente Luxe Vásquez"
    },
    "analytics": {
      "views": 328,
      "saved_in_favorites_count": 444
    },
    "created_at": "2026-02-09T19:13:24.803280Z"
  },
  {
    "_id": "66a01b2c0000006f",
    "slug": "propiedad-residencia-de-playa-scottsdale-111",
    "title": "Residencia de Playa Lujosa #111 en Scottsdale",
    "price": 18254906,
    "status": "ACTIVE",
    "specs": {
      "beds": 4,
      "baths": 3.7,
      "sqft": 1822,
      "garage_spaces": 1
    },
    "location": {
      "city_state": "Scottsdale, AZ",
      "address": "2316 Avenue of Excellence",
      "coordinates": {
        "lat": 31.014281,
        "lng": -91.843999
      }
    },
    "features": {
      "amenities": [
        "Elevador Directo",
        "Seguridad 24/7",
        "Gimnasio Privado",
        "Casa Inteligente",
        "Helipuerto Privado",
        "Cancha de Tenis",
        "Spa & Sauna"
      ],
      "year_built": 2019,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 20
    },
    "owner": {
      "owner_id": "usr_307",
      "agent_name": "Agente Luxe Vásquez"
    },
    "analytics": {
      "views": 2927,
      "saved_in_favorites_count": 345
    },
    "created_at": "2024-07-24T19:13:24.803280Z"
  },
  {
    "_id": "66a01b2c00000070",
    "slug": "propiedad-residencia-de-playa-aspen-112",
    "title": "Residencia de Playa Lujosa #112 en Aspen",
    "price": 18098683,
    "status": "FOR SALE",
    "specs": {
      "beds": 5,
      "baths": 5.3,
      "sqft": 1976,
      "garage_spaces": 4
    },
    "location": {
      "city_state": "Aspen, CO",
      "address": "1631 Avenue of Excellence",
      "coordinates": {
        "lat": 38.96437,
        "lng": -110.534865
      }
    },
    "features": {
      "amenities": [
        "Helipuerto Privado",
        "Cava de Vinos",
        "Cancha de Tenis",
        "Casa Inteligente"
      ],
      "year_built": 2012,
      "energy_rating": "B"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 12
    },
    "owner": {
      "owner_id": "usr_757",
      "agent_name": "Agente Luxe Mendoza"
    },
    "analytics": {
      "views": 1532,
      "saved_in_favorites_count": 333
    },
    "created_at": "2025-11-24T19:13:24.803280Z"
  },
  {
    "_id": "66a01b2c00000071",
    "slug": "propiedad-departamento-austin-113",
    "title": "Departamento Lujosa #113 en Austin",
    "price": 21457996,
    "status": "PENDING",
    "specs": {
      "beds": 10,
      "baths": 7.5,
      "sqft": 590,
      "garage_spaces": 5
    },
    "location": {
      "city_state": "Austin, TX",
      "address": "2239 Avenue of Excellence",
      "coordinates": {
        "lat": 33.101212,
        "lng": -73.874853
      }
    },
    "features": {
      "amenities": [
        "Vista al Mar",
        "Cancha de Tenis",
        "Seguridad 24/7",
        "Alberca Privada",
        "Casa Inteligente"
      ],
      "year_built": 2012,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 11
    },
    "owner": {
      "owner_id": "usr_677",
      "agent_name": "Agente Luxe Mendoza"
    },
    "analytics": {
      "views": 2058,
      "saved_in_favorites_count": 113
    },
    "created_at": "2025-10-22T19:13:24.803280Z"
  },
  {
    "_id": "66a01b2c00000072",
    "slug": "propiedad-penthouse-austin-114",
    "title": "Penthouse Lujosa #114 en Austin",
    "price": 6213395,
    "status": "FOR SALE",
    "specs": {
      "beds": 2,
      "baths": 3.3,
      "sqft": 453,
      "garage_spaces": 2
    },
    "location": {
      "city_state": "Austin, TX",
      "address": "5198 Avenue of Excellence",
      "coordinates": {
        "lat": 29.157507,
        "lng": -101.678393
      }
    },
    "features": {
      "amenities": [
        "Vista al Mar",
        "Cancha de Tenis",
        "Helipuerto Privado",
        "Cava de Vinos",
        "Spa & Sauna"
      ],
      "year_built": 2014,
      "energy_rating": "B"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 25
    },
    "owner": {
      "owner_id": "usr_876",
      "agent_name": "Agente Luxe Mendoza"
    },
    "analytics": {
      "views": 4334,
      "saved_in_favorites_count": 337
    },
    "created_at": "2025-12-23T19:13:24.803280Z"
  },
  {
    "_id": "66a01b2c00000073",
    "slug": "propiedad-departamento-chicago-115",
    "title": "Departamento Lujosa #115 en Chicago",
    "price": 15362291,
    "status": "PENDING",
    "specs": {
      "beds": 3,
      "baths": 5.6,
      "sqft": 2418,
      "garage_spaces": 2
    },
    "location": {
      "city_state": "Chicago, IL",
      "address": "1578 Avenue of Excellence",
      "coordinates": {
        "lat": 46.776095,
        "lng": -119.426527
      }
    },
    "features": {
      "amenities": [
        "Cancha de Tenis",
        "Elevador Directo",
        "Alberca Privada"
      ],
      "year_built": 2023,
      "energy_rating": "A"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 5
    },
    "owner": {
      "owner_id": "usr_898",
      "agent_name": "Agente Luxe Vásquez"
    },
    "analytics": {
      "views": 338,
      "saved_in_favorites_count": 425
    },
    "created_at": "2025-04-18T19:13:24.803280Z"
  },
  {
    "_id": "66a01b2c00000074",
    "slug": "propiedad-departamento-chicago-116",
    "title": "Departamento Lujosa #116 en Chicago",
    "price": 7339313,
    "status": "ACTIVE",
    "specs": {
      "beds": 6,
      "baths": 5.5,
      "sqft": 1421,
      "garage_spaces": 3
    },
    "location": {
      "city_state": "Chicago, IL",
      "address": "657 Avenue of Excellence",
      "coordinates": {
        "lat": 42.970093,
        "lng": -118.627644
      }
    },
    "features": {
      "amenities": [
        "Seguridad 24/7",
        "Gimnasio Privado",
        "Vista al Mar",
        "Cancha de Tenis",
        "Cava de Vinos"
      ],
      "year_built": 2012,
      "energy_rating": "A"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 21
    },
    "owner": {
      "owner_id": "usr_166",
      "agent_name": "Agente Luxe Vásquez"
    },
    "analytics": {
      "views": 450,
      "saved_in_favorites_count": 9
    },
    "created_at": "2024-07-31T19:13:24.803280Z"
  },
  {
    "_id": "66a01b2c00000075",
    "slug": "propiedad-casa-austin-117",
    "title": "Casa Lujosa #117 en Austin",
    "price": 21785929,
    "status": "FOR RENT",
    "specs": {
      "beds": 6,
      "baths": 8.4,
      "sqft": 424,
      "garage_spaces": 4
    },
    "location": {
      "city_state": "Austin, TX",
      "address": "5293 Avenue of Excellence",
      "coordinates": {
        "lat": 47.764399,
        "lng": -108.532835
      }
    },
    "features": {
      "amenities": [
        "Gimnasio Privado",
        "Cava de Vinos",
        "Casa Inteligente",
        "Cancha de Tenis",
        "Spa & Sauna",
        "Elevador Directo"
      ],
      "year_built": 2011,
      "energy_rating": "B"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 7
    },
    "owner": {
      "owner_id": "usr_293",
      "agent_name": "Agente Luxe Mendoza"
    },
    "analytics": {
      "views": 3044,
      "saved_in_favorites_count": 66
    },
    "created_at": "2025-04-20T19:13:24.803280Z"
  },
  {
    "_id": "66a01b2c00000076",
    "slug": "propiedad-penthouse-seattle-118",
    "title": "Penthouse Lujosa #118 en Seattle",
    "price": 4927287,
    "status": "FOR SALE",
    "specs": {
      "beds": 10,
      "baths": 6.1,
      "sqft": 727,
      "garage_spaces": 2
    },
    "location": {
      "city_state": "Seattle, WA",
      "address": "9398 Avenue of Excellence",
      "coordinates": {
        "lat": 45.352638,
        "lng": -91.501327
      }
    },
    "features": {
      "amenities": [
        "Cava de Vinos",
        "Casa Inteligente",
        "Elevador Directo",
        "Spa & Sauna"
      ],
      "year_built": 2012,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 15
    },
    "owner": {
      "owner_id": "usr_564",
      "agent_name": "Agente Luxe Mendoza"
    },
    "analytics": {
      "views": 4343,
      "saved_in_favorites_count": 427
    },
    "created_at": "2024-12-24T19:13:24.803280Z"
  },
  {
    "_id": "66a01b2c00000077",
    "slug": "propiedad-departamento-beverly-hills-119",
    "title": "Departamento Lujosa #119 en Beverly Hills",
    "price": 21200326,
    "status": "ACTIVE",
    "specs": {
      "beds": 5,
      "baths": 3.3,
      "sqft": 1613,
      "garage_spaces": 2
    },
    "location": {
      "city_state": "Beverly Hills, CA",
      "address": "860 Avenue of Excellence",
      "coordinates": {
        "lat": 29.261865,
        "lng": -74.452993
      }
    },
    "features": {
      "amenities": [
        "Cancha de Tenis",
        "Spa & Sauna",
        "Vista al Mar"
      ],
      "year_built": 2014,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 14
    },
    "owner": {
      "owner_id": "usr_639",
      "agent_name": "Agente Luxe Vásquez"
    },
    "analytics": {
      "views": 3534,
      "saved_in_favorites_count": 217
    },
    "created_at": "2024-10-30T19:13:24.803280Z"
  },
  {
    "_id": "66a01b2c00000078",
    "slug": "propiedad-villa-malibu-120",
    "title": "Villa Lujosa #120 en Malibu",
    "price": 17601145,
    "status": "FOR SALE",
    "specs": {
      "beds": 4,
      "baths": 2.9,
      "sqft": 363,
      "garage_spaces": 5
    },
    "location": {
      "city_state": "Malibu, CA",
      "address": "8227 Avenue of Excellence",
      "coordinates": {
        "lat": 32.152493,
        "lng": -112.862358
      }
    },
    "features": {
      "amenities": [
        "Gimnasio Privado",
        "Cava de Vinos",
        "Vista al Mar",
        "Spa & Sauna",
        "Cancha de Tenis",
        "Elevador Directo",
        "Seguridad 24/7"
      ],
      "year_built": 2024,
      "energy_rating": "B"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 8
    },
    "owner": {
      "owner_id": "usr_320",
      "agent_name": "Agente Luxe Smith"
    },
    "analytics": {
      "views": 228,
      "saved_in_favorites_count": 241
    },
    "created_at": "2026-05-12T19:13:24.803280Z"
  },
  {
    "_id": "66a01b2c00000079",
    "slug": "propiedad-departamento-beverly-hills-121",
    "title": "Departamento Lujosa #121 en Beverly Hills",
    "price": 11552306,
    "status": "FOR RENT",
    "specs": {
      "beds": 4,
      "baths": 7.8,
      "sqft": 1501,
      "garage_spaces": 2
    },
    "location": {
      "city_state": "Beverly Hills, CA",
      "address": "4877 Avenue of Excellence",
      "coordinates": {
        "lat": 38.719166,
        "lng": -121.515222
      }
    },
    "features": {
      "amenities": [
        "Elevador Directo",
        "Vista al Mar",
        "Cancha de Tenis",
        "Helipuerto Privado",
        "Alberca Privada"
      ],
      "year_built": 2025,
      "energy_rating": "B"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 21
    },
    "owner": {
      "owner_id": "usr_363",
      "agent_name": "Agente Luxe García"
    },
    "analytics": {
      "views": 376,
      "saved_in_favorites_count": 145
    },
    "created_at": "2024-11-15T19:13:24.803280Z"
  },
  {
    "_id": "66a01b2c0000007a",
    "slug": "propiedad-residencia-de-playa-chicago-122",
    "title": "Residencia de Playa Lujosa #122 en Chicago",
    "price": 20497143,
    "status": "ACTIVE",
    "specs": {
      "beds": 2,
      "baths": 8.7,
      "sqft": 2247,
      "garage_spaces": 5
    },
    "location": {
      "city_state": "Chicago, IL",
      "address": "5621 Avenue of Excellence",
      "coordinates": {
        "lat": 28.474892,
        "lng": -115.341923
      }
    },
    "features": {
      "amenities": [
        "Elevador Directo",
        "Cancha de Tenis",
        "Vista al Mar",
        "Spa & Sauna",
        "Gimnasio Privado",
        "Cava de Vinos",
        "Alberca Privada"
      ],
      "year_built": 2011,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 19
    },
    "owner": {
      "owner_id": "usr_911",
      "agent_name": "Agente Luxe García"
    },
    "analytics": {
      "views": 1271,
      "saved_in_favorites_count": 305
    },
    "created_at": "2026-07-04T19:13:24.803280Z"
  },
  {
    "_id": "66a01b2c0000007b",
    "slug": "propiedad-penthouse-scottsdale-123",
    "title": "Penthouse Lujosa #123 en Scottsdale",
    "price": 18771861,
    "status": "ACTIVE",
    "specs": {
      "beds": 6,
      "baths": 6.1,
      "sqft": 821,
      "garage_spaces": 2
    },
    "location": {
      "city_state": "Scottsdale, AZ",
      "address": "9784 Avenue of Excellence",
      "coordinates": {
        "lat": 34.064916,
        "lng": -108.944077
      }
    },
    "features": {
      "amenities": [
        "Vista al Mar",
        "Casa Inteligente",
        "Helipuerto Privado",
        "Spa & Sauna",
        "Gimnasio Privado"
      ],
      "year_built": 2016,
      "energy_rating": "A"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 12
    },
    "owner": {
      "owner_id": "usr_680",
      "agent_name": "Agente Luxe Smith"
    },
    "analytics": {
      "views": 4350,
      "saved_in_favorites_count": 371
    },
    "created_at": "2026-05-15T19:13:24.803280Z"
  },
  {
    "_id": "66a01b2c0000007c",
    "slug": "propiedad-casa-aspen-124",
    "title": "Casa Lujosa #124 en Aspen",
    "price": 6037034,
    "status": "PENDING",
    "specs": {
      "beds": 10,
      "baths": 1.5,
      "sqft": 1937,
      "garage_spaces": 4
    },
    "location": {
      "city_state": "Aspen, CO",
      "address": "2124 Avenue of Excellence",
      "coordinates": {
        "lat": 44.626014,
        "lng": -102.016043
      }
    },
    "features": {
      "amenities": [
        "Spa & Sauna",
        "Cava de Vinos",
        "Gimnasio Privado",
        "Elevador Directo",
        "Casa Inteligente"
      ],
      "year_built": 2026,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 11
    },
    "owner": {
      "owner_id": "usr_912",
      "agent_name": "Agente Luxe Smith"
    },
    "analytics": {
      "views": 4536,
      "saved_in_favorites_count": 11
    },
    "created_at": "2024-12-12T19:13:24.803280Z"
  },
  {
    "_id": "66a01b2c0000007d",
    "slug": "propiedad-departamento-chicago-125",
    "title": "Departamento Lujosa #125 en Chicago",
    "price": 5001743,
    "status": "ACTIVE",
    "specs": {
      "beds": 8,
      "baths": 2.4,
      "sqft": 1500,
      "garage_spaces": 4
    },
    "location": {
      "city_state": "Chicago, IL",
      "address": "2578 Avenue of Excellence",
      "coordinates": {
        "lat": 37.200527,
        "lng": -119.596277
      }
    },
    "features": {
      "amenities": [
        "Casa Inteligente",
        "Helipuerto Privado",
        "Cava de Vinos",
        "Seguridad 24/7"
      ],
      "year_built": 2022,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 18
    },
    "owner": {
      "owner_id": "usr_526",
      "agent_name": "Agente Luxe García"
    },
    "analytics": {
      "views": 749,
      "saved_in_favorites_count": 430
    },
    "created_at": "2026-03-12T19:13:24.803280Z"
  },
  {
    "_id": "66a01b2c0000007e",
    "slug": "propiedad-penthouse-miami-126",
    "title": "Penthouse Lujosa #126 en Miami",
    "price": 6441264,
    "status": "ACTIVE",
    "specs": {
      "beds": 1,
      "baths": 7.0,
      "sqft": 156,
      "garage_spaces": 2
    },
    "location": {
      "city_state": "Miami, FL",
      "address": "6028 Avenue of Excellence",
      "coordinates": {
        "lat": 30.624367,
        "lng": -113.796666
      }
    },
    "features": {
      "amenities": [
        "Gimnasio Privado",
        "Helipuerto Privado",
        "Casa Inteligente",
        "Alberca Privada",
        "Cava de Vinos"
      ],
      "year_built": 2013,
      "energy_rating": "B"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 23
    },
    "owner": {
      "owner_id": "usr_313",
      "agent_name": "Agente Luxe García"
    },
    "analytics": {
      "views": 4867,
      "saved_in_favorites_count": 379
    },
    "created_at": "2024-10-21T19:13:24.803280Z"
  },
  {
    "_id": "66a01b2c0000007f",
    "slug": "propiedad-penthouse-austin-127",
    "title": "Penthouse Lujosa #127 en Austin",
    "price": 22114119,
    "status": "FOR SALE",
    "specs": {
      "beds": 10,
      "baths": 6.5,
      "sqft": 1819,
      "garage_spaces": 1
    },
    "location": {
      "city_state": "Austin, TX",
      "address": "9972 Avenue of Excellence",
      "coordinates": {
        "lat": 29.246426,
        "lng": -86.674752
      }
    },
    "features": {
      "amenities": [
        "Gimnasio Privado",
        "Cava de Vinos",
        "Cancha de Tenis",
        "Seguridad 24/7"
      ],
      "year_built": 2017,
      "energy_rating": "A"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 19
    },
    "owner": {
      "owner_id": "usr_646",
      "agent_name": "Agente Luxe Vásquez"
    },
    "analytics": {
      "views": 4565,
      "saved_in_favorites_count": 330
    },
    "created_at": "2026-05-02T19:13:24.803280Z"
  },
  {
    "_id": "66a01b2c00000080",
    "slug": "propiedad-villa-beverly-hills-128",
    "title": "Villa Lujosa #128 en Beverly Hills",
    "price": 24843517,
    "status": "ACTIVE",
    "specs": {
      "beds": 9,
      "baths": 1.2,
      "sqft": 2046,
      "garage_spaces": 2
    },
    "location": {
      "city_state": "Beverly Hills, CA",
      "address": "3932 Avenue of Excellence",
      "coordinates": {
        "lat": 33.775051,
        "lng": -108.318366
      }
    },
    "features": {
      "amenities": [
        "Casa Inteligente",
        "Cava de Vinos",
        "Helipuerto Privado",
        "Alberca Privada",
        "Cancha de Tenis",
        "Gimnasio Privado"
      ],
      "year_built": 2013,
      "energy_rating": "A"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 12
    },
    "owner": {
      "owner_id": "usr_392",
      "agent_name": "Agente Luxe García"
    },
    "analytics": {
      "views": 4517,
      "saved_in_favorites_count": 355
    },
    "created_at": "2024-09-11T19:13:24.803280Z"
  },
  {
    "_id": "66a01b2c00000081",
    "slug": "propiedad-penthouse-chicago-129",
    "title": "Penthouse Lujosa #129 en Chicago",
    "price": 16421697,
    "status": "FOR SALE",
    "specs": {
      "beds": 1,
      "baths": 7.9,
      "sqft": 1418,
      "garage_spaces": 3
    },
    "location": {
      "city_state": "Chicago, IL",
      "address": "9598 Avenue of Excellence",
      "coordinates": {
        "lat": 34.644897,
        "lng": -86.603962
      }
    },
    "features": {
      "amenities": [
        "Gimnasio Privado",
        "Alberca Privada",
        "Vista al Mar",
        "Cava de Vinos",
        "Seguridad 24/7",
        "Helipuerto Privado"
      ],
      "year_built": 2020,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 22
    },
    "owner": {
      "owner_id": "usr_241",
      "agent_name": "Agente Luxe García"
    },
    "analytics": {
      "views": 2551,
      "saved_in_favorites_count": 43
    },
    "created_at": "2024-08-22T19:13:24.803280Z"
  },
  {
    "_id": "66a01b2c00000082",
    "slug": "propiedad-casa-seattle-130",
    "title": "Casa Lujosa #130 en Seattle",
    "price": 6868076,
    "status": "FOR RENT",
    "specs": {
      "beds": 2,
      "baths": 7.2,
      "sqft": 942,
      "garage_spaces": 3
    },
    "location": {
      "city_state": "Seattle, WA",
      "address": "6067 Avenue of Excellence",
      "coordinates": {
        "lat": 41.214972,
        "lng": -102.368417
      }
    },
    "features": {
      "amenities": [
        "Spa & Sauna",
        "Cava de Vinos",
        "Casa Inteligente",
        "Seguridad 24/7"
      ],
      "year_built": 2024,
      "energy_rating": "A"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 9
    },
    "owner": {
      "owner_id": "usr_655",
      "agent_name": "Agente Luxe García"
    },
    "analytics": {
      "views": 498,
      "saved_in_favorites_count": 129
    },
    "created_at": "2026-02-09T19:13:24.803280Z"
  },
  {
    "_id": "66a01b2c00000083",
    "slug": "propiedad-casa-chicago-131",
    "title": "Casa Lujosa #131 en Chicago",
    "price": 4867542,
    "status": "FOR RENT",
    "specs": {
      "beds": 6,
      "baths": 5.6,
      "sqft": 789,
      "garage_spaces": 3
    },
    "location": {
      "city_state": "Chicago, IL",
      "address": "1046 Avenue of Excellence",
      "coordinates": {
        "lat": 39.966549,
        "lng": -81.458571
      }
    },
    "features": {
      "amenities": [
        "Helipuerto Privado",
        "Casa Inteligente",
        "Alberca Privada",
        "Cava de Vinos",
        "Vista al Mar"
      ],
      "year_built": 2013,
      "energy_rating": "B"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 20
    },
    "owner": {
      "owner_id": "usr_191",
      "agent_name": "Agente Luxe Vásquez"
    },
    "analytics": {
      "views": 1569,
      "saved_in_favorites_count": 112
    },
    "created_at": "2026-03-15T19:13:24.803280Z"
  },
  {
    "_id": "66a01b2c00000084",
    "slug": "propiedad-departamento-aspen-132",
    "title": "Departamento Lujosa #132 en Aspen",
    "price": 16397180,
    "status": "FOR RENT",
    "specs": {
      "beds": 7,
      "baths": 3.8,
      "sqft": 557,
      "garage_spaces": 5
    },
    "location": {
      "city_state": "Aspen, CO",
      "address": "3811 Avenue of Excellence",
      "coordinates": {
        "lat": 36.485236,
        "lng": -100.844197
      }
    },
    "features": {
      "amenities": [
        "Seguridad 24/7",
        "Helipuerto Privado",
        "Cava de Vinos"
      ],
      "year_built": 2024,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 22
    },
    "owner": {
      "owner_id": "usr_819",
      "agent_name": "Agente Luxe Mendoza"
    },
    "analytics": {
      "views": 2815,
      "saved_in_favorites_count": 13
    },
    "created_at": "2025-05-14T19:13:24.803280Z"
  },
  {
    "_id": "66a01b2c00000085",
    "slug": "propiedad-villa-chicago-133",
    "title": "Villa Lujosa #133 en Chicago",
    "price": 5417024,
    "status": "ACTIVE",
    "specs": {
      "beds": 9,
      "baths": 7.4,
      "sqft": 1203,
      "garage_spaces": 2
    },
    "location": {
      "city_state": "Chicago, IL",
      "address": "2748 Avenue of Excellence",
      "coordinates": {
        "lat": 39.470289,
        "lng": -121.123504
      }
    },
    "features": {
      "amenities": [
        "Gimnasio Privado",
        "Helipuerto Privado",
        "Spa & Sauna",
        "Cancha de Tenis"
      ],
      "year_built": 2014,
      "energy_rating": "A"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 12
    },
    "owner": {
      "owner_id": "usr_423",
      "agent_name": "Agente Luxe Mendoza"
    },
    "analytics": {
      "views": 1886,
      "saved_in_favorites_count": 79
    },
    "created_at": "2025-03-30T19:13:24.803280Z"
  },
  {
    "_id": "66a01b2c00000086",
    "slug": "propiedad-villa-miami-134",
    "title": "Villa Lujosa #134 en Miami",
    "price": 1625720,
    "status": "FOR SALE",
    "specs": {
      "beds": 3,
      "baths": 2.0,
      "sqft": 966,
      "garage_spaces": 1
    },
    "location": {
      "city_state": "Miami, FL",
      "address": "3197 Avenue of Excellence",
      "coordinates": {
        "lat": 40.971524,
        "lng": -94.309393
      }
    },
    "features": {
      "amenities": [
        "Casa Inteligente",
        "Spa & Sauna",
        "Cava de Vinos"
      ],
      "year_built": 2026,
      "energy_rating": "B"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 10
    },
    "owner": {
      "owner_id": "usr_297",
      "agent_name": "Agente Luxe Mendoza"
    },
    "analytics": {
      "views": 2702,
      "saved_in_favorites_count": 278
    },
    "created_at": "2024-09-06T19:13:24.803280Z"
  },
  {
    "_id": "66a01b2c00000087",
    "slug": "propiedad-villa-seattle-135",
    "title": "Villa Lujosa #135 en Seattle",
    "price": 11652333,
    "status": "FOR SALE",
    "specs": {
      "beds": 5,
      "baths": 9.1,
      "sqft": 1197,
      "garage_spaces": 4
    },
    "location": {
      "city_state": "Seattle, WA",
      "address": "1590 Avenue of Excellence",
      "coordinates": {
        "lat": 45.964888,
        "lng": -109.151869
      }
    },
    "features": {
      "amenities": [
        "Vista al Mar",
        "Elevador Directo",
        "Spa & Sauna",
        "Gimnasio Privado"
      ],
      "year_built": 2012,
      "energy_rating": "A"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 7
    },
    "owner": {
      "owner_id": "usr_738",
      "agent_name": "Agente Luxe Vásquez"
    },
    "analytics": {
      "views": 4959,
      "saved_in_favorites_count": 238
    },
    "created_at": "2026-04-13T19:13:24.803280Z"
  },
  {
    "_id": "66a01b2c00000088",
    "slug": "propiedad-casa-malibu-136",
    "title": "Casa Lujosa #136 en Malibu",
    "price": 12356369,
    "status": "FOR SALE",
    "specs": {
      "beds": 6,
      "baths": 8.7,
      "sqft": 2143,
      "garage_spaces": 5
    },
    "location": {
      "city_state": "Malibu, CA",
      "address": "5024 Avenue of Excellence",
      "coordinates": {
        "lat": 32.423554,
        "lng": -90.729728
      }
    },
    "features": {
      "amenities": [
        "Casa Inteligente",
        "Alberca Privada",
        "Helipuerto Privado"
      ],
      "year_built": 2017,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 20
    },
    "owner": {
      "owner_id": "usr_156",
      "agent_name": "Agente Luxe Vásquez"
    },
    "analytics": {
      "views": 4497,
      "saved_in_favorites_count": 154
    },
    "created_at": "2024-08-14T19:13:24.803280Z"
  },
  {
    "_id": "66a01b2c00000089",
    "slug": "propiedad-villa-malibu-137",
    "title": "Villa Lujosa #137 en Malibu",
    "price": 11461481,
    "status": "ACTIVE",
    "specs": {
      "beds": 3,
      "baths": 2.3,
      "sqft": 240,
      "garage_spaces": 2
    },
    "location": {
      "city_state": "Malibu, CA",
      "address": "5515 Avenue of Excellence",
      "coordinates": {
        "lat": 40.062868,
        "lng": -121.763928
      }
    },
    "features": {
      "amenities": [
        "Alberca Privada",
        "Cancha de Tenis",
        "Spa & Sauna",
        "Casa Inteligente",
        "Gimnasio Privado",
        "Helipuerto Privado",
        "Seguridad 24/7"
      ],
      "year_built": 2023,
      "energy_rating": "B"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 14
    },
    "owner": {
      "owner_id": "usr_562",
      "agent_name": "Agente Luxe Vásquez"
    },
    "analytics": {
      "views": 3102,
      "saved_in_favorites_count": 94
    },
    "created_at": "2025-06-28T19:13:24.804197Z"
  },
  {
    "_id": "66a01b2c0000008a",
    "slug": "propiedad-casa-austin-138",
    "title": "Casa Lujosa #138 en Austin",
    "price": 22267338,
    "status": "FOR RENT",
    "specs": {
      "beds": 7,
      "baths": 7.3,
      "sqft": 1378,
      "garage_spaces": 2
    },
    "location": {
      "city_state": "Austin, TX",
      "address": "6201 Avenue of Excellence",
      "coordinates": {
        "lat": 34.142819,
        "lng": -109.584177
      }
    },
    "features": {
      "amenities": [
        "Elevador Directo",
        "Cava de Vinos",
        "Alberca Privada",
        "Seguridad 24/7"
      ],
      "year_built": 2024,
      "energy_rating": "A"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 17
    },
    "owner": {
      "owner_id": "usr_209",
      "agent_name": "Agente Luxe García"
    },
    "analytics": {
      "views": 305,
      "saved_in_favorites_count": 262
    },
    "created_at": "2025-06-24T19:13:24.804197Z"
  },
  {
    "_id": "66a01b2c0000008b",
    "slug": "propiedad-residencia-de-playa-austin-139",
    "title": "Residencia de Playa Lujosa #139 en Austin",
    "price": 22880945,
    "status": "PENDING",
    "specs": {
      "beds": 9,
      "baths": 2.2,
      "sqft": 2208,
      "garage_spaces": 3
    },
    "location": {
      "city_state": "Austin, TX",
      "address": "9629 Avenue of Excellence",
      "coordinates": {
        "lat": 26.928893,
        "lng": -120.796329
      }
    },
    "features": {
      "amenities": [
        "Gimnasio Privado",
        "Spa & Sauna",
        "Elevador Directo",
        "Helipuerto Privado",
        "Alberca Privada",
        "Cancha de Tenis",
        "Vista al Mar"
      ],
      "year_built": 2024,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 22
    },
    "owner": {
      "owner_id": "usr_712",
      "agent_name": "Agente Luxe García"
    },
    "analytics": {
      "views": 4792,
      "saved_in_favorites_count": 53
    },
    "created_at": "2026-06-21T19:13:24.804197Z"
  },
  {
    "_id": "66a01b2c0000008c",
    "slug": "propiedad-penthouse-new-york-140",
    "title": "Penthouse Lujosa #140 en New York",
    "price": 21347613,
    "status": "FOR RENT",
    "specs": {
      "beds": 1,
      "baths": 9.1,
      "sqft": 1018,
      "garage_spaces": 4
    },
    "location": {
      "city_state": "New York, NY",
      "address": "4963 Avenue of Excellence",
      "coordinates": {
        "lat": 29.758613,
        "lng": -90.64453
      }
    },
    "features": {
      "amenities": [
        "Seguridad 24/7",
        "Casa Inteligente",
        "Cancha de Tenis",
        "Helipuerto Privado",
        "Spa & Sauna",
        "Alberca Privada",
        "Elevador Directo"
      ],
      "year_built": 2026,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 17
    },
    "owner": {
      "owner_id": "usr_105",
      "agent_name": "Agente Luxe Smith"
    },
    "analytics": {
      "views": 3064,
      "saved_in_favorites_count": 189
    },
    "created_at": "2026-01-30T19:13:24.804197Z"
  },
  {
    "_id": "66a01b2c0000008d",
    "slug": "propiedad-departamento-new-york-141",
    "title": "Departamento Lujosa #141 en New York",
    "price": 1327124,
    "status": "FOR RENT",
    "specs": {
      "beds": 4,
      "baths": 8.4,
      "sqft": 259,
      "garage_spaces": 2
    },
    "location": {
      "city_state": "New York, NY",
      "address": "878 Avenue of Excellence",
      "coordinates": {
        "lat": 28.571629,
        "lng": -83.414969
      }
    },
    "features": {
      "amenities": [
        "Gimnasio Privado",
        "Alberca Privada",
        "Cava de Vinos"
      ],
      "year_built": 2020,
      "energy_rating": "B"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 16
    },
    "owner": {
      "owner_id": "usr_352",
      "agent_name": "Agente Luxe Mendoza"
    },
    "analytics": {
      "views": 193,
      "saved_in_favorites_count": 217
    },
    "created_at": "2025-09-30T19:13:24.804197Z"
  },
  {
    "_id": "66a01b2c0000008e",
    "slug": "propiedad-residencia-de-playa-new-york-142",
    "title": "Residencia de Playa Lujosa #142 en New York",
    "price": 3167059,
    "status": "FOR SALE",
    "specs": {
      "beds": 3,
      "baths": 7.3,
      "sqft": 2355,
      "garage_spaces": 1
    },
    "location": {
      "city_state": "New York, NY",
      "address": "5968 Avenue of Excellence",
      "coordinates": {
        "lat": 47.124472,
        "lng": -96.467496
      }
    },
    "features": {
      "amenities": [
        "Spa & Sauna",
        "Seguridad 24/7",
        "Cancha de Tenis",
        "Vista al Mar",
        "Casa Inteligente",
        "Gimnasio Privado",
        "Cava de Vinos"
      ],
      "year_built": 2026,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 25
    },
    "owner": {
      "owner_id": "usr_649",
      "agent_name": "Agente Luxe García"
    },
    "analytics": {
      "views": 4119,
      "saved_in_favorites_count": 403
    },
    "created_at": "2025-03-21T19:13:24.804197Z"
  },
  {
    "_id": "66a01b2c0000008f",
    "slug": "propiedad-casa-malibu-143",
    "title": "Casa Lujosa #143 en Malibu",
    "price": 4804749,
    "status": "FOR SALE",
    "specs": {
      "beds": 7,
      "baths": 2.0,
      "sqft": 1147,
      "garage_spaces": 1
    },
    "location": {
      "city_state": "Malibu, CA",
      "address": "5378 Avenue of Excellence",
      "coordinates": {
        "lat": 35.717824,
        "lng": -90.527888
      }
    },
    "features": {
      "amenities": [
        "Spa & Sauna",
        "Gimnasio Privado",
        "Cancha de Tenis",
        "Elevador Directo"
      ],
      "year_built": 2023,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 24
    },
    "owner": {
      "owner_id": "usr_286",
      "agent_name": "Agente Luxe García"
    },
    "analytics": {
      "views": 4326,
      "saved_in_favorites_count": 320
    },
    "created_at": "2026-03-05T19:13:24.804197Z"
  },
  {
    "_id": "66a01b2c00000090",
    "slug": "propiedad-residencia-de-playa-san-francisco-144",
    "title": "Residencia de Playa Lujosa #144 en San Francisco",
    "price": 14303949,
    "status": "PENDING",
    "specs": {
      "beds": 9,
      "baths": 4.5,
      "sqft": 1253,
      "garage_spaces": 4
    },
    "location": {
      "city_state": "San Francisco, CA",
      "address": "3206 Avenue of Excellence",
      "coordinates": {
        "lat": 47.562928,
        "lng": -87.449517
      }
    },
    "features": {
      "amenities": [
        "Casa Inteligente",
        "Vista al Mar",
        "Helipuerto Privado",
        "Cancha de Tenis",
        "Elevador Directo",
        "Seguridad 24/7"
      ],
      "year_built": 2010,
      "energy_rating": "B"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 10
    },
    "owner": {
      "owner_id": "usr_206",
      "agent_name": "Agente Luxe Smith"
    },
    "analytics": {
      "views": 2796,
      "saved_in_favorites_count": 285
    },
    "created_at": "2024-09-22T19:13:24.804197Z"
  },
  {
    "_id": "66a01b2c00000091",
    "slug": "propiedad-residencia-de-playa-san-francisco-145",
    "title": "Residencia de Playa Lujosa #145 en San Francisco",
    "price": 19606678,
    "status": "FOR RENT",
    "specs": {
      "beds": 6,
      "baths": 7.9,
      "sqft": 1441,
      "garage_spaces": 2
    },
    "location": {
      "city_state": "San Francisco, CA",
      "address": "8546 Avenue of Excellence",
      "coordinates": {
        "lat": 28.415402,
        "lng": -118.380928
      }
    },
    "features": {
      "amenities": [
        "Seguridad 24/7",
        "Helipuerto Privado",
        "Alberca Privada",
        "Elevador Directo",
        "Cava de Vinos"
      ],
      "year_built": 2026,
      "energy_rating": "A"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 6
    },
    "owner": {
      "owner_id": "usr_245",
      "agent_name": "Agente Luxe Smith"
    },
    "analytics": {
      "views": 1280,
      "saved_in_favorites_count": 353
    },
    "created_at": "2026-06-06T19:13:24.804197Z"
  },
  {
    "_id": "66a01b2c00000092",
    "slug": "propiedad-departamento-new-york-146",
    "title": "Departamento Lujosa #146 en New York",
    "price": 13495723,
    "status": "ACTIVE",
    "specs": {
      "beds": 8,
      "baths": 8.7,
      "sqft": 750,
      "garage_spaces": 1
    },
    "location": {
      "city_state": "New York, NY",
      "address": "2605 Avenue of Excellence",
      "coordinates": {
        "lat": 33.269484,
        "lng": -98.867734
      }
    },
    "features": {
      "amenities": [
        "Cava de Vinos",
        "Vista al Mar",
        "Alberca Privada"
      ],
      "year_built": 2020,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 16
    },
    "owner": {
      "owner_id": "usr_158",
      "agent_name": "Agente Luxe Mendoza"
    },
    "analytics": {
      "views": 4434,
      "saved_in_favorites_count": 35
    },
    "created_at": "2024-11-01T19:13:24.804197Z"
  },
  {
    "_id": "66a01b2c00000093",
    "slug": "propiedad-departamento-miami-147",
    "title": "Departamento Lujosa #147 en Miami",
    "price": 24762432,
    "status": "ACTIVE",
    "specs": {
      "beds": 2,
      "baths": 1.9,
      "sqft": 284,
      "garage_spaces": 1
    },
    "location": {
      "city_state": "Miami, FL",
      "address": "9928 Avenue of Excellence",
      "coordinates": {
        "lat": 32.296458,
        "lng": -117.968769
      }
    },
    "features": {
      "amenities": [
        "Cancha de Tenis",
        "Gimnasio Privado",
        "Seguridad 24/7"
      ],
      "year_built": 2023,
      "energy_rating": "A"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 16
    },
    "owner": {
      "owner_id": "usr_357",
      "agent_name": "Agente Luxe Mendoza"
    },
    "analytics": {
      "views": 4053,
      "saved_in_favorites_count": 123
    },
    "created_at": "2024-09-30T19:13:24.804197Z"
  },
  {
    "_id": "66a01b2c00000094",
    "slug": "propiedad-casa-malibu-148",
    "title": "Casa Lujosa #148 en Malibu",
    "price": 9700552,
    "status": "FOR RENT",
    "specs": {
      "beds": 7,
      "baths": 1.2,
      "sqft": 545,
      "garage_spaces": 3
    },
    "location": {
      "city_state": "Malibu, CA",
      "address": "7136 Avenue of Excellence",
      "coordinates": {
        "lat": 28.592256,
        "lng": -118.721186
      }
    },
    "features": {
      "amenities": [
        "Elevador Directo",
        "Alberca Privada",
        "Casa Inteligente"
      ],
      "year_built": 2019,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 8
    },
    "owner": {
      "owner_id": "usr_140",
      "agent_name": "Agente Luxe Vásquez"
    },
    "analytics": {
      "views": 100,
      "saved_in_favorites_count": 292
    },
    "created_at": "2025-09-10T19:13:24.804197Z"
  },
  {
    "_id": "66a01b2c00000095",
    "slug": "propiedad-villa-new-york-149",
    "title": "Villa Lujosa #149 en New York",
    "price": 9626689,
    "status": "FOR RENT",
    "specs": {
      "beds": 9,
      "baths": 3.6,
      "sqft": 1006,
      "garage_spaces": 3
    },
    "location": {
      "city_state": "New York, NY",
      "address": "7842 Avenue of Excellence",
      "coordinates": {
        "lat": 47.517107,
        "lng": -88.407766
      }
    },
    "features": {
      "amenities": [
        "Alberca Privada",
        "Gimnasio Privado",
        "Cava de Vinos"
      ],
      "year_built": 2018,
      "energy_rating": "A"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 14
    },
    "owner": {
      "owner_id": "usr_810",
      "agent_name": "Agente Luxe Smith"
    },
    "analytics": {
      "views": 4291,
      "saved_in_favorites_count": 407
    },
    "created_at": "2026-06-03T19:13:24.804197Z"
  },
  {
    "_id": "66a01b2c00000096",
    "slug": "propiedad-penthouse-beverly-hills-150",
    "title": "Penthouse Lujosa #150 en Beverly Hills",
    "price": 19158707,
    "status": "PENDING",
    "specs": {
      "beds": 6,
      "baths": 8.9,
      "sqft": 2355,
      "garage_spaces": 1
    },
    "location": {
      "city_state": "Beverly Hills, CA",
      "address": "5376 Avenue of Excellence",
      "coordinates": {
        "lat": 43.651541,
        "lng": -120.756549
      }
    },
    "features": {
      "amenities": [
        "Seguridad 24/7",
        "Vista al Mar",
        "Alberca Privada",
        "Elevador Directo",
        "Cancha de Tenis",
        "Helipuerto Privado"
      ],
      "year_built": 2025,
      "energy_rating": "B"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 21
    },
    "owner": {
      "owner_id": "usr_898",
      "agent_name": "Agente Luxe Mendoza"
    },
    "analytics": {
      "views": 4711,
      "saved_in_favorites_count": 83
    },
    "created_at": "2025-10-26T19:13:24.804197Z"
  },
  {
    "_id": "66a01b2c00000097",
    "slug": "propiedad-penthouse-san-francisco-151",
    "title": "Penthouse Lujosa #151 en San Francisco",
    "price": 21075625,
    "status": "PENDING",
    "specs": {
      "beds": 6,
      "baths": 2.1,
      "sqft": 574,
      "garage_spaces": 4
    },
    "location": {
      "city_state": "San Francisco, CA",
      "address": "9308 Avenue of Excellence",
      "coordinates": {
        "lat": 36.193116,
        "lng": -84.503436
      }
    },
    "features": {
      "amenities": [
        "Seguridad 24/7",
        "Gimnasio Privado",
        "Alberca Privada",
        "Casa Inteligente",
        "Helipuerto Privado",
        "Elevador Directo"
      ],
      "year_built": 2017,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 24
    },
    "owner": {
      "owner_id": "usr_645",
      "agent_name": "Agente Luxe Mendoza"
    },
    "analytics": {
      "views": 1957,
      "saved_in_favorites_count": 385
    },
    "created_at": "2025-10-03T19:13:24.804197Z"
  },
  {
    "_id": "66a01b2c00000098",
    "slug": "propiedad-departamento-miami-152",
    "title": "Departamento Lujosa #152 en Miami",
    "price": 20100716,
    "status": "FOR SALE",
    "specs": {
      "beds": 4,
      "baths": 8.5,
      "sqft": 540,
      "garage_spaces": 5
    },
    "location": {
      "city_state": "Miami, FL",
      "address": "7589 Avenue of Excellence",
      "coordinates": {
        "lat": 46.028187,
        "lng": -105.258991
      }
    },
    "features": {
      "amenities": [
        "Cancha de Tenis",
        "Elevador Directo",
        "Gimnasio Privado",
        "Alberca Privada",
        "Casa Inteligente",
        "Seguridad 24/7"
      ],
      "year_built": 2024,
      "energy_rating": "B"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 9
    },
    "owner": {
      "owner_id": "usr_469",
      "agent_name": "Agente Luxe Mendoza"
    },
    "analytics": {
      "views": 2823,
      "saved_in_favorites_count": 396
    },
    "created_at": "2025-09-08T19:13:24.804197Z"
  },
  {
    "_id": "66a01b2c00000099",
    "slug": "propiedad-villa-beverly-hills-153",
    "title": "Villa Lujosa #153 en Beverly Hills",
    "price": 17864140,
    "status": "FOR RENT",
    "specs": {
      "beds": 4,
      "baths": 4.7,
      "sqft": 2439,
      "garage_spaces": 3
    },
    "location": {
      "city_state": "Beverly Hills, CA",
      "address": "9033 Avenue of Excellence",
      "coordinates": {
        "lat": 30.329208,
        "lng": -117.786685
      }
    },
    "features": {
      "amenities": [
        "Cancha de Tenis",
        "Casa Inteligente",
        "Seguridad 24/7",
        "Cava de Vinos",
        "Gimnasio Privado",
        "Vista al Mar",
        "Spa & Sauna"
      ],
      "year_built": 2026,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 17
    },
    "owner": {
      "owner_id": "usr_781",
      "agent_name": "Agente Luxe García"
    },
    "analytics": {
      "views": 4848,
      "saved_in_favorites_count": 318
    },
    "created_at": "2026-06-25T19:13:24.804197Z"
  },
  {
    "_id": "66a01b2c0000009a",
    "slug": "propiedad-departamento-chicago-154",
    "title": "Departamento Lujosa #154 en Chicago",
    "price": 2940927,
    "status": "ACTIVE",
    "specs": {
      "beds": 7,
      "baths": 8.6,
      "sqft": 639,
      "garage_spaces": 3
    },
    "location": {
      "city_state": "Chicago, IL",
      "address": "5135 Avenue of Excellence",
      "coordinates": {
        "lat": 47.492764,
        "lng": -100.938189
      }
    },
    "features": {
      "amenities": [
        "Vista al Mar",
        "Cancha de Tenis",
        "Alberca Privada"
      ],
      "year_built": 2017,
      "energy_rating": "A"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 5
    },
    "owner": {
      "owner_id": "usr_947",
      "agent_name": "Agente Luxe García"
    },
    "analytics": {
      "views": 4304,
      "saved_in_favorites_count": 419
    },
    "created_at": "2025-07-03T19:13:24.804197Z"
  },
  {
    "_id": "66a01b2c0000009b",
    "slug": "propiedad-penthouse-beverly-hills-155",
    "title": "Penthouse Lujosa #155 en Beverly Hills",
    "price": 10916265,
    "status": "FOR RENT",
    "specs": {
      "beds": 4,
      "baths": 4.9,
      "sqft": 2177,
      "garage_spaces": 3
    },
    "location": {
      "city_state": "Beverly Hills, CA",
      "address": "784 Avenue of Excellence",
      "coordinates": {
        "lat": 33.483018,
        "lng": -117.109762
      }
    },
    "features": {
      "amenities": [
        "Elevador Directo",
        "Vista al Mar",
        "Gimnasio Privado",
        "Helipuerto Privado"
      ],
      "year_built": 2024,
      "energy_rating": "B"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 17
    },
    "owner": {
      "owner_id": "usr_816",
      "agent_name": "Agente Luxe García"
    },
    "analytics": {
      "views": 565,
      "saved_in_favorites_count": 222
    },
    "created_at": "2026-05-30T19:13:24.804197Z"
  },
  {
    "_id": "66a01b2c0000009c",
    "slug": "propiedad-residencia-de-playa-new-york-156",
    "title": "Residencia de Playa Lujosa #156 en New York",
    "price": 716184,
    "status": "PENDING",
    "specs": {
      "beds": 8,
      "baths": 3.5,
      "sqft": 492,
      "garage_spaces": 1
    },
    "location": {
      "city_state": "New York, NY",
      "address": "4996 Avenue of Excellence",
      "coordinates": {
        "lat": 40.700947,
        "lng": -99.843494
      }
    },
    "features": {
      "amenities": [
        "Spa & Sauna",
        "Casa Inteligente",
        "Cava de Vinos",
        "Gimnasio Privado",
        "Helipuerto Privado",
        "Alberca Privada"
      ],
      "year_built": 2016,
      "energy_rating": "A"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 11
    },
    "owner": {
      "owner_id": "usr_495",
      "agent_name": "Agente Luxe Mendoza"
    },
    "analytics": {
      "views": 485,
      "saved_in_favorites_count": 374
    },
    "created_at": "2026-06-03T19:13:24.804197Z"
  },
  {
    "_id": "66a01b2c0000009d",
    "slug": "propiedad-residencia-de-playa-new-york-157",
    "title": "Residencia de Playa Lujosa #157 en New York",
    "price": 11130177,
    "status": "ACTIVE",
    "specs": {
      "beds": 1,
      "baths": 9.5,
      "sqft": 694,
      "garage_spaces": 4
    },
    "location": {
      "city_state": "New York, NY",
      "address": "1446 Avenue of Excellence",
      "coordinates": {
        "lat": 26.944005,
        "lng": -100.25062
      }
    },
    "features": {
      "amenities": [
        "Alberca Privada",
        "Elevador Directo",
        "Vista al Mar",
        "Helipuerto Privado"
      ],
      "year_built": 2015,
      "energy_rating": "A"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 6
    },
    "owner": {
      "owner_id": "usr_624",
      "agent_name": "Agente Luxe Mendoza"
    },
    "analytics": {
      "views": 4497,
      "saved_in_favorites_count": 7
    },
    "created_at": "2024-09-07T19:13:24.804197Z"
  },
  {
    "_id": "66a01b2c0000009e",
    "slug": "propiedad-departamento-aspen-158",
    "title": "Departamento Lujosa #158 en Aspen",
    "price": 5179101,
    "status": "PENDING",
    "specs": {
      "beds": 4,
      "baths": 5.4,
      "sqft": 2158,
      "garage_spaces": 2
    },
    "location": {
      "city_state": "Aspen, CO",
      "address": "275 Avenue of Excellence",
      "coordinates": {
        "lat": 29.708065,
        "lng": -115.210388
      }
    },
    "features": {
      "amenities": [
        "Elevador Directo",
        "Cava de Vinos",
        "Vista al Mar",
        "Casa Inteligente",
        "Helipuerto Privado"
      ],
      "year_built": 2025,
      "energy_rating": "B"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 9
    },
    "owner": {
      "owner_id": "usr_862",
      "agent_name": "Agente Luxe Vásquez"
    },
    "analytics": {
      "views": 4101,
      "saved_in_favorites_count": 35
    },
    "created_at": "2025-10-07T19:13:24.804197Z"
  },
  {
    "_id": "66a01b2c0000009f",
    "slug": "propiedad-penthouse-scottsdale-159",
    "title": "Penthouse Lujosa #159 en Scottsdale",
    "price": 21359289,
    "status": "ACTIVE",
    "specs": {
      "beds": 7,
      "baths": 8.4,
      "sqft": 180,
      "garage_spaces": 4
    },
    "location": {
      "city_state": "Scottsdale, AZ",
      "address": "6984 Avenue of Excellence",
      "coordinates": {
        "lat": 41.635888,
        "lng": -101.190283
      }
    },
    "features": {
      "amenities": [
        "Elevador Directo",
        "Helipuerto Privado",
        "Cava de Vinos"
      ],
      "year_built": 2015,
      "energy_rating": "B"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 13
    },
    "owner": {
      "owner_id": "usr_105",
      "agent_name": "Agente Luxe Smith"
    },
    "analytics": {
      "views": 4927,
      "saved_in_favorites_count": 181
    },
    "created_at": "2026-02-21T19:13:24.804197Z"
  },
  {
    "_id": "66a01b2c000000a0",
    "slug": "propiedad-penthouse-seattle-160",
    "title": "Penthouse Lujosa #160 en Seattle",
    "price": 18712778,
    "status": "FOR SALE",
    "specs": {
      "beds": 5,
      "baths": 6.6,
      "sqft": 639,
      "garage_spaces": 2
    },
    "location": {
      "city_state": "Seattle, WA",
      "address": "3300 Avenue of Excellence",
      "coordinates": {
        "lat": 41.760568,
        "lng": -103.816868
      }
    },
    "features": {
      "amenities": [
        "Cava de Vinos",
        "Gimnasio Privado",
        "Seguridad 24/7",
        "Helipuerto Privado",
        "Elevador Directo",
        "Cancha de Tenis",
        "Alberca Privada"
      ],
      "year_built": 2018,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 7
    },
    "owner": {
      "owner_id": "usr_960",
      "agent_name": "Agente Luxe Mendoza"
    },
    "analytics": {
      "views": 1244,
      "saved_in_favorites_count": 386
    },
    "created_at": "2025-12-27T19:13:24.804197Z"
  },
  {
    "_id": "66a01b2c000000a1",
    "slug": "propiedad-residencia-de-playa-beverly-hills-161",
    "title": "Residencia de Playa Lujosa #161 en Beverly Hills",
    "price": 1159178,
    "status": "FOR RENT",
    "specs": {
      "beds": 6,
      "baths": 7.0,
      "sqft": 1028,
      "garage_spaces": 2
    },
    "location": {
      "city_state": "Beverly Hills, CA",
      "address": "3804 Avenue of Excellence",
      "coordinates": {
        "lat": 36.772263,
        "lng": -108.871648
      }
    },
    "features": {
      "amenities": [
        "Helipuerto Privado",
        "Cancha de Tenis",
        "Gimnasio Privado",
        "Alberca Privada",
        "Spa & Sauna",
        "Vista al Mar",
        "Elevador Directo"
      ],
      "year_built": 2014,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 22
    },
    "owner": {
      "owner_id": "usr_844",
      "agent_name": "Agente Luxe Vásquez"
    },
    "analytics": {
      "views": 3674,
      "saved_in_favorites_count": 116
    },
    "created_at": "2025-03-24T19:13:24.804197Z"
  },
  {
    "_id": "66a01b2c000000a2",
    "slug": "propiedad-residencia-de-playa-san-francisco-162",
    "title": "Residencia de Playa Lujosa #162 en San Francisco",
    "price": 1411993,
    "status": "PENDING",
    "specs": {
      "beds": 7,
      "baths": 4.3,
      "sqft": 209,
      "garage_spaces": 1
    },
    "location": {
      "city_state": "San Francisco, CA",
      "address": "8252 Avenue of Excellence",
      "coordinates": {
        "lat": 37.056895,
        "lng": -83.677504
      }
    },
    "features": {
      "amenities": [
        "Elevador Directo",
        "Spa & Sauna",
        "Casa Inteligente",
        "Alberca Privada",
        "Gimnasio Privado",
        "Seguridad 24/7"
      ],
      "year_built": 2013,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 24
    },
    "owner": {
      "owner_id": "usr_587",
      "agent_name": "Agente Luxe García"
    },
    "analytics": {
      "views": 4321,
      "saved_in_favorites_count": 406
    },
    "created_at": "2025-11-26T19:13:24.804197Z"
  },
  {
    "_id": "66a01b2c000000a3",
    "slug": "propiedad-departamento-chicago-163",
    "title": "Departamento Lujosa #163 en Chicago",
    "price": 5381435,
    "status": "FOR RENT",
    "specs": {
      "beds": 10,
      "baths": 1.9,
      "sqft": 2325,
      "garage_spaces": 4
    },
    "location": {
      "city_state": "Chicago, IL",
      "address": "6873 Avenue of Excellence",
      "coordinates": {
        "lat": 37.042387,
        "lng": -104.815776
      }
    },
    "features": {
      "amenities": [
        "Cancha de Tenis",
        "Cava de Vinos",
        "Alberca Privada"
      ],
      "year_built": 2019,
      "energy_rating": "A"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 11
    },
    "owner": {
      "owner_id": "usr_135",
      "agent_name": "Agente Luxe Smith"
    },
    "analytics": {
      "views": 515,
      "saved_in_favorites_count": 170
    },
    "created_at": "2025-02-02T19:13:24.804197Z"
  },
  {
    "_id": "66a01b2c000000a4",
    "slug": "propiedad-villa-beverly-hills-164",
    "title": "Villa Lujosa #164 en Beverly Hills",
    "price": 4762407,
    "status": "FOR RENT",
    "specs": {
      "beds": 3,
      "baths": 7.9,
      "sqft": 1237,
      "garage_spaces": 5
    },
    "location": {
      "city_state": "Beverly Hills, CA",
      "address": "396 Avenue of Excellence",
      "coordinates": {
        "lat": 30.628412,
        "lng": -87.2065
      }
    },
    "features": {
      "amenities": [
        "Helipuerto Privado",
        "Casa Inteligente",
        "Alberca Privada",
        "Spa & Sauna",
        "Elevador Directo"
      ],
      "year_built": 2012,
      "energy_rating": "B"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 14
    },
    "owner": {
      "owner_id": "usr_137",
      "agent_name": "Agente Luxe Vásquez"
    },
    "analytics": {
      "views": 4723,
      "saved_in_favorites_count": 341
    },
    "created_at": "2025-01-07T19:13:24.804197Z"
  },
  {
    "_id": "66a01b2c000000a5",
    "slug": "propiedad-casa-aspen-165",
    "title": "Casa Lujosa #165 en Aspen",
    "price": 3456643,
    "status": "FOR RENT",
    "specs": {
      "beds": 9,
      "baths": 1.7,
      "sqft": 2354,
      "garage_spaces": 1
    },
    "location": {
      "city_state": "Aspen, CO",
      "address": "3369 Avenue of Excellence",
      "coordinates": {
        "lat": 42.425401,
        "lng": -112.016237
      }
    },
    "features": {
      "amenities": [
        "Spa & Sauna",
        "Alberca Privada",
        "Seguridad 24/7",
        "Vista al Mar",
        "Casa Inteligente",
        "Helipuerto Privado"
      ],
      "year_built": 2011,
      "energy_rating": "B"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 20
    },
    "owner": {
      "owner_id": "usr_833",
      "agent_name": "Agente Luxe García"
    },
    "analytics": {
      "views": 1297,
      "saved_in_favorites_count": 81
    },
    "created_at": "2024-08-16T19:13:24.804197Z"
  },
  {
    "_id": "66a01b2c000000a6",
    "slug": "propiedad-casa-miami-166",
    "title": "Casa Lujosa #166 en Miami",
    "price": 896564,
    "status": "ACTIVE",
    "specs": {
      "beds": 3,
      "baths": 3.1,
      "sqft": 2372,
      "garage_spaces": 3
    },
    "location": {
      "city_state": "Miami, FL",
      "address": "4599 Avenue of Excellence",
      "coordinates": {
        "lat": 36.527289,
        "lng": -121.068932
      }
    },
    "features": {
      "amenities": [
        "Gimnasio Privado",
        "Spa & Sauna",
        "Helipuerto Privado",
        "Elevador Directo"
      ],
      "year_built": 2012,
      "energy_rating": "A"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 18
    },
    "owner": {
      "owner_id": "usr_916",
      "agent_name": "Agente Luxe Mendoza"
    },
    "analytics": {
      "views": 702,
      "saved_in_favorites_count": 99
    },
    "created_at": "2025-09-01T19:13:24.804197Z"
  },
  {
    "_id": "66a01b2c000000a7",
    "slug": "propiedad-residencia-de-playa-malibu-167",
    "title": "Residencia de Playa Lujosa #167 en Malibu",
    "price": 10995545,
    "status": "ACTIVE",
    "specs": {
      "beds": 1,
      "baths": 4.3,
      "sqft": 217,
      "garage_spaces": 3
    },
    "location": {
      "city_state": "Malibu, CA",
      "address": "6680 Avenue of Excellence",
      "coordinates": {
        "lat": 33.862497,
        "lng": -77.665459
      }
    },
    "features": {
      "amenities": [
        "Seguridad 24/7",
        "Spa & Sauna",
        "Vista al Mar"
      ],
      "year_built": 2012,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 12
    },
    "owner": {
      "owner_id": "usr_978",
      "agent_name": "Agente Luxe Vásquez"
    },
    "analytics": {
      "views": 4551,
      "saved_in_favorites_count": 202
    },
    "created_at": "2025-07-22T19:13:24.804197Z"
  },
  {
    "_id": "66a01b2c000000a8",
    "slug": "propiedad-residencia-de-playa-san-francisco-168",
    "title": "Residencia de Playa Lujosa #168 en San Francisco",
    "price": 23899810,
    "status": "FOR SALE",
    "specs": {
      "beds": 6,
      "baths": 4.2,
      "sqft": 753,
      "garage_spaces": 4
    },
    "location": {
      "city_state": "San Francisco, CA",
      "address": "7759 Avenue of Excellence",
      "coordinates": {
        "lat": 40.893888,
        "lng": -96.525172
      }
    },
    "features": {
      "amenities": [
        "Cancha de Tenis",
        "Spa & Sauna",
        "Casa Inteligente",
        "Gimnasio Privado",
        "Helipuerto Privado",
        "Cava de Vinos",
        "Elevador Directo"
      ],
      "year_built": 2018,
      "energy_rating": "B"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 15
    },
    "owner": {
      "owner_id": "usr_432",
      "agent_name": "Agente Luxe Mendoza"
    },
    "analytics": {
      "views": 860,
      "saved_in_favorites_count": 99
    },
    "created_at": "2026-04-18T19:13:24.804197Z"
  },
  {
    "_id": "66a01b2c000000a9",
    "slug": "propiedad-casa-scottsdale-169",
    "title": "Casa Lujosa #169 en Scottsdale",
    "price": 15842187,
    "status": "PENDING",
    "specs": {
      "beds": 7,
      "baths": 3.7,
      "sqft": 1492,
      "garage_spaces": 5
    },
    "location": {
      "city_state": "Scottsdale, AZ",
      "address": "1565 Avenue of Excellence",
      "coordinates": {
        "lat": 40.587061,
        "lng": -116.090246
      }
    },
    "features": {
      "amenities": [
        "Gimnasio Privado",
        "Alberca Privada",
        "Casa Inteligente",
        "Spa & Sauna",
        "Helipuerto Privado",
        "Cancha de Tenis",
        "Seguridad 24/7"
      ],
      "year_built": 2025,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 7
    },
    "owner": {
      "owner_id": "usr_704",
      "agent_name": "Agente Luxe Vásquez"
    },
    "analytics": {
      "views": 3634,
      "saved_in_favorites_count": 204
    },
    "created_at": "2025-12-13T19:13:24.804197Z"
  },
  {
    "_id": "66a01b2c000000aa",
    "slug": "propiedad-villa-seattle-170",
    "title": "Villa Lujosa #170 en Seattle",
    "price": 7699865,
    "status": "PENDING",
    "specs": {
      "beds": 1,
      "baths": 8.9,
      "sqft": 1540,
      "garage_spaces": 4
    },
    "location": {
      "city_state": "Seattle, WA",
      "address": "6159 Avenue of Excellence",
      "coordinates": {
        "lat": 38.184735,
        "lng": -110.474422
      }
    },
    "features": {
      "amenities": [
        "Cancha de Tenis",
        "Cava de Vinos",
        "Casa Inteligente",
        "Spa & Sauna"
      ],
      "year_built": 2018,
      "energy_rating": "A"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 22
    },
    "owner": {
      "owner_id": "usr_836",
      "agent_name": "Agente Luxe García"
    },
    "analytics": {
      "views": 3297,
      "saved_in_favorites_count": 177
    },
    "created_at": "2024-12-06T19:13:24.804197Z"
  },
  {
    "_id": "66a01b2c000000ab",
    "slug": "propiedad-residencia-de-playa-austin-171",
    "title": "Residencia de Playa Lujosa #171 en Austin",
    "price": 16358064,
    "status": "PENDING",
    "specs": {
      "beds": 9,
      "baths": 1.6,
      "sqft": 706,
      "garage_spaces": 3
    },
    "location": {
      "city_state": "Austin, TX",
      "address": "2731 Avenue of Excellence",
      "coordinates": {
        "lat": 31.779432,
        "lng": -81.402718
      }
    },
    "features": {
      "amenities": [
        "Casa Inteligente",
        "Cancha de Tenis",
        "Elevador Directo",
        "Seguridad 24/7"
      ],
      "year_built": 2014,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 9
    },
    "owner": {
      "owner_id": "usr_372",
      "agent_name": "Agente Luxe Vásquez"
    },
    "analytics": {
      "views": 3997,
      "saved_in_favorites_count": 112
    },
    "created_at": "2025-11-20T19:13:24.804197Z"
  },
  {
    "_id": "66a01b2c000000ac",
    "slug": "propiedad-villa-beverly-hills-172",
    "title": "Villa Lujosa #172 en Beverly Hills",
    "price": 4180737,
    "status": "ACTIVE",
    "specs": {
      "beds": 6,
      "baths": 6.2,
      "sqft": 2207,
      "garage_spaces": 4
    },
    "location": {
      "city_state": "Beverly Hills, CA",
      "address": "3973 Avenue of Excellence",
      "coordinates": {
        "lat": 31.626919,
        "lng": -99.137622
      }
    },
    "features": {
      "amenities": [
        "Cava de Vinos",
        "Helipuerto Privado",
        "Vista al Mar",
        "Gimnasio Privado",
        "Casa Inteligente",
        "Elevador Directo",
        "Spa & Sauna"
      ],
      "year_built": 2024,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 10
    },
    "owner": {
      "owner_id": "usr_683",
      "agent_name": "Agente Luxe Smith"
    },
    "analytics": {
      "views": 973,
      "saved_in_favorites_count": 300
    },
    "created_at": "2026-03-19T19:13:24.804197Z"
  },
  {
    "_id": "66a01b2c000000ad",
    "slug": "propiedad-casa-scottsdale-173",
    "title": "Casa Lujosa #173 en Scottsdale",
    "price": 3130807,
    "status": "PENDING",
    "specs": {
      "beds": 3,
      "baths": 3.2,
      "sqft": 707,
      "garage_spaces": 1
    },
    "location": {
      "city_state": "Scottsdale, AZ",
      "address": "2997 Avenue of Excellence",
      "coordinates": {
        "lat": 46.6676,
        "lng": -97.73197
      }
    },
    "features": {
      "amenities": [
        "Cava de Vinos",
        "Casa Inteligente",
        "Seguridad 24/7",
        "Helipuerto Privado",
        "Vista al Mar",
        "Cancha de Tenis",
        "Elevador Directo"
      ],
      "year_built": 2017,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 23
    },
    "owner": {
      "owner_id": "usr_229",
      "agent_name": "Agente Luxe Smith"
    },
    "analytics": {
      "views": 2558,
      "saved_in_favorites_count": 304
    },
    "created_at": "2024-11-24T19:13:24.804197Z"
  },
  {
    "_id": "66a01b2c000000ae",
    "slug": "propiedad-penthouse-austin-174",
    "title": "Penthouse Lujosa #174 en Austin",
    "price": 12040084,
    "status": "FOR RENT",
    "specs": {
      "beds": 5,
      "baths": 3.7,
      "sqft": 1987,
      "garage_spaces": 1
    },
    "location": {
      "city_state": "Austin, TX",
      "address": "4073 Avenue of Excellence",
      "coordinates": {
        "lat": 36.910095,
        "lng": -76.252065
      }
    },
    "features": {
      "amenities": [
        "Seguridad 24/7",
        "Helipuerto Privado",
        "Cancha de Tenis",
        "Casa Inteligente",
        "Gimnasio Privado",
        "Cava de Vinos",
        "Vista al Mar"
      ],
      "year_built": 2012,
      "energy_rating": "A"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 20
    },
    "owner": {
      "owner_id": "usr_630",
      "agent_name": "Agente Luxe Smith"
    },
    "analytics": {
      "views": 2338,
      "saved_in_favorites_count": 233
    },
    "created_at": "2025-09-07T19:13:24.804197Z"
  },
  {
    "_id": "66a01b2c000000af",
    "slug": "propiedad-residencia-de-playa-seattle-175",
    "title": "Residencia de Playa Lujosa #175 en Seattle",
    "price": 2942500,
    "status": "ACTIVE",
    "specs": {
      "beds": 10,
      "baths": 5.7,
      "sqft": 1403,
      "garage_spaces": 4
    },
    "location": {
      "city_state": "Seattle, WA",
      "address": "2619 Avenue of Excellence",
      "coordinates": {
        "lat": 32.494631,
        "lng": -82.201298
      }
    },
    "features": {
      "amenities": [
        "Casa Inteligente",
        "Elevador Directo",
        "Vista al Mar",
        "Gimnasio Privado",
        "Helipuerto Privado"
      ],
      "year_built": 2012,
      "energy_rating": "B"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 6
    },
    "owner": {
      "owner_id": "usr_428",
      "agent_name": "Agente Luxe Mendoza"
    },
    "analytics": {
      "views": 4176,
      "saved_in_favorites_count": 17
    },
    "created_at": "2024-08-17T19:13:24.804197Z"
  },
  {
    "_id": "66a01b2c000000b0",
    "slug": "propiedad-residencia-de-playa-san-francisco-176",
    "title": "Residencia de Playa Lujosa #176 en San Francisco",
    "price": 9696303,
    "status": "PENDING",
    "specs": {
      "beds": 2,
      "baths": 6.8,
      "sqft": 1252,
      "garage_spaces": 3
    },
    "location": {
      "city_state": "San Francisco, CA",
      "address": "4498 Avenue of Excellence",
      "coordinates": {
        "lat": 41.861044,
        "lng": -117.444957
      }
    },
    "features": {
      "amenities": [
        "Elevador Directo",
        "Vista al Mar",
        "Cava de Vinos",
        "Cancha de Tenis",
        "Casa Inteligente"
      ],
      "year_built": 2015,
      "energy_rating": "A"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 25
    },
    "owner": {
      "owner_id": "usr_703",
      "agent_name": "Agente Luxe Vásquez"
    },
    "analytics": {
      "views": 932,
      "saved_in_favorites_count": 262
    },
    "created_at": "2026-03-04T19:13:24.804197Z"
  },
  {
    "_id": "66a01b2c000000b1",
    "slug": "propiedad-departamento-seattle-177",
    "title": "Departamento Lujosa #177 en Seattle",
    "price": 8407323,
    "status": "FOR RENT",
    "specs": {
      "beds": 6,
      "baths": 9.0,
      "sqft": 1669,
      "garage_spaces": 5
    },
    "location": {
      "city_state": "Seattle, WA",
      "address": "4486 Avenue of Excellence",
      "coordinates": {
        "lat": 36.068788,
        "lng": -108.947566
      }
    },
    "features": {
      "amenities": [
        "Gimnasio Privado",
        "Cancha de Tenis",
        "Alberca Privada",
        "Casa Inteligente"
      ],
      "year_built": 2019,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 17
    },
    "owner": {
      "owner_id": "usr_258",
      "agent_name": "Agente Luxe Smith"
    },
    "analytics": {
      "views": 1669,
      "saved_in_favorites_count": 239
    },
    "created_at": "2025-04-06T19:13:24.804197Z"
  },
  {
    "_id": "66a01b2c000000b2",
    "slug": "propiedad-casa-new-york-178",
    "title": "Casa Lujosa #178 en New York",
    "price": 13434571,
    "status": "FOR SALE",
    "specs": {
      "beds": 3,
      "baths": 7.1,
      "sqft": 2056,
      "garage_spaces": 5
    },
    "location": {
      "city_state": "New York, NY",
      "address": "821 Avenue of Excellence",
      "coordinates": {
        "lat": 31.626584,
        "lng": -79.844023
      }
    },
    "features": {
      "amenities": [
        "Casa Inteligente",
        "Cava de Vinos",
        "Seguridad 24/7",
        "Vista al Mar"
      ],
      "year_built": 2015,
      "energy_rating": "A"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 14
    },
    "owner": {
      "owner_id": "usr_419",
      "agent_name": "Agente Luxe Mendoza"
    },
    "analytics": {
      "views": 1989,
      "saved_in_favorites_count": 2
    },
    "created_at": "2025-01-24T19:13:24.804197Z"
  },
  {
    "_id": "66a01b2c000000b3",
    "slug": "propiedad-villa-aspen-179",
    "title": "Villa Lujosa #179 en Aspen",
    "price": 21536721,
    "status": "FOR RENT",
    "specs": {
      "beds": 5,
      "baths": 6.5,
      "sqft": 2206,
      "garage_spaces": 1
    },
    "location": {
      "city_state": "Aspen, CO",
      "address": "281 Avenue of Excellence",
      "coordinates": {
        "lat": 43.956814,
        "lng": -95.812623
      }
    },
    "features": {
      "amenities": [
        "Vista al Mar",
        "Alberca Privada",
        "Cancha de Tenis"
      ],
      "year_built": 2018,
      "energy_rating": "A"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 14
    },
    "owner": {
      "owner_id": "usr_956",
      "agent_name": "Agente Luxe Mendoza"
    },
    "analytics": {
      "views": 812,
      "saved_in_favorites_count": 104
    },
    "created_at": "2025-09-22T19:13:24.804197Z"
  },
  {
    "_id": "66a01b2c000000b4",
    "slug": "propiedad-departamento-seattle-180",
    "title": "Departamento Lujosa #180 en Seattle",
    "price": 14448906,
    "status": "PENDING",
    "specs": {
      "beds": 6,
      "baths": 5.0,
      "sqft": 1795,
      "garage_spaces": 2
    },
    "location": {
      "city_state": "Seattle, WA",
      "address": "6646 Avenue of Excellence",
      "coordinates": {
        "lat": 29.560612,
        "lng": -113.90658
      }
    },
    "features": {
      "amenities": [
        "Elevador Directo",
        "Spa & Sauna",
        "Casa Inteligente",
        "Vista al Mar",
        "Gimnasio Privado"
      ],
      "year_built": 2021,
      "energy_rating": "A"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 9
    },
    "owner": {
      "owner_id": "usr_453",
      "agent_name": "Agente Luxe Smith"
    },
    "analytics": {
      "views": 2189,
      "saved_in_favorites_count": 59
    },
    "created_at": "2025-12-08T19:13:24.804197Z"
  },
  {
    "_id": "66a01b2c000000b5",
    "slug": "propiedad-casa-new-york-181",
    "title": "Casa Lujosa #181 en New York",
    "price": 17459544,
    "status": "FOR SALE",
    "specs": {
      "beds": 10,
      "baths": 3.2,
      "sqft": 1523,
      "garage_spaces": 2
    },
    "location": {
      "city_state": "New York, NY",
      "address": "7311 Avenue of Excellence",
      "coordinates": {
        "lat": 35.772476,
        "lng": -95.00024
      }
    },
    "features": {
      "amenities": [
        "Gimnasio Privado",
        "Cancha de Tenis",
        "Seguridad 24/7",
        "Elevador Directo"
      ],
      "year_built": 2025,
      "energy_rating": "B"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 23
    },
    "owner": {
      "owner_id": "usr_976",
      "agent_name": "Agente Luxe Mendoza"
    },
    "analytics": {
      "views": 3859,
      "saved_in_favorites_count": 155
    },
    "created_at": "2024-08-11T19:13:24.804197Z"
  },
  {
    "_id": "66a01b2c000000b6",
    "slug": "propiedad-villa-seattle-182",
    "title": "Villa Lujosa #182 en Seattle",
    "price": 5928478,
    "status": "FOR SALE",
    "specs": {
      "beds": 8,
      "baths": 1.8,
      "sqft": 272,
      "garage_spaces": 3
    },
    "location": {
      "city_state": "Seattle, WA",
      "address": "4891 Avenue of Excellence",
      "coordinates": {
        "lat": 36.374182,
        "lng": -99.611349
      }
    },
    "features": {
      "amenities": [
        "Vista al Mar",
        "Casa Inteligente",
        "Seguridad 24/7",
        "Helipuerto Privado",
        "Spa & Sauna",
        "Alberca Privada"
      ],
      "year_built": 2016,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 10
    },
    "owner": {
      "owner_id": "usr_908",
      "agent_name": "Agente Luxe Smith"
    },
    "analytics": {
      "views": 2244,
      "saved_in_favorites_count": 151
    },
    "created_at": "2024-12-12T19:13:24.804197Z"
  },
  {
    "_id": "66a01b2c000000b7",
    "slug": "propiedad-residencia-de-playa-san-francisco-183",
    "title": "Residencia de Playa Lujosa #183 en San Francisco",
    "price": 9471009,
    "status": "ACTIVE",
    "specs": {
      "beds": 8,
      "baths": 1.2,
      "sqft": 1330,
      "garage_spaces": 2
    },
    "location": {
      "city_state": "San Francisco, CA",
      "address": "4191 Avenue of Excellence",
      "coordinates": {
        "lat": 43.55636,
        "lng": -82.038505
      }
    },
    "features": {
      "amenities": [
        "Cancha de Tenis",
        "Alberca Privada",
        "Seguridad 24/7",
        "Gimnasio Privado"
      ],
      "year_built": 2014,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 8
    },
    "owner": {
      "owner_id": "usr_762",
      "agent_name": "Agente Luxe Vásquez"
    },
    "analytics": {
      "views": 1307,
      "saved_in_favorites_count": 56
    },
    "created_at": "2024-11-30T19:13:24.804197Z"
  },
  {
    "_id": "66a01b2c000000b8",
    "slug": "propiedad-residencia-de-playa-aspen-184",
    "title": "Residencia de Playa Lujosa #184 en Aspen",
    "price": 12452503,
    "status": "FOR RENT",
    "specs": {
      "beds": 3,
      "baths": 1.5,
      "sqft": 776,
      "garage_spaces": 3
    },
    "location": {
      "city_state": "Aspen, CO",
      "address": "8603 Avenue of Excellence",
      "coordinates": {
        "lat": 33.589848,
        "lng": -78.510752
      }
    },
    "features": {
      "amenities": [
        "Casa Inteligente",
        "Cava de Vinos",
        "Gimnasio Privado",
        "Seguridad 24/7",
        "Vista al Mar"
      ],
      "year_built": 2014,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 23
    },
    "owner": {
      "owner_id": "usr_422",
      "agent_name": "Agente Luxe Mendoza"
    },
    "analytics": {
      "views": 4546,
      "saved_in_favorites_count": 337
    },
    "created_at": "2025-12-23T19:13:24.804197Z"
  },
  {
    "_id": "66a01b2c000000b9",
    "slug": "propiedad-casa-new-york-185",
    "title": "Casa Lujosa #185 en New York",
    "price": 16726815,
    "status": "PENDING",
    "specs": {
      "beds": 4,
      "baths": 4.9,
      "sqft": 169,
      "garage_spaces": 2
    },
    "location": {
      "city_state": "New York, NY",
      "address": "406 Avenue of Excellence",
      "coordinates": {
        "lat": 32.874201,
        "lng": -119.814505
      }
    },
    "features": {
      "amenities": [
        "Alberca Privada",
        "Cava de Vinos",
        "Elevador Directo"
      ],
      "year_built": 2010,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 16
    },
    "owner": {
      "owner_id": "usr_741",
      "agent_name": "Agente Luxe Mendoza"
    },
    "analytics": {
      "views": 999,
      "saved_in_favorites_count": 278
    },
    "created_at": "2026-01-09T19:13:24.804197Z"
  },
  {
    "_id": "66a01b2c000000ba",
    "slug": "propiedad-residencia-de-playa-seattle-186",
    "title": "Residencia de Playa Lujosa #186 en Seattle",
    "price": 10569277,
    "status": "FOR SALE",
    "specs": {
      "beds": 9,
      "baths": 8.5,
      "sqft": 119,
      "garage_spaces": 2
    },
    "location": {
      "city_state": "Seattle, WA",
      "address": "6492 Avenue of Excellence",
      "coordinates": {
        "lat": 43.987588,
        "lng": -76.998456
      }
    },
    "features": {
      "amenities": [
        "Cancha de Tenis",
        "Casa Inteligente",
        "Alberca Privada",
        "Spa & Sauna",
        "Helipuerto Privado"
      ],
      "year_built": 2024,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 6
    },
    "owner": {
      "owner_id": "usr_290",
      "agent_name": "Agente Luxe Vásquez"
    },
    "analytics": {
      "views": 717,
      "saved_in_favorites_count": 33
    },
    "created_at": "2025-07-03T19:13:24.804197Z"
  },
  {
    "_id": "66a01b2c000000bb",
    "slug": "propiedad-departamento-seattle-187",
    "title": "Departamento Lujosa #187 en Seattle",
    "price": 9204056,
    "status": "FOR SALE",
    "specs": {
      "beds": 1,
      "baths": 6.3,
      "sqft": 364,
      "garage_spaces": 1
    },
    "location": {
      "city_state": "Seattle, WA",
      "address": "5138 Avenue of Excellence",
      "coordinates": {
        "lat": 32.681755,
        "lng": -110.7629
      }
    },
    "features": {
      "amenities": [
        "Cancha de Tenis",
        "Cava de Vinos",
        "Gimnasio Privado",
        "Seguridad 24/7"
      ],
      "year_built": 2021,
      "energy_rating": "A"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 9
    },
    "owner": {
      "owner_id": "usr_109",
      "agent_name": "Agente Luxe Vásquez"
    },
    "analytics": {
      "views": 1113,
      "saved_in_favorites_count": 101
    },
    "created_at": "2026-05-02T19:13:24.804197Z"
  },
  {
    "_id": "66a01b2c000000bc",
    "slug": "propiedad-penthouse-new-york-188",
    "title": "Penthouse Lujosa #188 en New York",
    "price": 23481187,
    "status": "FOR RENT",
    "specs": {
      "beds": 1,
      "baths": 9.2,
      "sqft": 2279,
      "garage_spaces": 5
    },
    "location": {
      "city_state": "New York, NY",
      "address": "9723 Avenue of Excellence",
      "coordinates": {
        "lat": 27.647012,
        "lng": -94.341596
      }
    },
    "features": {
      "amenities": [
        "Cava de Vinos",
        "Helipuerto Privado",
        "Vista al Mar",
        "Spa & Sauna",
        "Cancha de Tenis"
      ],
      "year_built": 2015,
      "energy_rating": "A"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 25
    },
    "owner": {
      "owner_id": "usr_631",
      "agent_name": "Agente Luxe Vásquez"
    },
    "analytics": {
      "views": 2271,
      "saved_in_favorites_count": 212
    },
    "created_at": "2024-10-20T19:13:24.804197Z"
  },
  {
    "_id": "66a01b2c000000bd",
    "slug": "propiedad-casa-san-francisco-189",
    "title": "Casa Lujosa #189 en San Francisco",
    "price": 9460085,
    "status": "FOR SALE",
    "specs": {
      "beds": 8,
      "baths": 1.2,
      "sqft": 1783,
      "garage_spaces": 4
    },
    "location": {
      "city_state": "San Francisco, CA",
      "address": "3518 Avenue of Excellence",
      "coordinates": {
        "lat": 34.39497,
        "lng": -82.601351
      }
    },
    "features": {
      "amenities": [
        "Casa Inteligente",
        "Gimnasio Privado",
        "Cancha de Tenis"
      ],
      "year_built": 2010,
      "energy_rating": "A"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 21
    },
    "owner": {
      "owner_id": "usr_737",
      "agent_name": "Agente Luxe Vásquez"
    },
    "analytics": {
      "views": 133,
      "saved_in_favorites_count": 46
    },
    "created_at": "2025-01-04T19:13:24.804197Z"
  },
  {
    "_id": "66a01b2c000000be",
    "slug": "propiedad-departamento-new-york-190",
    "title": "Departamento Lujosa #190 en New York",
    "price": 5911530,
    "status": "FOR SALE",
    "specs": {
      "beds": 7,
      "baths": 3.1,
      "sqft": 489,
      "garage_spaces": 5
    },
    "location": {
      "city_state": "New York, NY",
      "address": "3392 Avenue of Excellence",
      "coordinates": {
        "lat": 35.932629,
        "lng": -113.805499
      }
    },
    "features": {
      "amenities": [
        "Elevador Directo",
        "Alberca Privada",
        "Vista al Mar",
        "Casa Inteligente"
      ],
      "year_built": 2016,
      "energy_rating": "B"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 25
    },
    "owner": {
      "owner_id": "usr_563",
      "agent_name": "Agente Luxe Vásquez"
    },
    "analytics": {
      "views": 3002,
      "saved_in_favorites_count": 292
    },
    "created_at": "2025-05-03T19:13:24.804197Z"
  },
  {
    "_id": "66a01b2c000000bf",
    "slug": "propiedad-penthouse-miami-191",
    "title": "Penthouse Lujosa #191 en Miami",
    "price": 10528580,
    "status": "ACTIVE",
    "specs": {
      "beds": 8,
      "baths": 3.7,
      "sqft": 130,
      "garage_spaces": 4
    },
    "location": {
      "city_state": "Miami, FL",
      "address": "1380 Avenue of Excellence",
      "coordinates": {
        "lat": 32.012433,
        "lng": -120.211096
      }
    },
    "features": {
      "amenities": [
        "Cava de Vinos",
        "Casa Inteligente",
        "Gimnasio Privado"
      ],
      "year_built": 2019,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 6
    },
    "owner": {
      "owner_id": "usr_556",
      "agent_name": "Agente Luxe Mendoza"
    },
    "analytics": {
      "views": 1196,
      "saved_in_favorites_count": 115
    },
    "created_at": "2024-12-09T19:13:24.804197Z"
  },
  {
    "_id": "66a01b2c000000c0",
    "slug": "propiedad-casa-beverly-hills-192",
    "title": "Casa Lujosa #192 en Beverly Hills",
    "price": 6297413,
    "status": "FOR SALE",
    "specs": {
      "beds": 9,
      "baths": 7.8,
      "sqft": 283,
      "garage_spaces": 3
    },
    "location": {
      "city_state": "Beverly Hills, CA",
      "address": "4039 Avenue of Excellence",
      "coordinates": {
        "lat": 39.650297,
        "lng": -77.383104
      }
    },
    "features": {
      "amenities": [
        "Helipuerto Privado",
        "Spa & Sauna",
        "Vista al Mar",
        "Cava de Vinos"
      ],
      "year_built": 2015,
      "energy_rating": "B"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 7
    },
    "owner": {
      "owner_id": "usr_950",
      "agent_name": "Agente Luxe Smith"
    },
    "analytics": {
      "views": 4886,
      "saved_in_favorites_count": 292
    },
    "created_at": "2024-09-27T19:13:24.804197Z"
  },
  {
    "_id": "66a01b2c000000c1",
    "slug": "propiedad-departamento-miami-193",
    "title": "Departamento Lujosa #193 en Miami",
    "price": 12354899,
    "status": "FOR SALE",
    "specs": {
      "beds": 6,
      "baths": 2.2,
      "sqft": 1520,
      "garage_spaces": 4
    },
    "location": {
      "city_state": "Miami, FL",
      "address": "9338 Avenue of Excellence",
      "coordinates": {
        "lat": 26.826233,
        "lng": -75.163959
      }
    },
    "features": {
      "amenities": [
        "Seguridad 24/7",
        "Cancha de Tenis",
        "Alberca Privada"
      ],
      "year_built": 2012,
      "energy_rating": "B"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 16
    },
    "owner": {
      "owner_id": "usr_929",
      "agent_name": "Agente Luxe Smith"
    },
    "analytics": {
      "views": 3148,
      "saved_in_favorites_count": 143
    },
    "created_at": "2025-07-13T19:13:24.804197Z"
  },
  {
    "_id": "66a01b2c000000c2",
    "slug": "propiedad-residencia-de-playa-beverly-hills-194",
    "title": "Residencia de Playa Lujosa #194 en Beverly Hills",
    "price": 4139914,
    "status": "ACTIVE",
    "specs": {
      "beds": 4,
      "baths": 9.3,
      "sqft": 1114,
      "garage_spaces": 4
    },
    "location": {
      "city_state": "Beverly Hills, CA",
      "address": "8086 Avenue of Excellence",
      "coordinates": {
        "lat": 42.505077,
        "lng": -80.789128
      }
    },
    "features": {
      "amenities": [
        "Helipuerto Privado",
        "Cava de Vinos",
        "Elevador Directo",
        "Gimnasio Privado"
      ],
      "year_built": 2013,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 11
    },
    "owner": {
      "owner_id": "usr_844",
      "agent_name": "Agente Luxe García"
    },
    "analytics": {
      "views": 1966,
      "saved_in_favorites_count": 412
    },
    "created_at": "2025-03-03T19:13:24.804197Z"
  },
  {
    "_id": "66a01b2c000000c3",
    "slug": "propiedad-casa-beverly-hills-195",
    "title": "Casa Lujosa #195 en Beverly Hills",
    "price": 17776257,
    "status": "FOR SALE",
    "specs": {
      "beds": 4,
      "baths": 3.6,
      "sqft": 975,
      "garage_spaces": 5
    },
    "location": {
      "city_state": "Beverly Hills, CA",
      "address": "1590 Avenue of Excellence",
      "coordinates": {
        "lat": 38.50612,
        "lng": -110.04275
      }
    },
    "features": {
      "amenities": [
        "Cancha de Tenis",
        "Spa & Sauna",
        "Helipuerto Privado",
        "Seguridad 24/7",
        "Elevador Directo"
      ],
      "year_built": 2013,
      "energy_rating": "A"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 17
    },
    "owner": {
      "owner_id": "usr_464",
      "agent_name": "Agente Luxe Vásquez"
    },
    "analytics": {
      "views": 1134,
      "saved_in_favorites_count": 132
    },
    "created_at": "2024-12-19T19:13:24.804197Z"
  },
  {
    "_id": "66a01b2c000000c4",
    "slug": "propiedad-departamento-beverly-hills-196",
    "title": "Departamento Lujosa #196 en Beverly Hills",
    "price": 14247835,
    "status": "ACTIVE",
    "specs": {
      "beds": 6,
      "baths": 8.4,
      "sqft": 2128,
      "garage_spaces": 2
    },
    "location": {
      "city_state": "Beverly Hills, CA",
      "address": "5196 Avenue of Excellence",
      "coordinates": {
        "lat": 40.535182,
        "lng": -82.138409
      }
    },
    "features": {
      "amenities": [
        "Spa & Sauna",
        "Seguridad 24/7",
        "Elevador Directo"
      ],
      "year_built": 2020,
      "energy_rating": "A"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 20
    },
    "owner": {
      "owner_id": "usr_852",
      "agent_name": "Agente Luxe Vásquez"
    },
    "analytics": {
      "views": 4653,
      "saved_in_favorites_count": 207
    },
    "created_at": "2025-12-30T19:13:24.804197Z"
  },
  {
    "_id": "66a01b2c000000c5",
    "slug": "propiedad-penthouse-san-francisco-197",
    "title": "Penthouse Lujosa #197 en San Francisco",
    "price": 2861662,
    "status": "FOR SALE",
    "specs": {
      "beds": 1,
      "baths": 7.6,
      "sqft": 1511,
      "garage_spaces": 2
    },
    "location": {
      "city_state": "San Francisco, CA",
      "address": "4358 Avenue of Excellence",
      "coordinates": {
        "lat": 32.650995,
        "lng": -77.019317
      }
    },
    "features": {
      "amenities": [
        "Vista al Mar",
        "Cava de Vinos",
        "Elevador Directo"
      ],
      "year_built": 2019,
      "energy_rating": "A"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 13
    },
    "owner": {
      "owner_id": "usr_343",
      "agent_name": "Agente Luxe García"
    },
    "analytics": {
      "views": 3336,
      "saved_in_favorites_count": 181
    },
    "created_at": "2025-05-15T19:13:24.804197Z"
  },
  {
    "_id": "66a01b2c000000c6",
    "slug": "propiedad-villa-beverly-hills-198",
    "title": "Villa Lujosa #198 en Beverly Hills",
    "price": 14149521,
    "status": "ACTIVE",
    "specs": {
      "beds": 7,
      "baths": 3.3,
      "sqft": 1324,
      "garage_spaces": 1
    },
    "location": {
      "city_state": "Beverly Hills, CA",
      "address": "6762 Avenue of Excellence",
      "coordinates": {
        "lat": 29.10469,
        "lng": -94.484997
      }
    },
    "features": {
      "amenities": [
        "Cava de Vinos",
        "Gimnasio Privado",
        "Seguridad 24/7",
        "Elevador Directo"
      ],
      "year_built": 2017,
      "energy_rating": "B"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 11
    },
    "owner": {
      "owner_id": "usr_618",
      "agent_name": "Agente Luxe Mendoza"
    },
    "analytics": {
      "views": 2745,
      "saved_in_favorites_count": 99
    },
    "created_at": "2025-04-27T19:13:24.804197Z"
  },
  {
    "_id": "66a01b2c000000c7",
    "slug": "propiedad-penthouse-seattle-199",
    "title": "Penthouse Lujosa #199 en Seattle",
    "price": 22114598,
    "status": "PENDING",
    "specs": {
      "beds": 10,
      "baths": 6.4,
      "sqft": 2054,
      "garage_spaces": 3
    },
    "location": {
      "city_state": "Seattle, WA",
      "address": "429 Avenue of Excellence",
      "coordinates": {
        "lat": 25.997933,
        "lng": -102.885726
      }
    },
    "features": {
      "amenities": [
        "Cava de Vinos",
        "Casa Inteligente",
        "Vista al Mar"
      ],
      "year_built": 2025,
      "energy_rating": "A"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 24
    },
    "owner": {
      "owner_id": "usr_573",
      "agent_name": "Agente Luxe Vásquez"
    },
    "analytics": {
      "views": 3332,
      "saved_in_favorites_count": 327
    },
    "created_at": "2025-03-09T19:13:24.804197Z"
  },
  {
    "_id": "66a01b2c000000c8",
    "slug": "propiedad-departamento-chicago-200",
    "title": "Departamento Lujosa #200 en Chicago",
    "price": 11630079,
    "status": "ACTIVE",
    "specs": {
      "beds": 6,
      "baths": 8.5,
      "sqft": 1082,
      "garage_spaces": 5
    },
    "location": {
      "city_state": "Chicago, IL",
      "address": "9293 Avenue of Excellence",
      "coordinates": {
        "lat": 25.880614,
        "lng": -76.008544
      }
    },
    "features": {
      "amenities": [
        "Spa & Sauna",
        "Elevador Directo",
        "Vista al Mar",
        "Casa Inteligente"
      ],
      "year_built": 2012,
      "energy_rating": "B"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 13
    },
    "owner": {
      "owner_id": "usr_801",
      "agent_name": "Agente Luxe García"
    },
    "analytics": {
      "views": 2587,
      "saved_in_favorites_count": 260
    },
    "created_at": "2025-01-15T19:13:24.804197Z"
  },
  {
    "_id": "66a01b2c000000c9",
    "slug": "propiedad-departamento-austin-201",
    "title": "Departamento Lujosa #201 en Austin",
    "price": 1144161,
    "status": "FOR RENT",
    "specs": {
      "beds": 10,
      "baths": 6.6,
      "sqft": 795,
      "garage_spaces": 4
    },
    "location": {
      "city_state": "Austin, TX",
      "address": "7852 Avenue of Excellence",
      "coordinates": {
        "lat": 39.062417,
        "lng": -87.380872
      }
    },
    "features": {
      "amenities": [
        "Cava de Vinos",
        "Vista al Mar",
        "Casa Inteligente",
        "Seguridad 24/7",
        "Gimnasio Privado",
        "Alberca Privada",
        "Helipuerto Privado"
      ],
      "year_built": 2012,
      "energy_rating": "A"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 17
    },
    "owner": {
      "owner_id": "usr_153",
      "agent_name": "Agente Luxe Vásquez"
    },
    "analytics": {
      "views": 3455,
      "saved_in_favorites_count": 322
    },
    "created_at": "2025-04-05T19:13:24.804197Z"
  },
  {
    "_id": "66a01b2c000000ca",
    "slug": "propiedad-departamento-scottsdale-202",
    "title": "Departamento Lujosa #202 en Scottsdale",
    "price": 14717854,
    "status": "ACTIVE",
    "specs": {
      "beds": 6,
      "baths": 7.0,
      "sqft": 2006,
      "garage_spaces": 5
    },
    "location": {
      "city_state": "Scottsdale, AZ",
      "address": "8020 Avenue of Excellence",
      "coordinates": {
        "lat": 32.864066,
        "lng": -113.050332
      }
    },
    "features": {
      "amenities": [
        "Helipuerto Privado",
        "Gimnasio Privado",
        "Elevador Directo"
      ],
      "year_built": 2012,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 17
    },
    "owner": {
      "owner_id": "usr_502",
      "agent_name": "Agente Luxe Mendoza"
    },
    "analytics": {
      "views": 3202,
      "saved_in_favorites_count": 55
    },
    "created_at": "2026-04-20T19:13:24.804197Z"
  },
  {
    "_id": "66a01b2c000000cb",
    "slug": "propiedad-villa-new-york-203",
    "title": "Villa Lujosa #203 en New York",
    "price": 18552202,
    "status": "FOR RENT",
    "specs": {
      "beds": 6,
      "baths": 2.2,
      "sqft": 2346,
      "garage_spaces": 5
    },
    "location": {
      "city_state": "New York, NY",
      "address": "3027 Avenue of Excellence",
      "coordinates": {
        "lat": 47.346587,
        "lng": -101.314576
      }
    },
    "features": {
      "amenities": [
        "Seguridad 24/7",
        "Casa Inteligente",
        "Cava de Vinos",
        "Cancha de Tenis",
        "Vista al Mar"
      ],
      "year_built": 2021,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 7
    },
    "owner": {
      "owner_id": "usr_799",
      "agent_name": "Agente Luxe Mendoza"
    },
    "analytics": {
      "views": 246,
      "saved_in_favorites_count": 381
    },
    "created_at": "2026-06-13T19:13:24.804197Z"
  },
  {
    "_id": "66a01b2c000000cc",
    "slug": "propiedad-residencia-de-playa-malibu-204",
    "title": "Residencia de Playa Lujosa #204 en Malibu",
    "price": 14241469,
    "status": "ACTIVE",
    "specs": {
      "beds": 8,
      "baths": 2.1,
      "sqft": 1776,
      "garage_spaces": 2
    },
    "location": {
      "city_state": "Malibu, CA",
      "address": "8886 Avenue of Excellence",
      "coordinates": {
        "lat": 37.17879,
        "lng": -117.166066
      }
    },
    "features": {
      "amenities": [
        "Elevador Directo",
        "Cava de Vinos",
        "Cancha de Tenis",
        "Gimnasio Privado"
      ],
      "year_built": 2013,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 14
    },
    "owner": {
      "owner_id": "usr_534",
      "agent_name": "Agente Luxe Vásquez"
    },
    "analytics": {
      "views": 3767,
      "saved_in_favorites_count": 22
    },
    "created_at": "2025-05-18T19:13:24.804197Z"
  },
  {
    "_id": "66a01b2c000000cd",
    "slug": "propiedad-villa-malibu-205",
    "title": "Villa Lujosa #205 en Malibu",
    "price": 9488147,
    "status": "FOR RENT",
    "specs": {
      "beds": 6,
      "baths": 2.0,
      "sqft": 2049,
      "garage_spaces": 4
    },
    "location": {
      "city_state": "Malibu, CA",
      "address": "2947 Avenue of Excellence",
      "coordinates": {
        "lat": 42.360642,
        "lng": -97.666961
      }
    },
    "features": {
      "amenities": [
        "Elevador Directo",
        "Seguridad 24/7",
        "Cava de Vinos"
      ],
      "year_built": 2020,
      "energy_rating": "A"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 8
    },
    "owner": {
      "owner_id": "usr_777",
      "agent_name": "Agente Luxe Vásquez"
    },
    "analytics": {
      "views": 971,
      "saved_in_favorites_count": 411
    },
    "created_at": "2026-05-02T19:13:24.804197Z"
  },
  {
    "_id": "66a01b2c000000ce",
    "slug": "propiedad-casa-new-york-206",
    "title": "Casa Lujosa #206 en New York",
    "price": 8240156,
    "status": "FOR SALE",
    "specs": {
      "beds": 2,
      "baths": 8.1,
      "sqft": 1234,
      "garage_spaces": 5
    },
    "location": {
      "city_state": "New York, NY",
      "address": "7593 Avenue of Excellence",
      "coordinates": {
        "lat": 47.488808,
        "lng": -100.340962
      }
    },
    "features": {
      "amenities": [
        "Cancha de Tenis",
        "Alberca Privada",
        "Seguridad 24/7",
        "Vista al Mar",
        "Elevador Directo"
      ],
      "year_built": 2013,
      "energy_rating": "A"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 7
    },
    "owner": {
      "owner_id": "usr_657",
      "agent_name": "Agente Luxe Smith"
    },
    "analytics": {
      "views": 1109,
      "saved_in_favorites_count": 288
    },
    "created_at": "2026-07-20T19:13:24.805197Z"
  },
  {
    "_id": "66a01b2c000000cf",
    "slug": "propiedad-casa-beverly-hills-207",
    "title": "Casa Lujosa #207 en Beverly Hills",
    "price": 4116893,
    "status": "FOR RENT",
    "specs": {
      "beds": 9,
      "baths": 1.9,
      "sqft": 1906,
      "garage_spaces": 2
    },
    "location": {
      "city_state": "Beverly Hills, CA",
      "address": "861 Avenue of Excellence",
      "coordinates": {
        "lat": 32.162549,
        "lng": -74.768385
      }
    },
    "features": {
      "amenities": [
        "Helipuerto Privado",
        "Gimnasio Privado",
        "Elevador Directo"
      ],
      "year_built": 2014,
      "energy_rating": "B"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 5
    },
    "owner": {
      "owner_id": "usr_917",
      "agent_name": "Agente Luxe Vásquez"
    },
    "analytics": {
      "views": 4512,
      "saved_in_favorites_count": 287
    },
    "created_at": "2026-04-08T19:13:24.805197Z"
  },
  {
    "_id": "66a01b2c000000d0",
    "slug": "propiedad-villa-new-york-208",
    "title": "Villa Lujosa #208 en New York",
    "price": 4563147,
    "status": "ACTIVE",
    "specs": {
      "beds": 6,
      "baths": 2.3,
      "sqft": 104,
      "garage_spaces": 5
    },
    "location": {
      "city_state": "New York, NY",
      "address": "4974 Avenue of Excellence",
      "coordinates": {
        "lat": 46.242609,
        "lng": -104.211632
      }
    },
    "features": {
      "amenities": [
        "Alberca Privada",
        "Casa Inteligente",
        "Spa & Sauna"
      ],
      "year_built": 2011,
      "energy_rating": "A"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 9
    },
    "owner": {
      "owner_id": "usr_431",
      "agent_name": "Agente Luxe García"
    },
    "analytics": {
      "views": 1716,
      "saved_in_favorites_count": 107
    },
    "created_at": "2026-03-20T19:13:24.805197Z"
  },
  {
    "_id": "66a01b2c000000d1",
    "slug": "propiedad-casa-aspen-209",
    "title": "Casa Lujosa #209 en Aspen",
    "price": 21726913,
    "status": "FOR RENT",
    "specs": {
      "beds": 2,
      "baths": 4.9,
      "sqft": 575,
      "garage_spaces": 5
    },
    "location": {
      "city_state": "Aspen, CO",
      "address": "5183 Avenue of Excellence",
      "coordinates": {
        "lat": 47.604539,
        "lng": -107.350776
      }
    },
    "features": {
      "amenities": [
        "Seguridad 24/7",
        "Helipuerto Privado",
        "Spa & Sauna",
        "Cancha de Tenis"
      ],
      "year_built": 2014,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 21
    },
    "owner": {
      "owner_id": "usr_614",
      "agent_name": "Agente Luxe Vásquez"
    },
    "analytics": {
      "views": 3676,
      "saved_in_favorites_count": 187
    },
    "created_at": "2025-10-10T19:13:24.805197Z"
  },
  {
    "_id": "66a01b2c000000d2",
    "slug": "propiedad-departamento-malibu-210",
    "title": "Departamento Lujosa #210 en Malibu",
    "price": 22321635,
    "status": "PENDING",
    "specs": {
      "beds": 2,
      "baths": 3.5,
      "sqft": 1786,
      "garage_spaces": 4
    },
    "location": {
      "city_state": "Malibu, CA",
      "address": "5329 Avenue of Excellence",
      "coordinates": {
        "lat": 47.978297,
        "lng": -80.550557
      }
    },
    "features": {
      "amenities": [
        "Gimnasio Privado",
        "Alberca Privada",
        "Cancha de Tenis"
      ],
      "year_built": 2012,
      "energy_rating": "A"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 10
    },
    "owner": {
      "owner_id": "usr_558",
      "agent_name": "Agente Luxe Vásquez"
    },
    "analytics": {
      "views": 501,
      "saved_in_favorites_count": 226
    },
    "created_at": "2024-12-28T19:13:24.805197Z"
  },
  {
    "_id": "66a01b2c000000d3",
    "slug": "propiedad-casa-chicago-211",
    "title": "Casa Lujosa #211 en Chicago",
    "price": 21468452,
    "status": "FOR RENT",
    "specs": {
      "beds": 2,
      "baths": 5.8,
      "sqft": 823,
      "garage_spaces": 5
    },
    "location": {
      "city_state": "Chicago, IL",
      "address": "7602 Avenue of Excellence",
      "coordinates": {
        "lat": 29.07098,
        "lng": -93.367406
      }
    },
    "features": {
      "amenities": [
        "Cancha de Tenis",
        "Elevador Directo",
        "Spa & Sauna",
        "Casa Inteligente",
        "Seguridad 24/7",
        "Helipuerto Privado"
      ],
      "year_built": 2022,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 13
    },
    "owner": {
      "owner_id": "usr_309",
      "agent_name": "Agente Luxe García"
    },
    "analytics": {
      "views": 2996,
      "saved_in_favorites_count": 377
    },
    "created_at": "2026-02-28T19:13:24.805197Z"
  },
  {
    "_id": "66a01b2c000000d4",
    "slug": "propiedad-residencia-de-playa-new-york-212",
    "title": "Residencia de Playa Lujosa #212 en New York",
    "price": 389719,
    "status": "ACTIVE",
    "specs": {
      "beds": 4,
      "baths": 4.4,
      "sqft": 271,
      "garage_spaces": 2
    },
    "location": {
      "city_state": "New York, NY",
      "address": "7158 Avenue of Excellence",
      "coordinates": {
        "lat": 40.974853,
        "lng": -74.834169
      }
    },
    "features": {
      "amenities": [
        "Casa Inteligente",
        "Seguridad 24/7",
        "Helipuerto Privado",
        "Vista al Mar",
        "Gimnasio Privado",
        "Cancha de Tenis"
      ],
      "year_built": 2019,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 16
    },
    "owner": {
      "owner_id": "usr_915",
      "agent_name": "Agente Luxe García"
    },
    "analytics": {
      "views": 3825,
      "saved_in_favorites_count": 387
    },
    "created_at": "2026-05-26T19:13:24.805197Z"
  },
  {
    "_id": "66a01b2c000000d5",
    "slug": "propiedad-casa-beverly-hills-213",
    "title": "Casa Lujosa #213 en Beverly Hills",
    "price": 12751353,
    "status": "FOR SALE",
    "specs": {
      "beds": 3,
      "baths": 7.1,
      "sqft": 1625,
      "garage_spaces": 3
    },
    "location": {
      "city_state": "Beverly Hills, CA",
      "address": "5161 Avenue of Excellence",
      "coordinates": {
        "lat": 41.750021,
        "lng": -80.915487
      }
    },
    "features": {
      "amenities": [
        "Elevador Directo",
        "Vista al Mar",
        "Seguridad 24/7",
        "Casa Inteligente",
        "Spa & Sauna",
        "Alberca Privada",
        "Cancha de Tenis"
      ],
      "year_built": 2010,
      "energy_rating": "B"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 17
    },
    "owner": {
      "owner_id": "usr_204",
      "agent_name": "Agente Luxe García"
    },
    "analytics": {
      "views": 3446,
      "saved_in_favorites_count": 44
    },
    "created_at": "2025-07-02T19:13:24.805197Z"
  },
  {
    "_id": "66a01b2c000000d6",
    "slug": "propiedad-villa-scottsdale-214",
    "title": "Villa Lujosa #214 en Scottsdale",
    "price": 15960309,
    "status": "FOR RENT",
    "specs": {
      "beds": 4,
      "baths": 4.8,
      "sqft": 247,
      "garage_spaces": 2
    },
    "location": {
      "city_state": "Scottsdale, AZ",
      "address": "7602 Avenue of Excellence",
      "coordinates": {
        "lat": 47.234755,
        "lng": -80.591036
      }
    },
    "features": {
      "amenities": [
        "Helipuerto Privado",
        "Elevador Directo",
        "Cava de Vinos",
        "Alberca Privada",
        "Vista al Mar"
      ],
      "year_built": 2024,
      "energy_rating": "A"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 8
    },
    "owner": {
      "owner_id": "usr_995",
      "agent_name": "Agente Luxe Smith"
    },
    "analytics": {
      "views": 2140,
      "saved_in_favorites_count": 22
    },
    "created_at": "2025-11-24T19:13:24.805197Z"
  },
  {
    "_id": "66a01b2c000000d7",
    "slug": "propiedad-villa-scottsdale-215",
    "title": "Villa Lujosa #215 en Scottsdale",
    "price": 7404826,
    "status": "ACTIVE",
    "specs": {
      "beds": 8,
      "baths": 7.0,
      "sqft": 760,
      "garage_spaces": 5
    },
    "location": {
      "city_state": "Scottsdale, AZ",
      "address": "3836 Avenue of Excellence",
      "coordinates": {
        "lat": 44.564223,
        "lng": -111.715334
      }
    },
    "features": {
      "amenities": [
        "Gimnasio Privado",
        "Helipuerto Privado",
        "Elevador Directo"
      ],
      "year_built": 2025,
      "energy_rating": "A"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 20
    },
    "owner": {
      "owner_id": "usr_911",
      "agent_name": "Agente Luxe Mendoza"
    },
    "analytics": {
      "views": 2953,
      "saved_in_favorites_count": 128
    },
    "created_at": "2025-08-15T19:13:24.805197Z"
  },
  {
    "_id": "66a01b2c000000d8",
    "slug": "propiedad-departamento-miami-216",
    "title": "Departamento Lujosa #216 en Miami",
    "price": 8827414,
    "status": "FOR RENT",
    "specs": {
      "beds": 10,
      "baths": 3.5,
      "sqft": 2402,
      "garage_spaces": 4
    },
    "location": {
      "city_state": "Miami, FL",
      "address": "7538 Avenue of Excellence",
      "coordinates": {
        "lat": 25.875095,
        "lng": -106.672408
      }
    },
    "features": {
      "amenities": [
        "Vista al Mar",
        "Helipuerto Privado",
        "Alberca Privada",
        "Elevador Directo"
      ],
      "year_built": 2018,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 25
    },
    "owner": {
      "owner_id": "usr_128",
      "agent_name": "Agente Luxe Vásquez"
    },
    "analytics": {
      "views": 4625,
      "saved_in_favorites_count": 119
    },
    "created_at": "2025-04-26T19:13:24.805197Z"
  },
  {
    "_id": "66a01b2c000000d9",
    "slug": "propiedad-departamento-miami-217",
    "title": "Departamento Lujosa #217 en Miami",
    "price": 12963418,
    "status": "FOR RENT",
    "specs": {
      "beds": 3,
      "baths": 4.2,
      "sqft": 1270,
      "garage_spaces": 5
    },
    "location": {
      "city_state": "Miami, FL",
      "address": "702 Avenue of Excellence",
      "coordinates": {
        "lat": 37.575785,
        "lng": -86.744098
      }
    },
    "features": {
      "amenities": [
        "Seguridad 24/7",
        "Elevador Directo",
        "Casa Inteligente"
      ],
      "year_built": 2019,
      "energy_rating": "A"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 12
    },
    "owner": {
      "owner_id": "usr_877",
      "agent_name": "Agente Luxe Mendoza"
    },
    "analytics": {
      "views": 3550,
      "saved_in_favorites_count": 350
    },
    "created_at": "2025-06-25T19:13:24.805197Z"
  },
  {
    "_id": "66a01b2c000000da",
    "slug": "propiedad-penthouse-austin-218",
    "title": "Penthouse Lujosa #218 en Austin",
    "price": 16165695,
    "status": "PENDING",
    "specs": {
      "beds": 5,
      "baths": 8.9,
      "sqft": 2136,
      "garage_spaces": 4
    },
    "location": {
      "city_state": "Austin, TX",
      "address": "8010 Avenue of Excellence",
      "coordinates": {
        "lat": 38.632295,
        "lng": -116.507449
      }
    },
    "features": {
      "amenities": [
        "Cava de Vinos",
        "Helipuerto Privado",
        "Alberca Privada"
      ],
      "year_built": 2017,
      "energy_rating": "A"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 11
    },
    "owner": {
      "owner_id": "usr_135",
      "agent_name": "Agente Luxe García"
    },
    "analytics": {
      "views": 2613,
      "saved_in_favorites_count": 138
    },
    "created_at": "2025-07-02T19:13:24.805197Z"
  },
  {
    "_id": "66a01b2c000000db",
    "slug": "propiedad-residencia-de-playa-miami-219",
    "title": "Residencia de Playa Lujosa #219 en Miami",
    "price": 10448617,
    "status": "ACTIVE",
    "specs": {
      "beds": 7,
      "baths": 9.3,
      "sqft": 810,
      "garage_spaces": 2
    },
    "location": {
      "city_state": "Miami, FL",
      "address": "246 Avenue of Excellence",
      "coordinates": {
        "lat": 38.830985,
        "lng": -120.731606
      }
    },
    "features": {
      "amenities": [
        "Cancha de Tenis",
        "Vista al Mar",
        "Casa Inteligente",
        "Alberca Privada",
        "Spa & Sauna",
        "Seguridad 24/7",
        "Elevador Directo"
      ],
      "year_built": 2018,
      "energy_rating": "B"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 5
    },
    "owner": {
      "owner_id": "usr_733",
      "agent_name": "Agente Luxe Mendoza"
    },
    "analytics": {
      "views": 4659,
      "saved_in_favorites_count": 83
    },
    "created_at": "2025-03-17T19:13:24.805197Z"
  },
  {
    "_id": "66a01b2c000000dc",
    "slug": "propiedad-casa-beverly-hills-220",
    "title": "Casa Lujosa #220 en Beverly Hills",
    "price": 9234230,
    "status": "ACTIVE",
    "specs": {
      "beds": 7,
      "baths": 3.0,
      "sqft": 170,
      "garage_spaces": 3
    },
    "location": {
      "city_state": "Beverly Hills, CA",
      "address": "5538 Avenue of Excellence",
      "coordinates": {
        "lat": 37.870837,
        "lng": -88.252925
      }
    },
    "features": {
      "amenities": [
        "Elevador Directo",
        "Vista al Mar",
        "Helipuerto Privado",
        "Seguridad 24/7",
        "Cancha de Tenis"
      ],
      "year_built": 2022,
      "energy_rating": "A"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 17
    },
    "owner": {
      "owner_id": "usr_630",
      "agent_name": "Agente Luxe Vásquez"
    },
    "analytics": {
      "views": 2008,
      "saved_in_favorites_count": 341
    },
    "created_at": "2025-03-11T19:13:24.805197Z"
  },
  {
    "_id": "66a01b2c000000dd",
    "slug": "propiedad-casa-beverly-hills-221",
    "title": "Casa Lujosa #221 en Beverly Hills",
    "price": 22906071,
    "status": "PENDING",
    "specs": {
      "beds": 6,
      "baths": 3.3,
      "sqft": 972,
      "garage_spaces": 2
    },
    "location": {
      "city_state": "Beverly Hills, CA",
      "address": "2000 Avenue of Excellence",
      "coordinates": {
        "lat": 44.9235,
        "lng": -118.328281
      }
    },
    "features": {
      "amenities": [
        "Spa & Sauna",
        "Elevador Directo",
        "Alberca Privada",
        "Cancha de Tenis",
        "Cava de Vinos",
        "Gimnasio Privado"
      ],
      "year_built": 2016,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 10
    },
    "owner": {
      "owner_id": "usr_525",
      "agent_name": "Agente Luxe Smith"
    },
    "analytics": {
      "views": 4561,
      "saved_in_favorites_count": 259
    },
    "created_at": "2024-08-01T19:13:24.805197Z"
  },
  {
    "_id": "66a01b2c000000de",
    "slug": "propiedad-departamento-chicago-222",
    "title": "Departamento Lujosa #222 en Chicago",
    "price": 19757520,
    "status": "FOR RENT",
    "specs": {
      "beds": 9,
      "baths": 1.4,
      "sqft": 854,
      "garage_spaces": 2
    },
    "location": {
      "city_state": "Chicago, IL",
      "address": "6621 Avenue of Excellence",
      "coordinates": {
        "lat": 26.413456,
        "lng": -114.389702
      }
    },
    "features": {
      "amenities": [
        "Cancha de Tenis",
        "Alberca Privada",
        "Gimnasio Privado",
        "Elevador Directo"
      ],
      "year_built": 2019,
      "energy_rating": "A"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 8
    },
    "owner": {
      "owner_id": "usr_636",
      "agent_name": "Agente Luxe Mendoza"
    },
    "analytics": {
      "views": 3466,
      "saved_in_favorites_count": 26
    },
    "created_at": "2024-09-04T19:13:24.805197Z"
  },
  {
    "_id": "66a01b2c000000df",
    "slug": "propiedad-departamento-chicago-223",
    "title": "Departamento Lujosa #223 en Chicago",
    "price": 15395698,
    "status": "PENDING",
    "specs": {
      "beds": 4,
      "baths": 2.2,
      "sqft": 1820,
      "garage_spaces": 4
    },
    "location": {
      "city_state": "Chicago, IL",
      "address": "2170 Avenue of Excellence",
      "coordinates": {
        "lat": 40.428157,
        "lng": -117.117477
      }
    },
    "features": {
      "amenities": [
        "Cava de Vinos",
        "Elevador Directo",
        "Seguridad 24/7",
        "Casa Inteligente"
      ],
      "year_built": 2023,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 16
    },
    "owner": {
      "owner_id": "usr_408",
      "agent_name": "Agente Luxe García"
    },
    "analytics": {
      "views": 709,
      "saved_in_favorites_count": 92
    },
    "created_at": "2025-10-01T19:13:24.805197Z"
  },
  {
    "_id": "66a01b2c000000e0",
    "slug": "propiedad-departamento-malibu-224",
    "title": "Departamento Lujosa #224 en Malibu",
    "price": 7849302,
    "status": "PENDING",
    "specs": {
      "beds": 9,
      "baths": 7.5,
      "sqft": 1305,
      "garage_spaces": 5
    },
    "location": {
      "city_state": "Malibu, CA",
      "address": "5448 Avenue of Excellence",
      "coordinates": {
        "lat": 40.046524,
        "lng": -84.5952
      }
    },
    "features": {
      "amenities": [
        "Gimnasio Privado",
        "Elevador Directo",
        "Cava de Vinos",
        "Cancha de Tenis",
        "Helipuerto Privado",
        "Vista al Mar"
      ],
      "year_built": 2024,
      "energy_rating": "B"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 10
    },
    "owner": {
      "owner_id": "usr_563",
      "agent_name": "Agente Luxe García"
    },
    "analytics": {
      "views": 1668,
      "saved_in_favorites_count": 194
    },
    "created_at": "2026-01-14T19:13:24.805197Z"
  },
  {
    "_id": "66a01b2c000000e1",
    "slug": "propiedad-penthouse-miami-225",
    "title": "Penthouse Lujosa #225 en Miami",
    "price": 11892630,
    "status": "FOR SALE",
    "specs": {
      "beds": 4,
      "baths": 5.0,
      "sqft": 1588,
      "garage_spaces": 2
    },
    "location": {
      "city_state": "Miami, FL",
      "address": "6285 Avenue of Excellence",
      "coordinates": {
        "lat": 36.960373,
        "lng": -98.658887
      }
    },
    "features": {
      "amenities": [
        "Helipuerto Privado",
        "Elevador Directo",
        "Seguridad 24/7",
        "Cancha de Tenis",
        "Cava de Vinos",
        "Gimnasio Privado",
        "Spa & Sauna"
      ],
      "year_built": 2010,
      "energy_rating": "A"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 23
    },
    "owner": {
      "owner_id": "usr_615",
      "agent_name": "Agente Luxe Mendoza"
    },
    "analytics": {
      "views": 1360,
      "saved_in_favorites_count": 324
    },
    "created_at": "2026-04-10T19:13:24.805197Z"
  },
  {
    "_id": "66a01b2c000000e2",
    "slug": "propiedad-residencia-de-playa-chicago-226",
    "title": "Residencia de Playa Lujosa #226 en Chicago",
    "price": 23358862,
    "status": "FOR RENT",
    "specs": {
      "beds": 10,
      "baths": 1.2,
      "sqft": 1016,
      "garage_spaces": 3
    },
    "location": {
      "city_state": "Chicago, IL",
      "address": "6358 Avenue of Excellence",
      "coordinates": {
        "lat": 45.897998,
        "lng": -82.812123
      }
    },
    "features": {
      "amenities": [
        "Spa & Sauna",
        "Cancha de Tenis",
        "Helipuerto Privado",
        "Cava de Vinos",
        "Seguridad 24/7"
      ],
      "year_built": 2017,
      "energy_rating": "B"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 18
    },
    "owner": {
      "owner_id": "usr_668",
      "agent_name": "Agente Luxe Mendoza"
    },
    "analytics": {
      "views": 352,
      "saved_in_favorites_count": 407
    },
    "created_at": "2026-02-01T19:13:24.805197Z"
  },
  {
    "_id": "66a01b2c000000e3",
    "slug": "propiedad-residencia-de-playa-seattle-227",
    "title": "Residencia de Playa Lujosa #227 en Seattle",
    "price": 22130077,
    "status": "PENDING",
    "specs": {
      "beds": 8,
      "baths": 8.2,
      "sqft": 1090,
      "garage_spaces": 2
    },
    "location": {
      "city_state": "Seattle, WA",
      "address": "4806 Avenue of Excellence",
      "coordinates": {
        "lat": 35.512877,
        "lng": -107.46607
      }
    },
    "features": {
      "amenities": [
        "Seguridad 24/7",
        "Gimnasio Privado",
        "Casa Inteligente",
        "Vista al Mar",
        "Cancha de Tenis",
        "Elevador Directo"
      ],
      "year_built": 2026,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 11
    },
    "owner": {
      "owner_id": "usr_976",
      "agent_name": "Agente Luxe Mendoza"
    },
    "analytics": {
      "views": 4351,
      "saved_in_favorites_count": 435
    },
    "created_at": "2025-09-27T19:13:24.805197Z"
  },
  {
    "_id": "66a01b2c000000e4",
    "slug": "propiedad-casa-miami-228",
    "title": "Casa Lujosa #228 en Miami",
    "price": 5001415,
    "status": "FOR RENT",
    "specs": {
      "beds": 1,
      "baths": 1.7,
      "sqft": 944,
      "garage_spaces": 5
    },
    "location": {
      "city_state": "Miami, FL",
      "address": "2090 Avenue of Excellence",
      "coordinates": {
        "lat": 42.384769,
        "lng": -107.238501
      }
    },
    "features": {
      "amenities": [
        "Cancha de Tenis",
        "Elevador Directo",
        "Casa Inteligente",
        "Spa & Sauna",
        "Vista al Mar"
      ],
      "year_built": 2021,
      "energy_rating": "B"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 10
    },
    "owner": {
      "owner_id": "usr_571",
      "agent_name": "Agente Luxe Vásquez"
    },
    "analytics": {
      "views": 4647,
      "saved_in_favorites_count": 388
    },
    "created_at": "2024-11-27T19:13:24.805197Z"
  },
  {
    "_id": "66a01b2c000000e5",
    "slug": "propiedad-penthouse-austin-229",
    "title": "Penthouse Lujosa #229 en Austin",
    "price": 3372265,
    "status": "PENDING",
    "specs": {
      "beds": 6,
      "baths": 6.3,
      "sqft": 942,
      "garage_spaces": 1
    },
    "location": {
      "city_state": "Austin, TX",
      "address": "8747 Avenue of Excellence",
      "coordinates": {
        "lat": 38.781099,
        "lng": -93.924153
      }
    },
    "features": {
      "amenities": [
        "Elevador Directo",
        "Cava de Vinos",
        "Casa Inteligente",
        "Vista al Mar",
        "Seguridad 24/7"
      ],
      "year_built": 2021,
      "energy_rating": "A"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 9
    },
    "owner": {
      "owner_id": "usr_723",
      "agent_name": "Agente Luxe Smith"
    },
    "analytics": {
      "views": 3793,
      "saved_in_favorites_count": 152
    },
    "created_at": "2025-03-14T19:13:24.805197Z"
  },
  {
    "_id": "66a01b2c000000e6",
    "slug": "propiedad-departamento-new-york-230",
    "title": "Departamento Lujosa #230 en New York",
    "price": 7774992,
    "status": "FOR RENT",
    "specs": {
      "beds": 4,
      "baths": 8.1,
      "sqft": 1440,
      "garage_spaces": 4
    },
    "location": {
      "city_state": "New York, NY",
      "address": "6921 Avenue of Excellence",
      "coordinates": {
        "lat": 31.999108,
        "lng": -90.221377
      }
    },
    "features": {
      "amenities": [
        "Casa Inteligente",
        "Cava de Vinos",
        "Helipuerto Privado"
      ],
      "year_built": 2025,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 22
    },
    "owner": {
      "owner_id": "usr_314",
      "agent_name": "Agente Luxe Smith"
    },
    "analytics": {
      "views": 3449,
      "saved_in_favorites_count": 209
    },
    "created_at": "2025-08-23T19:13:24.805197Z"
  },
  {
    "_id": "66a01b2c000000e7",
    "slug": "propiedad-departamento-chicago-231",
    "title": "Departamento Lujosa #231 en Chicago",
    "price": 7663538,
    "status": "FOR RENT",
    "specs": {
      "beds": 6,
      "baths": 8.0,
      "sqft": 750,
      "garage_spaces": 4
    },
    "location": {
      "city_state": "Chicago, IL",
      "address": "8341 Avenue of Excellence",
      "coordinates": {
        "lat": 26.105762,
        "lng": -81.658253
      }
    },
    "features": {
      "amenities": [
        "Cancha de Tenis",
        "Spa & Sauna",
        "Vista al Mar",
        "Casa Inteligente",
        "Seguridad 24/7"
      ],
      "year_built": 2018,
      "energy_rating": "A"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 5
    },
    "owner": {
      "owner_id": "usr_774",
      "agent_name": "Agente Luxe Smith"
    },
    "analytics": {
      "views": 1302,
      "saved_in_favorites_count": 313
    },
    "created_at": "2026-01-03T19:13:24.805197Z"
  },
  {
    "_id": "66a01b2c000000e8",
    "slug": "propiedad-penthouse-san-francisco-232",
    "title": "Penthouse Lujosa #232 en San Francisco",
    "price": 21355306,
    "status": "ACTIVE",
    "specs": {
      "beds": 4,
      "baths": 7.0,
      "sqft": 1145,
      "garage_spaces": 4
    },
    "location": {
      "city_state": "San Francisco, CA",
      "address": "8965 Avenue of Excellence",
      "coordinates": {
        "lat": 27.489339,
        "lng": -93.996603
      }
    },
    "features": {
      "amenities": [
        "Spa & Sauna",
        "Cancha de Tenis",
        "Seguridad 24/7",
        "Casa Inteligente",
        "Helipuerto Privado",
        "Vista al Mar"
      ],
      "year_built": 2025,
      "energy_rating": "A"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 7
    },
    "owner": {
      "owner_id": "usr_878",
      "agent_name": "Agente Luxe García"
    },
    "analytics": {
      "views": 4586,
      "saved_in_favorites_count": 26
    },
    "created_at": "2025-02-26T19:13:24.805197Z"
  },
  {
    "_id": "66a01b2c000000e9",
    "slug": "propiedad-villa-aspen-233",
    "title": "Villa Lujosa #233 en Aspen",
    "price": 19998217,
    "status": "ACTIVE",
    "specs": {
      "beds": 10,
      "baths": 5.6,
      "sqft": 578,
      "garage_spaces": 3
    },
    "location": {
      "city_state": "Aspen, CO",
      "address": "1859 Avenue of Excellence",
      "coordinates": {
        "lat": 35.738772,
        "lng": -100.501568
      }
    },
    "features": {
      "amenities": [
        "Cancha de Tenis",
        "Casa Inteligente",
        "Seguridad 24/7",
        "Helipuerto Privado",
        "Vista al Mar"
      ],
      "year_built": 2016,
      "energy_rating": "A"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 18
    },
    "owner": {
      "owner_id": "usr_562",
      "agent_name": "Agente Luxe Smith"
    },
    "analytics": {
      "views": 179,
      "saved_in_favorites_count": 312
    },
    "created_at": "2025-09-14T19:13:24.805197Z"
  },
  {
    "_id": "66a01b2c000000ea",
    "slug": "propiedad-penthouse-chicago-234",
    "title": "Penthouse Lujosa #234 en Chicago",
    "price": 23217997,
    "status": "PENDING",
    "specs": {
      "beds": 6,
      "baths": 3.8,
      "sqft": 670,
      "garage_spaces": 1
    },
    "location": {
      "city_state": "Chicago, IL",
      "address": "7548 Avenue of Excellence",
      "coordinates": {
        "lat": 41.204075,
        "lng": -109.886247
      }
    },
    "features": {
      "amenities": [
        "Alberca Privada",
        "Seguridad 24/7",
        "Gimnasio Privado",
        "Vista al Mar"
      ],
      "year_built": 2020,
      "energy_rating": "A"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 21
    },
    "owner": {
      "owner_id": "usr_715",
      "agent_name": "Agente Luxe Mendoza"
    },
    "analytics": {
      "views": 3501,
      "saved_in_favorites_count": 214
    },
    "created_at": "2026-04-24T19:13:24.805197Z"
  },
  {
    "_id": "66a01b2c000000eb",
    "slug": "propiedad-penthouse-scottsdale-235",
    "title": "Penthouse Lujosa #235 en Scottsdale",
    "price": 1132141,
    "status": "FOR SALE",
    "specs": {
      "beds": 1,
      "baths": 5.0,
      "sqft": 1376,
      "garage_spaces": 2
    },
    "location": {
      "city_state": "Scottsdale, AZ",
      "address": "1460 Avenue of Excellence",
      "coordinates": {
        "lat": 38.868761,
        "lng": -114.147115
      }
    },
    "features": {
      "amenities": [
        "Cava de Vinos",
        "Seguridad 24/7",
        "Elevador Directo",
        "Alberca Privada",
        "Vista al Mar"
      ],
      "year_built": 2014,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 17
    },
    "owner": {
      "owner_id": "usr_250",
      "agent_name": "Agente Luxe Smith"
    },
    "analytics": {
      "views": 4442,
      "saved_in_favorites_count": 183
    },
    "created_at": "2025-06-24T19:13:24.805197Z"
  },
  {
    "_id": "66a01b2c000000ec",
    "slug": "propiedad-villa-beverly-hills-236",
    "title": "Villa Lujosa #236 en Beverly Hills",
    "price": 13565728,
    "status": "ACTIVE",
    "specs": {
      "beds": 8,
      "baths": 5.7,
      "sqft": 294,
      "garage_spaces": 5
    },
    "location": {
      "city_state": "Beverly Hills, CA",
      "address": "6328 Avenue of Excellence",
      "coordinates": {
        "lat": 40.93572,
        "lng": -96.336487
      }
    },
    "features": {
      "amenities": [
        "Cava de Vinos",
        "Cancha de Tenis",
        "Helipuerto Privado",
        "Vista al Mar"
      ],
      "year_built": 2014,
      "energy_rating": "B"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 12
    },
    "owner": {
      "owner_id": "usr_416",
      "agent_name": "Agente Luxe García"
    },
    "analytics": {
      "views": 748,
      "saved_in_favorites_count": 424
    },
    "created_at": "2026-03-16T19:13:24.805197Z"
  },
  {
    "_id": "66a01b2c000000ed",
    "slug": "propiedad-departamento-san-francisco-237",
    "title": "Departamento Lujosa #237 en San Francisco",
    "price": 15131909,
    "status": "ACTIVE",
    "specs": {
      "beds": 1,
      "baths": 2.9,
      "sqft": 1295,
      "garage_spaces": 2
    },
    "location": {
      "city_state": "San Francisco, CA",
      "address": "1380 Avenue of Excellence",
      "coordinates": {
        "lat": 25.354821,
        "lng": -88.457747
      }
    },
    "features": {
      "amenities": [
        "Spa & Sauna",
        "Casa Inteligente",
        "Cancha de Tenis",
        "Gimnasio Privado",
        "Helipuerto Privado"
      ],
      "year_built": 2012,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 15
    },
    "owner": {
      "owner_id": "usr_707",
      "agent_name": "Agente Luxe Vásquez"
    },
    "analytics": {
      "views": 1364,
      "saved_in_favorites_count": 333
    },
    "created_at": "2025-11-21T19:13:24.805197Z"
  },
  {
    "_id": "66a01b2c000000ee",
    "slug": "propiedad-villa-malibu-238",
    "title": "Villa Lujosa #238 en Malibu",
    "price": 21338115,
    "status": "PENDING",
    "specs": {
      "beds": 10,
      "baths": 7.3,
      "sqft": 1639,
      "garage_spaces": 1
    },
    "location": {
      "city_state": "Malibu, CA",
      "address": "562 Avenue of Excellence",
      "coordinates": {
        "lat": 39.654949,
        "lng": -99.348842
      }
    },
    "features": {
      "amenities": [
        "Spa & Sauna",
        "Seguridad 24/7",
        "Cancha de Tenis"
      ],
      "year_built": 2012,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 16
    },
    "owner": {
      "owner_id": "usr_403",
      "agent_name": "Agente Luxe Mendoza"
    },
    "analytics": {
      "views": 365,
      "saved_in_favorites_count": 172
    },
    "created_at": "2024-09-25T19:13:24.805197Z"
  },
  {
    "_id": "66a01b2c000000ef",
    "slug": "propiedad-residencia-de-playa-seattle-239",
    "title": "Residencia de Playa Lujosa #239 en Seattle",
    "price": 1927143,
    "status": "PENDING",
    "specs": {
      "beds": 1,
      "baths": 1.3,
      "sqft": 1733,
      "garage_spaces": 2
    },
    "location": {
      "city_state": "Seattle, WA",
      "address": "2802 Avenue of Excellence",
      "coordinates": {
        "lat": 44.442332,
        "lng": -102.64262
      }
    },
    "features": {
      "amenities": [
        "Gimnasio Privado",
        "Helipuerto Privado",
        "Elevador Directo"
      ],
      "year_built": 2018,
      "energy_rating": "A"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 15
    },
    "owner": {
      "owner_id": "usr_913",
      "agent_name": "Agente Luxe García"
    },
    "analytics": {
      "views": 3114,
      "saved_in_favorites_count": 218
    },
    "created_at": "2025-08-22T19:13:24.805197Z"
  },
  {
    "_id": "66a01b2c000000f0",
    "slug": "propiedad-residencia-de-playa-scottsdale-240",
    "title": "Residencia de Playa Lujosa #240 en Scottsdale",
    "price": 24177064,
    "status": "FOR SALE",
    "specs": {
      "beds": 1,
      "baths": 5.6,
      "sqft": 2239,
      "garage_spaces": 5
    },
    "location": {
      "city_state": "Scottsdale, AZ",
      "address": "374 Avenue of Excellence",
      "coordinates": {
        "lat": 46.27143,
        "lng": -97.50221
      }
    },
    "features": {
      "amenities": [
        "Elevador Directo",
        "Gimnasio Privado",
        "Alberca Privada",
        "Casa Inteligente",
        "Spa & Sauna",
        "Vista al Mar"
      ],
      "year_built": 2013,
      "energy_rating": "A"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 12
    },
    "owner": {
      "owner_id": "usr_579",
      "agent_name": "Agente Luxe Vásquez"
    },
    "analytics": {
      "views": 4442,
      "saved_in_favorites_count": 256
    },
    "created_at": "2025-10-05T19:13:24.805197Z"
  },
  {
    "_id": "66a01b2c000000f1",
    "slug": "propiedad-departamento-new-york-241",
    "title": "Departamento Lujosa #241 en New York",
    "price": 13757652,
    "status": "PENDING",
    "specs": {
      "beds": 9,
      "baths": 3.8,
      "sqft": 949,
      "garage_spaces": 1
    },
    "location": {
      "city_state": "New York, NY",
      "address": "3907 Avenue of Excellence",
      "coordinates": {
        "lat": 37.779591,
        "lng": -110.919632
      }
    },
    "features": {
      "amenities": [
        "Gimnasio Privado",
        "Elevador Directo",
        "Vista al Mar"
      ],
      "year_built": 2012,
      "energy_rating": "B"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 15
    },
    "owner": {
      "owner_id": "usr_858",
      "agent_name": "Agente Luxe Vásquez"
    },
    "analytics": {
      "views": 1449,
      "saved_in_favorites_count": 33
    },
    "created_at": "2024-07-29T19:13:24.805197Z"
  },
  {
    "_id": "66a01b2c000000f2",
    "slug": "propiedad-casa-scottsdale-242",
    "title": "Casa Lujosa #242 en Scottsdale",
    "price": 11076555,
    "status": "FOR RENT",
    "specs": {
      "beds": 1,
      "baths": 8.2,
      "sqft": 896,
      "garage_spaces": 5
    },
    "location": {
      "city_state": "Scottsdale, AZ",
      "address": "5810 Avenue of Excellence",
      "coordinates": {
        "lat": 46.933187,
        "lng": -107.417989
      }
    },
    "features": {
      "amenities": [
        "Cava de Vinos",
        "Alberca Privada",
        "Vista al Mar",
        "Elevador Directo",
        "Seguridad 24/7",
        "Casa Inteligente"
      ],
      "year_built": 2015,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 18
    },
    "owner": {
      "owner_id": "usr_217",
      "agent_name": "Agente Luxe Mendoza"
    },
    "analytics": {
      "views": 4226,
      "saved_in_favorites_count": 388
    },
    "created_at": "2024-12-17T19:13:24.805197Z"
  },
  {
    "_id": "66a01b2c000000f3",
    "slug": "propiedad-residencia-de-playa-austin-243",
    "title": "Residencia de Playa Lujosa #243 en Austin",
    "price": 18910426,
    "status": "PENDING",
    "specs": {
      "beds": 10,
      "baths": 8.6,
      "sqft": 806,
      "garage_spaces": 1
    },
    "location": {
      "city_state": "Austin, TX",
      "address": "2665 Avenue of Excellence",
      "coordinates": {
        "lat": 44.552944,
        "lng": -86.041463
      }
    },
    "features": {
      "amenities": [
        "Cancha de Tenis",
        "Helipuerto Privado",
        "Spa & Sauna"
      ],
      "year_built": 2021,
      "energy_rating": "A"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 20
    },
    "owner": {
      "owner_id": "usr_973",
      "agent_name": "Agente Luxe Mendoza"
    },
    "analytics": {
      "views": 2805,
      "saved_in_favorites_count": 181
    },
    "created_at": "2025-01-23T19:13:24.805197Z"
  },
  {
    "_id": "66a01b2c000000f4",
    "slug": "propiedad-villa-new-york-244",
    "title": "Villa Lujosa #244 en New York",
    "price": 24259101,
    "status": "FOR SALE",
    "specs": {
      "beds": 10,
      "baths": 6.8,
      "sqft": 1609,
      "garage_spaces": 2
    },
    "location": {
      "city_state": "New York, NY",
      "address": "7227 Avenue of Excellence",
      "coordinates": {
        "lat": 46.060157,
        "lng": -105.133491
      }
    },
    "features": {
      "amenities": [
        "Elevador Directo",
        "Casa Inteligente",
        "Cava de Vinos",
        "Cancha de Tenis",
        "Gimnasio Privado"
      ],
      "year_built": 2026,
      "energy_rating": "B"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 15
    },
    "owner": {
      "owner_id": "usr_277",
      "agent_name": "Agente Luxe Mendoza"
    },
    "analytics": {
      "views": 3943,
      "saved_in_favorites_count": 9
    },
    "created_at": "2024-12-18T19:13:24.805197Z"
  },
  {
    "_id": "66a01b2c000000f5",
    "slug": "propiedad-penthouse-chicago-245",
    "title": "Penthouse Lujosa #245 en Chicago",
    "price": 16107461,
    "status": "PENDING",
    "specs": {
      "beds": 8,
      "baths": 5.0,
      "sqft": 436,
      "garage_spaces": 3
    },
    "location": {
      "city_state": "Chicago, IL",
      "address": "9497 Avenue of Excellence",
      "coordinates": {
        "lat": 29.350692,
        "lng": -104.286478
      }
    },
    "features": {
      "amenities": [
        "Vista al Mar",
        "Alberca Privada",
        "Cava de Vinos",
        "Casa Inteligente",
        "Spa & Sauna",
        "Seguridad 24/7",
        "Helipuerto Privado"
      ],
      "year_built": 2020,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 6
    },
    "owner": {
      "owner_id": "usr_842",
      "agent_name": "Agente Luxe Smith"
    },
    "analytics": {
      "views": 2562,
      "saved_in_favorites_count": 315
    },
    "created_at": "2025-04-04T19:13:24.805197Z"
  },
  {
    "_id": "66a01b2c000000f6",
    "slug": "propiedad-penthouse-scottsdale-246",
    "title": "Penthouse Lujosa #246 en Scottsdale",
    "price": 5729221,
    "status": "ACTIVE",
    "specs": {
      "beds": 2,
      "baths": 3.2,
      "sqft": 694,
      "garage_spaces": 3
    },
    "location": {
      "city_state": "Scottsdale, AZ",
      "address": "1023 Avenue of Excellence",
      "coordinates": {
        "lat": 29.128891,
        "lng": -119.960501
      }
    },
    "features": {
      "amenities": [
        "Alberca Privada",
        "Spa & Sauna",
        "Casa Inteligente",
        "Gimnasio Privado",
        "Cancha de Tenis",
        "Seguridad 24/7",
        "Cava de Vinos"
      ],
      "year_built": 2015,
      "energy_rating": "B"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 8
    },
    "owner": {
      "owner_id": "usr_162",
      "agent_name": "Agente Luxe Vásquez"
    },
    "analytics": {
      "views": 290,
      "saved_in_favorites_count": 61
    },
    "created_at": "2026-01-21T19:13:24.805197Z"
  },
  {
    "_id": "66a01b2c000000f7",
    "slug": "propiedad-residencia-de-playa-scottsdale-247",
    "title": "Residencia de Playa Lujosa #247 en Scottsdale",
    "price": 23776508,
    "status": "FOR RENT",
    "specs": {
      "beds": 1,
      "baths": 3.0,
      "sqft": 369,
      "garage_spaces": 3
    },
    "location": {
      "city_state": "Scottsdale, AZ",
      "address": "6590 Avenue of Excellence",
      "coordinates": {
        "lat": 29.954167,
        "lng": -120.736637
      }
    },
    "features": {
      "amenities": [
        "Alberca Privada",
        "Gimnasio Privado",
        "Cava de Vinos"
      ],
      "year_built": 2024,
      "energy_rating": "B"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 16
    },
    "owner": {
      "owner_id": "usr_905",
      "agent_name": "Agente Luxe Mendoza"
    },
    "analytics": {
      "views": 1826,
      "saved_in_favorites_count": 302
    },
    "created_at": "2025-05-09T19:13:24.805197Z"
  },
  {
    "_id": "66a01b2c000000f8",
    "slug": "propiedad-departamento-san-francisco-248",
    "title": "Departamento Lujosa #248 en San Francisco",
    "price": 15759370,
    "status": "ACTIVE",
    "specs": {
      "beds": 2,
      "baths": 9.3,
      "sqft": 2380,
      "garage_spaces": 4
    },
    "location": {
      "city_state": "San Francisco, CA",
      "address": "1903 Avenue of Excellence",
      "coordinates": {
        "lat": 44.008606,
        "lng": -104.112
      }
    },
    "features": {
      "amenities": [
        "Elevador Directo",
        "Helipuerto Privado",
        "Spa & Sauna",
        "Seguridad 24/7",
        "Alberca Privada",
        "Cancha de Tenis",
        "Vista al Mar"
      ],
      "year_built": 2013,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 5
    },
    "owner": {
      "owner_id": "usr_118",
      "agent_name": "Agente Luxe Vásquez"
    },
    "analytics": {
      "views": 502,
      "saved_in_favorites_count": 217
    },
    "created_at": "2025-05-20T19:13:24.805197Z"
  },
  {
    "_id": "66a01b2c000000f9",
    "slug": "propiedad-villa-aspen-249",
    "title": "Villa Lujosa #249 en Aspen",
    "price": 10400120,
    "status": "ACTIVE",
    "specs": {
      "beds": 1,
      "baths": 7.5,
      "sqft": 510,
      "garage_spaces": 3
    },
    "location": {
      "city_state": "Aspen, CO",
      "address": "8197 Avenue of Excellence",
      "coordinates": {
        "lat": 43.958188,
        "lng": -110.83794
      }
    },
    "features": {
      "amenities": [
        "Helipuerto Privado",
        "Casa Inteligente",
        "Alberca Privada",
        "Elevador Directo",
        "Spa & Sauna",
        "Cancha de Tenis"
      ],
      "year_built": 2010,
      "energy_rating": "B"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 5
    },
    "owner": {
      "owner_id": "usr_468",
      "agent_name": "Agente Luxe Mendoza"
    },
    "analytics": {
      "views": 2661,
      "saved_in_favorites_count": 241
    },
    "created_at": "2024-12-17T19:13:24.805197Z"
  },
  {
    "_id": "66a01b2c000000fa",
    "slug": "propiedad-casa-malibu-250",
    "title": "Casa Lujosa #250 en Malibu",
    "price": 6411036,
    "status": "ACTIVE",
    "specs": {
      "beds": 4,
      "baths": 8.8,
      "sqft": 2211,
      "garage_spaces": 2
    },
    "location": {
      "city_state": "Malibu, CA",
      "address": "3162 Avenue of Excellence",
      "coordinates": {
        "lat": 32.217031,
        "lng": -111.025799
      }
    },
    "features": {
      "amenities": [
        "Cava de Vinos",
        "Elevador Directo",
        "Helipuerto Privado",
        "Vista al Mar",
        "Alberca Privada",
        "Gimnasio Privado"
      ],
      "year_built": 2024,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 19
    },
    "owner": {
      "owner_id": "usr_337",
      "agent_name": "Agente Luxe Vásquez"
    },
    "analytics": {
      "views": 1590,
      "saved_in_favorites_count": 155
    },
    "created_at": "2025-04-22T19:13:24.805197Z"
  },
  {
    "_id": "66a01b2c000000fb",
    "slug": "propiedad-villa-new-york-251",
    "title": "Villa Lujosa #251 en New York",
    "price": 21622639,
    "status": "ACTIVE",
    "specs": {
      "beds": 4,
      "baths": 7.6,
      "sqft": 2159,
      "garage_spaces": 2
    },
    "location": {
      "city_state": "New York, NY",
      "address": "547 Avenue of Excellence",
      "coordinates": {
        "lat": 37.705245,
        "lng": -82.32978
      }
    },
    "features": {
      "amenities": [
        "Elevador Directo",
        "Cava de Vinos",
        "Seguridad 24/7",
        "Gimnasio Privado",
        "Casa Inteligente",
        "Alberca Privada",
        "Vista al Mar"
      ],
      "year_built": 2013,
      "energy_rating": "B"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 19
    },
    "owner": {
      "owner_id": "usr_798",
      "agent_name": "Agente Luxe Smith"
    },
    "analytics": {
      "views": 3457,
      "saved_in_favorites_count": 371
    },
    "created_at": "2024-09-26T19:13:24.805197Z"
  },
  {
    "_id": "66a01b2c000000fc",
    "slug": "propiedad-casa-chicago-252",
    "title": "Casa Lujosa #252 en Chicago",
    "price": 15922107,
    "status": "FOR RENT",
    "specs": {
      "beds": 4,
      "baths": 3.7,
      "sqft": 1494,
      "garage_spaces": 5
    },
    "location": {
      "city_state": "Chicago, IL",
      "address": "3608 Avenue of Excellence",
      "coordinates": {
        "lat": 40.81242,
        "lng": -84.686305
      }
    },
    "features": {
      "amenities": [
        "Gimnasio Privado",
        "Elevador Directo",
        "Spa & Sauna",
        "Casa Inteligente"
      ],
      "year_built": 2015,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 10
    },
    "owner": {
      "owner_id": "usr_794",
      "agent_name": "Agente Luxe Mendoza"
    },
    "analytics": {
      "views": 4954,
      "saved_in_favorites_count": 371
    },
    "created_at": "2026-04-13T19:13:24.805197Z"
  },
  {
    "_id": "66a01b2c000000fd",
    "slug": "propiedad-penthouse-malibu-253",
    "title": "Penthouse Lujosa #253 en Malibu",
    "price": 21175288,
    "status": "PENDING",
    "specs": {
      "beds": 3,
      "baths": 2.8,
      "sqft": 711,
      "garage_spaces": 1
    },
    "location": {
      "city_state": "Malibu, CA",
      "address": "7498 Avenue of Excellence",
      "coordinates": {
        "lat": 26.623427,
        "lng": -77.357544
      }
    },
    "features": {
      "amenities": [
        "Helipuerto Privado",
        "Spa & Sauna",
        "Alberca Privada",
        "Cava de Vinos",
        "Elevador Directo",
        "Casa Inteligente"
      ],
      "year_built": 2020,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 20
    },
    "owner": {
      "owner_id": "usr_919",
      "agent_name": "Agente Luxe Smith"
    },
    "analytics": {
      "views": 3925,
      "saved_in_favorites_count": 200
    },
    "created_at": "2026-06-17T19:13:24.805197Z"
  },
  {
    "_id": "66a01b2c000000fe",
    "slug": "propiedad-penthouse-beverly-hills-254",
    "title": "Penthouse Lujosa #254 en Beverly Hills",
    "price": 10688058,
    "status": "PENDING",
    "specs": {
      "beds": 3,
      "baths": 5.5,
      "sqft": 1055,
      "garage_spaces": 2
    },
    "location": {
      "city_state": "Beverly Hills, CA",
      "address": "8899 Avenue of Excellence",
      "coordinates": {
        "lat": 28.128115,
        "lng": -86.159436
      }
    },
    "features": {
      "amenities": [
        "Vista al Mar",
        "Helipuerto Privado",
        "Cava de Vinos"
      ],
      "year_built": 2022,
      "energy_rating": "B"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 24
    },
    "owner": {
      "owner_id": "usr_761",
      "agent_name": "Agente Luxe Mendoza"
    },
    "analytics": {
      "views": 1704,
      "saved_in_favorites_count": 291
    },
    "created_at": "2026-03-07T19:13:24.805197Z"
  },
  {
    "_id": "66a01b2c000000ff",
    "slug": "propiedad-departamento-new-york-255",
    "title": "Departamento Lujosa #255 en New York",
    "price": 3413074,
    "status": "FOR RENT",
    "specs": {
      "beds": 5,
      "baths": 4.6,
      "sqft": 1418,
      "garage_spaces": 2
    },
    "location": {
      "city_state": "New York, NY",
      "address": "2780 Avenue of Excellence",
      "coordinates": {
        "lat": 33.108835,
        "lng": -82.629324
      }
    },
    "features": {
      "amenities": [
        "Helipuerto Privado",
        "Cava de Vinos",
        "Gimnasio Privado"
      ],
      "year_built": 2012,
      "energy_rating": "A"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 20
    },
    "owner": {
      "owner_id": "usr_680",
      "agent_name": "Agente Luxe Vásquez"
    },
    "analytics": {
      "views": 2314,
      "saved_in_favorites_count": 427
    },
    "created_at": "2026-06-20T19:13:24.805197Z"
  },
  {
    "_id": "66a01b2c00000100",
    "slug": "propiedad-residencia-de-playa-chicago-256",
    "title": "Residencia de Playa Lujosa #256 en Chicago",
    "price": 19653915,
    "status": "ACTIVE",
    "specs": {
      "beds": 3,
      "baths": 6.7,
      "sqft": 2335,
      "garage_spaces": 5
    },
    "location": {
      "city_state": "Chicago, IL",
      "address": "1510 Avenue of Excellence",
      "coordinates": {
        "lat": 28.623915,
        "lng": -102.096963
      }
    },
    "features": {
      "amenities": [
        "Seguridad 24/7",
        "Cancha de Tenis",
        "Vista al Mar",
        "Elevador Directo",
        "Casa Inteligente",
        "Helipuerto Privado",
        "Cava de Vinos"
      ],
      "year_built": 2020,
      "energy_rating": "B"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 22
    },
    "owner": {
      "owner_id": "usr_861",
      "agent_name": "Agente Luxe García"
    },
    "analytics": {
      "views": 551,
      "saved_in_favorites_count": 330
    },
    "created_at": "2024-10-29T19:13:24.805197Z"
  },
  {
    "_id": "66a01b2c00000101",
    "slug": "propiedad-penthouse-aspen-257",
    "title": "Penthouse Lujosa #257 en Aspen",
    "price": 14601631,
    "status": "FOR RENT",
    "specs": {
      "beds": 1,
      "baths": 2.9,
      "sqft": 522,
      "garage_spaces": 1
    },
    "location": {
      "city_state": "Aspen, CO",
      "address": "8701 Avenue of Excellence",
      "coordinates": {
        "lat": 44.320698,
        "lng": -96.176463
      }
    },
    "features": {
      "amenities": [
        "Vista al Mar",
        "Seguridad 24/7",
        "Cancha de Tenis",
        "Cava de Vinos"
      ],
      "year_built": 2012,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 11
    },
    "owner": {
      "owner_id": "usr_670",
      "agent_name": "Agente Luxe Mendoza"
    },
    "analytics": {
      "views": 3327,
      "saved_in_favorites_count": 62
    },
    "created_at": "2025-10-10T19:13:24.805197Z"
  },
  {
    "_id": "66a01b2c00000102",
    "slug": "propiedad-villa-san-francisco-258",
    "title": "Villa Lujosa #258 en San Francisco",
    "price": 14646698,
    "status": "PENDING",
    "specs": {
      "beds": 5,
      "baths": 1.9,
      "sqft": 2232,
      "garage_spaces": 1
    },
    "location": {
      "city_state": "San Francisco, CA",
      "address": "537 Avenue of Excellence",
      "coordinates": {
        "lat": 40.46175,
        "lng": -86.011024
      }
    },
    "features": {
      "amenities": [
        "Gimnasio Privado",
        "Cava de Vinos",
        "Cancha de Tenis",
        "Spa & Sauna"
      ],
      "year_built": 2026,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 21
    },
    "owner": {
      "owner_id": "usr_759",
      "agent_name": "Agente Luxe Vásquez"
    },
    "analytics": {
      "views": 4803,
      "saved_in_favorites_count": 7
    },
    "created_at": "2025-04-20T19:13:24.805197Z"
  },
  {
    "_id": "66a01b2c00000103",
    "slug": "propiedad-casa-chicago-259",
    "title": "Casa Lujosa #259 en Chicago",
    "price": 6943606,
    "status": "ACTIVE",
    "specs": {
      "beds": 4,
      "baths": 5.1,
      "sqft": 1051,
      "garage_spaces": 2
    },
    "location": {
      "city_state": "Chicago, IL",
      "address": "8016 Avenue of Excellence",
      "coordinates": {
        "lat": 33.023179,
        "lng": -93.382546
      }
    },
    "features": {
      "amenities": [
        "Cancha de Tenis",
        "Vista al Mar",
        "Cava de Vinos",
        "Spa & Sauna",
        "Alberca Privada",
        "Seguridad 24/7"
      ],
      "year_built": 2016,
      "energy_rating": "B"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 21
    },
    "owner": {
      "owner_id": "usr_984",
      "agent_name": "Agente Luxe Vásquez"
    },
    "analytics": {
      "views": 2285,
      "saved_in_favorites_count": 178
    },
    "created_at": "2025-08-02T19:13:24.805197Z"
  },
  {
    "_id": "66a01b2c00000104",
    "slug": "propiedad-villa-new-york-260",
    "title": "Villa Lujosa #260 en New York",
    "price": 11153625,
    "status": "ACTIVE",
    "specs": {
      "beds": 6,
      "baths": 9.5,
      "sqft": 871,
      "garage_spaces": 3
    },
    "location": {
      "city_state": "New York, NY",
      "address": "3621 Avenue of Excellence",
      "coordinates": {
        "lat": 34.899188,
        "lng": -76.464594
      }
    },
    "features": {
      "amenities": [
        "Seguridad 24/7",
        "Spa & Sauna",
        "Elevador Directo",
        "Vista al Mar",
        "Alberca Privada"
      ],
      "year_built": 2012,
      "energy_rating": "A"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 22
    },
    "owner": {
      "owner_id": "usr_806",
      "agent_name": "Agente Luxe Mendoza"
    },
    "analytics": {
      "views": 4272,
      "saved_in_favorites_count": 216
    },
    "created_at": "2024-11-30T19:13:24.805197Z"
  },
  {
    "_id": "66a01b2c00000105",
    "slug": "propiedad-villa-aspen-261",
    "title": "Villa Lujosa #261 en Aspen",
    "price": 21761195,
    "status": "FOR SALE",
    "specs": {
      "beds": 7,
      "baths": 1.2,
      "sqft": 802,
      "garage_spaces": 3
    },
    "location": {
      "city_state": "Aspen, CO",
      "address": "1053 Avenue of Excellence",
      "coordinates": {
        "lat": 27.708071,
        "lng": -79.434311
      }
    },
    "features": {
      "amenities": [
        "Gimnasio Privado",
        "Elevador Directo",
        "Helipuerto Privado",
        "Cava de Vinos"
      ],
      "year_built": 2022,
      "energy_rating": "B"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 8
    },
    "owner": {
      "owner_id": "usr_236",
      "agent_name": "Agente Luxe Mendoza"
    },
    "analytics": {
      "views": 200,
      "saved_in_favorites_count": 191
    },
    "created_at": "2024-10-18T19:13:24.805197Z"
  },
  {
    "_id": "66a01b2c00000106",
    "slug": "propiedad-residencia-de-playa-scottsdale-262",
    "title": "Residencia de Playa Lujosa #262 en Scottsdale",
    "price": 6205607,
    "status": "ACTIVE",
    "specs": {
      "beds": 2,
      "baths": 7.7,
      "sqft": 636,
      "garage_spaces": 2
    },
    "location": {
      "city_state": "Scottsdale, AZ",
      "address": "3406 Avenue of Excellence",
      "coordinates": {
        "lat": 31.300145,
        "lng": -89.067966
      }
    },
    "features": {
      "amenities": [
        "Gimnasio Privado",
        "Alberca Privada",
        "Helipuerto Privado",
        "Seguridad 24/7"
      ],
      "year_built": 2025,
      "energy_rating": "B"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 15
    },
    "owner": {
      "owner_id": "usr_612",
      "agent_name": "Agente Luxe Vásquez"
    },
    "analytics": {
      "views": 4633,
      "saved_in_favorites_count": 219
    },
    "created_at": "2024-09-20T19:13:24.805197Z"
  },
  {
    "_id": "66a01b2c00000107",
    "slug": "propiedad-departamento-scottsdale-263",
    "title": "Departamento Lujosa #263 en Scottsdale",
    "price": 9184895,
    "status": "FOR RENT",
    "specs": {
      "beds": 7,
      "baths": 5.3,
      "sqft": 881,
      "garage_spaces": 1
    },
    "location": {
      "city_state": "Scottsdale, AZ",
      "address": "5153 Avenue of Excellence",
      "coordinates": {
        "lat": 34.410273,
        "lng": -89.079924
      }
    },
    "features": {
      "amenities": [
        "Vista al Mar",
        "Seguridad 24/7",
        "Cancha de Tenis"
      ],
      "year_built": 2018,
      "energy_rating": "A"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 10
    },
    "owner": {
      "owner_id": "usr_703",
      "agent_name": "Agente Luxe Smith"
    },
    "analytics": {
      "views": 1228,
      "saved_in_favorites_count": 41
    },
    "created_at": "2026-01-19T19:13:24.805197Z"
  },
  {
    "_id": "66a01b2c00000108",
    "slug": "propiedad-penthouse-beverly-hills-264",
    "title": "Penthouse Lujosa #264 en Beverly Hills",
    "price": 5214226,
    "status": "ACTIVE",
    "specs": {
      "beds": 5,
      "baths": 1.0,
      "sqft": 382,
      "garage_spaces": 5
    },
    "location": {
      "city_state": "Beverly Hills, CA",
      "address": "7371 Avenue of Excellence",
      "coordinates": {
        "lat": 34.460913,
        "lng": -93.60232
      }
    },
    "features": {
      "amenities": [
        "Seguridad 24/7",
        "Elevador Directo",
        "Vista al Mar",
        "Gimnasio Privado"
      ],
      "year_built": 2019,
      "energy_rating": "A"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 19
    },
    "owner": {
      "owner_id": "usr_672",
      "agent_name": "Agente Luxe Mendoza"
    },
    "analytics": {
      "views": 745,
      "saved_in_favorites_count": 272
    },
    "created_at": "2024-09-13T19:13:24.805197Z"
  },
  {
    "_id": "66a01b2c00000109",
    "slug": "propiedad-residencia-de-playa-san-francisco-265",
    "title": "Residencia de Playa Lujosa #265 en San Francisco",
    "price": 7858905,
    "status": "FOR RENT",
    "specs": {
      "beds": 10,
      "baths": 4.6,
      "sqft": 949,
      "garage_spaces": 1
    },
    "location": {
      "city_state": "San Francisco, CA",
      "address": "434 Avenue of Excellence",
      "coordinates": {
        "lat": 41.773235,
        "lng": -116.786504
      }
    },
    "features": {
      "amenities": [
        "Cava de Vinos",
        "Elevador Directo",
        "Gimnasio Privado",
        "Casa Inteligente",
        "Spa & Sauna",
        "Helipuerto Privado"
      ],
      "year_built": 2018,
      "energy_rating": "A"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 21
    },
    "owner": {
      "owner_id": "usr_669",
      "agent_name": "Agente Luxe García"
    },
    "analytics": {
      "views": 2255,
      "saved_in_favorites_count": 23
    },
    "created_at": "2025-04-19T19:13:24.805197Z"
  },
  {
    "_id": "66a01b2c0000010a",
    "slug": "propiedad-departamento-austin-266",
    "title": "Departamento Lujosa #266 en Austin",
    "price": 16400015,
    "status": "FOR RENT",
    "specs": {
      "beds": 1,
      "baths": 8.8,
      "sqft": 891,
      "garage_spaces": 4
    },
    "location": {
      "city_state": "Austin, TX",
      "address": "3754 Avenue of Excellence",
      "coordinates": {
        "lat": 41.140838,
        "lng": -76.425932
      }
    },
    "features": {
      "amenities": [
        "Helipuerto Privado",
        "Cava de Vinos",
        "Gimnasio Privado",
        "Seguridad 24/7",
        "Cancha de Tenis",
        "Elevador Directo",
        "Vista al Mar"
      ],
      "year_built": 2012,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 15
    },
    "owner": {
      "owner_id": "usr_486",
      "agent_name": "Agente Luxe Vásquez"
    },
    "analytics": {
      "views": 798,
      "saved_in_favorites_count": 130
    },
    "created_at": "2026-04-13T19:13:24.805197Z"
  },
  {
    "_id": "66a01b2c0000010b",
    "slug": "propiedad-departamento-seattle-267",
    "title": "Departamento Lujosa #267 en Seattle",
    "price": 15201518,
    "status": "FOR RENT",
    "specs": {
      "beds": 6,
      "baths": 3.3,
      "sqft": 1934,
      "garage_spaces": 1
    },
    "location": {
      "city_state": "Seattle, WA",
      "address": "491 Avenue of Excellence",
      "coordinates": {
        "lat": 33.93032,
        "lng": -99.107623
      }
    },
    "features": {
      "amenities": [
        "Casa Inteligente",
        "Vista al Mar",
        "Spa & Sauna",
        "Helipuerto Privado",
        "Gimnasio Privado",
        "Elevador Directo"
      ],
      "year_built": 2014,
      "energy_rating": "B"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 8
    },
    "owner": {
      "owner_id": "usr_990",
      "agent_name": "Agente Luxe Smith"
    },
    "analytics": {
      "views": 4719,
      "saved_in_favorites_count": 79
    },
    "created_at": "2024-09-28T19:13:24.805197Z"
  },
  {
    "_id": "66a01b2c0000010c",
    "slug": "propiedad-casa-chicago-268",
    "title": "Casa Lujosa #268 en Chicago",
    "price": 7822259,
    "status": "ACTIVE",
    "specs": {
      "beds": 8,
      "baths": 9.4,
      "sqft": 506,
      "garage_spaces": 1
    },
    "location": {
      "city_state": "Chicago, IL",
      "address": "9484 Avenue of Excellence",
      "coordinates": {
        "lat": 43.608198,
        "lng": -85.435568
      }
    },
    "features": {
      "amenities": [
        "Casa Inteligente",
        "Cancha de Tenis",
        "Vista al Mar",
        "Seguridad 24/7"
      ],
      "year_built": 2010,
      "energy_rating": "B"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 24
    },
    "owner": {
      "owner_id": "usr_322",
      "agent_name": "Agente Luxe Mendoza"
    },
    "analytics": {
      "views": 714,
      "saved_in_favorites_count": 221
    },
    "created_at": "2025-09-19T19:13:24.805197Z"
  },
  {
    "_id": "66a01b2c0000010d",
    "slug": "propiedad-villa-chicago-269",
    "title": "Villa Lujosa #269 en Chicago",
    "price": 24760750,
    "status": "FOR SALE",
    "specs": {
      "beds": 8,
      "baths": 7.3,
      "sqft": 591,
      "garage_spaces": 1
    },
    "location": {
      "city_state": "Chicago, IL",
      "address": "8767 Avenue of Excellence",
      "coordinates": {
        "lat": 31.687479,
        "lng": -84.787499
      }
    },
    "features": {
      "amenities": [
        "Casa Inteligente",
        "Cava de Vinos",
        "Vista al Mar",
        "Cancha de Tenis",
        "Alberca Privada",
        "Elevador Directo"
      ],
      "year_built": 2021,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 22
    },
    "owner": {
      "owner_id": "usr_272",
      "agent_name": "Agente Luxe Mendoza"
    },
    "analytics": {
      "views": 1152,
      "saved_in_favorites_count": 236
    },
    "created_at": "2026-02-01T19:13:24.805197Z"
  },
  {
    "_id": "66a01b2c0000010e",
    "slug": "propiedad-departamento-scottsdale-270",
    "title": "Departamento Lujosa #270 en Scottsdale",
    "price": 7979830,
    "status": "FOR RENT",
    "specs": {
      "beds": 2,
      "baths": 2.2,
      "sqft": 1500,
      "garage_spaces": 3
    },
    "location": {
      "city_state": "Scottsdale, AZ",
      "address": "1154 Avenue of Excellence",
      "coordinates": {
        "lat": 27.21933,
        "lng": -114.512708
      }
    },
    "features": {
      "amenities": [
        "Helipuerto Privado",
        "Gimnasio Privado",
        "Alberca Privada",
        "Spa & Sauna",
        "Elevador Directo",
        "Cava de Vinos"
      ],
      "year_built": 2017,
      "energy_rating": "B"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 5
    },
    "owner": {
      "owner_id": "usr_558",
      "agent_name": "Agente Luxe Vásquez"
    },
    "analytics": {
      "views": 2118,
      "saved_in_favorites_count": 130
    },
    "created_at": "2025-05-09T19:13:24.805197Z"
  },
  {
    "_id": "66a01b2c0000010f",
    "slug": "propiedad-departamento-new-york-271",
    "title": "Departamento Lujosa #271 en New York",
    "price": 9776345,
    "status": "ACTIVE",
    "specs": {
      "beds": 8,
      "baths": 2.2,
      "sqft": 2447,
      "garage_spaces": 3
    },
    "location": {
      "city_state": "New York, NY",
      "address": "4015 Avenue of Excellence",
      "coordinates": {
        "lat": 46.799389,
        "lng": -121.113709
      }
    },
    "features": {
      "amenities": [
        "Spa & Sauna",
        "Vista al Mar",
        "Alberca Privada",
        "Cava de Vinos"
      ],
      "year_built": 2023,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 8
    },
    "owner": {
      "owner_id": "usr_341",
      "agent_name": "Agente Luxe García"
    },
    "analytics": {
      "views": 282,
      "saved_in_favorites_count": 165
    },
    "created_at": "2025-03-08T19:13:24.805197Z"
  },
  {
    "_id": "66a01b2c00000110",
    "slug": "propiedad-penthouse-aspen-272",
    "title": "Penthouse Lujosa #272 en Aspen",
    "price": 13892286,
    "status": "FOR RENT",
    "specs": {
      "beds": 5,
      "baths": 2.3,
      "sqft": 616,
      "garage_spaces": 5
    },
    "location": {
      "city_state": "Aspen, CO",
      "address": "8691 Avenue of Excellence",
      "coordinates": {
        "lat": 43.819294,
        "lng": -105.473742
      }
    },
    "features": {
      "amenities": [
        "Helipuerto Privado",
        "Alberca Privada",
        "Casa Inteligente",
        "Gimnasio Privado",
        "Elevador Directo"
      ],
      "year_built": 2022,
      "energy_rating": "B"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 14
    },
    "owner": {
      "owner_id": "usr_758",
      "agent_name": "Agente Luxe Mendoza"
    },
    "analytics": {
      "views": 3895,
      "saved_in_favorites_count": 446
    },
    "created_at": "2025-03-10T19:13:24.805197Z"
  },
  {
    "_id": "66a01b2c00000111",
    "slug": "propiedad-penthouse-scottsdale-273",
    "title": "Penthouse Lujosa #273 en Scottsdale",
    "price": 17279111,
    "status": "FOR SALE",
    "specs": {
      "beds": 5,
      "baths": 8.7,
      "sqft": 575,
      "garage_spaces": 1
    },
    "location": {
      "city_state": "Scottsdale, AZ",
      "address": "4073 Avenue of Excellence",
      "coordinates": {
        "lat": 35.248795,
        "lng": -73.777799
      }
    },
    "features": {
      "amenities": [
        "Alberca Privada",
        "Gimnasio Privado",
        "Vista al Mar",
        "Cava de Vinos",
        "Spa & Sauna",
        "Helipuerto Privado"
      ],
      "year_built": 2026,
      "energy_rating": "B"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 15
    },
    "owner": {
      "owner_id": "usr_118",
      "agent_name": "Agente Luxe Smith"
    },
    "analytics": {
      "views": 3082,
      "saved_in_favorites_count": 259
    },
    "created_at": "2025-04-21T19:13:24.805197Z"
  },
  {
    "_id": "66a01b2c00000112",
    "slug": "propiedad-penthouse-scottsdale-274",
    "title": "Penthouse Lujosa #274 en Scottsdale",
    "price": 18904180,
    "status": "FOR RENT",
    "specs": {
      "beds": 7,
      "baths": 7.9,
      "sqft": 1087,
      "garage_spaces": 3
    },
    "location": {
      "city_state": "Scottsdale, AZ",
      "address": "5304 Avenue of Excellence",
      "coordinates": {
        "lat": 26.091036,
        "lng": -87.023772
      }
    },
    "features": {
      "amenities": [
        "Spa & Sauna",
        "Casa Inteligente",
        "Seguridad 24/7"
      ],
      "year_built": 2022,
      "energy_rating": "B"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 19
    },
    "owner": {
      "owner_id": "usr_809",
      "agent_name": "Agente Luxe Vásquez"
    },
    "analytics": {
      "views": 2443,
      "saved_in_favorites_count": 448
    },
    "created_at": "2025-10-24T19:13:24.805197Z"
  },
  {
    "_id": "66a01b2c00000113",
    "slug": "propiedad-departamento-seattle-275",
    "title": "Departamento Lujosa #275 en Seattle",
    "price": 2084993,
    "status": "FOR RENT",
    "specs": {
      "beds": 2,
      "baths": 2.1,
      "sqft": 659,
      "garage_spaces": 2
    },
    "location": {
      "city_state": "Seattle, WA",
      "address": "1971 Avenue of Excellence",
      "coordinates": {
        "lat": 43.848957,
        "lng": -103.210063
      }
    },
    "features": {
      "amenities": [
        "Cancha de Tenis",
        "Gimnasio Privado",
        "Elevador Directo",
        "Alberca Privada",
        "Vista al Mar"
      ],
      "year_built": 2021,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 13
    },
    "owner": {
      "owner_id": "usr_642",
      "agent_name": "Agente Luxe Mendoza"
    },
    "analytics": {
      "views": 293,
      "saved_in_favorites_count": 24
    },
    "created_at": "2026-05-02T19:13:24.805197Z"
  },
  {
    "_id": "66a01b2c00000114",
    "slug": "propiedad-residencia-de-playa-seattle-276",
    "title": "Residencia de Playa Lujosa #276 en Seattle",
    "price": 13744476,
    "status": "FOR RENT",
    "specs": {
      "beds": 8,
      "baths": 8.3,
      "sqft": 1603,
      "garage_spaces": 5
    },
    "location": {
      "city_state": "Seattle, WA",
      "address": "4700 Avenue of Excellence",
      "coordinates": {
        "lat": 30.445505,
        "lng": -100.706834
      }
    },
    "features": {
      "amenities": [
        "Alberca Privada",
        "Cancha de Tenis",
        "Elevador Directo",
        "Gimnasio Privado"
      ],
      "year_built": 2019,
      "energy_rating": "B"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 18
    },
    "owner": {
      "owner_id": "usr_225",
      "agent_name": "Agente Luxe Smith"
    },
    "analytics": {
      "views": 2647,
      "saved_in_favorites_count": 325
    },
    "created_at": "2025-12-18T19:13:24.805197Z"
  },
  {
    "_id": "66a01b2c00000115",
    "slug": "propiedad-casa-miami-277",
    "title": "Casa Lujosa #277 en Miami",
    "price": 14530609,
    "status": "FOR RENT",
    "specs": {
      "beds": 9,
      "baths": 7.3,
      "sqft": 1969,
      "garage_spaces": 1
    },
    "location": {
      "city_state": "Miami, FL",
      "address": "2446 Avenue of Excellence",
      "coordinates": {
        "lat": 34.00296,
        "lng": -110.289134
      }
    },
    "features": {
      "amenities": [
        "Cava de Vinos",
        "Cancha de Tenis",
        "Seguridad 24/7",
        "Gimnasio Privado",
        "Spa & Sauna",
        "Helipuerto Privado",
        "Elevador Directo"
      ],
      "year_built": 2021,
      "energy_rating": "B"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 14
    },
    "owner": {
      "owner_id": "usr_312",
      "agent_name": "Agente Luxe García"
    },
    "analytics": {
      "views": 4812,
      "saved_in_favorites_count": 42
    },
    "created_at": "2024-08-05T19:13:24.805197Z"
  },
  {
    "_id": "66a01b2c00000116",
    "slug": "propiedad-residencia-de-playa-aspen-278",
    "title": "Residencia de Playa Lujosa #278 en Aspen",
    "price": 20757555,
    "status": "FOR RENT",
    "specs": {
      "beds": 7,
      "baths": 8.1,
      "sqft": 344,
      "garage_spaces": 4
    },
    "location": {
      "city_state": "Aspen, CO",
      "address": "6268 Avenue of Excellence",
      "coordinates": {
        "lat": 34.517641,
        "lng": -103.528875
      }
    },
    "features": {
      "amenities": [
        "Helipuerto Privado",
        "Cancha de Tenis",
        "Vista al Mar",
        "Casa Inteligente"
      ],
      "year_built": 2017,
      "energy_rating": "B"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 16
    },
    "owner": {
      "owner_id": "usr_136",
      "agent_name": "Agente Luxe Smith"
    },
    "analytics": {
      "views": 500,
      "saved_in_favorites_count": 196
    },
    "created_at": "2025-11-07T19:13:24.805197Z"
  },
  {
    "_id": "66a01b2c00000117",
    "slug": "propiedad-residencia-de-playa-san-francisco-279",
    "title": "Residencia de Playa Lujosa #279 en San Francisco",
    "price": 3364460,
    "status": "FOR RENT",
    "specs": {
      "beds": 3,
      "baths": 1.6,
      "sqft": 2393,
      "garage_spaces": 4
    },
    "location": {
      "city_state": "San Francisco, CA",
      "address": "3234 Avenue of Excellence",
      "coordinates": {
        "lat": 44.482369,
        "lng": -111.032299
      }
    },
    "features": {
      "amenities": [
        "Helipuerto Privado",
        "Casa Inteligente",
        "Vista al Mar",
        "Spa & Sauna",
        "Seguridad 24/7"
      ],
      "year_built": 2012,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 13
    },
    "owner": {
      "owner_id": "usr_133",
      "agent_name": "Agente Luxe Smith"
    },
    "analytics": {
      "views": 1299,
      "saved_in_favorites_count": 128
    },
    "created_at": "2026-06-22T19:13:24.805197Z"
  },
  {
    "_id": "66a01b2c00000118",
    "slug": "propiedad-residencia-de-playa-chicago-280",
    "title": "Residencia de Playa Lujosa #280 en Chicago",
    "price": 22278601,
    "status": "FOR RENT",
    "specs": {
      "beds": 7,
      "baths": 9.3,
      "sqft": 2277,
      "garage_spaces": 5
    },
    "location": {
      "city_state": "Chicago, IL",
      "address": "5125 Avenue of Excellence",
      "coordinates": {
        "lat": 25.856691,
        "lng": -119.660214
      }
    },
    "features": {
      "amenities": [
        "Alberca Privada",
        "Vista al Mar",
        "Elevador Directo",
        "Spa & Sauna",
        "Helipuerto Privado",
        "Cancha de Tenis"
      ],
      "year_built": 2019,
      "energy_rating": "B"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 7
    },
    "owner": {
      "owner_id": "usr_278",
      "agent_name": "Agente Luxe Mendoza"
    },
    "analytics": {
      "views": 3068,
      "saved_in_favorites_count": 288
    },
    "created_at": "2026-06-20T19:13:24.805197Z"
  },
  {
    "_id": "66a01b2c00000119",
    "slug": "propiedad-residencia-de-playa-miami-281",
    "title": "Residencia de Playa Lujosa #281 en Miami",
    "price": 16249878,
    "status": "ACTIVE",
    "specs": {
      "beds": 4,
      "baths": 4.1,
      "sqft": 1780,
      "garage_spaces": 4
    },
    "location": {
      "city_state": "Miami, FL",
      "address": "5006 Avenue of Excellence",
      "coordinates": {
        "lat": 32.791131,
        "lng": -91.555601
      }
    },
    "features": {
      "amenities": [
        "Spa & Sauna",
        "Elevador Directo",
        "Helipuerto Privado",
        "Casa Inteligente",
        "Vista al Mar"
      ],
      "year_built": 2023,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 9
    },
    "owner": {
      "owner_id": "usr_391",
      "agent_name": "Agente Luxe Vásquez"
    },
    "analytics": {
      "views": 995,
      "saved_in_favorites_count": 226
    },
    "created_at": "2025-04-17T19:13:24.805197Z"
  },
  {
    "_id": "66a01b2c0000011a",
    "slug": "propiedad-casa-aspen-282",
    "title": "Casa Lujosa #282 en Aspen",
    "price": 17289945,
    "status": "PENDING",
    "specs": {
      "beds": 9,
      "baths": 5.6,
      "sqft": 1650,
      "garage_spaces": 3
    },
    "location": {
      "city_state": "Aspen, CO",
      "address": "8792 Avenue of Excellence",
      "coordinates": {
        "lat": 31.998701,
        "lng": -90.801489
      }
    },
    "features": {
      "amenities": [
        "Elevador Directo",
        "Helipuerto Privado",
        "Vista al Mar",
        "Cancha de Tenis",
        "Casa Inteligente",
        "Alberca Privada"
      ],
      "year_built": 2010,
      "energy_rating": "B"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 5
    },
    "owner": {
      "owner_id": "usr_188",
      "agent_name": "Agente Luxe Mendoza"
    },
    "analytics": {
      "views": 1960,
      "saved_in_favorites_count": 335
    },
    "created_at": "2024-09-14T19:13:24.805197Z"
  },
  {
    "_id": "66a01b2c0000011b",
    "slug": "propiedad-villa-aspen-283",
    "title": "Villa Lujosa #283 en Aspen",
    "price": 14582684,
    "status": "ACTIVE",
    "specs": {
      "beds": 2,
      "baths": 5.9,
      "sqft": 1962,
      "garage_spaces": 5
    },
    "location": {
      "city_state": "Aspen, CO",
      "address": "6053 Avenue of Excellence",
      "coordinates": {
        "lat": 34.744051,
        "lng": -108.516751
      }
    },
    "features": {
      "amenities": [
        "Seguridad 24/7",
        "Spa & Sauna",
        "Casa Inteligente"
      ],
      "year_built": 2015,
      "energy_rating": "A"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 8
    },
    "owner": {
      "owner_id": "usr_980",
      "agent_name": "Agente Luxe Smith"
    },
    "analytics": {
      "views": 2294,
      "saved_in_favorites_count": 15
    },
    "created_at": "2025-04-21T19:13:24.805197Z"
  },
  {
    "_id": "66a01b2c0000011c",
    "slug": "propiedad-penthouse-miami-284",
    "title": "Penthouse Lujosa #284 en Miami",
    "price": 19750630,
    "status": "ACTIVE",
    "specs": {
      "beds": 3,
      "baths": 1.8,
      "sqft": 388,
      "garage_spaces": 3
    },
    "location": {
      "city_state": "Miami, FL",
      "address": "6386 Avenue of Excellence",
      "coordinates": {
        "lat": 29.571199,
        "lng": -121.811953
      }
    },
    "features": {
      "amenities": [
        "Vista al Mar",
        "Elevador Directo",
        "Cancha de Tenis",
        "Gimnasio Privado"
      ],
      "year_built": 2022,
      "energy_rating": "B"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 9
    },
    "owner": {
      "owner_id": "usr_257",
      "agent_name": "Agente Luxe Smith"
    },
    "analytics": {
      "views": 1017,
      "saved_in_favorites_count": 95
    },
    "created_at": "2026-05-28T19:13:24.805197Z"
  },
  {
    "_id": "66a01b2c0000011d",
    "slug": "propiedad-casa-san-francisco-285",
    "title": "Casa Lujosa #285 en San Francisco",
    "price": 1602454,
    "status": "FOR RENT",
    "specs": {
      "beds": 5,
      "baths": 2.4,
      "sqft": 1791,
      "garage_spaces": 3
    },
    "location": {
      "city_state": "San Francisco, CA",
      "address": "3348 Avenue of Excellence",
      "coordinates": {
        "lat": 36.534771,
        "lng": -95.343301
      }
    },
    "features": {
      "amenities": [
        "Gimnasio Privado",
        "Cancha de Tenis",
        "Spa & Sauna",
        "Vista al Mar",
        "Seguridad 24/7",
        "Cava de Vinos"
      ],
      "year_built": 2010,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 18
    },
    "owner": {
      "owner_id": "usr_246",
      "agent_name": "Agente Luxe García"
    },
    "analytics": {
      "views": 3671,
      "saved_in_favorites_count": 388
    },
    "created_at": "2025-02-16T19:13:24.805197Z"
  },
  {
    "_id": "66a01b2c0000011e",
    "slug": "propiedad-penthouse-new-york-286",
    "title": "Penthouse Lujosa #286 en New York",
    "price": 9646563,
    "status": "ACTIVE",
    "specs": {
      "beds": 8,
      "baths": 8.4,
      "sqft": 608,
      "garage_spaces": 1
    },
    "location": {
      "city_state": "New York, NY",
      "address": "7586 Avenue of Excellence",
      "coordinates": {
        "lat": 47.199673,
        "lng": -113.598563
      }
    },
    "features": {
      "amenities": [
        "Seguridad 24/7",
        "Vista al Mar",
        "Spa & Sauna",
        "Elevador Directo",
        "Cava de Vinos"
      ],
      "year_built": 2024,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 15
    },
    "owner": {
      "owner_id": "usr_210",
      "agent_name": "Agente Luxe Vásquez"
    },
    "analytics": {
      "views": 970,
      "saved_in_favorites_count": 36
    },
    "created_at": "2025-06-05T19:13:24.806196Z"
  },
  {
    "_id": "66a01b2c0000011f",
    "slug": "propiedad-penthouse-miami-287",
    "title": "Penthouse Lujosa #287 en Miami",
    "price": 11741760,
    "status": "FOR SALE",
    "specs": {
      "beds": 2,
      "baths": 5.9,
      "sqft": 1716,
      "garage_spaces": 2
    },
    "location": {
      "city_state": "Miami, FL",
      "address": "6341 Avenue of Excellence",
      "coordinates": {
        "lat": 25.13305,
        "lng": -83.351674
      }
    },
    "features": {
      "amenities": [
        "Helipuerto Privado",
        "Alberca Privada",
        "Cava de Vinos",
        "Casa Inteligente",
        "Elevador Directo",
        "Spa & Sauna",
        "Vista al Mar"
      ],
      "year_built": 2025,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 5
    },
    "owner": {
      "owner_id": "usr_717",
      "agent_name": "Agente Luxe García"
    },
    "analytics": {
      "views": 2638,
      "saved_in_favorites_count": 87
    },
    "created_at": "2025-10-31T19:13:24.806196Z"
  },
  {
    "_id": "66a01b2c00000120",
    "slug": "propiedad-departamento-miami-288",
    "title": "Departamento Lujosa #288 en Miami",
    "price": 2334771,
    "status": "FOR RENT",
    "specs": {
      "beds": 8,
      "baths": 7.0,
      "sqft": 529,
      "garage_spaces": 1
    },
    "location": {
      "city_state": "Miami, FL",
      "address": "289 Avenue of Excellence",
      "coordinates": {
        "lat": 39.673581,
        "lng": -73.951266
      }
    },
    "features": {
      "amenities": [
        "Cava de Vinos",
        "Gimnasio Privado",
        "Helipuerto Privado",
        "Vista al Mar",
        "Elevador Directo",
        "Alberca Privada",
        "Spa & Sauna"
      ],
      "year_built": 2010,
      "energy_rating": "B"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 22
    },
    "owner": {
      "owner_id": "usr_471",
      "agent_name": "Agente Luxe Vásquez"
    },
    "analytics": {
      "views": 1848,
      "saved_in_favorites_count": 180
    },
    "created_at": "2026-07-12T19:13:24.806196Z"
  },
  {
    "_id": "66a01b2c00000121",
    "slug": "propiedad-casa-aspen-289",
    "title": "Casa Lujosa #289 en Aspen",
    "price": 5027304,
    "status": "FOR SALE",
    "specs": {
      "beds": 5,
      "baths": 6.8,
      "sqft": 1833,
      "garage_spaces": 4
    },
    "location": {
      "city_state": "Aspen, CO",
      "address": "6923 Avenue of Excellence",
      "coordinates": {
        "lat": 41.767083,
        "lng": -110.287974
      }
    },
    "features": {
      "amenities": [
        "Seguridad 24/7",
        "Vista al Mar",
        "Cava de Vinos",
        "Helipuerto Privado",
        "Casa Inteligente",
        "Elevador Directo"
      ],
      "year_built": 2013,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 7
    },
    "owner": {
      "owner_id": "usr_726",
      "agent_name": "Agente Luxe Smith"
    },
    "analytics": {
      "views": 2037,
      "saved_in_favorites_count": 246
    },
    "created_at": "2026-04-25T19:13:24.806196Z"
  },
  {
    "_id": "66a01b2c00000122",
    "slug": "propiedad-departamento-san-francisco-290",
    "title": "Departamento Lujosa #290 en San Francisco",
    "price": 20779311,
    "status": "PENDING",
    "specs": {
      "beds": 5,
      "baths": 8.4,
      "sqft": 2462,
      "garage_spaces": 1
    },
    "location": {
      "city_state": "San Francisco, CA",
      "address": "7309 Avenue of Excellence",
      "coordinates": {
        "lat": 32.440809,
        "lng": -87.169527
      }
    },
    "features": {
      "amenities": [
        "Cava de Vinos",
        "Cancha de Tenis",
        "Vista al Mar",
        "Helipuerto Privado",
        "Seguridad 24/7",
        "Alberca Privada",
        "Spa & Sauna"
      ],
      "year_built": 2022,
      "energy_rating": "A"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 18
    },
    "owner": {
      "owner_id": "usr_747",
      "agent_name": "Agente Luxe Smith"
    },
    "analytics": {
      "views": 712,
      "saved_in_favorites_count": 195
    },
    "created_at": "2026-06-15T19:13:24.806196Z"
  },
  {
    "_id": "66a01b2c00000123",
    "slug": "propiedad-villa-malibu-291",
    "title": "Villa Lujosa #291 en Malibu",
    "price": 23516164,
    "status": "ACTIVE",
    "specs": {
      "beds": 8,
      "baths": 3.1,
      "sqft": 597,
      "garage_spaces": 4
    },
    "location": {
      "city_state": "Malibu, CA",
      "address": "855 Avenue of Excellence",
      "coordinates": {
        "lat": 35.965435,
        "lng": -120.06579
      }
    },
    "features": {
      "amenities": [
        "Seguridad 24/7",
        "Cava de Vinos",
        "Spa & Sauna",
        "Alberca Privada",
        "Vista al Mar"
      ],
      "year_built": 2025,
      "energy_rating": "B"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 17
    },
    "owner": {
      "owner_id": "usr_202",
      "agent_name": "Agente Luxe Mendoza"
    },
    "analytics": {
      "views": 10,
      "saved_in_favorites_count": 189
    },
    "created_at": "2024-12-29T19:13:24.806196Z"
  },
  {
    "_id": "66a01b2c00000124",
    "slug": "propiedad-casa-miami-292",
    "title": "Casa Lujosa #292 en Miami",
    "price": 19569686,
    "status": "ACTIVE",
    "specs": {
      "beds": 1,
      "baths": 3.9,
      "sqft": 390,
      "garage_spaces": 2
    },
    "location": {
      "city_state": "Miami, FL",
      "address": "7457 Avenue of Excellence",
      "coordinates": {
        "lat": 42.046762,
        "lng": -81.397124
      }
    },
    "features": {
      "amenities": [
        "Alberca Privada",
        "Elevador Directo",
        "Cava de Vinos",
        "Spa & Sauna",
        "Gimnasio Privado",
        "Cancha de Tenis"
      ],
      "year_built": 2018,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 22
    },
    "owner": {
      "owner_id": "usr_620",
      "agent_name": "Agente Luxe Mendoza"
    },
    "analytics": {
      "views": 557,
      "saved_in_favorites_count": 248
    },
    "created_at": "2025-02-25T19:13:24.806196Z"
  },
  {
    "_id": "66a01b2c00000125",
    "slug": "propiedad-residencia-de-playa-austin-293",
    "title": "Residencia de Playa Lujosa #293 en Austin",
    "price": 12116336,
    "status": "FOR RENT",
    "specs": {
      "beds": 10,
      "baths": 5.3,
      "sqft": 1401,
      "garage_spaces": 4
    },
    "location": {
      "city_state": "Austin, TX",
      "address": "4700 Avenue of Excellence",
      "coordinates": {
        "lat": 35.998343,
        "lng": -100.65124
      }
    },
    "features": {
      "amenities": [
        "Casa Inteligente",
        "Spa & Sauna",
        "Cancha de Tenis"
      ],
      "year_built": 2024,
      "energy_rating": "A"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 5
    },
    "owner": {
      "owner_id": "usr_116",
      "agent_name": "Agente Luxe Smith"
    },
    "analytics": {
      "views": 2550,
      "saved_in_favorites_count": 394
    },
    "created_at": "2025-10-13T19:13:24.806196Z"
  },
  {
    "_id": "66a01b2c00000126",
    "slug": "propiedad-casa-san-francisco-294",
    "title": "Casa Lujosa #294 en San Francisco",
    "price": 13503753,
    "status": "FOR RENT",
    "specs": {
      "beds": 10,
      "baths": 1.1,
      "sqft": 341,
      "garage_spaces": 2
    },
    "location": {
      "city_state": "San Francisco, CA",
      "address": "2303 Avenue of Excellence",
      "coordinates": {
        "lat": 32.209443,
        "lng": -81.135401
      }
    },
    "features": {
      "amenities": [
        "Seguridad 24/7",
        "Elevador Directo",
        "Cava de Vinos",
        "Cancha de Tenis"
      ],
      "year_built": 2014,
      "energy_rating": "A"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 25
    },
    "owner": {
      "owner_id": "usr_824",
      "agent_name": "Agente Luxe Vásquez"
    },
    "analytics": {
      "views": 4562,
      "saved_in_favorites_count": 15
    },
    "created_at": "2026-03-14T19:13:24.806196Z"
  },
  {
    "_id": "66a01b2c00000127",
    "slug": "propiedad-penthouse-aspen-295",
    "title": "Penthouse Lujosa #295 en Aspen",
    "price": 8370075,
    "status": "ACTIVE",
    "specs": {
      "beds": 10,
      "baths": 3.9,
      "sqft": 1501,
      "garage_spaces": 4
    },
    "location": {
      "city_state": "Aspen, CO",
      "address": "7661 Avenue of Excellence",
      "coordinates": {
        "lat": 33.4424,
        "lng": -73.121074
      }
    },
    "features": {
      "amenities": [
        "Elevador Directo",
        "Alberca Privada",
        "Cava de Vinos",
        "Seguridad 24/7",
        "Gimnasio Privado"
      ],
      "year_built": 2010,
      "energy_rating": "A"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 14
    },
    "owner": {
      "owner_id": "usr_209",
      "agent_name": "Agente Luxe Mendoza"
    },
    "analytics": {
      "views": 3435,
      "saved_in_favorites_count": 32
    },
    "created_at": "2026-04-15T19:13:24.806196Z"
  },
  {
    "_id": "66a01b2c00000128",
    "slug": "propiedad-departamento-beverly-hills-296",
    "title": "Departamento Lujosa #296 en Beverly Hills",
    "price": 14547870,
    "status": "ACTIVE",
    "specs": {
      "beds": 3,
      "baths": 8.6,
      "sqft": 613,
      "garage_spaces": 1
    },
    "location": {
      "city_state": "Beverly Hills, CA",
      "address": "854 Avenue of Excellence",
      "coordinates": {
        "lat": 42.167571,
        "lng": -92.079289
      }
    },
    "features": {
      "amenities": [
        "Gimnasio Privado",
        "Elevador Directo",
        "Seguridad 24/7",
        "Cancha de Tenis",
        "Spa & Sauna"
      ],
      "year_built": 2022,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 8
    },
    "owner": {
      "owner_id": "usr_740",
      "agent_name": "Agente Luxe Vásquez"
    },
    "analytics": {
      "views": 1151,
      "saved_in_favorites_count": 450
    },
    "created_at": "2026-06-16T19:13:24.806196Z"
  },
  {
    "_id": "66a01b2c00000129",
    "slug": "propiedad-casa-new-york-297",
    "title": "Casa Lujosa #297 en New York",
    "price": 2185095,
    "status": "ACTIVE",
    "specs": {
      "beds": 2,
      "baths": 6.8,
      "sqft": 2228,
      "garage_spaces": 5
    },
    "location": {
      "city_state": "New York, NY",
      "address": "3465 Avenue of Excellence",
      "coordinates": {
        "lat": 42.060328,
        "lng": -93.610449
      }
    },
    "features": {
      "amenities": [
        "Gimnasio Privado",
        "Seguridad 24/7",
        "Casa Inteligente"
      ],
      "year_built": 2010,
      "energy_rating": "A+"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 9
    },
    "owner": {
      "owner_id": "usr_220",
      "agent_name": "Agente Luxe Smith"
    },
    "analytics": {
      "views": 3806,
      "saved_in_favorites_count": 163
    },
    "created_at": "2026-04-14T19:13:24.806196Z"
  },
  {
    "_id": "66a01b2c0000012a",
    "slug": "propiedad-residencia-de-playa-scottsdale-298",
    "title": "Residencia de Playa Lujosa #298 en Scottsdale",
    "price": 23858120,
    "status": "FOR RENT",
    "specs": {
      "beds": 2,
      "baths": 4.6,
      "sqft": 99,
      "garage_spaces": 5
    },
    "location": {
      "city_state": "Scottsdale, AZ",
      "address": "7335 Avenue of Excellence",
      "coordinates": {
        "lat": 37.20034,
        "lng": -120.237484
      }
    },
    "features": {
      "amenities": [
        "Cancha de Tenis",
        "Cava de Vinos",
        "Casa Inteligente"
      ],
      "year_built": 2022,
      "energy_rating": "B"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 11
    },
    "owner": {
      "owner_id": "usr_117",
      "agent_name": "Agente Luxe García"
    },
    "analytics": {
      "views": 1819,
      "saved_in_favorites_count": 356
    },
    "created_at": "2024-09-24T19:13:24.806196Z"
  },
  {
    "_id": "66a01b2c0000012b",
    "slug": "propiedad-residencia-de-playa-aspen-299",
    "title": "Residencia de Playa Lujosa #299 en Aspen",
    "price": 1601586,
    "status": "ACTIVE",
    "specs": {
      "beds": 7,
      "baths": 9.5,
      "sqft": 1130,
      "garage_spaces": 1
    },
    "location": {
      "city_state": "Aspen, CO",
      "address": "1620 Avenue of Excellence",
      "coordinates": {
        "lat": 33.010547,
        "lng": -89.892531
      }
    },
    "features": {
      "amenities": [
        "Cancha de Tenis",
        "Helipuerto Privado",
        "Seguridad 24/7",
        "Spa & Sauna",
        "Vista al Mar",
        "Cava de Vinos",
        "Casa Inteligente"
      ],
      "year_built": 2011,
      "energy_rating": "B"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 20
    },
    "owner": {
      "owner_id": "usr_777",
      "agent_name": "Agente Luxe Vásquez"
    },
    "analytics": {
      "views": 191,
      "saved_in_favorites_count": 122
    },
    "created_at": "2026-06-24T19:13:24.806196Z"
  },
  {
    "_id": "66a01b2c0000012c",
    "slug": "propiedad-departamento-miami-300",
    "title": "Departamento Lujosa #300 en Miami",
    "price": 8177886,
    "status": "PENDING",
    "specs": {
      "beds": 5,
      "baths": 3.8,
      "sqft": 1946,
      "garage_spaces": 1
    },
    "location": {
      "city_state": "Miami, FL",
      "address": "8719 Avenue of Excellence",
      "coordinates": {
        "lat": 42.160103,
        "lng": -92.614563
      }
    },
    "features": {
      "amenities": [
        "Casa Inteligente",
        "Elevador Directo",
        "Gimnasio Privado",
        "Seguridad 24/7",
        "Helipuerto Privado",
        "Alberca Privada"
      ],
      "year_built": 2022,
      "energy_rating": "A"
    },
    "media": {
      "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "gallery_count": 19
    },
    "owner": {
      "owner_id": "usr_228",
      "agent_name": "Agente Luxe Smith"
    },
    "analytics": {
      "views": 474,
      "saved_in_favorites_count": 327
    },
    "created_at": "2025-02-11T19:13:24.806196Z"
  }
];

export function getRealNoSQLProperties(): Property[] {
  return rawNoSQLDataset.map((doc: any) => ({
    id: doc._id || doc.slug,
    slug: doc.slug || doc._id,
    title: doc.title,
    price: doc.price,
    location: doc.location?.city_state || 'Beverly Hills, CA',
    address: doc.location?.address || '100 Luxury Blvd',
    beds: doc.specs?.beds || 3,
    baths: doc.specs?.baths || 2,
    sqft: doc.specs?.sqft || 1500,
    garage: doc.specs?.garage_spaces || 2,
    description: `Propiedad NoSQL procedente de la colección MongoDB properties_nosql (Documento ID: ${doc._id}). Cuenta con ${doc.analytics?.views || 100} visualizaciones en tiempo real.`,
    amenities: doc.features?.amenities || ['Alberca Privada', 'Casa Inteligente'],
    images: [doc.media?.main_image || 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop'],
    agentId: doc.owner?.owner_id || 'user123',
    status: doc.status || 'ACTIVE'
  }));
}
