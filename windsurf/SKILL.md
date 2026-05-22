# Windsurf Skill

The comprehensive guide for using Windsurf AI-native IDE — the first agentic code editor powered by Cascade AI.

## Overview

Windsurf is an AI-powered code editor built on VS Code foundation, featuring Cascade (agentic AI), Tab (autocomplete), Supercomplete (predictive suggestions), MCP integration, and Devin cloud agent. It provides deep codebase awareness with 70M+ lines of AI-generated code daily.

## Content Summary

| Category | Description | Files |
|----------|-------------|-------|
| **Guide** | Core concepts and tutorials | [key-concept.md](guide/key-concept.md), [quick-start.md](guide/quick-start.md), [all-features.md](guide/all-features.md), [cascade-usage.md](guide/cascade-usage.md), [rules-workflows-memories.md](guide/rules-workflows-memories.md) |
| **Interface** | CLI, keyboard shortcuts, configurations | [cli.md](interface/cli.md), [keyboard-shortcuts.md](interface/keyboard-shortcuts.md), [configuration.md](interface/configuration.md) |
| **Reference** | Official links and resources | [official.md](reference/official.md) |
| **Rules** | Best practices and conventions | [project-rules.md](rules/project-rules.md), [coding-style.md](rules/coding-style.md) |
| **Patterns** | Workflow patterns | [agentic-workflow.md](patterns/agentic-workflow.md), [collaboration.md](patterns/collaboration.md) |
| **Usecase** | Common use cases | [full-stack-dev.md](usecase/full-stack-dev.md), [refactoring.md](usecase/refactoring.md), [debugging.md](usecase/debugging.md) |
| **Workflows** | Complete workflows | [start-project.md](workflows/start-project.md), [code-review.md](workflows/code-review.md) |
| **Integration** | MCP and external integrations | [mcp-integration.md](integration/mcp-integration.md) |
| **Changelog** | Version history | [v2.0.md](changelog/v2.0.md), [v1.0.md](changelog/v1.0.md) |

## Quick Links

- [Quick Start](guide/quick-start.md) — Get started with Windsurf
- [Cascade Usage](guide/cascade-usage.md) — Master the Cascade agent
- [Keyboard Shortcuts](interface/keyboard-shortcuts.md) — Essential shortcuts
- [Configuration](interface/configuration.md) — Configure your workspace

## Project Structure

```
.windsurf/
├── skills/
│   └── windsurf/
│       ├── SKILL.md           ← You are here
│       ├── guide/             ← Core guides
│       ├── interface/         ← CLI & shortcuts
│       ├── reference/         ← Official links
│       ├── rules/             ← Best practices
│       ├── patterns/          ← Workflow patterns
│       ├── usecase/           ← Common use cases
│       ├── workflows/         ← Complete workflows
│       ├── integration/       ← MCP integrations
│       └── changelog/         ← Version history
└── workflows/                ← Custom workflows
```

## Related Skills

- [Claude Code](../claude-code/SKILL.md) — Alternative AI coding assistant
- [VS Code](../vscode/SKILL.md) — Base editor extension