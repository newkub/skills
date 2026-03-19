---
description: A task runner / simpler Make alternative written in Go with advanced features and cross-platform support
title: cli-task
tags: [cli, task-runner, build, automation, cross-platform]
---

## Overview

`task` เป็น task runner ที่ใช้งานง่ายกว่า Make อ่านจาก `Taskfile.yml` สนับสนุน variables, dependencies และ cross-platform พร้อม advanced features สำหรับ build automation

## Installation

```powershell
scoop install task
# หรือ
choco install task
# หรือ
winget install go-task.task
# หรือ
go install github.com/go-task/task/v3/cmd/task@latest
```

## Basic Usage

```bash
# Run default task
task

# Run specific task
task build
task test

# List all tasks
task --list

# Show task summary
task --summary

# Dry run (show commands without executing)
task --dry

# Run with verbose output
task --verbose

# Run task from specific directory
task -C /path/to/project build
```

## Command Line Options

### Basic Options

| Flag | Description |
|------|-------------|
| `--list` | List available tasks |
| `--list-all` | List all tasks including hidden |
| `--list-tasks` | List tasks with descriptions |
| `--summary` | Show task summary |
| `--dry` | Dry run (don't execute) |
| `--force` | Force execution even if up-to-date |
| `--watch` | Watch for changes and re-run |
| `--status` | Show task status |

### Output Options

| Flag | Description |
|------|-------------|
| `--verbose` | Verbose output |
| `--silent` | Silent output |
| `--color` | Color output (auto, never, always) |
| `--no-color` | Disable colored output |
| `--output` | Output format (text, json) |

### Execution Options

| Flag | Description |
|------|-------------|
| `--parallel` | Run tasks in parallel |
| `--jobs <num>` | Number of parallel jobs |
| `--interval <duration>` | Watch interval |
| `--dir <dir>` | Working directory |
| `--entrypoint <file>` | Entry point Taskfile |

### Configuration Options

| Flag | Description |
|------|-------------|
| `--global` | Use global Taskfile |
| `--version` | Show version |
| `--help` | Show help |
| `--init` | Create sample Taskfile |

## Taskfile.yml Examples

### Basic Taskfile

```yaml
version: '3'

tasks:
  default:
    desc: Default task
    cmds:
      - task: build

  build:
    desc: Build the project
    cmds:
      - go build -o bin/app .
    sources:
      - "*.go"
    generates:
      - bin/app

  test:
    desc: Run tests
    cmds:
      - go test ./...
    sources:
      - "*.go"
      - "**/*_test.go"

  clean:
    desc: Clean build artifacts
    cmds:
      - rm -rf bin/
```

### Advanced Taskfile

```yaml
version: '3'

vars:
  GREETING: Hello, World!
  BUILD_DIR: bin
  BINARY_NAME: app

env:
  GO111MODULE: "on"
  CGO_ENABLED: "0"

tasks:
  default:
    desc: Run build and test
    cmds:
      - task: build
      - task: test

  build:
    desc: Build the application
    vars:
      TARGET: "{{.BUILD_DIR}}/{{.BINARY_NAME}}"
    cmds:
      - mkdir -p {{.BUILD_DIR}}
      - go build -o {{.TARGET}} .
    sources:
      - "*.go"
      - go.mod
      - go.sum
    generates:
      - "{{.TARGET}}"
    method: checksum

  test:
    desc: Run all tests
    cmds:
      - go test -v ./...
    sources:
      - "*.go"
      - "**/*_test.go"

  test-coverage:
    desc: Run tests with coverage
    cmds:
      - go test -coverprofile=coverage.out ./...
      - go tool cover -html=coverage.out -o coverage.html
    sources:
      - "*.go"
      - "**/*_test.go"
    generates:
      - coverage.out
      - coverage.html

  lint:
    desc: Run linter
    cmds:
      - golangci-lint run

  clean:
    desc: Clean build artifacts
    cmds:
      - rm -rf {{.BUILD_DIR}}
      - rm -f coverage.out coverage.html

  install:
    desc: Install the application
    deps: [build]
    cmds:
      - cp {{.BUILD_DIR}}/{{.BINARY_NAME}} /usr/local/bin/

  run:
    desc: Run the application
    deps: [build]
    cmds:
      - ./{{.BUILD_DIR}}/{{.BINARY_NAME}}

  docker-build:
    desc: Build Docker image
    cmds:
      - docker build -t myapp .
    sources:
      - Dockerfile
      - "*.go"

  deploy:
    desc: Deploy to production
    deps: [build, test]
    cmds:
      - echo "Deploying to production..."
      - ./deploy.sh
```

## Advanced Features

### Variables and Environment

```yaml
version: '3'

vars:
  # Global variables
  VERSION: "1.0.0"
  APP_NAME: "myapp"
  
  # Dynamic variables
  TIMESTAMP: "{{.NOW | date \"20060102_150405\"}}"
  GIT_COMMIT: "{{.GIT_COMMIT}}"
  
  # Complex variables
  BUILD_DIR: "{{.ROOT_DIR}}/build"
  BINARY_PATH: "{{.BUILD_DIR}}/{{.APP_NAME}}"

env:
  # Environment variables
  GOOS: "linux"
  GOARCH: "amd64"
  CGO_ENABLED: "0"
  
  # Dynamic environment
  APP_VERSION: "{{.VERSION}}"

tasks:
  build:
    vars:
      # Task-specific variables
      TARGET_OS: "{{.GOOS}}"
      TARGET_ARCH: "{{.GOARCH}}"
    cmds:
      - echo "Building for {{.TARGET_OS}}/{{.TARGET_ARCH}}"
      - go build -o {{.BINARY_PATH}} .
```

### Dependencies and Task Relationships

```yaml
version: '3'

tasks:
  setup:
    desc: Setup development environment
    cmds:
      - go mod download
      - go mod tidy

  generate:
    desc: Generate code
    deps: [setup]
    cmds:
      - go generate ./...

  build:
    desc: Build the application
    deps: [generate]
    cmds:
      - go build -o bin/app .

  test:
    desc: Run tests
    deps: [build]
    cmds:
      - go test ./...

  integration:
    desc: Run integration tests
    deps: [build, test]
    cmds:
      - go test -tags=integration ./...

  deploy:
    desc: Deploy application
    deps: [integration]
    cmds:
      - ./deploy.sh
```

### Conditional Execution

```yaml
version: '3'

tasks:
  build:
    desc: Build with conditional flags
    cmds:
      - |
        {{if eq .ENV "development"}}
        go build -o bin/app -race .
        {{else}}
        go build -o bin/app .
        {{end}}
    env:
      ENV: "{{.ENV | default \"development\"}}"

  test:
    desc: Run tests conditionally
    cmds:
      - |
        {{if .CI}}
        go test -v -race ./...
        {{else}}
        go test ./...
        {{end}}
    env:
      CI: "{{.CI | default \"false\"}}"

  deploy:
    desc: Deploy to specific environment
    cmds:
      - echo "Deploying to {{.TARGET_ENV}}"
      - ./deploy-{{.TARGET_ENV}}.sh
    vars:
      TARGET_ENV: "{{.TARGET_ENV | default \"staging\"}}"
```

### Parallel Execution

```yaml
version: '3'

tasks:
  test:
    desc: Run all tests in parallel
    deps:
      - task: test-unit
      - task: test-integration
      - task: test-e2e
    parallel: true

  test-unit:
    desc: Run unit tests
    cmds:
      - go test ./unit/...

  test-integration:
    desc: Run integration tests
    cmds:
      - go test ./integration/...

  test-e2e:
    desc: Run end-to-end tests
    cmds:
      - go test ./e2e/...

  build-all:
    desc: Build for multiple platforms
    deps:
      - task: build-linux
      - task: build-windows
      - task: build-macos
    parallel: true

  build-linux:
    cmds:
      - GOOS=linux GOARCH=amd64 go build -o bin/app-linux .

  build-windows:
    cmds:
      - GOOS=windows GOARCH=amd64 go build -o bin/app.exe .

  build-macos:
    cmds:
      - GOOS=darwin GOARCH=amd64 go build -o bin/app-macos .
```

### File Watching and Auto-reload

```yaml
version: '3'

tasks:
  dev:
    desc: Development server with auto-reload
    cmds:
      - task: build
      - ./bin/app
    watch: true
    sources:
      - "*.go"
      - "templates/**/*"
      - "config/**/*"

  watch:
    desc: Watch for changes and rebuild
    cmds:
      - task: build
    watch: true
    sources:
      - "*.go"
      - go.mod
      - go.sum

  serve:
    desc: Serve with live reload
    deps: [build]
    cmds:
      - air -c .air.toml
    watch: true
    sources:
      - "*.go"
      - "static/**/*"
      - "templates/**/*"
```

### Multi-platform Builds

```yaml
version: '3'

tasks:
  build-all:
    desc: Build for all platforms
    deps:
      - task: build-linux-amd64
      - task: build-linux-arm64
      - task: build-windows-amd64
      - task: build-darwin-amd64
      - task: build-darwin-arm64
    parallel: true

  build-linux-amd64:
    desc: Build for Linux AMD64
    cmds:
      - GOOS=linux GOARCH=amd64 go build -o dist/app-linux-amd64 .
    generates:
      - dist/app-linux-amd64

  build-linux-arm64:
    desc: Build for Linux ARM64
    cmds:
      - GOOS=linux GOARCH=arm64 go build -o dist/app-linux-arm64 .
    generates:
      - dist/app-linux-arm64

  build-windows-amd64:
    desc: Build for Windows AMD64
    cmds:
      - GOOS=windows GOARCH=amd64 go build -o dist/app-windows-amd64.exe .
    generates:
      - dist/app-windows-amd64.exe

  build-darwin-amd64:
    desc: Build for macOS AMD64
    cmds:
      - GOOS=darwin GOARCH=amd64 go build -o dist/app-darwin-amd64 .
    generates:
      - dist/app-darwin-amd64

  build-darwin-arm64:
    desc: Build for macOS ARM64
    cmds:
      - GOOS=darwin GOARCH=arm64 go build -o dist/app-darwin-arm64 .
    generates:
      - dist/app-darwin-arm64

  package:
    desc: Package all builds
    deps: [build-all]
    cmds:
      - cd dist && tar -czf app-linux-amd64.tar.gz app-linux-amd64
      - cd dist && tar -czf app-linux-arm64.tar.gz app-linux-arm64
      - cd dist && zip app-windows-amd64.zip app-windows-amd64.exe
      - cd dist && tar -czf app-darwin-amd64.tar.gz app-darwin-amd64
      - cd dist && tar -czf app-darwin-arm64.tar.gz app-darwin-arm64
```

## Integration Examples

### CI/CD Integration

```yaml
version: '3'

tasks:
  ci:
    desc: CI pipeline
    deps:
      - test
      - lint
      - build
    cmds:
      - echo "CI pipeline completed successfully"

  test:
    desc: Run all tests
    cmds:
      - go test -v -race ./...
      - go test -v -race ./... -tags=integration

  lint:
    desc: Run all linters
    cmds:
      - go vet ./...
      - go fmt ./...
      - golangci-lint run

  build:
    desc: Build for CI
    cmds:
      - go build -o bin/app .
    env:
      CGO_ENABLED: "0"

  deploy:
    desc: Deploy to production
    deps: [build]
    cmds:
      - echo "Deploying to production..."
      - ./deploy.sh
    env:
      DEPLOY_ENV: production
```

### Docker Integration

```yaml
version: '3'

tasks:
  docker-build:
    desc: Build Docker image
    cmds:
      - docker build -t myapp:{{.VERSION}} .
    vars:
      VERSION: "{{.VERSION | default \"latest\"}}"

  docker-run:
    desc: Run Docker container
    deps: [docker-build]
    cmds:
      - docker run -p 8080:8080 myapp:{{.VERSION}}

  docker-push:
    desc: Push Docker image
    deps: [docker-build]
    cmds:
      - docker push myapp:{{.VERSION}}

  docker-compose-up:
    desc: Start services with Docker Compose
    cmds:
      - docker-compose up -d

  docker-compose-down:
    desc: Stop services
    cmds:
      - docker-compose down
```

### Development Workflow

```yaml
version: '3'

tasks:
  dev:
    desc: Start development environment
    deps:
      - setup
      - generate
    cmds:
      - air -c .air.toml
    watch: true

  setup:
    desc: Setup development environment
    cmds:
      - go mod download
      - go mod tidy
      - cp .env.example .env

  generate:
    desc: Generate code
    cmds:
      - go generate ./...
      - mockgen -source=./internal/service -destination=./mocks

  migrate:
    desc: Run database migrations
    cmds:
      - go run ./cmd/migrate/main.go up

  migrate-down:
    desc: Rollback database migrations
    cmds:
      - go run ./cmd/migrate/main.go down

  seed:
    desc: Seed database
    cmds:
      - go run ./cmd/seed/main.go

  reset:
    desc: Reset database
    deps: [migrate-down, migrate, seed]
    cmds:
      - echo "Database reset completed"
```

## Performance Optimization

### Parallel Builds

```yaml
version: '3'

tasks:
  build-all:
    desc: Build all targets in parallel
    deps:
      - task: build-web
      - task: build-api
      - task: build-worker
    parallel: true

  build-web:
    cmds:
      - cd web && npm run build

  build-api:
    cmds:
      - cd api && go build -o bin/api .

  build-worker:
    cmds:
      - cd worker && go build -o bin/worker .
```

### Incremental Builds

```yaml
version: '3'

tasks:
  build:
    desc: Incremental build
    cmds:
      - go build -o bin/app .
    sources:
      - "*.go"
      - go.mod
      - go.sum
    generates:
      - bin/app
    method: timestamp

  build-checksum:
    desc: Build with checksum method
    cmds:
      - go build -o bin/app .
    sources:
      - "*.go"
      - go.mod
      - go.sum
    generates:
      - bin/app
    method: checksum
```

## Troubleshooting

### Common Issues

1. **Task not found**: Check Taskfile path and syntax
2. **Dependencies not running**: Verify task names and dependencies
3. **Environment variables not working**: Check env section syntax
4. **Parallel execution issues**: Check for shared resources

### Debug Mode

```bash
# Show verbose output
task --verbose build

# Dry run to see what would execute
task --dry build

# List all tasks including hidden
task --list-all

# Show task summary
task --summary build

# Check task status
task --status
```

### Performance Monitoring

```bash
# Time task execution
time task build

# Run with specific number of jobs
task --jobs 4 build-all

# Monitor with watch mode
task --watch build
```

## Aliases and Functions

### Common Aliases

```bash
# Task aliases
alias t='task'
alias tl='task --list'
alias td='task --dry'
alias tw='task --watch'
alias tp='task --parallel'

# Development aliases
alias dev='task dev'
alias build='task build'
alias test='task test'
alias clean='task clean'
```

### Custom Functions

```bash
# Task runner with environment
t_env() {
    local env=$1
    shift
    ENV=$env task "$@"
}

# Parallel task runner
t_parallel() {
    task --parallel "$@"
}

# Watch task runner
t_watch() {
    task --watch "$@"
}

# Task status checker
t_status() {
    task --status "$@"
}
```

## Use Cases

### Web Development

```yaml
version: '3'

tasks:
  dev:
    desc: Start development server
    cmds:
      - npm run dev
    watch: true
    sources:
      - "src/**/*"
      - "public/**/*"

  build:
    desc: Build for production
    cmds:
      - npm run build
    sources:
      - "src/**/*"
      - "package.json"
    generates:
      - "dist/**/*"

  deploy:
    desc: Deploy to production
    deps: [build]
    cmds:
      - npm run deploy
```

### Microservices

```yaml
version: '3'

tasks:
  build-all:
    desc: Build all services
    deps:
      - task: build-user-service
      - task: build-order-service
      - task: build-payment-service
    parallel: true

  build-user-service:
    cmds:
      - cd services/user && go build -o ../../bin/user-service .

  build-order-service:
    cmds:
      - cd services/order && go build -o ../../bin/order-service .

  build-payment-service:
    cmds:
      - cd services/payment && go build -o ../../bin/payment-service .

  run-all:
    desc: Run all services
    deps: [build-all]
    cmds:
      - ./bin/user-service &
      - ./bin/order-service &
      - ./bin/payment-service &
      - wait
```

## Features

- **YAML based**: Simple and readable configuration
- **Cross-platform**: Works on Windows, macOS, Linux
- **Task dependencies**: Define task relationships
- **Variables and environment**: Flexible configuration
- **Parallel execution**: Run tasks concurrently
- **File watching**: Auto-reload on changes
- **Incremental builds**: Only rebuild when necessary
- **Conditional execution**: Run tasks based on conditions
- **Multi-platform builds**: Build for different architectures
- **Docker integration**: Native Docker support
- **CI/CD ready**: Designed for automation
- **Extensible**: Custom tasks and functions
- **Performance optimized**: Fast execution
- **Verbose output**: Detailed logging options
- **Dry run**: Preview commands before execution
- **Status checking**: Monitor task status
- **Global tasks**: System-wide task definitions
- **Template support**: Dynamic configuration
- **Method selection**: Choose build strategies
- **Source tracking**: Automatic dependency detection
