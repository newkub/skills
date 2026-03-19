# Configuration Reference

> รายการการตั้งค่าทั้งหมดใน Windsurf IDE

---

## ⚙️ Windsurf Settings

### Auto Execution

```json
{
  "windsurf.autoExecutionMode": 2
}
```

| ค่า | คำอธิบาย |
|-----|----------|
| 0 | Manual - ต้อง approve ทุก step |
| 1 | Semi-auto - บาง tool auto-run |
| 2 | Auto - auto-run ถ้า safe |
| 3 | Full auto - auto-run ทั้งหมด |

---

### Memory

```json
{
  "windsurf.enableMemory": true,
  "windsurf.memoryPath": ".windsurf/memories"
}
```

---

### Package Manager

```json
{
  "windsurf.preferredPackageManager": "bun"
}
```

| ค่า | คำอธิบาย |
|-----|----------|
| "bun" | ใช้ Bun (แนะนำ) |
| "npm" | ใช้ NPM |
| "yarn" | ใช้ Yarn |
| "pnpm" | ใช้ pnpm |

---

## 🌐 MCP Servers

### Enable/Disable

```json
{
  "mcp.servers": {
    "mcp1": { "enabled": true },
    "mcp2": { "enabled": true },
    "mcp3": { "enabled": false },
    "mcp5": { "enabled": true },
    "mcp6": { "enabled": true },
    "mcp8": { "enabled": true }
  }
}
```

---

## 📝 Editor

### Font

```json
{
  "editor.fontSize": 14,
  "editor.fontFamily": "JetBrains Mono, Fira Code",
  "editor.fontLigatures": true
}
```

### Formatting

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

### Tab

```json
{
  "editor.tabSize": 2,
  "editor.insertSpaces": true,
  "editor.detectIndentation": false
}
```

---

## 🎨 Theme

```json
{
  "workbench.colorTheme": "Windsurf Dark",
  "workbench.iconTheme": "vs-seti"
}
```

---

## 🔍 Search

```json
{
  "search.exclude": {
    "**/node_modules": true,
    "**/.git": true,
    "**/dist": true
  }
}
```

---

## 🧪 Terminal

```json
{
  "terminal.integrated.defaultProfile.windows": "PowerShell",
  "terminal.integrated.defaultProfile.osx": "zsh",
  "terminal.integrated.defaultProfile.linux": "bash",
  "terminal.integrated.fontSize": 14
}
```

---

## 📁 Files

```json
{
  "files.exclude": {
    "**/node_modules": true,
    "**/.git": true,
    "**/dist": true
  },
  "files.watcherExclude": {
    "**/node_modules/**": true
  }
}
```

---

## 🔒 Security

```json
{
  "security.workspace.trust.enabled": true,
  "security.workspace.trust.startupPrompt": "always"
}
```

---

## 🚀 Performance

```json
{
  "editor.cursorBlinking": "solid",
  "editor.renderWhitespace": "selection",
  "editor.minimap.enabled": false
}
```

---

## 📋 การตั้งค่า Global Rules

ไฟล์: `memories/global_rules.md`

```markdown
---
title: Global Rules
description: กฎหลัก
auto_execution_mode: 3
file-patterns:
  - "**/*.md"
---

## กฎ

- ใช้ bun เท่านั้น
- ตอบเป็นภาษาไทย
```

---

## 🎯 Environment Variables

```bash
# Windows
$env:WINDSURF_LOG_LEVEL = "debug"
$env:CASCADE_CONTEXT_LIMIT = "64000"

# macOS/Linux
export WINDSURF_LOG_LEVEL="debug"
export CASCADE_CONTEXT_LIMIT="64000"
```

---

## 🔗 Related

- [Setup Guide](./setup.md)
- [Glossary](./glossary.md)
