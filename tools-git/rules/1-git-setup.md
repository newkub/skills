# Git Setup

## Description
ติดตั้งและตั้งค่า Git ให้พร้อมใช้งานบนเครื่อง

## Examples
```bash
# ตรวจสอบว่าติดตั้ง Git แล้ว
git --version

# ตั้งค่าผู้ใช้งาน
git config --global user.name "John Doe"
git config --global user.email "john@example.com"

# ตั้งค่า default editor
git config --global core.editor "code --wait"

# ตั้งค่า default branch name
git config --global init.defaultBranch main
```

## Anti-patterns
❌ ไม่ตั้งค่า user.name และ user.email
❌ ใช้ editor ที่ไม่คุ้นเคย
❌ ใช้ branch name เป็น master ในโปรเจกต์ใหม่
