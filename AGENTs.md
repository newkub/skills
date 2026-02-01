# AGENTs Management Skill

## When to Execute

Use this workflow when you need to:
- Create new skill documentation following strict standards
- Review and improve existing skill quality
- Ensure skills follow best practices and guidelines
- Validate skill structure and compliance
- Refactor skills into smaller, focused components
- Create review reports for skill assessment
- Update existing skill structures
- Standardize skill formats across the workspace
- Ensure quality compliance with skill guidelines

## Quick Start

Execute these steps to update skills:
1. Read current AGENTs.md requirements
2. Apply write-skills guidelines to all .md files
3. Update SKILL.md files with required sections
4. Verify compliance with standards

## ตารางสรุปแต่ละ file ตาม folder

| ประเภทไฟล์ | คำอธิบาย | กฎที่ต้องปฏิบัติ | ตำแหน่ง |
|-------------|----------|-----------------|---------|
| **SKILL.md** | เอกสารหลักของ skill | ต้องมี When to Execute, Quick Start, ตารางสรุป | ทุก skill folder |
| **.md อื่นๆ** | เอกสารรอง | ทำตาม write-skills guidelines | ทุกที่ |

## กฎการจัดการ Skills

### 1. สำหรับ SKILL.md ทุกไฟล์
- ต้องมีส่วน When to Execute ที่ชัดเจน
- ต้องมีส่วน Quick Start ที่กระชับ
- ต้องมีตารางสรุปข้อมูล
- ใช้ภาษาอังกฤษสำหรับเทคนิค

### 2. สำหรับ .md ทุกไฟล์นอกจาก SKILL.md
- ทำตาม write-skills guidelines
- ใช้ active voice เท่านั้น
- ประโยคสั้นกว่า 20 คำ
- มี verification steps ชัดเจน

### 3. มาตรฐานทั่วไป
- ใช้ markdown format ที่สอดคล้องกัน
- ระบุ file references อย่างถูกต้อง
- มี error handling guidance
- ทดสอบความสมบูรณ์ก่อนส่งมอบ

### 4. กฎเฉพาะสำหรับ Skills
- ทุก skills folder ต้องมี prefix
- ทุกครั้งที่แก้ไข skills ต้องทำตาม write-skills
- ไม่อนุญาตให้มี folder ที่ไม่มี prefix
- ต้องตรวจสอบความสอดคล้องของ prefix ก่อนสร้าง folder ใหม่

## ตารางสรุป Prefix ทั้งหมด

| Prefix | ความหมาย | จำนวน | ตัวอย่าง |
|--------|----------|--------|----------|
| **arch-** | Architecture rules & configs | 7 | arch-utils, arch-components |
| **config-** | Configuration files | 3 | config-package-json, config-nuxt-module |
| **db-** | Database systems | 1 | db-postgres |
| **framework-** | Frameworks | 6 | framework-next, framework-nuxt |
| **guide-** | Learning guides | 4 | guide-vibe-coding, guide-learn |
| **lang-** | Programming languages | 7 | lang-javascript, lang-rust |
| **lib-** | Libraries | 14 | lib-react, lib-vue, lib-biome, lib-oxlint, lib-dprint |
| **method-** | Methodologies & approaches | 8 | method-software-design, method-testing |
| **platform-** | Specific platforms | 2 | platform-browser-extensions |
| **sdk-** | Development kits | 3 | sdk-bun, sdk-node, sdk-rust |
| **system-** | System-related tools | 2 | system-personal-tools, system-validation |
| **tools-** | Development tools | 10 | tools-git, tools-turborepo |
| **write-** | Writing/documentation | 2 | write-skills, write-workflows |
