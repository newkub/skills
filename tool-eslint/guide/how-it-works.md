# ESLint - How It Works

ภาพรวมการทำงานของ ESLint

## Architecture Overview

```text
┌─────────────────────────────────────────────────────────────────┐
│                    ESLint Processing Pipeline                     │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│   ┌───────────────┐                                             │
│   │  Input Files  │                                             │
│   └───────┬───────┘                                             │
│           │                                                     │
│           ▼                                                     │
│   ┌─────────────────────────────────────────────────────────┐   │
│   │                   Configuration Loading                  │   │
│   │   - Load eslint.config.js                               │   │
│   │   - Load plugins                                        │   │
│   │   - Load parsers                                        │   │
│   │   - Resolve file patterns                               │   │
│   └───────────────────────┬─────────────────────────────────┘   │
│                           │                                      │
│                           ▼                                      │
│   ┌─────────────────────────────────────────────────────────┐   │
│   │                   File Traversal                         │   │
│   │   - Glob pattern matching                               │   │
│   │   - File filtering (ignores)                            │   │
│   │   - Parallel processing                                  │   │
│   └───────────────────────┬─────────────────────────────────┘   │
│                           │                                      │
│                           ▼                                      │
│   ┌─────────────────────────────────────────────────────────┐   │
│   │                   Linting Process                         │   │
│   │                                                            │   │
│   │   ┌─────────┐  ┌─────────┐  ┌─────────┐                │   │
│   │   │ Parser  │─▶│  Rules  │─▶│ Fixer   │                │   │
│   │   └─────────┘  └─────────┘  └─────────┘                │   │
│   │       │              │             │                   │   │
│   │       ▼              ▼             ▼                   │   │
│   │   ┌────────────────────────────────────────────────┐    │   │
│   │   │              Results                         │    │   │
│   │   │  - Messages (warnings, errors)               │    │   │
│   │   │  - Fix commands                               │    │   │
│   │   │  - Statistics                                │    │   │
│   │   └────────────────────────────────────────────────┘    │   │
│   └─────────────────────────────────────────────────────────┘   │
│                           │                                      │
│                           ▼                                      │
│   ┌─────────────────────────────────────────────────────────┐   │
│   │                   Output Formatting                      │   │
│   │   - Stylish (default)                                  │   │
│   │   - JSON                                               │   │
│   │   - HTML                                               │   │
│   │   - JUnit                                              │   │
│   └─────────────────────────────────────────────────────────┘   │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

## Parsing Phase

### AST Generation

```text
┌─────────────────────────────────────────────────┐
│           Abstract Syntax Tree (AST)            │
├─────────────────────────────────────────────────┤
│                                                  │
│   Input Code:                                   │
│   const greeting = "Hello, World!";             │
│                                                  │
│   Generated AST:                                │
│   ┌─────────────────────────────────────────┐  │
│   │ Program                                    │  │
│   │   └─ VariableDeclaration                   │  │
│   │         ├─ kind: "const"                   │  │
│   │         └─ declarations                   │  │
│   │               └─ VariableDeclarator         │  │
│   │                     ├─ id: Identifier      │  │
│   │                     │      └─ name: "greeting"│  │
│   │                     └─ init: Literal       │  │
│   │                            └─ value: "Hello, World!"│
│   └─────────────────────────────────────────┘  │
│                                                  │
└─────────────────────────────────────────────────┘
```

### Parser Options

```javascript
export default [
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        }
      }
    }
  }
];
```

## Rule Execution

### Rule Flow

```text
┌─────────────────────────────────────────────────┐
│              Rule Execution Flow                 │
├─────────────────────────────────────────────────┤
│                                                  │
│   For each rule:                                 │
│   ┌──────────────────────────────────────────┐  │
│   │                                          │  │
│   │   1. Receive AST node                    │  │
│   │   2. Check rule conditions               │  │
│   │   3. If violated:                        │  │
│   │      ├── Create linting message          │  │
│   │      ├── Add suggestion/fix              │  │
│   │      └── Report to results                │  │
│   │                                          │  │
│   └──────────────────────────────────────────┘  │
│                                                  │
│   Types of rule visitors:                       │
│   - enter(node) - When entering node           │
│   - leave(node) - When leaving node            │
│                                                  │
└─────────────────────────────────────────────────┘
```

### Writing a Rule

```javascript
// my-rule.js
export default {
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallow console.log'
    },
    fixable: 'code'
  },
  create(context) {
    return {
      CallExpression(node) {
        if (
          node.callee.type === 'MemberExpression' &&
          node.callee.object.type === 'Identifier' &&
          node.callee.object.name === 'console'
        ) {
          context.report({
            node,
            message: 'Unexpected console statement.',
            fix(fixer) {
              return fixer.remove(node);
            }
          });
        }
      }
    };
  }
};
```

## Auto-fix System

### Fix Types

```text
┌─────────────────────────────────────────────────┐
│              Auto-fix Levels                     │
├─────────────────────────────────────────────────┤
│                                                  │
│   Level 0: No Fix                               │
│   - Rule only reports, cannot auto-fix          │
│   - Example: no-unused-vars                     │
│                                                  │
│   Level 1: Safe Fix                             │
│   - Auto-fix is safe, applies automatically     │
│   - Example: quotes, semicolons                │
│                                                  │
│   Level 2: Suggestion                            │
│   - Fix needs confirmation from user            │
│   - Available as suggestion, not auto-fix       │
│                                                  │
└─────────────────────────────────────────────────┘
```

### Fix Application

```javascript
// Rule with fix
export default {
  create(context) {
    return {
      StringLiteral(node) {
        if (node.value.includes("'")) {
          context.report({
            node,
            message: 'Use double quotes.',
            fix(fixer) {
              return fixer.replaceTextRange(
                [node.range[0], node.range[1]],
                `"${node.value}"`
              );
            }
          });
        }
      }
    };
  }
};
```

## Caching Mechanism

### Cache File Structure

```text
┌─────────────────────────────────────────────────┐
│              .eslintcache                        │
├─────────────────────────────────────────────────┤
│                                                  │
│   {                                              │
│     "/path/to/file.js": {                       │
│       "timestamp": 1234567890,                  │
│       "hashOfConfig": "abc123",                 │
│       "results": [...]                          │
│     },                                          │
│     "/path/to/another.js": {                    │
│       ...                                       │
│     }                                           │
│   }                                             │
│                                                  │
│   Only files with changed hash will be linted  │
│                                                  │
└─────────────────────────────────────────────────┘
```

### Cache Decision Flow

```text
┌─────────────────────────────────────────────────┐
│              Cache Decision Flow                 │
├─────────────────────────────────────────────────┤
│                                                  │
│   File change detected                          │
│   │                                              │
│   ├── Check .eslintcache                       │
│   │                                              │
│   ├── Compare hash:                            │
│   │     - Config hash                          │
│   │     - File content hash                    │
│   │     - Dependencies hash                    │
│   │                                              │
│   ├── If match → Use cached results            │
│   │                                              │
│   └── If no match → Lint file, update cache   │
│                                                  │
└─────────────────────────────────────────────────┘
```

## Parallel Processing

### Worker Threads

```text
┌─────────────────────────────────────────────────┐
│          Parallel Linting                       │
├─────────────────────────────────────────────────┤
│                                                  │
│   Files: [a.js, b.js, c.js, d.js, e.js]       │
│          │                                      │
│          ▼                                      │
│   ┌────────────────────────────────────────┐   │
│   │        Worker Thread Pool               │   │
│   │                                        │   │
│   │   Thread 1: [a.js, d.js]              │   │
│   │   Thread 2: [b.js, e.js]              │   │
│   │   Thread 3: [c.js]                    │   │
│   │                                        │   │
│   └────────────────────────────────────────┘   │
│          │                                      │
│          ▼                                      │
│   ┌────────────────────────────────────────┐   │
│   │         Aggregate Results               │   │
│   └────────────────────────────────────────┘   │
│                                                  │
└─────────────────────────────────────────────────┘
```

## Output Formatters

### Built-in Formatters

```text
┌─────────────────────────────────────────────────┐
│              Output Formats                      │
├─────────────────────────────────────────────────┤
│                                                  │
│   Stylish (default):                            │
│   ┌─────────────────────────────────────────┐  │
│   │  /path/to/file.js                        │  │
│   │    5:10  error  Unexpected console.log  │  │
│   │    7:2   warning  'foo' is defined but  │  │
│   │           never used                    │  │
│   └─────────────────────────────────────────┘  │
│                                                  │
│   JSON:                                         │
│   ┌─────────────────────────────────────────┐  │
│   │  [{"file": "...", "messages": [...]}]  │  │
│   └─────────────────────────────────────────┘  │
│                                                  │
│   HTML:                                          │
│   ┌─────────────────────────────────────────┐  │
│   │  <html><body>...</body></html>         │  │
│   └─────────────────────────────────────────┘  │
│                                                  │
└─────────────────────────────────────────────────┘
```

## สรุป

1. ESLint ใช้ pipeline: config → parse → rules → output
2. AST เป็น representation ของ code
3. Rules วิเคราะห์ AST nodes เพื่อหาปัญหา
4. Auto-fix ใช้ fixer API เพื่อแก้ไข
5. Caching ช่วยเร่งความเร็วด้วยการ cache ผลลัพธ์
6. Parallel processing ช่วยให้ linting เร็วขึ้น