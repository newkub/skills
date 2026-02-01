# Git Performance Best Practices

## Repository Optimization
```bash
# ลดขนาด repository
git gc --aggressive --prune=now

# ตรวจสอบขนาด objects
git count-objects -vH

# ลบ unreachable objects
git prune --expire now
```

## Large Files Management
- ใช้ Git LFS สำหรับไฟล์ขนาดใหญ่ (>100MB)
- กำหนด `.gitattributes` สำหรับ file types
- หลีกเลี่ยงการ commit binaries โดยตรง

## Ignore Files Effectively
```gitignore
# ขนาดใหญ่
*.zip
*.tar.gz
*.mp4

# Dependencies
node_modules/
vendor/

# Build artifacts
dist/
build/
*.exe
```

## Network Performance
```bash
# ใช้ shallow clone สำหรับ large repos
git clone --depth 1 <url>

# จำกัดการดึงข้อมูล
git fetch --depth 1

# ใช้ sparse checkout
git sparse-checkout init --cone
git sparse-checkout set src/
```

## Command Performance
- ใช้ `git status -s` สำหรับ output สั้น
- ใช้ `git log --oneline` สำหรับประวัติสั้น
- ใช้ `git diff --stat` สำหรับสรุปการเปลี่ยนแปลง
