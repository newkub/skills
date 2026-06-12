---
name: software-testing
description: Software Testing - คู่มือการทดสอบซอฟต์แวร์ครอบคลุมหลักการ ประเภทของการทดสอบ เครื่องมือ และแนวทางปฏิบัติที่ดีในการสร้างซอฟต์แวร์ที่มีคุณภาพ
---

# Software Testing

คู่มือการทดสอบซอฟต์แวร์ครอบคลุมหลักการ ประเภทของการทดสอบ เครื่องมือ และแนวทางปฏิบัติที่ดีในการสร้างซอฟต์แวร์ที่มีคุณภาพ

## When to use

ใช้เมื่อต้องการ:
- เรียนรู้หลักการทดสอบซอฟต์แวร์
- เขียน tests ที่มีคุณภาพ
- เข้าใจ test pyramid และ test strategies
- ตั้งค่า testing framework
- รวม testing เข้ากับ CI/CD
- ปรับปรุง test coverage

## Skills Related

- `guide-programming` - สำหรับการเขียนโปรแกรมที่ดี
- `guide-design-patterns` - สำหรับ design patterns ที่ testable
- `guide-software-architecture` - สำหรับการออกแบบระบบที่ testable


## References


## หมวดหมู่ไฟล์

### guide/

| No | File | Description | Level |
|----|------|-------------|-------|
| 1 | [key-concept.md](guide/key-concept.md) | แนวคิดหลักของการทดสอบซอฟต์แวร์ | Basic |
| 2 | [how-it-works.md](guide/how-it-works.md) | การทำงานของระบบทดสอบ | Basic |
| 3 | [features.md](guide/features.md) | Features และประเภทของการทดสอบ | Basic |
| 4 | [configuration.md](guide/configuration.md) | การตั้งค่า test configuration | Basic |
| 5 | [quick-start.md](guide/quick-start.md) | เริ่มต้นเขียน test | Basic |
| 6 | [best-practices.md](guide/best-practices.md) | แนวทางการทดสอบที่ดี | Intermediate |
| 7 | [integration.md](guide/integration.md) | การรวมกับ CI/CD | Intermediate |
| 8 | [architecture.md](guide/architecture.md) | สถาปัตยกรรมของระบบทดสอบ | Advanced |

### references/

| No | File | Description | Language |
|----|------|-------------|----------|
| 9 | [website.md](references/website.md) | แหล่งข้อมูลอย่างเป็นทางการ | English |

## หัวข้อหลัก

- **Test Pyramid**: Unit → Integration → E2E
- **TDD**: Test-Driven Development
- **BDD**: Behavior-Driven Development
- **Mocking**: Simulating dependencies
- **Coverage**: Code coverage metrics