# ESLint - Installation

การติดตั้งและเริ่มต้นใช้งาน ESLint

## Prerequisites

| Requirement | Version |
|-------------|---------|
| Node.js | >= 18.x |
| npm/yarn/pnpm | any recent version |

## Installation Methods

### 1. Local Installation (Recommended)

```bash
# Using npm
npm install --save-dev eslint

# Using yarn
yarn add --dev eslint

# Using pnpm
pnpm add --save-dev eslint
```

### 2. Global Installation

```bash
# Using npm
npm install -g eslint

# Verify installation
npx eslint --version
```

### 3. npx Usage (No Install)

```bash
# Run without installing
npx eslint@latest --version
```

## Quick Setup

### 1. Initialize with Questions

```bash
npm init @eslint/config
```

Output:
```
? How would you like to use ESLint? ...
  > To check syntax only
  > To check syntax and find problems
  > To check syntax, find problems, and enforce code style

? What type of modules does your project use? ...
  > JavaScript modules (import/export)
  > CommonJS (require/exports)
  > None of these

? Which framework does your project use? ...
  > React
  > Vue.js
  > None of these

? Does your project use TypeScript? » No / Yes

? Where does your project run? ...
  > Browser
  > Node

? Would you like to run `npm audit`? » Yes
```

### 2. Manual Setup

```bash
# Install ESLint
npm install --save-dev eslint

# Install TypeScript ESLint
npm install --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

## Configuration

### Create Configuration File

#### Flat Config (Recommended)

```javascript
// eslint.config.js
import js from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      'no-console': 'warn',
      'no-unused-vars': 'error'
    }
  }
];
```

#### Legacy Config

```json
// .eslintrc.json
{
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 2021,
    "sourceType": "module"
  },
  "rules": {
    "no-console": "warn"
  },
  "plugins": ["@typescript-eslint"]
}
```

## Package.json Scripts

### Add ESLint Scripts

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint --fix .",
    "lint:check": "eslint --max-warnings 0 ."
  }
}
```

### Run Linting

```bash
# Basic linting
npm run lint

# Auto-fix
npm run lint:fix

# Strict mode (fail on warnings)
npm run lint:check
```

## Integration with Editors

### VSCode

1. Install ESLint extension
2. Add to .vscode/settings.json:

```json
{
  "eslint.enable": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ],
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "editor.formatOnSave": false
}
```

### WebStorm

Settings → Languages & Frameworks → JavaScript → Code Quality Tools → ESLint

## CI/CD Integration

### GitHub Actions

```yaml
# .github/workflows/lint.yml
name: Lint

on: [push, pull_request]

jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Run ESLint
        run: npm run lint
```

### GitLab CI

```yaml
# .gitlab-ci.yml
eslint:
  image: node:20
  script:
    - npm ci
    - npm run lint
  rules:
    - if: '$CI_PIPELINE_SOURCE == "merge_request_event"'
```

## Pre-commit Hooks

### Using lefthook

```yaml
# lefthook.yml
pre-commit:
  parallel: true
  commands:
    lint:
      run: npx eslint --cache {staged_files}
```

## Uninstall ESLint

```bash
# Remove from package.json
npm uninstall eslint

# Remove global installation
npm uninstall -g eslint
```

## Next Steps

- [Configuration](./configuration.md) - การตั้งค่า ESLint เพิ่มเติม
- [Best Practices](./best-practices.md) - แนวทางที่ดีที่สุด
- [Integration](./integration.md) - การเชื่อมต่อกับ tools อื่น