# How It Works

## Overview

อธิบายการทำงานภายในของ web development และ browser rendering

## Browser Rendering Pipeline

```
┌────────────┐    ┌────────────┐    ┌────────────┐    ┌────────────┐
│   HTML     │───▶│   Parse    │───▶│    DOM     │───▶│   Layout   │
│  (source)  │    │    HTML    │    │   Tree     │    │    Tree    │
└────────────┘    └────────────┘    └────────────┘    └────────────┘
                                                     │
                    ┌────────────┐    ┌────────────┐  │
                    │   Paint    │◀───│   Render   │◀─┘
                    │   Tree     │    │    Tree    │
                    └────────────┘    └────────────┘
                         │
                    ┌────────────┐
                    │  Display   │
                    │  (Pixels)  │
                    └────────────┘
```

## JavaScript Execution Model

```
┌──────────────────────────────────────────────────────┐
│              JavaScript Engine (V8/Spidermonkey)       │
├──────────────────────────────────────────────────────┤
│  ┌─────────────┐    ┌─────────────┐    ┌───────────┐ │
│  │   Parser    │───▶│  Compiler   │───▶│  bytecode │ │
│  └─────────────┘    └─────────────┘    └───────────┘ │
│                                              │        │
└──────────────────────────────────────────────▼────────┘
                       ┌────────────────────────────────┐
                       │      Event Loop                 │
                       │  ┌──────────────────────────┐  │
                       │  │    Call Stack             │  │
                       │  ├──────────────────────────┤  │
                       │  │    Task Queue            │  │
                       │  ├──────────────────────────┤  │
                       │  │    Microtask Queue       │  │
                       │  └──────────────────────────┘  │
                       └────────────────────────────────┘
```

## Critical Rendering Path

1. **Parse HTML** → Build DOM tree
2. **Parse CSS** → Build CSSOM tree
3. **Render Tree** → Combine DOM + CSSOM
4. **Layout** → Calculate positions
5. **Paint** → Draw pixels to screen

### Optimization Points

| Step | Optimization | Technique |
|------|-------------|-----------|
| **Parse** | Reduce HTML/CSS size | Minify, compress |
| **DOM** | Simplify structure | Semantic HTML |
| **Layout** | Avoid layout thrashing | Batch reads/writes |
| **Paint** | Use GPU acceleration | transform, opacity |

## Frontend Build Process

```
Source Code ──▶ Linting ──▶ Type Checking ──▶ Bundling ──▶ Minification ──▶ Output
   (.ts/.tsx)    (ESLint)    (TypeScript)     (Vite)      (Terser)       (dist/)
```

| Stage | Purpose | Tools |
|-------|---------|-------|
| **Linting** | Code quality | ESLint, Prettier |
| **Type Check** | Catch type errors | TypeScript |
| **Bundling** | Combine modules | Vite, Webpack, Rollup |
| **Minify** | Reduce size | Terser, esbuild |
| **Optimize** | Performance | Tree shaking, code splitting |

## Request-Response Cycle

```
┌────────┐              ┌─────────┐              ┌────────┐
│ Client │───Request──▶│ Server  │───Response──▶│ Client │
│(Browser│◀───HTML─────│  (API)  │◀───Data─────│(Browser│
└────────┘              └─────────┘              └────────┘
      │                                               │
      │──▶ Parse HTML ──▶ Fetch Resources ──▶ Render │
```

| Phase | Description |
|-------|-------------|
| **Request** | Browser sends HTTP request |
| **Processing** | Server processes request |
| **Response** | Server returns HTML/JSON |
| **Rendering** | Browser parses and renders |

## Summary

| Component | How It Works |
|-----------|--------------|
| **Browser Rendering** | Parse → DOM → Layout → Paint |
| **JavaScript Engine** | Parse → Compile → Execute |
| **Critical Path** | 5 ขั้นตอนหลัก |
| **Build Process** | Lint → Type → Bundle → Minify |
