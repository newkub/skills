# lang-zig

## Overview

แนวทางการพัฒนา Zig ตาม best practices สำหรับ systems programming ที่เน้นความเรียบง่าย, performance และ memory safety โดยไม่มี hidden control flow หรือ hidden allocations

## Directory Structure

```
lang-zig/
├── SKILL.md
├── guide/
│   ├── key-concept.md
│   ├── how-it-works.md
│   ├── features.md
│   ├── installation.md
│   ├── configuration.md
│   ├── quick-start.md
│   ├── best-practices.md
│   ├── integration.md
│   └── architecture.md
├── key-concepts/
│   ├── comptime.md
│   ├── allocator.md
│   └── error-handling.md
└── references/
    └── website.md
```

## File Categories

### guide/

| File | Description |
|------|-------------|
| key-concept.md | แนวคิดหลักของ Zig ( comptime, defer, allocator, error handling) |
| how-it-works.md | วิธีการทำงานของ Zig compiler และ build system |
| features.md | คุณสมบัติหลักของ Zig (optional, unions, slices, errors) |
| installation.md | วิธีติดตั้ง Zig และ tools ที่เกี่ยวข้อง |
| configuration.md | การตั้งค่า build.zig และ Zig Language Server |
| quick-start.md | เริ่มต้นใช้งาน Zig อย่างรวดเร็ว |
| best-practices.md | best practices สำหรับ Zig (naming, safety, patterns) |
| integration.md | การเชื่อมต่อกับ C/C++ และ tools |
| architecture.md | สถาปัตยกรรมของ Zig projects |

### key-concepts/

| File | Description |
|------|-------------|
| comptime.md | Comptime programming และ compile-time execution |
| allocator.md | Memory allocation patterns และ allocators |
| error-handling.md | Error handling patterns และ unions |

### references/

| File | Description |
|------|-------------|
| website.md | ลิงก์ไปยังเว็บไซต์และเอกสารอย่างเป็นทางการ |

## When to Use

- Systems programming (OS, drivers, embedded systems)
- Game development และ game engines
- CLI tools และ command-line applications
- WebAssembly development
- C/C++ interoperability
- โปรเจกต์ที่ต้องการ control สูงและ zero hidden costs
- Cross-compilation ที่ไม่ต้องการ dependencies มากมาย

## Core Features

- **No Hidden Control Flow**: ทุกอย่างเขียนอย่างชัดเจน
- **Comptime**: Compile-time code execution และ metaprogramming
- **Explicit Memory Allocation**: ควบคุม memory allocation ได้เอง
- **Optional Types**: `?T` สำหรับ nullable types
- **Error Unions**: `anyerror!T` สำหรับ error handling
- **Defer**: Resource cleanup ที่ชัดเจน
- **Cross-compilation**: รองรับหลาย platforms โดยไม่ต้อง setup ยุ่งยาก
- **C Interop**: เรียก C libraries ได้โดยตรง