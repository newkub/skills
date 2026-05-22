---
name: moonrepo
description: Build system and monorepo management tool for increased productivity. Use for managing projects, tasks, toolchains, and languages across repositories.
---

# Moonrepo

Build system and monorepo management tool for increased productivity.

## When to Use

- Managing monorepos with multiple projects
- Coordinating tasks across projects
- Managing toolchains and language versions
- Running tasks in parallel with dependency tracking
- Ensuring consistent environments across teams

## Summary Table

| Category | File | Purpose |
|---|---|---|
| **Guide** | [Getting Started](guide/getting-started.md) | Installation, configuration, basic usage |
| **Guide** | [Configuration](guide/configuration.md) | moon.toml, toolchains, projects |
| **Reference** | [Tasks](reference/tasks.md) | Task running, dependencies, filtering |
| **Examples** | [Monorepo Setup](examples/monorepo.md) | Multi-project configuration examples |

## Quick Start

```bash
# Install moon
npm install -g @moonrepo/cli

# Initialize in project
moon init

# Run a task
moon run build

# Run task for specific project
moon run frontend:build
```

## Core Features

- **Increased Productivity**: Rust-based for speed and performance
- **Exceptional DX**: Designed to mitigate developer pain points
- **Incremental Adoption**: Migrate project-by-project
- **Task Coordination**: Run tasks across projects with dependency tracking
- **Toolchain Management**: Ensure consistent tool versions
- **Automation**: Auto-install dependencies, sync project references

## Supported Languages

- **Tier 3 (Toolchain Integration)**: JavaScript, TypeScript, Rust
- **Tier 2 (Ecosystem Platformization)**: Python, Go
- **Tier 1 (Project Categorization)**: Other languages via system toolchain

## References

- [Moonrepo Documentation](https://moonrepo.dev/docs)
- [GitHub Repository](https://github.com/moonrepo/moon)
