# Migration Guide

> ย้ายมาใช้ Windsurf จาก IDE/AI อื่น

---

## 🔄 จาก Cursor

### ความแตกต่างหลัก

| Cursor | Windsurf |
|--------|----------|
| Composer | Cascade |
| Ctrl+K inline | Ctrl+I inline |
| Auto-run limited | Auto-execution modes |
| Custom agents | Skills system |

### การย้าย

1. **ติดตั้ง Windsurf** จาก windsurf.com
2. **สำรอง project** ก่อนเริ่ม
3. **อ่าน** [Setup Guide](./setup.md)
4. **ลองใช้** `@skill-name` แทน custom agents

### คีย์ลัดที่เปลี่ยน

| Cursor | Windsurf |
|--------|----------|
| Ctrl+K | Ctrl+I |
| Ctrl+L (chat) | Ctrl+L (chat) |

---

## 🤖 จาก GitHub Copilot

### ความแตกต่างหลัก

| Copilot | Windsurf |
|---------|----------|
| Inline suggestions | Full AI agent |
| Chat จำกัด | Cascade chat ครบถ้วน |
| ไม่มี tools | ~50 tools |
| ไม่มี memory | Memory system |

### การย้าย

1. **ปิด Copilot** ใน VS Code (ถ้าใช้ extension)
2. **ติดตั้ง Windsurf**
3. **เรียนรู้ tools**: ดู [System Tools](./system-prompt.md)
4. **เริ่มใช้ skills**: `@framework-nuxt` แทน prompt ยาวๆ

---

## 💬 จาก ChatGPT/Claude

### ความแตกต่างหลัก

| ChatGPT/Claude | Windsurf |
|----------------|----------|
| Copy-paste code | Direct file edit |
| ไม่เข้าใจ project | Read files directly |
| ไม่รันคำสั่ง | Run terminal commands |
| ไม่จำ context | Memory system |

### การย้าย

1. **เปิด project ใน Windsurf**
2. **ใช้ `@` อ้างอิงไฟล์** แทน paste code
3. **ใช้ `/command`** สำหรับงานซ้ำ
4. **สร้าง memory** สำหรับบริบทโปรเจกต์

---

## 🛠️ จาก IDE อื่น (VS Code, JetBrains)

### ความแตกต่าง

| Feature | VS Code/JetBrains | Windsurf |
|---------|---------------------|----------|
| AI | Extension (Copilot) | Built-in (Cascade) |
| Chat | Limited/None | Full-featured |
| Tools | Extension-based | Native ~50 tools |

### การย้าย

1. **Export settings** จาก IDE เดิม
2. **ติดตั้ง Windsurf**
3. **ปรับตั้งค่า** ตาม [Configuration Reference](./configuration-reference.md)
4. **ลองใช้** `/command` และ `@skill-name`

---

## 📝 Checklist การย้าย

### ก่อนเริ่ม

- [ ] สำรอง project
- [ ] ทำ git commit
- [ ] ติดตั้ง Windsurf
- [ ] ตั้งค่า Bun

### ระหว่างย้าย

- [ ] เปิด project ใน Windsurf
- [ ] ทดสอบ Cascade ทำงาน
- [ ] ลองใช้ `@skill-name`
- [ ] ลองใช้ `/command`
- [ ] สร้าง global rules

### หลังย้าย

- [ ] ลบ IDE เก่า (ถ้าต้องการ)
- [ ] อ่าน [Best Practices](./best-practices.md)
- [ ] สร้าง workflows สำหรับงานซ้ำ

---

## ⚠️ ปัญหาที่พบบ่อย

### "Cascade ไม่เหมือน Copilot"

Copilot เป็น AI assistant ที่ช่วยเติมโค้ด
Cascade เป็น AI agent ที่ทำงานแทนได้

**แก้ไข**: ให้คำสั่งเต็ม เช่น "สร้าง function สำหรับ..." แทน "ช่วยเขียน..."

### "ไม่มี feature X"

ตรวจสอบว่า Windsurf มี alternative:

- Custom agents → Skills
- Extensions → MCP servers
- Snippets → Workflows

### "ช้ากว่า IDE เดิม"

ตั้งค่า performance:

```json
{
  "editor.minimap.enabled": false,
  "editor.renderWhitespace": "selection"
}
```

---

## 🎯 ข้อดีของ Windsurf

หลังย้ายมาใช้ Windsurf:

1. **ทำงานเร็วขึ้น** - ไม่ต้อง copy-paste ไปมา
2. **Context ดีกว่า** - AI เข้าใจ project จริงๆ
3. **Tools ครบถ้วน** - ไม่ต้อง plugin เยอะ
4. **Memory ระยะยาว** - จดจำบริบทได้
5. **Workflows** - ทำงานซ้ำได้เร็ว

---

## 📖 อ่านเพิ่ม

- [Setup Guide](./setup.md)
- [Best Practices](./best-practices.md)
- [Tips and Tricks](./tips-and-tricks.md)
- [Examples](./examples.md)
