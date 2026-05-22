# Collaboration Patterns

Patterns for team collaboration using Windsurf.

## Agent Command Center

### Dashboard Overview

| Column | Purpose |
|--------|---------|
| In Progress | Active Cascade/Devin sessions |
| Ready | Queued tasks |
| Done | Completed work |

### Managing Sessions

1. Open Agent Command Center
2. View all active agents
3. Drag to reprioritize
4. Click to resume

## Cascade + Devin Pattern

### Workflow

```
┌─────────────────────────────────────────────────────────┐
│  1. Plan locally with Cascade                           │
│     ↓                                                   │
│  2. Hand off to Devin                                   │
│     ↓                                                   │
│  3. Devin executes on cloud machine                     │
│     ↓                                                   │
│  4. Review results                                      │
│     ↓                                                   │
│  5. Iterate if needed                                   │
└─────────────────────────────────────────────────────────┘
```

### When to Use

| Task | Agent |
|------|-------|
| Architecture planning | Cascade |
| Long-running tests | Devin |
| Complex refactoring | Cascade + Devin |
| Debug session | Cascade |
| Deployment | Devin |

## Spaces Pattern

### Creating a Space

1. Click "New Space"
2. Name it: "Auth Overhaul"
3. Add context:
   - Cascade sessions
   - Devin sessions
   - PRs
   - Files

### Space Organization

```
Auth Overhaul Space
├── Active Sessions
│   ├── Cascade: Plan auth changes
│   └── Devin: Implement OAuth flow
├── PR #89 (3 files)
├── Related Files
│   ├── auth.ts
│   ├── middleware.ts
│   └── oauth.ts
└── Notes
```

## Team Sharing Pattern

### Conversation Share

1. Complete Cascade session
2. Click "Share"
3. Choose team channel
4. Team can view and continue

### Use Cases

| Scenario | Benefit |
|----------|---------|
| Successful approach | Reuse pattern |
| Complex fix | Team learns |
| Architecture decision | Document reasoning |

## Code Review Pattern

### Cascade Review

```
"Review PR #142:
- Check for security issues
- Verify test coverage
- Ensure code style
- Suggest improvements"
```

### Review Checklist

| Category | Checks |
|----------|--------|
| Security | Input validation, auth, secrets |
| Performance | N+1 queries, large payloads |
| Testing | Coverage, edge cases |
| Style | Consistency, naming |

### Windsurf Reviews (GitHub App)

1. Install Windsurf Reviews app
2. Set code review guidelines
3. PR triggers auto-review
4. Bot edits title/description

## Team Deploys Pattern

### Internal Deployments

1. Create team (e.g., "acme-internal")
2. Configure Netlify account
3. Deploy from Cascade:

```
"Deploy create-react-app to acme-internal"
```

### Benefits

| Benefit | Description |
|---------|-------------|
| Security | Internal Netlify only |
| Speed | One-click deployment |
| Control | Admin-managed |

## Shared Knowledge Pattern

### Curated Knowledge Base

1. Document patterns in shared space
2. Create reusable workflows
3. Set team-wide rules

### Knowledge Types

| Type | Example |
|------|---------|
| Architecture | "We use Clean Architecture" |
| Patterns | "Error handling via Result type" |
| Standards | "All APIs return { data, error }" |

## Collaboration Best Practices

### Communication

| Practice | Why |
|----------|-----|
| Name Spaces clearly | Easy to find |
| Document decisions | Team alignment |
| Share successful patterns | Knowledge transfer |

### Handoff

| Practice | How |
|----------|-----|
| Clear acceptance criteria | Devin knows goals |
| Checkpoint reviews | Catch issues early |
| Iterate incrementally | Reduce rework |