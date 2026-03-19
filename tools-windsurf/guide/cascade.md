# Cascade - AI Coding Assistant

> **Cascade** เป็น AI Coding Assistant ที่ทำงานภายใน Windsurf IDE ออกแบบมาเพื่อช่วยนักพัฒนาในการเขียนโค้ด แก้ไขปัญหา และจัดการโปรเจกต์

---

## 🎯 Overview

Cascade เป็น AI agent ที่ทำงานแบบ **pair programming** กับผู้ใช้ ผ่าน chat panel ใน IDE มีความสามารถในการ:

- อ่านและแก้ไขไฟล์โค้ด
- รันคำสั่งใน terminal
- ค้นหาและวิเคราะห์ codebase
- จัดการ memory และ context ระยะยาว
- ทำงานร่วมกับ external tools ผ่าน MCP servers

---

## 🧠 Core Architecture

### 1. System Prompt

- คำสั่งหลักที่กำหนดพฤติกรรมและความสามารถของ AI
- ส่งมาพร้อมกับทุก request
- รวมถึงรายการ tools ทั้งหมด (~50+ functions)
- กฎการสื่อสารและรูปแบบการตอบกลับ

### 2. Tools System

- **~50+ built-in tools** สำหรับทำงานต่างๆ
- แบ่งเป็นหมวดหมู่: Search, File Ops, Terminal, Browser, Memory, Deploy, MCP
- ดูรายละเอียดทั้งหมดได้ที่: [system-prompt.md](./system-prompt.md)

### 3. Memory System

- **Global Rules**: กฎที่ต้องปฏิบัติในทุก workspace
- **User Memories**: ความชอบและคำขอเฉพาะของผู้ใช้
- **Project Memories**: บริบทเฉพาะโปรเจกต์
- **Knowledge Graph**: Entities และ Relations ผ่าน MCP

### 4. Context Window

- **64,000 tokens** ต่อการตอบกลับ
- จัดการ context ผ่าน trajectory search และ memory

---

## 🛠️ Tools Categories

### 🔍 Search & Analysis

| Tool | Description |
|------|-------------|
| `grep_search` | ค้นหา pattern ด้วย ripgrep |
| `code_search` | Semantic search ด้วย AI subagent |
| `find_by_name` | หาไฟล์/โฟลเดอร์ด้วย fd |
| `list_dir` | ดูโครงสร้าง directory |
| `trajectory_search` | ค้นหาใน conversation history |

### 📝 File Operations

| Tool | Description |
|------|-------------|
| `read_file` | อ่านไฟล์ |
| `write_to_file` | สร้างไฟล์ใหม่ |
| `edit` | แก้ไขไฟล์ (single edit) |
| `multi_edit` | แก้ไขหลายจุดในไฟล์ |
| `read_notebook` | อ่าน .ipynb file |
| `edit_notebook` | แก้ไข Jupyter notebook |

### 🖥️ Terminal & Commands

| Tool | Description |
|------|-------------|
| `run_command` | รันคำสั่งใน terminal |
| `command_status` | ตรวจสอบสถานะ |
| `read_terminal` | อ่าน output |

### 🌐 Web & Browser (MCP5)

| Tool | Description |
|------|-------------|
| `browser_preview` | เปิด preview web server |
| `mcp5_browser_navigate` | Navigate ไป URL |
| `mcp5_browser_click` | Click element |
| `mcp5_browser_type` | พิมพ์ข้อความ |
| `mcp5_browser_snapshot` | Capture page snapshot |
| `mcp5_browser_take_screenshot` | ถ่าย screenshot |

### 🧠 Memory (MCP6)

| Tool | Description |
|------|-------------|
| `create_memory` | สร้าง/อัพเดท memory |
| `mcp6_read_graph` | อ่าน knowledge graph |
| `mcp6_search_nodes` | ค้นหา nodes |
| `mcp6_create_entities` | สร้าง entities |
| `mcp6_create_relations` | สร้าง relations |

---

## 📚 Skill System

Skill = ชุดความรู้เฉพาะทางที่ Cascade สามารถโหลดได้

### โครงสร้าง Skill

