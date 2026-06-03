# Key Concept

## What is Zod?

Zod เป็น TypeScript-first schema validation library ที่มาพร้อม runtime type checking พร้อม type inference แบบครบวงจร ช่วยให้นักพัฒนาสร้าง schema สำหรับ validate data ได้ตั้งแต่ string ธรรมดาไปจนถึง nested objects ที่ซับซ้อน

## Core Features

| Feature | Description |
|---------|-------------|
| **Type Inference** | สร้าง TypeScript types อัตโนมัติจาก schemas |
| **Schema Validation** | ตรวจสอบข้อมูลครบถ้วนพร้อม error messages ที่ละเอียด |
| **Composable** | สร้าง schemas ที่ซับซ้อนจาก building blocks ง่ายๆ |
| **Zero Dependencies** | Library ขนาดเล็ก ไม่ต้องพึ่งพา dependencies อื่น |
| **Immutable API** | methods ทั้งหมดคืนค่า instances ใหม่ |
| **TypeScript-first** | Full type safety ตั้งแต่ต้น |
| **Coercion** | แปลงข้อมูลเป็น type ที่ต้องการอัตโนมัติ |
| **JSON Schema** | แปลง schemas เป็น JSON Schema มาตรฐาน |

## Key Principles

- **Runtime validation** - ตรวจสอบ data ตอน runtime ให้ตรงกับ TypeScript types
- **Static type inference** - สร้าง types จาก schemas อัตโนมัติ
- **Composable schemas** - สร้าง types ที่ซับซ้อนจาก blocks ง่ายๆ
- **Detailed errors** - ให้ error messages ที่ชัดเจน ใช้งานได้จริง
- **Immutable methods** - ทุก transformations คืนค่า instances ใหม่

## Architecture

```
                    ZodSchema
                        │
        ┌───────────────┼───────────────┐
        │               │               │
   Primitives      Composables    Transformations
        │               │               │
   z.string()      z.object()     z.transform()
   z.number()      z.array()      z.preprocess()
   z.boolean()     z.union()      z.coerce.*
   z.date()        z.enum()      .pipe()
   z.literal()     z.discriminatedUnion()
```

## When to Use

- API request/response validation
- Form data validation
- Configuration validation
- Environment variables validation
- Type narrowing with discriminated unions
- Data transformation (coercion)
- Input sanitization and transformation

## Comparison

| Feature | Zod v4 | Yup | Joi |
|---------|--------|-----|-----|
| TypeScript | First-class | Limited | Limited |
| Bundle size | ~12KB | ~17KB | ~55KB |
| Immutable | Yes | No | No |
| Tree-shaking | Yes | Partial | No |
| Error format | ZodError (detailed) | Generic | Generic |
| Coercion | Built-in | Via transform | Via convert |
| JSON Schema | Yes | No | No |
| Codecs | Yes (v4) | No | No |

## Type Safety Flow

```
┌──────────────┐      infer       ┌──────────────┐
│   Schema     │ ───────────────> │    Type      │
│  z.object()  │                  │  TypeScript  │
└──────────────┘                  └──────────────┘
       │                                 ▲
       │ parse                          │
       ▼                                 │
┌──────────────┐      validate          │
│    Input     │ ────────────────>      │
│  (unknown)   │                  ┌──────────────┐
└──────────────┘                  │    Output    │
                                 │   (typed)    │
                                 └──────────────┘
```