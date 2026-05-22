# Atomic Rules

Basic rules for matching individual AST nodes based on their inherent properties.

## Pattern Rule

Match code structure directly.

### Basic Pattern
```yaml
id: find-console-log
language: typescript
rule:
  pattern: console.log($ARG)
```

### Function Call Pattern
```yaml
id: find-fetch-calls
language: typescript
rule:
  pattern: fetch($URL, $OPTIONS)
```

### Variable Declaration Pattern
```yaml
id: find-const-declarations
language: typescript
rule:
  pattern: const $VAR = $VALUE
```

## Kind Rule

Match AST nodes by their type.

### Statement Types
```yaml
id: find-if-statements
language: typescript
rule:
  kind: if_statement
```

### Expression Types
```yaml
id: find-function-calls
language: typescript
rule:
  kind: call_expression
```

### Declaration Types
```yaml
id: find-function-declarations
language: typescript
rule:
  kind: function_declaration
```

## Regex Rule

Match node text content with regular expressions.

### Comment Patterns
```yaml
id: find-todo-comments
language: typescript
rule:
  kind: comment
  regex: 'TODO|FIXME|HACK'
```

### String Content Patterns
```yaml
id: find-hardcoded-urls
language: typescript
rule:
  kind: string_literal
  regex: 'https?://[^\s"'
```

### Identifier Patterns
```yaml
id: find-camel-case-vars
language: typescript
rule:
  kind: identifier
  regex: '^[a-z][a-zA-Z0-9]*$'
```

## nthChild Rule

Match nodes by their position among siblings.

### First Child
```yaml
id: find-first-parameter
language: typescript
rule:
  kind: identifier
  nthChild: 1
  inside:
    kind: formal_parameters
```

### Last Child
```yaml
id: find-last-parameter
language: typescript
rule:
  kind: identifier
  nthChild:
    position: -1
  inside:
    kind: formal_parameters
```

### Specific Position
```yaml
id: find-third-argument
language: typescript
rule:
  kind: identifier
  nthChild:
    position: 3
  inside:
    kind: arguments
```

## Range Rule

Match nodes by their character span.

### Line-based Range
```yaml
id: find-code-in-line-10
language: typescript
rule:
  range:
    start: { line: 10, column: 0 }
    end: { line: 10, column: 50 }
```

### Character-based Range
```yaml
id: find-code-in-specific-range
language: typescript
rule:
  range:
    start: { line: 5, column: 10 }
    end: { line: 5, column: 30 }
```

## Combined Atomic Rules

### Pattern + Constraints
```yaml
id: find-string-console-args
language: typescript
rule:
  pattern: console.log($ARG)
  constraints:
    ARG: { kind: string_literal }
```

### Kind + Regex
```yaml
id: find-error-identifiers
language: typescript
rule:
  kind: identifier
  regex: 'error|Error|ERROR'
```

### Pattern + nthChild
```yaml
id: find-first-function-param
language: typescript
rule:
  pattern: $PARAM
  nthChild: 1
  inside:
    kind: formal_parameters
```

## Advanced Atomic Patterns

### Object Property Access
```yaml
id: find-property-access
language: typescript
rule:
  pattern: $OBJ.$PROP
```

### Array Access
```yaml
id: find-array-access
language: typescript
rule:
  pattern: $ARRAY[$INDEX]
```

### Template Literals
```yaml
id: find-template-literals
language: typescript
rule:
  kind: template_string
```

### Arrow Functions
```yaml
id: find-arrow-functions
language: typescript
rule:
  kind: arrow_function
```

### Class Declarations
```yaml
id: find-class-declarations
language: typescript
rule:
  kind: class_declaration
```

### Import Statements
```yaml
id: find-import-statements
language: typescript
rule:
  kind: import_statement
```

### Export Statements
```yaml
id: find-export-statements
language: typescript
rule:
  kind: export_statement
```

## Performance Considerations

### Efficient Patterns
- Use specific patterns over generic ones
- Add constraints to reduce false positives
- Combine with file globbing for scope limitation

### Inefficient Patterns
```yaml
# Too broad - will match many nodes
rule:
  kind: identifier

# Better - more specific
rule:
  kind: identifier
  regex: '^[a-z][a-zA-Z]*$'
```

## Common Use Cases

### Code Quality
```yaml
id: no-var-declarations
language: typescript
rule:
  kind: variable_declaration
  regex: 'var'
severity: warning
message: "Use let or const instead of var"
```

### Security
```yaml
id: no-eval-usage
language: typescript
rule:
  pattern: eval($CODE)
severity: error
message: "Avoid using eval() for security reasons"
```

### Performance
```yaml
id: no-console-in-production
language: typescript
rule:
  pattern: console.log($$$ARGS)
severity: warning
message: "Remove console.log statements in production"
```

## Testing Atomic Rules

### Valid Test Cases
```typescript
// For find-console-log
console.log("Hello World");
```

### Invalid Test Cases
```typescript
// Should not match
console.error("Error");
logger.info("Info");
```

## Next Steps

- Learn about [Relational Rules](./relational-rules.md)
- Explore [Composite Rules](./composite-rules.md)
- See [Utility Rules](./utility-rules.md)
