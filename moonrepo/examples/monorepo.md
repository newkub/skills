# Moonrepo Monorepo Examples

## Basic Monorepo Structure

```
my-monorepo/
├── .moon/
│   ├── project.yml
│   └── toolchain.yml
├── moon.toml
├── apps/
│   ├── frontend/
│   │   ├── package.json
│   │   └── .moon/project.yml
│   └── backend/
│       ├── package.json
│       └── .moon/project.yml
└── packages/
    ├── shared/
    │   ├── package.json
    │   └── .moon/project.yml
    └── ui/
        ├── package.json
        └── .moon/project.yml
```

## moon.toml

```toml
[moon]
default_project = "."

[workspace]
inherited_tasks = ["build", "test", "lint"]

[toolchain]
node = "20.10.0"
bun = "1.1.0"
```

## Frontend Project (.moon/project.yml)

```yaml
type: "application"
language: "typescript"
platform = "node"

tasks:
  build:
    command: "next build"
    inputs:
      - "src/**/*"
      - "public/**/*"
    outputs:
      - ".next/**/*"
      - "dist/**/*"
  
  dev:
    command: "next dev"
    local: true
```

## Backend Project (.moon/project.yml)

```yaml
type: "application"
language: "typescript"
platform = "node"

depends_on:
  - "shared"

tasks:
  build:
    command: "tsc"
    inputs:
      - "src/**/*"
    outputs:
      - "dist/**/*"
```

## Shared Library (.moon/project.yml)

```yaml
type: "library"
language: "typescript"
platform = "node"

tasks:
  build:
    command: "tsc"
    inputs:
      - "src/**/*"
    outputs:
      - "dist/**/*"
```

## Running Tasks

```bash
# Build all projects
moon run build

# Build frontend only
moon run frontend:build

# Build with dependencies
moon run build --dep-order

# Run tests in all projects
moon run test

# Run dev servers
moon run dev --local
```

## CI/CD Integration

```yaml
# .github/workflows/ci.yml
name: CI
on: [push, pull_request]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: moonrepo/setup-moon-action@v2
      - run: moon run build
      - run: moon run test
```
