# Moonrepo Configuration

## moon.toml

Root configuration file:

```toml
[moon]
default_project = "."

# Workspace configuration
[workspace]
inherited_tasks = ["build", "test", "lint"]

# Toolchains
[toolchain]
node = "20.10.0"
bun = "1.1.0"
rust = "1.75.0"
```

## Project Configuration

### .moon/project.yml

```yaml
type: "application"  # or "library"
language: "typescript"
platform = "node"
```

### Task Configuration

In `package.json` (for Node.js projects):

```json
{
  "tasks": {
    "build": "tsc",
    "test": "vitest",
    "lint": "eslint ."
  }
}
```

Moon automatically detects these tasks.

## Task Dependencies

```toml
[projects]

[projects.frontend]
type = "application"
language = "typescript"

[projects.backend]
type = "application"
language = "typescript"
depends_on = ["frontend"]
```

## Environment Variables

Create `.env.moon`:

```bash
NODE_ENV=development
API_URL=http://localhost:3000
```

## Advanced Configuration

### Custom Task Configuration

```toml
[projects]
[projects.my-app]
type = "application"

[projects.my-app.tasks.build]
command = "webpack build"
inputs = ["src/**/*"]
outputs = ["dist/**"]
```

### Platform-Specific Settings

```toml
[platform]
type = "node"
[platform.node]
version = "20"
package_manager = "bun"
```
