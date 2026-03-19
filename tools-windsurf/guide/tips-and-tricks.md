# Tips and Tricks

> เคล็ดลับการใช้งาน Windsurf และ Cascade ให้มีประสิทธิภาพสูงสุด

---

## ⚡ ความเร็วและประสิทธิภาพ

### 1. ใช้ Bun แทน NPM

```bash
# เร็วกว่ามาก
bun install    # แทน npm install
bun run dev    # แทน npm run dev
bun test       # แทน npm test
```

### 2. ใช้ Multi Edit

แก้ไขหลายจุดในครั้งเดียว:

```text
แทนที่จะ:
- edit (ครั้งที่ 1)
- edit (ครั้งที่ 2)
- edit (ครั้งที่ 3)

ใช้:
- multi_edit ครั้งเดียว หลายจุด
```

### 3. จำกัด Context

อ่านไฟล์ใหญ่แบบ partial:

```text
read_file:
  offset: 1
  limit: 50    # อ่านแค่ 50 บรรทัดแรก
```

---

## 🎯 Prompt Engineering

### 1. ใช้ @ Citation

อ้างอิงไฟล์ให้ชัดเจน:

```text
"ในไฟล์ @/src/utils/auth.ts แก้ไข function login..."
```

### 2. ระบุ Scope ชัดเจน

```text
# ดี ✅
"สร้าง composable สำหรับจัดการ form validation ด้วย Zod 
รองรับ reactive form และ async validation"

# ไม่ดี ❌
"ทำ form validation"
```

### 3. ใช้ Skill Prefix

```text
@framework-vue อยากให้ช่วย...
@lib-drizzle ตั้งค่า...
@runtime-bun รัน...
```

---

## 🔄 ทำงานซ้ำให้เร็วขึ้น

### 1. สร้าง Snippet Commands

ใช้ `/command` บ่อยๆ:

```text
/commit          # commit แบบ conventional
/run-dev         # รัน dev server
/follow-nuxt     # ตั้งค่า Nuxt
/analyze-project # วิเคราะห์โครงสร้าง
```

### 2. ใช้ Turbo Mode

เพิ่ม `// turbo` ใน workflow:

```markdown
1. รัน linter
// turbo
2. แก้ไข error
```

### 3. สร้าง Template

สร้างไฟล์ template สำหรับงานที่ทำบ่อย:

```text
skills/
└── templates/
    ├── vue-component.md
    ├── api-route.md
    └── test-file.md
```

---

## 🧠 จัดการ Memory อย่างชาญฉลาด

### 1. สร้าง Memory สำคัญ

ควรสร้างเมื่อ:

- ตัดสินใจสำคัญกับโปรเจกต์
- User มีความชอบเฉพาะ
- พบวิธีแก้ปัญหาที่ใช้ซ้ำได้

### 2. ตั้งชื่อ Memory ให้ดี

```yaml
# ดี ✅
title: "API Error Handling Pattern"
tags: [api, error-handling, pattern]

# ไม่ดี ❌
title: "Some stuff"
tags: [misc]
```

### 3. ใช้ Knowledge Graph

สร้าง entities และ relations:

```text
Project A USES Technology B
Technology B HAS_DOCUMENTATION url
Decision C IMPACTS Project A
```

---

## 🔍 ค้นหาและวิเคราะห์

### 1. เลือก Tool ให้เหมาะ

| สถานการณ์ | Tool |
|-----------|------|
| รู้ชื่อไฟล์ | `find_by_name` |
| ค้นหา pattern | `grep_search` |
| ไม่รู้ว่าอยู่ไหน | `code_search` |
| ดูโครงสร้าง | `list_dir` |

### 2. ใช้ Grep อย่างมีประสิทธิภาพ

```text
# หา function
"function validateUser|const validateUser ="

# หา component
"export default|defineComponent"

# หา specific pattern
"useState.*user|useUser"
```

