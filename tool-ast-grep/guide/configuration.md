# Configuration

## Configuration File

### sg.config.yml

```yaml
# Root level configuration
language: typescript
ruleDirs:
  - rules/
  - custom-rules/

# Glob patterns to include/exclude
include:
  - "src/**/*.ts"
  - "lib/**/*.ts"
exclude:
  - "**/*.test.ts"
  - "**/node_modules/**"

# Severity settings
severity:
  error: exit 1
  warning: continue
  info: log

# Output format
format: json  # or: text, sarif
```

## Rule Configuration

### Inline Rule

```yaml
rule:
  pattern: console.log($ARG)
```

### Rule with Message

```yaml
rule:
  pattern: console.log($ARG)
message: "Avoid using console.log in production code"
```

### Rule with Fix

```yaml
rule:
  pattern: var $VAR = $VAL
fix:
  rule: $VAR
  value: const $VAR = $VAL
```

## Advanced Configuration

### Multiple Rules

```yaml
rules:
  - id: no-console
    pattern: console.log($ARG)
  - id: use-const
    pattern: var $VAR = $VAL
```

### Nested Conditions

```yaml
rule:
  pattern: await $EXPR
  inside:
    any:
      - kind: for_statement
      - kind: while_statement
```

### Custom Severity

```yaml
severity:
  - id: no-console
    level: error
  - id: use-const
    level: warning
```

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `AST_GREP_CONFIG` | config file path | sg.config.yml |
| `AST_GREP_TIMEOUT` | timeout in seconds | 30 |
| `AST_GREP_CACHE` | cache directory | .ast-grep-cache |

## CLI Options

```bash
# ใช้ config file อื่น
ast-grep --config custom.yml run

# override language
ast-grep -l javascript run

# verbose output
ast-grep -v run
```

## Language-Specific Config

```yaml
language: typescript
typescript:
  parser: tree-sitter-typescript
  extensions:
    - .ts
    - .tsx
```

## Per-Directory Config

สามารถมี sg.config.yml ใน subdirectory เพื่อ override config หลัก:

```yaml
# src/feature/sg.config.yml
language: typescript
ruleDirs:
  - ../../rules/
  - ./rules/
```

## Troubleshooting Config

### Invalid YAML

```bash
# validate config
ast-grep validate --config sg.config.yml
```

### Missing Rules

```bash
# list available rules
ast-grep list-rules
```

### Config Not Found

```bash
# create default config
ast-grep init
```