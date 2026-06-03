# ESLint - Configuration

การตั้งค่าและปรับแต่ง ESLint

## Flat Config (Recommended)

### Basic Configuration

```javascript
// eslint.config.js
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import vue from 'eslint-plugin-vue';

export default [
  // Recommended rules
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  
  // Configuration object
  {
    files: ['**/*.js', '**/*.ts'],
    rules: {
      'no-console': 'warn',
      'no-unused-vars': 'error'
    }
  },
  
  // Language options
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

### Plugin Configuration

```javascript
import eslintPlugin from 'eslint-plugin-eslint';
import unicorn from 'eslint-plugin-unicorn';
import n from 'eslint-plugin-n';

export default [
  // Configure plugins
  {
    plugins: {
      eslint: eslintPlugin,
      unicorn: unicorn,
      n: n
    },
    rules: {
      'eslint/no-new': 'error',
      'unicorn/prefer-string-slice': 'warn',
      'n/no-unpublished-require': 'error'
    }
  }
];
```

## Rule Configuration

### Severity Levels

```javascript
{
  rules: {
    // Off
    'no-console': 'off',
    'no-console': 0,
    
    // Warning
    'no-unused-vars': 'warn',
    'no-unused-vars': 1,
    
    // Error
    'no-debugger': 'error',
    'no-debugger': 2
  }
}
```

### Rule Options

```javascript
{
  rules: {
    // String options
    'quotes': ['error', 'single', { avoidEscape: true }],
    
    // Object options
    'no-unused-vars': ['error', {
      args: 'after-used',
      argsIgnorePattern: '^_',
      varsIgnorePattern: '^_',
      caughtErrorsIgnorePattern: '^_'
    }],
    
    // Multiple options
    'max-len': ['error', {
      code: 100,
      comments: 80,
      strings: 100,
      templateStrings: 100,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true
    }]
  }
}
```

## Glob Patterns

### File Matching

```javascript
export default [
  // All JavaScript files
  { files: ['**/*.js'] },
  
  // TypeScript files
  { files: ['**/*.ts', '**/*.tsx'] },
  
  // Test files
  { files: ['**/*.test.js', '**/*.spec.js'] },
  
  // Configuration files
  { files: ['*.config.js', 'scripts/**/*.js'] },
  
  // Exclude node_modules
  { ignores: ['node_modules/**', 'dist/**'] }
];
```

### Multiple Patterns

```javascript
{
  files: [
    'src/**/*.js',
    'tests/**/*.js',
    '!src/**/*.test.js'
  ]
}
```

## Language Options

### ECMAScript Version

```javascript
{
  languageOptions: {
    ecmaVersion: 2022  // ES2022
  }
}
```

Available values: `3`, `5`, `6`, `2015`, `2016`, ..., `2022`, `latest`

### Source Type

```javascript
{
  languageOptions: {
    sourceType: 'module'  // ES modules (import/export)
    // or 'script' for CommonJS
  }
}
```

### Globals

```javascript
{
  languageOptions: {
    globals: {
      // Writable
      myGlobal: 'writable',
      
      // Readonly
      console: 'readonly',
      document: 'readonly',
      window: 'readonly',
      
      // Off
      jQuery: 'off'
    }
  }
}
```

## Environments

### Predefined Environments

```javascript
{
  languageOptions: {
    globals: {
      // Node.js
      node: true,
      
      // Browser
      browser: true,
      
      // ES6+
      es6: true,
      es2017: true,
      es2020: true,
      es2022: true,
      
      // Testing
      jest: true,
      mocha: true,
      jasmine: true,
      
      // Common
      commonjs: true,
      amd: true,
      jquery: true
    }
  }
}
```

## Ignores

### Ignore Files

```javascript
export default [
  eslint.configs.recommended,
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/build/**',
      '**/*.min.js',
      'coverage/**'
    ]
  }
];
```

### .eslintignore

```text
# .eslintignore
node_modules/
dist/
build/
*.min.js
coverage/
.vscode/
.idea/
```

## Processor Configuration

### Markdown Processor

```javascript
import markdown from 'eslint-plugin-markdown';

export default [
  {
    files: ['**/*.md'],
    plugins: {
      markdown: markdown
    },
    processor: markdown.processors['.md']
  }
];
```

## TypeScript Configuration

### Parser Options

```javascript
import tseslint from 'typescript-eslint';

export default [
  ...tseslint.configs.recommended,
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: process.cwd(),
        sourceType: 'module'
      }
    }
  }
];
```

### Plugin Rules

```javascript
import tseslint from 'typescript-eslint';

export default [
  ...tseslint.configs.recommended,
  {
    plugins: {
      '@typescript-eslint': tseslint.plugin
    },
    rules: {
      '@typescript-eslint/no-unused-vars': ['error', {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_'
      }],
      '@typescript-eslint/explicit-function-return-type': 'off'
    }
  }
];
```

## React Configuration

```javascript
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

export default [
  react.configs.recommended,
  reactHooks.configs.recommended,
  {
    plugins: {
      'react': react,
      'react-hooks': reactHooks
    },
    rules: {
      'react/jsx-uses-react': 'error',
      'react-hooks/exhaustive-deps': 'warn'
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  }
];
```

## Vue Configuration

```javascript
import vue from 'eslint-plugin-vue';
import vueParser from 'vue-eslint-parser';

export default [
  ...vue.configs[':recommended'],
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
        ecmaVersion: 2022,
        sourceType: 'module'
      }
    }
  }
];
```

## Configuration Checklist

- [ ] Choose Flat Config or Legacy
- [ ] Install required plugins
- [ ] Configure parser for TypeScript
- [ ] Set up file patterns with ignores
- [ ] Configure language options (ES version, globals)
- [ ] Enable recommended rules
- [ ] Add custom rules as needed
- [ ] Configure for test files

## Common Configurations

### React + TypeScript

```javascript
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...react.configs.recommended,
  reactHooks.configs.recommended,
  {
    rules: {
      'react/react-in-jsx-scope': 'off'
    }
  }
];
```

## สรุป

- Flat Config เป็นรูปแบบที่แนะนำตอนนี้
- Glob patterns ช่วยจัดการ file-specific rules
- Plugins ขยายความสามารถของ ESLint
- Language options กำหนด ecmaVersion และ globals