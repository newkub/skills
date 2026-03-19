---
description: คีย์บอร์ดชอร์ตคัทและคีย์ลัดใน Markdown
title: keyboard-shortcuts
tags: [markdown, keyboard, shortcuts, hotkeys]
goals:
  - แสดงตัวอย่างการใช้ keyboard shortcuts
  - สอนวิธีสร้างเอกสารคีย์ลัด
---

## Common Shortcuts

````markdown
## คีย์ลัดทั่วไป

| การกระทำ | Windows/Linux | macOS |
|----------|---------------|-------|
| บันทึก | <kbd>Ctrl</kbd> + <kbd>S</kbd> | <kbd>Cmd</kbd> + <kbd>S</kbd> |
| คัดลอก | <kbd>Ctrl</kbd> + <kbd>C</kbd> | <kbd>Cmd</kbd> + <kbd>C</kbd> |
| วาง | <kbd>Ctrl</kbd> + <kbd>V</kbd> | <kbd>Cmd</kbd> + <kbd>V</kbd> |
| ยกเลิก | <kbd>Ctrl</kbd> + <kbd>Z</kbd> | <kbd>Cmd</kbd> + <kbd>Z</kbd> |
| ค้นหา | <kbd>Ctrl</kbd> + <kbd>F</kbd> | <kbd>Cmd</kbd> + <kbd>F</kbd> |
````

## IDE Shortcuts

````markdown
## คีย์ลัด IDE

### Navigation

- <kbd>Ctrl</kbd> + <kbd>P</kbd> - เปิดไฟล์
- <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>F</kbd> - ค้นหาทั้งโปรเจกต์
- <kbd>Ctrl</kbd> + <kbd>G</kbd> - ไปยังบรรทัด
- <kbd>F12</kbd> - ไปยัง definition

### Editing

- <kbd>Ctrl</kbd> + <kbd>D</kbd> - เลือกคำถัดไป
- <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>L</kbd> - เลือกทั้งหมด
- <kbd>Alt</kbd> + <kbd>↑</kbd>/<kbd>↓</kbd> - ย้ายบรรทัด
- <kbd>Ctrl</kbd> + <kbd>/</kbd> - คอมเมนต์/ยกเลิกคอมเมนต์

### Terminal

- <kbd>Ctrl</kbd> + <kbd>`</kbd> - เปิด/ปิด terminal
- <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>`</kbd> - terminal ใหม่
````

## Cheat Sheet Style

````markdown
## ⌨️ คีย์ลัดสำหรับ Markdown

| คีย์ลัด | ผลลัพธ์ |
|---------|----------|
| <kbd>Ctrl</kbd>+<kbd>B</kbd> | **ตัวหนา** |
| <kbd>Ctrl</kbd>+<kbd>I</kbd> | *ตัวเอียง* |
| <kbd>Ctrl</kbd>+<kbd>K</kbd> | [ลิงก์]() |
| <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>V</kbd> | วางแบบไม่มีฟอร์แมต |

### คีย์ลัดพิเศษ

🎯 <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>E</kbd> - เปิด Explorer
🔍 <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>X</kbd> - เปิด Extensions
⚙️ <kbd>Ctrl</kbd> + <kbd>,</kbd> - เปิด Settings
````

## Shortcut Table with Icons

````markdown
## คีย์ลัดที่ใช้บ่อย

| ไอคอน | การกระทำ | คีย์ลัด |
|-------|----------|---------|
| 💾 | บันทึก | `Ctrl+S` |
| 🔍 | ค้นหา | `Ctrl+F` |
| 🔁 | แทนที่ | `Ctrl+H` |
| ✂️ | ตัด | `Ctrl+X` |
| 📋 | คัดลอก | `Ctrl+C` |
| 📌 | วาง | `Ctrl+V` |
| ↩️ | ยกเลิก | `Ctrl+Z` |
| ↪️ | ทำซ้ำ | `Ctrl+Y` |
````

## Chord Shortcuts

````markdown
## คีย์ลัดแบบ Chord

บาง IDE ใช้คีย์ลัดแบบกดติดต่อกัน:

```text
<kbd>Ctrl</kbd>+<kbd>K</kbd> <kbd>Ctrl</kbd>+<kbd>C</kbd>  →  คอมเมนต์
<kbd>Ctrl</kbd>+<kbd>K</kbd> <kbd>Ctrl</kbd>+<kbd>U</kbd>  →  ยกเลิกคอมเมนต์
<kbd>Ctrl</kbd>+<kbd>K</kbd> <kbd>Ctrl</kbd>+<kbd>S</kbd>  →  เปิดคีย์ลัดทั้งหมด
<kbd>Ctrl</kbd>+<kbd>K</kbd> <kbd>Ctrl</kbd>+<kbd>Z</kbd>  →  Zen mode
```
````

## Custom Shortcuts

````markdown
## การตั้งค่าคีย์ลัดที่กำหนดเอง

เพิ่มใน `keybindings.json`:

```json
[
  {
    "key": "ctrl+shift+t",
    "command": "workbench.action.terminal.new"
  },
  {
    "key": "ctrl+shift+r",
    "command": "editor.action.formatDocument"
  }
]
```

> 💡 Tip: ใช้ `keybindings.json` เพื่อซิงค์คีย์ลัดระหว่างเครื่อง
````
