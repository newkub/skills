## Type System

ระบบ types ของ TypeScript อย่างละเอียด

### Basic Types

```typescript
// Primitive types
let str: string = "hello";
let num: number = 42;
let bool: boolean = true;
let arr: string[] = ["a", "b"];
let tuple: [string, number] = ["hello", 42];

// Special types
let nothing: void = undefined;
let never: never = (() => { throw new Error(); })();
let unknown: unknown = JSON.parse(data);
let any: any = 42; // หลีกเลี่ยงการใช้
```

### Object Types

```typescript
// Interface
interface User {
  readonly id: number;
  name: string;
  age?: number; // optional
}

// Type alias
type Product = {
  id: string;
  price: number;
};

// Class
class Person {
  constructor(public name: string, private age: number) {}
}
```

### Union & Intersection

```typescript
// Union types
type Result = string | number;
type Status = "pending" | "success" | "error";

// Intersection types
type Employee = User & { department: string; };
```

### Type Inference

```typescript
// Automatic inference
let message = "hello"; // string
const numbers = [1, 2, 3]; // number[]

// Contextual typing
const users = await fetchUsers(); // inferred from function return
```
