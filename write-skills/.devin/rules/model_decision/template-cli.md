---
trigger: glob
---

เมื่อ task เกี่ยวข้องกับการพัฒนา CLI tools ให้ใช้ template นี้

## วัตถุประสงค์

Template นี้ใช้สำหรับสร้าง skill สำหรับ CLI tools development

## Use Cases

- CLI application development
- Command-line interface design
- CLI testing
- CLI documentation
- CLI distribution

## Template Content

### SKILL.md

```markdown
---
title: <CLI Name>
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
| Examples | <URL> |
```

### guide/architecture.md

```markdown
## Architecture

<Architecture description>

## Command Structure

<Command structure description>

## Argument Parsing

<Argument parsing description>
```

### guide/commands.md

```markdown
## Command Design

<Command design description>

## Subcommands

<Subcommands description>
```
