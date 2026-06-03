# Key Concept

## Overview

Turborepo เป็น high-performance build system สำหรับ JavaScript และ TypeScript monorepos ที่พัฒนาโดย Vercel มีความสามารถในการ cache task outputs และ orchestrating tasks อย่างชาญฉลาด

## Core Concepts

### 1. Task Pipeline

Pipeline คือการกำหนด task dependencies ว่า task ไหนต้องรอ task ไหนทำเสร็จก่อน

| Syntax | ความหมาย |
|--------|----------|
| `"build": { "dependsOn": ["^build"] }` | รอ dependencies' build เสร็จก่อน |
| `"test": { "dependsOn": ["build"] }` | รอ same-package build เสร็จก่อน |
| `"lint": { "dependsOn": ["^lint"] }` | รอ all packages' lint เสร็จก่อน |

### 2. Caching

Turborepo cache ผลลัพธ์ของ task โดยใช้ hash ของ inputs:

- **Local Cache**: เก็บใน `.turbo/cache`
- **Remote Cache**: Share cache ระหว่างเครื่องและ CI ผ่าน Vercel

### 3. Workspace Tasks

Tasks ถูกค้นหาจาก `package.json` scripts ในแต่ละ workspace:

```json
// package.json
{
  "scripts": {
    "build": "tsc",
    "test": "jest",
    "lint": "eslint"
  }
}
```

### 4. Package Configurations

แต่ละ package สามารถมี `turbo.json` ของตัวเองเพื่อ override config หลัก:

```json
// apps/web/turbo.json
{
  "extends": ["//"],
  "tasks": {
    "build": {
      "outputs": [".next/**", "!:.next/cache/**"]
    }
  }
}
```

### 5. Environment Variables

Turborepo มี 2 environment modes:

| Mode | พฤติกรรม |
|------|----------|
| `strict` | เฉพาะ env ที่ประกาศใน `env`/`globalEnv` ถูกใช้ |
| `loose` | ทุก env variable ถูกส่งให้ task |

## Task Graph Visualization

```
┌─────────────────────────────────────────────────────────┐
│                    Build Task Graph                      │
├─────────────────────────────────────────────────────────┤
│                                                         │
│   ┌─────────┐         ┌─────────┐         ┌─────────┐  │
│   │  docs   │         │   web   │         │   api   │  │
│   │  build  │         │  build  │         │  build  │  │
│   └────┬────┘         └────┬────┘         └────┬────┘  │
│        │                    │                    │       │
│        │                    │                    │       │
│        ▼                    ▼                    ▼       │
│   ┌─────────┐         ┌─────────┐         ┌─────────┐  │
│   │  docs   │         │   web   │         │   api   │  │
│   │   dev   │         │   dev   │         │   dev   │  │
│   └─────────┘         └─────────┘         └─────────┘  │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

## Key Terms

| Term | คำอธิบาย |
|------|----------|
| **Workspace** | Package ใน monorepo (apps/, packages/) |
| **Task** | Script ที่ถูก run ผ่าน `turbo run` |
| **Hash** | Input hash สำหรับ cache key |
| **Cache Hit** | Task output ถูก restore จาก cache |
| **Cache Miss** | Task ต้อง execute ใหม่ |