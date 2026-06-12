---
trigger: glob
---

เมื่อ task เกี่ยวข้องกับการสร้าง extensions ให้ใช้ template นี้

## วัตถุประสงค์

Template นี้ใช้สำหรับสร้าง skill สำหรับ extension development

## Use Cases

- Extension development
- Extension setup
- Extension testing
- Extension publishing
- Extension distribution

## Template Content

### SKILL.md

```markdown
---
title: <Platform Name>
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

### guide/architecture.md

```markdown
## Extension Architecture

<Architecture description>

## Manifest Structure

<Manifest structure description>

## Lifecycle

<Lifecycle description>
```
