import os
import json
import random
from datetime import datetime, timedelta

# Create SQL script with DDL and 50 records per table
def create_sql_script():
    sql_path = r"c:\home\practice_2d\luxu-real-estate\luxu-real-estate\schema_and_data_postgresql.sql"
    
    cities = ["Beverly Hills, CA", "Malibu, CA", "Miami, FL", "New York, NY", "Austin, TX", "Seattle, WA", "Aspen, CO", "Chicago, IL", "San Francisco, CA", "Scottsdale, AZ"]
    property_types = ["Casa", "Departamento", "Villa", "Penthouse", "Residencia de Playa"]
    statuses = ["ACTIVE", "FOR SALE", "FOR RENT", "PENDING"]
    
    first_names = ["Carlos", "María", "Alejandro", "Sofía", "Javier", "Valentina", "Mateo", "Camila", "Diego", "Isabella", "Fernando", "Lucía", "Ricardo", "Elena", "Gabriel"]
    last_names = ["Mendoza", "García", "Rodríguez", "López", "Hernández", "Martínez", "Pérez", "González", "Sánchez", "Romero", "Torres", "Flores", "Rivera", "Gómez", "Díaz"]
    
    sql_lines = []
    sql_lines.append("-- ========================================================================")
    sql_lines.append("-- PROYECTO: LUXU REAL ESTATE - BASE DE DATOS RELACIONAL (POSTGRESQL)")
    sql_lines.append("-- SCRIPT DDL, DML Y RESTRICCIONES COMPLETA (50 REGISTROS POR TABLA)")
    sql_lines.append("-- ========================================================================\n")
    
    sql_lines.append("DROP TABLE IF EXISTS appointments CASCADE;")
    sql_lines.append("DROP TABLE IF EXISTS user_favorites CASCADE;")
    sql_lines.append("DROP TABLE IF EXISTS properties CASCADE;")
    sql_lines.append("DROP TABLE IF EXISTS profiles CASCADE;\n")
    
    # PROFILES DDL
    sql_lines.append("-- 1. TABLA PROFILES")
    sql_lines.append("""CREATE TABLE profiles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    full_name VARCHAR(150) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    role VARCHAR(20) NOT NULL DEFAULT 'Cliente' CHECK (role IN ('Admin', 'Agente', 'Cliente')),
    location VARCHAR(100) DEFAULT 'Beverly Hills, CA',
    avatar_url TEXT,
    member_since TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    email_notifications BOOLEAN DEFAULT TRUE,
    push_notifications BOOLEAN DEFAULT TRUE,
    sms_notifications BOOLEAN DEFAULT TRUE
);""")
    sql_lines.append("")

    # PROPERTIES DDL
    sql_lines.append("-- 2. TABLA PROPERTIES")
    sql_lines.append("""CREATE TABLE properties (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slug VARCHAR(200) UNIQUE NOT NULL,
    title VARCHAR(200) NOT NULL,
    description TEXT,
    price NUMERIC(15, 2) NOT NULL CHECK (price >= 0),
    status VARCHAR(20) NOT NULL DEFAULT 'ACTIVE' CHECK (status IN ('ACTIVE', 'FOR SALE', 'FOR RENT', 'PENDING')),
    beds INT NOT NULL DEFAULT 1 CHECK (beds >= 0),
    baths NUMERIC(3, 1) NOT NULL DEFAULT 1.0 CHECK (baths >= 0),
    sqft INT NOT NULL DEFAULT 50 CHECK (sqft > 0),
    location VARCHAR(150) NOT NULL,
    address VARCHAR(200),
    amenities JSONB DEFAULT '[]'::jsonb,
    images JSONB DEFAULT '[]'::jsonb,
    owner_id UUID REFERENCES profiles(id) ON DELETE SET NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);""")
    sql_lines.append("")

    # USER FAVORITES DDL
    sql_lines.append("-- 3. TABLA USER_FAVORITES")
    sql_lines.append("""CREATE TABLE user_favorites (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
    property_id UUID NOT NULL REFERENCES properties(id) ON DELETE CASCADE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT unique_user_favorite UNIQUE (user_id, property_id)
);""")
    sql_lines.append("")

    # APPOINTMENTS DDL
    sql_lines.append("-- 4. TABLA APPOINTMENTS")
    sql_lines.append("""CREATE TABLE appointments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
    property_id UUID NOT NULL REFERENCES properties(id) ON DELETE CASCADE,
    booking_date_time TIMESTAMP WITH TIME ZONE NOT NULL,
    notes TEXT,
    status VARCHAR(20) NOT NULL DEFAULT 'Pending' CHECK (status IN ('Pending', 'Confirmed', 'Cancelled', 'Completed')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);""")
    sql_lines.append("\n-- ========================================================================")
    sql_lines.append("-- INSERCIÓN DE 50 REGISTROS POR TABLA (DML)")
    sql_lines.append("-- ========================================================================\n")

    # Generate 50 Profiles
    sql_lines.append("-- INSERCIÓN EN PROFILES (50 REGISTROS)")
    profile_ids = []
    for i in range(1, 51):
        pid = f"a0eebc99-9c0b-4ef8-bb6d-6bb9bd3800{i:02d}"
        profile_ids.append(pid)
        fname = f"{random.choice(first_names)} {random.choice(last_names)}"
        email = f"usuario{i}@luxeestate.com"
        role = "Admin" if i <= 5 else ("Agente" if i <= 15 else "Cliente")
        loc = random.choice(cities)
        avatar = f"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop"
        sql_lines.append(f"INSERT INTO profiles (id, full_name, email, role, location, avatar_url) VALUES ('{pid}', '{fname}', '{email}', '{role}', '{loc}', '{avatar}');")
    
    sql_lines.append("")

    # Generate 50 Properties
    sql_lines.append("-- INSERCIÓN EN PROPERTIES (50 REGISTROS)")
    property_ids = []
    for i in range(1, 51):
        prid = f"b0eebc99-9c0b-4ef8-bb6d-6bb9bd3800{i:02d}"
        property_ids.append(prid)
        ptype = random.choice(property_types)
        city = random.choice(cities)
        title = f"{ptype} Exclusiva en {city.split(',')[0]} #{i}"
        slug = f"propiedad-{ptype.lower().replace(' ', '-')}-{city.split(',')[0].lower().replace(' ', '-')}-{i}"
        price = random.randint(350000, 12500000)
        st = random.choice(statuses)
        beds = random.randint(2, 8)
        baths = round(random.uniform(2.0, 7.5), 1)
        sqft = random.randint(150, 1200)
        address = f"{random.randint(100, 9999)} Luxury Avenue, Suite {i}"
        owner = random.choice(profile_ids[:15]) # Admins or Agents
        amenities = "[\"Alberca Privada\", \"Casa Inteligente\", \"Vista al Mar\", \"Gimnasio Privado\", \"Cava de Vinos\"]"
        img = "[\"https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop\"]"
        sql_lines.append(f"INSERT INTO properties (id, slug, title, description, price, status, beds, baths, sqft, location, address, amenities, images, owner_id) VALUES ('{prid}', '{slug}', '{title}', 'Exclusiva residencia de alto nivel con acabados de primera.', {price}, '{st}', {beds}, {baths}, {sqft}, '{city}', '{address}', '{amenities}'::jsonb, '{img}'::jsonb, '{owner}');")

    sql_lines.append("")

    # Generate 50 Favorites
    sql_lines.append("-- INSERCIÓN EN USER_FAVORITES (50 REGISTROS)")
    fav_pairs = set()
    count = 0
    while count < 50:
        uid = random.choice(profile_ids)
        pid = random.choice(property_ids)
        pair = (uid, pid)
        if pair not in fav_pairs:
            fav_pairs.add(pair)
            count += 1
            fid = f"c0eebc99-9c0b-4ef8-bb6d-6bb9bd3800{count:02d}"
            sql_lines.append(f"INSERT INTO user_favorites (id, user_id, property_id) VALUES ('{fid}', '{uid}', '{pid}');")

    sql_lines.append("")

    # Generate 50 Appointments
    sql_lines.append("-- INSERCIÓN EN APPOINTMENTS (50 REGISTROS)")
    for i in range(1, 51):
        apid = f"d0eebc99-9c0b-4ef8-bb6d-6bb9bd3800{i:02d}"
        uid = random.choice(profile_ids)
        pid = random.choice(property_ids)
        future_days = random.randint(1, 30)
        hour = random.randint(9, 18)
        bdate = (datetime.now() + timedelta(days=future_days, hours=hour)).strftime('%Y-%m-%d %H:00:00+00')
        notes = f"Solicitud de recorrido presional guiado para la propiedad #{i}"
        astatus = random.choice(['Pending', 'Confirmed', 'Completed', 'Cancelled'])
        sql_lines.append(f"INSERT INTO appointments (id, user_id, property_id, booking_date_time, notes, status) VALUES ('{apid}', '{uid}', '{pid}', '{bdate}', '{notes}', '{astatus}');")

    with open(sql_path, "w", encoding="utf-8") as f:
        f.write("\n".join(sql_lines))

    print(f"SQL script created with {len(sql_lines)} lines at {sql_path}")

create_sql_script()
