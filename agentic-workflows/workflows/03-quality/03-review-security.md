---
title: Review Security
description: ตรวจสอบ security vulnerabilities, secrets, auth patterns และ security best practices
auto_execution_mode: 3
file-patterns:
  - "**/workflows/review-security.md"
---

## Prerequisites

- เข้าใจ OWASP Top 10 และ common security vulnerabilities
- รู้จัก security scanning tools (Snyk, Trivy, CodeQL)
- เข้าใจ authentication/authorization patterns (JWT, OAuth, RBAC)
- รู้จัก secure coding practices สำหรับภาษาที่ใช้

## 3.1 Precondition

- มี access ไปยัง source code ทั้งหมด
- มีสิทธิ์อ่าน/เขียนไฟล์ใน project directory
- เครื่องมือ security scanning พร้อมใช้งาน
- เข้าใจ threat model ของ application

## 3.2 Prepare

- รวบรวม security tools และ scanners ที่จะใช้
- ระบุ sensitive data flows (auth, payment, PII)
- เตรียม checklist ตาม OWASP Top 10
- ตรวจสอบว่ามี security policy หรือไม่

## 3.3 Execute

1. สแกนหา secrets และ credentials ที่ hardcoded

   ```bash
   # ใช้ truffleHog หรือ git-secrets
   trufflehog filesystem .

   # หรือ gitleaks
   gitleaks detect .
   ```

   ตรวจสอบ:
   - API keys, access tokens
   - Database connection strings
   - Private keys
   - Passwords

2. รัน dependency vulnerability scan

   ```bash
   # ใช้ snyk
   snyk test

   # หรือ npm audit / cargo audit / pip-audit
   ```

3. ตรวจสอบ code security (SAST)
   - SQL injection vulnerabilities
   - XSS (Cross-Site Scripting)
   - CSRF (Cross-Site Request Forgery)
   - Command injection
   - Path traversal
   - Insecure deserialization
   - XXE (XML External Entity)

4. ตรวจสอบ authentication/authorization
   - ใช้ strong password policies
   - มี MFA หรือไม่ (ถ้าจำเป็น)
   - JWT secrets แข็งแรงและ rotate ได้
   - Session management ปลอดภัย
   - Authorization checks ครอบคลุมทุก endpoint

5. ตรวจสอบ data protection
   - Sensitive data ถูก encrypt หรือไม่
   - HTTPS/TLS บังคับใช้
   - ไม่มี sensitive data ใน logs
   - Input validation ครอบคลุม
   - Output encoding ถูกต้อง

6. ตรวจสอบ security headers
   - Content-Security-Policy
   - X-Frame-Options
   - X-Content-Type-Options
   - Strict-Transport-Security
   - Referrer-Policy

7. แก้ไข vulnerabilities ที่พบ
   - Remove hardcoded secrets
   - อัพเดท vulnerable dependencies
   - แก้ไข insecure code patterns
   - เพิ่ม security controls ที่ขาดหาย

## 3.4 Validate

- [ ] ไม่มี secrets หรือ credentials ที่ hardcoded
- [ ] Dependencies ไม่มี known vulnerabilities (high/critical)
- [ ] ไม่มี common vulnerabilities (SQL injection, XSS, CSRF)
- [ ] Authentication ใช้ secure patterns
- [ ] Authorization checks ครอบคลุมทุก sensitive operations
- [ ] Sensitive data ถูก encrypt (at rest และ in transit)
- [ ] Security headers ถูกตั้งค่าอย่างเหมาะสม
- [ ] Input validation และ output encoding ครบถ้วน

## 3.5 Verify

- [ ] รัน security scanners อีกครั้งเพื่อยืนยันว่าไม่มี vulnerabilities
- [ ] ทดสอบการทำงานของ security controls
- [ ] ยืนยันว่า application ยังทำงานได้ปกติหลังแก้ไข
