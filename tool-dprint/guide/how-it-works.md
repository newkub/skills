# How It Works

## Architecture

dprint เป็น pluggable และ configurable code formatting platform ที่เขียนด้วย Rust:

```
┌─────────────────────────────────────┐
│         dprint Architecture           │
├─────────────────────────────────────┤
│  Core (Rust)  │  Wasm Plugins        │
├─────────────────────────────────────┤
│  Configuration  │  CLI               │
├─────────────────────────────────────┤
│  Cache  │  Incremental Formatting   │
├─────────────────────────────────────┤
│  Sandbox Security  │  Plugin URLs    │
└─────────────────────────────────────┘
```

## Workflow

1. **Install** - ติดตั้ง dprint ด้วย npm, cargo, หรือ download binary
2. **Setup** - สร้าง `dprint.json` หรือ `dprint.jsonc` configuration file
3. **Configure Plugins** - เพิ่ม plugins จาก URL หรือ file path
4. **Format** - รัน `dprint fmt` เพื่อ format files
5. **Check** - รัน `dprint check` เพื่อ check formatting
6. **Cache** - dprint ใช้ cache สำหรับ incremental formatting

## Key Concepts

- **Pluggable Architecture** - Plugins ถูก load จาก URL หรือ file path
- **Wasm Plugins** - Plugins รันใน sandbox โดยไม่มี access ไป network หรือ file system
- **Multi-language** - Support TypeScript, JavaScript, JSON, Markdown, TOML, CSS, Python, Go, และอื่นๆ
- **Configurable** - Tweak formatting ให้ match style ของคุณ
- **Fast** - Built with Rust และ WebAssembly
- **Secure** - Wasm plugins รัน sandboxed
- **Incremental Formatting** - Format เฉพาะ files ที่ changed
