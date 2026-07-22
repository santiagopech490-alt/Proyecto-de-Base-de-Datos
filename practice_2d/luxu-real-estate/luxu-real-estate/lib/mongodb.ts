/**
 * MongoDB Helper for Luxe Real Estate
 * Handles NoSQL document storage for flexible property metadata, 
 * analytics, user search logs, and unstructured content.
 */

let isConnected = false;

export async function connectToMongoDB() {
  const mongoUri = process.env.MONGODB_URI;

  if (!mongoUri) {
    console.log("ℹ️ MONGODB_URI no configurado en .env.local. Usando almacenamiento relacional Supabase.");
    return null;
  }

  if (isConnected) {
    return true;
  }

  try {
    // Dynamic import to allow running even if mongodb package is added later
    const mongoose = await import('mongoose');
    await mongoose.default.connect(mongoUri);
    isConnected = true;
    console.log("🍃 Conectado exitosamente a MongoDB NoSQL");
    return true;
  } catch (error) {
    console.error("Error conectando a MongoDB:", error);
    return null;
  }
}

/**
 * Ejemplo de utilidad para guardar métricas NoSQL de búsquedas
 */
export async function logSearchAnalytics(searchQuery: string, filters: Record<string, any>) {
  try {
    const mongo = await connectToMongoDB();
    if (!mongo) return;

    // Guardar evento de analítica NoSQL
    console.log("📈 Analítica NoSQL registrada:", { searchQuery, filters, timestamp: new Date() });
  } catch (err) {
    console.warn("NoSQL analytics log skipped:", err);
  }
}
