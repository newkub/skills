---
title: Review Dependencies
description: ตรวจสอบ dependencies, vulnerabilities, outdated packages และ license compliance
auto_execution_mode: 3
file-patterns:
  - "**/workflows/review-dependencies.md"
---

## Prerequisites

- เข้าใจ package management (npm, bun, cargo, pip, go modules)
- รู้จัก common security vulnerabilities (CVE, Snyk, Dependabot alerts)
- เข้าใจ semantic versioning และ dependency management best practices
- รู้จัก license types และ compliance requirements

## 3.1 Precondition

- มี package manifest file (package.json, Cargo.toml, requirements.txt, go.mod)
- มี lock file (bun.lockb, Cargo.lock, package-lock.json) ที่ sync กัน
- มีสิทธิ์อ่าน/เขียนไฟล์ใน project directory
- เครื่องมือตรวจสอบ vulnerabilities พร้อมใช้งาน (snyk, npm audit, cargo-audit)

## 3.2 Prepare

- ระบุ package manager ที่ใช้ใน project
- อ่าน package manifest และ lock file
- เตรียม tools สำหรับ audit (snyk, npm audit, cargo-audit, safety สำหรับ Python)
- ตรวจสอบว่ามี CI/CD pipeline ที่ตรวจสอบ dependencies หรือไม่

## 3.3 Execute

1. ตรวจสอบ outdated dependencies

   ```bash
   # Bun/NPM
   bun update --dry-run

   # Cargo
   cargo outdated

   # Python
   pip list --outdated
   ```

2. รัน security audit

   ```bash
   # Bun/NPM
   bun audit

   # Cargo
   cargo audit

   # Snyk (multi-language)
   snyk test
   ```

3. ตรวจสอบ license compliance
   - ใช้ `license-checker` หรือ `fossa`
   - ระบุ dependencies ที่มี licenses ไม่ compatible
   - ตรวจสอบว่ามี copyleft licenses ที่ต้องเปิดเผย source code

4. ตรวจสอบ unused dependencies
   - ใช้ `knip` สำหรับ JavaScript/TypeScript
   - ใช้ `cargo-udeps` สำหรับ Rust
   - ใช้ `pip-check-reqs` สำหรับ Python

5. ตรวจสอบ lock file integrity
   - ยืนยันว่า lock file sync กับ manifest
   - ตรวจสอบว่าไม่มี duplicate dependencies ที่แตกต่าง versions
   - ดูว่ามี git dependencies หรือ unverified sources

6. อัพเดท dependencies (ถ้าจำเป็น)
   - อัพเดท patch/minor versions ที่มี security fixes
   - ระวัง breaking changes ใน major version updates
   - รัน tests หลังอัพเดทเพื่อยืนยัน

## 3.4 Validate

- [ ] ไม่มี high/critical severity vulnerabilities ที่ยังไม่แก้ไข
- [ ] Dependencies เป็น versions ที่ up-to-date (ไม่ตก version เก่ามาก)
- [ ] License ทุกตัว compatible กับ project license
- [ ] ไม่มี unused dependencies ใน project
- [ ] Lock file ถูกต้องและ sync กับ manifest
- [ ] ไม่มี unverified หรือ suspicious dependencies

## 3.5 Verify

- [ ] ยืนยันว่า project build/compile ได้หลังอัพเดท dependencies
- [ ] รัน tests ทั้งหมดผ่านหลัง dependency updates
- [ ] ตรวจสอบว่าไม่มี breaking changes จากการอัพเดท
