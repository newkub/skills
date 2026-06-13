---
title: VS Code Extensions
description: Guidelines for creating VS Code extensions using TypeScript and VS Code API. Includes commands, window, workspace, editor, and UI APIs, along with publishing workflows for the VS Code Marketplace.
auto_execution_mode: 3
---

## Goal

สร้าง VS Code extensions ด้วย TypeScript และ VS Code API

## Scope

ใช้สำหรับการสร้าง extensions ที่ add commands, extend editor functionality, integrate กับ external tools และ create language support

## โครงสร้าง Directory

```
create-vscode-extensions/
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
│   └── create-vscode-extension.md
├── templates/
└── scripts/
```

## หมวดหมู่ไฟล์

| หมวดหมู่ | ไฟล์ | คำอธิบาย |
|-----------|------|-----------|
| Root Files | SKILL.md | Index file สำหรับ VS Code extensions skill |
| guide/ | architecture.md | Architecture ของ VS Code extensions |
| guide/ | best-practices.md | Best practices สำหรับ development |
| guide/ | configuration.md | Configuration และ package.json |
| references/ | api.md | API documentation |
| references/ | sitemap.md | Sitemap ของ documentation |
| references/ | website.md | เว็บไซต์และ resources |
| workflows/ | create-vscode-extension.md | Workflow สำหรับสร้าง extension |

## When to use

- ต้องการสร้าง extension สำหรับ VS Code
- ต้องการ add commands ให้ VS Code
- ต้องการ extend editor functionality
- ต้องการ integrate กับ external tools
- ต้องการ create language support

## Skills Related

- `/write-skills` - มาตรฐานการเขียน skills
- `lang-typescript`
- `lang-javascript`

## Execute

### 1. Create Project

```bash
bun create vscode-extension
```

### 2. Implement Features

ใช้ VS Code API สำหรับ implement features

### 3. Test

Test ใน VS Code ด้วย development mode

### 4. Publish

Publish ไปยัง VS Code Marketplace ด้วย vsce CLI

## Rules

### Development

- ใช้ TypeScript สำหรับ type safety
- Follow VS Code API guidelines
- ใช้ proper activation events

### Best Practices

- Implement error handling
- ใช้ proper contribution points
- Test บน multiple VS Code versions

## Expected Outcome

- VS Code extensions ที่ integrate กับ VS Code ecosystem
- Features ที่ responsive และ user-friendly
- Code ที่ follow VS Code best practices
