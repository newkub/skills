# TypeScript Compiler Options Reference

## Type Checking

| Option | Description |
|--------|-------------|
| `strict` | เปิดใช้ strict type checking |
| `noImplicitAny` | Error บน implicit any |
| `strictNullChecks` | Strict null checking |
| `strictFunctionTypes` | Strict function type checking |
| `strictBindCallApply` | Strict bind, call, apply |
| `strictPropertyInitialization` | Strict property initialization |

## Module Resolution

| Option | Description |
|--------|-------------|
| `module` | Module system (ESNext, CommonJS, etc.) |
| `moduleResolution` | Strategy (node, bundler, etc.) |
| `baseUrl` | Base directory for module resolution |
| `paths` | Path aliases |
| `typeRoots` | Directories for type definitions |

## Emit

| Option | Description |
|--------|-------------|
| `outDir` | Output directory |
| `rootDir` | Root directory of source files |
| `declaration` | Generate .d.ts files |
| `declarationMap` | Generate sourcemaps for declarations |
| `sourceMap` | Generate sourcemaps |
| `noEmit` | Don't emit output files |

## Interop Constraints

| Option | Description |
|--------|-------------|
| `esModuleInterop` | Enable ES module interop |
| `allowSyntheticDefaultImports` | Allow default imports |
| `resolveJsonModule` | Allow importing JSON files |
| `skipLibCheck` | Skip type checking of declaration files |

## Completeness

| Option | Description |
|--------|-------------|
| `noUnusedLocals` | Report unused locals |
| `noUnusedParameters` | Report unused parameters |
| `noImplicitReturns` | Report implicit returns |
| `noFallthroughCasesInSwitch` | Report fallthrough cases |
| `noUncheckedIndexedAccess` | Check indexed access |
| `allowUnusedLabels` | Allow unused labels |
| `allowUnreachableCode` | Allow unreachable code |
