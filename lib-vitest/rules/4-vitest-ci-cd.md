# Vitest CI/CD

## Description
ตั้งค่า CI/CD pipeline สำหรับการทดสอบอัตโนมัติด้วย Vitest

## Examples
```yaml
# .github/workflows/test.yml
name: Test
on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    
    strategy:
      matrix:
        node-version: [18, 20]
    
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: ${{ matrix.node-version }}
          cache: 'npm'
      
      - run: npm ci
      - run: npm run test:run
      - run: npm run test:coverage
      
      - name: Upload coverage
        uses: codecov/codecov-action@v3
        with:
          file: ./coverage/lcov.info
```

## Anti-patterns
❌ ไม่ทดสอบกับ Node.js versions หลายเวอร์ชัน
❌ ไม่ upload coverage reports
❌ ไม่ใช้ npm cache

## Rules
1. ตั้งค่า GitHub Actions สำหรับ multiple Node.js versions
2. รัน tests แบบ non-watch ใน CI
3. สร้างและ upload coverage reports
4. ใช้ npm cache สำหรับความเร็ว
5. ทดสอบทั้ง push และ pull request events

## Verification
1. ตรวจสอบว่า CI pipeline ทำงาน
2. ทดสอบด้วยการสร้าง pull request
3. ตรวจสอบว่า coverage ถูก upload แล้ว
