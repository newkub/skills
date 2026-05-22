# Moonrepo Tasks Reference

## Task Running

### Basic Commands

```bash
# Run task in all projects
moon run build

# Run task in specific project
moon run frontend:build

# Run multiple tasks
moon run build lint test

# Run task with arguments
moon run test -- --coverage
```

### Task Filtering

```bash
# Run in specific projects
moon run build --project frontend

# Run in multiple projects
moon run build --project frontend,backend

# Run in all projects except
moon run build --project "!frontend"

# Run by type
moon run build --type application
```

### Task Dependencies

```bash
# Run with dependencies
moon run build --dep-order

# Run in parallel
moon run build --parallel

# Run with dependency graph
moon run build --graph
```

## Task Options

### Common Options

```bash
# Force rerun (skip cache)
moon run build --force

# Run in watch mode
moon run dev --watch

# Run in CI mode
moon run build --ci

# Verbose output
moon run build --verbose
```

### Task Information

```bash
# List all tasks
moon query tasks

# Show task details
moon query task build

# Show task graph
moon graph

# Show task dependencies
moon graph build
```

## Task Configuration

### moon.toml Task Config

```toml
[projects.my-app.tasks.build]
command = "webpack build"
inputs = ["src/**/*"]
outputs = ["dist/**"]
local = true
```

### Task Options

- `command`: The command to run
- `inputs`: Files that trigger the task
- `outputs`: Files produced by the task
- `local`: Run locally (not in container)
- `platform`: Target platform
- `env`: Environment variables
