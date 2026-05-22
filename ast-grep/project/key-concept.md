# Key Concepts of AST-grep

## Core Concepts

### 1. Abstract Syntax Tree (AST)
**Definition**: A tree representation of code structure that captures syntactic relationships
**Why important**: Enables structural matching instead of text-based matching
**Example**: `console.log("hello")` becomes a tree with `CallExpression`, `MemberExpression`, and `Literal` nodes

### 2. Tree-sitter
**Definition**: A parser generator tool and incremental parsing library
**Role in ast-grep**: Provides language parsers for 26+ programming languages
**Benefits**: Fast, error-recovering parsing with precise node information

### 3. Meta Variables
**Syntax**: `$NAME` where NAME is typically uppercase
**Purpose**: Capture any AST node in a pattern
**Types**: 
- Single meta variable: `$VAR` matches one node
- Multi meta variable: `$$ARGS` matches multiple nodes
- Ellipsis: `...` matches zero or more nodes

**Examples**:
```javascript
// Capture any function call
$FUNC($ARGS)

// Capture any property access
$OBJ.$PROP

// Capture multiple arguments
console.log($$ARGS)
```

### 4. Pattern Matching
**Definition**: Process of finding code structures that match a given pattern
**Strictness levels**: 
- **Smart** (default): Balances precision and flexibility
- **Strict**: Exact structural match
- **Lenient**: More flexible matching

**Algorithm**: Depth-first search with constraint satisfaction

### 5. Rule System
**Components**:
- **Pattern**: What to match
- **Constraints**: Additional conditions
- **Fix**: How to transform matches
- **Metadata**: Rule information and severity

**Rule Types**:
- **Atomic**: Single pattern matching
- **Relational**: Node relationships
- **Composite**: Boolean logic combinations

## Advanced Concepts

### 6. Node Relationships
**Inside**: Node is contained within another node
**Has**: Node contains another node
**Precedes**: Node appears before another node
**Follows**: Node appears after another node

**Example**:
```yaml
rule:
  inside:
    pattern: function $NAME() { $$BODY }
    has:
      pattern: console.log($ARG)
```

### 7. Constraints
**Purpose**: Add conditions to pattern matching
**Types**:
- **Meta variable constraints**: Restrict what meta variables can match
- **Node constraints**: Restrict node properties
- **Relational constraints**: Define node relationships

**Example**:
```yaml
rule:
  pattern: $FUNC($ARGS)
  constraints:
    FUNC:
      regex: "^(log|debug|info)$"
```

### 8. Transformations
**Purpose**: Manipulate captured variables before using them
**Operations**:
- **replace**: String replacement
- **substring**: Extract portion of string
- **convert**: Change case or format
- **rewrite**: Apply rewriters to captured content

**Example**:
```yaml
transform:
  camelCase:
    convert:
      toCase: camelCase
      source: $SNAKE_CASE
```

### 9. Rewriters
**Purpose**: Complex multi-step transformations
**Features**:
- **Sequential processing**: Apply multiple transformations
- **Conditional logic**: Apply based on conditions
- **Variable reuse**: Use captured variables

**Example**:
```yaml
rewriters:
  - source: $VAR
    rewrite:
      rewriters:
        - convert: { toCase: pascal, source: $VAR }
        - replace: { by: "get", source: $RESULT }
```

### 10. Fix Generation
**Template**: String with meta variable references
**Indentation**: Preserved automatically
**Validation**: Ensures syntactic correctness

**Example**:
```yaml
fix: |
  const $VAR = await $PROMISE;
  return $VAR;
```

## Configuration Concepts

### 11. sgconfig.yml
**Purpose**: Project-level configuration file
**Sections**:
- **ruleDirs**: Directories containing rule files
- **testConfigs**: Test configuration
- **utilDirs**: Utility rule directories
- **languageGlobs**: File patterns for languages
- **customLanguages**: Runtime-loaded parsers

### 12. Rule Discovery
**Process**: Automatic loading of rule files from configured directories
**Naming**: Rule ID derived from file path
**Validation**: Syntax and semantic checking before loading

### 13. Test Framework
**Snapshot testing**: Compare expected vs actual results
**Test cases**: YAML definitions with input and expected output
**CI integration**: Automated testing in pipelines

## Performance Concepts

### 14. Incremental Parsing
**Concept**: Only re-parse changed files
**Benefit**: Faster subsequent scans
**Implementation**: File modification time tracking

### 15. Parallel Processing
**Multi-threading**: Process multiple files simultaneously
**Load balancing**: Distribute work across cores
**Memory efficiency**: Streaming processing to avoid memory spikes

### 16. Caching
**Parse cache**: Store AST results for reuse
**Rule cache**: Compile rules once, reuse many times
**Pattern cache**: Pre-compile frequently used patterns

## Integration Concepts

### 17. Language Server Protocol (LSP)
**Purpose**: IDE integration for real-time feedback
**Features**:
- Diagnostics: Show rule violations
- Code actions: Quick fixes for violations
- Hover information: Rule explanations

### 18. API Bindings
**Node.js**: Native bindings via NAPI
**Python**: Python bindings via PyO3
**Rust**: Core library for custom tools
**WASM**: Browser support via WebAssembly

### 19. Tool Integration
**CI/CD**: GitHub Actions, GitLab CI integration
**Editors**: VSCode, Neovim, Emacs plugins
**Build systems**: Integration with various build tools

## Best Practice Concepts

### 20. Rule Design
**Specificity**: Make rules as specific as needed
**Maintainability**: Clear rule naming and documentation
**Testability**: Comprehensive test coverage
**Performance**: Efficient pattern matching

### 21. Pattern Writing
**Simplicity**: Start with simple patterns
**Clarity**: Use meaningful variable names
**Robustness**: Handle edge cases
**Documentation**: Explain pattern intent

### 22. Error Handling
**Graceful degradation**: Continue processing on errors
**Clear messages**: Helpful error reporting
**Recovery**: Handle syntax errors in source code
**Validation**: Validate rule correctness
