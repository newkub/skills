# What is AST-grep

AST-grep (ast-grep or sg) is a CLI tool for code structural search, lint, and rewriting based on Abstract Syntax Tree (AST) pattern matching.

## Core Concept

Think of ast-grep as your old friend `grep`, but instead of matching text, it matches AST nodes. You can write patterns as if you're writing ordinary code, and it will match all code that has the same syntactical structure.

## Technical Foundation

### Tree-sitter Integration
- Uses tree-sitter parsers for 26+ programming languages
- Generates concrete syntax trees (CST) with precise node information
- Handles syntax errors gracefully with partial parsing

### Pattern Matching Engine
- **Meta variables**: Capture any AST node with `$VAR` syntax
- **Structural matching**: Matches based on syntactic structure
- **Language-aware**: Understands each language's grammar

### Rule System
- **YAML configuration**: Declarative rule definitions
- **Multiple rule types**: Atomic, relational, and composite rules
- **Transformation capabilities**: Automatic code rewriting

## Key Components

### 1. Pattern Syntax
```javascript
// Simple pattern
console.log($ARG)

// Complex pattern with meta variables
$PROP && $PROP()
```

### 2. Rule Configuration
```yaml
id: no-console-log
language: javascript
rule:
  pattern: console.log($ARG)
message: Use proper logging instead of console.log
```

### 3. Code Transformation
```yaml
fix: |
  logger.info($ARG)
```

## Supported Languages

- **Web**: JavaScript, TypeScript, HTML, CSS
- **Backend**: Python, Go, Rust, Java, C/C++
- **Mobile**: Kotlin, Swift
- **Data**: SQL, JSON, YAML
- **Config**: Dockerfile, TOML, INI

## Interfaces

### CLI Tool
```bash
sg run -p 'pattern' --lang typescript
sg scan --config sgconfig.yml
sg test --rule path/to/rule.yml
```

### Language Bindings
- **Node.js**: `@ast-grep/napi`
- **Python**: `ast-grep-py`
- **Rust**: `ast-grep-core` library
- **WASM**: Browser support

### LSP Server
- IDE integration for real-time diagnostics
- Code actions and quick fixes
- Syntax highlighting for patterns
