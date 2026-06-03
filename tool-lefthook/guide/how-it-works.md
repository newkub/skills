# How It Works

## หลักการทำงานของ Lefthook

### Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                    Lefthook Architecture                     │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   ┌─────────────┐     ┌─────────────┐     ┌─────────────┐  │
│   │ lefthook.yml │────▶│  lefthook   │────▶│ Git Hooks   │  │
│   │  (config)    │     │  (engine)   │     │ (.git/hooks)│  │
│   └─────────────┘     └─────────────┘     └─────────────┘  │
│                              │                               │
│         ┌────────────────────┼────────────────────┐          │
│         ▼                    ▼                    ▼          │
│   ┌──────────┐        ┌──────────┐        ┌──────────┐      │
│   │ Commands │        │  Parallel │        │  Scripts │      │
│   │ (scripts)│        │ Execution │        │ (.rb,.py)│      │
│   └──────────┘        └──────────┘        └──────────┘      │
└─────────────────────────────────────────────────────────────┘
```

### Execution Flow

```
git commit
    │
    ▼
┌──────────────────────────────────────┐
│  .git/hooks/pre-commit (generated)   │
└──────────────┬───────────────────────┘
               │
               ▼
        ┌──────────────┐
        │  lefthook    │
        │  (binary)    │
        └──────┬───────┘
               │
               ▼
        ┌──────────────┐
        │ lefthook.yml │
        │  (config)    │
        └──────┬───────┘
               │
    ┌──────────┴──────────┐
    ▼                      ▼
┌─────────┐          ┌─────────┐
│ Command1│          │ Command2│
│ (lint)  │          │ (test)  │
└────┬────┘          └────┬────┘
     │                   │
     ▼                   ▼
┌─────────┐          ┌─────────┐
│  Pass   │          │  Pass   │
└─────────┘          └─────────┘
     │                   │
     └─────────┬─────────┘
               │
               ▼
        ┌──────────────┐
        │ Commit       │
        │ Success!     │
        └──────────────┘
```

### Hook Trigger Points

| Git Event | Lefthook Hook | When It Runs |
|-----------|---------------|--------------|
| `git commit` | `pre-commit` | Before commit is created |
| `git commit` | `commit-msg` | After message is written |
| `git push` | `pre-push` | Before objects are sent |
| `git merge` | `post-merge` | After merge completes |
| `git rebase` | `pre-rebase` | Before rebase starts |
| `git checkout` | `post-checkout` | After checkout completes |

### Command Execution

```yaml
# lefthook.yml
pre-commit:
  # Sequential execution (default)
  commands:
    lint:
      run: npm run lint
  
  # Parallel execution
  parallel: true
  commands:
    lint:
      run: npm run lint
    test:
      run: npm run test
```

### Configuration Processing

```
lefthook.yml
    │
    ├── extends (remote configs)
    │       │
    │       ▼
    │   remote.yml
    │
    └── local commands
            │
            ▼
    Merged Configuration
            │
            ▼
    Command Execution
```

### Key Features in Architecture

| Feature | Description |
|---------|-------------|
| **Single Binary** | No runtime dependencies |
| **Parallel Execution** | Run commands concurrently |
| **Cross-Platform** | Windows, macOS, Linux |
| **Config Inheritance** | extends from remote configs |
| **Fail-Fast** | Stop on first failure (configurable) |