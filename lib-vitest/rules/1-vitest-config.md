# Vitest Configuration

## Description
ตั้งค่าไฟล์ `vitest.config.ts` ให้เหมาะสมกับโปรเจกต์ TypeScript และ JavaScript

## Examples
```typescript
// vitest.config.ts
import { defineConfig } from 'vitest/config'
import { resolve } from 'path'

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'src/test/',
        '**/*.d.ts',
      ],
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
})
```

## Anti-patterns
❌ ไม่ตั้งค่า environment สำหรับ DOM testing
❌ ไม่ exclude ไฟล์ที่ไม่ต้องการ test coverage
❌ ใช้ absolute paths แทน relative paths

## Rules
1. ตั้งค่า `vitest.config.ts` ที่ root ของโปรเจกต์
2. ใช้ `jsdom` environment สำหรับ DOM testing
3. ตั้งค่า `globals: true` สำหรับใช้ global APIs
4. ตั้งค่า coverage ให้ exclude ไฟล์ที่ไม่ต้องการ
5. ใช้ path aliases สำหรับความสะดวกในการ import

## Verification
1. ตรวจสอบว่า `vitest.config.ts` มีอยู่ที่ root
2. ทดสอบด้วย `npx vitest run`
3. ตรวจสอบว่า TypeScript types ทำงานได้
