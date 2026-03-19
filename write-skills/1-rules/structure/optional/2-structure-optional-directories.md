# Optional Directories

## ไดเรกทอรีเสริมที่เพิ่มตามความจำเป็น

### Execute Structure

```
skill-name/
└── execute/                    # การดำเนินการ
    ├── 1-rules/               # กฎและมาตรฐาน
    ├── 2-templates/           # เทมเพลต
    └── 3-examples/            # ตัวอย่าง
```

### Additional Optional Directories

```
skill-name/
├── examples/                   # Optional: Project examples
├── templates/                  # Optional: Code templates
├── patterns/                   # Optional: Design patterns
├── guide/                      # Optional: Step-by-step
├── commands/                   # Optional: CLI commands
├── skills/                     # Optional: Sub-skills
├── techniques/                 # Optional: Techniques
├── integrations/               # Optional: Tool integrations
├── troubleshooting/            # Optional: Issue resolution
└── introduction/               # Optional: Intro content
```

### คำอธิบายและวัตถุประสงค์

| Directory | Purpose | เมื่อไหร่ควรใช้ |
|-----------|---------|----------------|
| `examples/` | โปรเจกต์ตัวอย่าง | มีตัวอย่างการใช้งานจริง |
| `templates/` | เทมเพลตโค้ด | มี code templates ที่ใช้ซ้ำ |
| `patterns/` | Design patterns | มี patterns ที่สำคัญ |
| `guide/` | คู่มือทีละขั้น | ต้องการ step-by-step guide |
| `commands/` | CLI commands | มีคำสั่งพิเศษ |
| `skills/` | Sub-skills | มี skills ย่อยๆ |
| `techniques/` | เทคนิคพิเศษ | มี techniques เฉพาะ |
| `integrations/` | Tool integrations | ต้องเชื่อมกับ tools อื่น |
| `troubleshooting/` | การแก้ปัญหา | มีปัญหาที่พบบ่อย |
| `introduction/` | เนื้อหาแนะนำ | ต้องการ intro content |

### กฎการตัดสินใจ

- **มี content จริง** → สร้าง directory
- **ไม่มี content** → ไม่ต้องสร้าง
- **directory ว่าง** → ลบทิ้ง
