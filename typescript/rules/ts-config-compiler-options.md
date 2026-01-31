# Recommended Compiler Options

## Rationale
Enabling strict compiler options catches a wide range of common errors at compile time, leading to more robust and maintainable code.

## Good Practice

These options provide a strong foundation for a new TypeScript project.

````json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitOverride": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "moduleResolution": "bundler"
  }
}
````

## Use Cases

### Bun Runtime
For projects running on Bun runtime:

````json
{
  "compilerOptions": {
    // Type Safety & Strict Mode
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitOverride": true,

    // Module & Interop
    "esModuleInterop": true,
    "resolveJsonModule": true,
    "moduleResolution": "bundler",
    "module": "ESNext",
    "target": "ESNext",
    "lib": ["ESNext"],
    "verbatimModuleSyntax": true,

    // Performance & Productivity
    "skipLibCheck": true,
    "incremental": true,
    "isolatedModules": true,
    "forceConsistentCasingInFileNames": true
  }
}
````

### Node.js Runtime
For Node.js applications:

````json
{
  "compilerOptions": {
    // Type Safety & Strict Mode
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitOverride": true,

    // Module & Interop
    "esModuleInterop": true,
    "resolveJsonModule": true,
    "moduleResolution": "bundler",
    "module": "ESNext",
    "target": "ESNext",
    "lib": ["ESNext"],
    "verbatimModuleSyntax": true,

    // Performance & Productivity
    "skipLibCheck": true,
    "incremental": true,
    "isolatedModules": true,
    "forceConsistentCasingInFileNames": true
  }
}
````

### CLI Tools
For command-line interface tools:

````json
{
  "compilerOptions": {
    // Type Safety & Strict Mode
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitOverride": true,

    // Module & Interop
    "esModuleInterop": true,
    "resolveJsonModule": true,
    "moduleResolution": "bundler",
    "module": "ESNext",
    "target": "ESNext",
    "lib": ["ESNext"],
    "verbatimModuleSyntax": true,

    // Performance & Productivity
    "skipLibCheck": true,
    "incremental": true,
    "isolatedModules": true,
    "forceConsistentCasingInFileNames": true,

    // Output
    "outDir": "./dist"
  }
}
````

### Website / Browser
For web applications running in browsers:

````json
{
  "compilerOptions": {
    // Type Safety & Strict Mode
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitOverride": true,

    // Module & Interop
    "esModuleInterop": true,
    "resolveJsonModule": true,
    "moduleResolution": "bundler",
    "module": "ESNext",
    "target": "ESNext",
    "lib": ["ESNext", "DOM", "DOM.Iterable"],
    "verbatimModuleSyntax": true,

    // Performance & Productivity
    "skipLibCheck": true,
    "incremental": true,
    "isolatedModules": true,
    "forceConsistentCasingInFileNames": true
  }
}
````

## Productivity Options

- **`incremental: true`** - Enables incremental compilation, only recompiling changed files for faster builds
- **`isolatedModules: true`** - Ensures each file can be transpiled independently, enabling parallel processing
- **`verbatimModuleSyntax: true`** - Simplifies module imports/exports and removes the need for `import type` vs `import`
- **`skipLibCheck: true`** - Skips type checking of declaration files, significantly speeding up compilation
