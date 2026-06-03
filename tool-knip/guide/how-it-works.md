# How It Works

## Architecture

Knip เป็น project linter สำหรับ find unused dependencies, exports และ files ใน JavaScript และ TypeScript projects:

```
┌─────────────────────────────────────┐
│          Knip Architecture            │
├─────────────────────────────────────┤
│  Static Analysis  │  Dependency Graph │
├─────────────────────────────────────┤
│  Entry Points  │  Plugin System      │
├─────────────────────────────────────┤
│  Unused Files  │  Unused Exports      │
├─────────────────────────────────────┤
│  Unused Dependencies  │  Auto-fix     │
└─────────────────────────────────────┘
```

## Workflow

1. **Install** - ติดตั้ง knip ด้วย `npm install -D knip`
2. **Configure** - สร้าง `knip.json` หรือ `knip.jsonc` configuration file
3. **Analyze** - รัน `knip` เพื่อ analyze project
4. **Report** - Knip จะ report unused files, exports, และ dependencies
5. **Fix** - รัน `knip --fix` เพื่อ auto-remove unused items
6. **CI Integration** - เพิ่ม knip ใน CI pipeline สำหรับ continuous checking

## Key Concepts

- **Static Analysis** - Analyze code โดยไม่ต้อง execute
- **Dependency Graph** - Build graph ของ dependencies ระหว่าง files
- **Entry Points** - Identify entry points ของ project (index files, configs, etc.)
- **Plugin System** - Plugins สำหรับ framework-specific analysis
- **Unused Files** - Detect files ที่ไม่ถูก referenced
- **Unused Exports** - Detect exports ที่ไม่ถูก imported
- **Unused Dependencies** - Detect npm dependencies ที่ไม่ถูกใช้
- **Auto-fix** - Automatically remove unused items ด้วย `--fix` flag
