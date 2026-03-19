---
name: drizzle
description: TypeScript-first ORM with SQL-like syntax, type safety, and zero dependencies. Use for database operations, schema design, migrations, and query building with Drizzle ORM.
goal: ใช้ Drizzle ORM ตาม best practices
outcome: ฐานข้อมูลมีโครงสร้างและคุณภาพตามมาตรฐาน
---

# Drizzle ORM

## When to Apply

ใช้ Skill นี้เมื่อทำงานกับฐานข้อมูลด้วย Drizzle ORM

- เมื่อตั้งค่า database schemas ใหม่
- เมื่อเขียน database queries ด้วย type safety
- เมื่อจัดการ migrations (push, generate, pull)
- เมื่อ optimize database performance
- เมื่อ integrate กับ PostgreSQL, MySQL, SQLite, หรือ databases อื่นๆ

## Rules

| Priority | Impact | Reference | Name | Description | Prefix | Condition |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | `CRITICAL` | [1-drizzle-setup.md](./rules/1-drizzle-setup.md) | Project Setup | การตั้งค่า project และ configuration สำหรับ Drizzle | `drizzle-` | เมื่อตั้งค่า project ใหม่ |
| 2 | `HIGH` | [2-drizzle-schema-design.md](./rules/2-drizzle-schema-design.md) | Schema Design | Schema best practices และ patterns | `drizzle-` | เมื่อออกแบบ database schemas |
| 3 | `HIGH` | [3-drizzle-migrations.md](./rules/3-drizzle-migrations.md) | Migrations | Migration strategies และ workflows | `drizzle-` | เมื่อจัดการ migrations |
| 4 | `MEDIUM` | [4-drizzle-querying.md](./rules/4-drizzle-querying.md) | Query Building | Query building และ optimization | `drizzle-` | เมื่อเขียน database queries |
| 5 | `MEDIUM` | [5-drizzle-performance.md](./rules/5-drizzle-performance.md) | Performance | Performance optimization techniques | `drizzle-` | เมื่อ optimize database performance |

## Knowledge

| Reference | Name | Description | Prefix |
| :--- | :--- | :--- | :--- |

## Overview

### Rules

แต่ละไฟล์ Rule ประกอบด้วย:

- เหตุผล (Why)
- ตัวอย่างที่ไม่ดี (Anti-patterns)
- ตัวอย่างที่ดี (Best practices)
- กฎที่ต้องปฏิบัติตาม (Rules)
- ผลกระทบถ้าไม่ทำตาม (Impact)
- เอกสารอ้างอิง (References)

### Knowledge

แต่ละไฟล์ Knowledge ประกอบด้วย:

- Overview: ภาพรวมของ topic
- Key Concepts: concepts สำคัญที่ต้องรู้
- Examples: ตัวอย่างการใช้งาน
- Best Practices: best practices ที่ควรทำตาม
- References: ลิงก์ไปยังแหล่งข้อมูลต้นฉบับ

## How to Use

แต่ละไฟล์ Rule อธิบายถึง:

- เหตุผลที่ต้องทำตามกฎ
- ตัวอย่างที่ไม่ดีและดี
- กฎที่ต้องปฏิบัติตาม
- ผลกระทบถ้าไม่ทำตาม
- เอกสารอ้างอิง

แต่ละไฟล์ Knowledge อธิบายถึง:

- ภาพรวมของ topic
- Concepts สำคัญที่ต้องรู้
- ตัวอย่างการใช้งาน
- Best practices ที่ควรทำตาม
- เอกสารอ้างอิง

## Quick Reference

```bash
# Development workflow
drizzle-kit push      # Push schema directly (prototyping)
drizzle-kit generate  # Generate SQL migrations (production)
drizzle-kit migrate   # Run migrations
drizzle-kit pull      # Pull schema from database
drizzle-kit studio    # Visual database browser
```

## References

- [Drizzle ORM Documentation](https://orm.drizzle.team/)
