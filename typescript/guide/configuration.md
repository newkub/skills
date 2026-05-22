# TypeScript Configuration

## Compiler Options สำคัญ

```json
{
  "compilerOptions": {
    "strict": true,                    // เปิดใช้ strict mode
    "target": "ES2020",                // Target JavaScript version
    "module": "ESNext",                // Module system
    "moduleResolution": "bundler",    // Module resolution strategy
    "esModuleInterop": true,           // Enable ES module interop
    "skipLibCheck": true,              // Skip type checking of declaration files
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,         // Allow importing JSON files
    "isolatedModules": true,           // Ensure files are isolated
    "noEmit": true,                    // Don't emit output files
    "noUnusedLocals": true,            // Report unused locals
    "noUnusedParameters": true,        // Report unused parameters
    "noFallthroughCasesInSwitch": true,
    "noImplicitReturns": true,
    "noUncheckedIndexedAccess": true
  }
}
```

## Path Aliases

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "@/components/*": ["src/components/*"],
      "@/utils/*": ["src/utils/*"]
    }
  }
}
```

## Type Root

```json
{
  "compilerOptions": {
    "typeRoots": ["./node_modules/@types", "./types"]
  }
}
```
