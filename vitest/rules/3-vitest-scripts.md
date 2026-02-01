# Vitest Scripts

## Description
ตั้งค่า npm scripts ใน `package.json` สำหรับการทดสอบด้วย Vitest

## Examples
```json
{
  "scripts": {
    "test": "vitest",
    "test:run": "vitest run",
    "test:coverage": "vitest run --coverage",
    "test:ui": "vitest --ui",
    "test:watch": "vitest --watch",
    "test:related": "vitest related"
  },
  "devDependencies": {
    "vitest": "^1.0.0",
    "@vitest/ui": "^1.0.0",
    "@vitest/coverage-v8": "^1.0.0",
    "jsdom": "^23.0.0"
  }
}
```

## Anti-patterns
❌ ไม่มี script สำหรับ CI/CD
❌ ไม่ติดตั้ง coverage provider
❌ ไม่มี script สำหรับ watch mode

## Rules
1. เพิ่ม `test` script สำหรับการทดสอบแบบ watch
2. เพิ่ม `test:run` script สำหรับ CI/CD
3. เพิ่ม `test:coverage` script สำหรับ coverage report
4. เพิ่ม `test:ui` script สำหรับ visual testing
5. ติดตั้ง dependencies ที่จำเป็นทั้งหมด

## Verification
1. ตรวจสอบว่าทุก script ทำงานได้
2. ทดสอบด้วย `npm run test:run`
3. ตรวจสอบว่า coverage report สร้างได้
