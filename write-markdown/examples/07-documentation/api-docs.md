---
description: เอกสาร API ใน Markdown
title: api-docs
tags: [markdown, api, documentation]
goals:
  - แสดงตัวอย่างการเขียนเอกสาร API
  - สอนวิธีสร้าง endpoint documentation
---

## Endpoint Documentation

````markdown
### GET /api/users

รับรายชื่อผู้ใช้ทั้งหมด

**Query Parameters:**

- `page` (number): หน้าที่ต้องการ (default: 1)
- `limit` (number): จำนวนรายการต่อหน้า (default: 10)

**Response:**

```json
{
  "users": [...],
  "pagination": { "page": 1, "limit": 10, "total": 100 }
}
```

**Example:**

```bash
curl "https://api.example.com/users?page=1&limit=10"
```
````

## Authentication

````markdown
## Authentication

ทุก requests ต้องมี API token ใน header:

```http
Authorization: Bearer <your-api-token>
```
````
