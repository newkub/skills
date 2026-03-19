# Git Workflow

## Rationale

Git workflow ที่ consistent ช่วยให้ collaboration ดีขึ้นและ reduce merge conflicts

## Bad Practice

```bash
# ❌ Commit messages ไม่ชัดเจน
git commit -m "fix"
git commit -m "update"
git commit -m "wip"

# ❌ Large commits (100+ files)
git add .
git commit -m "everything"

# ❌ Committing directly to main
git checkout main
git commit -am "hotfix"

# ❌ No pull requests
git push origin main
```

## Good Practice

```bash
# ✅ Clear commit messages
git commit -m "fix: validate email format in createUser"
git commit -m "feat: add user authentication"
git commit -m "refactor: extract user service"

# ✅ Small, focused commits
git add user-service.ts
git commit -m "feat: add getUserById method"

git add user-repository.ts
git commit -m "feat: add findUser method"

# ✅ Feature branch workflow
git checkout -b feature/user-authentication
# ... work
git push origin feature/user-authentication
# create pull request

# ✅ Pull request reviews
# get approval before merging
```

## Commit Message Format

```text
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation changes
- **style**: Code style changes (formatting, etc.)
- **refactor**: Code refactoring
- **test**: Adding tests
- **chore**: Maintenance tasks

### Examples

```text
feat(auth): add JWT token validation

Implement JWT token validation middleware to protect API endpoints.

Closes #123

fix(user): handle null email in createUser

Add null check for email field to prevent crashes.

Closes #124
```

## Branch Strategy

### 1. Main Branch

- **main/master**: Production code
- **develop**: Integration branch for features

### 2. Feature Branches

- `feature/user-authentication`
- `feature/payment-gateway`
- `bugfix/login-error`

### 3. Release Branches

- `release/v1.0.0`
- `release/v1.1.0`

## Workflow

1. **Create feature branch**

   ```bash
   git checkout -b feature/user-authentication
   ```

2. **Make changes and commit**

   ```bash
   git add .
   git commit -m "feat: add user authentication"
   ```

3. **Push and create PR**

   ```bash
   git push origin feature/user-authentication
   ```

4. **Review and merge**
   - Get code review approval
   - Resolve conflicts if needed
   - Merge to develop or main

## References

- [Conventional Commits](https://www.conventionalcommits.org/)
- [GitHub Flow](https://docs.github.com/en/get-started/quickstart/github-flow)
