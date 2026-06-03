# Key Concept

## What is TanStack Form?

TanStack Form เป็น headless form library ที่ออกแบบมาสำหรับจัดการ form state ที่ซับซ้อน มาพร้อม TypeScript-first support, framework-agnostic architecture และ excellent performance สำหรับ large-scale applications

## Core Concepts

| Concept | Description |
|---------|-------------|
| **FormApi** | Central API สำหรับจัดการ form state, validation, และ submission |
| **FieldApi** | API สำหรับจัดการ individual field state, value, และ errors |
| **Headless** | ไม่มี UI components - ให้คุณควบคุม UI ได้อิสระ |
| **Framework-agnostic** | ทำงานได้กับ React, Solid, Vue และ vanilla JS |
| **Type-safe** | First-class TypeScript พร้อม autocomplete ที่ดีเยี่ยม |

## Key Principles

- **Uncontrolled by default** - ใช้ native form elements สำหรับ performance
- **Scalable** - รองรับ complex forms ขนาดใหญ่ได้โดยไม่ลด performance
- **Composable** - สร้าง form components ซ้อนกันได้ง่าย
- **Validator-agnostic** - ใช้ได้กับ Zod, Yup, Valibot หรือ custom validators

## Architecture Overview

```
                    TanStack Form
                        │
        ┌───────────────┼───────────────┐
        │               │               │
   FormApi         FieldApi        Validators
        │               │               │
   • handleSubmit    • handleChange  • onChange
   • getFieldValue   • handleBlur   • onBlur
   • setFieldValue   • state.value  • onSubmit
   • validate        • state.meta   • onMount
```

## Core API Flow

```
┌─────────────┐     useForm      ┌─────────────┐
│  Component  │ ───────────────> │   FormApi   │
└─────────────┘                  └──────┬──────┘
                                        │
                    ┌───────────────────┼───────────────────┐
                    │                   │                   │
               form.Field          form.Field          form.Field
                    │                   │                   │
                    ▼                   ▼                   ▼
              ┌───────────┐      ┌───────────┐      ┌───────────┐
              │ FieldApi  │      │ FieldApi  │      │ FieldApi  │
              │  (name)   │      │  (email)  │      │  (age)    │
              └───────────┘      └───────────┘      └───────────┘
```

## When to Use

- Complex forms ที่ต้องการ fine-grained control
- Forms ที่ต้องการ dynamic field addition/removal
- Server-side validation integration
- Forms ที่ต้องการ type-safe field names
- Multi-step wizards หรือ form composition

## Comparison

| Feature | TanStack Form | React Hook Form | Formik |
|---------|---------------|-----------------|--------|
| TypeScript | First-class | Good | Limited |
| Bundle size | ~5KB | ~10KB | ~15KB |
| Headless | Yes | Partial | No |
| Framework | React/Solid/Vue | React only | React |
| Validation | Any library | Zod/Yup | Yup/custom |
| Array fields | Native | Manual | Partial |
| Schema support | Yes | Yes | Yes |

## Form State Structure

```typescript
interface FormState<T> {
  values: T              // Current form values
  fieldMeta: Record<     // Metadata for each field
    string, 
    FieldMeta 
  >
  errors: ValidationError[]
  isLoading: boolean
  isSubmitted: boolean
  isSubmitting: boolean
  isValid: boolean
}
```

## Field State Structure

```typescript
interface FieldState<T> {
  value: T                // Current field value
  meta: FieldMeta {
    isValid: boolean
    isTouched: boolean
    isPristine: boolean
    errors: string[]
    warning: string[]
  }
}
```