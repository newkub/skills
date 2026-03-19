---
description: Template สำหรับ Release Notes
title: 'Release {{VERSION}}'
tags: [release, '{{CATEGORY}}', notes]
goals:
  - '{{GOAL_1}}'
  - '{{GOAL_2}}'
---

> 🚀 **{{RELEASE_TYPE}}** | {{DATE}}

**{{ORG_NAME}}** / **releases** / `{{FILENAME}}`

[![GitHub Release](https://img.shields.io/badge/release-{{VERSION}}-blue)]({{RELEASE_URL}})

## โครงสร้าง Release Notes

| Section | รายละเอียด |
|---------|-----------|
| Highlights | สิ่งสำคัญที่สุด |
| New Features | ฟีเจอร์ใหม่ |
| Improvements | การปรับปรุง |
| Bug Fixes | แก้ไข bugs |
| Breaking Changes | การเปลี่ยนแปลงที่ break |

## Rules

### Release Types

| Type | Icon | Description |
|------|------|-------------|
| Major | 🚀 | Breaking changes |
| Minor | ✨ | New features |
| Patch | 🔧 | Bug fixes |
| Hotfix | 🚨 | Critical fixes |

### Release Structure

- **Highlights** - สิ่งสำคัญที่สุด
- **New Features** - ฟีเจอร์ใหม่
- **Improvements** - การปรับปรุง
- **Bug Fixes** - แก้ไข bugs
- **Breaking Changes** - การเปลี่ยนแปลงที่ break
- **Deprecations** - สิ่งที่จะลบ
- **Security** - ความปลอดภัย

### Writing Guidelines

- ใช้ภาษาที่เข้าใจง่าย
- Link ไปยัง docs/issues
- ระบุ contributor (ถ้ามี)
- ให้ upgrade instructions ถ้ามี breaking changes

## Template

### Highlights

```markdown
## 🌟 Highlights

### {{HIGHLIGHT_1_TITLE}}

{{HIGHLIGHT_1_DESCRIPTION}}

### {{HIGHLIGHT_2_TITLE}}

{{HIGHLIGHT_2_DESCRIPTION}}
```

### New Features

```markdown
## ✨ New Features

### {{FEATURE_1_TITLE}}

{{FEATURE_1_DESCRIPTION}}

[Documentation →]({{FEATURE_1_DOCS}})

### {{FEATURE_2_TITLE}}

{{FEATURE_2_DESCRIPTION}}

```javascript
{{FEATURE_2_EXAMPLE}}
```
```


```text

```text

### Improvements

```markdown
## 🔧 Improvements

- {{IMPROVEMENT_1}} ([#{{ISSUE_1}}]({{ISSUE_1_URL}}))
- {{IMPROVEMENT_2}} ([#{{ISSUE_2}}]({{ISSUE_2_URL}}))
- {{IMPROVEMENT_3}}
```

### Bug Fixes

```markdown
## 🐛 Bug Fixes

- Fixed {{FIX_1_DESCRIPTION}} ([#{{FIX_1_ISSUE}}]({{FIX_1_URL}}))
- Fixed {{FIX_2_DESCRIPTION}} ([#{{FIX_2_ISSUE}}]({{FIX_2_URL}}))
```

### Breaking Changes

```markdown
## ⚠️ Breaking Changes

### {{BREAKING_1_TITLE}}

{{BREAKING_1_DESCRIPTION}}

**Migration:**

```javascript
// Before
{{OLD_CODE_1}}

// After
{{NEW_CODE_1}}
```
```

```text


```text

### Deprecations

```markdown
## 🚫 Deprecations

The following features are deprecated and will be removed in {{NEXT_MAJOR_VERSION}}:

- {{DEPRECATED_1}}
- {{DEPRECATED_2}}
```

### Security

```markdown
## 🔒 Security

- Fixed {{SECURITY_FIX_1}} ([CVE-{{CVE_1}}]({{CVE_1_URL}}))
```

### Upgrade Instructions

```markdown
## 🔄 Upgrade Instructions

```bash
{{UPGRADE_COMMAND}}
```
```


```text

```text

### Migration Guide

{{MIGRATION_GUIDE}}

### Contributors

```markdown
## 👏 Contributors

Thanks to all contributors!

- @{{CONTRIBUTOR_1}}
- @{{CONTRIBUTOR_2}}
- @{{CONTRIBUTOR_3}}
```

## Example

### Example: v2.0.0 Release

```markdown
# Release v2.0.0

> 🚀 **Major** | 2024-01-15

**acme-corp** / **releases** / `v2.0.0.md`

[![GitHub Release](https://img.shields.io/badge/release-v2.0.0-blue)](https://github.com/acme/project/releases/v2.0.0)

## 🌟 Highlights

### New Plugin System

Build custom plugins with our new extensible architecture.

### 10x Performance Improvements

Database queries are now up to 10x faster with our new query optimizer.

## ✨ New Features

### Real-time Collaboration

Work together with your team in real-time.

[Documentation →](./docs/collaboration.md)

### Dark Mode

Built-in dark mode with system preference detection.

```javascript
import { theme } from 'acme-sdk';

theme.set('dark');
// or
theme.set('system'); // follows OS preference
```
```

```text


```text

### Webhook Support

Subscribe to events with webhooks.

```javascript
app.webhooks.subscribe('user.created', {
  url: 'https://your-app.com/webhooks'
});
```

## 🔧 Improvements

- Improved error messages with better stack traces (#456)
- Reduced bundle size by 30% (#789)
- Added TypeScript definitions for all public APIs (#234)

## 🐛 Bug Fixes

- Fixed memory leak in long-running processes (#567)
- Fixed race condition in concurrent updates (#890)
- Fixed timezone handling in date formatting (#123)

## ⚠️ Breaking Changes

### Dropped Node 14 Support

Minimum Node.js version is now 16.

### New Authentication Flow

The old `login()` method has been replaced.

**Migration:**

```javascript
// Before
const client = await acme.login('username', 'password');

// After
const client = new acme.Client();
await client.auth.login({
  username: 'username',
  password: 'password'
});
```

## 🚫 Deprecations

The following features are deprecated and will be removed in v3.0.0:

- `client.legacyApi()` - Use `client.api.v2()` instead
- Callback-based APIs - Use async/await instead

## 🔒 Security

- Fixed XSS vulnerability in user input handling ([CVE-2024-1234](https://cve.example.com/CVE-2024-1234))
- Updated dependencies to address known vulnerabilities

## 🔄 Upgrade Instructions

```bash
npm install acme-sdk@2.0.0
```

### Migration Guide

See [Migration Guide](./docs/migrating-to-v2.md) for detailed instructions.

## 👏 Contributors

Thanks to all contributors!

- @alice-dev
- @bob-coder
- @carol-designer
