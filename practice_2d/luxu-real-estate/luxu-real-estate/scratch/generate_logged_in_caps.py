import os
from PIL import Image, ImageDraw, ImageFont

def generate_clean_ui_mockups():
    scratch_dir = r"c:\home\practice_2d\luxu-real-estate\luxu-real-estate\scratch"
    
    # 1. Cap Home
    img1 = Image.new('RGB', (1280, 800), color='#FBFDFB')
    d1 = ImageDraw.Draw(img1)
    d1.rectangle([(0, 0), (1280, 80)], fill='#FFFFFF')
    d1.rectangle([(0, 79), (1280, 80)], fill='#E2E8F0')
    d1.rectangle([(40, 20), (80, 60)], fill='#006655')
    d1.text((95, 30), "LuxeEstate Properties", fill='#19322F', font_size=20)
    d1.text((950, 30), "Comprar   Rentar   Favoritos   Panel Control", fill='#19322F', font_size=14)
    d1.rectangle([(1180, 25), (1240, 55)], fill='#006655')
    d1.text((1190, 32), "Admin", fill='#FFFFFF', font_size=12)
    
    d1.text((400, 150), "Encuentra Tu Santuario de Lujo", fill='#19322F', font_size=32)
    d1.text((440, 200), "Descubre propiedades exclusivas en las mejores ubicaciones del mundo", fill='#5C706D', font_size=14)
    d1.rectangle([(300, 250), (980, 310)], fill='#FFFFFF', outline='#E2E8F0')
    d1.rectangle([(880, 255), (975, 305)], fill='#006655')
    d1.text((905, 272), "Buscar", fill='#FFFFFF', font_size=14)

    # Property Cards on Home
    d1.rectangle([(100, 380), (600, 750)], fill='#FFFFFF', outline='#E2E8F0')
    d1.rectangle([(100, 380), (600, 600)], fill='#CBD5E1')
    d1.text([(120, 620)], "$5,250,000", fill='#006655', font_size=24)
    d1.text([(120, 660)], "The Glass Pavilion", fill='#19322F', font_size=18)
    d1.text([(120, 690)], "Beverly Hills, California", fill='#5C706D', font_size=14)

    d1.rectangle([(680, 380), (1180, 750)], fill='#FFFFFF', outline='#E2E8F0')
    d1.rectangle([(680, 380), (1180, 600)], fill='#94A3B8')
    d1.text([(700, 620)], "$3,800,000", fill='#006655', font_size=24)
    d1.text([(700, 660)], "Azure Heights Penthouse", fill='#19322F', font_size=18)
    d1.text([(700, 690)], "Downtown, Vancouver", fill='#5C706D', font_size=14)

    img1.save(os.path.join(scratch_dir, "cap_home.png"))

    # 2. Cap Catalog
    img2 = Image.new('RGB', (1280, 800), color='#FBFDFB')
    d2 = ImageDraw.Draw(img2)
    d2.rectangle([(0, 0), (1280, 80)], fill='#FFFFFF')
    d2.text((40, 25), "LuxeEstate", fill='#19322F', font_size=24)
    d2.text((1000, 30), "Sesión Activa: Santiago Pech (Admin)", fill='#006655', font_size=12)

    d2.text((40, 110), "Propiedades Disponibles", fill='#19322F', font_size=28)
    d2.rectangle([(380, 115), (560, 145)], fill='#D1FAE5')
    d2.text((390, 122), "💾 300 de 10,000 NoSQL", fill='#006655', font_size=12)
    d2.text((40, 150), "Mostrando coincidencias activas de la base de datos NoSQL MongoDB", fill='#5C706D', font_size=13)

    # Category Pills
    pills = ["Todas en Memoria (300)", "Casas (60)", "Departamentos (60)", "Villas (60)", "Penthouses (60)", "En Renta (100)"]
    x = 40
    for p in pills:
        d2.rectangle([(x, 185), (x + 170, 215)], fill='#006655' if "Todas" in p else '#FFFFFF', outline='#CBD5E1')
        d2.text((x + 10, 194), p, fill='#FFFFFF' if "Todas" in p else '#19322F', font_size=11)
        x += 180

    # 3 Cards
    d2.rectangle([(40, 240), (420, 720)], fill='#FFFFFF', outline='#E2E8F0')
    d2.rectangle([(40, 240), (420, 480)], fill='#64748B')
    d2.text([(60, 500)], "$5,250,000", fill='#006655', font_size=20)
    d2.text([(60, 535)], "Casa Lujosa #1 en Beverly Hills", fill='#19322F', font_size=14)
    d2.text([(60, 565)], "Beverly Hills, CA | 5 Hab | 4.5 Baños | 4,200 m²", fill='#5C706D', font_size=11)

    d2.rectangle([(450, 240), (830, 720)], fill='#FFFFFF', outline='#E2E8F0')
    d2.rectangle([(450, 240), (830, 480)], fill='#475569')
    d2.text([(470, 500)], "$3,800,000", fill='#006655', font_size=20)
    d2.text([(470, 535)], "Penthouse Lujosa #2 en Malibu", fill='#19322F', font_size=14)
    d2.text([(470, 565)], "Malibu, CA | 3 Hab | 3 Baños | 2,100 m²", fill='#5C706D', font_size=11)

    d2.rectangle([(860, 240), (1240, 720)], fill='#FFFFFF', outline='#E2E8F0')
    d2.rectangle([(860, 240), (1240, 480)], fill='#334155')
    d2.text([(880, 500)], "$8,500,000", fill='#006655', font_size=20)
    d2.text([(880, 535)], "Villa Lujosa #3 en Miami", fill='#19322F', font_size=14)
    d2.text([(880, 565)], "Miami, FL | 6 Hab | 6 Baños | 5,500 m²", fill='#5C706D', font_size=11)

    img2.save(os.path.join(scratch_dir, "cap_catalog.png"))

    # 3. Cap Favorites
    img3 = Image.new('RGB', (1280, 800), color='#FBFDFB')
    d3 = ImageDraw.Draw(img3)
    d3.rectangle([(0, 0), (1280, 80)], fill='#FFFFFF')
    d3.text((40, 25), "LuxeEstate Properties", fill='#19322F', font_size=22)
    d3.text((40, 110), "Tus Propiedades Favoritas", fill='#19322F', font_size=28)
    d3.text((40, 150), "Tienes 4 propiedades guardadas esperándote (Sincronizado en tiempo real).", fill='#5C706D', font_size=14)

    # 4 Fav Cards
    for i in range(4):
        x_pos = 40 + (i * 300)
        d3.rectangle([(x_pos, 200), (x_pos + 280, 700)], fill='#FFFFFF', outline='#E2E8F0')
        d3.rectangle([(x_pos, 200), (x_pos + 280, 400)], fill='#475569')
        d3.ellipse([(x_pos + 230, 210), (x_pos + 265, 245)], fill='#FFFFFF')
        d3.text((x_pos + 240, 218), "❤️", fill='#EF4444', font_size=14)
        d3.text((x_pos + 20, 420), f"${2500000 + i*1200000}", fill='#006655', font_size=18)
        d3.text((x_pos + 20, 455), f"Residencia Favorita #{i+1}", fill='#19322F', font_size=14)
        d3.text((x_pos + 20, 485), "Beverly Hills, CA", fill='#5C706D', font_size=12)
        d3.rectangle([(x_pos + 20, 630), (x_pos + 260, 670)], fill='#006655')
        d3.text((x_pos + 70, 642), "Agendar Visita ->", fill='#FFFFFF', font_size=12)

    img3.save(os.path.join(scratch_dir, "cap_favorites.png"))

    # 4. Cap Admin DB
    img4 = Image.new('RGB', (1280, 800), color='#FBFDFB')
    d4 = ImageDraw.Draw(img4)
    d4.rectangle([(0, 0), (1280, 80)], fill='#FFFFFF')
    d4.text((40, 25), "LuxeEstate - Panel Admin", fill='#19322F', font_size=22)
    d4.text((40, 110), "Diagnóstico y Objetos de Base de Datos", fill='#19322F', font_size=28)
    d4.text((40, 150), "PostgreSQL (3FN) + MongoDB Atlas (10,000 Docs) + Redis Cache (120s)", fill='#5C706D', font_size=14)

    # 4 KPI cards
    kpis = [("PostgreSQL (3FN)", "200 Tuplas", "50 / tabla"), ("MongoDB NoSQL", "10,000 Docs", "properties_nosql"), ("Redis Cache", "Activo", "TTL 120s"), ("Restricciones", "6/6 Tipos", "PK, FK, UNIQUE...")]
    x = 40
    for k1, k2, k3 in kpis:
        d4.rectangle([(x, 190), (x + 280, 270)], fill='#FFFFFF', outline='#E2E8F0')
        d4.text((x + 20, 205), k1, fill='#5C706D', font_size=11)
        d4.text((x + 20, 225), k2, fill='#19322F', font_size=18)
        d4.text((x + 20, 250), k3, fill='#006655', font_size=11)
        x += 300

    # Table of Objects
    d4.rectangle([(40, 300), (1240, 750)], fill='#FFFFFF', outline='#E2E8F0')
    d4.rectangle([(40, 300), (1240, 340)], fill='#006655')
    d4.text((60, 312), "Tipo Objeto           Nombre en BD                        Función Operativa                                  Tablas Afectadas    Ubicación Motor", fill='#FFFFFF', font_size=12)

    objs = [
        ("Tabla Base", "properties", "Guarda el catálogo maestro de inmuebles", "properties", "Schema public"),
        ("Vista (View)", "vw_active_properties_summary", "Filtro rápido de inmuebles activos", "properties, profiles", "pg_views"),
        ("Disparador", "trg_properties_timestamp", "Actualiza fecha de modificación", "properties", "pg_trigger"),
        ("Procedimiento", "sp_schedule_visit", "Reserva de citas transaccionales", "appointments", "pg_proc"),
        ("Función", "fn_calculate_kpis()", "Retorna métricas y valor total", "properties", "pg_proc"),
        ("Índice B-Tree", "idx_properties_slug", "Búsqueda B-Tree en O(log N)", "properties", "pg_am")
    ]
    y = 360
    for o1, o2, o3, o4, o5 in objs:
        d4.text((60, y), f"{o1:<20} {o2:<30} {o3:<45} {o4:<20} {o5}", fill='#19322F', font_size=11)
        y += 60

    img4.save(os.path.join(scratch_dir, "cap_admin_db.png"))
    print("Logged-in UI screenshots generated perfectly!")

generate_clean_ui_mockups()
