# Best Practices

## Project Structure

### Recommended Layout

```
my-library/
├── src/
│   ├── index.ts
│   ├── Button/
│   │   ├── index.ts
│   │   └── Button.tsx
│   └── utils/
│       └── helpers.ts
├── dist/
├── package.json
├── tsconfig.json
└── bunup.config.ts
```

### File Naming

| Type | Convention |
|------|------------|
| Components | PascalCase.tsx |
| Utils | camelCase.ts |
| Types | types.ts |
| Constants | constants.ts |

## Build Configuration

### Entry Points

```typescript
// Single entry
export default defineConfig({
  entry: './src/index.ts',
});

// Multiple entries
export default defineConfig({
  entry: {
    index: './src/index.ts',
    utils: './src/utils.ts',
  },
});
```

### Output Formats

```typescript
// For library (browser + Node)
export default defineConfig({
  formats: ['esm', 'cjs'],
  target: 'neutral',
});

// For browser only
export default defineConfig({
  formats: ['esm', 'iife'],
  target: 'browser',
});
```

## TypeScript Setup

### tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    "declaration": true,
    "declarationMap": true,
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "jsx": "react-jsx"
  },
  "include": ["src/**/*"]
}
```

## Dependency Management

### External Packages

```typescript
export default defineConfig({
  external: ['react', 'react-dom', 'styled-components'],
});
```

### peerDependencies

```json
{
  "peerDependencies": {
    "react": ">=17.0.0",
    "react-dom": ">=17.0.0"
  }
}
```

## Publishing

### package.json Fields

```json
{
  "name": "my-library",
  "version": "1.0.0",
  "main": "./dist/index.cjs",
  "module": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/index.js",
      "require": "./dist/index.cjs",
      "types": "./dist/index.d.ts"
    }
  },
  "files": ["dist"]
}
```

### Pre-publish Checklist

- [ ] Run tests
- [ ] Build with `--dts`
- [ ] Check dist/ contents
- [ ] Verify exports
- [ ] Test in clean environment

## Performance Tips

| Tip | Description |
|-----|-------------|
| Parallel builds | Use `--jobs` |
| Cache | Enable incremental builds |
| Tree shaking | Minimize side effects |
| Lazy loading | Split code naturally |

## Monorepo Best Practices

### Workspace Structure

```
packages/
├── ui/
│   ├── package.json
│   ├── src/
│   └── bunup.config.ts
├── utils/
│   ├── package.json
│   └── src/
└── shared/
    ├── package.json
    └── src/
```

### Shared Config

```typescript
// packages/ui/bunup.config.ts
import { defineConfig } from 'bunup';
import baseConfig from '../../bunup.base';

export default defineConfig({
  ...baseConfig,
  entry: './src/index.tsx',
});
```

## Error Handling

### Common Issues

| Issue | Solution |
|-------|----------|
| Missing types | Add `--dts` flag |
| Circular deps | Check imports |
| Large bundle | Add external deps |
| Build slow | Use cache |