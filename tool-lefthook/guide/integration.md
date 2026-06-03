# Integration

## การรวม Lefthook กับ Tools อื่นๆ

### Package Manager Integration

#### npm

```bash
# Install lefthook
npm install --save-dev lefthook

# Add scripts to package.json
{
  "scripts": {
    "prepare": "lefthook install"
  }
}
```

#### yarn

```bash
# Install lefthook
yarn add --dev lefthook

# Update prepare script
yarn husky set .husky/prepare "lefthook install"
```

#### pnpm

```bash
# Install lefthook
pnpm add -D lefthook
```

### CI/CD Integration

#### GitHub Actions

```yaml
# .github/workflows/ci.yml
name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  lint-and-test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run Lefthook
        run: npx lefthook run pre-push
```

#### GitLab CI

```yaml
# .gitlab-ci.yml
stages:
  - test

lefthook:
  stage: test
  image: node:20
  before_script:
    - npm ci
  script:
    - npx lefthook run pre-push
```

### Linting Tools Integration

#### ESLint

```yaml
# lefthook.yml
pre-commit:
  commands:
    eslint:
      glob: "*.{js,ts,jsx,tsx}"
      run: npx eslint {staged_files}
```

#### Prettier

```yaml
pre-commit:
  commands:
    prettier:
      glob: "*.{js,ts,jsx,tsx,json,css,md}"
      run: npx prettier --check {staged_files}
```

#### TypeScript

```yaml
pre-commit:
  commands:
    tsc:
      glob: "*.{ts,tsx}"
      run: npx tsc --noEmit
```

### Testing Tools Integration

#### Vitest

```yaml
pre-commit:
  commands:
    test:
      glob: "*.{ts,tsx}"
      run: npm run test

pre-push:
  commands:
    test:
      run: npm run test:ci
```

#### Jest

```yaml
pre-push:
  commands:
    test:
      run: npm run test -- --bail
```

### Pre-commit Tools Integration

#### lint-staged

```yaml
# lefthook.yml
pre-commit:
  commands:
    lint-staged:
      run: npx lint-staged
```

#### commitlint

```yaml
# lefthook.yml
commit-msg:
  commands:
    commitlint:
      run: npx commitlint --edit {1}
```

### IDE Integration

| IDE | Integration |
|-----|-------------|
| VS Code | Enable/disable hooks in settings |
| JetBrains | Native Git hooks support |
| Vim/Neovim | Use with vim-husk or similar |
| Neovim (lazy.nvim) | Configure in plugin options |

### Docker Integration

```dockerfile
# Dockerfile
FROM node:20

WORKDIR /app

# Install lefthook
RUN npm install -g lefthook

# Copy config
COPY lefthook.yml .

# Install hooks
RUN lefthook install

CMD ["bash"]
```

### Monorepo Integration

```yaml
# lefthook.yml (root)
pre-commit:
  commands:
    eslint:
      glob: "*.{js,ts}"
      run: npx eslint {staged_files}
      cwd: packages/app

    tsc:
      glob: "*.{ts,tsx}"
      run: npx tsc --noEmit
      cwd: packages/app
```

### Version Control Integration

```bash
# Add to .gitignore
lefthook.lock

# Ensure hooks are tracked
git add .git/hooks/pre-commit
```

### Tool Version Enforcement

```yaml
pre-commit:
  commands:
    eslint:
      run: npx eslint {staged_files}
    node-version:
      run: node --version | grep -q "20." || exit 1
```

### Debugging Integration

```bash
# Enable verbose mode
LEFTHOOK_VERBOSE=1 git commit

# Enable JSON output
LEFTHOOK=json npx lefthook run pre-commit

# Dry run
npx lefthook run pre-commit --dry-run
```