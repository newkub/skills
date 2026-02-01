# Playwright Project Structure

## Description
โครงสร้างโปรเจกต์ Playwright ที่ถูกต้องช่วยให้จัดการ tests ได้ง่ายและ maintainable

## Structure
```
tests/
├── e2e/                    # E2E tests
│   ├── auth/              # Authentication tests
│   ├── dashboard/         # Dashboard tests
│   └── settings/          # Settings tests
├── fixtures/              # Test fixtures
│   ├── auth.fixture.ts    # Auth fixtures
│   └── data.fixture.ts    # Data fixtures
├── pages/                 # Page Object Models
│   ├── BasePage.ts        # Base page class
│   ├── LoginPage.ts       # Login page
│   └── DashboardPage.ts   # Dashboard page
├── utils/                 # Test utilities
│   ├── test-helpers.ts    # Helper functions
│   └── constants.ts       # Test constants
├── config/                # Configuration files
│   ├── base.config.ts     # Base config
│   └── ci.config.ts       # CI config
└── playwright.config.ts   # Main Playwright config
```

## Rules

### 1. ใช้โครงสร้างแบบ feature-based
จัดระเบียบ tests ตาม features ไม่ใช่ตาม file types

### 2. แยก Page Objects ออกจาก tests
เก็บ Page Objects ใน `pages/` แยกจาก test files

### 3. ใช้ fixtures สำหรับข้อมูลทดสอบ
จัดเก็บ test data ใน `fixtures/` แยกจาก logic

### 4. ตั้งชื่อไฟล์ตาม convention
- Test files: `*.spec.ts` หรือ `*.test.ts`
- Page Objects: `PascalCase.ts`
- Fixtures: `*.fixture.ts`

## Examples

### ✅ Good Structure
```
tests/
├── e2e/
│   ├── login.spec.ts
│   └── dashboard.spec.ts
├── pages/
│   ├── LoginPage.ts
│   └── DashboardPage.ts
└── fixtures/
    └── users.fixture.ts
```

### ❌ Bad Structure
```
tests/
├── login-test.ts
├── dashboard-test.ts
├── login-page.ts
└── dashboard-page.ts
```

## Anti-patterns

- ❌ ผสม Page Objects กับ test logic ในไฟล์เดียวกัน
- ❌ ใช้ hardcoded data ใน tests แทน fixtures
- ❌ ไม่มีโครงสร้างที่ชัดเจน วางไฟล์ไว้ทั่วไป
- ❌ ใช้ชื่อไฟล์ที่ไม่ตรงตาม convention

## Verification

1. ตรวจสอบว่าโครงสร้างโฟลเดอร์ตรงตามที่กำหนด
2. ตรวจสอบว่าชื่อไฟล์ตรงตาม convention
3. ทดสอบว่า imports ทำงานได้ถูกต้อง
4. ตรวจสอบว่า tests สามารถรันได้ด้วยโครงสร้างนี้
