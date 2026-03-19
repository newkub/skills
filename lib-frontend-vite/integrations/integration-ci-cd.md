---
title: Integration - CI/CD
description: การตั้งค่า CI/CD pipelines สำหรับ Vite projects
---

# CI/CD Integration

## GitHub Actions

### Basic Workflow

```yaml
# .github/workflows/deploy.yml
name: Build and Deploy

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        
      - name: Setup Bun
        uses: oven-sh/setup-bun@v1
        with:
          bun-version: latest
          
      - name: Install dependencies
        run: bun install
        
      - name: Type check
        run: bun run typecheck
        
      - name: Lint
        run: bun run lint
        
      - name: Test
        run: bun run test
        
      - name: Build
        run: bun run build
        env:
          VITE_API_URL: ${{ secrets.VITE_API_URL }}
          
      - name: Upload build
        uses: actions/upload-artifact@v4
        with:
          name: dist
          path: dist
```

### Deploy to Vercel

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v4
      
      - uses: oven-sh/setup-bun@v1
      
      - run: bun install
      - run: bun run build
      
      - uses: vercel/action-deploy@v1
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```

### Deploy to Netlify

```yaml
name: Deploy to Netlify

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v4
      
      - uses: oven-sh/setup-bun@v1
      
      - run: bun install
      - run: bun run build
      
      - uses: nwtgck/actions-netlify@v3
        with:
          publish-dir: './dist'
          production-deploy: true
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

---

## GitLab CI

### .gitlab-ci.yml

```yaml
stages:
  - install
  - test
  - build
  - deploy

variables:
  NODE_VERSION: "20"
  BUN_VERSION: "1.0"

install:
  stage: install
  image: oven/bun:latest
  script:
    - bun install --frozen-lockfile
  cache:
    key: ${CI_COMMIT_REF_SLUG}
    paths:
      - node_modules/

lint:
  stage: test
  image: oven/bun:latest
  script:
    - bun run lint
  dependencies:
    - install

test:
  stage: test
  image: oven/bun:latest
  script:
    - bun run test
  dependencies:
    - install

build:
  stage: build
  image: oven/bun:latest
  script:
    - bun run build
  artifacts:
    paths:
      - dist/
  only:
    - main

deploy:
  stage: deploy
  image: alpine:latest
  script:
    - echo "Deploy to production"
  only:
    - main
```

---

## Deployment Strategies

### Preview Deployments

```yaml
# .github/workflows/preview.yml
name: Deploy Preview

on:
  pull_request:
    types: [opened, synchronize]

jobs:
  preview:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v4
      - uses: oven-sh/setup-bun@v1
      - run: bun install
      - run: bun run build
      
      - name: Deploy to Preview
        uses: vercel/action-deploy@v1
        with:
          github-token: ${{ secrets.GITHUB_TOKEN }}
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
```

### Production Deployment

```yaml
# .github/workflows/production.yml
name: Deploy Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    environment: production
    
    steps:
      - uses: actions/checkout@v4
      - uses: oven-sh/setup-bun@v1
      
      - name: Build for production
        run: bun run build
        env:
          NODE_ENV: production
          
      - name: Deploy
        run: |
          # Deploy commands
```

---

## Environment Variables

### GitHub Secrets

```bash
# Set secrets
gh secret set VITE_API_URL --body "https://api.example.com"
gh secret set DEPLOY_TOKEN --body "xxx"
```

### Using in CI

```yaml
- name: Build
  run: bun run build
  env:
    VITE_API_URL: ${{ secrets.VITE_API_URL }}
    VITE_ANALYTICS_ID: ${{ secrets.VITE_ANALYTICS_ID }}
```

---

## Testing in CI

### Unit Tests

```yaml
- name: Run tests
  run: bun run test:unit
  
- name: Coverage
  run: bun run test:coverage
```

### E2E Tests

```yaml
- name: Install Playwright
  run: bunx playwright install

- name: Run E2E tests
  run: bun run test:e2e
```

---

## Performance Checks

### Bundle Size Monitoring

```yaml
- name: Build
  run: bun run build
  
- name: Check bundle size
  run: |
    MAX_SIZE=1048576  # 1MB
    BUNDLE_SIZE=$(stat -f%z dist/assets/*.js | sort -n | tail -1)
    if [ $BUNDLE_SIZE -gt $MAX_SIZE ]; then
      echo "Bundle size exceeds limit"
      exit 1
    fi
```

### Lighthouse CI

```yaml
- name: Lighthouse CI
  run: |
    npm install -g @lhci/cli
    lhci autorun
```

---

## Common CI/CD Patterns

### Caching

```yaml
- name: Cache dependencies
  uses: actions/cache@v4
  with:
    path: |
      ~/.bun/install/cache
      node_modules
    key: ${{ runner.os }}-bun-${{ hashFiles('**/bun.lockb') }}
```

### Matrix Builds

```yaml
strategy:
  matrix:
    node: [18, 20, 22]
    
steps:
  - uses: oven-sh/setup-bun@v1
    with:
      bun-version: ${{ matrix.node }}
```

### Conditional Steps

```yaml
- name: Deploy to staging
  if: github.ref == 'refs/heads/develop'
  run: bun run deploy:staging
  
- name: Deploy to production
  if: github.ref == 'refs/heads/main'
  run: bun run deploy:production
```
