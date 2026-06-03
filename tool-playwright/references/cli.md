# CLI Commands

## Purpose

Command-line interface reference สำหรับ Playwright

## Scope

- Test Commands
- Browser Commands
- Utility Commands

## Test Commands

### playwright test

```bash
npx playwright test [options] [test-filter...]
```

### Options

| Option | Description |
|--------|-------------|
| `--config <file>` | Config file path |
| `--debug` | Debug mode |
| `--headed` | Show browser |
| `--ui` | Interactive UI mode |
| `-g <grep>` | Filter by name |
| `--project <name>` | Run specific project |
| `-j <workers>` | Number of workers |
| `--timeout <ms>` | Test timeout |
| `--retries <n>` | Retry count |
| `--reporter <name>` | Reporter type |
| `--trace <mode>` | Trace mode |

### Examples

```bash
# Run all tests
npx playwright test

# Run specific file
npx playwright test tests/example.spec.ts

# Run by name
npx playwright test -g "homepage"

# Run at line
npx playwright test tests/example.spec.ts:42

# Debug
npx playwright test --debug

# UI mode
npx playwright test --ui
```

### Common Options

| Option | Description | Default |
|--------|-------------|---------|
| `--workers` | Parallel workers | 50% |
| `--timeout` | Test timeout | 30s |
| `--retries` | Retry count | 0 |
| `--project` | Browser project | all |
| `--reporter` | Reporter | list |

### Filter Options

| Option | Description |
|--------|-------------|
| `-g <grep>` | Match test name |
| `--grep-invert` | Exclude matches |
| `--only-changed` | Changed files only |
| `--test-list` | List of tests |
| `--last-failed` | Only failed tests |

### Output Options

| Option | Description |
|--------|-------------|
| `--output <dir>` | Output directory |
| `--quiet` | Suppress output |
| `--list` | List tests only |

### Special Modes

```bash
# Headed browser
npx playwright test --headed

# Debug with inspector
npx playwright test --debug

# Interactive UI
npx playwright test --ui

# Stop on first failure
npx playwright test -x
```

## Browser Commands

### playwright install

```bash
npx playwright install [options] [browser...]
```

### Options

| Option | Description |
|--------|-------------|
| `--with-deps` | Install dependencies |
| `--dry-run` | Show what would be installed |
| `--force` | Force reinstall |
| `--only-shell` | Install headless shell only |

### Examples

```bash
# Install all browsers
npx playwright install

# Install chromium only
npx playwright install chromium

# Install specific browsers
npx playwright install chromium firefox webkit

# With dependencies
npx playwright install --with-deps
```

### playwright install-deps

```bash
npx playwright install-deps [options] [browser...]
```

### Examples

```bash
# Install all dependencies
npx playwright install-deps

# Install chromium dependencies
npx playwright install-deps chromium
```

## Utility Commands

### playwright show-report

```bash
npx playwright show-report [report] [options]
```

### Options

| Option | Description |
|--------|-------------|
| `--port <port>` | Port number |
| `--host <host>` | Host name |

### Examples

```bash
# Show latest report
npx playwright show-report

# Custom port
npx playwright show-report --port 8080
```

### playwright show-trace

```bash
npx playwright show-trace [trace]
```

### Examples

```bash
# Open trace viewer
npx playwright show-trace

# View specific trace
npx playwright show-trace trace.zip
```

### playwright codegen

```bash
npx playwright codegen [options] [url]
```

### Options

| Option | Description |
|--------|-------------|
| `-b <browser>` | Browser type |
| `-o <file>` | Output file |
| `--target <lang>` | Target language |

### Examples

```bash
# Start codegen
npx playwright codegen

# With URL
npx playwright codegen https://example.com

# Python output
npx playwright codegen --target=python -o test.py
```

### playwright merge-reports

```bash
npx playwright merge-reports <blob dir> [options]
```

### Examples

```bash
# Merge reports
npx playwright merge-reports ./reports
```

### playwright clear-cache

```bash
npx playwright clear-cache
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `PLAYWRIGHT_BROWSERS_PATH` | Browser cache path |
| `PWDEBUG` | Debug mode |
| `PWTEST_SKIP_TEST_OUTPUT` | Skip test output |

### Debug Mode

```bash
# Enable debugger
PWDEBUG=1 npx playwright test

# With console
PWDEBUG=console npx playwright test
```

## Help

### Show Help

```bash
npx playwright --help

npx playwright test --help
```

### Show Version

```bash
npx playwright --version
```

## Exit Codes

| Code | Description |
|------|-------------|
| `0` | Success |
| `1` | Test failed |
| `2` | Timeout |
| `3` | Fatal error |

## See Also

- [Configuration](./configuration.md) - Configuration options
- [API Reference](./api.md) - Programmatic API