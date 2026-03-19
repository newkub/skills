# MCP Servers Reference

> รายละเอียด Model Context Protocol (MCP) Servers ที่ Windsurf รองรับ

---

## 🔌 อะไรคือ MCP?

**Model Context Protocol (MCP)** เป็นมาตรฐานที่เชื่อมต่อ AI กับ external tools และ data sources ผ่าน standardized interface

### ประโยชน์

- ขยายความสามารถ AI โดยไม่ต้องเขียน code เพิ่ม
- เข้าถึงข้อมูล real-time จาก external services
- ทำงานร่วมกับ tools ภายนอกได้หลากหลาย

---

## 📚 Available MCP Servers

### mcp1 - Cloudflare Documentation

**Function**: ค้นหา documentation ของ Cloudflare products

**Tools**:

- `mcp1_search_cloudflare_documentation` - Search docs

**Use Cases**:

- Workers, Pages, R2, D1, Durable Objects
- Zero Trust, Access, Tunnel
- CDN, Cache, DNS

**Example**:

```text
"How to deploy Nuxt app to Cloudflare Pages?"
→ mcp1_search_cloudflare_documentation
```

---

### mcp2 - Context7

**Function**: ค้นหา documentation และ code examples จาก libraries

**Tools**:

- `mcp2_resolve-library-id` - หา library ID
- `mcp2_query-docs` - ค้นหาใน documentation

**Use Cases**:

- หา API reference ของ libraries
- ดู code examples
- เรียนรู้ framework ใหม่

**Supported Libraries**: MongoDB, Next.js, Supabase, Express.js, React, และอื่นๆ

**Example**:

```text
"How to use JWT auth in Express.js?"
→ mcp2_resolve-library-id: "express"
→ mcp2_query-docs: "JWT authentication setup"
```

---

### mcp3 - DeepWiki

**Function**: AI-powered documentation สำหรับ GitHub repositories

**Tools**:

- `mcp3_read_wiki_structure` - ดู structure ของ repo docs
- `mcp3_read_wiki_contents` - อ่านเนื้อหา
- `mcp3_ask_question` - ถามคำถามเกี่ยวกับ repo

**Use Cases**:

- เข้าใจ open source projects
- หา patterns และ best practices
- เรียนรู้จากโค้ดของคนอื่น

**Example**:

```text
"Explain how React hooks work"
→ mcp3_ask_question: repo="facebook/react"
```

---

### mcp5 - Playwright

**Function**: Browser automation และ testing

**Tools**:

- `mcp5_browser_navigate` - เปิด URL
- `mcp5_browser_click` - Click element
- `mcp5_browser_type` - พิมพ์ข้อความ
- `mcp5_browser_fill_form` - กรอก form
- `mcp5_browser_evaluate` - รัน JavaScript
- `mcp5_browser_snapshot` - Capture page snapshot
- `mcp5_browser_take_screenshot` - ถ่าย screenshot
- `mcp5_browser_wait_for` - รอ element หรือเวลา

**Use Cases**:

- Web scraping
- E2E testing
- Debug web applications
- ตรวจสอบ UI แบบ visual

**Example**:

```javascript
// Navigate and screenshot
mcp5_browser_navigate: "https://example.com"
mcp5_browser_take_screenshot: "homepage.png"
```

---

### mcp6 - Memory

**Function**: Knowledge graph และ persistent memory

**Tools**:

- `mcp6_read_graph` - อ่าน knowledge graph ทั้งหมด
- `mcp6_search_nodes` - ค้นหา nodes
- `mcp6_open_nodes` - เปิด nodes ตามชื่อ
- `mcp6_create_entities` - สร้าง entities
- `mcp6_create_relations` - สร้าง relations
- `mcp6_add_observations` - เพิ่ม observations
- `mcp6_delete_entities` - ลบ entities
- `mcp6_delete_relations` - ลบ relations
- `mcp6_delete_observations` - ลบ observations

**Use Cases**:

- จดจำ entities (คน, ที่, สิ่งของ, concept)
- สร้าง relations ระหว่าง entities
- สร้าง knowledge graph ของ project
- จดจำบริบทระยะยาว

