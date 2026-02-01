# Core Concepts

## Concepts
Bun เป็น JavaScript runtime ที่รวมเครื่องมือทั้งหมดไว้ในตัวเดียว รวมถึง package manager, bundler, test runner และ runtime ที่เร็วกว่า Node.js ถึง 10-20 เท่า สำหรับ SDK development ควรใช้ประโยชน์จากความเร็วและความสามารถในการรัน TypeScript โดยตรง

## Best Practices
1. **ใช้ TypeScript แบบ zero-config** - Bun รัน TypeScript ได้โดยตรงไม่ต้อง compile
2. **ใช้ Bun package manager** - ติดตั้ง dependencies เร็วกว่า npm ถึง 20 เท่า
3. **ออกแบบเป็น modules** - แยกส่วนต่างๆ เพื่อให้ tree-shaking ทำงานได้ดี
4. **ใช้ native fetch** - Bun มี fetch API ในตัวและเร็วกว่า

## Examples
```typescript
// รัน TypeScript โดยตรง
bun run src/index.ts

// ติดตั้ง dependencies
bun add lodash axios

// รัน tests
bun test

// Build project
bun build src/index.ts --outdir dist
```
