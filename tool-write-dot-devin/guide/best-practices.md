# Best Practices

## Rules

### 1. Content Language

เนื้อหาทั้งหมดใน `.devin/` ต้องเป็นภาษาอังกฤษ

- Rules เขียนเป็นภาษาอังกฤษ
- Hooks เขียนเป็นภาษาอังกฤษ
- Workflows เขียนเป็นภาษาอังกฤษ

### 2. Minimal Configuration

สร้าง configuration เฉพาะที่จำเป็น:

- ไม่ต้องสร้าง rules ที่ไม่จำเป็น
- ใช้ global rules เมื่อเป็นไปได้
- ปรับแต่งตามความต้องการของ project

### 3. Consistency

รักษาความสม่ำเสมอ:

- ใช้ naming conventions เดียวกัน
- ใช้ structure เดียวกัน
- ทำตามมาตรฐาน workflow

## Hooks

### 1. Automation

ใช้ hooks สำหรับ automation:

- Pre-commit hooks สำหรับ validation
- Post-commit hooks สำหรับ notifications
- Custom hooks สำหรับ project-specific automation

### 2. Performance

Hooks ต้องทำงานเร็ว:

- หลีกเลี่ยง operations ที่ใช้เวลานาน
- ใช้ caching เมื่อเป็นไปได้
- ทำงานแบบ asynchronous เมื่อเป็นไปได้
