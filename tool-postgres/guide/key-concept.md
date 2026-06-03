# Key Concept

## What is PostgreSQL?

PostgreSQL เป็น powerful, open source object-relational database system ที่ใช้ SQL เป็นภาษาหลัก รองรับ ACID transactions, complex queries, triggers, stored procedures, และ extensibility

## Core Principles

| Principle | Description |
|-----------|-------------|
| **ACID** | รับประกัน data consistency สำหรับ transactions |
| **MVCC** | อ่านข้อมูลได้โดยไม่ lock write operations |
| **MVCC** | Snapshot isolation สำหรับ concurrent access |
| **MVCC** | ลด conflicts ระหว่าง readers และ writers |

## Key Terms

| Term | Description |
|------|-------------|
| **Database** | Container สำหรับ tables และ objects |
| **Schema** | Namespace สำหรับ organize objects |
| **Table** | Collection of rows with columns |
| **Index** | Data structure สำหรับ speed up queries |
| **Transaction** | Unit of work ที่ทำทั้งหมดหรือไม่ทำเลย |
| **WAL** | Write Ahead Log สำหรับ durability |
| **VACUUM** | Process สำหรับ cleanup dead tuples |

## ACID Properties

```
┌─────────────────────────────────────────────────────────────┐
│                        ACID                                  │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  Atomicity (ความเป็นอะตอม)                                  │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  Transaction ทำทั้งหมด หรือ ไม่ทำเลย                 │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                              │
│  Consistency (ความสอดคล้อง)                                  │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  Database ย้ายจาก state หนึ่งไป state ที่ถูกต้อง       │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                              │
│  Isolation (ความเป็นอิสระ)                                  │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  Concurrent transactions ทำงานแยกกันโดยไม่กวนกัน     │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                              │
│  Durability (ความคงทน)                                     │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  Committed data จะไม่หายถึงแม้ระบบล่ม                 │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

## Data Types

| Category | Types |
|----------|-------|
| **Numeric** | integer, bigint, serial, numeric, real, double precision |
| **Character** | varchar, text, char |
| **Date/Time** | date, time, timestamp, timestamptz, interval |
| **Boolean** | boolean |
| **JSON** | json, jsonb |
| **Array** | integer[], text[] |
| **UUID** | uuid |
| **Network** | cidr, inet, macaddr |
| **Geospatial** | PostGIS types (ต้องติดตั้ง extension) |
| **Vector** | vector (ต้องติดตั้ง pgvector extension) |

## When to Use PostgreSQL

| Use Case | Recommendation |
|----------|----------------|
| Enterprise applications | ✅ เหมาะมาก |
| Complex queries | ✅ Full SQL support |
| JSON data | ✅ JSONB รองรับ indexing |
| Geospatial data | ✅ PostGIS |
| AI/ML vectors | ✅ pgvector |
| High reliability | ✅ ACID compliant |
| Simple key-value | ⚠️ ใช้ Redis อาจเหมาะกว่า |