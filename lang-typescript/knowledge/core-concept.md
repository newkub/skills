## Core Concepts

แนวคิดพื้นฐานของ TypeScript ที่ต้องเข้าใจ

### Concepts
- **Type System**: ระบบ types ที่เพิ่มเข้ามาใน JavaScript
- **Static Typing**: การตรวจสอบ types ตอน compile time
- **Type Inference**: การ推断 types โดยอัตโนมัติ
- **Interfaces**: การกำหนดรูปแบบของ objects
- **Generics**: การสร้าง reusable components ที่ทำงานกับหลาย types

### Key Points
1. TypeScript เป็น superset ของ JavaScript
2. ทำงานเป็น layer บน JavaScript
3. คอมไพล์เป็น JavaScript ปกติ
4. ให้ type safety และ tooling ที่ดีขึ้น

### Examples
```typescript
// Type inference
let message = "Hello"; // string

// Explicit type
let count: number = 42;

// Interface
interface Person {
  name: string;
  age: number;
}

// Generic
function identity<T>(arg: T): T {
  return arg;
}
```
