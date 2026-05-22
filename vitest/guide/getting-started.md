# Getting Started with Vitest

## การติดตั้ง

ติดตั้ง Vitest เป็น dev dependency:

```bash
npm install -D vitest
# หรือ
pnpm add -D vitest
# หรือ
yarn add -D vitest
```

## การตั้งค่าพื้นฐาน

สร้างไฟล์ `vitest.config.ts`:

```typescript
import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  test: {
    // ตัวเลือก configuration
  },
})
```

หรือใช้ `vite.config.ts` หากมีอยู่แล้ว:

```typescript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  test: {
    // Vitest options
  },
})
```

## การเขียน test แรก

สร้างไฟล์ test ในโฟลเดอร์ `tests/` หรือใช้ pattern `*.test.ts`:

```typescript
// math.test.ts
import { describe, it, expect } from 'vitest'

import { add } from './math'

describe('add', () => {
  it('should add two numbers correctly', () => {
    expect(add(1, 2)).toBe(3)
  })

  it('should handle negative numbers', () => {
    expect(add(-1, 1)).toBe(0)
  })
})
```

## การรัน tests

เพิ่ม scripts ใน `package.json`:

```json
{
  "scripts": {
    "test": "vitest",
    "test:run": "vitest run",
    "test:ui": "vitest --ui",
    "test:coverage": "vitest run --coverage"
  }
}
```

รัน tests:

```bash
npm run test        # Watch mode
npm run test:run    # Run once
npm run test:ui     # UI dashboard
npm run test:coverage # With coverage
```

## การใช้งานร่วมกับ TypeScript

Vitest รองรับ TypeScript โดยอัตโนมัติผ่าน Vite's transformation:

```typescript
// user.test.ts
import { describe, it, expect } from 'vitest'

interface User {
  id: number
  name: string
}

describe('User', () => {
  it('should have correct type', () => {
    const user: User = { id: 1, name: 'John' }
    expect(user.id).toBeTypeOf('number')
  })
})
```

## การตั้งค่า tsconfig

เพิ่ม `vitest/globals` ใน `tsconfig.json` เพื่อใช้ globals โดยไม่ต้อง import:

```json
{
  "compilerOptions": {
    "types": ["vitest/globals"]
  }
}
```

จากนั้นสามารถใช้ globals โดยตรง:

```typescript
describe('test', () => {
  it('works', () => {
    expect(true).toBe(true)
  })
})
```
