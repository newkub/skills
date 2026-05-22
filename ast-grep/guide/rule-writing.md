# Rule Writing

Comprehensive guide to writing effective AST-grep rules for code search, linting, and transformation.

## Rule Types

### Atomic Rules

Basic rules for matching individual AST nodes.

#### Pattern Matching
```yaml
# Match specific code structure
rule:
  pattern: console.log($ARG)
```

#### Kind Matching
```yaml
# Match by AST node type
rule:
  kind: if_statement
```

#### Regex Matching
```yaml
# Match node text content
rule:
  kind: comment
  regex: 'TODO|FIXME'
```

#### Positional Matching
```yaml
# Match by position among siblings
rule:
  nthChild: 1
```

### Relational Rules

Rules that define relationships between nodes.

#### Inside Rule
```yaml
# Target must be inside parent
rule:
  pattern: await $EXPR
  inside:
    kind: try_statement
```

#### Has Rule
```yaml
# Target must have child
rule:
  kind: function_declaration
  has:
    pattern: console.log($$$ARGS)
```

#### Precedes/Follows
```yaml
# Target appears before/after another node
rule:
  pattern: const $VAR = $VALUE
  precedes:
    pattern: console.log($VAR)
```

### Composite Rules

Combine multiple rules with Boolean logic.

#### All Rule
```yaml
# Must satisfy ALL conditions
rule:
  all:
    - pattern: const $VAR = $VALUE
    - has: { kind: string_literal }
```

#### Any Rule
```yaml
# Must satisfy AT LEAST ONE condition
rule:
  any:
    - pattern: let $X = $Y
    - pattern: const $X = $Y
```

#### Not Rule
```yaml
# Must NOT satisfy condition
rule:
  pattern: console.log($$$ARGS)
  not:
    inside:
      kind: catch_clause
```

## Meta Variables

### Single Meta Variables
Match single AST nodes with `$NAME`:

```yaml
rule:
  pattern: console.log($MSG)
```

**Valid names:** `$VAR`, `$META_VAR`, `$VAR1`, `$_`, `$_123`
**Invalid names:** `$invalid`, `$Svalue`, `$123`, `$KEBAB-CASE`

### Multi Meta Variables
Match multiple nodes with `$$$NAME`:

```yaml
rule:
  pattern: console.log($$$ARGS)
```

### Constraints
Filter meta-variable matches:

```yaml
constraints:
  MSG: { kind: string_literal }
```

## Advanced Features

### Context and Selector
Handle ambiguous patterns:

```yaml
rule:
  pattern:
    context: '{ key: value }'
    selector: pair
```

### Utility Rules
Reusable rule components:

```yaml
utils:
  is-react:
    kind: function_declaration
    has: { kind: jsx_element }

rule:
  matches: is-react
```

### Transform Operations
Manipulate meta-variables:

```yaml
transform:
  NEW_VAR:
    substring: { endChar: 1, source: $V }
```

### Rewriters
Multi-step transformations:

```yaml
rewriters:
  - id: remove-quotes
    rule: { pattern: "'$A'" }
    fix: "$A"
```

## Fix Templates

### Simple Fix
String replacement:

```yaml
rule:
  pattern: console.log($$$ARGS)
fix: "logger.info($$$ARGS)"
```

### FixConfig Object
Advanced fix configuration:

```yaml
fix:
  template: "logger.info($$$ARGS)"
  expandEnd: rule
```

### Using Meta Variables
Preserve captured content:

```yaml
rule:
  pattern: var $VAR = $VALUE
fix: "let $VAR = $VALUE"
```

## Best Practices

### 1. Start Simple
Begin with atomic rules, then add complexity:

```yaml
# Start with this
rule:
  pattern: console.log($ARG)

# Then add constraints
rule:
  pattern: console.log($ARG)
  constraints:
    ARG: { kind: string_literal }
```

### 2. Be Specific
Use specific patterns to reduce false positives:

```yaml
# Too broad
rule:
  pattern: console.log($$$ARGS)

# Better
rule:
  pattern: console.log($MSG)
  constraints:
    MSG: { kind: string_literal }
```

### 3. Use Relational Rules
Leverage node relationships:

```yaml
# Find console.log not in catch blocks
rule:
  pattern: console.log($$$ARGS)
  not:
    inside:
      kind: catch_clause
```

### 4. Add Constraints
Filter meta-variable matches:

```yaml
rule:
  pattern: import $NAME from '$PATH'
  constraints:
    NAME: { regex: '^[A-Z]' }
    PATH: { regex: '^@/' }
```

### 5. Test Thoroughly
Create comprehensive test cases:

```yaml
# Valid case
valid: |
  console.log("Hello World");

# Invalid case  
invalid: |
  console.error("Error message");
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

### Security Rules
```yaml
# Find eval usage
rule:
  pattern: eval($CODE)
severity: error
message: "Avoid using eval() for security reasons"
```

## Performance Tips

### File Scoping
Limit rule scope with file patterns:

```yaml
files:
  - "src/**/*.ts"
  - "!src/**/*.test.ts"
```

### Rule Ordering
Place frequently triggered rules first in configuration.

### Avoid Deep Traversal
Use relational rules instead of deep AST traversal:

```yaml
# Good: relational
rule:
  pattern: console.log($$$ARGS)
  inside:
    kind: function_declaration

# Avoid: deep traversal
rule:
  pattern: |
    function $FUNC() {
      $$BODY
      console.log($$$ARGS)
    }
```

## Testing and Validation

### Test Structure
Create test files alongside rules:

```
rules/
  no-console.yml
rule-tests/
  no-console/
    valid.ts
    invalid.ts
```

### Test Cases
Cover positive and negative scenarios:

```yaml
# rule-tests/no-console/invalid.ts
console.log("This should be flagged");

# rule-tests/no-console/valid.ts
logger.info("This is acceptable");
```

### Snapshot Testing
Use snapshots for complex fixes:

```bash
# Update snapshots
ast-grep test --update-all

# Run tests
ast-grep test
```

## Troubleshooting

### Common Issues

1. **Pattern doesn't match**: Check if pattern is valid code
2. **Too many matches**: Add constraints or make pattern more specific
3. **Fix doesn't work**: Verify fix template syntax
4. **Performance issues**: Limit file scope or optimize patterns

### Debug Tools

- **Playground**: Test patterns interactively
- **Debug mode**: Use `--debug-query` flag
- **JSON output**: Use `--json` for detailed analysis

## Next Steps

- Learn [Advanced Patterns](../patterns/atomic-rules.md)
- Explore [Real-world Examples](../examples/)
- Set up [CI Integration](../integration/ci-cd.md)
