---
trigger: always_on
description: สร้างและจัดโครงสร้าง Nuxt Server Middleware ตาม best practices
condition: |
  ใช้เมื่อต้องการ implement cross-cutting concerns สำหรับ server routes
  เช่น authentication, logging, หรือ CORS
---

## 1. Naming & Structure (การตั้งชื่อและโครงสร้าง)

- **File Location**: สร้างไฟล์ middleware ทั้งหมดภายใน `~/server/middleware` directory.
- **File Naming**: ตั้งชื่อไฟล์ด้วย `kebab-case` (เช่น `auth.ts`, `request-logger.ts`). Nuxt จะ auto-load middleware ทั้งหมดในไดเรกทอรีนี้ตามลำดับตัวอักษรของชื่อไฟล์

---

## 2. Implementation (การสร้าง Middleware)

- **`defineEventHandler`**: ทุกไฟล์ middleware ควร export default function ที่ห่อด้วย `defineEventHandler`
- **Execution**: Middleware จะทำงานกับ **ทุก** server request ที่เข้ามา (API routes, server routes, และ page renders)
- **Pass Through**: หาก middleware ไม่ได้สิ้นสุด request (โดยการ throw error หรือ return response), มันจะส่งต่อ `event` ไปยัง handler ถัดไป
- **Context**: สามารถเพิ่มข้อมูลเข้าไปใน `event.context` เพื่อส่งต่อไปยัง API handlers ได้ (เช่น `event.context.user`)
- **Early Termination**: หากต้องการหยุดการประมวลผล request, ให้ throw error ด้วย `createError` หรือ return response โดยตรง

---

## 3. Common Patterns (รูปแบบการใช้งานทั่วไป)

- **Authentication**: ตรวจสอบ authentication token และแนบข้อมูล user ไปกับ `event.context`
- **Logging**: บันทึกข้อมูล request (เช่น URL, method, IP address) และ response time
- **CORS**: กำหนด CORS headers สำหรับ API routes
- **Error Handling**: สร้าง middleware ที่จัดการ error ทั้งหมด (ควรตั้งชื่อไฟล์ให้ทำงานเป็นลำดับสุดท้าย เช่น `error-handler.ts`)

---

## 4. Usage Example (ตัวอย่างการใช้งาน)

- **Authentication Middleware**:

````typescript
// server/middleware/auth.ts
import { createError } from 'h3'

export default defineEventHandler(async (event) => {
  // Allow access to public routes
  if (event.path.startsWith('/api/public')) {
    return
  }

  // Example: Validate session or token
  const user = await getUserFromSession(event)

  if (!user) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized',
    })
  }

  // Attach user to the event context
  event.context.user = user
})
````
