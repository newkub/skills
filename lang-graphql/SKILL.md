# lang-graphql

## Overview

แนวทางการพัฒนา GraphQL ตาม best practices สำหรับ building flexible และ type-safe APIs

## Directory Structure

```
lang-graphql/
├── SKILL.md
├── guide/
│   ├── key-concept.md
│   ├── how-it-works.md
│   ├── features.md
│   ├── installation.md
│   ├── configuration.md
│   ├── quick-start.md
│   ├── best-practices.md
│   ├── integration.md
│   └── architecture.md
├── key-concepts/
│   ├── federation.md
│   ├── testing.md
│   ├── database.md
│   ├── security.md
│   └── frameworks.md
├── references/
│   ├── website.md
│   ├── cli.md
│   └── configuration.md
└── workflows/
    ├── setup-graphql-server.md
    ├── add-type.md
    └── check-schema.md
```

## File Categories

### guide/

| ไฟล์ | คำอธิบาย |
|------|---------|
| key-concept.md | แนวคิดหลักของ GraphQL |
| how-it-works.md | วิธีการทำงานของ GraphQL engine |
| features.md | คุณสมบัติหลักของ GraphQL |
| installation.md | วิธีการติดตั้ง GraphQL server |
| configuration.md | การตั้งค่า GraphQL server |
| quick-start.md | เริ่มต้นใช้งานอย่างรวดเร็ว |
| best-practices.md | best practices สำหรับ GraphQL |
| integration.md | การเชื่อมต่อกับ frameworks และ databases |
| architecture.md | สถาปัตยกรรมของ GraphQL |

### key-concepts/

| ไฟล์ | คำอธิบาย |
|------|---------|
| federation.md | GraphQL Federation และ Schema Stitching |
| testing.md | การทดสอบ GraphQL resolvers และ schemas |
| database.md | การเชื่อมต่อกับ PostgreSQL, MongoDB, Prisma |
| security.md | Authentication, Authorization และ Query Complexity |
| frameworks.md | การใช้งานกับ React, Vue, Next.js, Svelte, Angular |

### references/

| ไฟล์ | คำอธิบาย |
|------|---------|
| website.md | ลิงก์ไปยังเว็บไซต์และเอกสารอย่างเป็นทางการ |
| cli.md | คำสั่ง CLI ของ GraphQL tools |
| configuration.md | ตัวเลือก configuration ต่างๆ |

### workflows/

| ไฟล์ | คำอธิบาย |
|------|---------|
| setup-graphql-server.md | วิธีตั้งค่า GraphQL server |
| add-type.md | วิธีเพิ่ม type ใหม่ใน schema |
| check-schema.md | วิธีตรวจสอบความถูกต้องของ schema |

## When to Use

- Building APIs ด้วย complex data relationships
- ต้องการ flexible queries (clients specify what they need)
- ลด over-fetching และ under-fetching
- Building type-safe APIs ด้วย schema
- ใช้ Apollo Client, Relay, หรือ urql
- ต้องการ real-time subscriptions

## Core Features

- **Flexible Queries**: Clients request exactly what they need
- **Strong Typing**: Schema-driven type safety
- **Introspection**: Self-documenting APIs
- **Single Endpoint**: One endpoint สำหรับทุก operations
- **Subscriptions**: Real-time data ด้วย WebSockets
- **Ecosystem**: Rich tooling (Playground, Codegen)