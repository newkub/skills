# Git History Management

## Description

จัดการประวัติ commits ให้สะอาดและเข้าใจง่าย

## Examples

```bash
# ดูประวัติแบบกระชับ
git log --oneline --graph --decorate

# ดูประวัติของไฟล์เฉพาะ
git log --follow filename.txt

# ค้นหา commits ที่มี keyword
git log --grep="authentication"

# Interactive rebase สำหรับจัดเรียง commits
git rebase -i HEAD~3

# Squash commits
git reset --soft HEAD~3
git commit -m "feat: complete user authentication"
```

## Anti-patterns

❌ เก็บ commits ที่ไม่สำคัญไว้ใน history
❌ ใช้ commit messages ที่ไม่ชัดเจน
❌ ไม่ cleanup branches หลัง merge
❌ Rewrite history บน shared branches
