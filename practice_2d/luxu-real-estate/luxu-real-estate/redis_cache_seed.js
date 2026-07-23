// ========================================================================
// REDIS CLAVE-VALOR CACHE SEED SCRIPT
// ========================================================================

// 1. Almacenamiento en Caché del Catálogo Completo (TTL: 120s)
SET all_properties_cache '[{"id":"1","title":"The Glass Pavilion","price":5250000},{"id":"2","title":"Azure Heights Penthouse","price":3800000}]' EX 120

// 2. Registro de Sesiones Activas en Hash
HSET session:user123 role "Admin" full_name "Santiago Pech" active true EXPIRE session:user123 3600

// 3. Métricas en Tiempo Real (Contador de Consultas)
INCR metrics:total_property_searches

print("Caché inicial de Redis configurada.");
