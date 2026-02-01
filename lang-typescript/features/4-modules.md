## Modules

การจัดการ modules ใน TypeScript

### Import/Export
```typescript
// Named exports
export interface User {
  id: number;
  name: string;
}

export function createUser(name: string): User {
  return { id: Math.random(), name };
}

// Default export
export default class UserService {
  private users: User[] = [];
  
  add(user: User): void {
    this.users.push(user);
  }
}
```

### Import Patterns
```typescript
// Import named exports
import { User, createUser } from "./user";

// Import default
import UserService from "./user-service";

// Import all
import * as UserModule from "./user";

// Import with alias
import { User as IUser, createUser as create } from "./user";
```

### Module Resolution
```typescript
// tsconfig.json
{
  "compilerOptions": {
    "moduleResolution": "node",
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "@/components/*": ["src/components/*"]
    }
  }
}

// Usage with path mapping
import Button from "@/components/Button";
import { utils } from "@/helpers";
```

### Declaration Files
```typescript
// Declaration file (.d.ts)
declare module "my-library" {
  export interface Options {
    timeout?: number;
  }
  
  export function initialize(options?: Options): void;
}

// Global augmentation
declare global {
  interface Window {
    myApp: {
      version: string;
    };
  }
}
```

### Dynamic Imports
```typescript
// Dynamic import
async function loadModule() {
  const { default: Module } = await import("./heavy-module");
  return new Module();
}

// Conditional loading
if (process.env.NODE_ENV === "development") {
  const devTools = await import("./dev-tools");
  devTools.setup();
}
```

### Re-exports
```typescript
// Re-export from other modules
export { User, Product } from "./types";
export { UserService } from "./services/user-service";
export * from "./utils";

// Re-export with rename
export { User as IUser, Product as IProduct } from "./types";
```
