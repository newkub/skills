# ESLint

ESLint เป็น linting tool สำหรับ JavaScript และ TypeScript ที่ช่วยตรวจสอบ code quality, find bugs, และ enforce coding conventions รองรับ plugin system และ auto-fix capabilities

## Directory Structure

```text
tool-eslint/
├── guide/
│   ├── key-concept.md
│   ├── how-it-works.md
│   ├── features.md
│   ├── installation.md
│   ├── configuration.md
│   ├── quick-start.md
│   ├── best-practices.md
│   └── integration.md
├── references/
│   ├── website.md
│   ├── cli.md
│   └── configuration.md
└── SKILL.md
```

## File Categories

| Folder | Description |
|--------|-------------|
| **guide/** | คู่มือการใช้งานและ best practices |
| **references/** | เอกสารอ้างอิง CLI และ configuration |

## คุณสมบัติหลัก

- **Static Analysis**: วิเคราะห์ code โดยไม่ต้อง run
- **Auto-fix**: แก้ไขปัญหาอัตโนมัติเมื่อทำได้
- **Plugin System**: รองรับ plugins มากมาย (TypeScript, React, Vue)
- **ESLint Flat Config**: รูปแบบ config ใหม่ที่ยืดหยุ่นกว่า
- **Extends**: สามารถ extends จาก preset configs
- **Severity Levels**: กำหนด severity ได้ (off, warn, error)
- **Cache**: เร่งความเร็วด้วยการ cache ผลลัพธ์
- **Output Formats**: รองรับหลาย output formats

## เมื่อใดควรใช้

- ต้องการ maintain code quality ใน project
- ต้องการ enforce coding standards
- ต้องการ catch bugs ก่อน commit
- ต้องการ auto-format code
- ต้องการ integrate กับ CI/CD

## ลิงก์อ้างอิง

- [หน้าเว็บหลัก](https://eslint.org)
- [เอกสาร](https://eslint.org/docs/)
- [Config Guide](https://eslint.org/docs/latest/use/configure/)
- [Plugin List](https://eslint.org/community/)
- [Playground](https://eslint.org/play/)