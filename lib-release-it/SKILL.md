---
name: release-it
description: Generic release tool for version management and package publishing. Use for automating releases with interactive or CI mode.
goal: Use release-it following best practices
outcome: Streamlined release workflow with changelog and versioning
---

# release-it Library

## When to Use

Use this library when:

- Automating package releases
- Need interactive release process
- Want changelog generation
- Publishing to npm/GitHub releases
- Using with any project type (not just JS)
- Need extensible plugin system

## Quick Start

1. Install: `npm install -D release-it`
2. Configure in `.release-it.json`
3. Run: `npx release-it`
4. For CI: `npx release-it --ci`

## Summary Table

| Category | File | Purpose | Condition |
|---|---|---|---|
| **Knowledge** | Core Concepts | release-it fundamentals | Understanding the basics |
| **Knowledge** | Best Practices | Release patterns | Effective releases |
| **Rules** | Setup | Installation and config | New project setup |
| **Rules** | Configuration | .release-it.json options | Customization |
| **Rules** | Interactive Mode | Manual releases | User confirmation |
| **Rules** | CI Mode | Automated releases | CI/CD integration |
| **Rules** | Plugins | Extending functionality | GitHub, git, npm |
| **Rules** | Hooks | Before/after commands | Custom workflows |

## Core Features

- **Version Bumping**: Automatic based on commits
- **Changelog**: Auto-generate from commits
- **Git Operations**: Tag, commit, push
- **npm Publishing**: Publish to registry
- **GitHub Releases**: Create GitHub releases
- **Interactive/CI**: Both manual and automated modes

## Quick Reference

```bash
# Install
npm install -D release-it

# Run interactive
npx release-it

# CI mode
npx release-it --ci

# Dry run
npx release-it --dry-run

# Specific version
npx release-it minor
```

## Verification

1. Check release-it installation
2. Verify configuration
3. Test interactive mode
4. Validate CI mode
5. Check changelog generation
6. Ensure publishing works

## References

- [release-it Documentation](https://github.com/release-it/release-it)
- [Configuration](https://github.com/release-it/release-it/blob/main/docs/configuration.md)
- [Plugins](https://github.com/release-it/release-it/blob/main/docs/plugins.md)
