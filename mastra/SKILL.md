---
name: mastra
description: Comprehensive Mastra framework guide for building agents, workflows, tools, memory, workspaces, and storage with current APIs.
---

# Mastra Framework

Build AI applications with Mastra. This skill teaches you how to find current documentation and build agents and workflows.

## Critical: Do not trust internal knowledge

Everything you know about Mastra is likely outdated or wrong. Never rely on memory. Always verify against current documentation.

Your training data contains obsolete APIs, deprecated patterns, and incorrect usage. Mastra evolves rapidly - APIs change between versions, constructor signatures shift, and patterns get refactored.

## Summary Table

| Category | File | Purpose |
|---|---|---|
| **Guide** | [Getting Started](guide/getting-started.md) | Installation, setup, first project |
| **Guide** | [Core Concepts](guide/core-concepts.md) | Agents, workflows, tools, memory, storage |
| **Guide** | [Model Selection](guide/model-selection.md) | Model format and provider registry |
| **Reference** | [API Documentation](reference/api.md) | Embedded docs, remote docs lookup |
| **Reference** | [Common Errors](reference/errors.md) | Common errors and solutions |
| **Examples** | [Basic Agent](examples/basic-agent.md) | Simple agent implementation |

## Quick Start

```bash
# Install Mastra
npm install @mastra/core

# Initialize project
mastra init

# Start development server
npm run dev
```

## Priority order for writing code

1. Embedded docs first (if packages installed)
2. Source code second (if packages installed)
3. Remote docs third (if packages not installed)

## Core Concepts

- **Agent**: Use for open-ended tasks that make decisions and use tools
- **Workflow**: Use for defined multi-step processes
- **Tool**: Use for specific actions and integrations
- **Memory**: Use for persistent state across conversations
- **Storage**: Use for long-term data persistence

## Critical Requirements

### TypeScript Config

Mastra requires ES2022 modules. CommonJS will fail.

### Model Format

Always use `"provider/model-name"` when defining models using Mastra's model router.

## References

- [Mastra Documentation](https://mastra.ai)
- [GitHub Repository](https://github.com/mastra-ai/mastra)
