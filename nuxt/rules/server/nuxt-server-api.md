---
trigger: always_on
description: สร้างและจัดโครงสร้าง Nuxt Server API routes ตาม best practices
condition: |
  ใช้เมื่อต้องการสร้าง API endpoint ใหม่ใน Nuxt
  ใช้เมื่อต้องการ refactor API endpoint ที่มีอยู่
---

## 1. Routing & File Structure (การจัดการ Route และโครงสร้างไฟล์)

- **File-based Routing**: Nitro (Nuxt's server engine) ใช้ระบบ file-based routing จาก `~/server/api`
- **Folder Structure**: จัดกลุ่ม API routes ที่เกี่ยวข้องกันไว้ใน sub-folder (เช่น `~/server/api/users/`)
- **HTTP Methods**: ตั้งชื่อไฟล์ตาม HTTP method ที่ handle (เช่น `index.get.ts`, `[id].post.ts`)
- **Dynamic Routes**: ใช้ `[bracket]` สำหรับ dynamic segments (เช่น `~/server/api/tasks/[id].get.ts`)

---

## 2. API Handler Implementation (การสร้าง API Handler)

- **`defineEventHandler`**: ทุกไฟล์ API ควร export default function ที่ห่อด้วย `defineEventHandler`
- **Request Body**: ใช้ `readBody(event)` เพื่ออ่าน request body
- **Query Parameters**: ใช้ `getQuery(event)` เพื่อเข้าถึง query parameters
- **Route Parameters**: ใช้ `getRouterParam(event, 'paramName')` เพื่อเข้าถึง dynamic route parameters
- **Response**: Return JSON object โดยตรง Nitro จะจัดการ serialization และตั้งค่า `Content-Type` header ให้เอง
- **Error Handling**: ใช้ `createError` เพื่อ throw HTTP errors พร้อม status code ที่เหมาะสม

````typescript
// server/api/tasks/[id].get.ts
import { createError } from 'h3'

export default defineEventHandler(async (event) => {
  const taskId = getRouterParam(event, 'id')

  // Example: fetching a task
  const task = await getTaskById(taskId)

  if (!task) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Task not found',
    })
  }

  return task
})
````

---

## 3. Input Validation (การตรวจสอบ Input)

- **Validation Library**: ใช้ library เช่น `zod` สำหรับการ validate input ที่ซับซ้อนและสร้าง schema ที่ชัดเจน
- **Error Response**: หาก validation ไม่ผ่าน, ให้ throw `400 Bad Request` error พร้อมรายละเอียด

````typescript
// server/api/tasks.post.ts
import { z } from 'zod'

const TaskSchema = z.object({
  title: z.string().min(1),
  completed: z.boolean().optional(),
})

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const result = TaskSchema.safeParse(body)

  if (!result.success) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid input' })
  }

  // ... create task logic
})
````

---

## 4. Security (ความปลอดภัย)

- **Authentication**: ตรวจสอบ authentication (เช่น JWT, session) ใน server middleware หรือภายใน API handler
- **Authorization**: ตรวจสอบสิทธิ์การเข้าถึง resource ของ user
- **CORS**: กำหนดค่า CORS ผ่าน `routeRules` ใน `nuxt.config.ts` หากต้องการให้ API ถูกเรียกจาก domain อื่น
