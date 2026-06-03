# How It Works

## Architecture

mise เป็น version manager ที่เขียนด้วย Rust สำหรับจัดการ programming languages และ tools ต่างๆ:

```
┌─────────────────────────────────────┐
│            mise Architecture           │
├─────────────────────────────────────┤
│  Config File (.mise.toml)           │
├─────────────────────────────────────┤
│  Plugin System (node, python, etc.) │
├─────────────────────────────────────┤
│  shims/ (versioned binaries)        │
├─────────────────────────────────────┤
│  Tool Cache (~/.local/share/mise)   │
└─────────────────────────────────────┘
```

## Workflow

1. **Install mise** - ติดตั้ง mise
2. **Add tools** - เพิ่ม tool ที่ต้องการ (`mise use node@20`)
3. **Create config** - สร้าง `.mise.toml` ใน project
4. **Auto-activate** - mise จะ activate version อัตโนมัติเมื่อ cd เข้า directory

## Key Concepts

- **mise.toml** - config file ที่กำหนด tool versions สำหรับ project
- **Plugin** - แต่ละ tool (node, python, ruby) มี plugin ของตัวเอง
- **shims** - symbolic links ที่ point ไปที่ mise-managed versions
- **Legacy file** - `.tool-versions` สำหรับ compatibility กับ asdf
