---
name: oxlint
description: JavaScript linter written in Rust. Use for fast, efficient linting with ESLint-compatible rules and configuration.
goal: Use oxlint following best practices
outcome: Fast JavaScript/TypeScript linting
---

# oxlint Library

## When to Use

Use this library when:

- Need fast JavaScript/TypeScript linting
- Want ESLint-compatible rules
- Using in CI/CD for quick feedback
- Need zero-config linting
- Want Rust-powered performance
- Migrating from ESLint for speed

## Quick Start

1. Install: `npm install -D oxlint` or `npx oxlint`
2. Run: `npx oxlint .`
3. Use with configuration file
4. Add to package.json scripts

## Summary Table

| Category | File | Purpose | Condition |
|---|---|---|---|
| **Knowledge** | Core Concepts | oxlint fundamentals | Understanding the basics |
| **Knowledge** | Best Practices | Linting patterns | Code quality |
| **Rules** | Setup | Installation and usage | New project setup |
| **Rules** | CLI | Command line options | Usage patterns |
| **Rules** | Configuration | .oxlint.json setup | Custom rules |
| **Rules** | ESLint Compatibility | ESLint config migration | Migration |
| **Rules** | CI/CD | Fast CI checks | Automated linting |
| **Rules** | Rules | Available lint rules | Rule selection |

## Core Features

- **Fast**: Rust-powered linting performance
- **ESLint Compatible**: Uses familiar rules
- **Zero Config**: Works without configuration
- **TypeScript**: Full TS and TSX support
- **React/JSX**: Built-in JSX support
- **Auto Fix**: Fix some issues automatically

## Quick Reference

```bash
# Install
npm install -D oxlint

# Lint all files
npx oxlint .

# Lint specific files
npx oxlint src/

# With auto-fix
npx oxlint . --fix

# Show all rules
npx oxlint --rules
```

## Verification

1. Check oxlint installation
2. Verify linting works
3. Test auto-fix
4. Validate TypeScript support
5. Check CI integration
6. Ensure performance gains

## References

- [oxlint Documentation](https://oxc-project.github.io/oxc/)
- [GitHub Repository](https://github.com/oxc-project/oxc)
- [Lint Rules](https://oxc-project.github.io/oxc/rules.html)
