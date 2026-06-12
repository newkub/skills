---
title: Write Windsurf Skills
description: มาตรฐานการเขียนและจัดโครงสร้าง Devin Skills
auto_execution_mode: 3
---

## When to use

ใช้ workflow นี้เมื่อต้องสร้างหรือแก้ไข Devin Skills ให้เป็นมาตรฐานเดียวกัน

- สร้าง skill ใหม่
- แก้ไข skill ที่มีอยู่ให้ตรงกับมาตรฐานใหม่
- อัปเดต skill ให้มี folder structure ที่ consistent
- เขียน content ตามมาตรฐาน quality
- ปรับปรุงคุณภาพ skill ที่มีอยู่

## Skills Related

- `/write-windsurf-global-workflows` - เขียน global workflows
- `/follow-content-quality` - เขียน content ตามมาตรฐาน
- `/follow-principles-engineering` - เขียนโค้ดตาม software engineering principles
- `/follow-architecture` - จัดโครงสร้างตาม architecture pattern
- `/follow-ts` - เขียน TypeScript ตาม best practices

## Execute

ทำตาม execute steps ใน `.devin/execute.md` โดยอ้างอิง rules จาก `.devin/rules/`

## References

### key-concepts/

| No | File | Description |
|----|------|-------------|
| 1 | skill-types.md | Skill type classification และ structure |

### principles/

| No | File | Description |
|----|------|-------------|
| 1 | single-responsibility.md | Single responsibility principle สำหรับ files |

### guide/

| No | File | Description |
|----|------|-------------|
| 1 | best-practices.md | Best practices สำหรับการเขียน skills |
| 2 | architecture.md | โครงสร้างของ skills |
| 3 | configuration.md | การตั้งค่า skills |

### references/

| No | File | Description |
|----|------|-------------|
| 1 | api.md | API documentation สำหรับ skill types |
| 2 | cli.md | CLI commands และ usage |
| 3 | website.md | Link ไปยัง official documentation |
| 4 | sitemap.md | Sitemap ของ documentation |

### workflows/

| No | File | Description |
|----|------|-------------|
| 1 | write-skills.md | สร้าง skill ใหม่ |
| 2 | update-skills.md | อัปเดต skill ที่มีอยู่ |
| 3 | improve-skills.md | ปรับปรุงคุณภาพ skill ตามมาตรฐาน |

### .devin/

| No | File | Description |
|----|------|-------------|
| 1 | goal.md | Goal ของ skill |
| 2 | scope.md | Scope และ execute steps |
| 3 | execute.md | Execute steps ทั้งหมด |
| 4 | expected.md | Expected outcome |
| 5 | rules/always-on/ | Structure files ที่ต้องมีเสมอ |
| 6 | rules/model_decision/ | Template files ที่ model ตัดสินใช้ |
| 7 | rules/glob/ | Files ที่ใช้ glob patterns |
| 8 | workflows/ | Workflow files สำหรับ task automation |

