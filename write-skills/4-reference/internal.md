# Internal References

## Skills ที่เกี่ยวข้อง

### Core Skills
- `@write-workflows` - การสร้างและจัดการ workflows
- `@write-markdown` - การเขียนเอกสาร Markdown คุณภาพสูง
- `@write-agents` - การเขียนคำสั่งสำหรับ AI agents

### Supporting Skills
- `@validate` - การตรวจสอบความถูกต้อง
- `@improve-content-quality` - การปรับปรุงคุณภาพเนื้อหา
- `@follow-markdown` - มาตรฐานการเขียน Markdown

## Workflows ที่เกี่ยวข้อง

### Creation Workflows
- `/write-skills` - สร้าง skills ใหม่
- `/write-workflows` - สร้าง workflows ใหม่
- `/write-markdown` - เขียนเอกสาร

### Management Workflows
- `/update-skills` - อัพเดท skills ที่มีอยู่
- `/update-workflows` - อัพเดท workflows
- `/connect-workflows` - เชื่อมโยง skills และ workflows

### Quality Workflows
- `/validate` - ตรวจสอบความถูกต้อง
- `/improve-content-quality` - ปรับปรุงคุณภาพเนื้อหา
- `/review-workflows` - ตรวจสอบคุณภาพ workflows

## File Structure References

### Standard Skill Structure
```
skill-name/
├── SKILL.md                   # Main definition
├── execute/                   # Implementation
│   ├── 1-rules/              # Rules and standards
│   ├── 2-templates/          # Templates
│   └── 3-examples/           # Examples
├── knowledge/                 # Core concepts
├── reference/                 # Resources
└── workflows/                 # Optional workflows
```

### Standard Workflow Structure
```
workflow-name.md
├── Frontmatter               # Metadata
├── Description              # What it does
├── Steps                    # Implementation
├── Expected Outcome         # Results
└── Integration             # Connections
```

## Naming Conventions

### Skills
- Prefix: ไม่มี
- Format: `kebab-case`
- Example: `write-skills`, `validate-workflows`

### Workflows
- Prefix: `action-`
- Format: `action-domain-topic.md`
- Examples: `write-skills`, `update-workflows`, `validate-structure`

### Files in Directories
- `execute/1-rules/`: `[number]-[topic].md`
- `execute/2-templates/`: `[type]-template.md`
- `execute/3-examples/`: `[number]-[topic].md`
- `knowledge/`: `[type]-[concept].md`
- `reference/`: `[type].md`

## Integration Patterns

### Skill Dependencies
```yaml
follow:
  skills: ["@write-workflows", "@write-markdown"]
  workflows: ["/write-workflows", "/validate"]
  files: ["path/to/file.md"]
  mcp: ["mcp-server-name"]
```

### Workflow References
- Skills: `@skill-name`
- Workflows: `/workflow-name`
- Files: `path/to/file.md`
- MCP: `mcp-server-name`

## Cross-Reference Rules

1. **No Duplicate Content** - ถ้า content ซ้ำกับ skill อื่น → ใช้ reference
2. **Use Connect Workflows** - สำหรับเชื่อมโยง skills ที่เกี่ยวข้อง
3. **Verify Links** - หลังเขียน ตรวจสอบว่า links ใช้งานได้
4. **Consistent Naming** - ใช้ชื่อเดียวกันทั่วทั้ง project
