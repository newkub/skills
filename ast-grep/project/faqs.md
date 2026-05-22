# Frequently Asked Questions

## General Questions

### Q: What is AST-grep?
**A**: AST-grep is a CLI tool for code structural search, lint, and rewriting based on Abstract Syntax Tree (AST) pattern matching. Think of it as grep for code structure instead of text.

### Q: How is AST-grep different from grep?
**A**: Grep matches text patterns, while AST-grep matches code structure. This means AST-grep understands syntax, handles formatting variations, and can perform safe code transformations.

### Q: What programming languages are supported?
**A**: AST-grep supports 26+ languages including JavaScript, TypeScript, Python, Rust, Go, Java, C/C++, HTML, CSS, SQL, JSON, YAML, and more.

### Q: Is AST-grep free to use?
**A**: Yes, AST-grep is open source under the MIT license and free to use for any purpose.

## Installation and Setup

### Q: How do I install AST-grep?
**A**: You can install via multiple methods:
```bash
# npm
npm i @ast-grep/cli -g

# cargo
cargo install ast-grep --locked

# homebrew
brew install ast-grep

# pip
pip install ast-grep-cli
```

### Q: What are the system requirements?
**A**: AST-grep works on Windows, macOS, and Linux. No special requirements beyond standard development tools.

### Q: How do I verify my installation?
**A**: Run `ast-grep --help` or `sg --help` to see the available commands.

## Pattern Writing

### Q: How do I write a basic pattern?
**A**: Write code as you would normally write it, using `$VAR` for meta variables:
```javascript
// Match any console.log call
console.log($ARG)
```

### Q: What are meta variables?
**A**: Meta variables (starting with `$`) capture any AST node. `$VAR` matches one node, `$$VAR` matches multiple nodes.

### Q: How do I match function calls?
**A**: Use the function call syntax with meta variables:
```javascript
$FUNC($ARGS)
```

### Q: Can I match specific node types?
**A**: Yes, use the `kind` field in rules:
```yaml
rule:
  kind: function_declaration
```

### Q: How do I handle whitespace variations?
**A**: AST-grep automatically handles whitespace and formatting differences through AST matching.

## Rule Configuration

### Q: What is sgconfig.yml?
**A**: It's the project configuration file that defines rule directories, test settings, and language configurations.

### Q: How do I organize my rules?
**A**: Create rule files in directories specified in sgconfig.yml. Each file should contain one rule with metadata.

### Q: What are the different rule types?
**A**: 
- **Atomic**: Single pattern matching
- **Relational**: Node relationships (inside, has, precedes, follows)
- **Composite**: Boolean logic (all, any, not, matches)

### Q: How do I add constraints to patterns?
**A**: Use the `constraints` field in your rule:
```yaml
rule:
  pattern: $FUNC($ARGS)
  constraints:
    FUNC:
      regex: "^(log|debug)$"
```

## Code Transformation

### Q: How do I rewrite code?
**A**: Use the `fix` field with a template:
```yaml
fix: |
  logger.info($ARG)
```

### Q: Can I use captured variables in fixes?
**A**: Yes, reference them with `$VAR` syntax in the fix template.

### Q: How do I handle indentation?
**A**: AST-grep automatically preserves indentation in fixes.

### Q: What are transforms?
**A**: Transforms manipulate captured variables before using them in fixes (e.g., change case, extract substrings).

## Testing and Debugging

### Q: How do I test my rules?
**A**: Use `ast-grep test` with test case files or the snapshot testing framework.

### Q: What is snapshot testing?
**A**: It's a testing method that captures the expected output and compares it against actual results.

### Q: How do I debug a pattern?
**A**: Use the `--debug-query` flag to see how AST-grep interprets your pattern.

### Q: Why isn't my pattern matching?
**A**: Common issues:
- Pattern syntax is invalid
- Strictness level is too high
- Language mismatch
- Meta variable conflicts

## Performance and Scalability

### Q: How fast is AST-grep?
**A**: AST-grep is written in Rust and can process millions of lines of code in seconds.

### Q: Can it handle large codebases?
**A**: Yes, AST-grep is designed for large-scale code analysis with parallel processing and incremental parsing.

### Q: How do I improve performance?
**A**: 
- Use specific patterns
- Limit file scope with globs
- Use appropriate strictness levels
- Enable parallel processing

## Integration and Automation

### Q: Does AST-grep work with CI/CD?
**A**: Yes, it integrates seamlessly with GitHub Actions, GitLab CI, and other CI systems.

### Q: Is there IDE support?
**A**: Yes, AST-grep provides an LSP server for IDE integration and has plugins for VSCode, Neovim, and Emacs.

### Q: Can I use it programmatically?
**A**: Yes, there are Node.js, Python, and Rust APIs available.

### Q: How do I integrate with existing tools?
**A**: Use the JSON output format for machine-readable results or the CLI for shell scripting.

## Advanced Features

### Q: What are utility rules?
**A**: Utility rules are reusable rule components that can be referenced from other rules.

### Q: How do I handle multiple languages?
**A**: Use language injection for embedded code or separate rule files for each language.

### Q: Can I add custom languages?
**A**: Yes, you can load custom tree-sitter parsers at runtime.

### Q: What is the LSP server?
**A**: It's a Language Server Protocol implementation that provides real-time diagnostics and code actions in IDEs.

## Troubleshooting

### Q: Why do I get "pattern does not work" errors?
**A**: Check that your pattern is valid code for the target language and that meta variables are properly named.

### Q: How do I handle syntax errors in source files?
**A**: AST-grep uses error-recovering parsers and will continue processing despite syntax errors.

### Q: Why are my fixes not applied?
**A**: Ensure your fix template is valid code and that all referenced meta variables are captured.

### Q: How do I report bugs?
**A**: File an issue on the GitHub repository with minimal reproduction examples.

## Best Practices

### Q: How should I organize my rules?
**A**: Group related rules in directories, use descriptive names, and include comprehensive documentation.

### Q: What makes a good pattern?
**A**: Specific but flexible, meaningful variable names, and clear intent.

### Q: How do I maintain rule quality?
**A**: Write comprehensive tests, document rule purpose, and review rules regularly.

### Q: What are common pitfalls to avoid?
**A**: Overly broad patterns, missing constraints, and insufficient testing.

## Community and Support

### Q: Where can I get help?
**A**: Join the Discord community, check the documentation, or file an issue on GitHub.

### Q: How can I contribute?
**A**: Contribute rules, report bugs, suggest features, or submit pull requests.

### Q: Are there community resources?
**A**: Yes, there are community-maintained rule collections, examples, and tutorials.

### Q: How do I stay updated?
**A**: Follow the GitHub repository, join the newsletter, or monitor releases.
