# Git Recovery

## Description
กู้คืนข้อมูลและแก้ไขปัญหาที่เกิดขึ้นกับ repository

## Examples
```bash
# ดูประวัติทั้งหมดรวมถึงที่ถูกลบ
git reflog

# กู้คืน commit ที่ถูกลบ
git checkout <commit-hash>
git branch recovery <commit-hash>

# แก้ไข detached HEAD
git checkout main
git merge recovery

# กู้คืนไฟล์ที่ถูกลบ
git checkout HEAD~1 -- filename.txt

# แก้ไข repository ที่เสียหาย
git fsck --full
git reset --hard
```

## Anti-patterns
❌ ไม่มี backup ของ repository
❌ ใช้ `git reset --hard` โดยไม่ตรวจสอบ
❌ ไม่รู้จักวิธีกู้คืนข้อมูล
❌ ใช้ force push โดยไม่ระมัดระวัง
