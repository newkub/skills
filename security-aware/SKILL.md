---
name: security-aware
description: Best practices for security-aware development including threat modeling, secure coding, and vulnerability management
goal: พัฒนา applications ที่มีความปลอดภัยสูงตาม best practices
outcome: Applications ที่ปลอดภัย ป้องกัน attacks ได้ และผ่าน security audits
---

# Security-Aware Development

## When to Use

ใช้ Skill นี้เมื่อต้องการพัฒนา applications ที่มีความปลอดภัยสูง

- เมื่อสร้าง application ใหม่และต้องการโครงสร้างที่ปลอดภัย
- เมื่อต้องการ implement secure coding practices
- เมื่อต้องการทำ threat modeling และ risk assessment
- เมื่อต้องการจัดการ vulnerabilities และ security patches
- เมื่อต้องการผ่าน security audits และ compliance

## Quick Start

1. วิเคราะห์ threats ตาม [1-security-threat-modeling.md](./rules/1-security-threat-modeling.md)
2. ตั้งค่า secure development environment ตาม [2-security-secure-setup.md](./rules/2-security-secure-setup.md)
3. implement secure coding ตาม [3-security-secure-coding.md](./rules/3-security-secure-coding.md)
4. ตั้งค่า security testing ตาม [4-security-testing.md](./rules/4-security-testing.md)
5. จัดการ vulnerabilities ตาม [5-security-vulnerability-management.md](./rules/5-security-vulnerability-management.md)

## Rules

| Priority | Impact | Reference | Name | Description | Prefix | Condition |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | `CRITICAL` | [1-security-threat-modeling.md](./rules/1-security-threat-modeling.md) | Threat Modeling | วิเคราะห์ threats และ risks อย่างเป็นระบบ | `security-` | เมื่อวางแผน |
| 2 | `CRITICAL` | [2-security-secure-setup.md](./rules/2-security-secure-setup.md) | Secure Setup | ตั้งค่า development environment ที่ปลอดภัย | `security-` | เมื่อ setup |
| 3 | `HIGH` | [3-security-secure-coding.md](./rules/3-security-secure-coding.md) | Secure Coding | เขียนโค้ดที่ปลอดภัยตาม best practices | `security-` | เมื่อเขียนโค้ด |
| 4 | `HIGH` | [4-security-testing.md](./rules/4-security-testing.md) | Security Testing | ทดสอบความปลอดภัยอย่างครอบคลุม | `security-` | เมื่อทดสอบ |
| 5 | `HIGH` | [5-security-vulnerability-management.md](./rules/5-security-vulnerability-management.md) | Vulnerability Management | จัดการ vulnerabilities และ patches | `security-` | เมื่อมี vulnerabilities |

## Knowledge

| Reference | Name | Description | Prefix |
| :--- | :--- | :--- | :--- |
| [core-concepts.md](./knowledge/core-concepts.md) | Core Concepts | ความรู้เกี่ยวกับ concepts หลักของ security | `security-` |
| [all-features.md](./knowledge/all-features.md) | All Features | ความรู้เกี่ยวกับฟีเจอร์ความปลอดภัยทั้งหมด | `security-` |
| [best-practices.md](./knowledge/best-practices.md) | Best Practices | best practices สำหรับ secure development | `security-` |

## Verification

1. ตรวจสอบว่า threat model ครอบคลุมทุก attack vectors
2. ทดสอบด้วย security tools และตรวจสอบว่าไม่มี critical vulnerabilities
3. ตรวจสอบว่า secure coding practices ถูกนำไปใช้จริง
4. ตรวจสอบว่า vulnerability management process ทำงานได้จริง
