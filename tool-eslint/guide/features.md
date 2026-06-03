# ESLint - Features

คุณสมบัติและ capabilities ของ ESLint

## Core Features

### 1. Static Code Analysis

```javascript
// ESLint analyzes code without running it
// Example: detecting unused variables
const unused = 42; // ESLint: 'unused' is defined but never used
```

### 2. Auto-fix

```bash
# Auto-fix all fixable issues
npx eslint --fix

# Auto-fix specific files
npx eslint --fix src/**/*.js

# Auto-fix with diff
npx eslint --fix-dry-run .
```

### 3. Plugin System

```javascript
// eslint.config.js
import reactPlugin from 'eslint-plugin-react';
import vuePlugin from 'eslint-plugin-vue';
import unicornPlugin from 'eslint-plugin-unicorn';

export default [
  {
    plugins: {
      react: reactPlugin,
      vue: vuePlugin,
      unicorn: unicornPlugin
    },
    rules: {
      'react/jsx-uses-react': 'error',
      'vue/no-v-html': 'warn',
      'unicorn/prefer-string-slice': 'warn'
    }
  }
];
```

### 4. Shareable Configs

```javascript
// Extend popular configs
export default [
  js.configs.recommended,
  tseslint.configs.recommended,
  reactPlugin.configs.recommended,
  unicornPlugin.configs.recommended
];
```

## Configuration Features

### 5. Flat Config (New)

```javascript
// eslint.config.js - Modern config format
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      'no-console': 'warn',
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }]
    }
  },
  {
    files: ['**/*.test.js'],
    rules: {
      'no-undefined': 'off'
    }
  }
];
```

### 6. Glob Patterns

```javascript
export default [
  // All JS files
  { files: ['**/*.js'], rules: { 'no-var': 'error' } },
  
  // Test files
  { files: ['**/*.test.js'], rules: { 'no-undefined': 'off' } },
  
  // Exclude node_modules
  { ignores: ['**/node_modules/**'] },
  
  // Configuration files
  { files: ['*.config.js', 'scripts/**/*.js'] }
];
```

### 7. Language Options

```javascript
export default [
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        console: 'readonly',
        document: 'readonly',
        window: 'readonly'
      }
    }
  }
];
```

## Linting Features

### 8. Per-file Overrides

```javascript
export default [
  // Default rules
  { rules: { 'no-console': 'error' } },
  
  // Override for specific files
  {
    files: ['scripts/*.js'],
    rules: { 'no-console': 'off' }
  },
  
  // Override for test files
  {
    files: ['**/*.test.js'],
    rules: { 'no-undefined': 'off' }
  }
];
```

### 9. Cache System

```bash
# Enable caching (enabled by default with --cache)
npx eslint --cache .

# Specify cache location
npx eslint --cache-location ./node_modules/.cache/.eslintcache .

# Different cache strategies
npx eslint --cache-strategy content .  # Hash file content
npx eslint --cache-strategy metadata . # Use file mtime
```

### 10. Parallel Processing

```bash
# Use multiple cores
npx eslint --max-warnings 0 --debug src/

# Enable worker threads (automatic in ESLint 9+)
npx eslint --experimental-max-workers=4 .
```

## Output Features

### 11. Multiple Output Formats

```bash
# Stylish (default)
npx eslint src/

# JSON
npx eslint --format json src/
npx eslint --format json src/ > lint-results.json

# JUnit XML (for CI)
npx eslint --format junit src/ > test-results.xml

# HTML
npx eslint --format html src/ > lint-report.html

# Checkstyle (for Jenkins)
npx eslint --format checkstyle src/ > checkstyle.xml

# Custom format
npx eslint --format custom src/
```

### 12. Custom Formatters

```javascript
// my-formatter.js
export default function(results) {
  let output = '';
  
  for (const result of results) {
    output += `File: ${result.filePath}\n`;
    for (const message of result.messages) {
      output += `  - ${message.ruleId}: ${message.message}\n`;
    }
  }
  
  return output;
}
```

```bash
npx eslint --format ./my-formatter.js src/
```

## Integration Features

### 13. Fix Commands

```bash
# Fix and show diff
npx eslint --fix-dry-run .

# Fix only specific rule
npx eslint --fix --rule 'quotes: ["error", "single"]' src/

# Fix and return non-zero on fixable
npx eslint --fix --exit-on-fixable-error .
```

### 14. Ignore Files

```text
# .eslintignore
node_modules/
dist/
build/
*.min.js
coverage/
```

### 15. Cache Debugging

```bash
# Show cache info
npx eslint --cache --cache-info src/

# Remove cache
npx eslint --cache --clear src/

# Force re-lint all files
npx eslint --no-cache .
```

## IDE Integration

### 16. VSCode Extension

```json
// .vscode/settings.json
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
  }
}
```

### 17. IDE Integration Features

```text
- Real-time linting as you type
- Quick fixes with one click
- Inline error display
- Hover documentation
- Go to rule definition
```

## Advanced Features

### 18. Custom Rules

```javascript
// my-rules/no-todo.js
export default {
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallow TODO comments'
    },
    fixable: null
  },
  create(context) {
    return {
      Program(node) {
        const sourceCode = context.sourceCode;
        const comments = sourceCode.getAllComments();
        
        for (const comment of comments) {
          if (comment.value.includes('TODO')) {
            context.report({
              node: comment,
              message: 'Unexpected TODO comment.'
            });
          }
        }
      }
    };
  }
};
```

### 19. Rule Dependencies

```javascript
export default [
  // Some rules depend on others
  {
    rules: {
      'no-console': 'warn',
      'prefer-const': 'warn'
    }
  }
];
```

### 20. Experimental Features

```bash
# Enable experimental features
npx eslint --experimental-feature .

# Examples:
# - New APIs
# - Faster parsing
# - Better TypeScript support
```

## Features Comparison

| Feature | ESLint | TSLint | Prettier |
|---------|--------|--------|----------|
| JavaScript | ✅ | ❌ | ✅ |
| TypeScript | ✅ | ✅ | ✅ |
| Auto-fix | ✅ | ✅ | ✅ |
| Plugin System | ✅ | ✅ | ❌ |
| Config Sharing | ✅ | ✅ | ❌ |
| Custom Rules | ✅ | ✅ | ❌ |
| IDE Support | ✅ | ✅ | ✅ |
| Speed | Fast | Slow | Fast |

## สรุป

- ESLint มี features ครบถ้วนสำหรับ code quality
- Auto-fix และ plugin system ทำให้ยืดหยุ่น
- รองรับหลาย output formats สำหรับ CI/CD
- Custom rules ให้ความสามารถไม่จำกัด
- IDE integration ช่วยให้ development ง่ายขึ้น