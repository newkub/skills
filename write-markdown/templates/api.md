---
description: Template สำหรับ API documentation
title: '{{API_NAME}}'
tags: [api, '{{CATEGORY}}', documentation]
goals:
  - '{{GOAL_1}}'
  - '{{GOAL_2}}'
---

## {{API_NAME}}

> 🔌 **API Documentation**

**{{ORG_NAME}}** / **api** / `{{FILENAME}}`

Base URL: `{{BASE_URL}}`

## โครงสร้าง API Documentation

| Section | รายละเอียด |
|---------|-----------|
| Overview | ภาพรวม API |
| Authentication | วิธีการ authenticate |
| Endpoints | รายการ endpoints |
| Error Handling | การจัดการ errors |

## Rules

### API Structure

- ต้องมี Base URL ระบุชัดเจน
- แต่ละ endpoint ต้องมี: Method, Path, Parameters, Response
- ใช้ HTTP methods ที่ถูกต้อง (GET, POST, PUT, PATCH, DELETE)
- ระบุ Authentication method

### Naming Conventions

| Element | Format | Example |
|---------|--------|---------|
| Endpoint | kebab-case | `/user-profiles` |
| Parameters | camelCase | `userId` |
| Response keys | camelCase | `createdAt` |
| Error codes | UPPER_SNAKE | `INVALID_REQUEST` |

### Required Sections

- Overview/Description
- Authentication
- Endpoints (grouped by resource)
- Error Handling
- Rate Limiting

## Template

### Overview

{{API_OVERVIEW}}

### Authentication

**Type:** {{AUTH_TYPE}}

```text
{{AUTH_EXAMPLE}}
```

### Endpoints

#### {{RESOURCE_1}}

**{{METHOD_1}} {{ENDPOINT_1}}**

{{ENDPOINT_DESC_1}}

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| {{PARAM_1}} | {{TYPE_1}} | ✅ | {{PARAM_DESC_1}} |
| {{PARAM_2}} | {{TYPE_2}} | ❌ | {{PARAM_DESC_2}} |

**Request Body:**

```json
{
  "{{REQ_KEY_1}}": "{{REQ_VAL_1}}",
  "{{REQ_KEY_2}}": "{{REQ_VAL_2}}"
}
```

**Response:**

```json
{
  "{{RES_KEY_1}}": "{{RES_VAL_1}}",
  "{{RES_KEY_2}}": "{{RES_VAL_2}}"
}
```

**Status Codes:**

| Code | Description |
|------|-------------|
| {{CODE_1}} | {{CODE_DESC_1}} |
| {{CODE_2}} | {{CODE_DESC_2}} |

### Error Handling

| Error | Code | Description |
|-------|------|-------------|
| {{ERROR_1}} | {{ERR_CODE_1}} | {{ERR_DESC_1}} |
| {{ERROR_2}} | {{ERR_CODE_2}} | {{ERR_DESC_2}} |

### Rate Limiting

- Limit: {{RATE_LIMIT}} requests per {{TIME_WINDOW}}
- Headers:
  - `X-RateLimit-Limit`: {{HEADER_LIMIT}}
  - `X-RateLimit-Remaining`: {{HEADER_REMAINING}}

## Example

### Example: Users API

```markdown
# Users API

> 🔌 **REST API สำหรับจัดการ users**

**acme-corp** / **api** / `users.md`

Base URL: `https://api.example.com/v1`

## Authentication

**Type:** Bearer Token

```text
Authorization: Bearer <token>
```
```


```text

```text

## Endpoints

### GET /users

ดึงรายการ users

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| limit | number | ❌ | จำนวน records (default: 10) |
| offset | number | ❌ | เริ่มจาก index |

**Response:**

```json
{
  "users": [
    { "id": 1, "name": "John", "email": "john@example.com" }
  ],
  "total": 100
}
```

### POST /users

สร้าง user ใหม่

**Request Body:**

```json
{
  "name": "John Doe",
  "email": "john@example.com"
}
```

**Response:**

```json
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com",
  "createdAt": "2024-01-15T10:00:00Z"
}
```
