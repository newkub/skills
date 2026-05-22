# TypeScript

TypeScript เป็น strongly typed programming language ที่ build บน JavaScript ให้ type safety, tooling, และ improved developer experience

## สรุปเนื้อหา

| หมวดหมู่ | ไฟล์ | คำอธิบาย |
|---------|------|----------|
| **Guide** | guide/getting-started.md | เริ่มต้นใช้งาน TypeScript |
| **Guide** | guide/configuration.md | การตั้งค่า tsconfig.json |
| **Guide** | guide/types.md | การใช้ types และ interfaces |
| **Guide** | guide/generics.md | การใช้ generics |
| **Guide** | guide/utility-types.md | Utility types |
| **Reference** | reference/compiler-options.md | Compiler options |
| **Reference** | reference/type-annotations.md | Type annotations |
| **Reference** | reference/advanced-types.md | Advanced types |

## คุณสมบัติหลัก

- **Type Safety**: Catch errors ที่ compile time
- **IntelliSense**: Better autocomplete และ tooling
- **Refactoring**: Safe code refactoring
- **Interfaces**: สำหรับ type definitions
- **Generics**: Reusable type-safe components
- **Utility Types**: Built-in type transformations
- **Decorators**: Metadata และ class transformation

## การใช้งาน

ใช้ TypeScript เมื่อ:
- ต้องการ type safety ใน JavaScript projects
- ต้องการ better tooling และ IDE support
- ต้องการ catch errors ก่อน runtime
- ต้องการ maintain large codebases
- ต้องการ better refactoring experience

## ตัวอย่างเริ่มต้น

```bash
# Install
npm install -D typescript
```

```typescript
// tsconfig.json
{
  "compilerOptions": {
    "strict": true,
    "target": "ES2020",
    "module": "ESNext"
  }
}
```

```typescript
// Basic types
const name: string = 'John'
const age: number = 30
const isActive: boolean = true

// Interface
interface User {
  id: number
  name: string
}

// Generic function
function identity<T>(value: T): T {
  return value
}
```
