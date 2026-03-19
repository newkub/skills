---
title: Review Data Flow
description: ตรวจสอบ data flow, state management, data consistency และ data transformation patterns
auto_execution_mode: 3
file-patterns:
  - "**/workflows/04-design/*-review-dataflow.md"
---

## Prerequisites

- เข้าใจ unidirectional data flow (Flux, Redux, Vuex)
- รู้จัก state management patterns
- เข้าใจ reactive programming และ streams
- รู้จัก data normalization และ denormalization

## 3.1 Precondition

- มี application ที่มี state management หรือ data flow
- มีสิทธิ์อ่าน/เขียนไฟล์ใน project directory
- เข้าใจ architecture ของ application

## 3.2 Prepare

- วาด data flow diagram หรือ state tree
- ระบุ data sources (API, local storage, real-time updates)
- เตรียม checklist ตาม data flow best practices
- ทำความเข้าใจ state management library ที่ใช้

## 3.3 Execute

1. ตรวจสอบ unidirectional data flow
   - Data flow เป็น one-way (predictable)
   - Avoid two-way binding ที่ complex
   - Actions/mutations ที่ well-defined
   - State changes ผ่าน centralized mechanism

2. ตรวจสอบ state structure
   - Normalized state (flat structure)
   - Avoid nested state ที่ลึกเกินไป
   - Selectors สำหรับ derived data
   - State ที่ minimal และ necessary

3. ตรวจสอบ data transformation
   - Transform logic แยกจาก components
   - Pure functions สำหรับ transformations
   - Memoization สำหรับ expensive calculations
   - Avoid mutations ใน transforms

4. ตรวจสอบ async data handling
   - Loading states ที่ consistent
   - Error handling ใน data fetching
   - Caching strategies
   - Optimistic updates (ถ้ามี)

5. ตรวจสอบ data synchronization
   - Real-time updates handling
   - Conflict resolution strategies
   - Offline support (ถ้ามี)
   - Data consistency ระหว่าง clients

6. ตรวจสอบ side effects
   - Side effect management (middleware, sagas, thunks)
   - Cleanup สำหรับ subscriptions
   - Debounce/throttle สำหรับ frequent updates
   - Race condition prevention

7. ตรวจสอบ debugging/observability
   - State changes ที่ traceable
   - Time-travel debugging support
   - State inspection tools
   - Logging สำหรับ data operations

## 3.4 Validate

- [ ] Data flow เป็น unidirectional และ predictable
- [ ] State structure normalized และ efficient
- [ ] Data transformations เป็น pure functions
- [ ] Async operations มี loading/error states
- [ ] Side effects ถูกจัดการ isolated
- [ ] Data synchronization มี strategy ที่ชัดเจน
- [ ] Debugging/observability ครอบคลุม

## 3.5 Verify

- [ ] ยืนยันว่า state changes ทำให้ UI update ถูกต้อง
- [ ] ทดสอบ complex user flows ที่มีหลาย state changes
- [ ] ตรวจสอบ performance กับ large state trees
- [ ] ทดสอบ race conditions ใน async operations
