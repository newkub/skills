# How It Works

## Architecture

Oxlint เป็น high-performance linter ที่เขียนด้วย Rust บน Oxc compiler stack:

```
┌─────────────────────────────────────┐
│           Oxlint Architecture        │
├─────────────────────────────────────┤
│  Oxc Parser  │  Oxc Resolver         │
├─────────────────────────────────────┤
│  Type-aware Linting (tsgo)          │
├─────────────────────────────────────┤
│  Multi-file Analysis                │
├─────────────────────────────────────┤
│  800+ Rules (ESLint compatible)      │
└─────────────────────────────────────┘
```

## Workflow

1. **Parse** - Oxc parser แปลง source code เป็น AST
2. **Resolve** - Oxc resolver แก้ปัญหา imports และ dependencies
3. **Type-check** - tsgo (TypeScript Go port) ทำ type-aware linting
4. **Analyze** - Linter วิเคราะห์ AST ด้วย 800+ rules
5. **Report** - Generate human and AI-friendly diagnostics

## Key Technologies

- **Oxc Compiler Stack** - High-performance JavaScript tools in Rust
- **tsgo** - Native Go port of TypeScript compiler (TypeScript 7)
- **Multi-file Analysis** - Project-wide module graph for cross-file checks
- **ESLint Compatibility** - Compatible with ESLint v8 configuration format
