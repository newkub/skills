# All Features

## Concepts

Bun SDK development รองรับฟีเจอร์ครบถ้วน รวมถึง TypeScript support, workspaces, security features, และ performance optimization ทั้งหมดนี้มาในตัวเดียวโดยไม่ต้องติดตั้งเครื่องมือเพิ่มเติม

## Best Practices

1. **ใช้ workspaces สำหรับ monorepo** - จัดการหลาย packages ได้อย่างมีประสิทธิภาพ
2. **ตั้งค่า trustedDependencies** - เพิ่มความปลอดภัยจาก postinstall scripts
3. **ใช้ Bun test runner** - ไม่ต้องติดตั้ง Jest หรือ Vitest
4. **ใช้ built-in bundler** - ไม่ต้องติดตั้ง Webpack หรือ Rollup
5. **ตั้งค่า dual package exports** - รองรับทั้ง ESM และ CommonJS

## Examples

```typescript
// Workspaces ใน package.json
{
  "workspaces": ["packages/*", "examples/*"]
}

// Trusted dependencies
{
  "trustedDependencies": ["@types/node", "typescript"]
}

// Dual exports
{
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "import": "./dist/index.mjs",
      "require": "./dist/index.js"
    }
  }
}
```
