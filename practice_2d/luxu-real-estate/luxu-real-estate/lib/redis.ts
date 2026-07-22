/**
 * Redis Cache Service for Luxe Real Estate
 * Provides ultra-fast (<5ms) in-memory caching for properties, 
 * search query results, and rate limiting.
 */

// Memory fallback cache in case Redis server is not yet connected
const memoryCache = new Map<string, { value: any; expiresAt: number }>();

export const redisCache = {
  /**
   * Get cached item by key
   */
  async get<T>(key: string): Promise<T | null> {
    const redisUrl = process.env.UPSTASH_REDIS_REST_URL;
    const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN;

    if (redisUrl && redisToken) {
      try {
        const { Redis } = await import('@upstash/redis');
        const redis = new Redis({ url: redisUrl, token: redisToken });
        const data = await redis.get<T>(key);
        if (data) {
          console.log(`⚡ [Redis Cache HIT] para la clave: ${key}`);
          return data;
        }
      } catch (err) {
        console.warn("Redis no disponible, usando fallback:", err);
      }
    }

    // Fallback in-memory cache
    const cached = memoryCache.get(key);
    if (cached && cached.expiresAt > Date.now()) {
      return cached.value as T;
    }
    return null;
  },

  /**
   * Set cached item with TTL (seconds)
   */
  async set(key: string, value: any, ttlSeconds: number = 300): Promise<void> {
    const redisUrl = process.env.UPSTASH_REDIS_REST_URL;
    const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN;

    if (redisUrl && redisToken) {
      try {
        const { Redis } = await import('@upstash/redis');
        const redis = new Redis({ url: redisUrl, token: redisToken });
        await redis.set(key, value, { ex: ttlSeconds });
        return;
      } catch (err) {
        console.warn("Error guardando en Redis:", err);
      }
    }

    // Fallback memory cache
    memoryCache.set(key, {
      value,
      expiresAt: Date.now() + ttlSeconds * 1000,
    });
  }
};
