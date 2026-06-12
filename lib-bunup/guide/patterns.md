# Patterns

## Common Patterns

## Monorepo Integration

ใช้ Bunup ใน monorepos:
```typescript
export default {
  entry: ['packages/*/src/index.ts'],
};
```

## Multiple Entry Points

```typescript
export default {
  entry: [
    'src/index.ts',
    'src/cli.ts',
    'src/server.ts',
  ],
};
```

## Conditional Exports

```json
{
  "exports": {
    ".": {
      "import": "./dist/index.mjs",
      "require": "./dist/index.js"
    }
  }
}
```
