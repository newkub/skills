# Windsurf Key Concepts

Understanding the core concepts of Windsurf's AI-native IDE architecture.

## Core Concepts

### 1. Cascade — Agentic AI Partner

Cascade is Windsurf's flagship AI agent that operates at the **project level** rather than line level.

**Key Characteristics:**
- Deep codebase awareness and context tracking
- Multi-step execution of complex tasks
- Real-time awareness of your actions (edits, commands, clipboard)
- Infers intent from your workflow patterns

**How Cascade Works:**
1. You describe intent in natural language
2. Cascade analyzes your codebase
3. Creates a step-by-step plan
4. Executes — editing files, creating new ones, running commands
5. You review changes in diff view

### 2. Tab — Autocomplete Power

Tab provides generative autocomplete with a single keystroke.

**Features:**
- Context-aware code suggestions
- Full flow awareness
- Works across entire project
- Available in both IDE and plugin versions

### 3. Supercomplete — Predictive Suggestions

Supercomplete analyzes what your next action might be **beyond** just inserting code.

**Capabilities:**
- Predicts next file locations (Tab to Jump)
- Suggests entire code blocks or functions
- Maintains flow state with minimal interruption

### 4. Flow Awareness

Windsurf tracks all your actions to infer intent:

| Tracking | What Cascade Monitors |
|----------|------------------------|
| File tracking | Files you edit and view |
| Terminal tracking | Shell commands you run |
| Clipboard tracking | Copied content |
| Conversation history | Your AI interactions |

### 5. Devin — Cloud Agent

Devin is an autonomous cloud agent built into Windsurf:

- Works on its own machine
- Delegates complex tasks (debugging, testing, deployment)
- Managed via Agent Command Center (Kanban-style dashboard)
- Spaces organize sessions around tasks

### 6. MCP — Model Context Protocol

Connect custom tools and services through Windsurf's plugin store:

- Figma, Slack, Stripe integrations
- Custom tool connections
- Enhanced AI workflows

## Architecture Overview

```
┌─────────────────────────────────────────────────────┐
│                    Windsurf IDE                      │
├─────────────────────────────────────────────────────┤
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐│
│  │  Tab    │  │ Cascade │  │ Super   │  │  Devin   ││
│  │(Autocom │  │(Agent)  │  │complete │  │ (Cloud)  ││
│  │  plete) │  │         │  │         │  │          ││
│  └─────────┘  └─────────┘  └─────────┘  └─────────┘│
├─────────────────────────────────────────────────────┤
│                  Flow Awareness                     │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐│
│  │  File   │  │Terminal │  │Clipboard│  │Context  ││
│  │ Tracker │  │ Tracker │  │ Tracker │  │  Window ││
│  └─────────┘  └─────────┘  └─────────┘  └─────────┘│
├─────────────────────────────────────────────────────┤
│               MCP Plugin Ecosystem                  │
└─────────────────────────────────────────────────────┘
```

## Terminology

| Term | Definition |
|------|------------|
| `.windsurfrules` | Project-level configuration file for AI context |
| Cascade | Primary AI agent for multi-step coding tasks |
| Flow | Your current development context and state |
| Spaces | Bundled sessions around tasks (files, PRs, context) |
| Agent Command Center | Kanban-style dashboard for managing agents |

## Key Principles

1. **Project-level thinking** — Cascade thinks in terms of your entire codebase, not single files
2. **Flow state maintenance** — AI adapts to your workflow, not the other way around
3. **Progressive disclosure** — Simple tasks are instant; complex ones use full agentic power
4. **VS Code compatibility** — Extensions, themes, and settings carry over from VS Code