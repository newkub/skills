---
title: Zig Documentation Sitemap
description: แผนผังเอกสารและทรัพยากรของ Zig
---

# Zig Documentation Sitemap

แผนผังเอกสารและทรัพยากรของ Zig

## Official Documentation Structure

```
ziglang.org/
├── documentation/
│   ├── master/              # Documentation สำหรับ master branch
│   │   ├── std/            # Standard library API
│   │   ├── std/index.html  # Index ของ std lib
│   │   └── ...             # Modules ต่างๆ
│   └── 0.11.0/             # Documentation สำหรับ version 0.11.0
│       ├── std/
│       └── ...
├── download/               # Download page
│   ├── 0.11.0/             # Version specific downloads
│   │   ├── release-notes.html
│   │   └── ...
│   └── ...
└── learn/                  # Learning resources
```

## Standard Library Modules

### Core Modules

| Module | Path | Description |
|--------|------|-------------|
| std.mem | std/mem.zig | Memory operations |
| std.debug | std/debug.zig | Debug utilities |
| std.testing | std/testing.zig | Testing framework |
| std.fmt | std/fmt.zig | String formatting |
| std.hash | std/hash.zig | Hash functions |

### Data Structures

| Module | Path | Description |
|--------|------|-------------|
| std.ArrayList | std/array_list.zig | Dynamic array |
| std.HashMap | std/hash_map.zig | Hash map |
| std.StringHashMap | std/hash_map.zig | String hash map |
| std.BoundedArray | std/bounded_array.zig | Fixed-size array |

### I/O and File System

| Module | Path | Description |
|--------|------|-------------|
| std.fs | std/fs.zig | File system operations |
| std.io | std/io.zig | I/O streams |
| std.net | std/net.zig | Network operations |
| std.http | std/http.zig | HTTP client |

### Concurrency

| Module | Path | Description |
|--------|------|-------------|
| std.Thread | std/thread.zig | Threading |
| std.atomic | std/atomic.zig | Atomic operations |
| std.sync | std/sync.zig | Synchronization primitives |

### Platform Specific

| Module | Path | Description |
|--------|------|-------------|
| std.os | std/os.zig | OS abstractions |
| std.builtin | std/builtin.zig | Built-in types |
| std.target | std/target.zig | Target information |

## Documentation Navigation

### Getting Started

1. **Introduction** - ภาพรวมของ Zig
2. **Installation** - วิธีติดตั้ง
3. **Hello World** - โปรแกรมแรก
4. **Language Reference** - รายละเอียดภาษา

### Language Reference

1. **Introduction** - ภาพรวม
2. **Grammar** - Syntax และ grammar
3. **Style Guide** - รูปแบบโค้ด
4. **Memory** - Memory management
5. **Error Handling** - การจัดการ error

### Standard Library

1. **Overview** - ภาพรวม std lib
2. **Module Index** - รายการ modules
3. **API Reference** - API ทั้งหมด
4. **Examples** - ตัวอย่างการใช้งาน

## External Resources

### Learning Path

1. **Ziglings** - Exercise สำหรับเริ่มต้น
2. **Zig Learn** - Tutorial ครบถ้วน
3. **Zig Guide** - Guide สำหรับผู้เริ่มต้น
4. **Cookbook** - ตัวอย่าง patterns

### Community

1. **GitHub** - Source code และ issues
2. **Discord** - Real-time chat
3. **Forum** - คำถามและอภิปราย
4. **Reddit** - ข่าวสารและ discussions

## Version Information

- **Master Branch**: https://ziglang.org/documentation/master/
- **Stable (0.11.0)**: https://ziglang.org/documentation/0.11.0/
- **Previous Versions**: มีใน download page
