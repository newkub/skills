# Configuration

## การตั้งค่า Lefthook

### Configuration File

ไฟล์ `lefthook.yml` คือ configuration file หลักของ Lefthook:

```yaml
# lefthook.yml
pre-commit:
  commands:
    lint:
      run: npm run lint
```

### Basic Configuration

```yaml
# lefthook.yml
# กำหนด hooks ต่างๆ
pre-commit:
  commands:
    eslint:
      run: npx eslint {staged_files}
    prettier:
      run: npx prettier --check {staged_files}

commit-msg:
  commands:
    commitlint:
      run: npx commitlint --edit {1}

pre-push:
  commands:
    test:
      run: npm run test
    build:
      run: npm run build
```

### Command Options

```yaml
commands:
  lint:
    run: npm run lint                    # command to run (required)
    glob: "*.{js,ts,jsx,tsx}"           # file filter
    exclude: "*.test.js"                # exclude pattern
    env:                                 # environment variables
      NODE_ENV: test
      CI: "true"
    cwd: ./src                           # working directory
    priority: 1                          # execution order
    tags: [lint, ci]                     # tag filtering
```

### Parallel Execution

```yaml
pre-commit:
  parallel: true                        # enable parallel mode
  commands:
    lint:
      run: npm run lint
    test:
      run: npm run test
    format:
      run: npm run format
```

### Script Execution

```yaml
pre-commit:
  scripts:
    setup:
      runner: ruby
      script: scripts/setup.rb
    validate:
      runner: python
      script: scripts/validate.py
```

### Remote Configuration (extends)

```yaml
# lefthook.local.yml
extends:
  - ./lefthook.shared.yml               # local file
  - https://raw.githubusercontent.com/org/repo/main/lefthook.yml  # remote

# Override/add commands
pre-commit:
  commands:
    custom:
      run: npm run custom-check
```

### Variables and Placeholders

| Variable | Description |
|---------|-------------|
| `{staged_files}` | List of staged files |
| `{staged_files|`staged_files`\|`ext`}` | Files with extension filter |
| `{0}` | Commit message file path |
| `{1}` | First argument (same as {0}) |
| `$VAR` | Environment variable |

### Complete Example

```yaml
# lefthook.yml
commit-msg:
  scripts:
    commitlint:
      runner: bash
      script: |
        npx commitlint --edit $1 || exit 1
        echo "Commit message validated"

pre-commit:
  parallel: true
  commands:
    eslint:
      glob: "*.{js,ts,jsx,tsx}"
      run: npx eslint {staged_files}
    prettier:
      glob: "*.{js,ts,jsx,tsx,json,css}"
      run: npx prettier --check {staged_files}
    tsc:
      glob: "*.{ts,tsx}"
      run: npx tsc --noEmit
    lint-staged:
      run: npx lint-staged

pre-push:
  parallel: true
  commands:
    test:
      run: npm run test:ci
    build:
      run: npm run build
```

### Configuration Precedence

1. `lefthook.yml` (local config)
2. `lefthook.local.yml` (local overrides)
3. Extended configs (merged in order)
4. Environment variables

### Environment Variables

| Variable | Description |
|---------|-------------|
| `LEFTHOOK` | Set to `0` to skip all hooks |
| `SKIP` | Comma-separated hooks to skip |
| `LEFTHOOK_VERBOSE` | Enable verbose output |
| `LEFTHOOK_json` | JSON output format |