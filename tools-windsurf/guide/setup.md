# Setup Guide

> เริ่มต้นใช้งาน Windsurf และ Cascade ครั้งแรก

---

## 🚀 Prerequisites

### 1. ติดตั้ง Windsurf IDE

- ดาวน์โหลดจาก [windsurf.com](https://windsurf.com)
- ติดตั้งบน Windows/macOS/Linux
- ลงชื่อเข้าใช้ด้วย Codeium account

### 2. ติดตั้ง Bun (Required)

```bash
# Windows (PowerShell)
powershell -c "irm bun.sh/install.ps1 | iex"

# macOS/Linux
curl -fsSL https://bun.sh/install | bash
```

Verify:

```bash
bun --version  # ควรแสดง version
```

### 3. ติดตั้ง Git

```bash
# Windows - ใช้ git-scm.com หรือ winget
winget install Git.Git

# macOS
brew install git

# Linux
sudo apt install git
```

---

## 📁 Project Structure

### โครงสร้างที่แนะนำ

```text
project/
├── src/               # โค้ดหลัก
├── tests/             # ไฟล์ทดสอบ
├── docs/              # เอกสาร
├── .windsurf/         # Windsurf configuration
├── package.json
└── README.md
```

### สำหรับ Skills Repository

```text
skills/
├── learn-*/           # Learning skills
├── framework-*/       # Framework skills
├── lib-*/             # Library skills
├── runtime-*/         # Runtime skills
├── global_workflows/  # Global workflows
└── memories/          # Memories
```

---

## ⚙️ ตั้งค่าเริ่มต้น

### 1. Windsurf Settings

เปิด IDE settings (Ctrl+,):

```json
{
  "windsurf.autoExecutionMode": 2,
  "windsurf.enableMemory": true,
  "windsurf.preferredPackageManager": "bun"
}
```

### 2. สร้าง Global Rules

สร้างไฟล์ `memories/global_rules.md`:

```markdown
---
title: Global Rules
description: กฎหลักสำหรับ AI assistant
auto_execution_mode: 3
file-patterns:
  - "**/*.md"
---

## Prerequisites

- ใช้ bun เท่านั้น
- ตอบเป็นภาษาไทย
- อ่าน skill ก่อนทำงาน
```

### 3. ตั้งค่า Git

```bash
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
git config --global init.defaultBranch main
```

---

## 🧪 ทดสอบการตั้งค่า

### 1. สร้าง Project ทดสอบ

```bash
# สร้างโฟลเดอร์
mkdir test-project
cd test-project

# เริ่ม git
git init

# สร้าง package.json
echo '{"name": "test"}' > package.json
```

### 2. ทดสอบ Cascade

ใน Windsurf chat พิมพ์:

```text
"สวัสดี ช่วย list files ในโปรเจกต์นี้"
```

Cascade ควร:

- ตอบกลับเป็นภาษาไทย
- ใช้ `list_dir` เพื่อดูไฟล์
- แสดงผลสรุป

### 3. ทดสอบ Bun

```bash
bun --version
bun install  # ถ้ามี package.json
```

---

## 📚 เริ่มใช้งานจริง

### 1. สร้าง Project ใหม่

```text
User: สร้าง Bun + TypeScript project

Cascade:
1. mkdir my-project && cd my-project
2. bun init -y
3. ตั้งค่า tsconfig.json
4. สร้าง src/index.ts
```

### 2. ใช้ Skill ครั้งแรก

```text
User: @framework-nuxt ช่วยตั้งค่า Nuxt project

Cascade จะ:
1. โหลด skill framework-nuxt
2. ตั้งค่าตาม best practices
3. สร้างโครงสร้างพื้นฐาน
```

### 3. ใช้ Workflow ครั้งแรก

```text
User: /commit

Cascade จะ:
1. ดู git status
2. stage changes
3. สร้าง conventional commit
4. ถาม confirm ก่อน commit
```

---

## 🔧 การตั้งค่า Advanced

### 1. Custom Workflows

สร้างไฟล์ใน `global_workflows/custom-command.md`:

```yaml
---
description: คำสั่งเฉพาะของฉัน
title: my-command
auto_execution_mode: 2
---

## 1. ทำสิ่งที่ 1

## 2. ทำสิ่งที่ 2
```

### 2. สร้าง Skill ของตัวเอง

```text
skills/
└── my-custom-skill/
    ├── SKILL.md
    └── workflows/
        └── my-workflow.md
```

### 3. ตั้งค่า MCP Servers

เพิ่มใน Windsurf settings:

```json
{
  "mcp.servers": {
    "mcp1": { "enabled": true },
    "mcp2": { "enabled": true },
    "mcp5": { "enabled": true }
  }
}
```

---

## 🎯 Checklist การ Setup

- [ ] ติดตั้ง Windsurf IDE
- [ ] ติดตั้ง Bun
- [ ] ติดตั้ง Git
- [ ] ตั้งค่า Git user
- [ ] สร้าง global_rules.md
- [ ] ทดสอบ Cascade ทำงาน
- [ ] ทดสอบ Bun รันได้
- [ ] ลองใช้ @skill-name
- [ ] ลองใช้ /command
- [ ] สร้าง project แรก

---

## 🆘 แก้ปัญหาเบื้องต้น

### Cascade ไม่ตอบสนอง

1. รีสตาร์ท Windsurf
2. ตรวจสอบ internet connection
3. ลอง chat ใหม่

### Bun ไม่ทำงาน

```bash
# Windows - เพิ่มใน PATH
$env:PATH += ";C:\Users\<username>\.bun\bin"

# macOS/Linux
export PATH="$HOME/.bun/bin:$PATH"
```

### Skill ไม่โหลด

- ตรวจสอบชื่อ skill ถูกต้อง
- เช็คว่ามีไฟล์ SKILL.md
- ลองโหลดใหม่

---

## 📖 Next Steps

1. อ่าน [Best Practices](./best-practices.md)
2. ดู [Examples](./examples.md)
3. เรียนรู้ [Workflows](./workflows.md)
4. ศึกษา [MCP Servers](./mcp-servers.md)

---

## 🔗 Resources

- [Windsurf Docs](https://docs.windsurf.com)
- [Bun Docs](https://bun.sh/docs)
- [Codeium Support](https://codeium.com/support)

---

**Ready to go!** 🚀
