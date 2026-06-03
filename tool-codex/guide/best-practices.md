# Best Practices

## Performance

### 1. Clear Task Descriptions

```bash
# ❌ ไม่ดี
codex fix it

# ✅ ดี
codex "Fix the race condition in auth.ts"
```

ยิ่งคำอธิบายชัดเจน ยิ่งได้ผลลัพธ์ดี

### 2. Break Down Complex Tasks

```
# แทนที่จะให้ทำทุกอย่างในคำสั่งเดียว
codex "Refactor entire backend"

# แบ่งเป็นขั้นตอน
codex "Create user service"
codex "Create auth middleware"
codex "Add unit tests"
```

### 3. Use Context Files

```bash
# ให้ Codex อ่านไฟล์ที่เกี่ยวข้องก่อน
codex "Analyze database.ts and create similar repository pattern"
```

## Security

### 1. Review Before Execution

```bash
# Codex จะแสดง changes ก่อน apply
codex "Delete unused files"
# Output: Showing 5 files to delete
# [y/N]:
```

### 2. Avoid Sensitive Data in Prompts

```bash
# ❌ หลีกเลี่ยง
codex "Analyze config.json with passwords"

# ✅ ดี
codex "Analyze config structure, ignore values"
```

### 3. Enable Danger Confirmation

```json
{
  "security": {
    "allowDangerousCommands": false,
    "confirmBeforeDelete": true
  }
}
```

## Code Quality

### 1. Specify Code Style

```bash
codex "Add TypeScript types to this function using async/await pattern"
```

### 2. Request Testing

```bash
codex "Add unit tests for calculateTotal with Jest"
```

### 3. Ask for Documentation

```bash
codex "Add JSDoc comments to all exported functions"
```

## Common Pitfalls

### 1. อย่าให้ทำหลายอย่างพร้อมกัน

```bash
# ❌
codex "Add auth, write tests, create API docs, and fix all bugs"

# ✅
codex "Add JWT authentication to user service"
```

### 2. ตรวจสอบผลลัพธ์

- ตรวจสอบโค้ดที่สร้างก่อน commit
- รัน tests หลังจาก Codex แก้ไข
- อ่าน diff ก่อน approve changes

### 3. ใช้ Interactive Mode สำหรับ Complex Tasks

```bash
codex
# พิมพ์คำสั่งทีละขั้นตอน
```

## Workflow Integration

### 1. Git Workflow

```bash
# 1. สร้าง branch
git checkout -b feature/new-feature

# 2. ใช้ Codex แก้ไข
codex "Add user profile feature"

# 3. ตรวจสอบ changes
git diff

# 4. Commit
git add .
git commit -m "feat: add user profile"
```

### 2. Code Review

```bash
# 1. ให้ Codex review
codex "Review auth.ts for security issues"

# 2. แก้ไขตาม feedback
codex "Fix the SQL injection vulnerability"

# 3. ตรวจสอบอีกครั้ง
codex "Verify security fixes in auth.ts"
```

### 3. Testing

```bash
# 1. เขียน tests
codex "Write integration tests for API endpoints"

# 2. รัน tests
npm test

# 3. ถ้า fail ให้ fix
codex "Fix failing tests in auth.test.ts"
```

## Tips & Tricks

| Tip | Description |
|-----|-------------|
| **Use quotes** | ครอบคำสั่งด้วย quotes เพื่อหลีกเลี่ยง shell escaping |
| **Context window** | ถ้า conversation ยาวเกินไป เริ่ม session ใหม่ |
| **Model selection** | ใช้ `gpt-4o` สำหรับ complex tasks, `gpt-3.5` สำหรับ simple ones |
| **File paths** | ให้ absolute paths ถ้าโปรเจกต์มีหลาย directories |