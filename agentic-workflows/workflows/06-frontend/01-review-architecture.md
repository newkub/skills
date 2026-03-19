---
title: Review Frontend Architecture
description: ตรวจสอบ frontend architecture, routing, state management, build configuration และ framework-specific patterns
auto_execution_mode: 3
file-patterns:
  - "**/workflows/06-frontend/*-review-architecture.md"
---

## Prerequisites

- เข้าใจ modern frontend frameworks (React, Vue, Angular, Svelte)
- รู้จัก frontend architecture patterns (SPA, SSR, SSG, islands)
- เข้าใจ bundlers และ build tools (Vite, Webpack, Rollup)
- รู้จัก module federation และ micro-frontends

## 3.1 Precondition

- มี frontend codebase ที่ต้องตรวจสอบ
- มีสิทธิ์อ่าน/เขียนไฟล์ใน project directory
- เข้าใจ build/deployment pipeline

## 3.2 Prepare

- รวบรวม architecture diagrams และ documentation
- ระบุ framework และ libraries ที่ใช้
- เตรียม checklist ตาม frontend best practices
- ทำความเข้าใจ performance requirements

## 3.3 Execute

1. ตรวจสอบ project structure
   - Directory organization (by feature vs by type)
   - File naming conventions
   - Module boundaries
   - Public API surfaces

2. ตรวจสอบ routing
   - Route definitions ที่ organized
   - Lazy loading/Code splitting
   - Route guards และ authentication
   - Deep linking support

3. ตรวจสอบ state management
   - Global state vs local state decision
   - State library usage (Redux, Pinia, Zustand)
   - State normalization
   - Side effect management

4. ตรวจสอบ build configuration
   - Bundler configuration (Vite, Webpack)
   - Code splitting strategy
   - Tree shaking optimization
   - Asset optimization (images, fonts)

5. ตรวจสอบ rendering strategy
   - SPA vs SSR vs SSG decision
   - Hydration configuration
   - Streaming SSR (ถ้ามี)
   - Islands architecture (ถ้ามี)

6. ตรวจสอบ styling approach
   - CSS methodology (BEM, CSS-in-JS, utility-first)
   - Design tokens integration
   - Responsive design implementation
   - Theme/theming system

7. ตรวจสอบ developer experience
   - Hot Module Replacement (HMR)
   - DevTools integration
   - TypeScript configuration
   - Linting และ formatting

## 3.4 Validate

- [ ] Project structure scalable และ maintainable
- [ ] Routing รองรับทุก use cases
- [ ] State management มี separation ที่เหมาะสม
- [ ] Build configuration optimized
- [ ] Rendering strategy เหมาะสมกับ requirements
- [ ] Styling approach consistent
- [ ] Developer experience smooth

## 3.5 Verify

- [ ] ยืนยันว่า build ผ่านทุก environment
- [ ] ทดสอบ code splitting และ lazy loading
- [ ] ตรวจสอบ bundle size และ performance
- [ ] ทดสอบ HMR และ development workflow
