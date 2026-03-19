---
name: lefthook
description: Fast and powerful Git hooks manager for any project. Use for running linters, tests, and checks on git events without Node.js dependency.
goal: Use Lefthook following best practices
outcome: Fast Git hooks with parallel execution
---

# Lefthook Library

## When to Use

Use this library when:

- Managing Git hooks across team
- Need fast, parallel execution of hooks
- Want Git hooks without Node.js dependency
- Building Go/Rust projects (faster than Husky)
- Need cross-platform hook management
- Want simple YAML configuration

## Quick Start

1. Install: `npx lefthook install` or via package manager
2. Create lefthook.yml configuration
3. Define commands for git events
4. Run manually: `npx lefthook run pre-commit`

## Summary Table

| Category | File | Purpose | Condition |
|---|---|---|---|
| **Knowledge** | Core Concepts | Lefthook fundamentals | Understanding the basics |
| **Knowledge** | Best Practices | Hook patterns | Effective hooks |
| **Rules** | Setup | Installation and init | New project setup |
| **Rules** | Configuration | lefthook.yml structure | Defining hooks |
| **Rules** | Commands | Running commands and scripts | Hook actions |
| **Rules** | Parallel Execution | Concurrent jobs | Performance |
| **Rules** | Advanced | Skipping, excluding, interactive | Complex workflows |

## Core Features

- **Fast**: Written in Go, minimal overhead
- **Parallel**: Run commands concurrently
- **No Node Required**: Works with any project type
- **Cross-Platform**: Works on Windows, macOS, Linux
- **Simple Config**: YAML-based configuration
- **Manual Run**: Run hooks manually for testing

## Quick Reference

```bash
# Install
npx lefthook install

# Or via Homebrew
brew install lefthook

# Run hook manually
npx lefthook run pre-commit

# Configuration (lefthook.yml)
pre-commit:
  commands:
    lint:
      run: bun run lint
    test:
      run: bun run test
```

## Verification

1. Check Lefthook installation
2. Verify hook installation
3. Test command execution
4. Validate parallel execution
5. Check manual run
6. Ensure cross-platform compatibility

## References

- [Lefthook Documentation](https://evilmartians.github.io/lefthook/)
- [GitHub Repository](https://github.com/evilmartians/lefthook)
- [Configuration Reference](https://evilmartians.github.io/lefthook/configuration.html)
