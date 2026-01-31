# Use Project References (`references`)

## Rationale
Using `references` in `tsconfig.json` helps TypeScript understand dependencies between projects in a monorepo. This leads to faster builds by only compiling changed packages, more accurate type checking, and detection of circular dependencies.

## Good Practice

````json
{
  "compilerOptions": {
    "composite": true,
    "incremental": true
  },
  "references": [
    { "path": "../packages/ui" },
    { "path": "../packages/utils" }
  ]
}
````

## Bad Practice

Relying on a single root `tsconfig.json` with `extends` for all packages can be inefficient and hide dependency issues.
