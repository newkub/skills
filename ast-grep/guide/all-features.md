# All Features

## Core Features

### Pattern Matching Engine
- **AST-based matching**: Structural code matching instead of text
- **Meta variables**: `$VAR` for single nodes, `$$VAR` for sequences
- **Multi-language support**: 26+ programming languages
- **Strictness levels**: Smart, strict, and lenient matching
- **Error recovery**: Graceful handling of syntax errors

### Rule System
- **Atomic rules**: Simple pattern matching
- **Relational rules**: Node relationships (inside, has, precedes, follows)
- **Composite rules**: Boolean logic (all, any, not, matches)
- **Utility rules**: Reusable rule components
- **Constraints**: Pattern matching conditions

### Code Transformation
- **Fix templates**: Automatic code rewriting
- **Transform operations**: String manipulation and formatting
- **Rewriters**: Complex multi-step transformations
- **Indentation preservation**: Automatic formatting
- **Safe editing**: Syntactic correctness guaranteed

## Language Support

### Built-in Languages
- **Web**: JavaScript, TypeScript, HTML, CSS
- **Backend**: Python, Go, Rust, Java, C/C++, PHP, Ruby
- **Data**: SQL, JSON, YAML, TOML
- **Config**: Dockerfile, INI, Shell
- **Mobile**: Kotlin, Swift
- **Other**: Lua, Vimscript, Elixir

### Language Features
- **Tree-sitter integration**: Fast, accurate parsing
- **Error recovery**: Continue despite syntax errors
- **Language injection**: Embedded language support
- **Custom languages**: Runtime parser loading
- **Multi-file parsing**: Handle complex projects

## Command Line Interface

### Main Commands
```bash
# Pattern search
ast-grep run -p 'pattern' --lang typescript

# Rule scanning
ast-grep scan --config sgconfig.yml

# Rule testing
ast-grep test --rule rule.yml

# Project scaffolding
ast-grep new project/rule/test
```

### Search Options
- **Pattern matching**: `-p 'pattern'`
- **Language specification**: `--lang typescript`
- **File globbing**: `--globs 'src/**/*.ts'`
- **Interactive mode**: `--interactive`
- **JSON output**: `--json`

### Scanning Options
- **Configuration**: `--config sgconfig.yml`
- **Rule filtering**: `--rule 'rule-id'`
- **Severity filtering**: `--error`, `--warning`, `--info`
- **Inline rules**: `--inline-rules 'yaml'`

### Testing Options
- **Rule testing**: `--rule path/to/rule.yml`
- **Test directory**: `--test-dir tests`
- **Snapshot updates**: `--update-all`
- **Filter tests**: `--filter pattern`

## Configuration System

### Project Configuration
```yaml
# sgconfig.yml
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

### Rule Configuration
```yaml
id: no-console-log
language: javascript
rule:
  pattern: console.log($ARG)
message: Use proper logging instead of console.log
severity: error
fix: logger.info($ARG)
```

### Custom Language Support
```yaml
customLanguages:
  - extensions: [".custom"]
    libraryPath: "/path/to/parser.so"
    expandoChar: "#"
```

## Testing Framework

### Snapshot Testing
- **Automatic test generation**: Create test cases from examples
- **Expected output comparison**: Verify rule behavior
- **Test organization**: Group related tests
- **CI integration**: Automated testing in pipelines

### Test Structure
```yaml
id: test-rule
language: typescript
rule:
  pattern: console.log($ARG)

tests:
  - input: console.log("hello")
    output: logger.info("hello")
  - input: console.log(user.name)
    output: logger.info(user.name)
```

### Test Commands
```bash
# Run all tests
ast-grep test

# Test specific rule
ast-grep test --rule rule.yml

# Update snapshots
ast-grep test --update-all

