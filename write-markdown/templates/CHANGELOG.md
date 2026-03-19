---
description: Template สำหรับ Changelog
title: '{{PROJECT_NAME}} Changelog'
tags: [changelog, '{{CATEGORY}}', documentation]
goals:
  - '{{GOAL_1}}'
  - '{{GOAL_2}}'
---

## Changelog

> 📝 **All notable changes to {{PROJECT_NAME}} will be documented in this file.**

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## โครงสร้าง Changelog

| ส่วน | รายละเอียด |
|------|-----------|
| Unreleased | การเปลี่ยนแปลงที่ยังไม่ release |
| Versions | เรียงจากใหม่ไปเก่า |
| Categories | Added, Changed, Fixed, etc. |

## Rules

### Changelog Structure

- เรียง version จากใหม่ไปเก่า (top to bottom)
- ใช้ Semantic Versioning (MAJOR.MINOR.PATCH)
- วันที่ format: YYYY-MM-DD

### Categories

| Category | Description |
|----------|-------------|
| `Added` | ฟีเจอร์ใหม่ |
| `Changed` | การเปลี่ยนแปลงที่มีอยู่ |
| `Deprecated` | ฟีเจอร์ที่จะถูกลบ |
| `Removed` | ฟีเจอร์ที่ถูกลบ |
| `Fixed` | Bug fixes |
| `Security` | Security fixes |

### Version Format

```text
## [VERSION] - DATE

### Category
- Change description
```

## Template

### Unreleased

```markdown
## [Unreleased]

### Added

- {{UNRELEASED_ADDED}}

### Changed

- {{UNRELEASED_CHANGED}}

### Fixed

- {{UNRELEASED_FIXED}}
```

### Released Version

```markdown
## [{{VERSION}}] - {{DATE}}

### Added

- {{ADDED_ITEM_1}}
- {{ADDED_ITEM_2}}

### Changed

- {{CHANGED_ITEM_1}}
- {{CHANGED_ITEM_2}}

### Fixed

- {{FIXED_ITEM_1}}
```

### Deprecated

```markdown
### Deprecated

- {{DEPRECATED_ITEM_1}}
```

### Removed

```markdown
### Removed

- {{REMOVED_ITEM_1}}
```

### Security

```markdown
### Security

- {{SECURITY_ITEM_1}}
```

### Links

```markdown
[{{VERSION}}]: {{COMPARE_URL}}/{{PREV_VERSION}}...{{VERSION}}
```

## Example

### Example: Project Changelog

```markdown
# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- New dark mode support
- OAuth2 authentication

### Changed

- Improved API response time

## [1.2.0] - 2024-01-15

### Added

- User profile customization
- Export to PDF feature

### Fixed

- Login timeout issue
- Memory leak in dashboard

## [1.1.0] - 2023-12-01

### Added

- Multi-language support
- Mobile app compatibility

### Changed

- Updated UI design

### Deprecated

- Legacy API endpoints (will be removed in 2.0)

[1.2.0]: https://github.com/acme/project/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/acme/project/compare/v1.0.0...v1.1.0
```
