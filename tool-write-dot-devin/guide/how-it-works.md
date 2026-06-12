# How It Works

## Workflow

tool-write-dot-devin ทำงานตามขั้นตอน:

1. **Setup Rules** - สร้าง project rules ตามมาตรฐาน
2. **Setup Hooks** - สร้าง project hooks สำหรับ automation
3. **Follow Standards** - ทำตามมาตรฐาน workflow

## Process Flow

```
/write-dot-devin
    ↓
/write-devin-project-rules
    ↓
/write-devin-project-hooks
    ↓
/write-windsurf-global-workflows
```

## Integration

- Rules และ hooks ถูกเก็บใน `.devin/` directory
- Cascade อ่าน configuration จาก `.devin/` โดยอัตโนมัติ
- Hooks ทำงานตาม events ที่กำหนด
