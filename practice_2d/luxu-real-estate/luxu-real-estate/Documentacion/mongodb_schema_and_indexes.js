// ========================================================================
// MONGODB NOSQL SCHEMA VALIDATOR & INDEX CREATION SCRIPT
// COLECCIÓN: properties_nosql (10,000 DOCUMENTOS)
// ========================================================================

use luxe_real_estate_nosql;

// 1. CREACIÓN DE COLECCIÓN CON VALIDACIÓN JSON SCHEMA
db.createCollection("properties_nosql", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["slug", "title", "price", "status", "specs", "location"],
      properties: {
        slug: {
          bsonType: "string",
          description: "URL amigable única de la propiedad (Requerido)"
        },
        title: {
          bsonType: "string",
          description: "Título o nombre de la residencia (Requerido)"
        },
        price: {
          bsonType: ["int", "double", "number", "long"],
          minimum: 0,
          description: "Precio en USD mayor o igual a 0 (Requerido)"
        },
        status: {
          enum: ["ACTIVE", "FOR SALE", "FOR RENT", "PENDING"],
          description: "Estado comercial permitido"
        },
        specs: {
          bsonType: "object",
          required: ["beds", "baths", "sqft"],
          properties: {
            beds: { bsonType: "int", minimum: 0 },
            baths: { bsonType: ["double", "number", "int"], minimum: 0 },
            sqft: { bsonType: "int", minimum: 1 }
          }
        },
        location: {
          bsonType: "object",
          required: ["city_state", "address"],
          properties: {
            city_state: { bsonType: "string" },
            address: { bsonType: "string" },
            coordinates: {
              bsonType: "object",
              properties: {
                lat: { bsonType: ["double", "number"] },
                lng: { bsonType: ["double", "number"] }
              }
            }
          }
        }
      }
    }
  }
});

// 2. CREACIÓN DE ÍNDICES EN MONGODB
// A) Índice Único en slug para acelerar búsquedas directas
db.properties_nosql.createIndex({ "slug": 1 }, { unique: true, name: "idx_unique_slug" });

// B) Índice Compuesto en Precio y Estado para filtrados frecuentes
db.properties_nosql.createIndex({ "status": 1, "price": 1 }, { name: "idx_status_price" });

// C) Índice Textual (Full-Text Search) en Título y Ubicación
db.properties_nosql.createIndex({ "title": "text", "location.city_state": "text" }, { name: "idx_text_search" });

// D) Índice Geoespacial 2DSphere para búsquedas por proximidad
db.properties_nosql.createIndex({ "location.coordinates": "2dsphere" }, { name: "idx_spatial_coords" });

print("Esquema e índices de MongoDB configurados correctamente.");
