# Vitest Core Concepts

## Concepts
Vitest เป็น testing framework ที่สร้างมาจาก Vite ให้ประสิทธิภาพสูงและทำงานร่วมกับ ecosystem ของ Vite ได้อย่างลงตัว ใช้ ES modules และ TypeScript โดยตรง ไม่ต้องการ transpilation พิเศษ

**ความเร็ว:** Vitest ใช้ Vite's dev server สำหรับ HMR และ fast execution
**TypeScript:** Support TypeScript โดยไม่ต้อง setup พิเศษ
**ES Modules:** Native ES modules support ไม่ต้อง bundling ในระหว่างทดสอบ
**Compatibility:** API compatible กับ Jest ทำให้ย้ายมาใช้ง่าย

## Best Practices
1. ใช้ Vitest กับโปรเจกต์ที่ใช้ Vite อยู่แล้วเพื่อประสิทธิภาพสูงสุด
2. ตั้งค่า `globals: true` สำหรับความสะดวกในการเขียน tests
3. ใช้ `jsdom` หรือ `happy-dom` สำหรับ DOM testing
4. ตั้งค่า coverage สำหรับ monitoring code quality
5. ใช้ watch mode ในการพัฒนาเพื่อ feedback loop ที่เร็ว

## Examples
```typescript
// Basic test example
import { test, expect } from 'vitest'

test('adds 1 + 1 to equal 2', () => {
  expect(1 + 1).toBe(2)
})

// Async test example
test('async function', async () => {
  const result = await Promise.resolve(42)
  expect(result).toBe(42)
})

// DOM testing example
import { render, screen } from '@testing-library/vue'
import MyComponent from '@/MyComponent.vue'

test('renders component', () => {
  render(MyComponent)
  expect(screen.getByText('Hello')).toBeInTheDocument()
})
```
