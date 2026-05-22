# Windsurf Coding Style

Coding conventions and style guide for Windsurf AI assistance.

## General Principles

| Principle | Description |
|-----------|-------------|
| Clarity | Code should be self-documenting |
| Consistency | Follow established patterns |
| Simplicity | Prefer simple solutions |
| Maintainability | Easy to understand and modify |

## TypeScript Conventions

### Types

```typescript
// Good: Explicit types
interface UserProps {
  id: string;
  name: string;
  email: string;
}

// Bad: Implicit any
const user = { id, name, email };
```

### Functions

```typescript
// Good: Explicit return types
function calculateTotal(items: Item[]): number {
  return items.reduce((sum, item) => sum + item.price, 0);
}

// Bad: No return type
function calculateTotal(items) {
  return items.reduce((sum, item) => sum + item.price, 0);
}
```

## Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Components | PascalCase | `UserCard.tsx` |
| Functions | camelCase | `getUserById()` |
| Variables | camelCase | `userName` |
| Constants | SCREAMING_SNAKE | `MAX_RETRY_COUNT` |
| Types/Interfaces | PascalCase | `UserType` |
| Files | kebab-case | `user-card.tsx` |

## Comments

### When to Comment

| Situation | Comment Type |
|-----------|--------------|
| Complex logic | Explain WHY, not WHAT |
| Public APIs | JSDoc with examples |
| Workarounds | Explain reason |
| TODO | Reference ticket |

### Example

```typescript
// Good: Explains reasoning
// Workaround for Safari flexbox bug
// See: https://github.com/csswg/csswg-drafts/issues/5589
display: flex;
flex-direction: column;
```

## Code Organization

### Import Order

```typescript
// 1. React/Framework
import { useState, useEffect } from 'react';

// 2. External packages
import { z } from 'zod';
import { clsx } from 'clsx';

// 3. Internal modules
import { useAuth } from '@/hooks/useAuth';
import type { User } from '@/types';

// 4. Relative imports
import { Button } from './Button';
```

### File Structure

```
ComponentFile.tsx    ← Component implementation
ComponentFile.test.tsx ← Tests
ComponentFile.module.css ← Styles (if separate)
index.ts ← Barrel export
```

## React Patterns

### Component Structure

```tsx
// 1. Imports
import { useState } from 'react';
import type { ComponentProps } from './types';

// 2. Types
interface Props extends ComponentProps {
  title: string;
}

// 3. Component
export function Component({ title, ...props }: Props) {
  // 4. Hooks
  const [state, setState] = useState();
  
  // 5. Handlers
  function handleClick() { /* ... */ }
  
  // 6. Render
  return <div>{title}</div>;
}
```

### Hooks

```typescript
// Good: Custom hook
function useUser(id: string) {
  const [user, setUser] = useState<User | null>(null);
  
  useEffect(() => {
    fetchUser(id).then(setUser);
  }, [id]);
  
  return user;
}

// Bad: Magic inline
const [user, setUser] = useState(null);
useEffect(() => {
  fetchUser(id).then(setUser);
}, [id]);
```

## Best Practices

### Do

| Practice | Example |
|----------|---------|
| Use const | `const name = 'John';` |
| Early returns | `if (!user) return null;` |
| Named exports | `export function Button()` |
| Explicit types | `function fn(x: string): void` |
| Error boundaries | Wrap in ErrorBoundary |

### Don't

| Practice | Counter |
|----------|---------|
| Use let | Refactor to state |
| Magic numbers | Use named constants |
| Console.log | Use proper logging |
| Any type | Use unknown + type guard |
| Deep nesting | Extract functions |

## Cascade Instructions

Add to `.windsurfrules`:

```markdown
## Code Style
- Always use explicit types
- Prefer const over let
- No console.log (use logger)
- Add JSDoc to public functions
- Use named exports
```

## Formatting

### Prettier Config

```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 80
}
```

### ESLint Rules

```json
{
  "rules": {
    "@typescript-eslint/explicit-function-return-type": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "no-console": "warn"
  }
}
```