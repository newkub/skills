# CI/CD

## Rationale

CI/CD ช่วย automate testing, deployment, และ reduce human errors

## Bad Practice

```yaml
# ❌ No tests in CI
name: CI
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - run: npm install
      - run: npm run build

# ❌ Deploy on every push
# ❌ No environment separation
# ❌ Manual deployments
```

## Good Practice

```yaml
# ✅ Full CI/CD pipeline
name: CI/CD
on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main, develop]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
      - run: npm ci
      - run: npm run lint
      - run: npm run test
      - run: npm run test:e2e

  build:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - run: npm run build

  deploy-staging:
    needs: build
    if: github.ref == 'refs/heads/develop'
    runs-on: ubuntu-latest
    steps:
      - run: npm run deploy:staging

  deploy-production:
    needs: build
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    steps:
      - run: npm run deploy:production
```

## CI Pipeline

### 1. Install Dependencies
```yaml
- run: npm ci
```

### 2. Lint
```yaml
- run: npm run lint
```

### 3. Unit Tests
```yaml
- run: npm run test
```

### 4. Build
```yaml
- run: npm run build
```

### 5. E2E Tests
```yaml
- run: npm run test:e2e
```

## Deployment Strategy

### 1. Environments
- **staging**: Test environment
- **production**: Live environment

### 2. Deployment Triggers
- **develop**: Deploy to staging
- **main**: Deploy to production

### 3. Rollback Strategy
- Keep previous versions
- One-click rollback
- Blue-green deployment

## Best Practices

### 1. Fast Feedback
- **Run tests first** (fastest)
- **Build after tests pass**
- **Deploy after build succeeds**

### 2. Environment Variables
- **Never commit secrets**
- **Use GitHub Secrets**
- **Different secrets per environment**

### 3. Monitoring
- **Deploy alerts**
- **Error tracking**
- **Performance monitoring**

## References

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [CI/CD Best Practices](https://martinfowler.com/articles/continuous-integration.html)
