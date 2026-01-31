# Avoid `any`

## Rationale
The `any` type opts out of all type checking, defeating the purpose of using TypeScript. It can hide bugs that would otherwise be caught at compile time, leading to potential runtime errors.

## Good Practice

Use safer alternatives to `any`:
- **`unknown`**: Forces you to perform type checking before using the value.
- **Generics**: Create components or functions that can work over a variety of types rather than a single one.

````typescript
// Good: Using unknown requires a type check
function processValue(value: unknown) {
  if (typeof value === 'string') {
    console.log(value.toUpperCase()); // Safe
  }
}

// Bad: `any` allows unsafe operations
function processAny(value: any) {
    console.log(value.toUpperCase()); // Dangerous, could fail at runtime
}
````
