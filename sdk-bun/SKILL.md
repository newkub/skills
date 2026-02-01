---
name: bun-sdk
description: พัฒนา SDK บน Bun runtime ด้วย TypeScript และ best practices
goal: สร้าง SDK ที่เร็ว ปลอดภัย และใช้งานง่ายบน Bun runtime
outcome: ได้ SDK ที่มีประสิทธิภาพสูง รองรับ TypeScript และพร้อมใช้งาน
---

# Bun SDK Development

พัฒนา SDK บน Bun runtime ด้วย TypeScript integration, package management และ performance optimization

## When to Use
- ต้องการสร้าง SDK สำหรับ API หรือ service
- ต้องการประสิทธิภาพสูงกว่า Node.js
- ต้องการ TypeScript support แบบ zero-config
- ต้องการรองรับทั้ง Node.js และ browser environments
- ต้องการลดขนาด bundle และเวลาติดตั้ง

## Quick Start

1. **สร้างโปรเจกต์**
   ```bash
   mkdir my-sdk && cd my-sdk
   bun init
   ```

2. **ติดตั้ง dependencies**
   ```bash
   bun add -d @types/bun typescript
   ```

3. **สร้างโครงสร้าง**
   ```bash
   mkdir -p src/{client,types,utils,errors} tests
   ```

4. **ตั้งค่า TypeScript**
   ```bash
   # ดู [rules/2-configuration.md](rules/2-configuration.md)
   ```

5. **เขียน SDK client**
   ```typescript
   // ดู [rules/3-usage.md](rules/3-usage.md)
   ```

## Rules

- [Project Setup](rules/1-setup.md) - ตั้งค่าโปรเจกต์และ dependencies
- [Configuration](rules/2-configuration.md) - ตั้งค่า TypeScript และ package.json
- [Usage Patterns](rules/3-usage.md) - patterns สำหรับการพัฒนา SDK

## Knowledge

- [Core Concepts](knowledge/core-concept.md) - แนวคิดพื้นฐานของ Bun SDK
- [All Features](knowledge/all-features.md) - ฟีเจอร์ทั้งหมดที่รองรับ
- [Performance Best Practices](knowledge/best-practices/performance.md) - การปรับประสิทธิภาพ

## Verification

1. **ตรวจสอบโครงสร้างโปรเจกต์**
   ```bash
   ls -la src/ tests/ rules/ knowledge/
   ```

2. **ทดสอบ TypeScript compilation**
   ```bash
   bun run src/index.ts
   ```

3. **ตรวจสอบการติดตั้ง dependencies**
   ```bash
   bun install
   ls node_modules/
   ```

4. **ทดสอบการ build**
   ```bash
   bun run build
   ls dist/
   ```

5. **รัน tests**
   ```bash
   bun test
   ```
