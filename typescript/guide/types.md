# TypeScript Types

## Basic Types

```typescript
// Primitives
const name: string = 'John'
const age: number = 30
const isActive: boolean = true
const value: null = null
const data: undefined = undefined
const item: any = 'anything'        // Avoid using any
const unknown: unknown = 'unknown'   // Better than any
const never: never = (() => { throw new Error() })()
```

## Arrays

```typescript
const numbers: number[] = [1, 2, 3]
const strings: string[] = ['a', 'b', 'c']
const matrix: number[][] = [[1, 2], [3, 4]]

// Readonly arrays
const readonlyNumbers: ReadonlyArray<number> = [1, 2, 3]
const readonlyNumbersAlt: readonly number[] = [1, 2, 3]
```

## Objects

```typescript
// Type annotation
const user: { name: string; age: number } = {
  name: 'John',
  age: 30,
}

// Interface
interface User {
  id: number
  name: string
  email?: string  // Optional
}

const user: User = {
  id: 1,
  name: 'John',
}
```

## Functions

```typescript
// Function types
function add(a: number, b: number): number {
  return a + b
}

// Arrow function
const multiply = (a: number, b: number): number => a * b

// Function type
type MathOperation = (a: number, b: number) => number

const divide: MathOperation = (a, b) => a / b
```

## Union Types

```typescript
type ID = number | string

const id1: ID = 123
const id2: ID = 'abc'
```

## Intersection Types

```typescript
type Person = { name: string }
type Employee = { id: number }
type EmployeePerson = Person & Employee

const employee: EmployeePerson = {
  name: 'John',
  id: 1,
}
```
