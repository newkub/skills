## Decorators

การใช้งาน decorators ใน TypeScript

### Basic Decorators

```typescript
// Class decorator
function sealed(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

@sealed
class Greeter {}
```

### Method Decorators

```typescript
// Method decorator
function enumerable(value: boolean) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.enumerable = value;
  };
}

class Person {
  @enumerable(false)
  greet() {
    return "Hello";
  }
}
```

### Property Decorators

```typescript
// Property decorator
function format(target: any, propertyKey: string) {
  let value = target[propertyKey];

  const getter = () => value;
  const setter = (newVal: string) => {
    value = newVal.trim();
  };

  Object.defineProperty(target, propertyKey, {
    get: getter,
    set: setter,
  });
}

class User {
  @format
  name: string;
}
```

### Parameter Decorators

```typescript
// Parameter decorator
function validate(target: any, methodName: string, parameterIndex: number) {
  // Validation logic
}

class Calculator {
  add(@validate a: number, @validate b: number): number {
    return a + b;
  }
}
```

### Decorator Factory

```typescript
// Factory for creating decorators
function decoratorFactory(options: { value: string }) {
  return function (target: any) {
    // Use options.value
  };
}

@decoratorFactory({ value: "custom" })
class MyClass {}
```

### Metadata

```typescript
// Using reflect-metadata
import "reflect-metadata";

function entity(tableName: string) {
  return function (target: any) {
    Reflect.defineMetadata("table", tableName, target);
  };
}

@entity("users")
class User {
  @column("id")
  id: number;
}

function column(columnName: string) {
  return function (target: any, propertyKey: string) {
    Reflect.defineMetadata("column", columnName, target, propertyKey);
  };
}
```
