---
title: Review Documentation
description: ตรวจสอบ code documentation, README, API docs และ technical documentation
auto_execution_mode: 3
file-patterns:
  - "**/workflows/review-docs.md"
---

## Prerequisites

- เข้าใจ documentation best practices (README, inline docs, API docs)
- รู้จัก documentation tools (MkDocs, Docusaurus, GitBook)
- เข้าใจ target audience ของ documentation
- มี writing skills ที่ดีสำหรับ technical content

## 3.1 Precondition

- มี project ที่ต้องการตรวจสอบ documentation
- มีสิทธิ์อ่าน/เขียนไฟล์ใน project directory
- เข้าใจ project scope และ features

## 3.2 Prepare

- อ่าน existing documentation ทั้งหมด
- ระบุ target audiences (developers, users, contributors)
- เตรียม checklist ตาม documentation standards
- ตรวจสอบว่ามี documentation site หรือไม่

## 3.3 Execute

1. ตรวจสอบ README.md
   - Project description ที่ชัดเจน
   - Installation instructions ที่ครบถ้วน
   - Quick start guide
   - Badges (build status, coverage, license)
   - Table of contents (ถ้ายาว)
   - Contributing guidelines link
   - License information

2. ตรวจสอบ code documentation
   - Public functions/methods มี doc comments
   - Complex algorithms มี inline comments
   - Function parameters และ return values ถูก document
   - Examples ใน documentation (ถ้าเหมาะสม)

3. ตรวจสอบ API documentation
   - OpenAPI/Swagger spec (ถ้ามี API)
   - Authentication instructions
   - Request/response examples
   - Error codes และ meanings

4. ตรวจสอบ architecture documentation
   - System architecture diagrams
   - Component descriptions
   - Data flow documentation
   - Deployment instructions

5. ตรวณสอบ contribution documentation
   - CONTRIBUTING.md ที่ชัดเจน
   - Code of conduct
   - Issue templates
   - Pull request templates

6. ตรวจสอบ changelog/release notes
   - CHANGELOG.md หรือ releases
   - Version numbers ตาม semver
   - Breaking changes ถูก highlight
   - Migration guides (ถ้ามี breaking changes)

7. ตรวจสอบ documentation quality
   - ไม่มี broken links
   - ภาพ/screenshots แสดงผลถูกต้อง
   - Code examples สามารถรันได้จริง
   - Spelling และ grammar
   - ไม่มี outdated information

## 3.4 Validate

- [ ] README.md ครบถ้วนและ up-to-date
- [ ] Public APIs มี documentation
- [ ] Code comments อธิบาย complex logic
- [ ] API documentation มี examples
- [ ] Architecture documentation ครบถ้วน (ถ้ามี)
- [ ] Contributing guidelines ชัดเจน
- [ ] Changelog มีทุก significant changes
- [ ] ไม่มี broken links ใน documentation
- [ ] Code examples สามารถรันได้

## 3.5 Verify

- [ ] ยืนยันว่า documentation ตรงกับ actual implementation
- [ ] ทดสอบ code examples ว่ารันได้จริง
- [ ] ตรวจสอบว่าไม่มี outdated screenshots
