# Moonrepo Getting Started Guide

## Installation

```bash
npm install -g @moonrepo/cli
```

## Initialize Project

```bash
moon init
```

This creates:
- `.moon/` directory
- `moon.toml` configuration file
- Project configuration files

## Basic Configuration

### moon.toml

```toml
[moon]
default_project = "."

[projects]
```

### Project Configuration

Create `.moon/project.yml` in each project:

```yaml
type: "application"
language: "typescript"
```

## Running Tasks

### Run All Tasks

```bash
moon run build
```

### Run Task for Specific Project

```bash
moon run frontend:build
```

### Run Multiple Tasks

```bash
moon run build lint test
```

### Filter by Projects

```bash
moon run build --project frontend
moon run build --project backend,frontend
```

## Common Tasks

```bash
# List all available tasks
moon query tasks

# List all projects
moon query projects

# Check configuration
moon check

# Generate graph
moon graph
```
