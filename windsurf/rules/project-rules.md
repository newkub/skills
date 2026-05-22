# Windsurf Project Rules

Best practices for configuring project-level rules in Windsurf.

## .windsurfrules File

The `.windsurfrules` file defines project-specific conventions for Cascade.

### Location

- Project root: `./.windsurfrules`
- Alternative: `./windsurfrules`

### Basic Structure

```markdown
# .windsurfrules

## Project Overview
[Tech stack, architecture, purpose]

## Code Style
[Coding conventions]

## File Structure
[Directory layout]

## Testing
[Testing requirements]

## Deployment
[Build and deploy]
```

## Recommended Sections

### Project Overview

```markdown
## Project Overview
- Framework: Next.js 14 (App Router)
- Language: TypeScript (strict mode)
- Styling: Tailwind CSS
- Database: Prisma + PostgreSQL
- Auth: NextAuth.js
```

### Code Style

```markdown
## Code Style
- Use functional components with hooks
- No class components
- Explicit TypeScript types (no `any`)
- Use `cn()` utility for classnames
- Prefer server components, add 'use client' only when needed
- Write JSDoc for public functions
```

### File Structure

```markdown
## File Structure
src/
├── components/     # Reusable UI components
├── app/            # Next.js App Router pages
├── lib/            # Utilities and helpers
├── types/          # TypeScript types
├── hooks/          # Custom React hooks
└── api/            # API route handlers
```

### Testing

```markdown
## Testing
- Framework: Vitest + Testing Library
- Co-locate tests: `Component.test.tsx` next to `Component.tsx`
- Minimum coverage: 80%
- Use `describe`/`it` blocks
- Mock external services
```

### Deployment

```markdown
## Deployment
- Platform: Vercel
- Build command: `npm run build`
- Output: `.next/`
- Environment: .env.local for secrets
```

## Advanced Rules

### Naming Conventions

```markdown
## Naming Conventions
- Components: PascalCase (`UserCard.tsx`)
- Utilities: camelCase (`formatDate.ts`)
- Hooks: camelCase with `use` prefix (`useAuth.ts`)
- Types: PascalCase (`UserType`)
- Constants: SCREAMING_SNAKE_CASE
```

### Import Order

```markdown
## Import Order
1. React / Framework
2. External packages
3. Internal modules
4. Types/Interfaces
5. Relative imports (./)
```

### Error Handling

```markdown
## Error Handling
- Always use try/catch for async operations
- Create custom error classes for business logic
- Log errors with context (not just message)
- Return Result type instead of throwing
```

## Examples

### Next.js Project

```markdown
# .windsurfrules

## Project Overview
- Next.js 14 with App Router
- TypeScript strict mode
- Tailwind CSS
- Prisma ORM
- NextAuth.js

## Code Style
- Server components by default
- Use 'use client' only for interactivity
- All components have explicit prop types
- Use `cn()` from lib/utils

## File Structure
- app/ - Next.js pages
- components/ - UI components by feature
- lib/ - Utilities (db, auth, utils)
- prisma/ - Database schema
```

### React Library

```markdown
# .windsurfrules

## Project Overview
- React 18 library
- TypeScript strict
- Vite for bundling

## Code Style
- Export from index.ts for public API
- Prop types via TypeScript interface
- CSS modules for styling

## Testing
- Vitest for unit tests
- Testing Library for components
```

## Validation

### Syntax Check

Cascade validates `.windsurfrules` on load:
- Valid markdown
- Proper headers (##)
- Reasonable length

### Best Practices

| Practice | Why |
|----------|-----|
| Keep concise | Faster to parse |
| Use examples | Clearer intent |
| Update regularly | Match code changes |
| Version control | Share with team |