# React Migration Guide

## ภาพรวม

วิธีการ migrate ระหว่าง React versions และการอัปเกรด project

## Topics

- [Version Migration](migration/version-migration.md) - Migrate ระหว่าง React versions (เช่น 17 to 18)
- [Class to Hooks Migration](migration/class-to-hooks.md) - Migrate จาก class components เป็น functional components
- [Build Tool Migration](migration/build-tool-migration.md) - Migrate ระหว่าง build tools (CRA to Vite, Webpack to Vite)
- [State Management Migration](migration/state-management-migration.md) - Migrate ระหว่าง state management solutions
- [TypeScript Migration](migration/typescript-migration.md) - Migrate จาก JavaScript เป็น TypeScript
- [Testing Migration](migration/testing-migration.md) - Migrate ระหว่าง testing frameworks

## สรุป

Migration เป็น process ที่ต้องวางแผน:
1. Backup project ก่อนเริ่ม
2. Test migration ใน environment แยก
3. Migrate ทีละส่วน
4. Test thoroughly ก่อน deploy
