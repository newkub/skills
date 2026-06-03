# Key Concept

## What is GitHub Actions?

GitHub Actions เป็น CI/CD platform ที่ช่วย automate workflows ภายใน GitHub

## Core Concepts

| Concept | Description |
|---------|-------------|
| **Workflow** | ไฟล์ YAML ที่กำหนด automation |
| **Job** | กลุ่มของ steps ที่รันบน runner |
| **Step** | งานเดียวที่รัน command หรือ action |
| **Action** | reusable unit ของ code |
| **Runner** | server ที่รัน jobs |

## Core Features

| Feature | Description |
|---------|-------------|
| **CI/CD** | Continuous Integration และ Deployment |
| **Workflows** | กำหนด automation ผ่าน YAML |
| **Actions** | reusable components จาก Marketplace |
| **Matrix** | รันหลาย configurations พร้อมกัน |
| **Secrets** | จัดการ sensitive data |

## When to Use

- เมื่อต้องการ automated testing
- เมื่อต้องการ automated deployment
- เมื่อต้องการ CI/CD pipeline
- เมื่อใช้ GitHub เป็น repository host

## Workflow File Location

```
.github/
└── workflows/
    └── main.yml
```