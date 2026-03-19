# File Naming Conventions

## กฎการตั้งชื่อไฟล์มาตรฐาน

### หลักการพื้นฐาน

1. **kebab-case** - ใช้ตัวพิมพ์เล็กและขีดต่อ
2. **Descriptive** - ชื่อต้องบอกว่าไฟล์นี้ทำอะไร
3. **Consistent** - ใช้รูปแบบเดียวกันทั่วทั้ง skill
4. **No Spaces** - ห้ามใช้ space หรือ special characters

### Naming Patterns ตาม Directory

| Directory | Pattern | ตัวอย่าง | คำอธิบาย |
|-----------|----------|-------------|-------------|
| `execute/1-rules/` | `[number]-[topic].md` | `1-setup.md`, `2-usage.md` | กฎและมาตรฐาน |
| `execute/2-templates/` | `[type]-template.md` | `skill-template.md` | เทมเพลต |
| `execute/3-examples/` | `[number]-[topic].md` | `1-write-skills.md` | ตัวอย่าง |
| `knowledge/` | `[type]-[concept].md` | `core-concept.md` | แนวคิด |
| `reference/` | `[type].md` | `examples.md`, `external.md` | แหล่งอ้างอิง |
| `examples/` | `[level]-[type]/` | `basic-spa/`, `advanced-cli/` | ตัวอย่างโปรเจกต์ |

### ห้ามทำ

- ❌ ใช้ space: `file name.md`
- ❌ ใช้ underscore: `file_name.md`
- ❌ ใช้ camelCase: `fileName.md`
- ❌ ใช้ตัวพิมพ์ใหญ่: `File-Name.md`
- ❌ ใช้ special chars: `file@name.md`

### ต้องทำ

- ✅ ใช้ kebab-case: `file-name.md`
- ✅ ชื่อสื่อความหมาย: `setup-guide.md`
- ✅ สั้นกระชับ: `api-reference.md`
- ✅ สอดคล้องกับ content: `installation-steps.md`