### 3. ใช้ MCP ค้นหา Docs

```text
# หา docs library
mcp2_query-docs: "How to use X"

# ศึกษา repo
mcp3_ask_question: "Explain Y"
```

---

## 🌐 Browser Automation

### 1. Debug อย่างรวดเร็ว

```text
1. navigate ไป URL
2. snapshot ดู structure
3. ถ่าย screenshot เก็บไว้
4. evaluate รัน JavaScript
```

### 2. รองรับ Loading

```text
# รอให้ element ปรากฏ
mcp5_browser_wait_for: "element" หรือเวลา

# แล้วค่อย interact
mcp5_browser_click
```

### 3. ตรวจสอบ State

ใช้ `evaluate` เพื่อดู state:

```javascript
// ดู console errors
() => { return window.errors; }

// ดู current URL
() => { return window.location.href; }
```

---

## 🛡️ Safety และ Quality

### 1. ตรวจสอบก่อนทำ

```text
ก่อน edit: read_file ก่อนเสมอ
ก่อน delete: confirm กับ user
ก่อน deploy: รัน tests ให้ผ่าน
```

### 2. ใช้ Git อย่างชาญฉลาด

```text
ก่อนงานใหญ่: git status
ระหว่างทำ: commit บ่อยๆ
เสร็จแล้ว: /commit-and-push
```

### 3. Test ก่อนเชื่อ

```text
แก้ไข code → รัน tests
ตั้งค่าใหม่ → ทดสอบ
refactor → ยืนยันว่าทำงานได้
```

---

## 📝 Code Style

### 1. Vue Components

```vue
<script setup lang="ts">
// Script อยู่ด้านบน
</script>

<template>
  <!-- Template อยู่ด้านล่าง -->
</template>
```

### 2. TypeScript

```typescript
// ระบุ type ชัดเจน
function greet(name: string): string {
  return `Hello, ${name}`;
}

// ใช้ interface สำหรับ complex objects
interface User {
  id: number;
  name: string;
}
```

### 3. Minimal Edits

แก้ไขเฉพาะที่จำเป็น:

```text
# ดี ✅
แก้แค่บรรทัดที่ผิด

# ไม่ดี ❌
Reformat ทั้งไฟล์
ลบ comment ทั้งหมด
```

---

## 🎨 Workflow Development

### 1. Naming Convention

```text
01-setup.md      # Prepare
02-analyze.md    # Analyze
03-execute.md    # Execute
04-validate.md   # Validate
```

### 2. ใช้ Subfolders

```text
02-analyze.md           # Overview
02-analyze/
  01-code.md            # Code analysis
  02-deps.md            # Dependencies
```

### 3. Frontmatter ครบถ้วน

```yaml
---
description: คำอธิบายสั้นๆ
title: workflow-name
auto_execution_mode: 3
file-patterns:
  - "**/*.ts"
---
```

---

## 🚀 ประสิทธิภาพสูงสุด

### รวมเทคนิคที่ดีที่สุด

1. **เริ่มด้วย Skill** - โหลด context ที่เหมาะสม
2. **ใช้ `/command`** - แทนการอธิบายยาว
3. **สร้าง Memory** - จดจำสิ่งสำคัญ
4. **ใช้ `// turbo`** - Auto-run ที่ปลอดภัย
5. **ตรวจสอบบ่อย** - รัน tests, check status
6. **Commit สม่ำเสมอ** - เก็บ changes บ่อยๆ
7. **ใช้ MCP** - หา docs อย่างรวดเร็ว
8. **จำกัด Context** - อ่านเฉพาะที่จำเป็น
9. **Multi Edit** - แก้ไขหลายจุดพร้อมกัน
10. **Use Bun** - เร็วกว่า npm

---

## 📖 Related

- [Best Practices](./best-practices.md)
- [Examples](./examples.md)
- [Troubleshooting](./troubleshooting.md)
