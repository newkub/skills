---
title: Review Client-Side Performance
description: ตรวจสอบ frontend performance, Core Web Vitals, bundle optimization, rendering performance และ memory management
auto_execution_mode: 3
file-patterns:
  - "**/workflows/06-frontend/*-review-performance.md"
---

## Prerequisites

- เข้าใจ Core Web Vitals (LCP, FID, CLS, INP)
- รู้จัก browser rendering pipeline
- เข้าใจ JavaScript performance characteristics
- รู้จัก Chrome DevTools Performance panel

## 3.1 Precondition

- มี frontend application ที่ deploy ได้หรือรัน locally
- มีสิทธิ์อ่าน/เขียนไฟล์ใน project directory
- มี access ไปยัง browser DevTools

## 3.2 Prepare

- รัน Lighthouse audit เบื้องต้น
- ระบุ performance bottlenecks ที่รู้จัก
- เตรียม checklist ตาม Core Web Vitals
- ทำความเข้าใจ user performance requirements

## 3.3 Execute

1. ตรวจสอบ Core Web Vitals
   - Largest Contentful Paint (LCP) < 2.5s
   - First Input Delay (FID/INP) < 100ms
   - Cumulative Layout Shift (CLS) < 0.1
   - Time to First Byte (TTFB) < 600ms

2. ตรวจสอบ bundle optimization
   - Code splitting (route-based, component-based)
   - Tree shaking effectiveness
   - Dynamic imports สำหรับ heavy components
   - Vendor bundle separation

3. ตรวจสอบ image optimization
   - Modern formats (WebP, AVIF)
   - Responsive images (srcset, sizes)
   - Lazy loading (native และ library)
   - Image CDN usage

4. ตรวจสอบ rendering performance
   - React.memo/Vue memoization ที่ appropriate
   - Virtual scrolling สำหรับ long lists
   - Avoid unnecessary re-renders
   - CSS containment usage

5. ตรวจสอบ JavaScript execution
   - Long tasks ที่ block main thread
   - Web Workers สำหรับ heavy computation
   - Idle-time operations (requestIdleCallback)
   - Third-party script impact

6. ตรวจสอบ network optimization
   - HTTP/2 or HTTP/3 usage
   - Resource hints (preload, prefetch)
   - Compression (Brotli, gzip)
   - Service Worker caching

7. ตรวจสอบ memory management
   - Memory leaks (event listeners, subscriptions)
   - Large object cleanup
   - Image/memory cleanup ใน unmount
   - Detached DOM nodes

## 3.4 Validate

- [ ] Core Web Vitals ผ่าน thresholds ทั้งหมด
- [ ] Bundle sizes optimized
- [ ] Images optimized และ lazy loaded
- [ ] Rendering performance smooth (60fps)
- [ ] JavaScript execution ไม่ block main thread
- [ ] Network requests optimized
- [ ] No memory leaks detected

## 3.5 Verify

- [ ] รัน Lighthouse และได้ score > 90
- [ ] ทดสอบบน throttled network และ low-end devices
- [ ] ใช้ Chrome DevTools Performance profiler
- [ ] ตรวจสอบ memory usage ระหว่าง navigation
