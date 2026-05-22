# Features of AST-grep

## Core Features

### 1. AST-based Pattern Matching
- **Structural search**: Match code by syntax tree structure
- **Meta variables**: Capture parts of code with `$VAR` syntax
- **Language-aware**: Understands each language's grammar rules
- **Precise matching**: Avoid false positives from text-based tools

### 2. Multi-language Support
- **26+ languages**: JavaScript, TypeScript, Python, Rust, Go, Java, C/C++, CSS, HTML, SQL, JSON, YAML, and more
- **Unified interface**: Same tool works across all languages
- **Language injection**: Support for embedded languages (JS in HTML, CSS in JS)

### 3. Rule System
- **Atomic rules**: Simple pattern matching (pattern, kind, regex, nthChild, range)
- **Relational rules**: Node relationships (inside, has, precedes, follows)
- **Composite rules**: Boolean logic (all, any, not, matches)
- **Utility rules**: Reusable rule components

### 4. Code Transformation
- **Fix templates**: Automatic code rewriting with captured variables
- **Transform operations**: String manipulation and formatting
- **Rewriters**: Complex multi-step transformations
- **Safe editing**: AST ensures syntactic correctness

### 5. Performance
- **Rust implementation**: Fast and memory-efficient
- **Parallel processing**: Multi-threaded scanning
- **Incremental parsing**: Only parse changed files
- **Tree-sitter**: Optimized parsing with error recovery

## Advanced Features

### 6. Configuration Management
- **sgconfig.yml**: Project-level configuration
- **Rule discovery**: Automatic rule loading from directories
- **Test configuration**: Snapshot-based rule testing
- **Custom languages**: Runtime loading of tree-sitter parsers

### 7. Testing Framework
- **Snapshot testing**: Verify rule behavior automatically
- **Test cases**: YAML-based test definitions
- **CI integration**: Automated testing in pipelines
- **Interactive debugging**: Step-by-step rule testing

### 8. IDE Integration
- **LSP server**: Real-time diagnostics and code actions
- **Editor plugins**: VSCode, Neovim, Emacs support
- **Syntax highlighting**: Pattern syntax highlighting
- **Quick fixes**: One-click code transformations

### 9. API Interfaces
- **CLI tool**: Command-line interface for automation
- **Node.js bindings**: JavaScript/TypeScript integration
- **Python bindings**: Python scripting support
- **Rust library**: Core API for custom tools
- **WASM support**: Browser-based usage

### 10. Developer Experience
- **Interactive mode**: Review changes before applying
- **JSON output**: Machine-readable results
- **Verbose logging**: Detailed debugging information
- **Shell completions**: Tab completion for commands

## Use Case Features

### 11. Security Analysis
- **Vulnerability detection**: Find security patterns
- **Audit trails**: Track security rule violations
- **Compliance checking**: Enforce security standards
- **Custom security rules**: Domain-specific patterns

### 12. Code Quality
- **Linting**: Enforce coding standards
- **Best practices**: Promote consistent patterns
- **Refactoring assistance**: Safe code transformations
- **Documentation generation**: Extract structure information

### 13. Migration Tools
- **API migration**: Update library usage
- **Framework upgrades**: Transform code patterns
- **Language transitions**: Cross-language migrations
- **Version compatibility**: Handle breaking changes

## Performance Features

### 14. Scalability
- **Large codebases**: Handle millions of lines
- **Memory efficient**: Streaming processing
- **Parallel execution**: Multi-core utilization
- **Incremental updates**: Fast re-scanning

### 15. Flexibility
- **Custom parsers**: Add new language support
- **Rule composition**: Combine multiple rules
- **Conditional logic**: Context-aware matching
- **Extensible architecture**: Plugin system
