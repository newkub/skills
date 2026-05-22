# AST-grep

AST-grep is a fast and polyglot tool for code structural search, lint, and rewriting at large scale. It's like syntax-aware grep/sed that can write code patterns to locate and modify code based on AST.

## Overview

AST-grep is a structural search and rewrite tool that uses Abstract Syntax Tree (AST) pattern matching to find and transform code across multiple programming languages.

## Content Summary

| Section | Purpose | Status |
|---------|---------|--------|
| **project/** | Project information and concepts | ✅ Complete |
| **guide/** | User guides and tutorials | ✅ Complete |
| **interface/** | API and CLI reference | ✅ Complete |
| **reference/** | Links and resources | ✅ Complete |
| **examples/** | Usage examples | ✅ Complete |
| **patterns/** | Design patterns | ✅ Complete |
| **rules/** | Rule conventions | ✅ Ready |
| **usecase/** | Use cases | ✅ Ready |
| **workflows/** | Development workflows | ✅ Ready |
| **integration/** | Tool integrations | ✅ Ready |
| **changelog/** | Version history | ✅ Ready |

## Quick Start

```bash
# Install
bun add -D @ast-grep/cli

# Basic search
sg run -p 'console.log($ARG)'

# Scan with rules
sg scan --config sgconfig.yml

# Interactive fix
sg scan --config sgconfig.yml --interactive
```

## Content Structure

```
ast-grep/
├── SKILL.md                     # This file
├── project/                     # OPTIONAL project information
│   ├── purpose.md
│   ├── why.md
│   ├── what.md
│   ├── features.md
│   ├── when.md
│   ├── key-concept.md
│   ├── principles.md
│   └── faqs.md
├── guide/                       # REQUIRED guides and tutorials
│   ├── key-concept.md
│   ├── all-features.md
│   ├── installation.md
│   ├── configuration.md
│   ├── quick-start.md
│   ├── best-practices.md
│   └── troubleshooting.md
├── interface/                   # OPTIONAL interface documentation
│   ├── api/
│   │   └── index.md
│   ├── cli/
│   │   └── index.md
│   └── programmatic/
│       └── index.md
├── examples/                    # OPTIONAL usage examples
├── reference/                   # REQUIRED links and references
│   └── link.md
├── rules/                       # OPTIONAL rules and conventions
│   ├── naming-*.md
│   ├── structure-*.md
│   ├── config-*.md
│   ├── dependencies-*.md
│   ├── security-*.md
│   ├── performance-*.md
│   ├── testing-*.md
│   └── error-handling-*.md
├── patterns/                    # OPTIONAL design patterns
│   ├── refactor-*.md
│   ├── optimize-*.md
│   ├── improve-*.md
│   ├── migration-*.md
│   ├── upgrade-*.md
│   └── file-*.md
├── usecase/                     # OPTIONAL use cases
├── workflows/                   # OPTIONAL workflows
├── integration/                 # OPTIONAL integration with other tools
└── changelog/                   # OPTIONAL changelog and version history
```

## Key Features

### Pattern Matching
- **AST-based**: Match code structure, not just text
- **Meta variables**: Capture parts of code with `$VAR`
- **Multi-language**: Support for TypeScript, JavaScript, Python, Rust, Go, Java, etc.

### Rule Types
- **Atomic**: Single pattern matching (pattern, kind, regex, nthChild, range)
- **Relational**: Node relationships (inside, has, precedes, follows)
- **Composite**: Boolean logic (all, any, not, matches)

### Code Transformation
- **Fix templates**: Automatic code rewriting
- **Transform**: Meta-variable manipulation
- **Rewriters**: Complex multi-step transformations

## When to Use

- **Code Migration**: Large-scale refactoring projects
- **Code Quality**: Enforce coding standards and best practices
- **Security**: Find and fix security vulnerabilities
- **Performance**: Optimize code patterns
- **Documentation**: Generate documentation from code structure

## Why AST-grep

1. **Precision**: AST-based matching is more accurate than regex
2. **Performance**: Fast Rust implementation
3. **Flexibility**: Support for complex pattern matching
4. **Automation**: Built-in code transformation capabilities
5. **Multi-language**: One tool for all your code analysis needs
