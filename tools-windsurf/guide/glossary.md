# Glossary

> คำศัพท์เฉพาะทางใน Windsurf และ Cascade

---

## A

### Agent

AI ที่ทำงานแทน user ตามคำสั่ง เช่น Cascade

### Auto-execution Mode

ระดับการทำงานอัตโนมัติของ AI (0-3)

- 0: Manual (ต้อง approve ทุก step)
- 1: Semi-auto (บาง tool auto-run)
- 2: Auto (auto-run ถ้า safe)
- 3: Full auto (auto-run ทั้งหมด)

---

## B

### Bun

JavaScript runtime ที่เร็วกว่า Node.js ใช้ใน Windsurf

---

## C

### Cascade

AI Coding Assistant ของ Windsurf IDE

### Citation

รูปแบบการอ้างอิงไฟล์ เช่น `@/path/file.ts:1-10`

### Context Window

ขนาดข้อมูลที่ AI จำได้ในหนึ่งครั้ง (64K tokens)

### Corpus

Workspace หรือ project ที่ AI ทำงานอยู่

---

## E

### Entity

Object ใน Knowledge Graph (คน, ที่, สิ่งของ, concept)

---

## F

### File Pattern

Pattern สำหรับระบุไฟล์ เช่น `"**/*.ts"`

### Frontmatter

ส่วนหัว YAML ของไฟล์ markdown ใน workflows

---

## G

### Global Rules

กฎที่ Cascade ต้องปฏิบัติในทุก workspace

### Global Workflow

Workflow ที่ใช้ได้ทุก project ผ่าน `/command`

---

## K

### Knowledge Graph

ระบบเก็บ entities และ relations ผ่าน MCP6

---

## M

### MCP (Model Context Protocol)

มาตรฐานเชื่อมต่อ AI กับ external tools

### Memory

ระบบจดจำข้อมูลระยะยาวของ Cascade

### Multi-edit

Tool สำหรับแก้ไขหลายจุดในไฟล์พร้อมกัน

---

## R

### Relation

ความสัมพันธ์ระหว่าง entities ใน Knowledge Graph

---

## S

### Skill

ชุดความรู้เฉพาะทางที่ Cascade โหลดได้ เช่น `@framework-nuxt`

### Skill Workflow

Workflow ที่อยู่ใน skill เฉพาะทาง

### Slash Command

คำสั่งเริ่มต้นด้วย `/` เช่น `/commit`, `/run-dev`

### System Prompt

คำสั่งหลักที่กำหนดพฤติกรรมของ AI

---

## T

### Tags

คำสำคัญสำหรับจัดหมวดหมู่ memory

### Tool

Function ที่ AI เรียกใช้งาน เช่น `read_file`, `edit`

### Trajectory

ประวัติการสนทนาและการกระทำของ AI

### Turbo Mode

การทำงาน auto-run ใน workflow ด้วย `// turbo`

---

## W

### Workflow

ชุดคำสั่งอัตโนมัติสำหรับทำงานเป็นระบบ

### Workspace

Project หรือ directory ที่ AI กำลังทำงาน

---

## ใช้ร่วมกัน

| คำศัพท์ | ใช้ในบริบท |
|---------|------------|
| `@skill-name` | โหลด skill |
| `/command` | เรียก global workflow |
| `// turbo` | Auto-run step |
| `corpus` | Workspace |
| `entity` | Knowledge graph node |
| `relation` | Knowledge graph edge |
