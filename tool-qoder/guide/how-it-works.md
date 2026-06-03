# How It Works

ภาพรวมการทำงานของ Qoder - Agentic Coding Platform

## Architecture Overview

```
┌─────────────────────────────────────────────────────────┐
│                     Qoder Platform                      │
├─────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────┐ │
│  │   Editor    │  │    Quest    │  │   Cloud Agents  │ │
│  │  Workspace  │  │  Workspace  │  │      API        │ │
│  └─────────────┘  └─────────────┘  └─────────────────┘ │
├─────────────────────────────────────────────────────────┤
│              Context Engineering Layer                   │
│  ┌───────────┐  ┌───────────┐  ┌──────────────────────┐ │
│  │ Knowledge │  │  Memory   │  │    Semantic          │ │
│  │  Engine   │  │  Stores   │  │    Search           │ │
│  └───────────┘  └───────────┘  └──────────────────────┘ │
├─────────────────────────────────────────────────────────┤
│                  Tool Integration                       │
│  ┌───────────┐  ┌───────────┐  ┌──────────────────────┐ │
│  │   MCP     │  │  Vaults   │  │    Terminal          │ │
│  │  Servers  │  │           │  │    Integration       │ │
│  └───────────┘  └───────────┘  └──────────────────────┘ │
└─────────────────────────────────────────────────────────┘
```

## Editor Workspace Flow

```
User Types Code
      │
      ▼
┌─────────────┐
│  Context    │ ◄── Project Files, Dependencies
│  Analysis   │
└─────────────┘
      │
      ▼
┌─────────────┐
│   NEXT      │ ◄── Intelligent Suggestions
│  Engine     │
└─────────────┘
      │
      ▼
┌─────────────┐
│  Inline     │ ◄── Tab to Accept
│  Suggestion │
└─────────────┘
```

## Quest Workspace Flow

```
User Delegates Task
      │
      ▼
┌─────────────┐
│   Plan      │
│  Generation │
└─────────────┘
      │
      ▼
┌─────────────┐
│   Agent     │
│  Execution  │ ◄── Tools (Search, Read, Edit, Bash)
└─────────────┘
      │
      ├──────────────────┐
      ▼                  ▼
┌─────────────┐    ┌─────────────┐
│   Memory    │    │   Task      │
│   Stores    │    │   Board     │
└─────────────┘    └─────────────┘
      │
      ▼
┌─────────────┐
│   Artifact │ ◄── Files, Code, Reports
│   Review    │
└─────────────┘
```

## Context Engineering

Qoder สร้าง context จากหลายแหล่ง:

### 1. Project Context
```
Codebase Structure
      │
      ├── Dependencies (package.json, Cargo.toml, etc.)
      ├── Configuration Files
      ├── Source Files
      └── Test Files
```

### 2. Knowledge Context
```
Knowledge Engine
      │
      ├── Business Logic Documentation
      ├── Coding Conventions
      ├── Historical Decisions
      └── Team Patterns
```

### 3. Session Context
```
Current Session
      │
      ├── Conversation History
      ├── File State
      └── User Preferences
```

## MCP Integration

```
┌─────────────┐     ┌─────────────────┐
│   Qoder     │────▶│   MCP Server    │
│   Agent     │     │                 │
└─────────────┘     │ ┌─────────────┐ │
                    │ │   Tool 1    │ │
┌─────────────┐     │ ├─────────────┤ │
│   Vault     │────▶│ │   Tool 2    │ │
│ (Secrets)   │     │ ├─────────────┤ │
└─────────────┘     │ │   Tool N    │ │
                    │ └─────────────┘ │
                    └─────────────────┘
```

## CLI Flow

```bash
qoder <command> [options]
       │
       ▼
┌─────────────────┐
│   CLI Parser    │
└─────────────────┘
       │
       ▼
┌─────────────────┐
│  Cloud API      │ ◄── Authentication
│  or Local Mode  │
└─────────────────┘
```

## Key Workflows

| Workspace | Use Case | Flow |
|-----------|----------|------|
| **Editor** | Quick fixes, pair programming | Type → Suggest → Accept |
| **Quest** | Feature development, refactoring | Delegate → Track → Review |
| **CLI** | Automation, scripting | Command → Execute → Output |