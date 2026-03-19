---
name: knip
description: Find unused files, dependencies, and exports in JavaScript and TypeScript projects. Use for detecting dead code and reducing bundle size.
goal: Use Knip following best practices
outcome: Cleaner codebase with unused code eliminated
---

# Knip Library

## When to Use

Use this library when:

- Finding unused files in the project
- Detecting unused dependencies
- Identifying unused exports
- Reducing bundle size
- Cleaning up dead code
- Maintaining large codebases

## Quick Start

1. Install: `npm install -D knip`
2. Run: `npx knip`
3. Review findings
4. Configure `knip.json` for exclusions

## Summary Table

| Category | File | Purpose | Condition |
|---|---|---|---|
| **Knowledge** | [Core Concepts](knowledge/core-concept.md) | Knip fundamentals | Understanding the basics |
| **Knowledge** | [Best Practices](knowledge/best-practices.md) | Dead code detection | Codebase maintenance |
| **Rules** | [Setup](rules/1-setup.md) | Installation and config | New project setup |
| **Rules** | [Unused Files](rules/2-unused-files.md) | Finding orphaned files | Cleanup |
| **Rules** | [Dependencies](rules/3-dependencies.md) | Unused npm packages | Dependency cleanup |
| **Rules** | [Exports](rules/4-exports.md) | Unused exports | API cleanup |
| **Rules** | [Configuration](rules/5-configuration.md) | knip.json options | Customization |
| **Rules** | [CI/CD](rules/6-ci-cd.md) | Automated checks | Preventing regressions |

## Core Features

- **Unused Files**: Detect files not imported anywhere
- **Unused Dependencies**: Find npm packages not used
- **Unused Exports**: Identify exports not consumed
- **TypeScript Support**: Full TS project analysis
- **Monorepo Support**: Works with workspaces
- **Configurable**: Exclude patterns and exceptions

## Quick Reference

```bash
# Install
npm install -D knip

# Run analysis
npx knip

# Show all issues
npx knip --no-exit-code

# Include production dependencies
npx knip --production

# Fix issues automatically
npx knip --fix
```

## Verification

1. Check Knip installation
2. Verify analysis runs
3. Test file detection
4. Validate dependency detection
5. Check export analysis
6. Ensure configuration works

## References

- [Knip Documentation](https://knip.dev/)
- [GitHub Repository](https://github.com/webpro/knip)
- [Configuration](https://knip.dev/reference/configuration)
