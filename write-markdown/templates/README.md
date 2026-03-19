---
description: Template สำหรับ README
title: '{{PROJECT_NAME}}'
tags: [readme, '{{CATEGORY}}', documentation]
goals:
  - '{{GOAL_1}}'
  - '{{GOAL_2}}'
---

## {{PROJECT_NAME}}

> 🚀 **{{DESCRIPTION}}**

[![Build](https://img.shields.io/badge/build-{{BUILD_STATUS}}-{{BUILD_COLOR}})]({{BUILD_URL}})
[![Version](https://img.shields.io/badge/version-{{VERSION}}-{{VERSION_COLOR}})]({{VERSION_URL}})
[![License](https://img.shields.io/badge/license-{{LICENSE}}-{{LICENSE_COLOR}})]({{LICENSE_URL}})

## โครงสร้าง README

| Section | รายละเอียด |
|---------|-----------|
| Description | อธิบายว่า project ทำอะไร |
| Installation | วิธีติดตั้ง |
| Usage | วิธีใช้งานพื้นฐาน |
| Features | ฟีเจอร์หลัก |
| License | ระบุ license |

## Rules

### README Structure

1. Title + Badges (optional)
2. Description (1-2 sentences)
3. Installation
4. Usage
5. Features
6. Contributing
7. License

### Required Sections

- **Description** - อธิบายว่า project ทำอะไร
- **Installation** - วิธีติดตั้ง
- **Usage** - วิธีใช้งานพื้นฐาน
- **License** - ระบุ license

### Optional Sections

- Badges (build, version, license)
- Screenshots/GIFs
- Demo link
- API documentation link
- Changelog link

### File Naming

- ต้องใช้ชื่อ `README.md`
- วางใน root directory

## Template

### Header

```markdown
# {{PROJECT_NAME}}

> {{TAGLINE}}

[![Build]({{BADGE_URL}})]({{LINK_URL}})
```

### Description

{{PROJECT_DESC}}

### Installation

```bash
{{INSTALL_COMMAND}}
```

### Usage

```{{LANGUAGE}}
{{USAGE_EXAMPLE}}
```

### Features

- ✅ {{FEATURE_1}}
- ✅ {{FEATURE_2}}
- ✅ {{FEATURE_3}}

### API

{{API_DESC}}

### Contributing

{{CONTRIBUTING_GUIDE}}

### License

[{{LICENSE_NAME}}]({{LICENSE_FILE}})

## Example

### Example: Node.js Library

```markdown
# My Awesome Lib

> 🚀 A zero-dependency utility library for Node.js

[![Build](https://img.shields.io/badge/build-passing-brightgreen)]()
[![Version](https://img.shields.io/badge/version-1.0.0-blue)]()
[![License](https://img.shields.io/badge/license-MIT-green)]()

## Description

My Awesome Lib เป็น utility library ที่ช่วยให้การทำงานกับ data structures ง่ายขึ้น

## Installation

```bash
npm install my-awesome-lib
```
```


```text

```text

## Usage

```typescript
import { formatDate } from 'my-awesome-lib';

const formatted = formatDate(new Date(), 'YYYY-MM-DD');
console.log(formatted); // 2024-01-15
```

## Features

- ✅ Zero dependencies
- ✅ TypeScript support
- ✅ Tree-shakeable
- ✅ Comprehensive test coverage

## API

See [API Documentation](./docs/api.md)

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md)

## License

[MIT](LICENSE)

```text