# Filter tests
ast-grep test --filter "console"
```

## Performance Features

### Processing Speed
- **Rust implementation**: Native performance
- **Parallel processing**: Multi-threaded execution
- **Incremental parsing**: Only process changed files
- **Memory efficiency**: Streaming processing

### Scalability
- **Large codebases**: Handle millions of lines
- **Memory management**: Optimized memory usage
- **File system watching**: Real-time updates
- **Caching**: Parse and rule result caching

### Optimization Options
- **Thread control**: `--threads 8`
- **File filtering**: `--globs` and `--ignore`
- **Strictness tuning**: Balance speed vs accuracy
- **Batch processing**: Efficient bulk operations

## Integration Features

### IDE Support
- **LSP server**: Real-time diagnostics
- **VSCode extension**: Full IDE integration
- **Neovim plugin**: Editor integration
- **Emacs mode**: Text editor support

### API Interfaces
- **Node.js**: `@ast-grep/napi` for JavaScript
- **Python**: `ast-grep-py` for Python scripting
- **Rust**: `ast-grep-core` for custom tools
- **WASM**: Browser support via WebAssembly

### CI/CD Integration
- **GitHub Actions**: Pre-built workflows
- **GitLab CI**: Pipeline integration
- **Output formats**: JSON for machine consumption
- **Exit codes**: Standard error reporting

## Advanced Features

### Meta Variable Operations
- **Single capture**: `$VAR` matches one node
- **Multi capture**: `$$VAR` matches sequences
- **Ellipsis**: `...` matches variable length
- **Named capture**: Descriptive variable names

### Transform Operations
- **String replacement**: `replace` operation
- **Substring extraction**: `substring` operation
- **Case conversion**: `convert` to different cases
- **Pattern rewriting**: `rewrite` with rewriters

### Constraint System
- **Regex constraints**: Pattern matching on variables
- **Kind constraints**: Node type restrictions
- **Relational constraints**: Node relationships
- **Custom constraints**: User-defined conditions

### Utility System
- **Local utilities**: Rule-specific helpers
- **Global utilities**: Shared across rules
- **Recursive utilities**: Self-referencing rules
- **Parameter passing**: Variable inheritance

## Output Formats

### Human-readable
- **Colored output**: Syntax highlighting
- **Context lines**: Before/after code
- **Severity indicators**: Error/warning/info levels
- **Progress reporting**: Scan status updates

### Machine-readable
- **JSON output**: Structured data
- **Compact format**: Minimal output
- **Verbose format**: Detailed information
- **Custom formatting**: Configurable output

### Reporting
- **Summary statistics**: Match counts and locations
- **Rule coverage**: Which rules matched
- **Performance metrics**: Timing and memory usage
- **Error reporting**: Detailed error information

## Security Features

### Safe Execution
- **Sandboxed parsing**: Isolated processing
- **Input validation**: Malicious input protection
- **Memory safety**: Rust's safety guarantees
- **Error bounds**: Limited error propagation

### Code Safety
- **Syntactic validation**: Ensure valid output
- **Type preservation**: Maintain code semantics
- **Incremental application**: Safe step-by-step changes
- **Rollback capability**: Revert changes if needed

## Extensibility

### Plugin System
- **Custom languages**: Add new language support
- **Custom rules**: Domain-specific patterns
- **Custom transforms**: Specialized operations
- **Custom output**: Tailored reporting

### Configuration Flexibility
- **Multiple configs**: Project-specific settings
- **Environment variables**: Runtime configuration
- **Command-line overrides**: Flexible parameter control
- **Rule inheritance**: Reuse and extend rules

## Development Tools

### Debugging Features
- **Pattern debugging**: `--debug-query` flag
- **AST inspection**: View tree structures
- **Rule tracing**: Step-by-step execution
- **Verbose logging**: Detailed operation info

### Development Workflow
- **Rule scaffolding**: `ast-grep new rule`
- **Test generation**: Automatic test creation
- **Validation tools**: Rule correctness checking
- **Documentation generation**: Auto-generate rule docs

## Community Features

### Rule Sharing
- **Rule repositories**: Community rule collections
- **Template library**: Common pattern templates
- **Example gallery**: Real-world rule examples
- **Best practices**: Community guidelines

### Learning Resources
- **Interactive playground**: Web-based rule testing
- **Documentation**: Comprehensive guides
- **Tutorials**: Step-by-step learning
- **Community support**: Discord and GitHub discussions
