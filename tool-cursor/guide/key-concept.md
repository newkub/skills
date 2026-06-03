# Key Concept

## Cursor คืออะไร?

Cursor เป็น AI-powered code editor ที่สร้างบน VS Code codebase พร้อมฟีเจอร์ AI ที่ช่วยให้การเขียน code มีประสิทธิภาพมากขึ้น ใช้ AI models สำหรับ autocomplete, code generation, และ explanation

## AI Modes หลัก

| Mode | คำอธิบาย | Shortcut |
|------|----------|----------|
| **AI Autocomplete** | แนะนำ code อัตโนมัติ | Tab |
| **AI Commands** | สร้าง code ด้วย natural language | Ctrl+K |
| **AI Chat** | ถาม-ตอบเกี่ยวกับ codebase | Ctrl+L |
| **Inline AI** | แก้ไข code ในบรรทัด | Ctrl+I |

## การทำงานของ AI

```
┌─────────────────────────────────────────────────────────────┐
│                      User Input                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   ┌──────────────┐      ┌──────────────┐      ┌─────────┐  │
│   │  Ctrl+K      │ ──── │   AI Model   │ ──── │  Code   │  │
│   │  Commands    │      │   Processing │      │  Output │  │
│   └──────────────┘      └──────────────┘      └─────────┘  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

## VS Code Compatibility

Cursor สืบทอดความสามารถจาก VS Code ทั้งหมด:

| Feature | รายละเอียด |
|---------|-----------|
| **Extensions** | รองรับ VS Code extensions ทั้งหมด |
| **Key Bindings** | ใช้ key bindings เดียวกัน |
| **Themes** | รองรับ VS Code themes ทั้งหมด |
| **Settings** | รองรับ settings.json |

## Models ที่รองรับ

| Model | คำอธิบาย |
|-------|----------|
| **Cursor** | Model ของ Cursor เอง |
| **GPT-4** | OpenAI GPT-4 |
| **Claude** | Anthropic Claude |
| **Custom** | เชื่อมต่อ custom model |

## เมื่อไหร่ควรใช้

| Use Case | AI Feature |
|----------|------------|
| **Code completion** | Tab หรือ autocomplete |
| **Generate function** | Ctrl+K |
| **Explain code** | Ctrl+L |
| **Refactor** | Ctrl+I |
| **Debug** | Ctrl+L + ถามเกี่ยวกับ error |
