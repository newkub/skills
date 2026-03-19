---
name: semantic-release
description: Fully automated version management and package publishing. Use for automating versioning, changelog generation, and releases based on commit conventions.
goal: Use Semantic Release following best practices
outcome: Automated releases with semantic versioning
---

# Semantic Release Library

## When to Use

Use this library when:

- Automating package versioning
- Want releases based on commit messages (conventional commits)
- Need automatic changelog generation
- Publishing to npm/GitHub releases automatically
- Maintaining single packages (not monorepos)
- Using CI/CD for automated releases

## Quick Start

1. Install: `npm install semantic-release`
2. Configure in package.json or .releaserc
3. Set up CI/CD environment variables
4. Use conventional commits
5. Push to trigger release

## Summary Table

| Category | File | Purpose | Condition |
|---|---|---|---|
| **Knowledge** | Core Concepts | Semantic release fundamentals | Understanding the basics |
| **Knowledge** | Best Practices | Commit conventions | Effective automation |
| **Rules** | Setup | Configuration and plugins | New project setup |
| **Rules** | Commit Conventions | Conventional commits | Triggering releases |
| **Rules** | Configuration | .releaserc options | Customization |
| **Rules** | CI/CD | GitHub Actions/GitLab | Automated releases |
| **Rules** | Plugins | npm, GitHub, changelog | Extending functionality |

## Core Features

- **Automated Versioning**: Determine version from commit messages
- **Changelog Generation**: Auto-generated from commits
- **GitHub Releases**: Create releases automatically
- **npm Publishing**: Publish to npm registry
- **Git Hooks**: Tag and commit version bumps
- **Plugin System**: Extensible with plugins

## Quick Reference

```bash
# Install
npm install semantic-release

# Configuration (.releaserc.json)
{
  "branches": ["main"],
  "plugins": [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    "@semantic-release/npm",
    "@semantic-release/github"
  ]
}

# Run locally (dry run)
npx semantic-release --dry-run
```

## Verification

1. Check semantic-release installation
2. Verify configuration file
3. Test commit analyzer
4. Validate release notes generation
5. Check CI/CD integration
6. Ensure npm/GitHub publishing works

## References

- [Semantic Release Documentation](https://semantic-release.gitbook.io/semantic-release/)
- [Commit Conventions](https://www.conventionalcommits.org/)
- [GitHub Repository](https://github.com/semantic-release/semantic-release)
