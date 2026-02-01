## Advanced Types

คุณสมบัติขั้นสูงของ TypeScript type system

### Conditional Types
```typescript
// Basic conditional type
type IsString<T> = T extends string ? true : false;

// Conditional with union
type NonNullable<T> = T extends null | undefined ? never : T;

// Infer keyword
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;
```

### Mapped Types
```typescript
// Basic mapped type
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

// Mapped with modifiers
type Partial<T> = {
  [P in keyof T]?: T[P];
};

// Conditional mapped
type Getters<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
};
```

### Template Literal Types
```typescript
// String manipulation
type EventName<T extends string> = `on${Capitalize<T>}`;
type EventHandler<T extends string> = (event: T) => void;

// Pattern matching
type Path = string;
type GetValue<T, P extends Path> = P extends `${infer K}.${infer Rest}`
  ? K extends keyof T
    ? GetValue<T[K], Rest>
    : never
  : P extends keyof T
  ? T[P]
  : never;
```

### Utility Types
```typescript
// Built-in utilities
type Required<T> = { [P in keyof T]-?: T[P]; };
type Pick<T, K extends keyof T> = { [P in K]: T[P]; };
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
type Record<K extends keyof any, T> = { [P in K]: T; };
```

### Variadic Tuple Types
```typescript
// Rest elements in tuples
type Args<T extends any[]> = [...T];

// Recursive tuple types
type Join<T extends string[], D extends string> = 
  T extends [] ? '' :
  T extends [infer F] ? F :
  T extends [infer F, ...infer R] ? `${F & string}${D}${Join<R, D>}` :
  never;
```
