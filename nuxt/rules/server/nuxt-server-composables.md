---
trigger: always_on
description: สร้างและจัดโครงสร้าง Nuxt Server Composables ตาม best practices
condition: |
  ใช้เมื่อต้องการสร้าง reusable server-side logic
  ใช้เมื่อต้องการ refactor logic จาก API handlers ไปยังส่วนที่ใช้ซ้ำได้
---

## 1. Naming & Structure (การตั้งชื่อและโครงสร้าง)

- **File Location**: สร้างไฟล์ composable ทั้งหมดภายใน `~/server/composables` directory.
- **File Naming**: ตั้งชื่อไฟล์ด้วย `camelCase` และขึ้นต้นด้วย `use` (เช่น `useAuth.ts`, `useTaskManagement.ts`).
- **Function Naming**: ชื่อฟังก์ชัน composable ควรตรงกับชื่อไฟล์ (เช่น `export function useAuth() { ... }`).
- **Manual Imports**: Server composables **ไม่ถูก** auto-import, ต้อง import เองเมื่อต้องการใช้งาน

---

## 2. Core Principles & Implementation (หลักการและการสร้าง)

- **Purpose**: Server composables คือฟังก์ชันธรรมดาที่ช่วยจัดระเบียบและ re-use server-side logic. **ไม่ใช่** reactive composables เหมือนฝั่ง client.
- **Single Responsibility**: Composable หนึ่งตัวควรมีหน้าที่รับผิดชอบเพียงอย่างเดียว
- **Return Value**: Composable ควร return object ที่ประกอบด้วยฟังก์ชันต่างๆ ที่เกี่ยวข้อง
- **Type Safety**: ใช้ TypeScript เพื่อกำหนด type ของ arguments และ return values ให้ชัดเจน
- **Error Handling**: ใช้ `try-catch` และ throw error ด้วย `createError` จาก `h3` เพื่อให้ Nuxt จัดการ error response ได้อย่างเหมาะสม

---

## 3. Usage Example (ตัวอย่างการใช้งาน)

- **Creating a Composable**:

````typescript
// server/composables/useTaskLogic.ts
import { createError } from 'h3'

export const useTaskLogic = () => {
  const getTaskById = async (taskId: string) => {
    if (!taskId) {
      throw createError({ statusCode: 400, statusMessage: 'Task ID is required' })
    }
    // ... logic to fetch task from database
    const task = { id: taskId, title: 'My Task' }
    if (!task) {
      throw createError({ statusCode: 404, statusMessage: 'Task not found' })
    }
    return task
  }

  return { getTaskById }
}
````

- **Using in an API Route**:

````typescript
// server/api/tasks/[id].get.ts
import { useTaskLogic } from '~/server/composables/useTaskLogic'

export default defineEventHandler(async (event) => {
  const taskId = getRouterParam(event, 'id')
  const { getTaskById } = useTaskLogic()

  const task = await getTaskById(taskId)
  return task
})
````
