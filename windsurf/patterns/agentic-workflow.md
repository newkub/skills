# Agentic Workflow Patterns

Workflow patterns for using Cascade as an agentic coding partner.

## Core Pattern: Cascade Loop

```
┌─────────────────────────────────────────────────────────┐
│                    Cascade Loop                          │
├─────────────────────────────────────────────────────────┤
│                                                          │
│   1. Describe Intent                                    │
│      ↓                                                   │
│   2. Cascade Analyzes                                    │
│      ↓                                                   │
│   3. Plan Created                                        │
│      ↓                                                   │
│   4. Execute (edit/create/run)                          │
│      ↓                                                   │
│   5. Review Diff                                        │
│      ↓                                                   │
│   6. Accept / Request Changes                           │
│      ↓                                                   │
│   7. Loop until satisfied                               │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

## Feature Development Pattern

### Phase 1: Plan

1. Open Cascade (`Cmd+L`)
2. Describe feature:

```
"Add user profile feature with avatar upload, bio editing,
and social links. Use existing auth system."
```

3. Review Cascade's plan
4. Approve or refine

### Phase 2: Implement

Cascade executes:
- Creates component files
- Adds API routes
- Updates types
- Creates database migrations

### Phase 3: Review

1. View all changes in diff
2. Accept file by file
3. Request specific changes if needed

### Phase 4: Test

```
"Run tests and fix any failures"
```

## Refactoring Pattern

### Starting Refactor

```
"Refactor the user module to use dependency injection
and follow the repository pattern"
```

### Cascade Actions

1. Read current implementation
2. Identify dependencies
3. Create new structure
4. Migrate code
5. Update tests

### Review Checklist

| Check | What to Verify |
|-------|----------------|
| Functionality | Same behavior as before |
| Types | No `any` introduced |
| Tests | All pass |
| Imports | No circular dependencies |

## Debugging Pattern

### Describe Issue

```
"Fix the memory leak in the image processing module.
Memory grows by ~50MB per upload."
```

### Cascade Investigation

1. Reads code in question
2. Identifies potential causes
3. Proposes fixes
4. Runs memory profiling

### Resolution

- Implement fix
- Run tests
- Verify memory stable

## Multi-File Pattern

### When to Use

- Feature spans multiple files
- Need to update API + UI + tests
- Complex refactoring

### Example Workflow

```
"Add pagination to the user list with:
- API endpoint with cursor pagination
- Frontend component with load more
- Database query optimization
- Tests for edge cases"
```

Cascade will:
1. Update database query
2. Create API route
3. Build UI component
4. Add integration tests

## Progressive Pattern

### Small Tasks → Simple Prompts

```
"Fix typo in README"
"Add error handling to login"
"Update button color to blue"
```

### Medium Tasks → Detailed Context

```
"Refactor auth middleware to support:
- JWT verification
- Role-based access
- Rate limiting
Use existing config patterns"
```

### Large Tasks → Structured Approach

1. Break into smaller parts
2. Execute incrementally
3. Verify each step
4. Build up complexity

## Write Mode Pattern

### Activating Write Mode

Press `Cmd+.` or click "Write mode" in Cascade panel

### Terminal-Aware Workflow

1. Run git command: `git checkout feature/auth`
2. Cascade tracks command
3. Make edits in editor
4. Cascade shows context
5. Ask "Continue my work"
6. Cascade resumes with awareness

### Use Cases

| Scenario | Benefit |
|----------|---------|
| Git operations | Cascade knows branch context |
| Terminal workflow | Context-aware suggestions |
| Long tasks | Never lose place |

## Best Practices

### Do

| Practice | Why |
|----------|-----|
| Be specific | Better code generation |
| Review diffs | Quality control |
| Test incrementally | Catch issues early |
| Use @ mentions | Accurate context |

### Don't

| Mistake | Solution |
|---------|----------|
| Vague requests | Add details |
| Accept all changes | Review carefully |
| Skip tests | Verify functionality |
| Ignore warnings | Address issues |