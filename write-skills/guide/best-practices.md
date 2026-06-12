# Best Practices for Writing Skills

## การเขียน Skills ตามมาตรฐาน

### 1. Research Before Writing

วิจัยข้อมูลก่อนเขียนทุกครั้งเพื่อให้ content ถูกต้องและเป็นปัจจุบัน

- ทำ `/deep-research` สำหรับค้นหาข้อมูล
- ค้นหาใน package registries ตามภาษา
- ใช้ DeepWiki สำหรับ GitHub repositories
- ใช้ Context7 สำหรับ library documentation
- ตรวจสอบ source reputation และ information freshness
- สรุป findings ก่อนเขียน

### 2. Content Quality

เขียน content ตามมาตรฐาน quality

- ปรับปรุง spacing, indentation, headings ให้สม่ำเสมอ
- ปรับปรุง headings เป็น Title Case (EN) และรายการเป็น TH
- ปรับปรุงความชัดเจนและความเข้าใจง่าย
- ปรับปรุงคำศัพท์ให้สม่ำเสมอ
- ตรวจสอบความถูกต้องของข้อมูลตาม principle + references
- ปรับปรุง grouping + hierarchy ให้ชัดเจน
- ตรวจสอบ content กับเว็บไซต์จริงด้วย `/deep-research`

### 3. Folder Structure

สร้าง folder ตามลำดับเพื่อให้ structure สม่ำเสมอและ deterministic

- `SKILL.md` - REQUIRED
- `guide/` - REQUIRED
- `key-concepts/` - OPTIONAL
- `principles/` - OPTIONAL
- `references/` - REQUIRED
- `workflows/` - REQUIRED
- `templates/` - OPTIONAL
- `scripts/` - OPTIONAL (TypeScript scripts)
- `.devin/` - REQUIRED (structure และ templates สำหรับ skill type นั้นๆ)

### 4. SKILL.md Structure

เขียน SKILL.md เป็น index file ที่ครบถ้วนและอ่านง่าย







- เพิ่ม frontmatter (`title`, `description`, `auto_execution_mode`) ที่ด้านบนสุด
- เพิ่ม `## When to use` เป็น bullet list อธิบาย use cases
- เพิ่ม `## Skills Related` เป็น bullet list พร้อม backticks และ `/`
- เพิ่ม `## References` พร้อม `### <folder>` และตารางไฟล์
- ตารางมี columns: No, File, Description
- เรียงลำดับตามการใช้งาน
- จัดกลุ่มตาม folder

### 5. Single Responsibility Files

แยกไฟล์ตาม responsibilities

- ไฟล์มีหน้าที่เดียว
- หลีกเลี่ยงรวมหลายหัวข้อ
- แยกไฟล์ตามความเฉพาะเจาะจง
- ชื่อไฟล์สะท้อนหน้าที่

### 6. Naming Conventions

ตั้งชื่อไฟล์และ folders ให้สอดคล้องกับมาตรฐาน

- ใช้ kebab-case สำหรับไฟล์และ folders
- ตั้งชื่อไฟล์ให้ขึ้นต้นด้วย `update-` สำหรับไฟล์ที่เป็นการอัปเดตในโครงสร้าง Directory
- ชื่อไฟล์สะท้อนหน้าที่ของไฟล์
- ใช้ภาษาอังกฤษสำหรับชื่อไฟล์

### 7. Documentation Standards

เขียน documentation ตามมาตรฐาน

- ใช้ภาษาไทยสำหรับ guide/, key-concepts/, principles/, workflows/
- ใช้ภาษาอังกฤษสำหรับ references/
- เพิ่ม examples ที่เข้าใจง่าย
- อธิบาย concepts ที่ซับซ้อนอย่างชัดเจน
- ใช้ formatting ที่สม่ำเสมอ
