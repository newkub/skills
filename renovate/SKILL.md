---
name: renovate
description: Automated dependency update tool. Use for keeping dependencies up-to-date with PRs, scheduling, and configuration.
goal: Use Renovate following best practices
outcome: Always up-to-date dependencies with minimal manual effort
---

# Renovate Library

## When to Use

Use this library when:

- Automating dependency updates
- Managing dependencies across multiple repositories
- Need scheduled and batched updates
- Want automated PRs for updates
- Need grouping of related updates
- Using with GitHub, GitLab, or other platforms

## Quick Start

1. Install Renovate app on GitHub/GitLab
2. Add `renovate.json` configuration
3. Renovate creates onboarding PR
4. Merge to enable automated updates

## Summary Table

| Category | File | Purpose | Condition |
|---|---|---|---|
| **Knowledge** | Core Concepts | Renovate fundamentals | Understanding the basics |
| **Knowledge** | Best Practices | Update strategies | Effective automation |
| **Rules** | Setup | GitHub/GitLab app setup | New repository |
| **Rules** | Configuration | renovate.json options | Customization |
| **Rules** | Scheduling | Update frequency and timing | Control updates |
| **Rules** | Grouping | Batch related updates | Reduce PR noise |
| **Rules** | Automerging | Auto-merge conditions | Hands-off updates |
| **Rules** | Presets | Shared configurations | Common setups |

## Core Features

- **Automated PRs**: Creates update PRs automatically
- **Scheduling**: Control when updates happen
- **Grouping**: Batch related dependency updates
- **Automerging**: Auto-merge safe updates
- **Lock Files**: Updates package-lock, yarn.lock, etc.
- **Dashboard**: Overview of pending updates

## Quick Reference

```json
// renovate.json
{
  "$schema": "https://docs.renovatebot.com/renovate-schema.json",
  "extends": ["config:base"],
  "schedule": ["before 9am on monday"],
  "groupName": "all dependencies",
  "automerge": true
}
```

## Verification

1. Check Renovate app installation
2. Verify onboarding PR
3. Test configuration
4. Validate PR creation
5. Check scheduling
6. Ensure automerge works

## References

- [Renovate Documentation](https://docs.renovatebot.com/)
- [Configuration Options](https://docs.renovatebot.com/configuration-options/)
- [GitHub App](https://github.com/apps/renovate)
