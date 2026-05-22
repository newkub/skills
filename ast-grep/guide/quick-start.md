# Quick Start

Get started with AST-grep in minutes.

## Your First Rule

Create a simple rule to find `console.log` calls:

```yaml
# rules/no-console-log.yml
id: no-console-log
message: "Avoid using console.log in production code"
severity: warning
language: typescript
rule:
  pattern: console.log($$$ARGS)
fix: "logger.info($$$ARGS)"
files:
  - "**/*.ts"
  - "**/*.js"
```

## Test Your Rule

```bash
# Test the rule
ast-grep scan --rule rules/no-console-log.yml

# Interactive fix
ast-grep scan --rule rules/no-console-log.yml --interactive
```

## Pattern Matching Examples

### Basic Pattern

```yaml
# Find function calls
rule:
  pattern: fetch($URL, $OPTIONS)
```

### Using Meta Variables

```yaml
# Capture function name and arguments
rule:
  pattern: $FUNC($ARGS)
```

### Kind-based Matching

```yaml
# Find all if statements
rule:
  kind: if_statement
```

### Regex Matching

```yaml
# Find comments with TODO
rule:
  kind: comment
  regex: 'TODO|FIXME'
```

## Relational Rules

### Inside Rule

```yaml
# Find await inside try blocks
rule:
  pattern: await $EXPR
  inside:
    kind: try_statement
```

### Has Rule

```yaml
# Find functions with console.log
rule:
  kind: function_declaration
  has:
    pattern: console.log($$$ARGS)
```

## Composite Rules

### All Conditions

```yaml
# Find const with string value
rule:
  all:
    - pattern: const $VAR = $VALUE
    - has: { kind: string_literal }
```

### Any Conditions

```yaml
# Find let or const declarations
rule:
  any:
    - pattern: let $X = $Y
    - pattern: const $X = $Y
```

### Not Condition

```yaml
# Find console.log not in catch blocks
rule:
  pattern: console.log($$$ARGS)
  not:
    inside:
      kind: catch_clause
```

## Fix Templates

### Simple Fix

```yaml
rule:
  pattern: console.log($$$ARGS)
fix: "logger.info($$$ARGS)"
```

### Using Meta Variables

```yaml
rule:
  pattern: var $VAR = $VALUE
fix: "let $VAR = $VALUE"
```

### Complex Fix

```yaml
rule:
  pattern: setTimeout($CALLBACK, $DELAY)
fix: |
  setTimeout(() => {
    $CALLBACK
  }, $DELAY)
```

## Command Line Usage

### Search Pattern

```bash
# Find all console.log calls
ast-grep run -p 'console.log($ARG)'

# Search and rewrite
ast-grep run -p 'console.log($ARG)' -r 'logger.info($ARG)'

# Search in specific files
ast-grep run -p 'pattern' --glob 'src/**/*.ts'
```

### Scan with Rules

```bash
# Scan all rules
ast-grep scan

# Scan specific rule
ast-grep scan --rule rules/no-console-log.yml

# Interactive mode
ast-grep scan --interactive

# JSON output
ast-grep scan --json
```

### Test Rules

```bash
# Test all rules
ast-grep test

# Test specific rule
ast-grep test --rule rules/no-console-log.yml

# Update snapshots
ast-grep test --update-all
```

## Common Patterns

### Import Rules

```yaml
# Find relative imports
rule:
  pattern: import $IMPORTS from '../$PATH'
  regex: '\.\./'
```

### Variable Rules

```yaml
# Find unused variables
rule:
  pattern: const $VAR = $VALUE
  not:
    has:
      pattern: $VAR
```

### Function Rules

```yaml
# Find async functions without error handling
rule:
  kind: function_declaration
  has:
    pattern: async
  not:
    has:
      kind: try_statement
```

## Next Steps

1. **Explore more patterns** in [Rule Writing](./rule-writing.md)
2. **Learn best practices** in [Best Practices](./best-practices.md)
3. **Set up CI integration** in [Integration](../integration/ci-cd.md)
4. **Browse examples** in [Examples](../examples/)
