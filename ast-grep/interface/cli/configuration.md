# Configuration

## sgconfig.yml

```yaml
# Rule directories
ruleDirs:
  - rules
  - custom-rules

# Test configuration
testConfigs:
  - testDir: tests
    snapshotDir: snapshots

# Utility rules
utilDirs:
  - utils

# Language file patterns
languageGlobs:
  typescript: ["*.ts", "*.tsx"]
  javascript: ["*.js", "*.jsx"]
  python: ["*.py"]

# Custom languages
customLanguages:
  mylang:
    libraryPath: "./mylang-parser.so"
    extensions: [".mylang"]
    expandoChar: "$"

# Language injection
languageInjections:
  - hostLanguage: typescript
    rule:
      pattern: "css`$CSS`"
    injected:
      language: css
```

## Environment Variables

```bash
# Debug mode
export AST_GREP_DEBUG=true

# Custom config path
export AST_GREP_CONFIG=./custom-sgconfig.yml

# Thread count
export AST_GREP_THREADS=8

# Log level
export AST_GREP_LOG_LEVEL=debug
```
