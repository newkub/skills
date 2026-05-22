# Start Project Workflow

Complete workflow for starting a new project with Windsurf.

## Phase 1: Project Setup

### 1. Create Project Structure

```
"Initialize new Next.js project with:
- TypeScript strict mode
- Tailwind CSS
- App Router
- Prisma ORM
Structure: clean architecture"
```

### 2. Configure Windsurf

```
"Create .windsurfrules with:
- Project tech stack
- Code style conventions
- File structure
- Testing requirements"
```

### 3. Install Dependencies

```bash
# Core
npm install next react react-dom

# Development
npm install -D typescript @types/node

# Database
npm install prisma @prisma/client
```

## Phase 2: Core Configuration

### TypeScript Config

```json
{
  "compilerOptions": {
    "strict": true,
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "bundler"
  }
}
```

### Environment Setup

```
"Create .env.example with:
- DATABASE_URL
- API_SECRET
- NEXT_PUBLIC_* variables"
```

### Database Schema

```
"Create initial Prisma schema:
- User model
- Session model
- Add indexes"
```

## Phase 3: Base Structure

### Create Directories

```
├── src/
│   ├── components/     # UI components
│   ├── lib/            # Utilities
│   ├── hooks/          # Custom hooks
│   ├── types/          # TypeScript types
│   └── api/            # API routes
├── prisma/
│   └── schema.prisma
└── tests/
```

### Create Base Files

| File | Purpose |
|------|---------|
| `types/index.ts` | Export all types |
| `lib/utils.ts` | Utility functions |
| `lib/db.ts` | Database client |
| `hooks/useAuth.ts` | Auth hook |

## Phase 4: Development Workflow

### Feature Development Loop

```
1. Create feature branch
2. Open Cascade (Cmd+L)
3. Describe feature
4. Review plan
5. Execute changes
6. Run tests
7. Commit
```

### Example Feature

**Step 1: Branch**
```bash
git checkout -b feature/user-auth
```

**Step 2: Plan in Cascade**
```
"Add user authentication:
1. Login page
2. Register page
3. Auth API routes
4. JWT middleware
5. Protected routes
Use NextAuth.js"
```

**Step 3: Implementation**
- Cascade creates files
- You review diffs
- Accept changes

**Step 4: Test**
```bash
npm run test
npm run dev
```

## Phase 5: Testing Setup

### Test Framework

```
"Configure Vitest:
1. Install vitest, @testing-library/react
2. Create vite.config.ts
3. Add test script
4. Create first test"
```

### Test Structure

```
tests/
├── unit/
│   ├── components/
│   └── lib/
└── integration/
    └── api/
```

### Write First Tests

```
"Add tests for:
1. useAuth hook
2. Utility functions
3. API routes
Follow TDD approach"
```

## Phase 6: Git Workflow

### Commit Pattern

```
feat: add user authentication
fix: resolve memory leak in upload
refactor: extract validation logic
docs: update README
test: add user service tests
```

### Pre-commit Checks

```bash
# Lint
npm run lint

# Test
npm run test

# Type check
npm run type-check
```

## Phase 7: Deployment Setup

### Configure Deploy

```
"Setup deployment:
1. Create Dockerfile
2. Add CI/CD workflow
3. Configure environment
4. Add health check"
```

### CI/CD

```yaml
name: Deploy
on: [push]
jobs:
  test:
    run: npm test
  deploy:
    needs: test
    run: npm run deploy
```

## Project Checklist

### Setup

| Task | Status |
|------|--------|
| Initialize repo | ☐ |
| Configure TypeScript | ☐ |
| Setup database | ☐ |
| Create .windsurfrules | ☐ |
| Install dependencies | ☐ |

### Development

| Task | Status |
|------|--------|
| Create base structure | ☐ |
| Implement auth | ☐ |
| Create components | ☐ |
| Add API routes | ☐ |
| Write tests | ☐ |

### Deployment

| Task | Status |
|------|--------|
| Configure CI/CD | ☐ |
| Add environment vars | ☐ |
| Test deployment | ☐ |
| Monitor setup | ☐ |

## Best Practices

### Project Initialization

| Practice | Why |
|----------|-----|
| Use templates | Faster setup |
| Configure lint | Consistent code |
| Setup tests early | Quality from start |
| Document decisions | Team alignment |

### Cascade Usage

| Practice | How |
|----------|-----|
| Be specific | Better output |
| Review changes | Quality control |
| Run tests | Verify functionality |
| Commit often | Track progress |