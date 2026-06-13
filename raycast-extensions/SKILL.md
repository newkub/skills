---
title: Raycast Extensions
description: Guidelines for creating Raycast extensions using React, TypeScript, and Node.js. Includes commands, views, lists, forms, actions, hooks, and publishing workflows for the Raycast productivity tool.
auto_execution_mode: 3
---

## Goal

สร้าง Raycast extensions ด้วย React, TypeScript และ Node.js

## Scope

ใช้สำหรับการสร้าง extensions ที่ add commands, integrate กับ external APIs, automate workflows และ create custom UI components

## โครงสร้าง Directory

```
create-raycast-extensions/
├── SKILL.md
├── guide/
│   ├── architecture.md
│   ├── best-practices.md
│   ├── configuration.md
│   └── ...
├── key-concepts/
├── principles/
├── references/
│   ├── api.md
│   ├── sitemap.md
│   └── website.md
├── workflows/
│   └── create-raycast-extension.md
├── templates/
└── scripts/
```

## หมวดหมู่ไฟล์

| หมวดหมู่ | ไฟล์ | คำอธิบาย |
|-----------|------|-----------|
| Root Files | SKILL.md | Index file สำหรับ Raycast extensions skill |
| guide/ | architecture.md | Architecture ของ Raycast extensions |
| guide/ | best-practices.md | Best practices สำหรับ development |
| guide/ | configuration.md | Configuration และ package.json |
| references/ | api.md | API documentation |
| references/ | sitemap.md | Sitemap ของ documentation |
| references/ | website.md | เว็บไซต์และ resources |
| workflows/ | create-raycast-extension.md | Workflow สำหรับสร้าง extension |

## When to use

- ต้องการสร้าง extension สำหรับ Raycast
- ต้องการ add commands ให้ Raycast
- ต้องการ integrate กับ external APIs
- ต้องการ automate workflows
- ต้องการ create custom UI components

## Skills Related

- `/write-skills` - มาตรฐานการเขียน skills
- `lang-typescript`
- `lang-javascript`
- `lib-react`

## Execute

### 1. Create Project

```bash
bun create raycast-extension
```

### 2. Develop Commands

Implement commands ด้วย React components

### 3. Test Locally

Test ใน Raycast ด้วย development mode

### 4. Publish

Publish ไปยัง Raycast Store

## Rules

### Development

- ใช้ React สำหรับ UI components
- ใช้ TypeScript สำหรับ type safety
- Follow Raycast API guidelines

### Best Practices

- ใช้ hooks สำหรับ state management
- Implement error handling
- Test commands อย่างเหมาะสม

## Expected Outcome

- Raycast extensions ที่ integrate กับ Raycast ecosystem
- Commands ที่ responsive และ user-friendly
- Code ที่ follow Raycast best practices

## References

- [Raycast API Docs](https://developers.raycast.com)
- [Raycast Extensions](https://www.raycast.com/store)
- [Raycast GitHub](https://github.com/raycast)
- [Raycast CLI](https://developers.raycast.com/cli)
