# How It Works

## Purpose

อธิบายการทำงานภายในของ Zod เพื่อให้เข้าใจกลไกและ flow การทำงาน

## Scope

- Schema Definition Flow
- Parsing Pipeline
- Error Handling Mechanism
- Type Inference Mechanism
- Transformation Pipeline

## Schema Definition Flow

Zod ใช้ chainable API เพื่อสร้าง schemas แบบ declarative

```
┌─────────────────────────────────────────────────────────────┐
│                    Schema Definition                        │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   z.object({                                                │
│     name: z.string(),        ──┐                           │
│     age: z.number(),          │ Primitive schemas          │
│     email: z.email(),         ──┘                           │
│     role: z.enum(["admin",    │ Enum schema                │
│              "user"])         ──┘                           │
│   })                          ──┘ Object schema             │
│                                                             │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼ infer()
┌─────────────────────────────────────────────────────────────┐
│                  TypeScript Type                            │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   type User = {                                             │
│     name: string;                                           │
│     age: number;                                            │
│     email: string;                                          │
│     role: "admin" | "user";                                 │
│   }                                                         │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

## Parsing Pipeline

เมื่อเรียก `.parse()` หรือ `.safeParse()` Zod จะทำการ validate ข้อมูลผ่าน pipeline หลายขั้นตอน

```
 Input (unknown)                            Output (typed)
      │                                         ▲
      │    ┌────────────────────────────────────┤
      │    │                                    │
      ▼    ▼                                    │
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  Coercion    │ ──> │  Validation  │ ──> │ Transform   │
│  (optional)  │     │  (required) │     │ (optional)  │
└──────────────┘     └──────────────┘     └──────────────┘
      │                    │                    │
      │   z.coerce.*       │   z.string()       │   z.transform()
      │   z.preprocess()    │   z.number()       │   .pipe()
```

### ขั้นตอนการทำงาน

| ขั้นตอน | คำอธิบาย | Example |
|---------|----------|---------|
| **1. Coercion** | แปลง input เป็น type ที่ถูกต้อง | `z.coerce.number()` แปลง `"42"` เป็น `42` |
| **2. Validation** | ตรวจสอบว่า data ผ่านเงื่อนไขหรือไม่ | `z.string().min(1).email()` |
| **3. Transform** | แปลง data เป็นรูปแบบที่ต้องการ | `z.string().transform(s => s.trim())` |
| **4. Default** | ใส่ค่า default ถ้า input เป็น undefined | `z.string().default("unknown")` |
| **5. Catch** | ใส่ค่า fallback ถ้า validation ล้มเหลว | `z.number().catch(0)` |

## safeParse vs parse

Zod มี 2 methods หลักสำหรับ parsing:

```
┌─────────────────────────────────────────────────────────────┐
│                    .parse(data)                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   Success ──────────> Return parsed value                   │
│       │                                                      │
│       │ (throw on error)                                    │
│       ▼                                                      │
│   Error ───────────> Throw ZodError                         │
│                                                             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                  .safeParse(data)                           │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   Success ──────────> Return { success: true, data: value } │
│       │                                                      │
│       │ (never throw)                                       │
│       ▼                                                      │
│   Error ───────────> Return { success: false, error }       │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

## Error Handling Mechanism

ZodError มีโครงสร้างที่ชัดเจน ประกอบด้วย array ของ issues:

```typescript
import { z } from "zod";

const schema = z.object({
  email: z.string().email(),
  age: z.number().min(18),
});

const result = schema.safeParse({ email: "invalid", age: 15 });

if (!result.success) {
  console.log(result.error.issues);
  // [
  //   {
  //     "code": "invalid_string",
  //     "validation": "email",
  //     "path": ["email"],
  //     "message": "Invalid email"
  //   },
  //   {
  //     "code": "too_small",
  //     "minimum": 18,
  //     "type": "number",
  //     "path": ["age"],
  //     "message": "Number must be greater than or equal to 18"
  //   }
  // ]
}
```

## Type Inference Mechanism

Zod ใช้ TypeScript generics เพื่อ infer type จาก schema:

```
┌─────────────────────────────────────────────────────────────┐
│               Type Inference Utilities                     │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   z.infer<typeof schema>      ──> สร้าง TypeScript type     │
│   z.input<typeof schema>      ──> Input type (ก่อน parse)  │
│   z.output<typeof schema>     ──> Output type (หลัง parse) │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

```typescript
const UserSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1),
  age: z.number().optional(),
  role: z.enum(["admin", "user"]),
});

type User = z.infer<typeof UserSchema>;
// {
//   id: string;
//   name: string;
//   age?: number;
//   role: "admin" | "user";
// }

type UserInput = z.input<typeof UserSchema>;
// {
//   id: string;
//   name: string;
//   age?: number | undefined;
//   role: "admin" | "user";
// }
```

## Refinement Pipeline

`.refine()` และ `.superRefine()` ช่วยให้สร้าง validation ที่กำหนดเองได้:

```
 Input                    Validation                    Output
   │                         │                           ▲
   ▼                         ▼                           │
┌──────────────┐      ┌──────────────┐           ┌──────────────┐
│   .refine()  │ ───> │  .superRefine()│ ───────> │   z.NEVER    │
│  (sync only) │      │  (sync/async) │           │  (on error)   │
└──────────────┘      └──────────────┘           └──────────────┘
                            │
                            ▼ addIssue()
                      ┌──────────────┐
                      │   Context    │
                      │   .issues    │
                      └──────────────┘
```

## Summary

| กลไก | ประโยชน์ |
|------|---------|
| **Chainable API** | เขียน schema ได้ declarative และ readable |
| **Immutable** | ไม่มี side effects, ง่ายต่อการ test |
| **Type Inference** | TypeScript types อัตโนมัติจาก schemas |
| **Error Details** | Error messages ที่ละเอียด ช่วย debug ได้ง่าย |
| **safeParse** | ไม่ throw exceptions, handle errors ได้สบาย |
| **Composability** | สร้าง schemas ที่ซับซ้อนจาก simple blocks |