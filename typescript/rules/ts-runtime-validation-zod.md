# Validate Data at Runtime with Schema Libraries

## Rationale
TypeScript's types are erased at compile time and do not exist at runtime. This means you cannot rely on them to protect against invalid data from external sources like API responses or user input. A schema validation library is essential for ensuring data integrity at the boundaries of your application.

## Good Practice

Use a library like `Zod` to define a schema, validate incoming data, and infer TypeScript types directly from that schema.

````typescript
import { z } from 'zod';

// 1. Define a schema for runtime validation
const UserSchema = z.object({
  username: z.string().min(3),
  email: z.string().email(),
});

// 2. Infer the static TypeScript type from the schema
type User = z.infer<typeof UserSchema>;

// 3. Validate external data at runtime
function processUser(data: unknown): User {
  const result = UserSchema.safeParse(data);
  if (!result.success) {
    throw new Error('Invalid user data');
  }
  return result.data;
}
````
