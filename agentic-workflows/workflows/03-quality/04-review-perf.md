---
title: Review Performance
description: ตรวจสอบ performance bottlenecks, bundle size, memory leaks และ optimization opportunities
auto_execution_mode: 3
file-patterns:
  - "**/workflows/review-perf.md"
---

## Prerequisites

- เข้าใจ web performance metrics (Core Web Vitals, Lighthouse scores)
- รู้จัก profiling tools (Chrome DevTools, React DevTools Profiler, cargo flamegraph)
- เข้าใจ bundle analysis และ code splitting strategies
- รู้จัก caching strategies และ resource optimization

## 3.1 Precondition

- มี project ที่สามารถ build และรันได้
- มีเครื่องมือวัด performance (Lighthouse, WebPageTest, หรือ built-in profilers)
- มีสิทธิ์อ่าน/เขียนไฟล์ใน project directory

## 3.2 Prepare

- ระบุ performance goals หรือ budgets (ตัวอย่าง: bundle < 200KB, FCP < 1.8s)
- ตรวจสอบว่ามี performance monitoring ใน production หรือไม่
- เตรียม tools สำหรับ profiling และ measurement
- อ่าน baseline metrics ปัจจุบัน (ถ้ามี)

## 3.3 Execute

1. วัด Core Web Vitals
   - ใช้ Lighthouse หรือ Chrome DevTools Performance tab
   - บันทึก LCP, INP, CLS scores
   - ระบุ elements ที่เป็น LCP candidates

2. วิเคราะห์ bundle size

   ```bash
   # JavaScript/TypeScript
   bunx webpack-bundle-analyzer dist/stats.json

   # หรือดูจาก build output
   bun run build
   ```

   - ระบุ largest bundles และ unused code
   - ตรวจสอบว่ามี code splitting หรือไม่
   - ดูว่ามี duplicate dependencies ใน bundle

3. ตรวจสอบ resource loading
   - ดู waterfall ใน Network tab
   - ระบุ render-blocking resources
   - ตรวจสอบ image optimization (WebP, lazy loading, responsive images)
   - ดูว่ามี unnecessary re-renders (React/Vue) หรือไม่

4. หา memory leaks
   - ใช้ Memory tab ใน Chrome DevTools
   - ทำ heap snapshots ก่อนและหลัง actions
   - ระบุ detached DOM nodes และ event listeners ที่ไม่ถูก cleanup

5. ตรวจสอบ database queries (ถ้ามี backend)
   - ดู slow query logs
   - ระบุ N+1 queries
   - ตรวจสอบว่ามี missing indexes

6. ทดสอบ under load (ถ้ามี backend/API)
   - ใช้ load testing tools (k6, Artillery)
   - ระบุ bottlenecks ใต้ concurrent users

## 3.4 Validate

- [ ] Core Web Vitals ผ่านเกณฑ์ (LCP < 2.5s, INP < 200ms, CLS < 0.1)
- [ ] Bundle size อยู่ใน budget ที่กำหนด
- [ ] ไม่มี unused code หรือ dead code ที่ถูก bundle
- [ ] Images ถูก optimize และใช้ lazy loading
- [ ] ไม่มี obvious memory leaks
- [ ] Database queries มี performance ที่ดี (ไม่มี slow queries)
- [ ] Critical resources ถูก preload/prefetch อย่างเหมาะสม

## 3.5 Verify

- [ ] ยืนยันว่า performance improvements ไม่ทำให้ functionality พัง
- [ ] ทดสอบบน devices หรือ network conditions ที่ต่างกัน
- [ ] รัน regression tests เพื่อยืนยันว่า optimizations ไม่พัง features
