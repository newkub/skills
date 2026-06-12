# Key Concepts

## .devin Structure

`.devin` directory เป็น configuration สำหรับ Devin/Cascade AI assistant ใน project workspace

### ส่วนประกอบหลัก

- **rules/** - Rules สำหรับ AI behavior
- **hooks/** - Automation hooks สำหรับ events ต่างๆ
- **workflows/** - Custom workflows สำหรับ automation
- **memory/** - Project-specific memory และ context

## Project Rules

Rules คือคำสั่งที่กำหนด behavior ของ AI assistant:

- กำหนด coding standards
- กำหนด architecture patterns
- กำหนด best practices
- กำหนด project-specific conventions

## Project Hooks

Hooks คือ automation ที่ทำงานตาม events:

- Pre-commit hooks
- Post-commit hooks
- File change hooks
- Custom event hooks
