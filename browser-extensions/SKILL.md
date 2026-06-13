---
title: Browser Extensions
description: Guidelines for creating browser extensions for Chrome, Firefox, Edge, and other browsers following Manifest V3 standard. Includes architecture, permissions, background scripts, content scripts, and publishing workflows.
auto_execution_mode: 3
---

## Goal

สร้าง browser extensions สำหรับ Chrome, Firefox, Edge และ browsers อื่นๆ ตาม Manifest V3 standard

## Scope

ใช้สำหรับการสร้าง extensions ที่ modify web pages, add functionality, integrate กับ web services และ automate browser tasks

## โครงสร้าง Directory

```
create-browser-extensions/
├── SKILL.md
├── guide/
│   ├── architecture.md
│   ├── best-practices.md
│   ├── configuration.md
│   └── ...
├── key-concepts/
├── principles/
├── references/
│   ├── configuration.md
│   ├── sitemap.md
│   └── website.md
├── workflows/
│   └── create-browser-extension.md
├── templates/
└── scripts/
```

## หมวดหมู่ไฟล์

| หมวดหมู่ | ไฟล์ | คำอธิบาย |
|-----------|------|-----------|
| Root Files | SKILL.md | Index file สำหรับ browser extensions skill |
| guide/ | architecture.md | Architecture ของ browser extensions |
| guide/ | best-practices.md | Best practices สำหรับ development |
| guide/ | configuration.md | Configuration และ manifest.json |
| references/ | configuration.md | Configuration reference |
| references/ | sitemap.md | Sitemap ของ documentation |
| references/ | website.md | เว็บไซต์และ resources |
| workflows/ | create-browser-extension.md | Workflow สำหรับสร้าง extension |

## When to use

- ต้องการสร้าง extension สำหรับ Chrome, Firefox, Edge
- ต้องการ modify web pages ด้วย content scripts
- ต้องการ add functionality ให้ browser
- ต้องการ integrate กับ web services
- ต้องการ automate browser tasks

## Skills Related

- `/write-skills` - มาตรฐานการเขียน skills
- `lang-javascript`
- `lang-typescript`
- `tool-wxt`

## Execute

### 1. Create Project

ใช้ `WXT` หรือ scaffolding tools

### 2. Configure Manifest

ตั้งค่า `manifest.json` ตาม Manifest V3

### 3. Implement Features

- Background scripts
- Content scripts
- Popup UI

### 4. Test

Test บน browsers ที่ต้องการ support

## Rules

### Manifest V3

- ใช้ Manifest V3 standard
- ใช้ service workers แทน background pages
- Configure permissions อย่างเหมาะสม

### Security

- ไม่ hardcode API keys
- ใช้ content security policy
- Validate user inputs

### Best Practices

- ใช้ TypeScript สำหรับ type safety
- Test บนหลาย browsers
- Follow browser extension guidelines

## Expected Outcome

- Browser extensions ที่ compatible กับ multiple browsers
- Code ที่ follow Manifest V3 standard
- Security ที่เหมาะสม

## References

- [Chrome Extensions Docs](https://developer.chrome.com/docs/extensions)
- [Firefox Add-ons Docs](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons)
- [MDN Web Extensions](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions)
- [Chrome Web Store](https://chrome.google.com/webstore)
- [Firefox Add-ons](https://addons.mozilla.org)
