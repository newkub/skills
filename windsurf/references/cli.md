# CLI Commands

## Purpose

CLI commands for Windsurf (Devin Desktop IDE)

## Overview

Windsurf Desktop IDE ไม่มี CLI แยกต่างหาก แต่ใช้ VS Code-compatible commands ผ่าน integrated terminal

## Common Commands

### VS Code Commands

**Open Command Palette**
```bash
Ctrl+Shift+P (Windows/Linux)
Cmd+Shift+P (macOS)
```

**Open File**
```bash
Ctrl+P (Windows/Linux)
Cmd+P (macOS)
```

**Toggle Terminal**
```bash
Ctrl+` (Windows/Linux)
Cmd+` (macOS)
```

### Git Commands

**Initialize Repository**
```bash
git init
```

**Clone Repository**
```bash
git clone <url>
```

**Commit Changes**
```bash
git add .
git commit -m "message"
```

**Push Changes**
```bash
git push
```

### Package Managers

**bun**
```bash
bun install
bun run dev
bun test
```

**yarn**
```bash
yarn install
yarn dev
yarn test
```

**bun**
```bash
bun install
bun run dev
bun test
```

## Cascade Commands

Cascade สามารถ execute commands ผ่าน terminal:

**Auto-executed Commands**
- Set auto-execution level in settings
- Level 0: Manual approval
- Level 1: Safe commands auto-run
- Level 2: Most commands auto-run
- Level 3: Full auto-execution

**Send to Cascade**
- Select terminal text
- Right-click > "Send to Cascade"
- Or use keyboard shortcut

## Summary

| Category | Commands |
|----------|----------|
| **VS Code** | Command Palette, Open File, Terminal |
| **Git** | init, clone, commit, push |
| **Package Managers** | bun, yarn, bun |
| **Cascade** | Auto-execution, Send to Cascade |