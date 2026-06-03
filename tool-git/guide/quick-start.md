# Quick Start

## เริ่มต้นใช้งาน Git

### สร้าง Repository ใหม่

```bash
# สร้าง directory ใหม่
mkdir my-project
cd my-project

# Initialize Git repository
git init

# ตัวอย่าง output
# Initialized empty Git repository in /path/to/my-project/.git/
```

### Clone Repository ที่มีอยู่

```bash
# Clone จาก GitHub
git clone https://github.com/user/repository.git

# Clone และเปลี่ยนชื่อ folder
git clone https://github.com/user/repository.git my-folder
```

### การทำงานพื้นฐาน

```bash
# ดูสถานะไฟล์
git status

# เพิ่มไฟล์ไป staging area
git add filename.txt       # เพิ่มไฟล์เดียว
git add .                  # เพิ่มทุกไฟล์

# Commit การเปลี่ยนแปลง
git commit -m "Commit message"

# ดูประวัติ commit
git log

# ดูความแตกต่าง
git diff
```

### ทำงานกับ Remote

```bash
# เพิ่ม remote origin
git remote add origin https://github.com/user/repo.git

# Push ไป remote
git push -u origin main

# Pull จาก remote
git pull origin main

# ดู remote ที่เชื่อมต่อ
git remote -v
```

### การสร้างและใช้งาน Branch

```bash
# สร้าง branch ใหม่
git branch feature-name

# สลับไป branch ใหม่
git checkout feature-name

# สร้างและสลับไป branch ใหม่ (ย่อ)
git checkout -b feature-name

# รวม branch ไป main
git checkout main
git merge feature-name
```

## ขั้นตอนถัดไป

| Topic | Description |
|-------|-------------|
| [key-concept.md](key-concept.md) | เรียนรู้แนวคิดหลักของ Git |
| [features.md](features.md) | ดู features ทั้งหมดของ Git |
| [configuration.md](configuration.md) | ตั้งค่า Git ให้เหมาะกับคุณ |
| [best-practices.md](best-practices.md) | แนวทางปฏิบัติที่ดีในการใช้ Git |