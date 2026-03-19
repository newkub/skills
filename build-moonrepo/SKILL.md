---
name: moonrepo
description: Build system and monorepo toolchain. Use for managing monorepos with task orchestration, caching, and code generation.
goal: Use moonrepo following best practices
outcome: Efficient monorepo management with smart caching
---

# moonrepo Library

## When to Use

Use this library when:

- Managing large monorepos with many packages
- Need intelligent task orchestration
- Want persistent caching across CI and local
- Building polyglot monorepos (JS, Rust, Go)
- Need code generation and scaffolding
- Want to replace npm scripts with structured tasks

## Quick Start

1. Install: `npm install -g @moonrepo/cli` or `npx @moonrepo/cli init`
2. Initialize: `moon init`
3. Configure `.moon/workspace.yml` and `.moon/tasks.yml`
4. Define projects in `moon.yml`
5. Run tasks: `moon run project:task`

## Summary Table

| Category | File | Purpose | Condition |
|---|---|---|---|
| **Knowledge** | [Core Concepts](knowledge/core-concept.md) | moon fundamentals | Understanding the basics |
| **Knowledge** | [Best Practices](knowledge/best-practices.md) | Monorepo patterns | Efficient management |
| **Rules** | [Setup](rules/1-setup.md) | Initialization and config | New project setup |
| **Rules** | [Projects](rules/2-projects.md) | Defining projects and metadata | Project structure |
| **Rules** | [Tasks](rules/3-tasks.md) | Task definition and deps | Build orchestration |
| **Rules** | [Caching](rules/4-caching.md) | Input hashing and caching | Performance |
| **Rules** | [Toolchain](rules/5-toolchain.md) | Node, Bun, Rust versions | Environment |
| **Rules** | [CI/CD](rules/6-ci-cd.md) | CI optimization | Automated builds |

## Core Features

- **Smart Caching**: Input hashing, remote caching
- **Task Orchestration**: Dependency graph execution
- **Language Agnostic**: Works with any language
- **Toolchain Management**: Manage Node, Bun, Rust versions
- **Code Generation**: Templates and scaffolding
- **CI Optimization**: Distributed task execution

## Quick Reference

```bash
# Install
npm install -g @moonrepo/cli

# Initialize
moon init

# Run task
moon run app:build

# List projects
moon project-graph

# Check all tasks
moon check
```

## Verification

1. Check moon installation
2. Verify project configuration
3. Test task execution
4. Validate caching behavior
5. Check toolchain setup
6. Ensure CI optimization works

## References

- [moonrepo Documentation](https://moonrepo.dev/docs)
- [moon Configuration](https://moonrepo.dev/docs/config/workspace)
- [GitHub Repository](https://github.com/moonrepo/moon)
