# ast-grep test

Rule testing and validation.

## Basic Usage

```bash
# Test all rules
ast-grep test

# Test specific rule
ast-grep test --rule rules/no-console.yml

# Test directory
ast-grep test --test-dir tests

# Update snapshots
ast-grep test --update-all

# Interactive testing
ast-grep test --interactive

# Filter tests
ast-grep test --filter 'console'
```

## Options

- `-c, --config <CONFIG>`: Config file
- `-t, --test-dir <TEST_DIR>`: Test directory
- `--snapshot-dir <SNAPSHOT_DIR>`: Snapshot directory
- `--skip-snapshot-tests`: Skip snapshot tests
- `-U, --update-all`: Update all snapshots
- `-i, --interactive`: Interactive mode
- `-f, --filter <FILTER>`: Filter tests
- `--include-off`: Include disabled rules
- `--color <WHEN>`: Color output
- `-h, --help`: Show help
