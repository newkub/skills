# Key Concepts

## What is Codex?

Codex เป็น coding agent จาก OpenAI ที่ออกแบบมาเพื่อช่วยนักพัฒนาทำงานต่างๆ เกี่ยวกับการเขียนโค้ด โดยทำงานผ่าน terminal โดยตรง

## Key Concepts

### 1. Local Agent

Codex ทำงานบนเครื่องของคุณเอง สามารถ:
- อ่านไฟล์ในโปรเจกต์
- แก้ไขและสร้างไฟล์
- รันคำสั่ง terminal
- เข้าถึง Git repository

### 2. Multi-Platform Support

รองรับการติดตั้งหลายวิธี:
- Shell script (Mac/Linux/Windows)
- npm package (`@openai/codex`)
- Homebrew
- Direct binary download

### 3. Authentication Options

มี 2 วิธีในการเชื่อมต่อกับ OpenAI:
1. **ChatGPT Account** - ใช้ Plus, Pro, Business, Edu, หรือ Enterprise plan
2. **API Key** - เชื่อมต่อผ่าน OpenAI API

### 4. IDE Integration

นอกจาก CLI แล้ว Codex ยังมีใน:
- VS Code
- Cursor
- Windsurf

### 5. Privacy & Security

- โค้ดถูกประมวลผลใน OpenAI cloud
- อ่านไฟล์ในเครื่องเท่านั้น
- ไม่ส่งโค้ดไปเก็บถาวร

## Architecture Overview

```
┌─────────────────────────────────────┐
│         Codex Architecture           │
├─────────────────────────────────────┤
│  User Input (Terminal/IDE)          │
├─────────────────────────────────────┤
│  Local Agent Engine                 │
│  ├── Task Planning                  │
│  ├── File Operations                │
│  └── Command Execution              │
├─────────────────────────────────────┤
│  OpenAI API (Cloud Processing)      │
│  ├── LLM Reasoning                  │
│  └── Code Generation                │
└─────────────────────────────────────┘
```

## Use Cases

| Use Case | Description |
|----------|-------------|
| **Write Code** | สร้างโค้ดจากคำอธิบาย โดยปรับให้เข้ากับโครงสร้างโปรเจกต์ |
| **Understand Codebases** | อ่านและอธิบายโค้ดที่ซับซ้อน |
| **Review Code** | วิเคราะห์หาบักและข้อผิดพลาด |
| **Debug & Fix** | ตรวจหาสาเหตุและเสนอวิธีแก้ไข |
| **Automate Tasks** | ทำงานซ้ำๆ เช่น refactor, test, migration |