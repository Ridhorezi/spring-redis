package com.redisspring.fib.config;

import org.redisson.api.RedissonClient;
import org.redisson.spring.cache.CacheConfig;
import org.redisson.spring.cache.RedissonSpringCacheManager;
import org.springframework.cache.CacheManager;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.TimeUnit;

@Configuration
public class RedissonCacheConfig {

    /*
     * Best practice untuk TTL caching:
     * - Data statis (Fibonacci): 60s - 5m
     * - Data database: 5 - 15 menit
     * - Session user login: 15 - 30 menit
     * - Produk/harga real-time: 30 - 60 detik
     * - Cache besar (e.g. katalog): 1 - 6 jam
     */

    @Bean
    public CacheManager cacheManager(RedissonClient redissonClient) {
        Map<String, CacheConfig> config = new HashMap<>();

        // Konfigurasi cache untuk "math:fib"
        config.put("math:fib", new CacheConfig(
                TimeUnit.SECONDS.toMillis(60),   // TTL: 60 detik
                TimeUnit.SECONDS.toMillis(30)    // Max Idle Time: 30 detik
        ));

        return new RedissonSpringCacheManager(redissonClient, config);
    }
}
