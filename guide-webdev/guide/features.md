# Features

## Overview

Features หลักของ modern web development ที่ควรรู้จัก

## Core Features

### 1. Progressive Web Apps (PWA)

| Feature | Description | Browser Support |
|---------|-------------|-----------------|
| **Service Workers** | Background sync, offline support | Chrome, Firefox, Safari |
| **Web App Manifest** | Install to home screen | Chrome, Firefox, Safari |
| **Push Notifications** | Re-engagement notifications | Chrome, Firefox, Safari |
| **IndexedDB** | Client-side storage | All modern browsers |

### 2. Web APIs

| API | Purpose | Use Case |
|-----|---------|----------|
| **Fetch/XMLHttpRequest** | Network requests | API calls |
| **WebSocket** | Real-time communication | Chat, live updates |
| **IndexedDB** | Large data storage | Offline-first apps |
| **WebRTC** | Peer-to-peer communication | Video calls |
| **Web Workers** | Background processing | Heavy computations |

### 3. Modern CSS Features

| Feature | Description | Browser Support |
|---------|-------------|-----------------|
| **CSS Grid** | Two-dimensional layout | All modern browsers |
| **Flexbox** | One-dimensional layout | All modern browsers |
| **Custom Properties** | CSS variables | All modern browsers |
| **Container Queries** | Responsive components | Chrome, Safari |
| ** :has() Selector** | Parent selector | Chrome 105+, Safari 15.4+ |

### 4. JavaScript Features

| Feature | Description | Browser Support |
|---------|-------------|-----------------|
| **ES Modules** | Native module system | All modern browsers |
| **Async/Await** | Async code patterns | All modern browsers |
| **Optional Chaining** | Safe property access | All modern browsers |
| **Top-level await** | Module-level async | Chrome 89+, Safari 15+ |
| **Private Fields** | True private properties | All modern browsers |

### 5. Build Tool Features

| Feature | Description | Tools |
|---------|-------------|-------|
| **Hot Module Replacement** | Live reload during dev | Vite, Webpack |
| **Code Splitting** | Lazy load chunks | Vite, Webpack, Rollup |
| **Tree Shaking** | Remove unused code | All bundlers |
| **Asset Optimization** | Image, font optimization | Vite, esbuild |

## Feature Comparison

| Feature Category | Traditional | Modern |
|-----------------|-------------|--------|
| **Modules** | IIFE, script tags | ES Modules |
| **Styling** | Global CSS | CSS Modules, CSS-in-JS |
| **State** | DOM references | Centralized stores |
| **Routing** | Server routes | Client-side routing |
| **Data Fetch** | jQuery $.ajax | Fetch API, TanStack Query |
| **Build** | Manual concatenation | Automated bundlers |

## Summary

- **PWA** - Web apps with native-like capabilities
- **Web APIs** - Powerful browser features
- **Modern CSS** - Layout and styling improvements
- **JavaScript Features** - Language improvements
- **Build Tools** - Developer experience enhancements
