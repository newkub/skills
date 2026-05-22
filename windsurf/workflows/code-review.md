# Code Review Workflow

Use Cascade and Windsurf Reviews for systematic code review.

## Pre-Review Setup

### 1. Configure Review Guidelines

Create `.windsurfrules` review section:

```markdown
## Code Review Standards

### Security
- Validate all inputs
- No secrets in code
- Proper auth checks

### Performance
- No N+1 queries
- Lazy load when possible
- Optimize images

### Testing
- Min 80% coverage
- Test edge cases
- Integration tests
```

### 2. Setup Windsurf Reviews (GitHub App)

1. Install app on repo
2. Configure guidelines
3. Set review rules

## Review Workflow

### Phase 1: Open Review

```
"Review PR #142:
- Check all changed files
- Verify test coverage
- Ensure code style
- Look for security issues"
```

### Phase 2: File-by-File Review

| File | Focus Areas |
|------|-------------|
| Components | Logic, props, types |
| API routes | Validation, errors |
| Tests | Coverage, edge cases |
| Config | Security, performance |

### Phase 3: Comments

```
"Add comment on line 45:
This validation is duplicated.
Extract to shared validateEmail function.
See: @lib/validation.ts"
```

### Phase 4: Approve/Request Changes

| Action | When |
|--------|------|
| Approve | All checks pass |
| Request changes | Issues found |
| Comment | Questions/suggestions |

## Checklist by Category

### Security

| Check | Description |
|-------|-------------|
| Input validation | Sanitize all user input |
| Auth/Authorization | Check permissions |
| Secrets | No API keys in code |
| SQL injection | Use parameterized queries |
| XSS | Escape output |

### Performance

| Check | Description |
|-------|-------------|
| Database queries | No N+1 |
| Bundle size | No unnecessary deps |
| Images | Optimized formats |
| Caching | Cache when appropriate |
| Lazy loading | Defer non-critical |

### Code Quality

| Check | Description |
|-------|-------------|
| TypeScript | No `any`, explicit types |
| Naming | Clear, consistent |
| Comments | Explain why, not what |
| Duplication | DRY principle |
| Error handling | Proper try/catch |

### Testing

| Check | Description |
|-------|-------------|
| Coverage | >80% for new code |
| Edge cases | Boundary conditions |
| Mocking | Mock external deps |
| Integration | Test API flow |

## Cascade Review Commands

### Start Review

```
"Review this PR for security issues"
"Check code style consistency"
"Verify test coverage"
```

### Specific Checks

```
"Find potential SQL injection"
"Check for memory leaks"
"Look for race conditions"
"Verify error handling"
```

### Fix Suggestions

```
"Suggest refactoring for:
1. Complex function at line 80
2. Repeated validation logic
3. Missing error handling"
```

## Windsurf Reviews (GitHub App)

### Setup

1. Install from GitHub Marketplace
2. Authorize repository
3. Configure review rules

### Features

| Feature | Description |
|---------|-------------|
| Auto-review | Triggers on PR |
| Security scan | Finds vulnerabilities |
| Style check | Enforces conventions |
| Edit PR | Updates title/description |

### Example Review Output

```
windsurf/src/migrate/vscodeMigrateSettings.ts:71

// Warning: Regex for trailing commas might not
// handle all JSON edge cases

Recommendation: Use JSON5 parser instead
```

## Review Types

### Quick Review (< 10 min)

| Focus | Description |
|-------|-------------|
| Logic | Does it work? |
| Security | Any vulnerabilities? |
| Style | Consistent? |

### Deep Review (> 30 min)

| Focus | Description |
|-------|-------------|
| Architecture | Good design? |
| Performance | Optimized? |
| Testing | Coverage? |
| Documentation | Clear? |

### Security Review

```
"Focus on:
1. Input validation
2. Auth/permissions
3. Data exposure
4. Error messages
5. Logging"
```

## Post-Review Actions

### If Changes Requested

1. Developer makes changes
2. Re-request review
3. Re-verify all points
4. Approve when done

### If Approved

1. Merge PR
2. Deploy to staging
3. Run integration tests
4. Deploy to production

## Best Practices

### For Author

| Practice | Why |
|----------|-----|
| Small PRs | Easier review |
| Clear description | Context |
| Self-review first | Catch obvious |
| Test locally | Save time |

### For Reviewer

| Practice | Why |
|----------|-----|
| Be constructive | Help learn |
| Explain why | Teach principles |
| Suggest alternatives | Show options |
| Timely review | Don't block |