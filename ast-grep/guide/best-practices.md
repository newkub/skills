# Best Practices

Comprehensive best practices for writing efficient and maintainable AST-grep rules.

## Rule Development Principles

### 1. Start Simple, Build Complexity

Begin with atomic rules and gradually add complexity:

```yaml
# Step 1: Simple pattern
rule:
  pattern: console.log($ARG)

# Step 2: Add constraints
rule:
  pattern: console.log($ARG)
  constraints:
    ARG: { kind: string_literal }

# Step 3: Add relational context
rule:
  pattern: console.log($ARG)
  not:
    inside:
      kind: catch_clause
```

### 2. Be Specific, Not Broad

Use specific patterns to reduce false positives:

```yaml
# Too broad - matches everything
rule:
  kind: identifier

# Better - more specific
rule:
  kind: identifier
  regex: '^[a-z][a-zA-Z]*$'

# Best - very specific
rule:
  pattern: const $VAR = $VALUE
  constraints:
    VAR: { regex: '^[a-z][a-zA-Z]*$' }
```

### 3. Use Relational Rules Effectively

Leverage node relationships instead of deep traversal:

```yaml
# Good: relational rule
rule:
  pattern: console.log($$$ARGS)
  inside:
    kind: function_declaration

# Avoid: deep pattern
rule:
  pattern: |
    function $FUNC() {
      $$BODY
      console.log($$$ARGS)
    }
```

### 4. Add Meaningful Constraints

Filter meta-variable matches for precision:

```yaml
rule:
  pattern: import $NAME from '$PATH'
  constraints:
    NAME: { regex: '^[A-Z]' }
    PATH: { regex: '^@/' }
```

## Performance Optimization

### 1. File Scoping

Limit rule scope with appropriate file patterns:

```yaml
files:
  - "src/**/*.ts"
  - "!src/**/*.test.ts"
  - "!src/**/*.spec.ts"
```

### 2. Rule Ordering

Place frequently triggered rules first in configuration.

### 3. Avoid Expensive Patterns

```yaml
# Expensive: deep traversal
rule:
  pattern: |
    class $CLASS {
      $$MEMBERS
      method $METHOD() {
        $$BODY
        console.log($$$ARGS)
      }
    }

# Better: relational matching
rule:
  pattern: console.log($$$ARGS)
  inside:
    kind: method_definition
  inside:
    kind: class_declaration
```

## Rule Organization

### 1. Logical Grouping

Organize rules by category and purpose:

```
rules/
  nouse/
    no-deprecated.yml
    no-mock.yml
  typescript/
    import-alias.yml
    type-imports.yml
  security/
    no-eval.yml
    no-inner-html.yml
```

### 2. Consistent Naming

Use clear, descriptive rule IDs:

```yaml
# Good: descriptive
id: prefer-named-exports-over-default
id: no-relative-imports-from-shared

# Avoid: vague
id: export-rule
id: import-fix
```

### 3. Severity Levels

Use appropriate severity levels:

- **error**: Security issues, breaking changes
- **warning**: Code quality, best practice violations
- **info**: Suggestions, optimizations
- **hint**: Minor style improvements

## Testing Strategy

### 1. Comprehensive Test Coverage

Create test cases for all scenarios:

```yaml
# rule-tests/no-console/invalid.ts
console.log("Debug message");
console.error("Error message");

# rule-tests/no-console/valid.ts
logger.info("Info message");
```

### 2. Edge Cases

Test boundary conditions and edge cases:

```typescript
// Test empty arguments
console.log();

// Test single argument
console.log("message");

// Test multiple arguments
console.log("message", data, options);
```

### 3. Snapshot Testing

Use snapshots for complex fixes:

```bash
# Update snapshots
ast-grep test --update-all

# Run tests
ast-grep test --rule rules/complex-rule.yml
```

## Error Handling

### 1. Graceful Degradation

Write rules that handle edge cases:

```yaml
rule:
  pattern: $FUNC($$$ARGS)
  constraints:
    FUNC: { kind: identifier }
  # Don't match if FUNC is not a valid identifier
```

### 2. Clear Error Messages

Provide helpful messages with context:

```yaml
message: "Use import type for type-only imports. Change 'import { $TYPES }' to 'import type { $TYPES }'"
```

### 3. Fix Validation

Ensure fix templates generate valid code:

```yaml
# Good: simple fix
fix: "import type { $TYPES } from '$PATH'"

# Better: validated fix
fix:
  template: "import type { $TYPES } from '$PATH'"
  expandEnd: rule
```

## Documentation Standards

### 1. Rule Documentation

