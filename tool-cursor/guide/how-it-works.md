# How It Works

## วงจรการทำงานของ Cursor

```
┌─────────────────────────────────────────────────────────────┐
│                      Editor Core                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   ┌──────────────┐      ┌──────────────┐      ┌─────────┐  │
│   │  Code Editor │ ──── │   LSP        │ ──── │  Files  │  │
│   │  (Monaco)    │      │   Server     │      │  System │  │
│   └──────────────┘      └──────────────┘      └─────────┘  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────┐
│                      AI Layer                                │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   ┌──────────────┐      ┌──────────────┐      ┌─────────┐  │
│   │  AI Engine   │ ──── │   Context   │ ──── │  Model  │  │
│   │  (Commands)  │      │   Window    │      │  API    │  │
│   └──────────────┘      └──────────────┘      └─────────┘  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

## AI Command Workflow

| Step | คำอธิบาย | Action |
|------|----------|--------|
| **1** | User กด Ctrl+K | เปิด AI command input |
| **2** | พิมพ์คำสั่ง | ใส่ natural language command |
| **3** | AI วิเคราะห์ | ส่งไปยัง model |
| **4** | Generate code | แสดง code suggestion |
| **5** | Accept/Edit | Tab เพื่อ accept, แก้ไขได้ |

## Context Window

AI สามารถอ่าน context จาก:

| Source | คำอธิบาย |
|--------|----------|
| **Current file** | อ่านไฟล์ที่กำลังเปิด |
| **Project files** | อ่านไฟล์ในโปรเจกต์ |
| **Terminal output** | อ่านผลลัพธ์จาก terminal |
| **Errors** | อ่าน error messages |

## Keyboard Shortcuts

| Shortcut | Action | คำอธิบาย |
|----------|--------|----------|
| `Ctrl+K` | AI Command | เปิด command input |
| `Ctrl+L` | AI Chat | เปิด chat panel |
| `Ctrl+I` | Inline AI | แก้ไข selection |
| `Tab` | Accept | accept suggestion |
| `Ctrl+Enter` | Generate | สร้างหลาย lines |

## Model Selection

| Model | Best for |
|-------|----------|
| **Fast** | Quick completions |
| **Pro** | Complex tasks |
| **Max** | Large codebase |
