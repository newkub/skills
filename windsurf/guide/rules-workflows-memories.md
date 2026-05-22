# Rules, Workflows, and Memories

Configure Cascade to understand your project and workflow.

## .windsurfrules

The `.windsurfrules` file tells Cascade about your project conventions.

### File Location

Place in project root: `./windsurfrules` or `.windsurfrules`

### Syntax

```markdown
# .windsurfrules

## Project Overview
[Tech stack, architecture, purpose]

## Code Style
[Conventions, naming, formatting]

## File Structure
[Directory layout, organization]

## Testing
[Testing framework, coverage requirements]

## Deployment
[Build commands, output directory]
```

### Example

```markdown
# .windsurfrules

## Project Overview
- Next.js 14 with App Router
- TypeScript with strict mode
- Tailwind CSS
- Prisma with PostgreSQL

## Code Style
- Functional components with hooks
- Explicit prop types (no `any`)
- Use `cn()` from lib/utils
- Prefer server components
- Add 'use client' only when needed

## File Structure
- src/components/ — organized by feature
- src/app/api/ — API routes
- prisma/schema.prisma — database models
- src/types/ — shared types

## Testing
- Vitest for unit tests
- Testing Library for components
- Test files colocated with source
```

## Workflows

Workflows define how Cascade should behave in specific situations.

### Creating Workflows

1. Open Cascade (`Cmd+L`)
2. Go to Workflows section
3. Create new workflow

### Workflow Types

| Type | Use Case |
|------|----------|
| Brainstorm | Plan next steps |
| Address PR Comments | Review feedback |
| Code Review | Analyze changes |
| Refactor | Restructure code |

### Workflow Example

```markdown
# Brainstorm Workflow

## Trigger
User types /brainstorm

## Steps
1. Analyze current project state
2. Identify potential improvements
3. Consider dependencies and risks
4. Propose 3-5 actionable next steps
5. Format as numbered list
```

## Rules

Rules define specific behaviors or conventions.

### Global Rules

Apply to all projects:

```json
{
  "rules": [
    "Use TypeScript strict mode",
    "Prefer const over let",
    "No magic numbers"
  ]
}
```

### Project Rules

Local to project:

```markdown
## Rules
- Use functional components
- Always add JSDoc to public functions
- Handle all promise rejections
```

## Memories

Cascade auto-generates memories to remember context.

### Memory Format

```markdown
#project_structure #tech_stack #architecture

## Content
Next.js app with App Router, stored in src/

#framework_preference #next_js #web_development

## Content
Always use Next.js for web projects

## Keywords
React, SSR, App Router, API routes
```

### Using Memories

- Memories persist across sessions
- Organized by #hashtags
- Searchable by content
- Cascade references in context

### Managing Memories

| Action | How |
|--------|-----|
| View memories | Cascade panel → Memories tab |
| Search | Type in search bar |
| Create | Automatic from conversation |
| Delete | Select and remove |

## Cascades + Devin Integration

### Agent Command Center

Kanban-style dashboard for managing agents:

| Column | Description |
|--------|-------------|
| In Progress | Active Cascade/Devin sessions |
| Ready | Queued tasks |
| Done | Completed tasks |

### Spaces

Bundle context around tasks:

- Agent sessions
- PRs
- Files
- Shared context

### Handoff Flow

1. Plan with Cascade (local)
2. Hand off to Devin (cloud)
3. Cascade executes on own machine
4. Monitor in Agent Command Center

## Configuration Best Practices

### Recommended Settings

```json
{
  "cascade": {
    "autoRunTerminal": true,
    "allowFileCreation": true,
    "contextWindow": "full"
  },
  "autocomplete": {
    "model": "default"
  }
}
```

### Model Selection

| Task | Recommended Model |
|------|-------------------|
| Simple edits | Default |
| Complex refactoring | Premium (GPT-4o, Claude) |
| Multi-file changes | Premium |
| Documentation | Default |

## Troubleshooting

### Cascade Ignoring Rules

1. Check file is in root
2. Verify syntax is correct
3. Restart Windsurf
4. Clear and recreate

### Memories Not Persisting

1. Check internet connection
2. Verify account sync
3. Recreate key memories