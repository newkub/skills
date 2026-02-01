# Git Workflow

## Description
ใช้ Git workflow ที่เหมาะสมกับขนาดทีมและประเภทโปรเจกต์

## Examples
```bash
# Git Flow - สำหรับโปรเจกต์ใหญ่
git checkout -b feature/user-authentication
# ทำงานบน feature branch
git checkout develop
git merge feature/user-authentication
git checkout main
git merge develop

# GitHub Flow - สำหรับโปรเจกต์เล็ก/continuous deployment
git checkout -b feature/new-feature
# ทำงานและสร้าง PR
# Review และ merge ไป main
```

## Anti-patterns
❌ ใช้ Git Flow กับโปรเจกต์เล็ก (overkill)
❌ ทำงานบน main branch โดยตรง
❌ ไม่มี workflow ที่ชัดเจน
❌ ผสมผสาน workflows หลายอันในทีมเดียว
