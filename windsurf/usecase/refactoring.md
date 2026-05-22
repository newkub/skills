# Refactoring with Windsurf

Use Cascade for systematic code refactoring.

## When to Refactor

| Trigger | Action |
|---------|--------|
| Code duplication | Extract common logic |
| Complex functions | Split into smaller |
| Tech debt | Modernize patterns |
| Performance | Optimize bottlenecks |
| Maintainability | Improve readability |

## Refactoring Workflow

### 1. Analyze

```
"Analyze the user service for refactoring opportunities:
- Identify code duplication
- Find complex functions
- Check for missing abstractions
- Suggest patterns to apply"
```

### 2. Plan

```
"Refactor user service to:
1. Use repository pattern
2. Extract validation to separate module
3. Add dependency injection
4. Improve error handling
Follow existing codebase conventions"
```

### 3. Execute

Cascade:
- Creates new files
- Updates imports
- Moves logic
- Maintains tests

### 4. Verify

```
"Run tests and verify:
1. All unit tests pass
2. Integration tests pass
3. No regression in functionality
4. Types are correct"
```

## Common Refactoring Patterns

### Extract Function

**Before:**
```typescript
function processUser(data: UserData) {
  // 50 lines of validation and processing
}
```

**Command:**
```
"Extract the validation logic into a separate function"
```

**After:**
```typescript
function validateUserData(data: UserData): ValidationResult {
  // Validation logic
}

function processUser(data: UserData) {
  const validation = validateUserData(data);
  // Processing logic
}
```

### Introduce Interface

**Before:**
```typescript
class UserService {
  async getUser(id: string) {
    // Direct database access
  }
}
```

**Command:**
```
"Introduce repository interface for UserService"
```

**After:**
```typescript
interface UserRepository {
  findById(id: string): Promise<User | null>;
  create(data: CreateUserDto): Promise<User>;
}

class UserService {
  constructor(private repo: UserRepository) {}
}
```

### Migrate to Dependency Injection

**Before:**
```typescript
class UserService {
  private db = new Database();
  private email = new EmailService();
}
```

**Command:**
```
"Convert to dependency injection with constructor injection"
```

**After:**
```typescript
class UserService {
  constructor(
    private db: Database,
    private email: EmailService
  ) {}
}
```

### Replace Class with Function

**Before:**
```typescript
class MathUtils {
  static add(a: number, b: number) {
    return a + b;
  }
}
```

**Command:**
```
"Replace static class with standalone functions"
```

**After:**
```typescript
function add(a: number, b: number) {
  return a + b;
}
```

## Large-Scale Refactoring

### Phase 1: Preparation

```
"Set up .windsurfrules with:
- Target patterns to follow
- File structure conventions
- Naming rules
- Testing requirements"
```

### Phase 2: Incremental Execution

```
"Phase 1: Extract types to separate file
Phase 2: Create repository interfaces
Phase 3: Migrate service implementations
Phase 4: Update tests
Phase 5: Clean up dead code"
```

### Phase 3: Verification

1. Run full test suite
2. Check code coverage
3. Review generated diff
4. Iterate if needed

## Safety Patterns

### Always Review Diffs

| Action | Why |
|--------|-----|
| Review file by file | Catch issues early |
| Check imports | Avoid circular deps |
| Verify tests | Ensure coverage |
| Look for `any` | Maintain type safety |

### Use Test Coverage

```
"Increase test coverage to 80% before refactoring"
```

### Keep Commits Small

```
"Commit after each refactoring phase"
```

## Anti-Patterns to Fix

| Pattern | Problem | Solution |
|----------|---------|----------|
| God class | Hard to maintain | Split by responsibility |
| Long functions | Hard to read | Extract smaller functions |
| Magic numbers | Unclear intent | Use named constants |
| Deep nesting | Complex logic | Early returns |
| Duplicate code | Maintenance burden | Extract shared logic |

## Cascade Tips for Refactoring

### Be Specific

```
# Good
"Extract validation logic from UserService into
validateUserData function with proper types"

# Bad
"Improve the user service"
```

### Reference Target Code

```
"@UserService refactor to use repository pattern
@types/User.ts shows the target interface"
```

### Verify After Each Step

```
"Run tests after each change to catch issues early"
```

## Refactoring Checklist

| Check | Done |
|-------|------|
| Tests pass | ☐ |
| No new `any` types | ☐ |
| Imports updated | ☐ |
| No circular deps | ☐ |
| Documentation updated | ☐ |
| Code coverage maintained | ☐ |