---
name: create-vscode-extensions
description: "Guidelines for creating VS Code extensions using TypeScript and VS Code API. Includes commands,..."
triggers: ['user', 'model']
allowed-tools: ['read', 'edit', 'grep', 'glob', 'exec']
---
## Goal

สร้าง VS Code extensions ด้วย TypeScript และ VS Code API


## Scope

ใช้สำหรับการสร้าง extensions ที่ add commands, extend editor functionality, integrate กับ external tools และ create language support


## When To Use

- ต้องการสร้าง extension สำหรับ VS Code
- ต้องการ add commands ให้ VS Code
- ต้องการ extend editor functionality
- ต้องการ integrate กับ external tools
- ต้องการ create language support


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


## Related Skills

- `/write-devin-skills` - มาตรฐานการเขียน skills
- `lang-typescript`
- `lang-javascript`


## Expected Outcome

- VS Code extensions ที่ integrate กับ VS Code ecosystem
- Features ที่ responsive และ user-friendly
- Code ที่ follow VS Code best practices
