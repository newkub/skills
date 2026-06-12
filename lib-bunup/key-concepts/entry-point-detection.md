# Entry Point Detection

## Auto-Detection

Bunup auto-detects entry points จาก project structure:
- `src/index.ts` - Main entry point
- `src/cli.ts` - CLI entry point
- Exported functions ที่ match patterns

## Patterns

Bunup detect exports ตาม patterns:
```typescript
// src/index.ts
export function foo() {}
export const bar = 1;
export default class Baz {}
```

## Manual Configuration

ถ้าต้องการกำหนด entry points เอง:
```typescript
export default {
  entry: ['src/index.ts', 'src/cli.ts'],
};
```
