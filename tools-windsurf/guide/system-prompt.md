# Windsurf System Tools

> **Source**: ข้อมูลจาก System Prompt ที่ Cascade AI ได้รับในตอนเริ่มต้น conversation

---

## 🔍 Search & Analysis

| Tool | Description |
|------|-------------|
| `grep_search` | ค้นหา pattern ในไฟล์ด้วย ripgrep |
| `code_search` | Semantic search ด้วย AI subagent |
| `codebase_search` | Semantic search ใน repo |
| `view_code_item` | เปิดดู function/class |
| `find_by_name` | หาไฟล์หรือ symbol ด้วย fd |
| `list_dir` | ดู directory structure |
| `trajectory_search` | Search/retrieve conversation history |

---

## 📝 File Operations

| Tool | Description |
|------|-------------|
| `read_file` | อ่านไฟล์ |
| `write_to_file` | สร้างไฟล์ใหม่ |
| `edit` | แก้ไขไฟล์ (single edit) |
| `multi_edit` | แก้ไขหลายจุดในไฟล์ |
| `read_notebook` | อ่าน .ipynb file |
| `edit_notebook` | แก้ไข Jupyter notebook |

---

## 🖥️ Terminal & Commands

| Tool | Description |
|------|-------------|
| `run_command` | รันคำสั่งใน terminal |
| `command_status` | ตรวจสอบสถานะคำสั่ง |
| `read_terminal` | อ่าน output จาก terminal |

---

## 🧠 Memory & Knowledge

| Tool | Description |
|------|-------------|
| `create_memory` | สร้าง/อัพเดท memory |
| `mcp6_read_graph` | อ่าน knowledge graph |
| `mcp6_search_nodes` | ค้นหา nodes ใน knowledge graph |
| `mcp6_create_entities` | สร้าง entities ใหม่ |
| `mcp6_create_relations` | สร้าง relations ระหว่าง entities |
| `mcp6_add_observations` | เพิ่ม observations |

---

## 🌐 Web & Browser

| Tool | Description |
|------|-------------|
| `browser_preview` | เปิด preview web server |
| `read_url_content` | อ่านเนื้อหาจาก URL |
| `view_content_chunk` | ดู chunk ของ web content |
| `mcp5_browser_navigate` | Navigate ไป URL |
| `mcp5_browser_click` | Click element |
| `mcp5_browser_type` | พิมพ์ข้อความ |
| `mcp5_browser_snapshot` | Capture accessibility snapshot |
| `mcp5_browser_take_screenshot` | ถ่าย screenshot |
| `mcp5_browser_evaluate` | รัน JavaScript |
| `mcp5_browser_fill_form` | กรอก form |
| `mcp5_browser_wait_for` | รอ element หรือเวลา |

---

## 🚀 Deployment

| Tool | Description |
|------|-------------|
| `deploy_web_app` | Deploy web app (Netlify/Cloudflare) |
| `check_deploy_status` | เช็คสถานะ deployment |
| `read_deployment_config` | อ่าน deployment config |

---

## 🛠️ MCP Servers (External)

| Tool | Description |
|------|-------------|
| `mcp1_search_cloudflare_documentation` | Cloudflare docs |
| `mcp2_resolve-library-id` | Context7: resolve library ID |
| `mcp2_query-docs` | Context7: query documentation |
| `mcp3_read_wiki_structure` | DeepWiki: repo structure |
| `mcp3_read_wiki_contents` | DeepWiki: repo contents |
| `mcp3_ask_question` | DeepWiki: ask question |
| `mcp8_list-documentation-pages` | Nuxt docs: list pages |
| `mcp8_get-documentation-page` | Nuxt docs: get page |
| `mcp8_list-modules` | Nuxt docs: list modules |
| `mcp8_get-module` | Nuxt docs: get module |

---

## 📋 Utilities

| Tool | Description |
|------|-------------|
| `ask_user_question` | ถามผู้ใช้แบบมีตัวเลือก |
| `todo_list` | จัดการ todo list |
| `skill` | โหลด skill จาก workspace |
| `search_web` | Web search |

---

## 📝 Source Information

**ที่มาของข้อมูล**: System Tools ทั้งหมดนี้มาจาก **System Prompt** ที่ Cascade AI ได้รับในตอนเริ่มต้น conversation

**วิธีการตรวจสอบ**: สามารถดูรายการ tools ทั้งหมดได้จาก:

1. System Prompt ที่ส่งมาพร้อมกับทุก request
2. ไฟล์นี้ (`tools-windsurf/guide/system-prompt.md`)

**Note**: Tools อาจมีการเพิ่ม/ลด ตามการอัพเดทของ Windsurf IDE
