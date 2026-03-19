# Advanced Usage

> Use cases ซับซ้อนและเทคนิคขั้นสูง

---

## 🏗️ Multi-Repository Workflows

### ทำงานกับหลาย repos พร้อมกัน

```text
# โครงสร้าง
projects/
├── frontend-app/     # Nuxt frontend
├── backend-api/      # Elysia API
└── shared-lib/       # Shared utilities
```

### การใช้

1. **เปิด workspace หลัก** ที่มีทุก repo
2. **ใช้ absolute paths** เมื่ออ้างอิง:

   ```text
   "แก้ไข @/frontend-app/components และ @/backend-api/routes"
   ```

3. **สร้าง memory** สำหรับแต่ละ repo:

   ```yaml
   title: "Frontend Architecture"
   tags: [frontend, nuxt, architecture]
   ```

---

## 🔌 Custom MCP Integration

### สร้าง MCP Server ของตัวเอง

```typescript
// server.ts
import { Server } from "@modelcontextprotocol/sdk/server";

const server = new Server({
  name: "my-mcp",
  version: "1.0.0"
}, {
  capabilities: {
    resources: {},
    tools: {}
  }
});

// Register tools
server.setRequestHandler("tools/list", async () => {
  return {
    tools: [
      {
        name: "my_tool",
        description: "My custom tool",
        inputSchema: { /* ... */ }
      }
    ]
  };
});
```

### เชื่อมต่อกับ Windsurf

```json
{
  "mcp.servers": {
    "my-mcp": {
      "enabled": true,
      "url": "http://localhost:3000"
    }
  }
}
```

---

## 🧠 Advanced Knowledge Graph

### สร้าง Complex Relations

```text
Project A
├── USES Technology B
├── USES Technology C
├── OWNED_BY Team D
└── HAS_REQUIREMENT Feature E

Technology B
├── HAS_DOCUMENTATION url
├── COMPATIBLE_WITH Technology F
└── REQUIRES Dependency G
```

### Query Knowledge Graph

```javascript
// หา technologies ที่ project ใช้
mcp6_search_nodes: "Technology"
→ กรองจาก relations "USES"

// หา dependencies ทั้งหมด
mcp6_search_nodes: "Dependency"
```

---

## 🔄 Complex Workflows

### Conditional Workflow

```markdown
---
description: Conditional workflow
title: conditional-example
auto_execution_mode: 2
---

## 1. Check Condition

ตรวจสอบสภาพแวดล้อม:

- ถ้าเป็น Node.js project → ไป step 2a
- ถ้าเป็น Bun project → ไป step 2b

## 2a. Node.js Setup

// turbo

```bash
npm install
```
```


```text

```text

```text

## 2b. Bun Setup

// turbo

```bash
bun install
```

```text

### Loop Workflow

```markdown
## 1. Initialize

ตั้งค่าเริ่มต้น

## 2. Process Loop

ทำซ้ำจนครบ:
1. ดึงข้อมูล
2. ประมวลผล
3. บันทึกผล
4. ถ้ายังไม่ครบ → กลับไป 1

## 3. Finalize

สรุปผล
```

---

## 🔗 API Integration

### เรียก External APIs

```text
User: ดึงข้อมูลจาก https://api.example.com/users

Cascade:
1. read_url_content: "https://api.example.com/users"
2. ประมวลผลข้อมูล
3. สร้างไฟล์หรือแสดงผล
```

### ใช้กับ Browser Automation

```text
1. mcp5_browser_navigate: "https://dashboard.example.com"
2. mcp5_browser_fill_form: login credentials
3. mcp5_browser_click: login button
4. mcp5_browser_evaluate: ดึงข้อมูล
5. ประมวลผลใน Cascade
```

---

## 📝 Dynamic Content Generation

### สร้างไฟล์ตาม Template

```javascript
// template-component.txt
<script setup lang="ts">
interface Props {
  {{props}}
}

defineProps<Props>();
</script>
```

### ใช้กับ Cascade

```text
"สร้าง component Button ด้วย props: label, onClick, disabled"

Cascade:
1. อ่าน template
2. แทนที่ {{props}} ด้วยจริง
3. write_to_file: Button.vue
```

---

## 🎯 Performance Optimization

### Parallel Tool Execution

```text
# ดี ✅ - เรียกพร้อมกันได้
grep_search: pattern1
grep_search: pattern2
find_by_name: pattern3

# ไม่ดี ❌ - รอลำดับ
edit: file1
edit: file2  # ต้องรอ 1 เสร็จก่อน
```

### Batch Operations

```text
# ใช้ multi_edit แทน edit หลายครั้ง
multi_edit:
  - file1: แก้ไข A
  - file1: แก้ไข B
  - file1: แก้ไข C
```

---

## 🔒 Security Best Practices

### Safe Command Execution

```text
ก่อนรัน command อันตราย:
1. อ่านเนื้อหาให้ user ดูก่อน
2. ถาม confirm
3. รันเมื่อได้รับอนุญาต
```

### Secret Management

```text
ไม่เก็บ secrets ใน:
- Memory (ถ้าไม่เข้ารหัส)
- Code files
- Logs

ใช้:
- Environment variables
- .env files (gitignored)
- Secret management services
```

---

## 🧪 Testing Workflows

### Automated Test Flow

```markdown
---
description: Automated testing workflow
title: auto-test
auto_execution_mode: 2
---

## 1. Run Unit Tests

// turbo

```bash
bun test
```
```

```text


```text

```text

## 2. Run Integration Tests

// turbo

```bash
bun test:integration
```

## 3. Check Coverage

ถ้า coverage < 80% → แจ้งเตือน

## 4. Report

สรุปผลการทดสอบ

```text

---

## 🚀 CI/CD Integration

### GitHub Actions + Windsurf

```yaml
# .github/workflows/ai-assisted.yml
name: AI Assisted CI
on: [push]

jobs:
  ai-check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Windsurf CLI
        run: |
          # ติดตั้ง Windsurf CLI
          curl -fsSL https://windsurf.com/install | bash
      - name: Run AI Analysis
        run: |
          windsurf /analyze-project
```

---

## 📊 Analytics & Monitoring

### Track AI Usage

```text
สร้าง memory:
title: "AI Usage Stats"
observations:
  - "2024-01-15: 50 prompts, 200 tool calls"
  - "2024-01-16: 30 prompts, 150 tool calls"
```

### Performance Metrics

```text
ติดตาม:
- Response time
- Tool success rate
- Context window usage
- Memory efficiency
```

---

## 🔗 Related

- [Best Practices](./best-practices.md)
- [Tips and Tricks](./tips-and-tricks.md)
- [MCP Servers](./mcp-servers.md)
