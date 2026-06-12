# Write Skills CLI

## CLI Commands

CLI commands สำหรับการใช้งาน write-skills skill

### Commands

- `/write-skills` - สร้าง skill ใหม่
- `/update-skills` - อัปเดต skill ที่มีอยู่
- `/improve-skills` - ปรับปรุงคุณภาพ skill

## Usage

ใช้ commands ผ่าน skill invocation:

```
@[write-skills] ทำตาม @[/write-skills]
@[write-skills] ทำตาม @[/update-skills]
@[write-skills] ทำตาม @[/improve-skills]
```

## Parameters

เมื่อเรียกใช้ workflow จะถาม parameters ต่างๆ เช่น:

- `skillName` - ชื่อ skill ที่ต้องการสร้าง/อัปเดต
- `skillType` - ประเภท skill (guide, lang, lib, framework, runtime, cloud, create, tool)
