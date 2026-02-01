# Git Commit

## Description
เขียน commit messages ที่ดีและทำ commit อย่างมีระเบียบ

## Examples
```bash
# Commit ที่ดี
git commit -m "feat: add user authentication system"
git commit -m "fix: resolve login validation error"
git commit -m "docs: update API documentation"

# Commit หลายไฟล์พร้อมกัน
git add src/auth/ tests/auth.test.js
git commit -m "feat: implement OAuth2 authentication"

# แก้ไข commit ล่าสุด
git commit --amend -m "feat: add user authentication with OAuth2"
```

## Anti-patterns
❌ Commit messages: "fix bug", "update", "temp"
❌ Commit ไฟล์ที่ไม่เกี่ยวข้องรวมกัน
❌ Commit ไฟล์ขนาดใหญ่โดยไม่แบ่ง
❌ ใช้ commit messages เป็นภาษาไทย
