# Architecture

## ภาพรวม

สถาปัตยกรรมภายในของ Zod และวิธีการทำงาน

## Core Components

### ZodType

Base type สำหรับทุก schemas:

```typescript
interface ZodType<T, Output = T, Input = Output> {
  _type: T;
  _output: Output;
  _input: Input;
  parse(data: unknown): Output;
  safeParse(data: unknown): SafeParseResult<Output>;
}
```

### Parse Pipeline

```
Input
  ↓
Type Check
  ↓
Validation
  ↓
Transformation
  ↓
Output
```

## Parsing Process

### 1. Type Check

ตรวจสอบว่า input เป็น type ที่ถูกต้อง:

```typescript
class ZodString implements ZodType<string> {
  parse(data: unknown): string {
    if (typeof data !== "string") {
      throw new ZodError([{
        code: ZodIssueCode.invalid_type,
        expected: "string",
        received: typeof data,
      }]);
    }
    return data;
  }
}
```

### 2. Validation

ตรวจสอบ constraints:

```typescript
class ZodString implements ZodType<string> {
  private checks: StringCheck[] = [];

  parse(data: unknown): string {
    const value = this.typeCheck(data);

    for (const check of this.checks) {
      if (check.kind === "min" && value.length < check.value) {
        throw new ZodError([{
          code: ZodIssueCode.too_small,
          minimum: check.value,
          type: "string",
        }]);
      }
    }

    return value;
  }
}
```

### 3. Transformation

แปลง data:

```typescript
class ZodEffects<T, Output> implements ZodType<Output> {
  constructor(
    private inner: ZodType<T>,
    private transform: (data: T) => Output,
  ) {}

  parse(data: unknown): Output {
    const value = this.inner.parse(data);
    return this.transform(value);
  }
}
```

## Schema Types

### Primitive Schemas

```typescript
class ZodString implements ZodType<string> {}
class ZodNumber implements ZodType<number> {}
class ZodBoolean implements ZodType<boolean> {}
class ZodDate implements ZodType<Date> {}
```

### Complex Schemas

```typescript
class ZodObject<T extends Record<string, ZodType>> implements ZodType<Output> {}
class ZodArray<T extends ZodType> implements ZodType<Output[]> {}
class ZodUnion<T extends readonly [ZodType, ...ZodType[]]> implements ZodType<Output> {}
```

## Type Inference

### Static Type Inference

```typescript
type infer<T extends ZodType> = T["_output"];

const schema = z.object({ name: z.string() });
type Schema = infer<typeof schema>; // { name: string }
```

### Input/Output Types

```typescript
type input<T extends ZodType> = T["_input"];
type output<T extends ZodType> = T["_output"];

const schema = z.string().transform((val) => val.length);
type Input = input<typeof schema>;  // string
type Output = output<typeof schema>; // number
```

## Error Handling

### ZodError Structure

```typescript
class ZodError extends Error {
  issues: ZodIssue[];
  formatters: {
    errorFormatter?: (issue: ZodIssue) => string;
  };

  format(): FormattedError {
    // Format errors for display
  }
}
```

### Issue Types

```typescript
type ZodIssue =
  | { code: "invalid_type"; expected: string; received: string }
  | { code: "invalid_literal"; expected: unknown; received: unknown }
  | { code: "custom"; message: string }
  | { code: "invalid_string"; validation: string }
  | { code: "too_small"; minimum: number; type: string }
  | { code: "too_big"; maximum: number; type: string };
```

## Performance Optimizations

### Schema Caching

```typescript
// Schemas are immutable and cached
const schema = z.object({ name: z.string() });
// Type inference is cached
type Type = z.infer<typeof schema>;
```

### Lazy Evaluation

```typescript
// Recursive schemas use lazy evaluation
const categorySchema = z.object({
  name: z.string(),
  subcategories: z.array(z.lazy(() => categorySchema)),
});
```

### Short-circuit Validation

```typescript
// Union validation stops at first match
const schema = z.union([z.string(), z.number()]);
schema.parse("hello"); // Only checks string
```

## Memory Management

### Immutable Schemas

```typescript
// Schemas are immutable - no side effects
const schema = z.string().min(5);
const extended = schema.max(100); // Creates new schema
```

### Minimal Allocation

```typescript
// Validation doesn't allocate intermediate objects
const schema = z.object({ name: z.string() });
schema.parse({ name: "test" }); // Direct validation
```

## Extensibility

### Custom Schemas

```typescript
class ZodCustom<T> implements ZodType<T> {
  parse(data: unknown): T {
    // Custom validation logic
  }
}
```

### Custom Refinements

```typescript
z.string().refine((val) => {
  // Custom validation
  return true;
}, { message: "Custom error" });
```

### Custom Transformations

```typescript
z.string().transform((val) => {
  // Custom transformation
  return val.toUpperCase();
});
```
