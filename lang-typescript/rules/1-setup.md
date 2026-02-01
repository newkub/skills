## Setup

ตั้งค่า TypeScript project ใหม่ด้วยวิธีที่ถูกต้อง

### Description
สร้าง TypeScript project จากเริ่มต้นด้วย configuration ที่เหมาะสม

### Examples
```bash
npm init -y
npm install typescript --save-dev
npx tsc --init
```

### Anti-patterns
- ไม่ตั้งค่า tsconfig.json
- ใช้ default options ทั้งหมด
- ไม่กำหนด target และ module

### Rules
1. ต้องติดตั้ง TypeScript เป็น devDependency
2. ต้องสร้าง tsconfig.json
3. ต้องกำหนด target และ module ที่เหมาะสม
4. ต้องเปิดใช้ strict mode
