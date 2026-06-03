# Quick Start

คู่มือเริ่มต้นใช้งาน Qoder

## 5 นาทีแรกกับ Qoder

### ขั้นตอนที่ 1: เปิด Editor

เปิด IDE ที่ติดตั้ง Qoder plugin แล้ว

### ขั้นตอนที่ 2: เริ่มเขียน Code

```typescript
// พิมพ์ชื่อ function แล้วรอ
function fetchUser
```

Qoder จะแนะนำ:

```typescript
function fetchUser(userId: string): Promise<User> {
  return fetch(`/api/users/${userId}`)
    .then(res => res.json());
}
```

### ขั้นตอนที่ 3: ใช้ Inline Chat

1. Select code ที่ต้องการถาม
2. กด `Ctrl+Shift+M` (Windows/Linux) หรือ `Cmd+Shift+M` (macOS)
3. ถามคำถาม

### ขั้นตอนที่ 4: รับคำตอบ

Qoder จะ:
- ดึง context จาก project
- รวม knowledge ที่มี
- แสดงคำตอบพร้อม code references

## Editor Workspace

### Inline Suggestions

```typescript
// พิมพ์โค้ดแล้วกด Tab เพื่อ accept
const users = await db.query('SELECT * FROM users')

// Qoder แนะนำ:
// const users = await db.query<User[]>('SELECT * FROM users')
```

### Chat Panel

```
┌─────────────────────────────────────┐
│ Qoder Chat                    [─][×] │
├─────────────────────────────────────┤
│ > Explain this function             │
│                                     │
│ This function handles...            │
│                                     │
│ [Code references]                   │
├─────────────────────────────────────┤
│ Type a message...              [→] │
└─────────────────────────────────────┘
```

## Quest Workspace

สำหรับ task ที่ใหญ่กว่า:

### ขั้นตอนที่ 1: เปิด Quest

```bash
# CLI
qoder quest open

# Or ใน IDE
# ไปที่ Quest tab
```

### ขั้นตอนที่ 2: สร้าง Task

```
┌─────────────────────────────────────┐
│ Quest Board                    [+] │
├─────────────────────────────────────┤
│ TO DO         IN PROGRESS    DONE   │
│ ┌──────────┐ ┌────────────┐         │
│ │Refactor  │ │Add auth    │         │
│ │Service   │ │middleware  │         │
│ └──────────┘ └────────────┘         │
└─────────────────────────────────────┘
```

### ขั้นตอนที่ 3: Delegate to Agent

```
"Refactor UserService to use async/await pattern"
```

### ขั้นตอนที่ 4: ติดตาม Progress

- Agent จะทำงานและอัพเดทสถานะ
- ดู artifacts ที่สร้าง
- Review code ที่เปลี่ยน

## CLI Quick Commands

```bash
# Start chat
qoder chat

# Run agent
qoder agent run "refactor auth module"

# Search codebase
qoder search "authentication logic"

# Read file
qoder read src/auth.ts
```

## Common Workflows

### Quick Fix

1. เห็น error ใน code
2. Select error text
3. กด `Ctrl+Shift+M`
4. ถาม "How to fix this?"
5. Apply fix

### Feature Development

1. เปิด Quest
2. สร้าง task
3. Delegate: "Implement user registration API"
4. รอ agent ทำงาน
5. Review และ merge

### Code Review

1. เปิด Chat panel
2. วาง code ที่ต้องการ review
3. ถาม "What improvements?"
4. รับ suggestions

## Tips

| Tip | Description |
|-----|-------------|
| **Tab to accept** | เร็วกว่าคลิก |
| **Esc to dismiss** | ปิด suggestion |
| **Use natural language** | ถามเป็นภาษาคน |
| **Be specific** | บอก context เยอะๆ |
| **Check suggestions** | อ่านก่อน accept |