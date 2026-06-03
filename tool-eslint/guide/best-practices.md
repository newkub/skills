# ESLint - Best Practices

แนวทางที่ดีที่สุดสำหรับการใช้ ESLint

## Configuration Best Practices

### 1. Use Flat Config

```javascript
// eslint.config.js - Recommended
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  // Your rules here
];
```

```json
// .eslintrc.json - Legacy
// Avoid if possible
{
  "extends": ["eslint:recommended"]
}
```

### 2. Use Recommended Configs

```javascript
export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  reactPlugin.configs.recommended
];
```

### 3. Enable Caching

```bash
# Always use cache for faster linting
npx eslint --cache .
```

## Rule Best Practices

### 1. Start Strict, Relax Later

```javascript
// Start with recommended + strict rules
export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      'no-console': 'error',
      'no-unused-vars': 'error',
      'prefer-const': 'error'
    }
  }
];
```

### 2. Use Error for Bugs, Warning for Style

```javascript
{
  rules: {
    // Error - potential bugs
    'no-undef': 'error',
    'no-unused-vars': 'error',
    
    // Warning - style issues
    'no-console': 'warn',
    'max-len': 'warn'
  }
}
```

### 3. Follow Naming Conventions

```javascript
{
  rules: {
    // Use descriptive names
    'react/jsx-filename-extension': ['error', {
      extensions: ['.jsx', '.tsx']
    }]
  }
}
```

## Performance Best Practices

### 1. Use Cache

```bash
# Enable caching
npx eslint --cache .

# Cache location
npx eslint --cache --cache-location ./node_modules/.cache/eslint .
```

### 2. Ignore Files

```javascript
// eslint.config.js
export default [
  // Ignore patterns
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'build/**',
      'coverage/**',
      '*.min.js'
    ]
  }
];
```

### 3. Split by File Type

```javascript
export default [
  // Fast JS linting
  {
    files: ['**/*.js'],
    rules: { /* JS rules */ }
  },
  
  // Slower TS linting
  {
    files: ['**/*.ts'],
    rules: { /* TS rules */ }
  }
];
```

## Team Best Practices

### 1. Share Config

```javascript
// eslint.config.js in shared package
import sharedConfig from '@my-org/eslint-config';

export default [
  ...sharedConfig,
  // Additional project rules
];
```

### 2. Document Exceptions

```javascript
export default [
  eslint.configs.recommended,
  {
    rules: {
      // Document why rule is disabled
      'max-len': ['error', {
        code: 120,  // 100 is too restrictive for this codebase
        ignoreUrls: true
      }]
    }
  }
];
```

### 3. Use Pre-commit Hooks

```yaml
# lefthook.yml
pre-commit:
  commands:
    lint:
      glob: '*.{js,ts}'
      run: npx eslint {staged_files}
```

## IDE Best Practices

### 1. Enable Auto-fix on Save

```json
// .vscode/settings.json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ]
}
```

### 2. Disable Format on Save for ESLint

```json
{
  "editor.formatOnSave": false,
  "[javascript]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  }
}
```

## CI/CD Best Practices

### 1. Fail on Warnings in CI

```bash
# CI should be strict
npx eslint --max-warnings 0 .
```

### 2. Use Parallel Processing

```bash
# Enable parallel workers
npx eslint --maxWorkers=4 .
```

### 3. Cache in CI

```yaml
# GitHub Actions
- name: Setup Node
  uses: actions/setup-node@v4
  with:
    cache: 'npm'
    
- name: Run ESLint
  run: npm run lint
```

## Common Mistakes

### 1. ❌ Don't Disable Rules Globally

```javascript
// ❌ Bad
{
  rules: {
    'no-console': 'off'  // Don't disable globally
  }
}

// ✅ Good
{
  files: ['scripts/**/*.js'],
  rules: {
    'no-console': 'off'  // Only for scripts
  }
}
```

### 2. ❌ Don't Use Legacy Config

```javascript
// ❌ Old .eslintrc format
{
  "env": { "node": true },
  "extends": ["eslint:recommended"]
}

// ✅ New Flat Config
export default [eslint.configs.recommended];
```

### 3. ❌ Don't Ignore Package Files

```javascript
// ❌ Missing ignores
{
  ignores: ['node_modules']  // Don't ignore build outputs
}

// ✅ Complete ignores
{
  ignores: [
    'node_modules',
    'dist',
    'build',
    'coverage',
    '.git'
  ]
}
```

## Checklists

### Pre-commit Checklist

- [ ] ESLint runs without errors
- [ ] No uncommitted lint issues
- [ ] Cache is up to date
- [ ] Auto-fix applied where possible

### CI Checklist

- [ ] ESLint passes on all commits
- [ ] Fails on warnings (`--max-warnings 0`)
- [ ] Uses caching
- [ ] Has timeout set

### Project Setup Checklist

- [ ] Using Flat Config
- [ ] Recommended rules enabled
- [ ] TypeScript parser configured
- [ ] Ignores configured
- [ ] Pre-commit hook set up
- [ ] CI configured

## Resources

- [ESLint Docs](https://eslint.org/docs/)
- [TypeScript ESLint](https://typescript-eslint.io/)
- [Awesome ESLint](https://github.com/dustinspecker/awesome-eslint)

## สรุป

- ใช้ Flat Config แทน Legacy
- Enable caching สำหรับ performance
- ใช้ recommended configs เป็น base
- แยก rules ตาม file types
- ตั้งค่า pre-commit hooks สำหรับ team