---
name: vite-core-principle
description: หลักการสำคัญของ Vite
---

# Vite Core Principles

## 1. Native ES Modules

Vite ใช้ ES Modules เป็นหลักใน development:
- Browser สามารถโหลด ES modules โดยตรง
- ไม่ต้อง bundle ใน development
- เริ่ม server ได้ทันที

## 2. Dev Server First

ออกแบบโดยเน้นประสบการณ์ development:
- Server เริ่มทำงานทันที
- HMR ที่รวดเร็ว
- Source Maps ที่แม่นยำ

## 3. Build Optimized

Production build ใช้ Rollup:
- Code Splitting อัตโนมัติ
- Tree Shaking
- Minification
- Preloading

## 4. Convention over Configuration

ตั้งค่า default ที่ดี:
- ไม่ต้อง config มากมาย
- แต่ยังยืดหยุ่นเมื่อจำเป็น
- Best practices ในตัว

## 5. Performance First

เน้นประสิทธิภาพ:
- Fast cold start
- Fast HMR
- Fast builds
- Small bundle sizes

## 6. Ecosystem Compatibility

ใช้ Rollup plugin ecosystem:
- ใช้ plugins ที่มีอยู่แล้ว
- เขียน plugins ง่าย
- ขยายความสามารถได้
