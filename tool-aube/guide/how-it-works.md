# how-it-works

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        aube                                 │
├─────────────────────────────────────────────────────────────┤
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐     │
│  │  resolver    │  │  installer   │  │  store       │     │
│  │              │  │              │  │              │     │
│  │ - parse deps │  │ - link files │  │ ~/.local/    │     │
│  │ - version    │  │ - verify     │  │ share/aube/  │     │
│  │   conflicts  │  │ - lifecycle  │  │ store/       │     │
│  └──────────────┘  └──────────────┘  └──────────────┘     │
├─────────────────────────────────────────────────────────────┤
│  node_modules/.aube/  ←  symlinks to store                 │
└─────────────────────────────────────────────────────────────┘
```

## Workflow

1. **Parse** - อ่าน package.json และ lockfile ที่มีอยู่
2. **Resolve** - หา dependencies versions ที่ compatible
3. **Install** - link จาก global store หรือ download ใหม่
4. **Verify** - ตรวจสอบว่า node_modules ตรงกับ lockfile

## Auto-Install Flow

```
aubr test
     │
     ▼
┌─────────────┐    fresh?    ┌─────────────┐
│ check deps  │ ────────────►│ run script  │
│ stale?      │              └─────────────┘
└─────────────┘
     │
     │ yes
     ▼
┌─────────────┐
│ auto-install│ → then run script
└─────────────┘
```