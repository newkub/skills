---
title: Review Architecture
description: ตรวจสอบและทบทวนสถาปัตยกรรมของโปรเจกต์
auto_execution_mode: 3
file-patterns:
  - "**/architecture/**"
  - "**/docs/**"
  - "**/*.md"
follow:
  skills:
    - "@write-skills"
    - "@architecture-software"
  workflows:
    - "/validate"
    - "/review-architecture"
    - "/analyze-project"
  files:
    - "guidelines/architecture-standards.md"
---

## Review Architecture

## Purpose

ตรวจสอบและทบทวนสถาปัตยกรรมของโปรเจกต์ให้สอดคล้องกับ best practices

## Scope

- การออกแบบระบบ (system design)
- การจัดโครงสร้างโปรเจกต์ (project structure)
- การเลือกใช้ technologies
- การทำ documentation

## Rules

### 1. Architecture Principles

| หลักการ | คำอธิบาย |
|----------|-----------|
| **SOLID** | Single Responsibility, Open/Closed, Liskov, Interface Segregation, Dependency Inversion |
| **DRY** | Don't Repeat Yourself - หลีกเลี่ยง code ซ้ำ |
| **KISS** | Keep It Simple, Stupid - ความเรียบง่าย |
| **YAGNI** | You Ain't Gonna Need It - ไม่ต้องทำสิ่งที่ไม่จำเป็น |

### 2. Project Structure

| โฟลเดอร์ | คำอธิบาย | ตัวอย่างไฟล์ |
|----------|-----------|--------------|
| **src/** | Source code หลัก | `index.ts`, `main.ts` |
| **tests/** | Test files | `*.test.ts`, `*.spec.ts` |
| **docs/** | Documentation | `README.md`, `API.md` |
| **config/** | Configuration | `tsconfig.json`, `package.json` |
| **scripts/** | Build scripts | `build.sh`, `deploy.sh` |

### 3. Technology Stack Rules

| Layer | Technologies | Considerations |
|-------|--------------|----------------|
| **Frontend** | React, Vue, Next, Nuxt | Performance, SEO, DX |
| **Backend** | Node.js, Bun, Nitro | Performance, Ecosystem |
| **Database** | PostgreSQL, SQLite | Scalability, Type Safety |
| **Deployment** | Vercel, Cloudflare | Cost, Performance |

## Steps

### Phase 1: Architecture Analysis

1. วิเคราะห์ system design ปัจจุบัน
2. ตรวจสอบ project structure และ organization
3. ประเมิน technology choices

### Phase 2: Best Practices Review

1. ตรวจสอบการปฏิบัติตาม SOLID principles
2. วิเคราะห์ code duplication และ coupling
3. ประเมิน scalability และ maintainability

### Phase 3: Recommendations

1. ระบุ strengths และ weaknesses
2. เสนอแนะ improvements และ changes
3. สร้าง implementation plan พร้อม phases

## Expected Outcome

| ผลลัพธ์ | คำอธิบาย | วิธีวัดผล |
|--------|----------|------------|
| **Architecture Validated** | สถาปัตยกรรมถูกต้อง | Review checklist |
| **Best Practices Applied** | ปฏิบัติตาม principles | Code analysis |
| **Issues Identified** | พบปัญหาและข้อเสนอ | Issue report |
| **Improvement Plan** | มีแผนปรับปรุง | Implementation roadmap |

## Reference

- [Software Architecture Guide](../../../architecture-software/)
- [Project Structure Standards](../../../structure-project/)
- [System Design Principles](../../../system-design/)
- [Technology Stack Guide](../../../tech-stack/)
- [Architecture Patterns](https://patterns.dev/)
