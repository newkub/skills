# ast-grep scan

Rule-based scanning and linting.

## Basic Usage

```bash
# Scan with config
ast-grep scan --config sgconfig.yml

# Scan specific rule
ast-grep scan --rule rules/no-console.yml

# Inline rules
ast-grep scan --inline-rules 'id: test\nrule:\n  pattern: console.log($ARG)'

# Filter rules
ast-grep scan --filter 'console'

# Interactive fixing
ast-grep scan --config sgconfig.yml --interactive

# JSON output
ast-grep scan --config sgconfig.yml --json
```

## Options

- `-c, --config <CONFIG_FILE>`: Config file
- `-r, --rule <RULE_FILE>`: Rule file
- `--inline-rules <RULE_TEXT>`: Inline YAML rules
- `--filter <REGEX>`: Filter rules by ID
- `--include-metadata`: Include rule metadata
- `--no-ignore <FILE_TYPE>`: Ignore files
- `--stdin`: Read from stdin
- `--follow`: Follow symlinks
- `--globs <GLOBS>`: File patterns
- `-i, --interactive`: Interactive mode
- `-j, --threads <NUM>`: Thread count
- `-U, --update-all`: Update all matches
- `--json[=STYLE]`: JSON output
- `--inspect <GRANULARITY>`: Inspection mode
- `--format <FORMAT>`: Output format
- `--color <WHEN>`: Color output
- `--report-style <REPORT_STYLE>`: Report style
- `--error[=RULE_ID...]`: Error severity
- `--warning[=RULE_ID...]`: Warning severity
- `--info[=RULE_ID...]`: Info severity
- `--hint[=RULE_ID...]`: Hint severity
- `--off[=RULE_ID...]`: Disabled rules
- `-A, --after <NUM>`: Lines after match
- `-B, --before <NUM>`: Lines before match
- `-C, --context <NUM>`: Context lines
