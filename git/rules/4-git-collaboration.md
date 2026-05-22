# Git Collaboration

## Description

ทำงานร่วมกับทีมโดยใช้ Git อย่างมีประสิทธิภาพ

## Examples

```bash
# ดูการเปลี่ยนแปลงล่าสุดจาก remote
git fetch origin

# อัพเดท local branch
git pull origin main

# ส่งการเปลี่ยนแปลงไป remote
git push origin feature-branch

# แก้ไข merge conflicts
git merge main
# แก้ไขไฟล์ที่ conflict
git add .
git commit -m "resolve merge conflicts"
```

## Anti-patterns

❌ ใช้ `git push --force` บน shared branches
❌ ไม่ sync กับ remote ก่อนทำงาน
❌ ไม่ resolve conflicts อย่างถูกต้อง
❌ ใช้ `git pull` โดยไม่ตรวจสอบการเปลี่ยนแปลง
