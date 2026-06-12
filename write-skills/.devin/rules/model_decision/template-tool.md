---
trigger: glob
---

เมื่อ task เกี่ยวข้องกับ development tools ให้ใช้ template นี้

## วัตถุประสงค์

Template นี้ใช้สำหรับสร้าง skill สำหรับ development tool integration

## Use Cases

- Tool setup
- Tool configuration
- Tool usage
- Tool integration
- Tool automation

## Template Content

### SKILL.md

```markdown
---
title: <Tool Name>
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
| CLI Reference | <URL> |
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

## Common Commands

<Common commands description>
```
