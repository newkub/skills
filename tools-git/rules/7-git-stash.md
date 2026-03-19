# Git Stash

## Description

ใช้ stash สำหรับเก็บการเปลี่ยนแปลงชั่วคราว

## Examples

```bash
# เก็บการเปลี่ยนแปลงปัจจุบัน
git stash

# เก็บพร้อมชื่อ
git stash save "work in progress on authentication"

# ดูรายการ stashes
git stash list

# นำ stash กลับมา
git stash pop

# นำ stash มาใช้แต่ไม่ลบ
git stash apply

# ลบ stash
git stash drop stash@{0}

# ลบ stashes ทั้งหมด
git stash clear
```

## Anti-patterns

❌ ใช้ stash แทนการทำงานบน feature branch
❌ เก็บ stashes ไว้นานโดยไม่จำเป็น
❌ ไม่ตั้งชื่อ stash ที่สำคัญ
❌ ใช้ stash สำหรับการเปลี่ยนแปลงขนาดใหญ่
