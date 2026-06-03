# Installation

## Purpose

คู่มือการติดตั้ง Zod และการตั้งค่า TypeScript สำหรับ project

## Scope

- Package installation
- TypeScript configuration
- Environment setup
- Verification

## Package Installation

### npm

```bash
npm install zod
```

### yarn

```bash
yarn add zod
```

### pnpm

```bash
pnpm add zod
```

### bun

```bash
bun add zod
```

### JSR (for Deno/JSR)

```bash
# Deno
import * as z from "jsr:@zod/zod";

# Or use @zod/zod from npm
```

## Version Requirements

| Package | Version |
|---------|---------|
| **Zod** | v4.x (stable) |
| **TypeScript** | v5.5+ (required) |
| **Node.js** | v18+ (recommended) |
| **Bundlers** | Vite, webpack, esbuild, Rollup |

## TypeScript Configuration

### tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "lib": ["ES2022"],
    "strict": true,
    "strictNullChecks": true,
    "noImplicitAny": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}
```

### Important: Enable `strict` Mode

Zod ต้องการ `strict` mode เพื่อให้ type inference ทำงานได้อย่างถูกต้อง:

```json
{
  "compilerOptions": {
    "strict": true
  }
}
```

## Import Patterns

### ES Modules (Recommended)

```typescript
import * as z from "zod";
import { z } from "zod";

// Named imports (tree-shakeable)
import { z } from "zod";
```

### CommonJS

```typescript
const { z } = require("zod");
```

## Environment Setup

### Node.js

```typescript
// src/utils/schemas.ts
import { z } from "zod";

export const UserSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1),
  email: z.email(),
});
```

### Browser

```typescript
// ESM in browser
<script type="module">
  import * as z from "https://esm.sh/zod@4";
</script>
```

### Deno

```typescript
import * as z from "jsr:@zod/zod";

// Or
import { z } from "npm:zod";
```

## Verification

### Basic Test

```typescript
import * as z from "zod";

const schema = z.object({
  name: z.string(),
  age: z.number(),
});

// Test parsing
const result = schema.safeParse({ name: "John", age: 30 });

if (result.success) {
  console.log("Valid:", result.data);
} else {
  console.log("Error:", result.error.issues);
}
```

### Run Verification

```bash
# TypeScript check
npx tsc --noEmit

# Test schema
npx ts-node src/test-schema.ts
```

## Next Steps

- [Quick Start](./quick-start.md) - เริ่มต้นใช้งาน Zod
- [Key Concept](./key-concept.md) - เข้าใจ core concepts
- [Features](./features.md) - ดู features ทั้งหมด