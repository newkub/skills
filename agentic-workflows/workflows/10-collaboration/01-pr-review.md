---
title: PR Review
description: ตรวจสอบ Pull Request อย่างเป็นระบบและมีประสิทธิภาพ
auto_execution_mode: 3
file-patterns:
  - "workflows/**/*.md"
  - "**/workflows/*.md"
---

## Prerequisites

- มี Pull Request ที่ต้องการ review
- เข้าใจ PR description และ context
- มี access สู่ repository และ PR

## 3.1 Precondition

- PR สร้างและ ready สำหรับ review
- CI/CD checks รันผ่านหรือ documented
- Author พร้อมรับ feedback
- Reviewer มีเวลาและ context

## 3.2 Prepare

- อ่าน PR description และ linked issues
- ศึกษา changes และ files ที่ modify
- เตรียม review criteria
- กำหนด review scope

## 3.3 Execute

1. Review PR overview

   - ใช้ `read_file` อ่าน PR description
   - ใช้ `search_web` หา related issues
   - ใช้ `mcp3_read_wiki_structure` หา project docs
   - ใช้ `trajectory_search` หา related work

2. Review code changes

   - ใช้ `read_file` อ่าน changed files
   - ใช้ `code_search` ดู related code
   - ใช้ `run_command` รัน local checks
   - ใช้ `grep_search` หา patterns และ issues

3. Provide review feedback

   - ใช้ `ask_user_question` สื่อสารกับ author
   - ใช้ `edit` แนะนำ changes
   - ใช้ `create_memory` บันทึก decisions
   - Approve, comment, หรือ request changes

## 3.4 Validate

- [ ] PR ตรงตาม requirements
- [ ] Code quality ผ่านเกณฑ์
- [ ] Tests ผ่านและครอบคลุม
- [ ] Documentation อัปเดต

## 3.5 Verify

- [ ] ยืนยันว่า review ครบถ้วน
- [ ] ตรวจสอบว่า concerns แก้ไขแล้ว
- [ ] ยืนยันว่า ready สำหรับ merge
- [ ] ตรวจสอบว่า follow-up ถูก track
