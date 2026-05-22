# Zod Getting Started Guide

## Installation

```bash
npm install zod
```

Or using JSR:

```bash
npx jsr add @zod/zod
```

## Basic Usage

### Define a Schema

```typescript
import * as z from "zod"

const UserSchema = z.object({
  name: z.string(),
  age: z.number(),
})
```

### Parse Data

```typescript
const input = {
  name: "John",
  age: 30,
}

const data = UserSchema.parse(input)
console.log(data.name) // "John"
```

### Safe Parse

```typescript
const result = UserSchema.safeParse(input)

if (result.success) {
  console.log(result.data)
} else {
  console.error(result.error)
}
```

## Type Inference

```typescript
type User = z.infer<typeof UserSchema>
// { name: string; age: number }
```

## Core Features

- **Zero dependencies**: Lightweight and self-contained
- **TypeScript-first**: Full type inference from schemas
- **Composable**: Build complex schemas from simple ones
- **Immutable API**: Methods return new instances
- **Error handling**: Detailed error messages

## Requirements

Zod requires TypeScript v5.5 or later.
