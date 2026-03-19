---
name: ast-grep
description: Fast and polyglot code searching and rewriting tool. Use for code refactoring, linting, and transformation using AST pattern matching.
goal: Use ast-grep following best practices
outcome: Efficient code transformation and linting with AST patterns
---

# ast-grep Library

## When to Use

Use this library when:

- Refactoring code across large codebases
- Need pattern matching using Abstract Syntax Tree (AST)
- Creating custom linting rules
- Performing automated code transformations
- Replacing regex-based search/replace with semantic understanding
- Supporting multiple languages in unified tool

## Quick Start

1. Install: `npm install @ast-grep/cli` or `npx @ast-grep/cli`
2. Create rule file (sgconfig.yml)
3. Write pattern rules
4. Run scan or rewrite

## Summary Table

| Category | File | Purpose | Condition |
|---|---|---|---|
| **Knowledge** | Core Concepts | AST fundamentals | Understanding the basics |
| **Knowledge** | Best Practices | Pattern writing | Effective rules |
| **Rules** | Setup | Installation and config | New project setup |
| **Rules** | Patterns | Writing ast-grep patterns | Rule development |
| **Rules** | Rules | YAML rule structure | Linting rules |
| **Rules** | Rewriting | Code transformation | Refactoring |
| **Rules** | NAPI Integration | JavaScript bindings | Programmatic usage |

## Core Features

- **AST-Based**: Semantic code understanding vs text matching
- **Multi-Language**: JavaScript, TypeScript, Python, Rust, Go, etc.
- **Fast**: Rust-powered performance
- **Pattern Language**: Intuitive pattern syntax
- **Rewriting**: Transform code automatically
- **NAPI**: Use in Node.js applications

## Quick Reference

```bash
# Install
npm install @ast-grep/cli

# Scan with pattern
npx ast-grep -p 'console.log($$$ARGS)'

# Rewrite
npx ast-grep -p 'var $NAME = $INIT' -r 'let $NAME = $INIT'

# Run rules from config
npx ast-grep scan
```

## Verification

1. Check ast-grep installation
2. Verify pattern matching
3. Test code rewriting
4. Validate multi-language support
5. Check NAPI integration
6. Ensure rules execute correctly

## References

- [ast-grep Documentation](https://ast-grep.github.io/)
- [Pattern Syntax](https://ast-grep.github.io/guide/pattern-syntax.html)
- [GitHub Repository](https://github.com/ast-grep/ast-grep)
