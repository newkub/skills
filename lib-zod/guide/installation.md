# Installation

## ภาพรวม

ติดตั้ง Zod ด้วย package manager ที่คุณใช้

## Package Managers

### Bun

```bash
bun add zod
```

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

## Development Dependencies

```bash
bun add -D zod
```

## TypeScript

Zod ต้องการ TypeScript 4.5+:

```bash
bun add -D typescript
```

## Deno

```typescript
import { z } from "https://deno.land/x/zod/mod.ts";
```

## Browser

```html
<script src="https://cdn.jsdelivr.net/npm/zod/lib/index.umd.js"></script>
```

## Verification

ตรวจสอบการติดตั้ง:

```typescript
import { z } from "zod";

const schema = z.string();
console.log(schema.parse("hello")); // => "hello"
```

## Version

ตรวจสอบ version:

```bash
bun pm ls zod
```
