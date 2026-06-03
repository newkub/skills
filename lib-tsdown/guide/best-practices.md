# Best Practices

## Purpose

แนวทางการใช้ tsdown ที่ดีและมีประสิทธิภาพ

## Scope

- Config Organization
- Plugin Usage
- Performance
- TypeScript
- Monorepo

## Config Organization

### Single Entry per Feature

```typescript
// Good - Separate entry for each feature
export default defineConfig({
  entry: [
    './src/core.ts',
    './src/utils.ts',
    './src/cli.ts',
  ],
})
```

```typescript
// Avoid - Too many entries
export default defineConfig({
  entry: [
    './src/a.ts',
    './src/b.ts',
    './src/c.ts',
    // ... 20 more
  ],
})
```

### Use defineConfig

```typescript
// Good
import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['./src/index.ts'],
})
```

```typescript
// Avoid - Plain object
export default {
  entry: ['./src/index.ts'],
}
```

## Plugin Usage

### Type Safety

```typescript
// Add type assertions for Rollup/Vite plugins
import terser from 'rollup-plugin-terser'

export default defineConfig({
  plugins: [
    terser() as any,  // Fix type error
  ],
})
```

### Plugin Order

```typescript
export default defineConfig({
  plugins: [
    // 1. Transform plugins first
    vue(),
    // 2. Then optimization plugins
    terser(),
    // 3. Then utility plugins
    banner(),
  ],
})
```

### Official Plugins First

```typescript
import { defineConfig } from 'tsdown'
import { rolldownPlugin } from 'rolldown-plugin'
import SomePlugin from 'some-plugin'

export default defineConfig({
  plugins: [
    rolldownPlugin(),  // Official first
    SomePlugin(),
  ],
})
```

## Performance Tips

### Enable isolatedDeclarations

```json
// tsconfig.json
{
  "compilerOptions": {
    "isolatedDeclarations": true
  }
}
```

### Use Entry Pattern

```typescript
// Good - Explicit entry
export default defineConfig({
  entry: ['./src/index.ts'],
})

// Slower - Glob pattern
export default defineConfig({
  entry: './src/**/*.ts',  // Slower
})
```

### Minimal Plugins

```typescript
// Good - Only needed plugins
export default defineConfig({
  plugins: [vue() as any],
})

// Slow - Too many plugins
export default defineConfig({
  plugins: [
    pluginA(),
    pluginB(),
    pluginC(),
    pluginD(),
    // ...
  ],
})
```

## TypeScript Best Practices

### Use strict Mode

```json
// tsconfig.json
{
  "compilerOptions": {
    "strict": true
  }
}
```

### Enable Declaration Options

```json
{
  "compilerOptions": {
    "declaration": true,
    "declarationMap": true
  }
}
```

### Fast DTS with isolatedDeclarations

```json
{
  "compilerOptions": {
    "isolatedDeclarations": true
  }
}
```

## External Dependencies

### Mark Large Dependencies

```typescript
export default defineConfig({
  external: [
    'react',
    'react-dom',
    'lodash',
    'moment',
  ],
})
```

### Auto External

Dependencies ที่ไม่อยู่ใน project จะเป็น external อัตโนมัติ

### Peer Dependencies

```typescript
export default defineConfig({
  external: [
    'react',
    'react-dom',
  ],
})
```

## Monorepo Setup

### Workspace Structure

```
packages/
├── core/
│   ├── tsdown.config.ts
│   └── src/index.ts
├── utils/
│   ├── tsdown.config.ts
│   └── src/index.ts
└── shared/
    ├── tsdown.config.ts
    └── src/index.ts
```

### Each Package Config

```typescript
// packages/core/tsdown.config.ts
import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['./src/index.ts'],
  outDir: '../../dist/core',
  external: ['react', '@repo/shared'],
})
```

### CI/CD Build

```yaml
# .github/workflows/build.yml
- name: Build packages
  run: |
    for pkg in packages/*; do
      cd $pkg
      npm run build
      cd ../..
    done
```

## Common Patterns

### Library Pattern

```typescript
// tsdown.config.ts
import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['./src/index.ts'],
  dts: true,
  treeshake: true,
})
```

### Multi-format Pattern

```typescript
export default defineConfig({
  entry: ['./src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
})
```

### Component Library Pattern

```typescript
import { defineConfig } from 'tsdown'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  entry: ['./src/index.ts'],
  plugins: [vue() as any],
  dts: true,
  external: ['vue'],
})
```

## Summary

| Practice | Recommendation |
|----------|-----------------|
| **Entry** | Group related files |
| **Plugins** | Use `as any` for type errors |
| **Performance** | Enable `isolatedDeclarations` |
| **TypeScript** | Use `strict: true` |
| **External** | Mark large dependencies |
| **Monorepo** | Separate configs per package |