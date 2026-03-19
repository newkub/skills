---
description: Template สำหรับ Contributing Guide
title: 'Contributing to {{PROJECT_NAME}}'
tags: [contributing, '{{CATEGORY}}', guidelines]
goals:
  - '{{GOAL_1}}'
  - '{{GOAL_2}}'
---

## Contributing to {{PROJECT_NAME}}

> 🤝 **Contributing Guidelines**

**{{ORG_NAME}}** / **contributing** / `{{FILENAME}}`

## โครงสร้าง Contributing Guide

| Section | รายละเอียด |
|---------|-----------|
| Getting Started | วิธีเริ่มต้น |
| Development Workflow | ขั้นตอนการพัฒนา |
| Pull Request | กระบวนการ PR |

## Rules

### Before Contributing

- อ่าน [Code of Conduct]({{CODE_OF_CONDUCT}})
- ตรวจสอบ [Issues]({{ISSUES_URL}}) ว่ามีคนทำอยู่แล้วหรือไม่
- สร้าง Issue ใหม่หากยังไม่มี

### Pull Request Process

1. Fork repository
2. สร้าง branch: `git checkout -b feature/{{BRANCH_NAME}}`
3. Commit changes ด้วย conventional commits
4. Push ไปยัง fork
5. สร้าง Pull Request

### Commit Message Format

```text
<type>(<scope>): <subject>

<body>

<footer>
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

## Template

### Getting Started

```markdown
## Getting Started

1. Fork repository นี้
2. Clone fork ของคุณ: `git clone {{FORK_URL}}`
3. ติดตั้ง dependencies: {{INSTALL_CMD}}
4. สร้าง branch: `git checkout -b feature/{{BRANCH_NAME}}`
```

### Development Workflow

```markdown
## Development Workflow

1. แก้ไข code
2. รัน tests: {{TEST_CMD}}
3. รัน linter: {{LINT_CMD}}
4. Commit changes: `git commit -m "{{COMMIT_MSG}}"`
5. Push: `git push origin {{BRANCH_NAME}}`
```

### Pull Request Template

```markdown
## Pull Request

### Description

{{PR_DESCRIPTION}}

### Changes

- {{CHANGE_1}}
- {{CHANGE_2}}

### Testing

- [ ] {{TEST_ITEM_1}}
- [ ] {{TEST_ITEM_2}}

### Checklist

- [ ] Code follows style guidelines
- [ ] Tests pass
- [ ] Documentation updated
```

### Code Review

```markdown
## Code Review Process

- ต้องมี {{MIN_REVIEWERS}} reviewers approve
- All CI checks ต้องผ่าน
- ไม่มี conflicts
```

## Example

### Example: Open Source Project

```markdown
# Contributing to Awesome Project

> 🤝 ยินดีต้อนรับ contributors ทุกคน!

**acme-corp** / **contributing** / `CONTRIBUTING.md`

## Getting Started

1. Fork repository นี้
2. Clone fork: `git clone https://github.com/your-username/awesome-project.git`
3. ติดตั้ง dependencies: `npm install`
4. สร้าง branch: `git checkout -b feature/my-feature`

## Development Setup

```bash
# ติดตั้ง dependencies
npm install

# รัน development server
npm run dev

# รัน tests
npm test
```
```


```text


```text

### Pull Request Guidelines

- ใช้ branch naming: `feature/`, `fix/`, `docs/`
- Commit messages ต้อง follow conventional commits
- ต้องมี tests สำหรับ feature ใหม่
- Update documentation หากจำเป็น

### Code Style

- ใช้ Prettier สำหรับ formatting
- ใช้ ESLint สำหรับ linting
- 2 spaces indentation
- Semicolons required

### Reporting Issues

ใช้ Issue templates ที่มีให้:

- Bug Report
- Feature Request
- Documentation Issue

```text
