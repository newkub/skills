# How It Works

## Architecture

semantic-release เป็น fully automated version management และ package publishing tool:

```
┌─────────────────────────────────────┐
│     semantic-release Architecture       │
├─────────────────────────────────────┤
│  Commit Analysis  │  Version Bumping │
├─────────────────────────────────────┤
│  Changelog Generation  │  Publishing │
├─────────────────────────────────────┤
│  CI/CD Integration  │  Plugin System   │
├─────────────────────────────────────┤
│  Semantic Versioning  │  Release Notes │
└─────────────────────────────────────┘
```

## Workflow

1. **Commit** - Developers follow conventional commit format
2. **CI Trigger** - CI environment triggers semantic-release after successful build
3. **Analyze** - semantic-release analyzes commit messages to determine version bump
4. **Bump** - Automatically bumps version following Semantic Versioning spec
5. **Generate** - Generates changelog and release notes
6. **Publish** - Publishes package to registry (npm, GitHub Releases, etc.)

## Key Concepts

- **Automated Versioning** - Determines next version number automatically based on commits
- **Semantic Versioning** - Strictly follows semver specification (major.minor.patch)
- **Conventional Commits** - Uses commit message format to determine version changes
- **Changelog Generation** - Automatically generates changelog from commits
- **CI/CD Integration** - Runs in CI environment after successful builds
- **Plugin System** - Extensible via plugins for different package managers
- **Shareable Configurations** - Reusable configuration presets
- **Release Notes** - Automatically generates release notes
