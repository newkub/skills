# ESLint - Key Concepts

แนวคิดหลักและคำศัพท์สำคัญสำหรับ ESLint

## 1. Linting Fundamentals

### What is Linting?

```text
┌─────────────────────────────────────────────────┐
│              Linting Process                     │
├─────────────────────────────────────────────────┤
│                                                  │
│   Source Code                                    │
│       │                                          │
│       ▼                                          │
│   ┌─────────────────────────────────────────┐   │
│   │           ESLint Engine                  │   │
│   │  ┌─────────┐  ┌─────────┐  ┌─────────┐  │   │
│   │  │ Parser  │─▶│ Rules   │─▶│ Reports │  │   │
│   │  └─────────┘  └─────────┘  └─────────┘  │   │
│   └─────────────────────────────────────────┘   │
│       │                                          │
│       ▼                                          │
│   ┌─────────────────────────────────────────┐   │
│   │        Linted Output                      │   │
│   │  - Warnings                               │   │
│   │  - Errors                                 │   │
│   │  - Auto-fix suggestions                   │   │
│   └─────────────────────────────────────────┘   │
│                                                  │
└─────────────────────────────────────────────────┘
```

### ESLint vs Other Tools

| Tool | Purpose | Scope |
|------|---------|-------|
| ESLint | Code quality & style | JavaScript/TypeScript |
| Prettier | Code formatting | Any language |
| TypeScript | Type checking | TypeScript only |
| Stylelint | CSS linting | Stylesheets |

## 2. Configuration Files

### Flat Config (eslint.config.js) - Recommended

```javascript
// eslint.config.js
import js from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'error'
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

### Legacy Config (.eslintrc.json)

```json
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
    "no-unused-vars": "warn"
  },
  "plugins": ["@typescript-eslint"]
}
```

## 3. Rule Structure

### Rule Definition

```javascript
// Rule: no-unused-vars
{
  "no-unused-vars": [
    "error",              // severity: off, warn, error
    {
      "args": "after-used",
      "argsIgnorePattern": "^_",
      "caughtErrors": "all",
      "varsIgnorePattern": "^_"
    }
  ]
}
```

### Severity Levels

| Level | Value | Behavior |
|-------|-------|----------|
| `"off"` / `0` | Off | Rule disabled |
| `"warn"` / `1` | Warning | Show warning, exit 0 |
| `"error"` / `2` | Error | Show error, exit 1 |

## 4. Plugins

### Popular ESLint Plugins

| Plugin | Purpose |
|--------|---------|
| `@typescript-eslint/eslint-plugin` | TypeScript support |
| `eslint-plugin-react` | React best practices |
| `eslint-plugin-vue` | Vue.js support |
| `eslint-plugin-unicorn` | Modern JS patterns |
| `eslint-plugin-n` | Node.js best practices |
| `eslint-plugin-import` | Import/export rules |
| `eslint-plugin-promise` | Promise patterns |
| `eslint-plugin-jest` | Jest testing |

### Using Plugins

```javascript
// eslint.config.js
import reactPlugin from 'eslint-plugin-react';
import vuePlugin from 'eslint-plugin-vue';

export default [
  // Enable plugin rules
  {
    plugins: {
      react: reactPlugin,
      vue: vuePlugin
    },
    rules: {
      'react/jsx-uses-react': 'error',
      'vue/no-v-html': 'warn'
    }
  }
];
```

## 5. Parsers

### Available Parsers

| Parser | Purpose |
|--------|---------|
| `@babel/eslint-parser` | Babel transpiled code |
| `@typescript-eslint/parser` | TypeScript |
| `vue-eslint-parser` | Vue SFC |
| `jsonc-eslint-parser` | JSON/JSONC |
| `yaml-eslint-parser` | YAML files |

### Parser Configuration

```javascript
export default [
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json'
      }
    }
  }
];
```

## 6. Processors

### Custom Processors

```javascript
// Extract linting from .md code blocks
const markdownProcessor = {
  preprocess(text) {
    // Extract code blocks
    const blocks = extractCodeBlocks(text);
    return blocks.map(code => ({
      text: code.content,
      filename: code.filename
    }));
  },
  postprocess(messages) {
    // Map messages back to original locations
    return messages;
  }
};
```

## 7. Environments

### Common Environments

```javascript
export default [
  {
    files: ['**/*.mjs'],
    languageOptions: {
      sourceType: 'module',
      ecmaVersion: 2022
    }
  },
  {
    files: ['tests/**/*.js'],
    languageOptions: {
      globals: {
        describe: 'readonly',
        it: 'readonly',
        expect: 'readonly',
        jest: 'readonly'
      }
    }
  }
];
```

## 8. Glob Patterns

### File Matching

```javascript
export default [
  // All JavaScript files
  { files: ['**/*.js'] },
  
  // Exclude node_modules
  { files: ['**/*.js'], ignores: ['node_modules/**'] },
  
  // Test files
  { files: ['**/*.test.js', '**/*.spec.js'] },
  
  // Configuration files
  { files: ['*.config.js', 'tools/**/*.js'] }
];
```

## 9. Cache System

### How Caching Works

```text
┌─────────────────────────────────────────────────┐
│              ESLint Cache                        │
├─────────────────────────────────────────────────┤
│                                                  │
│   First Run:                                     │
│   ├─ Lint all files                             │
│   ├─ Store results in .eslintcache            │
│   └─ Take time                                  │
│                                                  │
│   Subsequent Runs:                               │
│   ├─ Check .eslintcache                        │
│   ├─ Only lint changed files                    │
│   ├─ Re-lint if dependencies change            │
│   └─ Much faster!                               │
│                                                  │
└─────────────────────────────────────────────────┘
```

### Cache Options

```bash
# Enable cache
npx eslint --cache .

# Cache location
npx eslint --cache-location ./node_modules/.cache/.eslintcache .

# Cache file strategy (content hash vs file mtime)
npx eslint --cache-strategy content .
```

## สรุป

- ESLint ใช้ static analysis สำหรับ code quality
- Flat config เป็นรูปแบบที่แนะนำตอนนี้
- Plugins ขยายความสามารถของ ESLint
- Caching ช่วยเพิ่มความเร็วในการ lint