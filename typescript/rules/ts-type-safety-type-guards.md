# Use Type Guards for Type Narrowing

## Rationale
Type guards are expressions that perform a runtime check that guarantees the type in some scope. They allow you to narrow down a variable's type from a broad one to a more specific one, enabling you to access properties or methods safely.

## Good Practice

Use built-in operators or create custom type guard functions.

- **`typeof`**: For primitives.
- **`instanceof`**: For class instances.
- **Custom function**: A function returning `arg is Type`.

````typescript
interface Fish { swim: () => void; }
interface Bird { fly: () => void; }

// Custom type guard
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function move(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet.swim(); // TypeScript knows `pet` is a Fish here
  } else {
    pet.fly(); // TypeScript knows `pet` is a Bird here
  }
}
````
