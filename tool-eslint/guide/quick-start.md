# ESLint - Quick Start

เริ่มต้นใช้งาน ESLint อย่างรวดเร็ว

## Basic Setup

### 1. Install ESLint

```bash
npm install --save-dev eslint
```

### 2. Create Config

```javascript
// eslint.config.js
import eslint from '@eslint/js';

export default [
  eslint.configs.recommended,
  {
    rules: {
      'no-unused-vars': 'warn'
    }
  }
];
```

### 3. Add Script

```json
{
  "scripts": {
    "lint": "eslint ."
  }
}
```

### 4. Run

```bash
npm run lint
```

## With TypeScript

### 1. Install Dependencies

```bash
npm install --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

### 2. Update Config

```javascript
// eslint.config.js
import js from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended
];
```

### 3. Add tsconfig.json

```json
{
  "compilerOptions": {
    "project": "./tsconfig.json"
  }
}
```

## With React

### 1. Install Dependencies

```bash
npm install --save-dev eslint-plugin-react eslint-plugin-react-hooks
```

### 2. Update Config

```javascript
// eslint.config.js
import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

export default [
  js.configs.recommended,
  react.configs.recommended,
  reactHooks.configs.recommended,
  {
    rules: {
      'react/react-in-jsx-scope': 'off'
    }
  }
];
```

## Quick Commands

### Lint All Files

```bash
npx eslint .
```

### Lint Specific Files

```bash
npx eslint src/
npx eslint "src/**/*.js"
npx eslint "src/**/*.{js,ts}"
```

### Fix Auto-fixable Issues

```bash
npx eslint --fix .
```

### Strict Mode

```bash
npx eslint --max-warnings 0 .
```

## Common Workflows

### 1. Pre-commit Hook

```bash
# Install husky
npm install --save-dev husky

# Add prepare script
npm pkg set prepare="husky install"

# Add hook
npx husky add .husky/pre-commit "npx eslint --cache --fix"
```

### 2. CI/CD Integration

```yaml
# .github/workflows/lint.yml
name: Lint

on: [push, pull_request]

jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      - run: npm ci
      - run: npm run lint
```

### 3. VSCode Integration

1. Install ESLint extension
2. Create .vscode/settings.json:

```json
{
  "eslint.enable": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  }
}
```

## Common Issues

### 1. Parser Not Found

```javascript
// Install parser
npm install --save-dev @typescript-eslint/parser

// Update config
import tseslint from 'typescript-eslint';
export default [{ parser: tseslint.parser }];
```

### 2. Plugin Not Found

```bash
# Install plugin
npm install --save-dev eslint-plugin-react

# Update config
import react from 'eslint-plugin-react';
export default [{ plugins: { react } }];
```

### 3. TypeScript Errors

```javascript
// Add parser options
{
  parser: tseslint.parser,
  parserOptions: {
    project: './tsconfig.json'
  }
}
```

## Debug Mode

```bash
# Verbose output
npx eslint --debug .

# Show file list
npx eslint --print-config . > config.json

# Check specific file
npx eslint src/example.js
```

## Next Steps

- [Configuration](./configuration.md) - การตั้งค่าเพิ่มเติม
- [Best Practices](./best-practices.md) - แนวทางที่ดีที่สุด
- [Integration](./integration.md) - การเชื่อมต่อกับ tools อื่น