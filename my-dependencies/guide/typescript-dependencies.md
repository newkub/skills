# TypeScript Dependencies

## Core

| Package | ใช้สำหรับ | ติดตั้ง |
|---------|----------|---------|
| typescript | TypeScript compiler | `bun add -d typescript` |
| tsx | TypeScript execute (fast) | `bun add -d tsx` |
| ts-node | TypeScript Node.js execution | `bun add -d ts-node` |
| ts-patch | Patch TypeScript for project references | `bun add -d ts-patch` |

## Type Definitions

| Package | ใช้สำหรับ | ติดตั้ง |
|---------|----------|---------|
| @types/node | Node.js types | `bun add -d @types/node` |
| @types/bun | Bun types | `bun add -d @types/bun` |
| @types/react | React types | `bun add -d @types/react` |
| @types/react-dom | React DOM types | `bun add -d @types/react-dom` |
| @types/express | Express types | `bun add -d @types/express` |
| @types/cors | CORS types | `bun add -d @types/cors` |
| @types/compression | Compression types | `bun add -d @types/compression` |
| @types/multer | Multer types | `bun add -d @types/multer` |
| @types/bcrypt | bcrypt types | `bun add -d @types/bcrypt` |
| @types/jsonwebtoken | JWT types | `bun add -d @types/jsonwebtoken` |
| @types/passport | Passport types | `bun add -d @types/passport` |
| @types/passport-jwt | Passport JWT types | `bun add -d @types/passport-jwt` |
| @types/ws | WebSocket types | `bun add -d @types/ws` |
| @types/uuid | UUID types | `bun add -d @types/uuid` |
| @types/lodash | Lodash types | `bun add -d @types/lodash` |
| @types/ramda | Ramda types | `bun add -d @types/ramda` |

## Validation

| Package | ใช้สำหรับ | ติดตั้ง |
|---------|----------|---------|
| zod | Schema validation | `bun add zod` |
| valibot | Alternative to Zod (smaller, faster) | `bun add valibot` |
| arktype | TypeScript-native validation | `bun add arktype` |
| superstruct | Interface validation | `bun add superstruct` |
| io-ts | Runtime type validation | `bun add io-ts` |
| typebox | JSON Schema type builder | `bun add @sinclair/typebox` |
| runtypes | Runtime types | `bun add runtypes` |
| ts-pattern | Pattern matching | `bun add ts-pattern` |

## Utilities

| Package | ใช้สำหรับ | ติดตั้ง |
|---------|----------|---------|
| tsx | Fast TypeScript execution | `bun add -d tsx` |
| tsup | TypeScript bundler | `bun add -d tsup` |
| tsdown | TypeScript bundler (Rolldown) | `bun add -d tsdown` |
| dts-bundle | Bundle .d.ts files | `bun add -d dts-bundle` |
| typescript-transform-paths | Path transformation | `bun add -d typescript-transform-paths` |
| tsc-alias | Path alias resolution | `bun add -d tsc-alias` |
| resolve-tspaths | Resolve tsconfig paths | `bun add -d resolve-tspaths` |

## Development

| Package | ใช้สำหรับ | ติดตั้ง |
|---------|----------|---------|
| typedoc | Documentation generator | `bun add -d typedoc` |
| ts-node-dev | Development server | `bun add -d ts-node-dev` |
| tsx | Development runner | `bun add -d tsx` |
| tsc-watch | Watch mode | `bun add -d tsc-watch` |
| onchange | File watcher | `bun add -d onchange` |
| concurrently | Run multiple commands | `bun add -d concurrently` |
| nodemon | Development monitor | `bun add -d nodemon` |

## Linting & Quality

| Package | ใช้สำหรับ | ติดตั้ง |
|---------|----------|---------|
| @typescript-eslint/eslint-plugin | TypeScript ESLint rules | `bun add -d @typescript-eslint/eslint-plugin` |
| @typescript-eslint/parser | TypeScript ESLint parser | `bun add -d @typescript-eslint/parser` |
| @biomejs/biome | All-in-one toolchain | `bun add -d @biomejs/biome` |
| oxlint | Ultra-fast linter | `bun add -d oxlint` |
| dprint | Fast formatter | `bun add -d dprint` |

## Configuration

| Package | ใช้สำหรับ | ติดตั้ง |
|---------|----------|---------|
| @total-typescript/tsconfig | Best practice configs | `bun add -d @total-typescript/tsconfig` |
| @tsconfig/node20 | Node.js 20 config | `bun add -d @tsconfig/node20` |
| @tsconfig/node18 | Node.js 18 config | `bun add -d @tsconfig/node18` |
| @tsconfig/strictest | Strictest config | `bun add -d @tsconfig/strictest` |
| @tsconfig/create-react-app | CRA config | `bun add -d @tsconfig/create-react-app` |
| @tsconfig/next | Next.js config | `bun add -d @tsconfig/next` |
| @tsconfig/svelte | Svelte config | `bun add -d @tsconfig/svelte` |

## Testing

| Package | ใช้สำหรับ | ติดตั้ง |
|---------|----------|---------|
| vitest | TypeScript testing | `bun add -d vitest` |
| @vitest/ui | Vitest UI | `bun add -d @vitest/ui` |
| ts-jest | Jest TypeScript | `bun add -d ts-jest` |
| @types/jest | Jest types | `bun add -d @types/jest` |
| @types/mocha | Mocha types | `bun add -d @types/mocha` |
| @types/chai | Chai types | `bun add -d @types/chai` |

## คำแนะนำ

| หมวดหมู่ | แนะนำ | เหตุผล |
|---------|-------|--------|
| **Compiler** | typescript + tsx | Fastest execution |
| **Validation** | valibot | 6x smaller than Zod |
| **Bundler** | tsup หรือ tsdown | Fast, modern |
| **Linting** | @biomejs/biome | 10-20x faster than ESLint |
| **Config** | @tsconfig/node20 | Official configs |
| **Testing** | vitest | Native TypeScript support |
