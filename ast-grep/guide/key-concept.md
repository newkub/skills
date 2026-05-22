# Key Concepts

## Abstract Syntax Tree (AST)

An AST is a tree representation of code that captures the hierarchical structure and relationships between different parts of the code. Unlike plain text, an AST understands:

- **Syntax**: How code is structured according to language rules
- **Semantics**: The meaning and relationships between code elements
- **Hierarchy**: Parent-child relationships between code constructs

### Example
```javascript
console.log("hello");
```

Becomes an AST with:
```
CallExpression
  MemberExpression
    Identifier: console
    Property: log
  StringLiteral: "hello"
```

## Pattern Matching

AST-grep uses patterns to find code structures. Patterns are written like ordinary code but can include meta variables.

### Meta Variables
- **$VAR**: Matches any single AST node
- **$$VAR**: Matches multiple AST nodes (sequences)
- **...**: Matches zero or more nodes (ellipsis)

### Pattern Examples
```javascript
// Match any console.log call
console.log($ARG)

// Match any function call
$FUNC($ARGS)

// Match any property access
$OBJ.$PROP

// Match function declarations
function $NAME($$PARAMS) {
  $$BODY
}
```

## Rule System

Rules define what to match and optionally how to transform it. A rule consists of:

### Basic Rule Structure
```yaml
id: rule-identifier
language: typescript
rule:
  pattern: $PATTERN
message: Description of the issue
severity: error
fix: |
  # Optional fix template
  $TRANSFORMED_CODE
```

### Rule Types

#### 1. Atomic Rules
Single pattern matching with optional constraints:
```yaml
rule:
  pattern: console.log($ARG)
  constraints:
    ARG:
      regex: ".*[sS]ecret.*"
```

#### 2. Relational Rules
Define relationships between nodes:
```yaml
rule:
  inside:
    pattern: function $NAME() { $$BODY }
    has:
      pattern: console.log($ARG)
```

#### 3. Composite Rules
Combine multiple conditions:
```yaml
rule:
  all:
    - pattern: $FUNC($ARGS)
    - not:
        pattern: console.log($ARGS)
```

## Constraints

Constraints add conditions to pattern matching:

### Meta Variable Constraints
```yaml
constraints:
  VAR:
    regex: "^[a-z][a-zA-Z0-9]*$"  # Naming pattern
    kind: identifier              # Node type restriction
```

### Node Constraints
```yaml
constraints:
  pattern: $FUNC($ARGS)
  inside:
    kind: function_declaration
```

## Transformations

Transformations manipulate captured variables before using them in fixes:

### Transform Types
```yaml
transform:
  camelCase:
    convert:
      toCase: camelCase
      source: $SNAKE_CASE
  
  extractPrefix:
    substring:
      startChar: 0
      endChar: 3
      source: $VAR_NAME
```

### Transform Operations
- **replace**: String replacement
- **substring**: Extract portion of string
- **convert**: Change case (camelCase, PascalCase, snake_case, etc.)
- **rewrite**: Apply rewriters to content

## Rewriters

Rewriters enable complex multi-step transformations:

```yaml
rewriters:
  - source: $VAR
    rewrite:
      rewriters:
        - convert: { toCase: pascal, source: $VAR }
        - replace: { by: "get", source: $RESULT }
```

## Fix Generation

Fixes define how to transform matched code:

### Simple Fix
```yaml
fix: logger.info($ARG)
```

### Multi-line Fix
```yaml
fix: |
  const result = await $PROMISE;
  return result;
```

### Fix with Transformations
```yaml
fix: |
  const $CAMEL_CASE = $SNAKE_CASE;
```

## Configuration

### sgconfig.yml Structure
```yaml
ruleDirs:
  - rules
  - custom-rules

testConfigs:
  - testDir: tests
    snapshotDir: snapshots

utilDirs:
  - utils

languageGlobs:
  - extensions: [".ts", ".tsx"]
    language: typescript
```

## Language Support

AST-grep supports 26+ languages through tree-sitter parsers:

### Web Languages
- JavaScript, TypeScript
- HTML, CSS
- JSON, YAML

### Backend Languages
- Python, Go, Rust
- Java, C, C++
- PHP, Ruby

### Config Languages
- Dockerfile, TOML
- INI, SQL

### Language Injection
Support for embedded languages:
- JavaScript in HTML
- CSS in styled-components
- GraphQL in JavaScript

## Performance Features

### Parallel Processing
- Multi-threaded file processing
- Load balancing across CPU cores

### Incremental Parsing
- Only parse changed files
- Cache AST results

### Memory Efficiency
- Streaming processing
- Garbage collection optimization

## Testing Framework

### Snapshot Testing
```yaml
# test.yml
id: test-rule
language: typescript
rule:
  pattern: console.log($ARG)

tests:
  - input: console.log("hello")
    output: logger.info("hello")
```

### Test Commands
```bash
# Run all tests
ast-grep test

# Test specific rule
ast-grep test --rule rule.yml

# Update snapshots
ast-grep test --update-all
```

## Integration Points

### CLI Interface
```bash
# Pattern search
ast-grep run -p 'console.log($ARG)' --lang ts

# Rule scanning
ast-grep scan --config sgconfig.yml

# Interactive mode
ast-grep scan --config sgconfig.yml --interactive
```

### Language Bindings
- **Node.js**: `@ast-grep/napi`
- **Python**: `ast-grep-py`
- **Rust**: `ast-grep-core`

### LSP Server
- Real-time diagnostics
- Code actions and quick fixes
- IDE integration

## Best Practices

### Pattern Design
1. **Be specific**: Match exactly what you intend
2. **Use meaningful names**: Clear meta variable names
3. **Handle edge cases**: Consider variations in code style
4. **Test thoroughly**: Verify pattern behavior

### Rule Organization
1. **Group by purpose**: Related rules together
2. **Clear naming**: Descriptive rule IDs
3. **Documentation**: Explain rule purpose and behavior
4. **Version control**: Track rule changes

### Performance Optimization
1. **Limit scope**: Use file globs to reduce processing
2. **Optimize patterns**: Avoid overly broad matches
3. **Use constraints**: Filter matches efficiently
4. **Enable parallelism**: Process multiple files simultaneously
