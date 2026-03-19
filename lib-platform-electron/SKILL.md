---
name: electron
description: Framework for building cross-platform desktop applications with web technologies. Use for creating native desktop apps from HTML, CSS, and JavaScript.
goal: Use Electron following best practices
outcome: Native desktop applications for Windows, macOS, and Linux
---

# Electron Library

## When to Use

Use this library when:

- Building cross-platform desktop applications
- Need native OS integration (menu, dock, notifications)
- Want to use web technologies for desktop apps
- Need access to local file system and native APIs
- Building standalone applications (VS Code, Slack, Discord style)
- Want single codebase for all desktop platforms

## Quick Start

1. Install: `npm install electron`
2. Create main process (main.js)
3. Create renderer process (HTML/JS)
4. Configure package.json with main entry
5. Start: `npx electron .`

## Summary Table

| Category | File | Purpose | Condition |
|---|---|---|---|
| **Knowledge** | [Core Concepts](knowledge/core-concept.md) | Electron fundamentals | Understanding the basics |
| **Knowledge** | [Best Practices](knowledge/best-practices.md) | Security and patterns | Building secure apps |
| **Rules** | [Setup](rules/1-setup.md) | Project initialization | New project setup |
| **Rules** | [Main Process](rules/2-main-process.md) | Main thread and windows | App lifecycle |
| **Rules** | [Renderer Process](rules/3-renderer-process.md) | UI and web content | Frontend code |
| **Rules** | [IPC](rules/4-ipc.md) | Inter-process communication | Main-renderer communication |
| **Rules** | [Security](rules/5-security.md) | Context isolation, CSP | Secure applications |
| **Rules** | [Packaging](rules/6-packaging.md) | Building and distribution | App distribution |
| **Rules** | [Auto Updater](rules/7-auto-updater.md) | Automatic updates | Maintenance |

## Core Features

- **Chromium**: Latest web platform features in desktop apps
- **Node.js**: Full Node.js API in main process
- **Native APIs**: OS integration (tray, notifications, menu)
- **Auto Updater**: Built-in update mechanism
- **Packaging**: Build for Windows, macOS, Linux
- **Security**: Context isolation and secure defaults

## Quick Reference

```bash
# Install
npm install electron --save-dev

# Start app
npx electron .

# Main process (main.js)
const { app, BrowserWindow } = require('electron')

app.whenReady().then(() => {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    }
  })
  win.loadFile('index.html')
})
```

## Verification

1. Check Electron installation
2. Verify main process runs
3. Test window creation
4. Validate IPC communication
5. Check security settings
6. Ensure build completes

## References

- [Electron Documentation](https://www.electronjs.org/)
- [Security Checklist](https://www.electronjs.org/docs/tutorial/security)
- [GitHub Repository](https://github.com/electron/electron)
