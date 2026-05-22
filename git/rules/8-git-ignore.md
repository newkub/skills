# Git Ignore

## Description

ตั้งค่า .gitignore ให้มีประสิทธิภาพและครอบคลุม

## Examples

```gitignore
# Dependencies
node_modules/
vendor/
bower_components/

# Build outputs
dist/
build/
out/
*.exe
*.dll
*.so

# Environment files
.env
.env.local
.env.production

# IDE files
.vscode/
.idea/
*.swp
*.swo

# OS files
.DS_Store
Thumbs.db

# Logs
logs/
*.log
npm-debug.log*

# Temporary files
tmp/
temp/
*.tmp
```

## Anti-patterns

❌ ไม่มี .gitignore ในโปรเจกต์
❌ commit sensitive files ลง repository
❌ ใช้ .gitignore ผิดพลาด (ignore ไฟล์ที่จำเป็น)
❌ ไม่อัพเดท .gitignore เมื่อเพิ่ม dependencies ใหม่
