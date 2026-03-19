---
description: Commit message format ใน Markdown
title: commit-messages
tags: [markdown, commit, git, conventions]
goals:
  - แสดงตัวอย่าง commit message conventions
  - สอนวิธีเขียน commit messages ที่ดี
---

## Conventional Commits

````markdown
# Commit Message Format

This project follows [Conventional Commits](https://conventionalcommits.org/).

## Format

```text
<type>(<scope>): <subject>

<body>

<footer>
```

## Types

| Type | Description |
|------|-------------|
| `feat` | New feature |
| `fix` | Bug fix |
| `docs` | Documentation changes |
| `style` | Code style changes (formatting, no code change) |
| `refactor` | Code refactoring |
| `perf` | Performance improvements |
| `test` | Adding or updating tests |
| `chore` | Build process or auxiliary tool changes |

## Examples

```text
feat(api): add user authentication endpoint

fix(button): resolve click event not firing

docs(readme): update installation instructions

refactor(utils): simplify date formatting logic

test(auth): add tests for login flow
```
````

## Detailed Format

````markdown
## Subject Line

- Use imperative mood ("Add" not "Added")
- Don't capitalize first letter
- No period at the end
- Maximum 50 characters

## Body (optional)

- Use to explain "what" and "why" (not "how")
- Wrap at 72 characters
- Separate from subject with blank line

## Footer (optional)

- Reference issues: `Closes #123`
- Breaking changes: `BREAKING CHANGE: description`

## Example

```text
feat(search): implement full-text search

Add elasticsearch integration for searching documents.
This improves search speed by 10x compared to previous
implementation.

Closes #456
```
````
