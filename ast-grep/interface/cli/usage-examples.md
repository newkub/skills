# Usage Examples

## Code Search

```bash
# Find all console.log calls
ast-grep run -p 'console.log($ARG)' --lang typescript

# Find function calls with specific pattern
ast-grep run -p 'fetch($URL, $OPTIONS)' --lang javascript

# Search in specific files
ast-grep run -p 'pattern' --glob 'src/**/*.ts' --glob '!src/**/*.test.ts'
```

## Code Transformation

```bash
# Replace console.log with logger.info
ast-grep run -p 'console.log($ARG)' -r 'logger.info($ARG)' --interactive

# Convert var to let/const
ast-grep run -p 'var $VAR = $VALUE' -r 'let $VAR = $VALUE' --interactive

# Add await to async calls
ast-grep run -p '$PROMISE' -r 'await $PROMISE' --interactive
```

## Rule-based Scanning

```bash
# Scan with all rules
ast-grep scan --config sgconfig.yml

# Scan specific rule
ast-grep scan --rule rules/no-console.yml

# Scan with severity filter
ast-grep scan --config sgconfig.yml --error --warning

# Interactive fixing
ast-grep scan --config sgconfig.yml --interactive
```

## Testing

```bash
# Test all rules
ast-grep test

# Test specific rule
ast-grep test --rule rules/no-console.yml

# Update snapshots
ast-grep test --update-all

# Run tests with filter
ast-grep test --filter 'console'
```

## CI/CD Integration

```bash
# GitHub Actions
- name: Run AST-grep
  run: |
    npm install -g @ast-grep/cli
    ast-grep scan --config sgconfig.yml --json > results.json
    if [ -s results.json ]; then
      echo "AST-grep found issues"
      exit 1
    fi

# Pre-commit hook
#!/bin/sh
ast-grep scan --config sgconfig.yml
```
