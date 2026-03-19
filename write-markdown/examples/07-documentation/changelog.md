---
description: บันทึกการเปลี่ยนแปลง (Changelog) ใน Markdown
title: changelog
tags: [markdown, changelog, versioning]
goals:
  - แสดงตัวอย่างการเขียน changelog
  - สอนวิธีใช้ Keep a Changelog format
---

## Changelog Structure

````markdown
# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/),
and this project adheres to [Semantic Versioning](https://semver.org/).

## [Unreleased]

### Added

- New feature description

### Changed

- Change description

### Fixed

- Bug fix description

## [1.0.0] - 2024-01-15

### Added

- Initial release
- Core features

### Changed

- Improved performance

### Deprecated

- Old API method

### Removed

- Unused feature

### Fixed

- Critical bug

### Security

- Security vulnerability fix
````

## Version Link

````markdown
[1.0.0]: https://github.com/user/repo/releases/tag/v1.0.0
[Unreleased]: https://github.com/user/repo/compare/v1.0.0...HEAD
````