**Example**:

```text
Create entity: "Project X"
Type: "project"
Observations: ["ใช้ Nuxt.js", "มี API ที่ /api"]
```

---

### mcp8 - Nuxt Documentation

**Function**: เข้าถึง Nuxt framework documentation

**Tools**:

- `mcp8_get-getting-started-guide` - เริ่มต้นใช้งาน
- `mcp8_list-documentation-pages` - รายการ docs
- `mcp8_get-documentation-page` - อ่าน docs
- `mcp8_list-modules` - รายการ modules
- `mcp8_get-module` - ข้อมูล module
- `mcp8_list-blog-posts` - รายการ blog posts
- `mcp8_get-blog-post` - อ่าน blog post
- `mcp8_list-deploy-providers` - รายการ deploy providers
- `mcp8_get-deploy-provider` - ข้อมูล deploy provider
- `mcp8_get-changelog` - ดู changelog

**Use Cases**:

- พัฒนา Nuxt applications
- หา modules ที่เหมาะสม
- ดู deployment options

**Example**:

```text
"How to use Nuxt UI module?"
→ mcp8_get-module: "@nuxt/ui"
```

---

## 🎯 การเลือกใช้ MCP

### ตามประเภทงาน

| งาน | MCP ที่ใช้ |
|-----|------------|
| หา docs Cloudflare | mcp1 |
| หา docs library ทั่วไป | mcp2 |
| เข้าใจ GitHub repo | mcp3 |
| Automate browser | mcp5 |
| จัดการ knowledge | mcp6 |
| พัฒนา Nuxt | mcp8 |

### ตามสถานการณ์

**เริ่ม project ใหม่**:

1. mcp2 - หา framework docs
2. mcp3 - ศึกษา similar projects
3. mcp6 - สร้าง project knowledge

**พัฒนา feature**:

1. mcp2 - ดู API reference
2. mcp5 - Test UI (ถ้าต้องการ)
3. mcp6 - จดจำ decisions

**Debug & Fix**:

1. mcp3 - หา solutions จาก repos
2. mcp5 - Test แบบ visual
3. mcp6 - บันทึกปัญหาและวิธีแก้

---

## 💡 Best Practices

### 1. ใช้ MCP อย่างมีประสิทธิภาพ

- **ค้นหาก่อนถาม** - ใช้ search tools ก่อนจะถาม user
- **ผสมผสาน** - ใช้หลาย MCP ร่วมกันเพื่อผลลัพธ์ที่ดีที่สุด
- **จดจำผลลัพธ์** - บันทึกสิ่งที่ได้จาก MCP ลง memory

### 2. จัดการ Knowledge Graph

```text
# สร้าง entities ที่สำคัญ
- Projects
- Technologies
- People
- Decisions

# สร้าง relations
- Project USES Technology
- Decision IMPACTS Project
- Person KNOWS Technology
```

### 3. Browser Automation

```text
# ใช้เมื่อจำเป็น
- Test UI ที่ซับซ้อน
- Debug ปัญหาเฉพาะ
- Verify visual changes

# ระวัง
- Cookie walls
- Login requirements
- Rate limiting
```

---

## 🔧 Troubleshooting

### MCP ไม่ตอบสนอง

- ตรวจสอบ parameters ถูกต้องไหม
- ลอง query ที่ชัดเจนกว่า
- ใช้ multiple queries ถ้าผลลัพธ์ไม่ครบ

### Browser Automation ล้มเหลว

- ตรวจสอบ URL ถูกต้อง
- รอให้ page load ก่อน interact
- ใช้ snapshot เพื่อ debug

### Knowledge Graph ซับซ้อนเกินไป

- แบ่ง entities เป็นหมวดหมู่
- ลบ relations ที่ไม่จำเป็น
- ใช้ search แทนการ browse ทั้งหมด

---

## 📖 Related

- [System Tools](./system-prompt.md)
- [Best Practices](./best-practices.md)
- [Troubleshooting](./troubleshooting.md)
