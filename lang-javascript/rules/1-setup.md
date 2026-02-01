# Project Setup

## Description
การตั้งค่าโปรเจกต์ JavaScript ให้มีโครงสร้างที่เป็นมาตรฐานและพร้อมใช้งาน

## Examples
```bash
# สร้างโปรเจกต์ใหม่
mkdir my-js-project
cd my-js-project
npm init -y

# ติดตั้ง dependencies พื้นฐาน
npm install --save-dev eslint prettier jest
```

## Anti-patterns
❌ ไม่มี `package.json` - จะไม่สามารถจัดการ dependencies ได้
❌ ใช้ global dependencies - ทำให้ project ไม่ portable
❌ ไม่มี version control - จะไม่สามารถ track changes ได้

## Verification
1. ตรวจสอบว่ามีไฟล์ `package.json` ใน project
2. ทดสอบการติดตั้ง dependencies ด้วย `npm install`
3. ยืนยันว่าสามารถรัน `npm test` ได้
