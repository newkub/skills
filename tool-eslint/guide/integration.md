# ESLint - Integration

การเชื่อมต่อ ESLint กับ tools และ workflows ต่างๆ

## Editor Integration

### VSCode

```json
// .vscode/settings.json
{
  "eslint.enable": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "vue"
  ],
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "editor.formatOnSave": false,
  "eslint.workingDirectories": [
    { "mode": "auto" }
  ]
}
```

### WebStorm

1. Settings → Languages & Frameworks → JavaScript → Code Quality Tools → ESLint
2. Enable "Automatic ESLint configuration"
3. Enable "Run on save"

## Build Tools Integration

### Vite

```javascript
// vite.config.js
import eslintPlugin from 'vite-plugin-eslint';

export default {
  plugins: [
    eslintPlugin({
      cache: true,
      include: ['src/**/*.js', 'src/**/*.ts']
    })
  ]
};
```

```bash
npm install --save-dev vite-plugin-eslint
```

### Webpack

```javascript
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        exclude: /node_modules/,
        use: {
          loader: 'eslint-loader',
          options: {
            cache: true
          }
        }
      }
    ]
  }
};
```

```bash
npm install --save-dev eslint-loader
```

### Rollup

```javascript
// rollup.config.js
import eslint from '@rollup/plugin-eslint';

export default {
  plugins: [
    eslint({
      include: 'src/**',
      exclude: 'node_modules/**'
    })
  ]
};
```

## Pre-commit Hooks

### Using lefthook

```yaml
# lefthook.yml
pre-commit:
  parallel: true
  commands:
    lint:
      glob: '*.{js,ts,jsx,tsx}'
      run: npx eslint --cache {staged_files}
    lint-all:
      run: npx eslint --cache .
```

```bash
npm install --save-dev @arkweid/lefthook
npm pkg set prepare="lefthook install"
npm run prepare
```

### Using husky

```bash
npm install --save-dev husky
npm pkg set prepare="husky install"
npm run prepare

npx husky add .husky/pre-commit "npx eslint --cache --fix"
```

### Using pre-commit

```yaml
# .pre-commit-config.yaml
repos:
  - repo: https://github.com/pre-commit/mirrors-eslint
    rev: v2.1.0
    hooks:
      - id: eslint
        args: ['--cache', '--fix']
```

```bash
pip install pre-commit
pre-commit install
```

## CI/CD Integration

### GitHub Actions

```yaml
# .github/workflows/lint.yml
name: Lint

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main, develop]

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
    - if: '$CI_COMMIT_BRANCH == "main"'
```

### CircleCI

```yaml
# .circleci/config.yml
version: 2.1

jobs:
  lint:
    docker:
      - image: cimg/node:20
    steps:
      - checkout
      - run: npm ci
      - run: npm run lint

workflows:
  lint-workflow:
    jobs:
      - lint
```

### Jenkins

```groovy
// Jenkinsfile
pipeline {
  agent any
  
  stages {
    stage('Lint') {
      steps {
        sh 'npm ci'
        sh 'npx eslint --cache --max-warnings 0 .'
      }
    }
  }
}
```

## Testing Integration

### Jest

```javascript
// jest.config.js
module.exports = {
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest'
  },
  // Run ESLint as part of test
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  }
};
```

### Vitest

```javascript
// vitest.config.js
import eslint from 'vite-plugin-eslint';

export default {
  plugins: [
    eslint()
  ]
};
```

## Framework Integration

### Next.js

```bash
npm install --save-dev eslint eslint-config-next
```

```javascript
// eslint.config.js (Next.js 14+)
import eslint from '@eslint/js';
import next from 'eslint-config-next';

export default [
  eslint.configs.recommended,
  ...next.configs['core-web-vitals']
];
```

### Create React App

```bash
npm install --save-dev eslint eslint-config-react-app
```

```javascript
// eslint.config.js
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

export default [
  {
    extends: ['react-app'],
    plugins: { react, 'react-hooks': reactHooks }
  }
];
```

### Vue

```bash
npm install --save-dev eslint eslint-plugin-vue vue-eslint-parser
```

```javascript
// eslint.config.js
import vue from 'eslint-plugin-vue';
import vueParser from 'vue-eslint-parser';

export default [
  ...vue.configs[':recommended'],
  {
    files: ['**/*.vue'],
    processor: vue.processors['.vue'],
    languageOptions: {
      parser: vueParser
    }
  }
];
```

## Monorepo Integration

### Turborepo

```javascript
// packages/shared/eslint.config.js
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

```json
// packages/shared/package.json
{
  "main": "index.js",
  "dependencies": {
    "eslint": "^9.0.0"
  }
}
```

### Lerna

```json
// lerna.json
{
  "packages": ["packages/*"],
  "version": "independent",
  "npmClient": "npm"
}
```

## Code Quality Tools

### Prettier

```bash
npm install --save-dev prettier eslint-config-prettier
```

```javascript
// eslint.config.js
import eslint from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';

export default [
  eslint.configs.recommended,
  prettierConfig
];
```

### Renovate

```json
// renovate.json
{
  "packageRules": [
    {
      "matchPackageNames": ["eslint"],
      "groupName": "ESLint"
    }
  ]
}
```

## Summary

```text
┌─────────────────────────────────────────────────┐
│          ESLint Integration Landscape             │
├─────────────────────────────────────────────────┤
│                                                  │
│   Editors                                        │
│   ├── VSCode (ESLint extension)                │
│   ├── WebStorm (built-in)                       │
│   └── Vim (ALE, COC)                           │
│                                                  │
│   Build Tools                                    │
│   ├── Vite (vite-plugin-eslint)                │
│   ├── Webpack (eslint-loader)                  │
│   └── Rollup (@rollup/plugin-eslint)           │
│                                                  │
│   CI/CD                                          │
│   ├── GitHub Actions                            │
│   ├── GitLab CI                                 │
│   ├── CircleCI                                  │
│   └── Jenkins                                   │
│                                                  │
│   Frameworks                                     │
│   ├── Next.js (eslint-config-next)             │
│   ├── Vue (eslint-plugin-vue)                  │
│   └── React (eslint-plugin-react)              │
│                                                  │
└─────────────────────────────────────────────────┘
```

## สรุป

- ESLint รวมเข้ากับ editors, build tools และ CI/CD ได้ง่าย
- Pre-commit hooks ช่วยจับปัญหาก่อน commit
- Framework-specific configs มีให้ใช้งานหลายตัว
- ใช้ caching ใน CI สำหรับ performance