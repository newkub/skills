---
name: tool-nextest
description: Next-generation test runner for Rust with faster execution, per-test isolation, and CI support
---

## When to use

- เมื่อต้องการ test runner ที่เร็วกว่า cargo test
- เมื่อต้องการ per-test isolation
- เมื่อต้องการ CI support ระดับหนึ่ง
- เมื่อต้องการ retry policies และ test groups

## Skills Related

- `/lang-rust` - Rust programming language
- `/tool-cargo` - Cargo package manager


## References


## หมวดหมู่ไฟล์

| หมวดหมู่ | ไฟล์ | คำอธิบาย |
|-----------|------|-----------|
| **guide/** | key-concept.md | แนวคิดหลักของ Nextest และความแตกต่างจาก cargo test |
| | how-it-works.md | วิธีการทำงานของ Nextest พร้อม diagram |
| | features.md | ฟีเจอร์หลัก เช่น test isolation, retry policies, test groups |
| | installation.md | วิธีติดตั้งและ setup |
| | configuration.md | การตั้งค่าผ่าน .config/nextest.toml |
| | quick-start.md | เริ่มต้นใช้งานอย่างรวดเร็ว |
| | best-practices.md | best practices สำหรับการใช้งาน Nextest |
| | integration.md | การเชื่อมต่อกับ CI/CD และ tools อื่นๆ |
| **references/** | website.md | เว็บไซต์อย่างเป็นทางการและเอกสาร |
| | cli.md | CLI commands และ options |
| | configuration.md | Configuration options และ profiles |
