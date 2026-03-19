---
name: capacitor
description: Cross-platform native runtime for web apps. Use for building iOS, Android, and Progressive Web Apps from web codebase.
goal: Use Capacitor following best practices
outcome: Native mobile apps from existing web code
---

# Capacitor Library

## When to Use

Use this library when:

- Converting web apps to mobile apps
- Need access to native device APIs
- Building iOS/Android apps with web technologies
- Want native performance with web development workflow
- Using Ionic Framework or standalone
- Need Progressive Web App capabilities

## Quick Start

1. Install: `npm install @capacitor/core @capacitor/cli`
2. Initialize: `npx cap init`
3. Add platforms: `npx cap add ios` / `npx cap add android`
4. Build web app: `npm run build`
5. Sync: `npx cap sync`
6. Open in IDE: `npx cap open ios`

## Summary Table

| Category | File | Purpose | Condition |
|---|---|---|---|
| **Knowledge** | Core Concepts | Capacitor fundamentals | Understanding the basics |
| **Knowledge** | Best Practices | Mobile app patterns | Building native apps |
| **Rules** | Setup | Project initialization | New project setup |
| **Rules** | Platforms | iOS, Android, PWA | Adding platforms |
| **Rules** | Plugins | Native APIs and plugins | Device features |
| **Rules** | Build and Sync | Web build and sync | Development workflow |
| **Rules** | Configuration | capacitor.config.ts | App settings |
| **Rules** | Publishing | App Store and Play Store | Distribution |

## Core Features

- **Native Runtime**: Run web apps as native apps
- **Native APIs**: Access camera, geolocation, files, etc.
- **Plugins**: Community and official plugins
- **Web-First**: Use standard web development
- **Live Reload**: Develop with hot reload
- **PWA Support**: Also works as web apps

## Quick Reference

```bash
# Install
npm install @capacitor/core @capacitor/cli

# Initialize
npx cap init

# Add platforms
npx cap add ios
npx cap add android

# Build and sync
npm run build
npx cap sync

# Open native IDE
npx cap open ios
```

## Verification

1. Check Capacitor installation
2. Verify platform setup
3. Test native build
4. Validate plugin functionality
5. Check live reload
6. Ensure app runs on device/simulator

## References

- [Capacitor Documentation](https://capacitorjs.com/)
- [Capacitor Plugins](https://capacitorjs.com/docs/plugins)
- [GitHub Repository](https://github.com/ionic-team/capacitor)
