# Troubleshooting Guide

> แนวทางการแก้ไขปัญหาที่พบบ่อยใน Windsurf และ Cascade

---

## 🐛 ปัญหาทั่วไป

### 1. Cascade ไม่เข้าใจคำสั่ง

**อาการ**: AI ตอบไม่ตรงกับที่ต้องการ หรือถามซ้ำๆ

**แก้ไข**:

- เขียน prompt ให้ชัดเจนขึ้น - ระบุ technology, scope, format
- ใช้ `@skill-name` เพื่อโหลด context ที่เหมาะสม
- แบ่งคำสั่งเป็นขั้นตอนเล็กๆ

**ตัวอย่าง**:

```text
# ไม่ชัดเจน
"แก้โค้ดให้หน่อย"

# ชัดเจน
"@framework-nuxt ในไฟล์ @/components/UserCard.vue แก้ไข prop validation 
ให้รองรับ null value ด้วย optional chaining"
```

---

### 2. Tools ไม่ทำงานตามที่คาดหวัง

**อาการ**: `read_file`, `edit` หรือ tools อื่นๆ ไม่สำเร็จ

**แก้ไข**:

| ปัญหา | แก้ไข |
|-------|--------|
| `read_file` ไม่เจอไฟล์ | ตรวจสอบ absolute path |
| `edit` ไม่ match | ตรวจสอบว่า `old_string` ตรงกับไฟล์เป๊ะ |
| `run_command` ไม่ผ่าน | เช็ค error message และ cwd |
| `find_by_name` ไม่เจอ | ลองเปลี่ยน pattern หรือ check directory |

---

### 3. Context Window เต็ม

**อาการ**: AI ตอบสั้น ลืมบริบทก่อนหน้า หรือขอให้ทบทวน

**แก้ไข**:

- สร้าง **memory** สำหรับข้อมูลสำคัญ
- ใช้ **trajectory_search** ค้นหาใน conversation history
- เริ่ม conversation ใหม่ถ้า context ยาวมาก
- แบ่งงานเป็นส่วนเล็กๆ

---

### 4. Workflow ไม่รันอัตโนมัติ

**อาการ**: ใช้ `/command` แล้วไม่เกิดอะไรขึ้น

**แก้ไข**:

1. ตรวจสอบว่า workflow อยู่ใน `global_workflows/`
2. เช็ค frontmatter ถูกต้องไหม:

   ```yaml
   ---
   description: ...
   title: ...
   auto_execution_mode: 3
   ---
   ```

3. ดูว่ามี `file-patterns` match กับไฟล์ที่เปิดอยู่ไหม

---

## 🔧 การ Debug Tools

### ตรวจสอบ Tool Results

```text
# ถ้า read_file ไม่ได้
1. ตรวจสอบ path - ต้องเป็น absolute path
2. ใช้ list_dir เพื่อดูว่าไฟล์อยู่จริงไหม
3. ตรวจสอบ file encoding

# ถ้า edit ไม่ได้
1. อ่านไฟล์ใหม่อีกครั้ง (อาจมีคนแก้ไปแล้ว)
2. ตรวจสอบ whitespace, tabs vs spaces
3. ใช้ multi_edit แทนถ้าต้องแก้หลายจุด
```

### ใช้ Command Status

```text
# รันคำสั่งแบบ non-blocking
run_command: bun run dev (blocking: false)

# เช็ค status ทีหลัง
command_status: ดูว่า server ยังรันอยู่ไหม
```

---

## 🧠 Memory Issues

### Memory ไม่ถูกโหลด

**สาเหตุ**:

- Memory tags ไม่ตรงกับที่ search
- Corpus name ไม่ถูกต้อง

**แก้ไข**:

```yaml
# ตรวจสอบว่า tags ตรงกับที่ search
create_memory:
  tags: [vue, nuxt, project-x]  # ต้องตรงกับคำค้น

# ตรวจสอบ CorpusNames
CorpusNames: ["newkub/skills"]  # ต้องตรงกับ workspace
```

### Knowledge Graph ไม่ทำงาน

**ตรวจสอบ**:

1. MCP server mcp6 ทำงานไหม
2. Entities ถูกสร้างด้วย `mcp6_create_entities` หรือยัง
3. Relations ถูกสร้างด้วย `mcp6_create_relations` หรือยัง

---

## 🌐 Browser Automation มีปัญหา

### Playwright (MCP5) ไม่ทำงาน

**อาการ**: `mcp5_browser_navigate` timeout หรือ error

**แก้ไข**:

1. ตรวจสอบ URL ถูกต้องไหม
2. ลอง `mcp5_browser_wait_for` เพื่อรอ page load
3. ใช้ `mcp5_browser_snapshot` ดูว่า element มีอยู่จริงไหม
4. ตรวจสอบว่าไม่มี cookie/login wall

---

## 📝 Skill Development Issues

### Skill ไม่ถูกโหลด

**ตรวจสอบ**:

1. ชื่อ skill ถูกต้องไหม (`@skill-name`)
2. มีไฟล์ `SKILL.md` อยู่ในโฟลเดอร์หรือไม่
3. SKILL.md มี frontmatter ไหม

### Workflow Naming

**ปัญหา**: ชื่อ workflow ไม่ตรงกับ convention

**แก้ไข**:

```text
ถูกต้อง: 01-setup.md, 02-analyze.md, 03-execute.md
ไม่ถูกต้อง: setup.md, analyze-code.md
```

---

## 🔥 Emergency Fixes

### กู้คืนจากการแก้ไขผิด

1. **ใช้ Git**:

   ```bash
   git checkout -- filename  # ยกเลิกการแก้ไข
   git reset HEAD~1 --soft  # ยกเลิก commit ล่าสุด
   ```

2. **ถ้าไม่มี Git**:
   - ใช้ `read_file` ดูว่าแก้ไขอะไรไป
   - ใช้ `edit` เพื่อ revert กลับ

### ติด Loop หรือ Frozen

- หยุด conversation และเริ่มใหม่
- ลด context โดยการสร้าง memory สำหรับข้อมูลสำคัญ
- แบ่งงานเป็นชิ้นเล็กๆ

---

## 📞 Getting Help

ถ้าแก้ไขไม่ได้:

1. **อ่าน documentation**:
   - [System Tools](./system-prompt.md)
   - [Best Practices](./best-practices.md)

2. **ตรวจสอบ examples**:
   - ดูจาก skills ที่มีอยู่แล้ว
   - ศึกษา workflows ที่ทำงานได้

3. **สร้าง minimal reproduction**:
   - แยกปัญหาออกมาเป็นตัวอย่างเล็กๆ
   - ทดสอบใน project ใหม่

---

## ✅ Checklist ก่อนถาม

- [ ] อ่าน error message อย่างละเอียด
- [ ] ตรวจสอบ paths ว่าถูกต้อง
- [ ] เช็คว่า tools ถูกใช้ตาม spec
- [ ] ดู memory/knowledge ที่เกี่ยวข้อง
- [ ] ลอง restart conversation ถ้า context ยาว
