---
description: การตั้งค่าและเตรียมความพร้อมสำหรับการเขียน Markdown
title: 1-setup
tags: [markdown, setup, configuration]
goals:
  - แนะนำการเตรียมความพร้อมก่อนเขียน Markdown
  - จัดเตรียมเครื่องมือและสภาพแวดล้อม
  - ตั้งค่ามาตรฐานการเขียน
---

## 1. Setup

### เตรียมความพร้อมก่อนเขียน Markdown

#### 1.1 เครื่องมือที่จำเป็น

| เครื่องมือ | วัตถุประสงค์ | แนะนำ |
|---------|-----------|--------|
| **Editor** | เขียนและแก้ไข Markdown | VS Code, Obsidian, Typora |
| **Preview** | ดูผลลัพธ์แบบ real-time | Markdown Preview Enhanced |
| **Linter** | ตรวจสอบความถูกต้อง | markdownlint, remark |
| **Validator** | ตรวจสอบ syntax | Markdown validator |

#### 1.2 ตั้งค่าสภาพแวดล้อม

```bash
# ติดตั้ง markdownlint สำหรับ VS Code
code --install-extension DavidAnson.vscode-markdownlint

# ติดตั้ง markdown preview
code --install-extension shd101wyy.markdown-preview-enhanced
```

#### 1.3 กำหนดมาตรฐานการเขียน

1. **ภาษา**: ไทยสำหรับ headings และ descriptions
2. **Code**: อังกฤษสำหรับ technical terms
3. **Syntax**: ใช้ CommonMark standard
4. **Extensions**: GitHub Flavored Markdown (GFM)

#### 1.4 โครงสร้างไฟล์

```
project/
├── docs/
│   ├── README.md
│   ├── guide.md
│   └── api.md
├── .markdownlint.json
└── .vscode/
    └── settings.json
```

#### 1.5 การตั้งค่า markdownlint

```json
{
  "default": true,
  "MD013": false,
  "MD033": false,
  "MD041": false
}
```

### การตรวจสอบความพร้อม

- [ ] ติดตั้ง editor และ extensions ครบ
- [ ] ตั้งค่า linting rules
- [ ] กำหนดมาตรฐานการเขียน
- [ ] สร้างโครงสร้างไฟล์
- [ ] ทดสอบการเขียนและ preview
