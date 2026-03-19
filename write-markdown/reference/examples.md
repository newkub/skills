---
description: ตัวอย่างการใช้งาน Markdown ที่เลือกสรรแล้ว
title: examples
tags: [markdown, examples, patterns, showcase]
goals:
  - รวบรวมตัวอย่างการใช้งาน Markdown ที่ดีที่สุด
  - แสดง patterns ที่ใช้จริงใน production
  - ให้ inspiration สำหรับการเขียนเอกสาร
---

## Examples

### ตัวอย่างการใช้งาน Markdown ที่ดีที่สุด

#### 1. ตัวอย่างเอกสารประเภทต่างๆ

##### 1.1 README.md สำหรับ Project

```markdown
# Project Name

> คำอธิบายโปรเจกต์แบบกระชับ

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)](https://github.com/user/repo)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Version](https://img.shields.io/badge/version-1.0.0-orange.svg)](package.json)

## Features

- ✨ Feature 1: คำอธิบาย feature แรก
- 🚀 Feature 2: คำอธิบาย feature ที่สอง
- 💡 Feature 3: คำอธิบาย feature ที่สาม

## Installation

```bash
# ติดตั้งด้วย npm
npm install project-name

# ติดตั้งด้วย yarn
yarn add project-name
```

## Quick Start

```javascript
import { Project } from 'project-name';

const project = new Project();
project.run();
```

## Documentation

- [API Reference](./docs/api.md)
- [User Guide](./docs/guide.md)
- [Examples](./examples/)

## Contributing

ดู [CONTRIBUTING.md](./CONTRIBUTING.md) สำหรับข้อมูลเพิ่มเติม

## License

MIT © [Your Name](https://github.com/username)
```

##### 1.2 API Documentation

```markdown
# API Reference

## Authentication

ทุก requests ต้องมี API key:

```http
Authorization: Bearer YOUR_API_KEY
```

## Endpoints

### GET /users

ดึงข้อมูลผู้ใช้ทั้งหมด

#### Request

```http
GET /api/v1/users?page=1&limit=10
```

#### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | หน้าที่ต้องการ (default: 1) |
| `limit` | integer | No | จำนวนผลลัพธ์ต่อหน้า (default: 10) |

#### Response

```json
{
  "data": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 100
  }
}
```

#### Error Responses

| Status Code | Description |
|-------------|-------------|
| 400 | Bad Request |
| 401 | Unauthorized |
| 404 | Not Found |
| 500 | Internal Server Error |
```

##### 1.3 User Guide

```markdown
# User Guide

## บทนำ

ยินดีต้อนรับสู่ User Guide สำหรับ [Product Name]!

## บทที่ 1: เริ่มต้นใช้งาน

### 1.1 การสมัครสมาชิก

1. ไปที่ [หน้าสมัครสมาชิก](https://example.com/signup)
2. กรอกข้อมูลส่วนตัว
3. ยืนยันอีเมล
4. เข้าสู่ระบบ

### 1.2 การตั้งค่าบัญชี

หลังจากเข้าสู่ระบบแล้ว คุณควร:

- [ ] อัพโหลดรูปโปรไฟล์
- [ ] ตั้งค่าข้อมูลส่วนตัว
- [ ] เลือก preferences
- [ ] ตั้งค่าความปลอดภัย

## บทที่ 2: ฟีเจอร์หลัก

### 2.1 Dashboard

Dashboard เป็นหน้าหลักที่คุณสามารถ:

- ดูภาพรวมข้อมูล
- เข้าถึงฟีเจอร์ต่างๆ
- ตรวจสอบ notifications
- จัดการ settings

![Dashboard Screenshot](./images/dashboard.png)

### 2.2 การสร้างโปรเจกต์ใหม่

1. คลิกปุ่ม "สร้างใหม่"
2. เลือกประเภทโปรเจกต์
3. กรอกข้อมูลที่จำเป็น
4. บันทึกโปรเจกต์

> 💡 **Tip:** คุณสามารถใช้ templates เพื่อเร่งความเร็วในการสร้างโปรเจกต์

## บทที่ 3: Advanced Features

### 3.1 Automation

สร้าง automated workflows สำหรับ:

- Data processing
- Report generation
- Notifications
- Data backup

### 3.2 Integrations

เชื่อมต่อกับ services อื่นๆ:

- Slack
- Google Drive
- GitHub
- Zapier

## การแก้ไขปัญหา

### ปัญหาที่พบบ่อย

| ปัญหา | สาเหตุ | วิธีแก้ไข |
|--------|--------|------------|
| Login ไม่ได้ | รหัสผ่านผิด | รีเซ็ตรหัสผ่าน |
| โหลดช้า | Internet ช้า | ตรวจสอบการเชื่อมต่อ |
| Data ไม่แสดง | Permission issue | ตรวจสอบสิทธิ์การเข้าถึง |

### ติดต่อ Support

หากยังแก้ไขปัญหาไม่ได้:

- 📧 Email: support@example.com
- 💬 Chat: [Live Chat](https://example.com/chat)
- 📞 Phone: +66-2-123-4567
```

