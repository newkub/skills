---
name: postgres
description: Best practices for PostgreSQL database development
goal: พัฒนาฐานข้อมูล PostgreSQL ตาม best practices
outcome: ฐานข้อมูลมีโครงสร้างและประสิทธิภาพตามมาตรฐาน
---

## When to Execute

- เมื่อออกแบบ database schemas
- เมื่อเขียน SQL queries
- เมื่อ optimize database performance
- เมื่อจัดการ database migrations

## Quick Start

1. Install PostgreSQL from official website
2. Create database with `createdb database_name`
3. Connect with `psql database_name`
4. Create tables with proper schemas
5. Set up indexes for performance

## Execution Table

| Number | File | Condition |
|--------|------|-----------|
| 1 | [Setup](rules/1-setup.md) | เมื่อต้องการตั้งค่า PostgreSQL ใหม่ |
| 2 | [Schema Design](rules/2-schema-design.md) | เมื่อออกแบบโครงสร้างฐานข้อมูล |
| 3 | [Query Optimization](rules/3-query-optimization.md) | เมื่อต้องการปรับปรุงประสิทธิภาพคำสั่ง |
| 4 | [Core Concept](knowledge/core-concept.md) | เมื่อต้องการทำความเข้าใจพื้นฐาน |
| 5 | [All Features](knowledge/all-features.md) | เมื่อต้องการดูฟีเจอร์ทั้งหมด |
| 6 | [Best Practices](knowledge/best-practices.md) | เมื่อต้องการทำตาม best practices |
| 7 | [CLI Commands](knowledge/cli.md) | เมื่อต้องการใช้ command line tools |
| 8 | [Data Types](features/1-data-types.md) | เมื่อต้องการเลือกประเภทข้อมูล |
| 9 | [Indexes](features/2-indexes.md) | เมื่อต้องการสร้าง indexes |
| 10 | [Constraints](features/3-constraints.md) | เมื่อต้องการตั้งค่า constraints |
| 11 | [Joins](features/4-joins.md) | เมื่อต้องการเชื่อมตาราง |
| 12 | [Advanced Queries](features/5-advanced-queries.md) | เมื่อต้องการใช้ queries ขั้นสูง |
| 13 | [Fundamentals](best-practices/1-fundamentals.md) | เมื่อต้องการเรียนรู้พื้นฐานขั้นสูง |
| 14 | [Performance](best-practices/2-performance.md) | เมื่อต้องการปรับปรุงประสิทธิภาพ |
| 15 | [Patterns](best-practices/3-patterns.md) | เมื่อต้องการเรียนรู้ design patterns |
| 16 | [Schema Design](summarize/1-schema-design.md) | เมื่อต้องการดู best practices สำหรับ schema |
| 17 | [Query Performance](summarize/2-query-performance.md) | เมื่อต้องการดู best practices สำหรับ queries |
| 18 | [Security](summarize/3-security.md) | เมื่อต้องการดู best practices สำหรับความปลอดภัย |
| 19 | [Error Handling](summarize/4-error-handling.md) | เมื่อต้องการดู best practices สำหรับ error handling |
| 20 | [Backup Recovery](summarize/5-backup-recovery.md) | เมื่อต้องการดู best practices สำหรับ backup |
| 21 | [Scaling](summarize/6-scaling.md) | เมื่อต้องการดู best practices สำหรับ scaling |
| 22 | [Monitoring](summarize/7-monitoring.md) | เมื่อต้องการดู best practices สำหรับ monitoring |
| 23 | [Maintenance](summarize/8-maintenance.md) | เมื่อต้องการดู best practices สำหรับ maintenance |
| 24 | [Data Migration](summarize/9-data-migration.md) | เมื่อต้องการดู best practices สำหรับ migration |
| 25 | [Compliance](summarize/10-compliance.md) | เมื่อต้องการดู best practices สำหรับ compliance |
| 26 | [Examples](reference/examples.md) | เมื่อต้องการดูตัวอย่างโค้ด |
| 27 | [Patterns](reference/patterns.md) | เมื่อต้องการดู patterns เพิ่มเติม |
| 28 | [Resources](reference/resources.md) | เมื่อต้องการแหล่งข้อมูลเพิ่มเติม |
| 29 | [External Links](reference/external-links.md) | เมื่อต้องการลิงก์ภายนอก |

## Verification

1. ตรวจสอบ PostgreSQL version ด้วย `psql --version`
2. ทดสอบ database connection ด้วย `\l`
3. ตรวจสอบ table structure ด้วย `\d table_name`
4. ยืนยันว่า queries ทำงานได้ตามที่คาดหวัง
