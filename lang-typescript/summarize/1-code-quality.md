## Code Quality

สรุปแนวทางการรักษาคุณภาพโค้ด TypeScript

| หมวดหมู่ | แนวทาง | ตัวอย่าง | ผลกระทบ |
|-----------|---------|-----------|----------|
| **Type Safety** | หลีกเลี่ยง `any` | `function processData(data: unknown) { ... }` | ลด runtime errors |
| **Type Safety** | ใช้ strict mode | `"strict": true` ใน tsconfig | จับ errors ตอน compile |
| **Naming** | PascalCase สำหรับ types | `interface UserProfile {}` | อ่านง่าย ถูก convention |
| **Naming** | camelCase สำหรับ variables | `const userName = "john"` | สอดคล้องกับ JavaScript |
| **Functions** | กำหนด return types | `function calculate(): number {}` | ชัดเจน  predictability |
| **Functions** | ใช้ generics เมื่อจำเป็น | `function identity<T>(arg: T): T {}` | Reusable และ type-safe |
| **Interfaces** | ใช้ interfaces สำหรับ objects | `interface User { id: number; }` | กำหนด contract ชัดเจน |
| **Interfaces** | ใช้ optional properties | `interface User { id: number; name?: string; }` | Flexibility ในการใช้งาน |
| **Error Handling** | ใช้ Result types | `type Result<T> = { success: true; data: T } | { success: false; error: string }` | Type-safe error handling |
| **Error Handling** | ใช้ type guards | `function isString(value: unknown): value is string {}` | Runtime type checking |

### หลักการสำคัญ

1. **Explicit is better than implicit** - กำหนด types ชัดเจนเสมอ
2. **Consistency** - ใช้ naming conventions แบบเดียวกันทั้ง project
3. **Type safety first** - ไม่ยอมละทิ้ง type safety เพื่อความสะดวก
4. **Documentation** - เขียน comments สำหรับ complex types
5. **Testing** - เขียน tests สำหรับ type guards และ validation logic
