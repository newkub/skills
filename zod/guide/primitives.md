# Zod Primitives

## String

```typescript
z.string()
z.string().min(5)
z.string().max(10)
z.string().email()
z.string().url()
z.string().uuid()
```

## Number

```typescript
z.number()
z.number().min(0)
z.number().max(100)
z.number().positive()
z.number().negative()
z.number().int()
```

## Boolean

```typescript
z.boolean()
```

## Optional

```typescript
z.string().optional()
z.number().optional()
```

## Nullable

```typescript
z.string().nullable()
z.number().nullable()
```

## Default Values

```typescript
z.string().default("hello")
z.number().default(0)
```

## Enums

```typescript
const Fruits = z.enum(["apple", "banana", "orange"])
```

## Literals

```typescript
z.literal("hello")
z.literal(42)
z.literal(true)
```