Document complex rules with notes:

```yaml
note: |
  This rule enforces type-only imports for better tree-shaking.
  It only applies to imports that match the type pattern.
  See: https://www.typescriptlang.org/docs/handbook/modules.html#ambient-modules
```

### 2. Examples

Provide clear examples in documentation:

```markdown
## Before
```typescript
import { User, Product } from './types';
```

## After
```typescript
import type { User, Product } from './types';
```
```

### 3. Usage Instructions

Include clear usage instructions:

```bash
# Test the rule
ast-grep scan --rule rules/import-type.yml

# Apply fixes
ast-grep scan --rule rules/import-type.yml --interactive
```

## Maintenance Guidelines

### 1. Regular Updates

Keep rules updated with language changes:

- Review rules after major version updates
- Update patterns for new syntax features
- Deprecate outdated rules

### 2. Performance Monitoring

Monitor rule performance:

```bash
# Measure scan time
time ast-grep scan --config sgconfig.yml

# Check rule-specific performance
ast-grep scan --rule rules/slow-rule.yml --debug-query
```

### 3. Community Feedback

Collect and incorporate feedback:

- Track false positives and negatives
- Adjust rule severity based on usage
- Improve error messages based on user reports

## Integration Best Practices

### 1. CI/CD Integration

Integrate with development workflows:

```yaml
# .github/workflows/ast-grep.yml
name: AST-grep Scan
on: [push, pull_request]
jobs:
  scan:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Run AST-grep
        run: ast-grep scan --config sgconfig.yml
```

### 2. Editor Integration

Set up editor support for better developer experience:

```json
// .vscode/settings.json
{
  "ast-grep.enable": true,
  "ast-grep.configPath": "sgconfig.yml",
  "ast-grep.severity": "warning"
}
```

### 3. Pre-commit Hooks

Add pre-commit hooks for quality gates:

```yaml
# .pre-commit-config.yaml
repos:
  - repo: local
    hooks:
      - id: ast-grep
        name: AST-grep Scan
        entry: ast-grep scan --config sgconfig.yml
        language: system
```

## Common Pitfalls to Avoid

### 1. Overly Broad Rules

```yaml
# Bad: matches too much
rule:
  pattern: $FUNC($ARGS)

# Good: specific function calls
rule:
  pattern: console.log($ARGS)
```

### 2. Fragile Patterns

```yaml
# Bad: depends on exact formatting
rule:
  pattern: |
    if ($CONDITION) {
      $BODY
    }

# Good: flexible structure
rule:
  kind: if_statement
```

### 3. Missing Constraints

```yaml
# Bad: matches any import
rule:
  pattern: import $NAME from '$PATH'

# Good: filtered imports
rule:
  pattern: import $NAME from '$PATH'
  constraints:
    NAME: { regex: '^[A-Z]' }
```

### 4. Complex Fix Templates

```yaml
# Bad: complex logic in fix
fix: |
  if ($PATH.startsWith('../')) {
    import $NAME from '#shared/$PATH'
  } else {
    import $NAME from $PATH
  }

# Good: simple, predictable fix
fix: "import $NAME from '#shared/$NAME'"
```

## Advanced Techniques

### 1. Utility Rules

Create reusable rule components:

```yaml
utils:
  is-react-component:
    kind: function_declaration
    has:
      kind: jsx_element

rule:
  matches: is-react-component
  pattern: return $JSX
```

### 2. Transform Operations

Manipulate meta-variables:

```yaml
transform:
  CAMEL_CASE:
    convert:
      toCase: camelCase
      source: $SNAKE_CASE
```

### 3. Multi-step Rewriters

Use rewriters for complex transformations:

```yaml
rewriters:
  - id: extract-variable
    rule: { pattern: const $VAR = $EXPR }
    fix: "$EXPR"
  - id: inline-variable
    rule: { pattern: $EXPR }
    fix: "$EXPR"
```

## Monitoring and Metrics

### 1. Rule Effectiveness

Track rule effectiveness:

- Number of matches per scan
- False positive rate
- Fix application rate
- Developer feedback

### 2. Performance Metrics

Monitor performance:

- Scan duration
- Memory usage
- File processing rate
- Rule-specific timing

### 3. Quality Metrics

Measure code quality impact:

- Reduction in targeted issues
- Code consistency improvements
- Developer satisfaction
- Maintenance overhead

## Next Steps

- Explore [Advanced Patterns](../patterns/)
- Review [Real-world Examples](../examples/)
- Set up [CI Integration](../integration/ci-cd.md)
- Learn [Troubleshooting](./troubleshooting.md)
