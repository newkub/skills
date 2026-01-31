---
trigger: always_on
description: กำหนดแนวทางการตั้งค่า package.json สำหรับโปรเจกต์ Nuxt
condition: |
  ใช้เมื่อสร้างโปรเจกต์ Nuxt ใหม่
  ใช้เมื่อต้องการตรวจสอบหรือปรับปรุง package.json
---

## 1. Core Properties (คุณสมบัติหลัก)

- **`name`**: ชื่อของโปรเจกต์ (ควรเป็น `kebab-case`)
- **`private`**: ตั้งค่าเป็น `true` เพื่อป้องกันการ publish โดยไม่ตั้งใจ
- **`type`**: ตั้งค่าเป็น `"module"` เพื่อใช้งาน ES Modules
- **`packageManager`**: ระบุ package manager ที่ใช้ในโปรเจกต์ (แนะนำ `"bun@latest"`)

---

## 2. Scripts (สคริปต์)

- **Standard Scripts**: กำหนด scripts พื้นฐานสำหรับการพัฒนา, build, test, และ linting

````json
{
  "scripts": {
    "dev": "nuxt dev",
    "build": "nuxt build",
    "generate": "nuxt generate",
    "preview": "nuxt preview",
    "postinstall": "nuxt prepare",
    "lint": "eslint .",
    "lint:fix": "eslint . --fix",
    "test": "vitest"
  }
}
````

---

## 3. Dependencies (การจัดการ Dependencies)

- **`dependencies`**: สำหรับ packages ที่จำเป็นในการทำงานของแอปพลิเคชันบน production (เช่น `@pinia/nuxt`)
- **`devDependencies`**: สำหรับ packages ที่ใช้เฉพาะในระหว่างการพัฒนา (เช่น `nuxt`, `typescript`, `eslint`, `vitest`)