```text
skills/
├── framework-nuxt/        # ชื่อ skill
│   ├── SKILL.md            # เอกสารหลัก
│   ├── rules/              # กฎการใช้งาน
│   ├── workflows/          # automated routines
│   └── knowledge/          # ความรู้เพิ่มเติม
```

### การโหลด Skill

ใช้คำสั่ง `@skill-name` เช่น:

- `@framework-nuxt` - โหลดความรู้ Nuxt.js
- `@lib-drizzle` - โหลดความรู้ Drizzle ORM
- `@runtime-bun` - โหลดความรู้ Bun runtime

---

## 🔄 Workflow System

### Global Workflows

- อยู่ใน `global_workflows/`
- เรียกใช้ผ่าน **slash command** `/command-name`
- เช่น `/commit`, `/run-dev`, `/follow-nuxt`

### Skill Workflows

- อยู่ใน `workflows/` ของแต่ละ skill
- ทำงานเฉพาะด้าน เช่น `analyze-project`, `review-security`

### Auto-Execution Modes

| Mode | Description |
|------|-------------|
| 0 | Manual - ต้องรอ user approve |
| 1 | Semi-auto - บาง tool auto-run |
| 2 | Auto - รันอัตโนมัติถ้า safe |
| 3 | Full auto - รันทั้งหมด |

---

## 🔌 MCP Servers

Model Context Protocol (MCP) เชื่อมต่อกับ external services:

| Server | Function |
|--------|----------|
| **mcp1** | Cloudflare Documentation |
| **mcp2** | Context7 - Library docs |
| **mcp3** | DeepWiki - GitHub repos |
| **mcp5** | Playwright - Browser automation |
| **mcp6** | Memory - Knowledge graph |
| **mcp8** | Nuxt Documentation |

---

## 💬 Communication Style

### หลักการสื่อสาร

- **กระชับ**: ตอบตรงประเด็น ไม่พูดเยิ่นเย้อ
- **Proactive**: ลงมือทำถ้าชัดเจน ถามถ้าไม่แน่ใจ
- **Thai Language**: ตอบเป็นภาษาไทย (ตาม global rules)
- **Direct**: ไม่มี acknowledgment phrases เช่น "You're right!"

### Citation Format

อ้างอิงไฟล์ด้วยรูปแบบ:

```markdown
@/absolute/path/file.ext:1-3
@/absolute/path/file.ext:30
```

### Code Style

- Vue: `script setup lang="ts"` อยู่ด้านบน template
- Bun: ใช้ `bun` ไม่ใช้ `npm`
- Minimal edits: แก้ไขเฉพาะที่จำเป็น

---

## 🎛️ Configuration

### Global Rules

- ไฟล์: `memories/global_rules.md`
- กฎหลักที่ Cascade ต้องปฏิบัติทุกครั้ง
- Auto-loaded ในทุก conversation

### Project Structure

- Workspace หลัก: `skills/`
- Global workflows: `global_workflows/`
- Memories: `memories/`

---

## 🚀 Best Practices

### สำหรับการใช้งาน Cascade

1. **ใช้ @skill-name** เพื่อโหลดความรู้เฉพาะทาง
2. **ใช้ /command** สำหรับงานที่มี workflow อยู่แล้ว
3. **สร้าง memory** เมื่อต้องการให้จดจำระยะยาว
4. **ถามก่อนทำ** ถ้าคำสั่งไม่ชัดเจน
5. **ตรวจสอบ git** ก่อนเริ่มงานที่มีความเสี่ยง

### สำหรับการพัฒนา Skill/Workflow

1. สร้าง `SKILL.md` พร้อม frontmatter
2. ใช้ `file-patterns` สำหรับ auto-loading
3. แยก workflows เป็นไฟล์ย่อย
4. ระบุ `auto_execution_mode` ให้เหมาะสม
5. ทดสอบก่อนใช้งานจริง

---

## 📖 Related Documentation

- [System Tools Reference](./system-prompt.md)
- [Global Rules](../../memories/global_rules.md)
- [Windsurf Documentation](https://docs.windsurf.com)

---

## 🔗 Version

- **Last Updated**: March 2026
- **Cascade Version**: Current
- **Windsurf IDE**: Latest
