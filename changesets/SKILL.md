---
name: changesets
description: Versioning and changelog management for monorepos. Use for tracking changes, versioning packages, and generating changelogs.
goal: Use Changesets following best practices
outcome: Automated versioning and changelog generation
---

# Changesets Library

## When to Use

Use this library when:

- Managing versions in monorepos
- Tracking changes across multiple packages
- Need automated changelog generation
- Publishing packages to npm
- Coordinating releases in complex projects
- Using with pnpm workspaces or Turborepo

## Quick Start

1. Install: `npm install @changesets/cli`
2. Initialize: `npx changeset init`
3. Add changeset: `npx changeset`
4. Version: `npx changeset version`
5. Publish: `npx changeset publish`

## Summary Table

| Category | File | Purpose | Condition |
|---|---|---|---|
| **Knowledge** | Core Concepts | Changesets fundamentals | Understanding the basics |
| **Knowledge** | Best Practices | Workflow patterns | Effective versioning |
| **Rules** | Setup | CLI initialization | New project setup |
| **Rules** | Adding Changesets | Tracking changes | Change tracking |
| **Rules** | Versioning | Bumping versions | Release preparation |
| **Rules** | Publishing | npm releases | Package publishing |
| **Rules** | CI/CD | GitHub Actions integration | Automated releases |
| **Rules** | Config | .changeset/config.json | Customization |

## Core Features

- **Change Tracking**: Markdown files describing changes
- **Semantic Versioning**: Automatic version bumping
- **Changelog Generation**: Auto-generated changelogs
- **Monorepo Support**: Handle multiple packages
- **CI/CD Integration**: GitHub Actions support
- **Snapshot Releases**: Pre-release versions

## Quick Reference

```bash
# Install
npm install @changesets/cli

# Initialize
npx changeset init

# Add a changeset
npx changeset

# Version packages
npx changeset version

# Publish to npm
npx changeset publish
```

## Verification

1. Check Changesets CLI installation
2. Verify configuration file
3. Test adding changeset
4. Validate versioning
5. Check changelog generation
6. Ensure publish works

## References

- [Changesets Documentation](https://github.com/changesets/changesets)
- [Bot Setup](https://github.com/apps/changeset-bot)
- [GitHub Action](https://github.com/changesets/action)
