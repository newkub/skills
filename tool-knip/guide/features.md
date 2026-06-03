# Features

Features ทั้งหมดของ Knip

## Core Features

| Feature | Description |
|---------|-------------|
| **Unused Files Detection** | หาไฟล์ที่ไม่มี import อะไรเลย |
| **Unused Dependencies** | หา dependencies ที่ไม่ได้ใช้ในโค้ด |
| **Unused Exports** | หา exports ที่ไม่มีใคร import |
| **Bad Exports** | หา exports ที่มีปัญหา เช่น type-only ที่ไม่ถูกใช้ |
| **Duplicate Imports** | หา import ที่ซ้ำกัน |
| **Circular Dependencies** | หา circular dependency ระหว่างไฟล์ |

## Check Types

| Check | Description |
|-------|-------------|
| `files` | ไฟล์ที่ไม่ถูก import จากไฟล์อื่น |
| `dependencies` | dependencies ที่ไม่ถูกใช้ |
| `devDependencies` | devDependencies ที่ไม่ถูกใช้ |
| `exports` | exports ที่ไม่มีใคร import |
| `types` | types ที่ไม่ถูกใช้ |
| `duplicates` | imports ที่ซ้ำกัน |
| `classMembers` | class members ที่ไม่ถูกใช้ |
| `enumMembers` | enum members ที่ไม่ถูกใช้ |

## Output Formats

| Format | Description |
|--------|-------------|
| `text` | แสดงผลเป็น text (default) |
| `json` | แสดงผลเป็น JSON |
| `stream` | แสดงผลเป็น streaming output |

## Auto-fix

ใช้ `--fix` หรือ `--fix-dry-run` เพื่อ auto-remove unused items:

```bash
# Dry run (preview only)
knip --fix-dry-run

# Actually fix
knip --fix
```

## CI Integration

```bash
# Fail on issues (exit code 1)
knip --strict

# Production only
knip --production

# Development only
knip --development
```
