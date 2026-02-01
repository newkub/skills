# Git Security Best Practices

## Sensitive Data Protection
```gitignore
# ข้อมูลสำคัญ
.env
.env.local
*.key
*.pem
secrets/
config/production.json

# ข้อมูลผู้ใช้
users.json
passwords.txt
```

## Pre-commit Hooks
```bash
#!/bin/sh
# .git/hooks/pre-commit

# ตรวจสอบ secrets
git diff --cached --name-only | xargs grep -l "password\|secret\|key" && {
  echo "Error: Potential secrets found in commit"
  exit 1
}

# ตรวจสอบ file sizes
git diff --cached --stat | grep -E "\s+[0-9]{3,}" && {
  echo "Error: Large files detected"
  exit 1
}
```

## Branch Protection
- **Protected Branches**: ป้องกันการ force push
- **Required Reviews**: ต้องมีการ review ก่อน merge
- **Status Checks**: ต้องผ่าน CI/CD tests
- **Linear History**: ไม่อนุญาต merge commits

## Access Control
```bash
# จำกัดการเข้าถึง
git config --global --add safe.directory /path/to/repo

# ใช้ SSH keys แทน passwords
ssh-keygen -t ed25519 -C "your@email.com"
```

## Audit and Monitoring
```bash
# ดูประวัติการเปลี่ยนแปลง
git log --all --full-history -- <file>

# ตรวจสอบว่าใครแก้ไข
git blame <file>

# ค้นหา commits ที่น่าสงสัย
git log --grep="password\|secret\|key"
```

## Clean History
```bash
# ลบ sensitive data จาก history
git filter-branch --force --index-filter \
  'git rm --cached --ignore-unmatch secrets.txt' \
  --prune-empty --tag-name-filter cat -- --all
```
