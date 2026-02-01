# Git Troubleshooting Best Practices

## Common Issues & Solutions

### Merge Conflicts
```bash
# ดู conflicts
git status

# แก้ไขด้วย merge tool
git mergetool

# ยกเลิก merge
git merge --abort
```

### Undo Changes
```bash
# ยกเลิกการเปลี่ยนแปลงใน working directory
git checkout -- <file>

# ยกเลิก staging
git reset HEAD <file>

# ยกเลิก commit ล่าสุด (เก็บ changes)
git reset --soft HEAD~1

# ยกเลิก commit ล่าสุด (ทิ้ง changes)
git reset --hard HEAD~1
```

### Recovery
```bash
# ดู commits ที่หายไป
git reflog

# กู้คืน commit ที่หายไป
git checkout <commit-hash>

# สร้าง branch จาก commit ที่หายไป
git branch recovery <commit-hash>
```

### Remote Issues
```bash
# แก้ไข upstream conflicts
git fetch upstream
git rebase upstream/main

# บังคับ push (ใช้ด้วยความระมัดระวัง)
git push --force-with-lease origin feature-branch
```

### Performance Issues
```bash
# ตรวจสอบ corrupted repository
git fsck --full

# ซ่อมแซม repository
git maintenance run

# ตรวจสอบ disk space
du -sh .git/
```

## Debug Commands
```bash
# ดู git config ทั้งหมด
git config --list

# ติดตามการทำงานของ git
GIT_TRACE=1 git status

# ดู object database
git verify-pack -v .git/objects/pack/*.idx
```
