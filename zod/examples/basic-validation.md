# Zod Basic Validation Examples

## Simple Object Validation

```typescript
import * as z from "zod"

const UserSchema = z.object({
  username: z.string().min(3).max(20),
  email: z.string().email(),
  age: z.number().min(18).max(120),
})

const input = {
  username: "john",
  email: "john@example.com",
  age: 25,
}

const user = UserSchema.parse(input)
```

## Nested Object Validation

```typescript
const AddressSchema = z.object({
  street: z.string(),
  city: z.string(),
  zip: z.string().regex(/^\d{5}$/),
})

const PersonSchema = z.object({
  name: z.string(),
  address: AddressSchema,
})

const person = PersonSchema.parse({
  name: "John",
  address: {
    street: "123 Main St",
    city: "Anytown",
    zip: "12345",
  },
})
```

## Array Validation

```typescript
const NumbersSchema = z.array(z.number().positive())

const numbers = NumbersSchema.parse([1, 2, 3, 4, 5])
```

## Union Types

```typescript
const StringOrNumber = z.union([z.string(), z.number])

StringOrNumber.parse("hello") // OK
StringOrNumber.parse(42) // OK
StringOrNumber.parse(true) // Error
```

## Optional Fields

```typescript
const ProductSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  price: z.number(),
})

ProductSchema.parse({
  name: "Widget",
  price: 9.99,
}) // OK - description is optional
```
