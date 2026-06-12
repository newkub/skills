---
name: lang-zig
description: แนวทางการพัฒนา Zig ตาม best practices สำหรับ systems programming ที่เน้นความเรียบง่าย, performance และ memory safety โดยไม่มี hidden control flow หรือ hidden allocations
---

# lang-zig

## When to Use

- Systems programming (OS, drivers, embedded systems)
- Game development และ game engines
- CLI tools และ command-line applications
- WebAssembly development
- C/C++ interoperability
- โปรเจกต์ที่ต้องการ control สูงและ zero hidden costs
- Cross-compilation ที่ไม่ต้องการ dependencies มากมาย

## Skills Related

- `lang-c` - C interoperability
- `lang-cpp` - C++ interoperability

## หมวดหมู่ไฟล์

### knowledge/guide/

| No | File | Description |
|----|------|-------------|
| 1 | key-concept.md | แนวคิดหลักของ Zig (comptime, defer, allocator, error handling) |
| 2 | how-it-works.md | วิธีการทำงานของ Zig compiler และ build system |
| 3 | features.md | คุณสมบัติหลักของ Zig (optional, unions, slices, errors) |
| 4 | installation.md | วิธีติดตั้ง Zig และ tools ที่เกี่ยวข้อง |
| 5 | configuration.md | การตั้งค่า build.zig และ Zig Language Server |
| 6 | quick-start.md | เริ่มต้นใช้งาน Zig อย่างรวดเร็ว |
| 7 | best-practices.md | best practices สำหรับ Zig (naming, safety, patterns) |
| 8 | integration.md | การเชื่อมต่อกับ C/C++ และ tools |
| 9 | architecture.md | สถาปัตยกรรมของ Zig projects |

### knowledge/key-concepts/

| No | File | Description |
|----|------|-------------|
| 1 | comptime.md | Comptime programming และ compile-time execution |
| 2 | allocator.md | Memory allocation patterns และ allocators |
| 3 | error-handling.md | Error handling patterns และ unions |

### references/

| No | File | Description |
|----|------|-------------|
| 1 | website.md | ลิงก์ไปยังเว็บไซต์และเอกสารอย่างเป็นทางการ |
| 2 | cli.md | Zig CLI commands และ options |
| 3 | configuration.md | build.zig configuration options |

## Core Features

- **No Hidden Control Flow**: ทุกอย่างเขียนอย่างชัดเจน
- **Comptime**: Compile-time code execution และ metaprogramming
- **Explicit Memory Allocation**: ควบคุม memory allocation ได้เอง
- **Optional Types**: `?T` สำหรับ nullable types
- **Error Unions**: `anyerror!T` สำหรับ error handling
- **Defer**: Resource cleanup ที่ชัดเจน
- **Cross-compilation**: รองรับหลาย platforms โดยไม่ต้อง setup ยุ่งยาก
- **C Interop**: เรียก C libraries ได้โดยตรง