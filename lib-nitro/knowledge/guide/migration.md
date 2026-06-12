# Migration

## Migrating from Express

### Key Differences

- **Routes** - Nitro ใช้ file-based routing
- **Middleware** - Nitro ใช้ middleware แบบ hook-based
- **Deployment** - Nitro รองรับ multiple platforms

### Migration Steps

1. Convert Express routes ไปเป็น Nitro API routes
2. Convert Express middleware ไปเป็น Nitro middleware
3. Update configuration
4. Test deployment

## Migrating from Nuxt

Nitro เป็น server engine ของ Nuxt:
- **Extract Server** - extract server logic จาก Nuxt
- **Use Nitro Directly** - ใช้ Nitro โดยตรง
- **Keep Compatibility** - maintain Nuxt compatibility
