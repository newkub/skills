# Windsurf Best Practices

> แนวทางการใช้งาน Windsurf IDE และ Cascade AI อย่างมีประสิทธิภาพ

---

## 🎯 หลักการทั่วไป

### 1. ใช้ Skill ให้เหมาะสม

- **โหลด skill ก่อนเริ่มงาน** - ใช้ `@skill-name` เพื่อโหลดความรู้เฉพาะทาง
- **เลือก skill ตามงาน** - เช่น `@framework-nuxt` สำหรับ Nuxt, `@lib-drizzle` สำหรับ database
- **ตรวจสอบ skill structure** - เข้าใจว่า skill มี rules, workflows, knowledge อะไรบ้าง

### 2. ใช้ Workflow เป็นระบบ

- **ใช้ slash commands** - `/commit`, `/run-dev`, `/follow-nuxt` แทนการพิมพ์คำสั่งยาว
- **สร้าง workflow สำหรับงานซ้ำ** - ถืองานไหนทำบ่อย ให้สร้างเป็น workflow
- **ตั้งค่า auto-execution** - ใช้ mode ที่เหมาะสมกับความเสี่ยงของงาน

### 3. จัดการ Context อย่างมีประสิทธิภาพ

- **สร้าง memory สำหรับข้อมูลสำคัญ** - ใช้ `create_memory` เพื่อจดจำระยะยาว
- **ใช้ trajectory_search** - ค้นหาใน conversation history แทนการถามซ้ำ
- **แบ่งงานเป็นส่วนเล็กๆ** - ช่วยให้ context ไม่เกิน limit

---

## 📝 การเขียน Prompt

### Prompt ที่มีประสิทธิภาพ

```text
# ดี ✅
"สร้าง API endpoint สำหรับ user authentication ด้วย Elysia + Drizzle 
โดยมี login, register, logout พร้อม JWT validation"

# ไม่ดี ❌
"ทำ auth ให้หน่อย"
```

### หลักการเขียน

1. **ระบุ technology stack** ชัดเจน
2. **บอก scope ของงาน** - อยากได้อะไรบ้าง
3. **ให้ context ที่จำเป็น** - เช่น link ไฟล์ที่เกี่ยวข้อง
4. **ระบุ format ที่ต้องการ** - เช่น "สร้างเป็น composable"

---

## 🔧 การใช้ Tools

### 1. ค้นหาข้อมูล

| สถานการณ์ | Tool ที่ใช้ |
|-----------|-------------|
| รู้ชื่อไฟล์/โฟลเดอร์ | `find_by_name` |
| ค้นหา pattern ในโค้ด | `grep_search` |
| ไม่รู้ว่าอยู่ไหน | `code_search` |
| ดูโครงสร้าง project | `list_dir` |

### 2. แก้ไขไฟล์

| สถานการณ์ | Tool ที่ใช้ |
|-----------|-------------|
| สร้างไฟล์ใหม่ | `write_to_file` |
| แก้ไขจุดเดียว | `edit` |
| แก้ไขหลายจุด | `multi_edit` |
| ลบแล้วสร้างใหม่ | `write_to_file` (overwrite) |

### 3. Terminal Commands

| สถานการณ์ | คำสั่ง |
|-----------|--------|
| รัน dev server | `bun run dev` |
| ติดตั้ง dependencies | `bun install` |
| รัน tests | `bun test` |
| build project | `bun run build` |

---

## 🧠 Memory Management

### ควรสร้าง Memory เมื่อ

- **User preferences** - ความชอบเฉพาะบุคคล
- **Project conventions** - กฎเฉพาะโปรเจกต์
- **Important decisions** - การตัดสินใจสำคัญที่ต้องจดจำ
- **Technical constraints** - ข้อจำกัดทางเทคนิค

### หลักการตั้งชื่อ Memory

```yaml
# ดี ✅
title: "Project API Conventions"
tags: [api, conventions, project-x]

# ไม่ดี ❌
title: "Stuff to remember"
tags: [misc]
```

---

## 🌐 MCP Server Usage

### เลือก MCP ให้เหมาะกับงาน

| งาน | MCP Server |
|-----|------------|
| หา docs Cloudflare | mcp1 |
| หา docs library ต่างๆ | mcp2 (Context7) |
| ศึกษา GitHub repo | mcp3 (DeepWiki) |
| Automate browser | mcp5 (Playwright) |
| จัดการ knowledge | mcp6 (Memory) |
| หา docs Nuxt | mcp8 |

---

## 🔄 Workflow Development

### โครงสร้างที่ดี

```yaml
---
description: สั้น กระชับ บอกว่าทำอะไร
title: workflow-name
auto_execution_mode: 3  # หรือตามความเหมาะสม
file-patterns:
  - "**/*.ts"  # ถ้าต้องการ auto-load
---

## 1. Phase Name

ขั้นตอนที่ 1...

## 2. Phase Name

ขั้นตอนที่ 2...
```

### Naming Convention

- **01-[name]** - Prepare Phase
- **02-[name]** - Analyze Phase
- **03-[name]** - Execute Phase
- **04-[name]** - Validate Phase
- **05-[name]** - Verify Phase
- **06-[name]** - Finish Phase
- **07-[name]** - Special

---

## ⚡ Performance Tips

### 1. ลด Context Window Usage

- ใช้ `read_file` กับ `limit` parameter เมื่อไฟล์ใหญ่
- ใช้ `grep_search` แทน `code_search` ถ้ารู้ pattern
- สร้าง memory แทนการอธิบายซ้ำ

### 2. เร่งความเร็วการทำงาน

- ใช้ `multi_edit` แทน `edit` หลายครั้ง
- ใช้ `bun` แทน `npm` - เร็วกว่ามาก
- ใช้ `/command` แทนการอธิบายยาว

### 3. จัดการ Git อย่างมีประสิทธิภาพ

- ใช้ `/commit` สำหรับ conventional commits
- สร้าง feature branch ด้วย `/git-create-feature-branch`
- ตรวจสอบ git status ก่อนเริ่มงานใหญ่

---

## 🛡️ Safety Guidelines

### ก่อนรันคำสั่ง

1. **ตรวจสอบว่า safe** - `run_command` ไม่ auto-run ถ้าไม่ safe
2. **อ่านก่อนแก้ไข** - ต้อง `read_file` ก่อน `edit`
3. **สำรองข้อมูลสำคัญ** - commit ก่อนเริ่มงานใหญ่
4. **ทดสอบก่อน deploy** - ใช้ `/run-verify`

### การใช้ Auto-execution

| Mode | เหมาะกับ | ความเสี่ยง |
|------|----------|------------|
| 0 | งานสำคัญ/ซับซ้อน | ต่ำ |
| 1 | งานปกติ | ปานกลาง |
| 2 | งาน routine | ปานกลาง |
| 3 | งานที่ทำบ่อยมาก | สูง |

---

## 📚 Related

- [System Tools](./system-prompt.md)
- [Cascade Overview](./cascade.md)
- [Troubleshooting](./troubleshooting.md)
