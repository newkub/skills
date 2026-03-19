# Configuration

## Description

ตั้งค่า TypeScript และ package.json สำหรับการพัฒนา Bun SDK ที่เหมาะสม

## Examples

### ตั้งค่า tsconfig.json

```json
{
  "compilerOptions": {
    "lib": ["ESNext"],
    "target": "ESNext",
    "module": "Preserve",
    "moduleDetection": "force",
    "jsx": "react-jsx",
    "allowJs": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "noEmit": true,
    "strict": true,
    "skipLibCheck": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitOverride": true
  }
}
```

### ตั้งค่า package.json

```json
{
  "name": "@myorg/my-sdk",
  "main": "./dist/index.js",
  "module": "./dist/index.mjs",
  "types": "./dist/index.d.ts",
  "scripts": {
    "build": "bun build src/index.ts --outdir dist --target node --format esm",
    "dev": "bun --watch src/index.ts",
    "test": "bun test"
  },
  "engines": {
    "bun": ">=1.0.0"
  }
}
```

## Anti-patterns

❌ ใช้ target: "ES5" กับ Bun  
❌ ตั้งค่า noEmit: false  
❌ ไม่ระบุ engines สำหรับ Bun
