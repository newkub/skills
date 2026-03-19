---
title: Review State Management
description: ตรวจสอบ state management patterns, Redux, Zustand, Pinia, และ global state
auto_execution_mode: 3
file-patterns:
  - "**/workflows/04-design/*-review-state.md"
---

## Prerequisites

- เข้าใจ state management concepts (local, global, server)
- รู้จัก state management libraries (Redux, Zustand, Pinia, MobX)
- เข้าใจ state immutability และ normalized state
- รู้จัก state selectors และ memoization

## 3.1 Precondition

- มี state management code
- มี state definitions หรือ interfaces
- มีสิทธิ์อ่าน/เขียนไฟล์ใน project directory

## 3.2 Prepare

- อ่าน state management implementation
- ระบุ libraries ที่ใช้
- เตรียม checklist ตาม state management best practices
- ทำความเข้าใจ data flow

## 3.3 Execute

1. ตรวจสอบ state structure
   - Normalized state shape
   - Flat state structure
   - Entity IDs instead of nested objects
   - State separation (domain-based)

2. ตรวจสอบ immutability
   - Immutable updates
   - ไม่ mutate state directly
   - Immer หรือ spread operators
   - Time-travel debugging support

3. ตรวจสอบ selectors
   - Memoized selectors (reselect)
   - Computed values
   - Selector composition
   - ไม่มี redundant calculations

4. ตรวจสอบ actions/reducers
   - Action types ที่ descriptive
   - Action creators
   - Reducer purity
   - Side effect handling (middleware)

5. ตรวจสอบ side effects
   - Thunks, sagas, หรือ observables
   - Async action handling
   - Error handling ใน side effects
   - Cancellation logic

6. ตรวจสอบ state persistence
   - LocalStorage/SessionStorage ใช้ถูกต้อง
   - Serialization/deserialization
   - Migration strategies
   - Sensitive data ไม่ persist

7. ตรวจสอบ performance
   - Unnecessary re-renders
   - State splitting
   - Lazy loading
   - Code splitting

8. ตรวจสอบ debugging
   - DevTools integration
   - State inspection
   - Action logging
   - Time-travel debugging

## 3.4 Validate

- [ ] State structure normalized
- [ ] Immutable updates only
- [ ] Selectors memoized
- [ ] Actions descriptive
- [ ] Side effects handled properly
- [ ] ไม่มี sensitive data ใน persistent storage
- [ ] Performance optimized (no unnecessary renders)
- [ ] DevTools ทำงานได้

## 3.5 Verify

- [ ] State updates ทำงานถูกต้อง
- [ ] Selectors return correct values
- [ ] Side effects execute ตามที่คาดหวัง
- [ ] Time-travel debugging ทำงาน
