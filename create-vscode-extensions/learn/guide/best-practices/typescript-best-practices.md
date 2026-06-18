# TypeScript Best Practices

## Use Strict Mode

```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true
  }
}
```

## Use Interfaces for Types

```typescript
interface MyConfig {
  setting: string;
  enabled: boolean;
}

interface MyItem {
  id: string;
  label: string;
  children?: MyItem[];
}
```

## Export Types from Index

```typescript
// src/types/index.ts
export interface Config {
  key: string;
}

export type ItemType = 'a' | 'b' | 'c';
```
