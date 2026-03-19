---
title: Review CI/CD Pipeline
description: ตรวจสอบ CI/CD workflows, GitHub Actions, pipelines และ deployment automation
auto_execution_mode: 3
file-patterns:
  - "**/workflows/review-ci.md"
---

## Prerequisites

- เข้าใจ CI/CD concepts และ best practices
- รู้จัก GitHub Actions, GitLab CI, หรือ CI tools ที่ใช้
- เข้าใจ pipeline stages (build, test, deploy)
- รู้จัก secrets management และ security ใน CI/CD

## 3.1 Precondition

- มี CI/CD configuration files (.github/workflows, .gitlab-ci.yml)
- มีสิทธิ์อ่าน/เขียนไฟล์ใน project directory
- เข้าใจ deployment targets และ environments

## 3.2 Prepare

- อ่าน existing CI/CD configuration files
- ระบุ pipeline stages ที่มีอยู่
- เตรียม checklist ตาม CI/CD best practices
- ตรวจสอบ CI/CD documentation (ถ้ามี)

## 3.3 Execute

1. ตรวจสอบ workflow triggers
   - Triggers เหมาะสม (on push, pull_request, schedule)
   - Path filters ที่เหมาะสม (ไม่รันทุกครั้งที่มีการเปลี่ยนแปลง)
   - Branch filters ที่ถูกต้อง
   - ไม่มี unnecessary triggers

2. ตรวจสอบ pipeline stages
   - Build stage compile/build ได้สำเร็จ
   - Test stage รัน unit/integration/e2e tests
   - Lint stage ตรวจสอบ code quality
   - Security scan stage (SAST, dependency check)
   - Deploy stage มี approval gates (production)

3. ตรวจสอบ job dependencies
   - Jobs มี dependencies ที่ถูกต้อง (needs)
   - Parallel execution ที่เหมาะสม
   - ไม่มี circular dependencies

4. ตรวจสอบ secrets และ credentials
   - Secrets ถูกเก็บใน repository settings ไม่ hardcoded
   - ใช้ environments สำหรับ production secrets
   - ไม่ expose secrets ใน logs
   - OIDC/OAuth แทน long-lived tokens (ถ้าเป็นไปได้)

5. ตรวจสอบ caching
   - Dependency caching (node_modules, cargo registry)
   - Build artifact caching
   - Cache keys มีความ unique ที่เหมาะสม
   - ไม่มี cache poisoning

6. ตรวจสอบ artifact handling
   - Artifacts ถูกเก็บเฉพาะที่จำเป็น
   - Artifact retention policy
   - ไม่มี sensitive data ใน artifacts

7. ตรวจสอบ deployment strategies
   - Blue-green deployment (ถ้ามี)
   - Canary deployment (ถ้ามี)
   - Rollback mechanisms
   - Health checks หลัง deploy

8. ตรวจสอบ security ใน CI/CD
   - Third-party actions เป็น versions pinned (commit SHA)
   - ไม่ใช้ actions จาก untrusted sources
   - Least privilege permissions (workflow permissions)
   - Code signing (ถ้ามี)

## 3.4 Validate

- [ ] Workflow triggers มีความเหมาะสม
- [ ] Pipeline stages ครอบคลุง build, test, security, deploy
- [ ] Secrets จัดการอย่างปลอดภัย ไม่ hardcoded
- [ ] Caching ทำงานได้และมีประสิทธิภาพ
- [ ] Third-party actions pinned ด้วย commit SHA
- [ ] Deployment มี approval gates สำหรับ production
- [ ] Rollback mechanisms พร้อมใช้งาน
- [ ] Workflow permissions ใช้ least privilege

## 3.5 Verify

- [ ] ทดสอบรัน pipeline บน feature branch
- [ ] ตรวจสอบว่า secrets อ่านได้จริง
- [ ] ยืนยันว่า artifacts ถูกสร้างและเก็บถูกต้อง
- [ ] ทดสอบ deployment ไปยัง staging environment
