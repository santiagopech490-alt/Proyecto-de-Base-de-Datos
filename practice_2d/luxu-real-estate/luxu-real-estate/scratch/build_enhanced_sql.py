import random
from datetime import datetime, timedelta

def create_enhanced_sql():
    sql_path = r"c:\home\practice_2d\luxu-real-estate\luxu-real-estate\schema_and_data_postgresql.sql"
    
    cities = ["Beverly Hills, CA", "Malibu, CA", "Miami, FL", "New York, NY", "Austin, TX", "Seattle, WA", "Aspen, CO", "Chicago, IL", "San Francisco, CA", "Scottsdale, AZ"]
    property_types = ["Casa", "Departamento", "Villa", "Penthouse", "Residencia de Playa"]
    statuses = ["ACTIVE", "FOR SALE", "FOR RENT", "PENDING"]
    
    first_names = ["Carlos", "María", "Alejandro", "Sofía", "Javier", "Valentina", "Mateo", "Camila", "Diego", "Isabella", "Fernando", "Lucía", "Ricardo", "Elena", "Gabriel", "Santiago", "Valeria", "Sebastián", "Natalia", "Andrés"]
    last_names = ["Mendoza", "García", "Rodríguez", "López", "Hernández", "Martínez", "Pérez", "González", "Sánchez", "Romero", "Torres", "Flores", "Rivera", "Gómez", "Díaz", "Cruz", "Morales", "Ortiz", "Gutierrez", "Reyes"]
    
    lines = []
    lines.append("-- ========================================================================")
    lines.append("-- PROYECTO: LUXU REAL ESTATE - BASE DE DATOS RELACIONAL (POSTGRESQL)")
    lines.append("-- SCRIPT DDL COMPLETO CON OBJETOS (TABLAS, VISTAS, DISPARADORES,")
    lines.append("-- PROCEDIMIENTOS ALMACENADOS, FUNCIONES, REGLAS, ÍNDICES Y RESTRICCIONES)")
    lines.append("-- MÁS DML CON 50 REGISTROS POR TABLA (TOTAL 200 REGISTROS RELACIONALES)")
    lines.append("-- ========================================================================\n")
    
    lines.append("BEGIN TRANSACTION;\n")
    
    # DROP OBJECTS IF EXIST
    lines.append("-- 1. LIMPIEZA DE OBJETOS PREVIOS")
    lines.append("DROP VIEW IF EXISTS vw_active_properties_summary CASCADE;")
    lines.append("DROP VIEW IF EXISTS vw_user_appointment_details CASCADE;")
    lines.append("DROP TRIGGER IF EXISTS trg_properties_timestamp ON properties CASCADE;")
    lines.append("DROP TRIGGER IF EXISTS trg_profiles_timestamp ON profiles CASCADE;")
    lines.append("DROP FUNCTION IF EXISTS fn_update_timestamp() CASCADE;")
    lines.append("DROP FUNCTION IF EXISTS fn_calculate_kpis() CASCADE;")
    lines.append("DROP PROCEDURE IF EXISTS sp_schedule_visit(UUID, UUID, TIMESTAMP WITH TIME ZONE, TEXT) CASCADE;")
    lines.append("DROP PROCEDURE IF EXISTS sp_update_property_price(UUID, NUMERIC) CASCADE;")
    lines.append("DROP TABLE IF EXISTS appointments CASCADE;")
    lines.append("DROP TABLE IF EXISTS user_favorites CASCADE;")
    lines.append("DROP TABLE IF EXISTS properties CASCADE;")
    lines.append("DROP TABLE IF EXISTS profiles CASCADE;\n")

    # 2. DDL DE TABLAS Y RESTRICCIONES
    lines.append("-- ========================================================================")
    lines.append("-- 2. CREACIÓN DE TABLAS Y MANEJO DE RESTRICCIONES (6 TIPOS OBLIGATORIOS)")
    lines.append("-- ========================================================================\n")

    # PROFILES TABLE
    lines.append("-- TABLA 1: PROFILES (Usuarios y Perfiles)")
    lines.append("""CREATE TABLE profiles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(), -- PRIMARY KEY, DEFAULT
    full_name VARCHAR(150) NOT NULL,              -- NOT NULL
    email VARCHAR(150) UNIQUE NOT NULL,           -- UNIQUE, NOT NULL
    role VARCHAR(20) NOT NULL DEFAULT 'Cliente'   -- DEFAULT, NOT NULL, CHECK
        CHECK (role IN ('Admin', 'Agente', 'Cliente')),
    location VARCHAR(100) DEFAULT 'Beverly Hills, CA', -- DEFAULT
    avatar_url TEXT,
    member_since TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP, -- DEFAULT
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);""")
    lines.append("")

    # PROPERTIES TABLE
    lines.append("-- TABLA 2: PROPERTIES (Inmuebles de Lujo)")
    lines.append("""CREATE TABLE properties (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(), -- PRIMARY KEY, DEFAULT
    slug VARCHAR(200) UNIQUE NOT NULL,            -- UNIQUE, NOT NULL
    title VARCHAR(200) NOT NULL,                  -- NOT NULL
    description TEXT,
    price NUMERIC(15, 2) NOT NULL CHECK (price >= 0), -- NOT NULL, CHECK
    status VARCHAR(20) NOT NULL DEFAULT 'ACTIVE'  -- DEFAULT, NOT NULL, CHECK
        CHECK (status IN ('ACTIVE', 'FOR SALE', 'FOR RENT', 'PENDING')),
    beds INT NOT NULL DEFAULT 1 CHECK (beds >= 0),-- DEFAULT, NOT NULL, CHECK
    baths NUMERIC(3, 1) NOT NULL DEFAULT 1.0 CHECK (baths >= 0), -- DEFAULT, CHECK
    sqft INT NOT NULL DEFAULT 50 CHECK (sqft > 0), -- DEFAULT, CHECK
    location VARCHAR(150) NOT NULL,               -- NOT NULL
    address VARCHAR(200),
    amenities JSONB DEFAULT '[]'::jsonb,           -- DEFAULT
    images JSONB DEFAULT '[]'::jsonb,              -- DEFAULT
    owner_id UUID REFERENCES profiles(id) ON DELETE SET NULL, -- FOREIGN KEY
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);""")
    lines.append("")

    # USER FAVORITES TABLE
    lines.append("-- TABLA 3: USER_FAVORITES (Propiedades Favoritas Guardadas)")
    lines.append("""CREATE TABLE user_favorites (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(), -- PRIMARY KEY, DEFAULT
    user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE, -- FOREIGN KEY, NOT NULL
    property_id UUID NOT NULL REFERENCES properties(id) ON DELETE CASCADE, -- FOREIGN KEY, NOT NULL
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT unique_user_favorite UNIQUE (user_id, property_id) -- UNIQUE CONSTRAINT
);""")
    lines.append("")

    # APPOINTMENTS TABLE
    lines.append("-- TABLA 4: APPOINTMENTS (Citas para Visitas Guiadas)")
    lines.append("""CREATE TABLE appointments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(), -- PRIMARY KEY, DEFAULT
    user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE, -- FOREIGN KEY
    property_id UUID NOT NULL REFERENCES properties(id) ON DELETE CASCADE, -- FOREIGN KEY
    booking_date_time TIMESTAMP WITH TIME ZONE NOT NULL, -- NOT NULL
    notes TEXT,
    status VARCHAR(20) NOT NULL DEFAULT 'Pending' -- DEFAULT, CHECK
        CHECK (status IN ('Pending', 'Confirmed', 'Cancelled', 'Completed')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);""")
    lines.append("\n-- ========================================================================")
    lines.append("-- 3. CREACIÓN DE OBJETOS AVANZADOS EN LA BASE DE DATOS")
    lines.append("-- ========================================================================\n")

    # INDEXES
    lines.append("-- A) ÍNDICES (INDEXES) - ALMACENADOS EN PG_AM / PG_INDEX")
    lines.append("CREATE INDEX idx_properties_slug ON properties(slug);")
    lines.append("CREATE INDEX idx_properties_location ON properties(location);")
    lines.append("CREATE INDEX idx_properties_price ON properties(price);")
    lines.append("CREATE INDEX idx_appointments_user ON appointments(user_id);")
    lines.append("CREATE INDEX idx_user_favorites_user ON user_favorites(user_id);\n")

    # VIEWS
    lines.append("-- B) VISTAS (VIEWS) - ALMACENADAS EN PG_VIEWS")
    lines.append("""CREATE VIEW vw_active_properties_summary AS
SELECT 
    p.id,
    p.slug,
    p.title,
    p.price,
    p.status,
    p.beds,
    p.baths,
    p.sqft,
    p.location,
    pr.full_name AS owner_name,
    pr.email AS owner_email
FROM properties p
LEFT JOIN profiles pr ON p.owner_id = pr.id
WHERE p.status IN ('ACTIVE', 'FOR SALE', 'FOR RENT');""")
    lines.append("")

    lines.append("""CREATE VIEW vw_user_appointment_details AS
SELECT 
    a.id AS appointment_id,
    pr.full_name AS client_name,
    pr.email AS client_email,
    p.title AS property_title,
    p.location AS property_location,
    a.booking_date_time,
    a.status AS appointment_status
FROM appointments a
JOIN profiles pr ON a.user_id = pr.id
JOIN properties p ON a.property_id = p.id;""")
    lines.append("")

    # FUNCTIONS & TRIGGERS
    lines.append("-- C) FUNCIONES Y DISPARADORES (FUNCTIONS & TRIGGERS) - ALMACENADOS EN PG_PROC / PG_TRIGGER")
    lines.append("""CREATE OR REPLACE FUNCTION fn_update_timestamp()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;""")
    lines.append("")

    lines.append("""CREATE TRIGGER trg_properties_timestamp
BEFORE UPDATE ON properties
FOR EACH ROW
EXECUTE FUNCTION fn_update_timestamp();""")
    lines.append("")

    lines.append("""CREATE TRIGGER trg_profiles_timestamp
BEFORE UPDATE ON profiles
FOR EACH ROW
EXECUTE FUNCTION fn_update_timestamp();""")
    lines.append("")

    lines.append("""CREATE OR REPLACE FUNCTION fn_calculate_kpis()
RETURNS TABLE(total_properties BIGINT, active_properties BIGINT, total_value NUMERIC) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        COUNT(*)::BIGINT AS total_properties,
        COUNT(*) FILTER (WHERE status = 'ACTIVE' OR status = 'FOR SALE')::BIGINT AS active_properties,
        COALESCE(SUM(price), 0)::NUMERIC AS total_value
    FROM properties;
END;
$$ LANGUAGE plpgsql;""")
    lines.append("")

    # STORED PROCEDURES
    lines.append("-- D) PROCEDIMIENTOS ALMACENADOS (STORED PROCEDURES) - ALMACENADOS EN PG_PROC")
    lines.append("""CREATE OR REPLACE PROCEDURE sp_schedule_visit(
    p_user_id UUID,
    p_property_id UUID,
    p_booking_time TIMESTAMP WITH TIME ZONE,
    p_notes TEXT
)
LANGUAGE plpgsql
AS $$
BEGIN
    INSERT INTO appointments (user_id, property_id, booking_date_time, notes, status)
    VALUES (p_user_id, p_property_id, p_booking_time, p_notes, 'Pending');
END;
$$;""")
    lines.append("")

    lines.append("""CREATE OR REPLACE PROCEDURE sp_update_property_price(
    p_property_id UUID,
    p_new_price NUMERIC
)
LANGUAGE plpgsql
AS $$
BEGIN
    IF p_new_price < 0 THEN
        RAISE EXCEPTION 'El precio no puede ser negativo: %', p_new_price;
    END IF;

    UPDATE properties
    SET price = p_new_price, updated_at = CURRENT_TIMESTAMP
    WHERE id = p_property_id;
END;
$$;""")
    lines.append("")

    lines.append("\n-- ========================================================================")
    lines.append("-- 4. INSERCIÓN DE 50 REGISTROS REALES Y COHERENTES POR TABLA (DML)")
    lines.append("-- ========================================================================\n")

    # Generate 50 Profiles
    lines.append("-- INSERCIÓN EN PROFILES (50 REGISTROS)")
    profile_ids = []
    for i in range(1, 51):
        pid = f"a0eebc99-9c0b-4ef8-bb6d-6bb9bd3800{i:02d}"
        profile_ids.append(pid)
        fname = f"{first_names[(i-1)%len(first_names)]} {last_names[(i*3)%len(last_names)]}"
        email = f"usuario{i}@luxeestate.com"
        role = "Admin" if i <= 5 else ("Agente" if i <= 15 else "Cliente")
        loc = cities[(i-1)%len(cities)]
        avatar = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop"
        lines.append(f"INSERT INTO profiles (id, full_name, email, role, location, avatar_url) VALUES ('{pid}', '{fname}', '{email}', '{role}', '{loc}', '{avatar}');")

    lines.append("")

    # Generate 50 Properties
    lines.append("-- INSERCIÓN EN PROPERTIES (50 REGISTROS)")
    property_ids = []
    for i in range(1, 51):
        prid = f"b0eebc99-9c0b-4ef8-bb6d-6bb9bd3800{i:02d}"
        property_ids.append(prid)
        ptype = property_types[(i-1)%len(property_types)]
        city = cities[(i*2)%len(cities)]
        title = f"{ptype} Lujosa en {city.split(',')[0]} #{i}"
        slug = f"propiedad-{ptype.lower().replace(' ', '-')}-{city.split(',')[0].lower().replace(' ', '-')}-{i}"
        price = 350000 + (i * 125000)
        st = statuses[(i-1)%len(statuses)]
        beds = (i % 6) + 1
        baths = float((i % 5) + 1.5)
        sqft = 120 + (i * 35)
        address = f"{100 + i*15} Luxury Avenue"
        owner = profile_ids[(i-1)%15] # Admins or Agents
        amenities = "[\"Alberca Privada\", \"Casa Inteligente\", \"Vista al Mar\", \"Gimnasio Privado\", \"Cava de Vinos\"]"
        img = "[\"https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop\"]"
        lines.append(f"INSERT INTO properties (id, slug, title, description, price, status, beds, baths, sqft, location, address, amenities, images, owner_id) VALUES ('{prid}', '{slug}', '{title}', 'Exclusiva residencia de alto nivel con acabados de primera.', {price}, '{st}', {beds}, {baths}, {sqft}, '{city}', '{address}', '{amenities}'::jsonb, '{img}'::jsonb, '{owner}');")

    lines.append("")

    # Generate 50 Favorites
    lines.append("-- INSERCIÓN EN USER_FAVORITES (50 REGISTROS)")
    fav_pairs = set()
    count = 0
    for i in range(1, 51):
        uid = profile_ids[(i-1)%50]
        pid = property_ids[(i*3)%50]
        pair = (uid, pid)
        if pair not in fav_pairs:
            fav_pairs.add(pair)
            count += 1
            fid = f"c0eebc99-9c0b-4ef8-bb6d-6bb9bd3800{count:02d}"
            lines.append(f"INSERT INTO user_favorites (id, user_id, property_id) VALUES ('{fid}', '{uid}', '{pid}');")

    lines.append("")

    # Generate 50 Appointments
    lines.append("-- INSERCIÓN EN APPOINTMENTS (50 REGISTROS)")
    for i in range(1, 51):
        apid = f"d0eebc99-9c0b-4ef8-bb6d-6bb9bd3800{i:02d}"
        uid = profile_ids[(i*2)%50]
        pid = property_ids[(i*4)%50]
        future_days = (i % 30) + 1
        bdate = f"2026-08-{future_days:02d} 10:00:00+00"
        notes = f"Solicitud de recorrido presencial guiado para la propiedad #{i}"
        astatus = ['Pending', 'Confirmed', 'Completed', 'Cancelled'][(i-1)%4]
        lines.append(f"INSERT INTO appointments (id, user_id, property_id, booking_date_time, notes, status) VALUES ('{apid}', '{uid}', '{pid}', '{bdate}', '{notes}', '{astatus}');")

    lines.append("\nCOMMIT;")
    lines.append("-- ========================================================================")
    lines.append("-- FIN DEL SCRIPT PostgreSQL DDL/DML COMPLETO")
    lines.append("-- ========================================================================\n")

    with open(sql_path, "w", encoding="utf-8") as f:
        f.write("\n".join(lines))

    print(f"Enhanced SQL script created successfully at {sql_path}")

create_enhanced_sql()
