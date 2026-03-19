---
title: Security Review
description: ตรวจสอบความปลอดภัยของโค้ดและระบบ
auto_execution_mode: 3
file-patterns:
  - "workflows/**/*.md"
  - "**/workflows/*.md"
---

## Prerequisites

- เข้าใจ security requirements และ threats ของ application
- รู้จับ common vulnerabilities (OWASP Top 10, etc.)
- มี tools สำหรับ security scanning

## 3.1 Precondition

- Code หรือ system พร้อมสำหรับ review
- Security baseline หรือ standards ถูกกำหนด
- Reviewer มี knowledge ด้าน security
- Scope ของ review ชัดเจน

## 3.2 Prepare

- รวบรวม security requirements และ standards
- เตรียม security scanning tools
- ศึกษา threat model ของ application
- กำหนด security checklist

## 3.3 Execute

1. ทบทวนโค้ดเพื่อหา vulnerabilities

   - ใช้ `code_search` หา input validation points
   - ใช้ `grep_search` หา patterns ที่เสี่ยง (eval, innerHTML, etc.)
   - ใช้ `read_file` อ่าน authentication/authorization code
   - ใช้ `read_file` อ่าน data handling และ encryption
   - ใช้ `grep_search` หา secrets หรือ hardcoded credentials

2. รัน automated security scans

   - ใช้ `run_command` รัน dependency scanners (`npm audit`, `cargo audit`)
   - ใช้ `run_command` รัน SAST tools (Semgrep, CodeQL, etc.)
   - ใช้ `run_command` รัน secret scanners (git-secrets, truffleHog)
   - ใช้ `search_web` หา known vulnerabilities ของ dependencies
   - ใช้ `mcp1_search_cloudflare_documentation` สำหรับ security best practices

3. ตรวจสอบ configuration และ infrastructure

   - ใช้ `read_file` อ่าน config files (CORS, CSP, headers)
   - ใช้ `read_file` อ่าน docker/security configs
   - ใช้ `run_command` รัน infrastructure scanners
   - ใช้ `grep_search` หา misconfigurations
   - ใช้ `browser_preview` ทดสอบ security headers

4. Document และ prioritize findings

   - ใช้ `write_to_file` สร้าง security report
   - จัดลำดับ vulnerabilities ตาม severity (Critical, High, Medium, Low)
   - สร้าง remediation plan
   - ใช้ `create_memory` บันทึก security decisions

## 3.4 Validate

- [ ] ครอบคลุม OWASP Top 10 และ common vulnerabilities
- [ ] Automated scans ผ่านโดยไม่มี critical issues
- [ ] Manual review ไม่พบ high-risk vulnerabilities
- [ ] Configuration secure และ follow best practices
- [ ] Documentation ครบถ้วน

## 3.5 Verify

- [ ] ยืนยันว่า vulnerabilities ถูก remediate หรือ accept risk
- [ ] ตรวจสอบว่า re-scan ไม่พบ issues เดิม
- [ ] ยืนยันว่า security team ยอมรับ
- [ ] ตรวจสอบว่า security testing integrated กับ CI/CD
- [ ] ยืนยันว่าพร้อมสำหรับ production
