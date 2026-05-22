# TypeScript Utility Types

## Partial

ทำให้ทุก properties เป็น optional:

```typescript
interface User {
  id: number
  name: string
  email: string
}

type PartialUser = Partial<User>

// { id?: number; name?: string; email?: string }
const partialUser: PartialUser = { name: 'John' }
```

## Required

ทำให้ทุก properties เป็น required:

```typescript
interface User {
  id?: number
  name?: string
}

type RequiredUser = Required<User>

// { id: number; name: number }
```

## Readonly

ทำให้ properties เป็น readonly:

```typescript
interface User {
  id: number
  name: string
}

type ReadonlyUser = Readonly<User>

const user: ReadonlyUser = { id: 1, name: 'John' }
// user.name = 'Jane'  // Error
```

## Pick

เลือกบาง properties:

```typescript
interface User {
  id: number
  name: string
  email: string
}

type UserSummary = Pick<User, 'id' | 'name'>

// { id: number; name: string }
```

## Omit

ลบบบาง properties:

```typescript
interface User {
  id: number
  name: string
  email: string
}

type UserWithoutEmail = Omit<User, 'email'>

// { id: number; name: string }
```

## Record

สร้าง object type จาก keys:

```typescript
type UserRecord = Record<string, User>

const users: UserRecord = {
  user1: { id: 1, name: 'John' },
  user2: { id: 2, name: 'Jane' },
}
```

## Exclude

ลบ types จาก union:

```typescript
type ID = number | string
type StringID = Exclude<ID, number>

// string
```

## Extract

เลือก types จาก union:

```typescript
type ID = number | string
type NumberID = Extract<ID, number>

// number
```
