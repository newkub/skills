# TypeScript Generics

## Generic Functions

```typescript
function identity<T>(value: T): T {
  return value
}

const num = identity<number>(42)
const str = identity<string>('hello')
```

## Type Inference

```typescript
// TypeScript infers T from the argument
const num = identity(42)  // T is number
const str = identity('hello')  // T is string
```

## Generic Interfaces

```typescript
interface Box<T> {
  value: T
}

const numberBox: Box<number> = { value: 42 }
const stringBox: Box<string> = { value: 'hello' }
```

## Generic Classes

```typescript
class Storage<T> {
  private items: T[] = []

  add(item: T): void {
    this.items.push(item)
  }

  get(index: number): T {
    return this.items[index]
  }
}

const storage = new Storage<string>()
```

## Generic Constraints

```typescript
interface Lengthwise {
  length: number
}

function logLength<T extends Lengthwise>(arg: T): void {
  console.log(arg.length)
}

logLength('hello')  // Works
logLength([1, 2, 3])  // Works
logLength(42)  // Error
```

## Generic Defaults

```typescript
interface Box<T = string> {
  value: T
}

const defaultBox: Box = { value: 'default' }
const numberBox: Box<number> = { value: 42 }
```
