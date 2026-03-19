---
trigger: manual
description: ตรวจสอบ CLI tools และ package managers ที่ติดตั้งในระบบ
instruction:
  - ตรวจสอบ CLI tools ที่ติดตั้งด้วย package managers ต่างๆ
  - แสดงรายการ packages ที่ติดตั้งทั้ง global และ local
  - ใช้คำสั่งที่เหมาะสมกับแต่ละ package manager
---

## 1. ตรวจสอบ CLI tools ที่ติดตั้ง (ใช้เสมอ)

1.1. ตรวจสอบ packages ที่ติดตั้งด้วย Scoop

```bash
scoop list
```

1.2. ตรวจสอบ Bun packages ทั้ง global

```bash
bun pm ls -g
```

1.3. ตรวจสอบ Rust packages ที่ติดตั้งด้วย cargo

```bash
cargo install --list
```

1.4. ตรวจสอบ packages ที่ติดตั้งด้วย winget

```bash
winget list
```

1.5. ตรวจสอบ tools ที่จัดการด้วย mise

```bash
mise list
```
