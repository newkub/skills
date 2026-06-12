---
trigger: glob
---

เมื่อ task เกี่ยวข้องกับ libraries ให้ใช้ template นี้

## วัตถุประสงค์

Template นี้ใช้สำหรับสร้าง skill สำหรับ library integration

## Use Cases

- Library setup
- Library configuration
- Library usage
- Library examples
- Library integration

## Template Content

### SKILL.md

```markdown
---
title: <Library Name>
description: <Description>
---

## When to use

- <Use case 1>
- <Use case 2>

## Skills Related

- <Related skill 1>
- <Related skill 2>

## References

| Type | Link |
|------|------|
| Documentation | <URL> |
| API Reference | <URL> |
```

### guide/installation.md

```markdown
## Installation

<Installation instructions>

## Configuration

<Configuration instructions>
```

### guide/usage.md

```markdown
## Basic Usage

<Basic usage examples>

## Advanced Usage

<Advanced usage examples>
```
