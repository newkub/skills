---
name: dprint
description: Pluggable and configurable code formatting platform. Use for formatting code in multiple languages with fast, deterministic output.
goal: Use dprint following best practices
outcome: Fast, consistent code formatting across multiple languages
---

# dprint Library

## When to Use

Use this library when:

- Formatting code in multiple languages
- Need faster alternative to Prettier
- Want deterministic formatting
- Using Rust, TypeScript, JSON, Markdown, etc.
- Need plugin-based architecture
- Want incremental formatting for large codebases

## Quick Start

1. Install: `npm install -g dprint` or `cargo install dprint`
2. Initialize: `dprint init`
3. Configure `dprint.json`
4. Run: `dprint fmt` or `dprint check`

## Summary Table

| Category | File | Purpose | Condition |
|---|---|---|---|
| **Knowledge** | [Core Concepts](knowledge/core-concept.md) | dprint fundamentals | Understanding the basics |
| **Knowledge** | [Best Practices](knowledge/best-practices.md) | Formatting patterns | Consistent style |
| **Rules** | [Setup](rules/1-setup.md) | Installation and init | New project setup |
| **Rules** | [Configuration](rules/2-configuration.md) | dprint.json options | Plugin setup |
| **Rules** | [Plugins](rules/3-plugins.md) | TypeScript, Rust, etc. | Language support |
| **Rules** | [Formatting](rules/4-formatting.md) | fmt and check commands | Usage |
| **Rules** | [CI/CD](rules/5-ci-cd.md) | Check in CI | Automated formatting |
| **Rules** | [Incremental](rules/6-incremental.md) | Fast formatting | Large codebases |

## Core Features

- **Fast**: Rust-powered performance
- **Multi-Language**: TypeScript, Rust, JSON, Markdown, etc.
- **Plugin System**: Extensible formatting
- **Deterministic**: Consistent output
- **Incremental**: Only format changed files
- **Config Includes**: Shareable configurations

## Quick Reference

```bash
# Install
cargo install dprint
# or
npm install -g dprint

# Initialize
dprint init

# Format all
dprint fmt

# Check formatting
dprint check

# Format specific files
dprint fmt "src/**/*.ts"
```

## Verification

1. Check dprint installation
2. Verify configuration
3. Test formatting
4. Validate plugin installation
5. Check incremental mode
6. Ensure CI check works

## References

- [dprint Documentation](https://dprint.dev/)
- [Configuration](https://dprint.dev/config/)
- [Plugins](https://dprint.dev/plugins/)