#### 2. ตัวอย่าง Patterns พิเศษ

##### 2.1 การใช้ Tables ซับซ้อน

```markdown
| Feature | Basic | Pro | Enterprise |
|---------|-------|-----|-------------|
| **Users** | 5 | 50 | Unlimited |
| **Storage** | 1 GB | 100 GB | 1 TB |
| **API Calls** | 1,000/month | 100,000/month | Unlimited |
| **Support** | Email | Email + Chat | 24/7 Phone |
| **SLA** | 99.5% | 99.9% | 99.99% |
| **Price** | Free | $29/month | Custom |
```

##### 2.2 การใช้ Task Lists

```markdown
## Project Checklist

### Phase 1: Planning
- [x] Define requirements
- [x] Create wireframes
- [ ] Get approval
- [ ] Set up repository

### Phase 2: Development
- [ ] Set up development environment
- [ ] Implement core features
- [ ] Write tests
- [ ] Code review

### Phase 3: Deployment
- [ ] Configure production
- [ ] Deploy to staging
- [ ] User acceptance testing
- [ ] Deploy to production
```

##### 2.3 การใช้ Blockquotes แบบซับซ้อน

```markdown
> 💡 **Important Tip**
> 
> Always test your changes in a staging environment before deploying to production.
> 
> > ⚠️ **Warning**
> > 
> > Skipping testing can lead to data loss and downtime.
> > 
> > > 🔧 **Solution**
> > > 
> > > Use our automated testing pipeline to ensure quality.

---

> 📚 **Documentation**
> 
> For more information, see:
> - [API Reference](./api.md)
> - [Best Practices](./best-practices.md)
> - [Troubleshooting](./troubleshooting.md)
```

##### 2.4 การใช้ Code Blocks หลายภาษา

```javascript
// JavaScript Example
function calculateTotal(items) {
  return items.reduce((sum, item) => sum + item.price, 0);
}
```

```python
# Python Example
def calculate_total(items):
    return sum(item['price'] for item in items)
```

```sql
-- SQL Example
SELECT SUM(price) as total
FROM items
WHERE status = 'active';
```

#### 3. ตัวอย่าง Templates

##### 3.1 Meeting Notes Template

```markdown
# Meeting Notes - [Date]

## Attendees
- [Name 1] - [Role]
- [Name 2] - [Role]
- [Name 3] - [Role]

## Agenda
1. Review previous action items
2. [Topic 1]
3. [Topic 2]
4. Action items

## Discussion

### [Topic 1]
- Key points:
- Decisions:
- Questions:

### [Topic 2]
- Key points:
- Decisions:
- Questions:

## Action Items

| Task | Owner | Due Date | Status |
|------|-------|----------|--------|
| [Task 1] | [Name] | [Date] | Open |
| [Task 2] | [Name] | [Date] | Open |

## Next Meeting
- Date: [Date]
- Time: [Time]
- Location: [Location/Link]
```

##### 3.2 Bug Report Template

```markdown
# Bug Report

## Summary
[Brief description of the bug]

## Environment
- OS: [e.g., Windows 10, macOS 12.0]
- Browser: [e.g., Chrome 96, Firefox 95]
- Version: [App version]

## Steps to Reproduce
1. [Step 1]
2. [Step 2]
3. [Step 3]

## Expected Behavior
[What should happen]

## Actual Behavior
[What actually happens]

## Screenshots
[If applicable, add screenshots]

## Additional Information
[Any other relevant information]
```

#### 4. Best Practices จากตัวอย่าง

1. **ใช้ consistent formatting**
2. **เพิ่ม context และ explanations**
3. **ใช้ visual elements อย่างเหมาะสม**
4. **จัดรูปแบบข้อมูลให้อ่านง่าย**
5. **เพิ่ม navigation elements**
6. **ใช้ semantic structure**

### Resources เพิ่มเติม

- `../examples/` - ตัวอย่าง 200+ รายการ
- `../templates/` - templates สำหรับใช้งาน
- `../reference/external-links.md` - แหล่งข้อมูลภายนอก
- [CommonMark Spec](https://commonmark.org/) - ข้อมูลจากแหล่งทางการ
- [GitHub Flavored Markdown](https://github.github.com/gfm/) - GFM documentation
