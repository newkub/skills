# Programmatic API

Moon มี CLI commands สำหรับ monorepo management:

## CLI Commands

```bash
# Initialize workspace
moon init

# Run task
moon run <task>

# Run task in specific project
moon run <project>:<task>

# Run task in all projects
moon run <task> --all

# List tasks
moon list

# Check configuration
moon check
```

## Configuration (moon.yml)

```yaml
projects:
  - 'apps/*'
  - 'packages/*'

tasks:
  build:
    command: 'npm run build'
    inputs:
      - 'src/**'
      - 'package.json'
    outputs:
      - 'dist'

  test:
    command: 'npm test'
    deps:
      - build
```

## Task Inheritance

```yaml
# moon.yml (root)
tasks:
  lint:
    command: 'eslint .'
    options:
      cache: true
```

## Remote Caching

```yaml
# moon.yml
remote:
  cache:
    enabled: true
    url: 'https://cache.moonrepo.app'
```

## See Also

- [Moon Documentation](https://moonrepo.dev/docs)
- [GitHub Repository](https://github.com/moonrepo/moon)
