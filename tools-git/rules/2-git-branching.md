# Git Branching

## Description

ใช้งาน Git branches อย่างมีประสิทธิภาพสำหรับการพัฒนาแบบ parallel

## Examples

```bash
# สร้าง branch ใหม่
git checkout -b feature/user-authentication

# สลับ branch
git checkout main

# ดู branch ทั้งหมด
git branch -a

# รวม branch ด้วย merge
git merge feature/user-authentication

# รวม branch ด้วย rebase
git rebase main
```

## Anti-patterns

❌ ทำงานบน main branch โดยตรง
❌ สร้าง branch ชื่อไม่ชัดเจน
❌ ไม่ลบ feature branch หลัง merge เสร็จ
❌ ใช้ merge commits ใน pull request ที่ซับซ้อน
