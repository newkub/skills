# Project Setup

## Description

ตั้งค่าโปรเจกต์ Bun SDK พร้อมโครงสร้างที่เหมาะสมและ dependencies ที่จำเป็น

## Examples

### สร้างโปรเจกต์ใหม่

```bash
# สร้าง folder โปรเจกต์
mkdir my-sdk && cd my-sdk

# เริ่มต้นโปรเจกต์ Bun
bun init

# ติดตั้ง dependencies พื้นฐาน
bun add -d @types/bun typescript
```

### สร้างโครงสร้าง folder

```bash
# สร้างโครงสร้างที่แนะนำ
mkdir -p src/{client,types,utils,errors} tests examples
```

## Anti-patterns

❌ ใช้ npm init แทน bun init  
❌ ไม่ติดตั้ง @types/bun  
❌ สร้าง folder ที่ไม่จำเป็นมากเกินไป
