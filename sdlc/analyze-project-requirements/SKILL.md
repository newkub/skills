---
title: Analyze Project Requirements
description: วิเคราะห์ความต้องการ project อย่างครบถ้วนก่อนเริ่มพัฒนา
auto_execution_mode: 3
---

## Goal

วิเคราะห์ความต้องการ project อย่างครบถ้วนเพื่อวางแผน development ที่เหมาะสม

## Scope

ใช้สำหรับวิเคราะห์ความต้องการ project ใหม่ หรือ major refactor

## Execute

### 1. Identify Project Type

ระบุประเภท project

- ตรวจสอบว่าเป็น Library, Web App, CLI, Desktop, Mobile, หรือ Serverless
- อ่าน `package.json` หรือ config files เพื่อดู type hints
- ตรวจสอบ dependencies ที่ติดตั้ง

### 2. Analyze Tech Stack

วิเคราะห์ technology stack

- ระบุภาษาหลัก (TypeScript, Rust, Go, Python, etc.)
- ระบุ frameworks (React, Vue, Solid, Next, etc.)
- ระบุ build tools (Vite, tsdown, Rollup, etc.)
- ระบุ databases (PostgreSQL, MongoDB, Redis, etc.)

### 3. Assess Team Context

ประเมินบริบททีม

- ระบุ team size และ expertise
- ประเมิน learning curve สำหรับ technologies
- ตรวจสอบ time constraints และ deadlines

### 4. Define Deployment Target

กำหนด deployment target

- ระบุ platform (bun, Docker, Cloudflare, Vercel, etc.)
- ตรวจสอบ CI/CD requirements
- กำหนด environment variables ที่จำเป็น

### 5. Establish Quality Standards

กำหนดมาตรฐานคุณภาพ

- กำหนด test coverage targets
- กำหนด linting rules
- กำหนด performance benchmarks
- กำหนด security requirements

### 6. Identify Business Constraints

ระบุ business constraints

- ตรวจสอบ budget constraints
- ตรวจสอบ timeline constraints
- ตรวจสอบ compliance requirements (GDPR, HIPAA, etc.)

### 7. Define Security Requirements

กำหนด security requirements

- ระบุ authentication mechanisms
- ระบุ authorization levels
- กำหนด encryption requirements
- กำหนด audit logging requirements

### 8. Specify Performance Requirements

กำหนด performance requirements

- กำหนด response time targets
- กำหนด throughput targets
- กำหนด scalability requirements
- กำหนด resource limits

## Rules

### 1. Comprehensive Analysis

ต้องวิเคราะห์ทุกด้าน ไม่มองข้าม

- ต้องระบุ project type ชัดเจน
- ต้องระบุ tech stack ครบถ้วน
- ต้องระบุ constraints ทั้งหมด

### 2. Documentation

ต้องบันทึกผลการวิเคราะห์

- บันทึกใน `docs/project-analysis.md`
- ใช้ `/report-format-table` สำหรับสรุป
- บันทึก assumptions ทั้งหมด

### 3. Validation

ต้อง validate กับ stakeholders

- ยืนยัน requirements กับ team
- ยืนยัน constraints กับ business
- ยืนยัน tech stack กับ engineering

## Expected Outcome

- Project type ระบุชัดเจน
- Tech stack วิเคราะห์ครบถ้วน
- Team context เข้าใจ
- Deployment target กำหนดชัดเจน
- Quality standards ตั้งค่าเสร็จ
- Business constraints ระบุครบถ้วน
- Security requirements กำหนดเสร็จ
- Performance requirements กำหนดเสร็จ
