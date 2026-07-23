import json
import random
from datetime import datetime, timedelta

def create_nosql_json():
    json_path = r"c:\home\practice_2d\luxu-real-estate\luxu-real-estate\mongodb_nosql_dataset.json"
    
    cities = ["Beverly Hills, CA", "Malibu, CA", "Miami, FL", "New York, NY", "Austin, TX", "Seattle, WA", "Aspen, CO", "Chicago, IL", "San Francisco, CA", "Scottsdale, AZ"]
    property_types = ["Casa", "Departamento", "Villa", "Penthouse", "Residencia de Playa"]
    statuses = ["ACTIVE", "FOR SALE", "FOR RENT", "PENDING"]
    amenities_list = ["Alberca Privada", "Casa Inteligente", "Vista al Mar", "Gimnasio Privado", "Cava de Vinos", "Seguridad 24/7", "Cancha de Tenis", "Helipuerto Privado", "Elevador Directo", "Spa & Sauna"]

    documents = []
    
    print("Generating 10,000 NoSQL documents...")
    for i in range(1, 10001):
        ptype = random.choice(property_types)
        city = random.choice(cities)
        price = random.randint(250000, 25000000)
        status = random.choice(statuses)
        beds = random.randint(1, 10)
        baths = round(random.uniform(1.0, 9.5), 1)
        sqft = random.randint(80, 2500)
        
        doc = {
            "_id": f"66a01b2c{i:08x}",
            "slug": f"propiedad-{ptype.lower().replace(' ', '-')}-{city.split(',')[0].lower().replace(' ', '-')}-{i}",
            "title": f"{ptype} Lujosa #{i} en {city.split(',')[0]}",
            "price": price,
            "status": status,
            "specs": {
                "beds": beds,
                "baths": baths,
                "sqft": sqft,
                "garage_spaces": random.randint(1, 5)
            },
            "location": {
                "city_state": city,
                "address": f"{random.randint(100, 9999)} Avenue of Excellence",
                "coordinates": {
                    "lat": round(random.uniform(25.0, 48.0), 6),
                    "lng": round(random.uniform(-122.0, -73.0), 6)
                }
            },
            "features": {
                "amenities": random.sample(amenities_list, k=random.randint(3, 7)),
                "year_built": random.randint(2010, 2026),
                "energy_rating": random.choice(["A+", "A", "B"])
            },
            "media": {
                "main_image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
                "gallery_count": random.randint(5, 25)
            },
            "owner": {
                "owner_id": f"usr_{random.randint(100, 999)}",
                "agent_name": f"Agente Luxe {random.choice(['García', 'Mendoza', 'Smith', 'Vásquez'])}"
            },
            "analytics": {
                "views": random.randint(10, 5000),
                "saved_in_favorites_count": random.randint(0, 450)
            },
            "created_at": (datetime.now() - timedelta(days=random.randint(1, 730))).isoformat() + "Z"
        }
        documents.append(doc)
    
    with open(json_path, "w", encoding="utf-8") as f:
        json.dump(documents, f, indent=2, ensure_ascii=False)
        
    print(f"NoSQL JSON dataset created with 10,000 documents at {json_path}")

create_nosql_json()
