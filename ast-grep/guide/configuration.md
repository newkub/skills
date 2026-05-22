# Configuration

Set up AST-grep configuration for your project.

## sgconfig.yml

Create a `sgconfig.yml` file in your project root:

```yaml
# Basic configuration
ruleDirs:
  - rules
  - ast-grep-rules

# Optional: Test configuration
testConfigs:
  - testDir: rule-tests
    snapshotDir: rule-snapshots

# Optional: Utility rules
utilDirs:
  - utils

# Optional: Language support
languageGlobs:
  typescript: ["*.ts", "*.tsx", "*.vue"]
  javascript: ["*.js", "*.jsx"]
  python: ["*.py"]
```

## Rule Directory Structure

```
project/
|
+-- sgconfig.yml
+-- rules/                      # Your custom rules
|   +-- no-console.yml
|   +-- prefer-const.yml
|   +-- import-alias.yml
+-- ast-grep-rules/             # Organized rules
|   +-- nouse/
|   |   +-- no-deprecated.yml
|   |   +-- no-mock.yml
|   +-- typescript/
|   |   +-- use-shared-import.yml
|   +-- vue/
|   +-- rule-tests/             # Test cases
|   +-- utils/                  # Utility rules
```

## Configuration Options

### Basic Fields

- **ruleDirs**: Directories containing rule files
- **testConfigs**: Test configuration
- **utilDirs**: Utility rule directories
- **languageGlobs**: File patterns per language

### Advanced Options

```yaml
# Custom language support
customLanguages:
  mylang:
    libraryPath: "./mylang-parser.so"
    extensions: [".mylang"]
    expandoChar: "$"
    languageSymbol: "MyLang"

# Language injection for embedded code
languageInjections:
  - hostLanguage: typescript
    rule:
      pattern: "css`$CSS`"
    injected:
      language: css
```

## Environment Variables

Set environment variables for AST-grep:

```bash
# Enable debug output
export AST_GREP_DEBUG=true

# Set custom config path
export AST_GREP_CONFIG=./custom-sgconfig.yml

# Increase thread count
export AST_GREP_THREADS=8
```

## Project Discovery

AST-grep automatically discovers configuration files:

1. Look for `sgconfig.yml` in current directory
2. Search parent directories recursively
3. Use default configuration if none found

## Validation

Validate your configuration:

```bash
# Test configuration
ast-grep scan --config sgconfig.yml --dry-run

# Check rule syntax
ast-grep test --config sgconfig.yml
```

## Best Practices

1. **Organize rules** by category and language
2. **Use descriptive rule IDs** for easy identification
3. **Add test cases** for all custom rules
4. **Version control** your configuration files
5. **Document custom rules** for team collaboration

## Next Steps

After configuration, proceed to [Quick Start](./quick-start.md) to create your first rule.
