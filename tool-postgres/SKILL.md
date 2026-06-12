# tool-postgres

## Overview

แนวทางการใช้งาน PostgreSQL ซึ่งเป็น world's most advanced open source relational database system ที่รองรับ SQL, ACID transactions, MVCC, extensions, JSON support, และ replication


## When to use



## Skills Related



## References


## Content Summary

| Folder | File | Description |
|--------|------|-------------|
| **guide/** | [key-concept.md](guide/key-concept.md) | แนวคิดพื้นฐาน - ACID, MVCC, Data Types |
| | [how-it-works.md](guide/how-it-works.md) | หลักการทำงาน - Client/Server, Query Processing |
| | [features.md](guide/features.md) | Features ทั้งหมด - Indexing, Partitioning |
| | [installation.md](guide/installation.md) | การติดตั้ง - หลายวิธี |
| | [configuration.md](guide/configuration.md) | การตั้งค่า - postgresql.conf |
| | [quick-start.md](guide/quick-start.md) | เริ่มต้นใช้งานอย่างรวดเร็ว |
| | [best-practices.md](guide/best-practices.md) | แนวทางปฏิบัติที่ดีที่สุด |
| **references/** | [website.md](references/website.md) | เว็บไซต์และแหล่งข้อมูล |
| | [cli.md](references/cli.md) | psql commands และ utilities |
| | [configuration.md](references/configuration.md) | ตัวเลือก configuration ทั้งหมด |
| | [api.md](references/api.md) | Client libraries API |

## Quick Reference

```bash
# Connect
psql -U username -d database_name

# Create database
CREATE DATABASE mydb;

# Connect to database
\c mydb

# Create table
CREATE TABLE users (id SERIAL PRIMARY KEY, name VARCHAR(100));

# Insert data
INSERT INTO users (name) VALUES ('John');
```

## Key Features

| Feature | Description |
|---------|-------------|
| **ACID** | Atomicity, Consistency, Isolation, Durability |
| **MVCC** | Multi-Version Concurrency Control |
| **Extensions** | PostGIS, pgvector, full-text search |
| **Replication** | Streaming replication, logical replication |
| **JSON/JSONB** | JSON support with indexing |
| **CTE** | Common Table Expressions |
| **Window Functions** | Analytical queries |

## File Structure

```
tool-postgres/
├── SKILL.md
├── guide/
│   ├── key-concept.md
│   ├── how-it-works.md
│   ├── features.md
│   ├── installation.md
│   ├── configuration.md
│   ├── quick-start.md
│   └── best-practices.md
└── references/
    ├── website.md
    ├── cli.md
    ├── configuration.md
    └── api.md
```