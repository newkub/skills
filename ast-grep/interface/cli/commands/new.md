# ast-grep new

Scaffold new projects, rules, and tests.

## Basic Usage

```bash
# Create new project
ast-grep new project my-ast-grep-project

# Create new rule
ast-grep new rule no-console --lang typescript

# Create new test
ast-grep new test no-console

# Create utility
ast-grep new util is-react-component

# Auto-confirm prompts
ast-grep new rule --yes
```

## Commands

- `project <NAME>`: Create new project
- `rule <NAME>`: Create new rule
- `test <NAME>`: Create new test
- `util <NAME>`: Create new utility
- `help`: Show help

## Options

- `-l, --lang <LANG>`: Target language
- `-y, --yes`: Auto-confirm prompts
- `-c, --config <CONFIG_FILE>`: Config file
- `-h, --help`:: Show help
