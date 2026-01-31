# Agent Browser Skill

## When to Apply

ใช้เมื่อต้องการ automate หรือ debug บน browser ด้วย Agent Browser

- ต้องการทดสอบ E2E บน web application
- ต้องการทำ web scraping หรือเก็บข้อมูลจากเว็บ
- ต้องการทำงานซ้ำๆ บน browser โดยอัตโนมัติ
- ต้องการ debug ปัญหาที่เกิดขึ้นบน browser

## Rule Categories by Priority

| Priority | Category | Impact | Prefix |
| :--- | :--- | :--- | :--- |
| 1 | Browser Debugging | `HIGH` | `debug-` |
| 2 | File System Debugging | `HIGH` | `debug-` |
| 3 | Terminal Debugging | `HIGH` | `debug-` |
| 4 | Process Debugging | `HIGH` | `debug-` |
| 5 | Network Debugging | `HIGH` | `debug-` |
| 6 | Memory Debugging | `HIGH` | `debug-` |
| 7 | Performance Debugging | `HIGH` | `debug-` |
| 8 | Logging & Tracing | `HIGH` | `debug-` |

## Quick Reference

### 1. Browser Debugging (`HIGH`)

- `debug-browser` - Debug บน browser ด้วย Agent Browser

### 2. File System Debugging (`HIGH`)

- `debug-file-system` - Debug file system ด้วย exa, rg, fd, ast-grep

### 3. Terminal Debugging (`HIGH`)

- `debug-terminal` - Debug ใน terminal (Node.js, Bun debugger)

### 4. Process Debugging (`HIGH`)

- `debug-process` - Debug process และ monitoring

### 5. Network Debugging (`HIGH`)

- `debug-network` - Debug network และ HTTP requests

### 6. Memory Debugging (`HIGH`)

- `debug-memory` - Debug memory leaks และ heap profiling

### 7. Performance Debugging (`HIGH`)

- `debug-performance` - Debug performance และ CPU profiling

### 8. Logging & Tracing (`HIGH`)

- `debug-logging` - Logging และ tracing

## How to Use

แต่ละไฟล์ Rule ประกอบด้วย:
- **Rationale**: เหตุผลและความสำคัญของ Rule
- **Good Practice**: ตัวอย่างโค้ดที่ถูกต้อง
- **Usage**: วิธีการใช้งาน
- **References**: ลิงก์ไปยังเอกสารอ้างอิง

ตัวอย่าง Link ไปยังไฟล์ Rule:
- [`./rules/debug-browser.md`](./rules/debug-browser.md)
- [`./rules/debug-file-system.md`](./rules/debug-file-system.md)
- [`./rules/debug-terminal.md`](./rules/debug-terminal.md)
- [`./rules/debug-process.md`](./rules/debug-process.md)
- [`./rules/debug-network.md`](./rules/debug-network.md)
- [`./rules/debug-memory.md`](./rules/debug-memory.md)
- [`./rules/debug-performance.md`](./rules/debug-performance.md)
- [`./rules/debug-logging.md`](./rules/debug-logging.md)
